import { APP_ROUTES } from './appRoutes';

export const appPages = [
  {
    label: 'Главная',
    href: APP_ROUTES.home,
  },
  {
    href: APP_ROUTES.cart,
    label: 'Корзина',
  },
  {
    href: APP_ROUTES.blog,
    label: 'Блог',
  },
  {
    href: APP_ROUTES.deliveryPayment,
    label: 'Доставка & Оплата',
  },
  {
    href: APP_ROUTES.contacts,
    label: 'Контакты',
  },
  {
    href: APP_ROUTES.admin,
    label: 'Админ',
  },
  {
    href: APP_ROUTES.signUp,
    label: 'Регистрация',
  },
  {
    href: APP_ROUTES.signIn,
    label: 'Вход',
  },
];
