import { Component } from '../../../core/Component';
import { authService } from '../../../services/Auth';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import '../../organisms/SignUpForm';
import '../../molecules/Preloader';
import { storageService } from '../../../services/StorageService';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      errorMessage: '',
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

  setError(error) {
    this.setState((state) => {
      return {
        ...state,
        errorMessage: error,
      };
    });
  }

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      const user = await authService.signUp(data.email, data.password);
      storageService.setItem('user', user);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.home });
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signUp, this.register);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    const message = this.state.errorMessage;

    return `
         <it-preloader is-loading="${this.state.isLoading}">
            <div class="container mt-5">
               <h1 class="text-center mt-5">
                  Регистрация
               </h1>
               <div class="row justify-content-center mt-5">
                 <div class="col-lg-6 col-md-8 col-sm-9 col-xxl-5">
                    <div class="border p-5 border-success border-2 rounded">
                        <div class="invalid-feedback d-block">
                           ${message}
                        </div>
                        <sign-up-form></sign-up-form>
                     </div>
                  </div>
               </div>
            </div>
         </it-preloader>
      `;
  }
}

customElements.define('sign-up-page', SignUpPage);
