import { Component } from '../../../core/Component';
import './TypeButton.scss';

class TypeButton extends Component {
  static get observedAttributes() {
    return ['class', 'name', 'type', 'value', 'content', 'form'];
  }

  onClick = (evt) => {
    if (!this.props.type) {
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
    const classNameBtn = this.props.class ? this.props.class : '';
    const nameBtn = this.props.name ? this.props.name : '';
    const typeBtn = this.props.type;
    const idFormBtn = this.props.value ? this.props.value : '';
    const valueBtn = this.props.value ? this.props.value : '';
    const contentBtn = this.props.content;

    return `
         <button 
            class=" btn ${classNameBtn}" 
            name="${nameBtn}"
            type="${typeBtn}"
            form="${idFormBtn}"
            value="${valueBtn}">
            ${contentBtn}
         </button>
      `;
  }
}

customElements.define('type-button', TypeButton);
