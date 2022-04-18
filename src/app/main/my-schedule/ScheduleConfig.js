import React from 'react';
import { authRoles } from 'app/auth';

const Schedule = React.lazy(() => import('./Schedule'));

const ScheduleConfig = {
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
      path: '/schedule',
      element: <Schedule />,
    },
  ],
};

export default ScheduleConfig;
