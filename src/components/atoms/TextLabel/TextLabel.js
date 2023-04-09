import { Component } from '../../../core/Component';

class TextLabel extends Component {
  static get observedAttributes() {
    return ['class', 'identifier', 'content'];
  }

  render() {
    const classNameLabel = this.props.class ? this.props.class : '';
    const idLabel = this.props.identifier ? this.props.identifier : '';
    const contentLabel = this.props.content;

    return `
         <label 
            class="${classNameLabel}"
            identifier="${idLabel}">
            ${contentLabel}
         </label>
      `;
  }
}

customElements.define('text-label', TextLabel);
