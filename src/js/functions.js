import { title } from './refs';
//list of functions that are called depending on the route
export const fun1 = () => {
  title.innerHTML = 'Home';
};

export const fun2 = () => {
  title.innerHTML = 'Page 1';
};

export const fun3 = () => {
  title.innerHTML = 'Page 2';
};

export const fun4 = () => {
  title.innerHTML = 'Page 3';
};

export const fun5 = () => {
  title.innerHTML = 'Not found';
};
