import { APP_ROUTES } from './appRoutes';

export const routes = [
  {
    href: APP_ROUTES.home,
    component: '<home-page></home-page>',
  },
  {
    href: APP_ROUTES.cart,
    component: '<cart-page></cart-page>',
  },
  {
    href: APP_ROUTES.blog,
    component: '<blog-page></blog-page>',
  },
  {
    href: APP_ROUTES.contacts,
    component: '<contacts-page></contacts-page>',
  },
  {
    href: APP_ROUTES.product,
    component: '<product-page></product-page>',
  },
  {
    href: APP_ROUTES.admin,
    component: '<admin-page></admin-page>',
  },
  {
    href: '*',
    component: '<error-page></error-page>',
  },
];
