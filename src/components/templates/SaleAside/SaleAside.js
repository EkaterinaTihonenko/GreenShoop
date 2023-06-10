import { Component } from '../../../core/Component';
import '../../molecules/CardBlogPost';
import './saleAside.scss';

class SaleAside extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="aside p-2">
            <div class="container d-flex flex-column justify-content-center align-items-center">
               <img class="img-sale" 
                    src="/assets/images/SuperSale.png" alt="sale" />
               <p class="content-text text-danger fw-bold"">
                  СКИДКА ДО 75%
               </p>
               <a href="#">
                  <img class="img-sale" 
                       src="../../assets/images/potted-plant02.png" alt="img" />
               </a>
            </div>
         </div>
      `;
  }
}

customElements.define('sale-aside', SaleAside);
