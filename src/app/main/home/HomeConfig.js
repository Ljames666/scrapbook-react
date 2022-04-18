import i18next from 'i18next';
import { authRoles } from 'app/auth';
import Home from './Home';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'homePage', en);
i18next.addResourceBundle('tr', 'homePage', tr);
i18next.addResourceBundle('ar', 'homePage', ar);

const HomeConfig = {
  settings: {
    layout: {
      config: {
        mode: 'container',
        scroll: 'content',
        navbar: {
          display: true,
          folded: true,
          position: 'left',
        },
        toolbar: {
          display: true,
          style: 'fixed',
          position: 'below',
        },
        footer: {
          display: true,
          style: 'fixed',
          position: 'below',
        },
      },
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/home',
      element: <Home />,
    },
  ],
};

export default HomeConfig;
