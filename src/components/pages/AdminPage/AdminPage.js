import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';

import { forms, menuItems } from './constants';
import '../../molecules/Tabs';
import '../../molecules/Preloader';
import '../../organisms/BlogForm';
import '../../organisms/CategoryForm';
import '../../organisms/ProductForm';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { firebaseStorageService } from '../../../services/FirebaseStorageService';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setActiveTab = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  onChangeTab = ({ detail }) => {
    this.setActiveTab(detail.activeItem);
  };

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
  };

  createBlog = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploadFile(data.preview, 'posts')
      .then((snapshot) => {
        firebaseStorageService.downloadURL(snapshot.ref).then((url) => {
          databaseService.createDocument('posts', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploadFile(data.preview, 'products')
      .then((snapshot) => {
        firebaseStorageService.downloadURL(snapshot.ref).then((url) => {
          databaseService.createDocument('products', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.on(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.on(APP_EVENTS.createProduct, this.createProduct);
    eventEmmiter.on(APP_EVENTS.createBlog, this.createBlog);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.off(APP_EVENTS.createProduct, this.createProduct);
    eventEmmiter.off(APP_EVENTS.createBlog, this.createBlog);
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <div class="container admin-page">
          <div class="mt-5">
            <it-tabs 
              menu-items='${JSON.stringify(menuItems)}' 
              active-item='${JSON.stringify(this.state.activeTab)}'>
            </it-tabs>
            <div class="mb-3 border-end border-bottom border-start p-3">
              ${forms[this.state.activeTab.id]}
            </div>
          </div>
        </div>
      </it-preloader>
    `;
  }
}

customElements.define('admin-page', AdminPage);
