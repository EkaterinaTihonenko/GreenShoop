import { Component } from '../../../core/Component';

import './sectionBlog.scss';

class SectionBlog extends Component {
  render() {
    return `
         <section class="section-blog">
           <h3 class="title-h3 text-center">Наши записи в блоге</h3>
           <div class="d-flex justify-content-around">
              <div class="section-card m-2">
                 <img class="card-img-top image" src="../assets/images/blog1.jpg" alt="img">
                 <h4 class="text-title">Кактус и суккулент
                    Советы по уходу</h4>
                 <p class="text">Кактусы-суккуленты - простые в уходе растения для любого дома или
                    патио.Кактусы-суккуленты - простые в уходе растения для любого дома или патио.Кактусы-суккуленты -
                    простые в уходе растения для любого дома или патио.</p>
                 <button type="button" class="btn bg-success text-white">Подробнее</button>
              </div>
              <div class="section-card m-2">
                 <img class="card-img-top image" src="../assets/images/blog2.jpg" alt="img">
                 <h4 class="text-title">Кактус и суккулент
                    Советы по уходу</h4>
                 <p class="text">Кактусы-суккуленты - простые в уходе растения для любого дома или
                    патио.Кактусы-суккуленты - простые в уходе растения для любого дома или патио.Кактусы-суккуленты -
                    простые в уходе растения для любого дома или патио.</p>
                 <button type="button" class="btn bg-success text-white">Подробнее</button>
              </div>
              <div class="section-card m-2">
                 <img class="card-img-top image" src="../assets/images/blog3.jpg" alt="img">
                 <h4 class="text-title">Кактус и суккулент
                    Советы по уходу</h4>
                 <p class="text">Кактусы-суккуленты - простые в уходе растения для любого дома или
                    патио.Кактусы-суккуленты - простые в уходе растения для любого дома или патио.Кактусы-суккуленты -
                    простые в уходе растения для любого дома или патио.</p>
                 <button type="button" class="btn bg-success text-white">Подробнее</button>
              </div>
           </div>
         </section>
      `;
  }
}

customElements.define('section-blog', SectionBlog);
