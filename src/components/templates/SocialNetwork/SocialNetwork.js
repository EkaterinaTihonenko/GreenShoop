import { Component } from '../../../core/Component';
import '../../molecules/ItemsIcon';

import './socialNetwork.scss';

class SocialNetwork extends Component {
  constructor() {
    super();
    this.state = {
      social: [
        {
          href: '#',
          src: 'vk.svg',
        },
        {
          href: '#',
          src: 'instagram.svg',
        },
        {
          href: '#',
          src: 'twitter.svg',
        },
        {
          href: '#',
          src: 'pinterest.svg',
        },
        {
          href: '#',
          src: 'youtube.svg',
        },
      ],
    };
  }

  render() {
    return `
         <div class="link-right p-4">
            <h3 class="fs-4 text lh-base">Социальные сети</h3>
            <div class="link-items">
               <items-icon 
                 items='${JSON.stringify(this.state.social)}'
                 class="d-flex social-network">
               </items-icon>
            </div>
         </div>
      `;
  }
}

customElements.define('social-network', SocialNetwork);
