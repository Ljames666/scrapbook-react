import React from 'react';
import { authRoles } from 'app/auth';

const Email = React.lazy(() => import('./Email'));

const EmailConfig = {
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
      path: '/email',
      element: <Email />,
    },
  ],
};

export default EmailConfig;
