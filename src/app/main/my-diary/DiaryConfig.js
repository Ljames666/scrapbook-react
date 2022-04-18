import React from 'react';
import { authRoles } from 'app/auth';

const Diary = React.lazy(() => import('./Diary'));

const DiaryConfig = {
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
  auth: authRoles.admin,
  routes: [
    {
      path: '/diary',
      element: <Diary />,
    },
  ],
};

export default DiaryConfig;
