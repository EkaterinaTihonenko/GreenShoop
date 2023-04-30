import { Component } from '../../../core/Component';
import '../../molecules/CardProduct';

class CardList extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['products', 'class', 'id'];
  }

  render() {
    const products = JSON.parse(this.props.products);
    const nullProducts = Number(products.length) !== 0;
    const className = this.props.class ? this.props.class : '';

    return `
         <div class="row">
         ${
           nullProducts
             ? `${products
                 .map((item) => {
                   return `
                 <div class=" card-col ${className}">
                     <card-product
                         image='${item.preview}'
                         title='${item.title}'
                         category='${item.catigory}'
                         price='${item.price}'
                         description='${item.description}'
                         id='${item.id}'
                         content=''>
                     </card-product>
                 </div>
                 `;
                 })
                 .join(' ')}`
             : 'Товар не найден!'
         }
         </div>
         `;
  }
}

customElements.define('card-list', CardList);
