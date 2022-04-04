import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'home-component',
        title: 'Home',
        translate: 'Home',
        type: 'item',
        icon: 'home',
        url: '/home',
      },
      {
        id: 'contact-component',
        title: 'Contactc',
        translate: 'Contatos',
        type: 'item',
        icon: 'contacts',
        url: '/contacts',
      },
      {
        id: 'diary-component',
        title: 'Diary',
        translate: 'Noticias',
        type: 'item',
        icon: 'rss_feed',
        url: '/diary',
      },
      {
        id: 'email-component',
        title: 'Email',
        translate: 'Mailbox',
        type: 'item',
        icon: 'alternate_email',
        url: '/email',
      },
      {
        id: 'pictures-component',
        title: 'Pictures',
        translate: 'Fotos',
        type: 'item',
        icon: 'photo_library',
        url: '/pictures',
      },
      {
        id: 'schedule-component',
        title: 'Schedule',
        translate: 'Calendário',
        type: 'item',
        icon: 'calendar_today',
        url: '/schedule',
      },
      {
        id: 'task-component',
        title: 'Task',
        translate: 'Tarefas',
        type: 'item',
        icon: 'fact_check',
        url: '/tasks',
      },
    ],
  },
  {
    id: 'divider-component',
    type: 'divider',
  },
  {
    id: 'actions',
    title: 'Actions',
    translate: 'Ações',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'seach-component',
        title: 'Seach',
        translate: 'Pesquisar',
        type: 'button',
        icon: 'search',
      },
      {
        id: 'account-component',
        title: 'Account',
        translate: 'Conta',
        type: 'button',
        icon: 'account_circle',
      },
      {
        id: 'settings-component',
        title: 'Settings',
        translate: 'Configurações',
        type: 'button',
        icon: 'settings',
      },
    ],
  },
  {
    id: 'new-divider-component',
    type: 'divider',
  },
  {
    id: 'logout-component',
    title: 'Sair do sistema',
    // translate: 'Sair do sistema',
    type: 'item',
    icon: 'exit_to_app',
    url: '/logout',
  },
];

export default navigationConfig;
