export const menuItems = [
  {
    id: '1',
    label: 'Форма категории',
  },
  {
    id: '2',
    label: 'Форма продукта',
  },
  {
    id: '3',
    label: 'Форма для блога',
  },
];

export const forms = (state) => {
  return {
    1: '<category-form></category-form>',
    2: `<product-form categories='${JSON.stringify(state.categories)}'></product-form>`,
    3: '<blog-form></blog-form>',
  };
};
