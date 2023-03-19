import { Component } from '../../../core/Component';

class Label extends Component {
  static get observedAttributes() {
    return ['for', 'content'];
  }

  render() {
    const forName = this.props.for ? this.props.for : '';
    const content = this.props.content;

    return `
         <label for="${forName}">${content}</label>
    `;
  }
}

customElements.define('label', Label);
