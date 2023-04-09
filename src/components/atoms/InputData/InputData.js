import { Component } from '../../../core/Component';

import './InputData.scss';

class InputData extends Component {
  static get observedAttributes() {
    return ['class', 'type', 'name', 'value', 'placeholder'];
  }

  render() {
    const classNameInput = this.props.class ? this.props.class : '';
    const typeInput = this.props.type;
    const nameInput = this.props.name ? this.props.name : '';
    const valueInput = this.props.value ? this.props.value : '';
    const placeholderInput = this.props.placeholder ? this.props.placeholder : '';

    return `
         <input 
            class="input ${classNameInput}"
            type="${typeInput}"
            name="${nameInput}"
            value="${valueInput}"
            placeholder="${placeholderInput}"
         />
      `;
  }
}

customElements.define('input-data', InputData);
