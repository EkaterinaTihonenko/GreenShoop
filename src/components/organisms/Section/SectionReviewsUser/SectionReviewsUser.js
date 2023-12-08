import { Component } from '../../../../core/Component';
import '../../../molecules/ReviewsUserSwiper';

class sectionReviewsUser extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          title: 'Анна<span>Заказчик</span>',
          text: 'Очень благодарна за грамотную консультацию и помощь в приобретении комнатных растений!',
          src: 'user-Anna.jpg',
        },
        {
          title: 'Денис<span>Заказчик</span>',
          text: 'Остался очень доволен сотрудничеством с интернет-магазином GreenShoop.',
          src: 'user-Denis.jpg',
        },
        {
          title: 'Диана<span>Заказчик</span>',
          text: 'Не первый раз заказываю растения на вашем сайте и всегда оставалась довольна. Как впрочем и на этот раз. Спасибо вам большое за вашу работу и наше хорошее настроение.',
          src: 'user-Diane.jpg',
        },
        {
          title: 'Наталья<span>Заказчик</span>',
          text: 'Огромное спасибо за отличный крепкий саженец рододендрона Нова Зембла. Это мое будущее вечнозеленое растение высотой до 2 метров с рубиново - красными цветами.',
          src: 'user-Natalya.jpg',
        },
        {
          title: 'Олег<span>Заказчик</span>',
          text: 'Благодарим вас за помощь, отличные растения и сервис. Так держать! Качество на высоте.',
          src: 'user-Oleg.jpg',
        },
        {
          title: 'Ольга<span>Заказчик</span>',
          text: 'Здравствуйте. Спасибо за лилии, очень быстрая доставка и приятные цены. Сожелею только об одном,что очень поздно про вас узнала. Выбор растений очень большой. Буду заказывать у вас ещё.',
          src: 'user-Olga.jpg',
        },
        {
          title: 'Светлана<span>Заказчик</span>',
          text: 'Добрый день, хотелось бы выразить огромное спасибо за товар получили во время. Но к сожалению не сфотографировали ( остались только чеки ). Товаром очень довольны и вам очень благодарны!!',
          src: 'user-Svetlana.jpg',
        },
      ],
    };
  }

  render() {
    return `
         <section class="container">
            <h2 class="title-section mt-5">Ваши отзывы:</h2>
			      <reviews-user-swiper
				      slides='${JSON.stringify(this.state.slides)}'
				      swiperclass="reviewsUserSwiper">
			      </reviews-user-swiper>
         </section>
      `;
  }
}

customElements.define('section-reviews-user', sectionReviewsUser);
