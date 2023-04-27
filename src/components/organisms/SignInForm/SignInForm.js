import { Component } from '../../../core/Component';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import '../../atoms/LinkItem';

class EntryForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);
    if (!email) {
      this.setError('Почта', 'Поле обязательно для заполнения');
      return;
    }
    eventEmmiter.emit(APP_EVENTS.signIn, {
      data: {
        email,
        password,
      },
    });
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
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Почта<p>
        <input name="email" type="email" class="form-control bg-transparent border-success">
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Пароль<p>
        <input name="password" type="password" class="form-control bg-transparent border-success" required>
      </label>
    </div>
    <div class="mt-2 d-flex justify-content-between">
    <button type="submit" class="btn bg-success btn-submit text-light">Войти</button>
      <button type="button"
            class="btn bg-success text-light d-flex justify-content-center align-items-center">
         <div class="btn-right-icon"></div>
           <route-link to="${APP_ROUTES.signUp}">
              <link-item href="#"
                 content="Регистрация">
               </link-item>
            </route-link>
      </button>
     </div>
  </form>
    `;
  }
}

customElements.define('sign-in-form', EntryForm);
