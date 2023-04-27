import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

class CategoryItems extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
    };
  }

  static get observedAttributes() {
    return ['catigories', 'isactive', 'id'];
  }

  setCategory = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.nav-link')) {
      const id = evt.target.dataset.id;
      const categories = JSON.parse(this.props.categories);
      const selectedCategory = categories.find((category) => category.id === Number(id));
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
    const { isactive } = this.props;
    const categories = JSON.parse(this.props.categories);

    return `
         <ul class="navbar-nav">
            ${categories
              .map((category) => {
                const active = isactive?.id === category.id;
                return `
                     <li class="nav-item">
                        <a class="nav-link item-link text-body ${active ? 'active' : ''}" 
                           href="#" 
                           id='${this.state.id}'>
                           ${this.state.category}
                        </a>
                     </li>
                  `;
              })
              .join(' ')}
         </ul>
      `;
  }
}

customElements.define('category-items', CategoryItems);
