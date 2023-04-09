import { Component } from '../../../core/Component';

import './itemLink.scss';

class ItemLink extends Component {
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
    const classNameLink = this.props.class ? this.props.class : '';
    const hrefLink = this.props.href;
    const contentLink = this.props.content ? this.props.content : '';

    return `
         <a 
            class="link ${classNameLink}" 
            href="${hrefLink}">
            ${contentLink}
         </a>
      `;
  }
}

customElements.define('item-link', ItemLink);
