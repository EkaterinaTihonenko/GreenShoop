import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { info, menuItems } from './constants';
import '../../organisms/Info';

class DeliveryAndPayment extends Component {
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

  onChangeTab = (evt) => {
    this.setActiveTab(evt.detail.activeItem);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
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
          ${info[this.state.activeTab.id]}
       </div>
    </div>
 </div>
 </it-preloader>
      `;
  }
}

customElements.define('delivery-payment', DeliveryAndPayment);
