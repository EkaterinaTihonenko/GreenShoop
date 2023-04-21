import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import './pagination.scss';

class Pagination extends Component {
  static get observedAttributes() {
    return ['total', 'limit', 'current'];
  }

  onChangePage = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.number-link')) {
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, { page: evt.target.dataset.page });
    }
    if (evt.target.closest('.previous-link')) {
      const { current } = this.props;
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, { page: Number(current) - 1 });
    }
    if (evt.target.closest('.next-link')) {
      const { current } = this.props;
      eventEmmiter.emit(APP_EVENTS.changePaginationPage, { page: Number(current) + 1 });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onChangePage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onChangePage);
  }

  render() {
    const { total, limit, current } = this.props;
    const count = new Array(Math.ceil(total / limit)).fill(null);

    const isFirst = Number(current) === 1;
    const isLast = Number(current) === count.length;

    return `
         <ul class="pagination justify-content-end">
            <li class="page-item me-2 ${isFirst ? 'disabled' : ''}">
               <a class="page-link  previous-link" href="#">&lt;</a>
            </li>
            ${count
              .map((_, index) => {
                const page = index + 1;
                const isActive = page === Number(current);
                return `
                     <li class="page-item">
                        <a class="page-link number-link ${isActive ? 'active' : ''}" 
                           href="#"
                           data-page="${page}">
                           ${page}
                        </a>
                     </li>
                  `;
              })
              .join(' ')}

            <li class="page-item ms-2 ${isLast ? 'disabled' : ''}">
               <a class="page-link next-link" href="#">&gt;</a>
            </li>
         </ul>
      `;
  }
}

customElements.define('it-pagination', Pagination);
