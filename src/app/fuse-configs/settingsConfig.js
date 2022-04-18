const settingsConfig = {
  layout: {
    style: 'layout1', // layout1 layout2 layout3
    config: {}, // checkout default layout configs at app/fuse-layouts for example  app/fuse-layouts/layout1/Layout1Config.js
  },
  customScrollbars: true,
  direction: 'ltr', // rtl, ltr
  theme: {
    main: 'dark7',
    navbar: 'dark7',
    toolbar: 'dark7',
    footer: 'dark7',
  },
  loginRedirectUrl: '/tasks', // Default redirect url for the logged-in user
};

export default settingsConfig;
