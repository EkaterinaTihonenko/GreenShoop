import { APP_ROUTES } from './appRoutes';

export const routes = {
  home: {
    href: APP_ROUTES.home,
    component: 'home-page',
  },
  contacts: {
    href: APP_ROUTES.contacts,
    component: 'contacts-page',
  },
  deliveryPayment: {
    href: APP_ROUTES.deliveryPayment,
    component: 'delivery-payment',
  },
  cart: {
    href: APP_ROUTES.cart,
    component: 'cart-page',
  },
  blog: {
    href: APP_ROUTES.blog,
    component: 'blog-page',
  },
  product: {
    href: APP_ROUTES.product,
    component: 'product-page',
  },
  admin: {
    href: APP_ROUTES.admin,
    component: 'admin-page',
  },
  signUp: {
    href: APP_ROUTES.signUp,
    component: 'sign-up-page',
  },
  signIn: {
    href: APP_ROUTES.signIn,
    component: 'sign-in-page',
  },
  error: {
    href: '*',
    component: 'error-page',
  },
};
