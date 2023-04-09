import { Component } from '../../../core/Component';

class IconFile extends Component {
  static get observedAttributes() {
    return ['class', 'src', 'alt'];
  }

  render() {
    const classNameIcon = this.props.class ? this.props.class : '';
    const contentIcon = this.props.src;
    const altIcon = this.props.alt;

    return `
         <div class="${classNameIcon}">
            <img src="${contentIcon}" alt="${altIcon}">
         </div>
      `;
  }
}

customElements.define('icon-file', IconFile);
