import { fun1, fun2, fun3, fun4 } from './functions';
//list of routes
export const routers = [
  {
    path: '/',
    component: fun1,
    meta: { auth: false },
  },
  {
    path: '/page1',
    component: fun2,
    meta: { auth: true }, //router is protected
  },
  {
    path: '/page2',
    component: fun3,
    meta: { auth: false },
  },
  {
    path: '/page3',
    component: fun4,
    meta: { auth: false },
  },
];
