import { Component } from '../../../core/Component';

class sortByPriceForm extends Component {
  constructor() {
    super();
  }

  render() {
    return `
         <div class="d-flex justify-content-end mb-1">
            <form class="form-sort">
               <select class="form-select bg-transparent border border-success shadow" name="category" aria-label="Default select example" style="width: 18rem;">
                  <option selected>сортировка товара</option>
                  <option class="option" value='1'>По убыванию цены</option>
                  <option class="option" value='2'>По возрастанию цены</option>
                  <option class="option" value='3'>По новинкам</option>
               </select>
            </form>
         </div>
      `;
  }
}

customElements.define('sort-by-price', sortByPriceForm);
