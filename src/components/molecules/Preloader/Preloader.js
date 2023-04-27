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
         .preloader {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1001;
         }
          .preloader__row {
            position: relative;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            margin-top: -35px;
            margin-left: -35px;
            text-align: center;
            animation: preloader-rotate 2s infinite linear;
         }
          
          .preloader__item {
            position: absolute;
            display: inline-block;
            top: 0;
            background-color: #198754;
            border-radius: 100%;
            width: 20px;
            height: 20px;
            animation: preloader-bounce 2s infinite ease-in-out;
         }
          
          .preloader__item:last-child {
            top: auto;
            bottom: 0;
            animation-delay: -1s;
         }
          
          @keyframes preloader-rotate {
            100% {
              transform: rotate(360deg);
            }
         }
          
          @keyframes preloader-bounce {
          
            0%,
            100% {
              transform: scale(0);
            }
          
            50% {
              transform: scale(1);
            }
         }
          
          .loaded_hiding .preloader {
            transition: 0.3s opacity;
            opacity: 0;
         }
          
          .loaded .preloader {
            display: none;
         }
      </style>
      
         <div class="wrap-preloader">
          ${
            JSON.parse(this.props['is-loading'])
              ? `
               <div class="preloader">
                  <div class="preloader__row">
                     <div class="preloader__item"></div>
                     <div class="preloader__item"></div>
                  </div
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
