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
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/release',
      element: <Release />,
    },
    {
      path: '/release1',
      element: <Release />,
    },
    {
      path: '/release2',
      element: <Release />,
    },
    {
      path: '/release3',
      element: <Release />,
    },
    {
      path: '/release4',
      element: <Release />,
    },
    {
      path: '/release5',
      element: <Release />,
    },
  ],
};

export default ReleaseConfig;
