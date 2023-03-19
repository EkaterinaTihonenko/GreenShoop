import { Component } from '../../../core/Component';

class Input extends Component {
  static get observedAttributes() {
    return ['type', 'name', 'class', 'id', 'placeholder', 'value', 'dirname', 'required'];
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
    const type = this.props.type;
    const name = this.props.name ? this.props.name : '';
    const className = this.props.class ? this.props.class : '';
    const id = this.props.id ? this.props.id : '';
    const placeholder = this.props.placeholder ? this.props.placeholder : '';
    const value = this.props.value ? this.props.value : '';
    const dirname = this.props.dirname ? this.props.dirname : '';
    const required = this.props.required ? this.props.required : '';

    return `
        <input type="${type}" name="${name}" class="${className}" id="${id}" placeholder="${placeholder}" value="${value}" dirname="${dirname}" ${required}>
    `;
  }
}

customElements.define('input', Input);
