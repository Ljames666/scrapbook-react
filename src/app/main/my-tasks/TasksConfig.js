import React from 'react';
import { authRoles } from 'app/auth';

const Tasks = React.lazy(() => import('./Tasks'));

const TasksConfig = {
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
          display: false,
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
      path: '/Tasks',
      element: <Tasks />,
    },
  ],
};

export default TasksConfig;
