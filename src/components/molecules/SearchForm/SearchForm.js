import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import './searchForm.scss';

class SearchForm extends Component {
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
         <form class="d-flex form" role="search">
            <input name='search' class="form-control form__input me-2" type="search" placeholder="Поиск..." aria-label="Search">
            <button class="btn btn-success form__btn d-flex justify-content-center align-items-center" type="submit">
               Поиск
            </button>
         </form>
      `;
  }
}

customElements.define('search-form', SearchForm);
