import { routers } from './router';
import { fun5 } from './functions';
import { navbarNav } from './refs';

let auth = false; //the switch is logged in/ the user is not logged in
let startState = true; //the application loaded for the first time

function updatePage(e) {
  if (e.target.tagName !== 'A') return;
  e.preventDefault();
  updateHistory(e);
  updatedContent();
}

//update the history object
function updateHistory(e) {
  const query = e.target.getAttribute('href');
  let router = routers.find(item => item.path === query);
  if (!router) return;
  if (!router.meta.auth || auth) history.pushState(query, null, query);
}

const getRouter = () => {
  return routers.find(
    item => item.path === history.state || item.path === location.pathname,
  );
};

function updatedContent() {
  const router = getRouter();

  if (!router) {
    //load the 404 "page" if the url does not match the router
    fun5();
  } else if ((!router.meta.auth && !auth) || auth) {
    //switch "page"
    router.component();
  } else if (router.meta.auth && startState) {
    //load the Home "page" immediately after downloading the application
    routers[0].component();
    history.pushState(routers[0].path, null, routers[0].path);
    startState = false;
  }
}

window.onpopstate = event => updatedContent();
navbarNav.addEventListener('click', updatePage);
window.addEventListener('load', updatedContent());
