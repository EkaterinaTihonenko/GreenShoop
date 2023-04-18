import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

class CategoryForm extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    eventEmmiter.emit(APP_EVENTS.createProduct, { data });
    evt.target.reset();
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

  render() {
    return `
         <form>
            <label class="form-label">Создать категорию</label>
            <input 
               name="name" 
               type="text" 
               class="form-control mb-3" 
               placesholder="Type a category name" 
               required>
            <button type="submit" class="btn bg-success">Сохранить</button>
         </form>
      `;
  }
}

customElements.define('category-form', CategoryForm);