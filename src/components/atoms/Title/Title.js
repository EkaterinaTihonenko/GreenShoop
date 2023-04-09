import { Component } from '../../../core/Component';

class Title extends Component {
  static get observedAttributes() {
    return ['class', 'text'];
  }

  render() {
    const classNameTitle = this.props.class ? this.props.class : '';
    const contentTitle = this.props.text;

    return `
         <p
            class="${classNameTitle}">
            ${contentTitle}
         </p>
      `;
  }
}

customElements.define('content-title', Title);
