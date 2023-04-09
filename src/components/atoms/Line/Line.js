import { Component } from '../../../core/Component';

class Line extends Component {
  static get observedAttributes() {
    return ['class'];
  }

  render() {
    const classNameLine = this.props.class ? this.props.class : '';

    return `
         <hr
            class="${classNameLine}"
         />
      `;
  }
}

customElements.define('content-line', Line);
