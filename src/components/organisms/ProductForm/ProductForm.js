import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { readerFile } from '../../../utils/readFile';

class ProductForm extends Component {
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
    return `
         <form enctype="multipart/form-data">
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Наименование
                  <p>
                     <input name="title" type="text" class="form-control" required>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Загрузить файл
                  </p>
                  <input class="form-control preview-input" name="preview" type="file" accept="image/png, image/jpeg, image/jpg"
                     required>
                  <div class="preview-image"></div>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Цена
                  <p>
                     <input class="form-control" name="price" type="number" required>
               </label>
            </div>
            <div class="mb-3">
               <label class="form-label w-100">
                  <p>
                     Описание товара
                  </p>
                  <textarea class="form-control" name="description" rows="3" required>
                  </textarea>
               </label>
            </div>
            <button class="btn btn-primary" type="submit">
               Сохранить
            </button>
         </form>
      `;
  }
}

customElements.define('product-form', ProductForm);
