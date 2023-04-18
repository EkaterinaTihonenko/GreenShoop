import { Component } from '../../../core/Component';
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './reviewsUserSwiper.scss';

class ReviewsUserSwiper extends Component {
  constructor() {
    super();
  }

  initSwiper() {
    Swiper.use([EffectFade, Autoplay]);

    const swiper = new Swiper(`.${this.props.swiperclass}`, {
      modules: [Navigation, Pagination],
      loop: true,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  componentDidMount() {
    this.initSwiper();
  }

  componentWillUnmount() {
    this.initSwiper();
  }

  static get observedAttributes() {
    return ['slides', 'swiperclass'];
  }

  render() {
    return `
         <div class="swiper ${this.props.swiperclass}">
            <div class="swiper-wrapper">
               ${JSON.parse(this.props.slides)
                 .map(
                   (slide) => `		
                     <div class="swiper-slide ${this.props.swiperclass}-slide">
                        <div class="container m-5 slide-container">
                           <div class="${this.props.swiperclass}-slide__content d-flex justify-content-start" style="width: 90%;">
                              <div class="slide ${this.props.swiperclass}-slide__content-user d-flex">
                                 <div class="slide__user me-2 text-center">
                                    <img class="slide__user__img"  src="../../../assets/images/imgUsers/${slide.src}" alt="Slide">
                                    <span class="text-success slide__user__title ${this.props.swiperclass}-slide__content-title d-flex flex-column">
                                       ${slide.title}
                                    </span>
                                 </div>
                                 <p class="text slide__text m-4 ${this.props.swiperclass}-slide__content-text">
                                    ${slide.text}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>`,
                 )
                 .join('')}
            </div>       
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
         </div>
      `;
  }
}

customElements.define('reviews-user-swiper', ReviewsUserSwiper);
