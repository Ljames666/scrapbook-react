import React from 'react';
import { authRoles } from 'app/auth';

const Release = React.lazy(() => import('./Release'));

const ReleaseConfig = {
  settings: {
    layout: {
      config: {
        mode: 'container',
        scroll: 'content',
        navbar: {
          display: false,
          folded: false,
          position: 'left',
        },
        toolbar: {
          display: false,
          style: 'fixed',
          position: 'below',
        },
        footer: {
          display: false,
          style: 'fixed',
          position: 'below',
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: '/release',
      element: <Release />,
    },
  ],
};

export default ReleaseConfig;
