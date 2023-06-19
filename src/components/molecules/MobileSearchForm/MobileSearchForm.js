import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import './mobileSearchForm.scss';

class MobileSearchForm extends Component {
  constructor() {
    super();
  }

  onSearch = (evt) => {
    evt.preventDefault();
    const data = {};
    const formData = new FormData(evt.target);
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (data.search) {
      eventEmmiter.emit(APP_EVENTS.searchProducts, { data });
      eventEmmiter.emit(APP_EVENTS.searchPosts, { data });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSearch);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSearch);
  }

  render() {
    return `
         <form class="d-flex align-items-center form" role="search">
            <input name='search' class="form-control form__input me-2" type="search" placeholder="Поиск..." aria-label="Search" />
         </form>
      `;
  }
}

customElements.define('mobile-search-form', MobileSearchForm);
