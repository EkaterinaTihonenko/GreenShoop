import { Component } from '../../../core/Component';

class IsImg extends Component {
  static get observedAttributes() {
    return ['src', 'alt', 'class'];
  }

  render() {
    const src = this.props.src;
    const alt = this.props.alt ? this.props.alt : '';
    const className = this.props.class ? this.props.class : '';

    return `
         <img src="${src}" alt="${alt}" class"${className}"/>
    `;
  }
}

customElements.define('is-img', IsImg);
