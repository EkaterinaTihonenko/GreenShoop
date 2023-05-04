import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { readerFile } from '../../../utils/readFile';
import '../../molecules/Preloader';

class ProductForm extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['categories'];
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const preview = this.querySelector('.preview-image');
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const isValid = Object.keys(data).every((key) => data[key] !== '');
    if (isValid) {
      eventEmmiter.emit(APP_EVENTS.createProduct, { data });
      evt.target.reset();
      preview.innerHTML = '';
    }
    window.scrollTo(0, { behavior: 'smooth' });
  };

  onChange = (evt) => {
    if (evt.target.closest('.preview-input')) {
      const file = evt.target.files[0];
      readerFile(file)
        .then((result) => {
          const image = new Image();
          image.src = result;
          image.width = 200;
          image.height = 200;
          const previewBlock = this.querySelector('.preview-image');
          previewBlock.append(image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
    this.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
    this.removeEventListener('change', this.onChange);
  }

  render() {
    const categories = JSON.parse(this.props.categories);

    return `
         <form enctype="multipart/form-data">
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Наименование
                  </p>
                  <input name="title" type="text" class="form-control bg-transparent border border-success shadow rounded" required>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                    Категория
                  </p>
                  <select class="form-select bg-transparent border border-success shadow" name="category" aria-label="Default select example">
                  ${categories
                    .map((item) => {
                      return `<option class="option" value='${item.id}'>${item.name}</option>`;
                    })
                    .join(' ')}
                  </select>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Дата поступления
                  </p>
                  <input name="date" type="datetime-local" class="form-control bg-transparent border border-success shadow rounded" required>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Загрузить файл
                  </p>
                  <input class="form-control bg-transparent border border-success preview-input shadow rounded" name="preview" type="file" accept="image/png, image/jpeg, image/jpg"
                     required>
                  <div class="preview-image"></div>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Цена
                  </p>
                     <input class="form-control bg-transparent border border-success shadow rounded" name="price" type="number" required>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Краткое описание
                  </p>
                  <textarea class="form-control bg-transparent border border-success shadow rounded" name="description" rows="3" required>
                  </textarea>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Освещение и местоположение
                  </p>
                  <textarea class="form-control bg-transparent border border-success shadow rounded" name="location" rows="3" required>
                  </textarea>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Температурный режим
                  </p>
                  <textarea class="form-control bg-transparent border border-success shadow rounded" name="temperature" rows="3" required>
                  </textarea>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Влажность и полив
                  </p>
                  <textarea class="form-control bg-transparent border border-success shadow rounded" name="watering" rows="3" required>
                  </textarea>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Удобрения
                  </p>
                  <textarea class="form-control bg-transparent border border-success shadow rounded" name="fertilizers" rows="3" required>
                  </textarea>
               </label>
            </div>
            <button class="btn btn-success" type="submit">
               Сохранить
            </button>
         </form>
      `;
  }
}

customElements.define('product-form', ProductForm);
