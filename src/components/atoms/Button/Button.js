import { Component } from '../../../core/Component';
import './button.scss';

class Button extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['type', 'src', 'content', 'is-active', 'classname', 'evt-type', 'parent-class', 'id'];
  }

  onClick() {
    if (this.props['evt-type']) {
      this.dispatch(this.props['evt-type'], { id: this.props.id });
    }
  }

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    return `
         <img class="icon-button" src="../../../assets/images/icons/menu-vertical.svg" alt="Button" />
   `;
  }
}

customElements.define('green-button', Button);
