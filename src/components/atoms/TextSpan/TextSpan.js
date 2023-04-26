import { Component } from '../../../core/Component';

class TextSpan extends Component {
  constructor() {
    super();
    this.isShadow = true;
  }

  static get observedAttributes() {
    return ['class', 'content'];
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const content = this.props.content;

    return `
         <span class="${className}">
            <slot>${content}</slot>
         </span>
   
   `;
  }
}

customElements.define('text-span', TextSpan);
