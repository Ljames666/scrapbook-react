import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import HomeConfig from 'app/main/home/HomeConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ReleaseConfig from 'app/main/releasePage/ReleaseConfig';
import DiaryConfig from 'app/main/my-diary/DiaryConfig';
import ContactsConfig from 'app/main/my-contacts/ContactsConfig';
import EmailConfig from 'app/main/my-email/EmailConfig';
import PicturesConfig from 'app/main/my-pictures/PicturesConfig';
import ScheduleConfig from 'app/main/my-schedule/ScheduleConfig';
import TasksConfig from 'app/main/my-tasks/TasksConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';

const routeConfigs = [
  ReleaseConfig,
  HomeConfig,
  ContactsConfig,
  DiaryConfig,
  EmailConfig,
  PicturesConfig,
  ScheduleConfig,
  TasksConfig,
  LoginConfig,
  RegisterConfig,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    element: <Navigate to="home" />,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
