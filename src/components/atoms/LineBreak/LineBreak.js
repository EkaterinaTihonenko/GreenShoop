import { Component } from '../../../core/Component';

class LineBreak extends Component {
  static get observedAttributes() {
    return ['class'];
  }

  render() {
    const classNameBreak = this.props.class ? this.props.class : '';

    return `
         <br 
            class="${classNameBreak}"
         />
      `;
  }
}

customElements.define('line-break', LineBreak);
