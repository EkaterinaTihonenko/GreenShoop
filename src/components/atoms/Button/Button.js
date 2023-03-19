import { Component } from '../../../core/Component';

class Button extends Component {
  static get observedAttributes() {
    return ['type', 'class', 'content'];
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
    const type = this.props.type ? this.props.type : '';
    const className = this.props.class ? this.props.class : '';
    const content = this.props.content ? this.props.content : '';

    return `
        <button type="${type}" class="${className}">${content}</button>
    `;
  }
}

customElements.define('is-button', Button);
