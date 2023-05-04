import { Component } from '../../../core/Component';
import './errorPage.scss';

class ErrorPage extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="container content text-center d-flex align-items-center">
            <h1 class=" content__title-error m-auto">
               Error 404 
            </h1>
         </div>
        `;
  }
}

customElements.define('error-page', ErrorPage);
