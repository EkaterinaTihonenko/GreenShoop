import { Component } from '../../../core/Component';

class Text extends Component {
  static get observedAttributes() {
    return ['class', 'text'];
  }

  render() {
    const classNameText = this.props.class ? this.props.class : '';
    const contentText = this.props.text;

    return `
         <p
            class="${classNameText}">
            ${contentText}
         </p>
      `;
  }
}

customElements.define('content-text', Text);
