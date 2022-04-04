import React from 'react';
import { authRoles } from 'app/auth';

const Pictures = React.lazy(() => import('./Pictures'));

const PicturesConfig = {
  settings: {
    layout: {
      config: {
        mode: 'fullwidth',
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
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: '/pictures',
      element: <Pictures />,
    },
  ],
};

export default PicturesConfig;
