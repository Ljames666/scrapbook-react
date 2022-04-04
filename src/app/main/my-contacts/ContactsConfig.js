import React from 'react';
import { authRoles } from 'app/auth';

const Contacts = React.lazy(() => import('./Contacts'));

const ContactsConfig = {
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
      path: '/contacts',
      element: <Contacts />,
    },
  ],
};

export default ContactsConfig;
