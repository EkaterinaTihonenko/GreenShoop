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
                        preview='${item.preview}'
                        title='${item.title}'
                        category='${item.catigory}'
                        price='${item.price}'
                        date='${item.date}'
                        description='${item.description}'
                        id='${item.id}'
                        content=''>
                     </card-product>
                  </div>
                 `;
                 })
                 .join(' ')}`
             : '<h3 class="text-success">Товары не найдены!</h3>'
         }
         </div>
         `;
  }
}

customElements.define('card-list', CardList);
