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

    return `
         <div class="row">
             ${products
               .map((item) => {
                 return `
                 <div class="col-sm-3 mb-3 card-col">
                     <card-product
                         image='${item.preview}'
                         title='${item.title}'
                         category='${item.category}'
                         price='${item.price}'
                         description='${item.description}'
                         id='${item.id}'
                         content=''>
                     </card-product>
                 </div>
                 `;
               })
               .join(' ')}
         </div>
         `;
  }
}

customElements.define('card-list', CardList);
