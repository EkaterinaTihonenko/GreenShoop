import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';
import { menuItems } from './constants';
import { forms } from './constants';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import '../../molecules/Tabs';
import '../../organisms/BlogForm';
import '../../organisms/CategoryForm';
import '../../organisms/ProductForm';
import { firebaseStorageService } from '../../../services/FirebaseStorageService';
import '../../molecules/Preloader';

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

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploadFile(data.preview, 'products')
      .then((snapshot) => {
        firebaseStorageService.dowloadURL(snapshot.ref).then((url) => {
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
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.off(APP_EVENTS.createProduct, this.createProduct);
  }

  render() {
    return `
         <it-preloader is-loading="${this.state.isLoading}">
            <div class="container">
               <div class="mt-5">
                  <it-tabs
                    menu-items='${JSON.stringify(menuItems)}' 
                    active-item='${JSON.stringify(this.state.activeTab)}'>
                  </it-tabs>
                  <div class="md-3 border-start border p-3">
                     ${forms[this.state.activeTab.id]}
                  </div>
               </div>
            </div>
         </it-preloader>
      `;
  }
}

customElements.define('admin-page', AdminPage);