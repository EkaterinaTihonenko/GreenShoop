import { Component } from '../../../core/Component';
import './linkItem.scss';

class LinkItem extends Component {
  static get observedAttributes() {
    return ['class', 'href', 'content'];
  }

  onClick = (evt) => {
    if (!this.props.href) {
      evt.preventDefault();
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const href = this.props.href ? this.props.href : '';
    const content = this.props.content;

    return `
         <a class="nav-link item-link text-light ${className}" href="${href}">
            ${content}
         </a>
   
   `;
  }
}

customElements.define('link-item', LinkItem);
