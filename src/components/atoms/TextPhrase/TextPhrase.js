import { Component } from '../../../core/Component';
import './TextPhrase.scss';

class TextPhrase extends Component {
  static get observedAttributes() {
    return ['class', 'text'];
  }

  render() {
    const classNameSpan = this.props.class ? this.props.class : '';
    const contentSpan = this.props.text ? this.props.text : '';

    return `
         <span
            class="span ${classNameSpan}">
            ${contentSpan}
         </span>
      `;
  }
}

customElements.define('text-phrase', TextPhrase);
