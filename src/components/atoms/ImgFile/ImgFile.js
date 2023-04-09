import { Component } from '../../../core/Component';

class ImgFile extends Component {
  static get observedAttributes() {
    return ['class', 'url', 'alt'];
  }

  render() {
    const classNameImg = this.props.class ? this.props.class : '';
    const urlImg = this.props.url;
    const altImg = this.props.alt;

    return `
         <img 
            class="${classNameImg}"
            url="${urlImg}"
            alt="${altImg}"
         />
      `;
  }
}

customElements.define('img-file', ImgFile);
