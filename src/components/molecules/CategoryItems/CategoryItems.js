import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './categoryItems.scss';

class CategoryItems extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null,
    };
  }

  static get observedAttributes() {
    return ['items'];
  }

  setActiveCategory = (activeItem) => {
    this.setState(() => {
      return {
        activeItem,
      };
    });
  };

  setCategory = (evt) => {
    evt.preventDefault();
    console.log(evt.detail);
    if (evt.target.closest('.nav-link')) {
      const id = evt.target.dataset.id;
      const items = JSON.parse(this.props.items);
      console.log(id);
      const selectedCategory = items.find((item) => item.id === id);
      this.setActiveCategory(selectedCategory);
      eventEmmiter.emit(APP_EVENTS.setCategory, { selectedCategory });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.setCategory);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.setCategory);
  }

  render() {
    const items = JSON.parse(this.props.items);
    const { activeItem } = this.state;

    return `
         <ul class="navbar-nav d-flex flex-column">
            ${items
              .map((item) => {
                const isActive = activeItem?.id === item.id;

                return `
                     <li class="nav-item  d-flex justify-content-between align-items-center pb-4">
                        <a class="nav-link ps-4 p-0 fw-bolder ${isActive ? 'active' : ''}" 
                           href="#" 
                           data-id="${item.id}">
                           ${item.name}
                        </a>
                        <img src="../../../assets/images/icons/circle.svg" alt="img">
                     </li>
                  `;
              })
              .join(' ')}
         </ul>
      `;
  }
}

customElements.define('category-items', CategoryItems);
