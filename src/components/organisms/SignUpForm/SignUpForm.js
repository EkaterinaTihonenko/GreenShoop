import { Component } from '../../../core/Component';
import { getFormData } from '../../../utils/form';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  setError = (key, message) => {
    this.setState((state) => {
      return {
        ...state,
        errors: {
          ...state.errors,
          [key]: message,
        },
      };
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);

    if (!email) {
      this.setError('Почта', 'Поле обязательно для заполнения');
      return;
    }

    eventEmmiter.emit(APP_EVENTS.signUp, {
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
      ${
        this.state.errors.email
          ? `
      <div class="invalid-feedback">
      ${this.state.errors.email.message}
      </div>
      `
          : ''
      }
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Пароль<p>
        <input name="password" type="password" class="form-control bg-transparent border-success" required>
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Подтвердите пароль<p>
        <input name="confirm-password" type="password" class="form-control bg-transparent border-success" required>
      </label>
    </div>
    <button type="submit" class="btn bg-success text-light">Регистрация</button>
  </form>
    `;
  }
}

customElements.define('sign-up-form', RegisterForm);
