import { Component } from '../../../core/Component';

class Preloader extends Component {
  constructor() {
    super();
    this.isShadow = true;
  }

  static get observedAttributes() {
    return ['is-loading'];
  }

  render() {
    return `
      <style>
         @keyframes spin {
            from {
                transform: rotate(0)
            }
            
            to {
                transform: rotate(360deg)
            }
         }
    
         .preloader {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(255,255,255, .5);
            display: flex;
            justify-content: center;
            align-items: center;
         }

         .spinner {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 4px solid green;
            display: block;
            border-left-color: transparent;
            animation: 1s linear 0s infinite spin;
         }

         .spinner-item {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 4px solid green;
            display: block;
            border-left-color: transparent;
            animation: 1s linear 0s infinite spin;
         }

         .spinner-item-two {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 4px solid green;
            display: block;
            border-left-color: transparent;
            animation: 1s linear 0s infinite spin;
         }
      </style>

        <div>
            ${
              JSON.parse(this.props['is-loading'])
                ? `
                    <div class="preloader">
                        <div class="spinner">
                           <div class="spinner-item">
                              <div class="spinner-item-two"></div>
                           </div>
                        </div>
                    </div>
                `
                : ''
            }
            <slot></slot>
        </div>    
    `;
  }
}

customElements.define('it-preloader', Preloader);
