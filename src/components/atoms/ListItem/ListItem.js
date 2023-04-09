import { Component } from '../../../core/Component';

class ListItem extends Component {
  static get observedAttributes() {
    return ['class', 'content'];
  }

  render() {
    const classNameList = this.props.class ? this.props.class : '';
    const contentList = this.props.content;

    return `
         <li
            class="${classNameList}">
            ${contentList}
         </li>
      `;
  }
}

customElements.define('list-item', ListItem);
