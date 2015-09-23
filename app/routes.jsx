import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import App from './components/app.jsx';
import CrmPage from './components/CrmPage.jsx';
import CrmCompanyPage from './components/CrmCompanyPage.jsx';
import CreateUser from './components/create/int/CreateUser.jsx';
import DashboardPage from './components/DashboardPage.jsx';
import Locations from './components/locations.jsx';
import LoginPage from './components/LoginPage.jsx';
import MessagesPage from './components/MessagesPage.jsx';
import PagesPage from './components/PagesPage.jsx';
import PostsPage from './components/PostsPage.jsx';
import Preview from './components/Preview.jsx';
import SettingsPage from './components/SettingsPage.jsx';
import SignupPage from './components/SignupPage.jsx';
import SitesPage from './components/SitesPage.jsx';
import StorePage from './components/StorePage.jsx';
import TodosPage from './components/TodosPage.jsx';
import UsersPage from './components/UsersPage.jsx';
import UserProfile from './components/UserProfile.jsx';
import TodoWrapper from './components/view/TodoWrapper.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Setup router for React
export default React.render(
  <Router>
    <Route path='/' component={App}>
      <Route path='/crm' component={CrmPage}>
        <IndexRoute component={LoginPage}/>
        <Route path='/crm/companies' component={CrmCompanyPage}/>
        <Route path='/crm/companies/:id' component={CrmCompanyPage}/>
      </Route>
      <IndexRoute component={DashboardPage}/>
      <Route path='/locations' component={Locations}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/messages' component={MessagesPage}/>
      <Route path='/pages' component={PagesPage}/>
      <Route path='/settings' component={SettingsPage}/>
      <Route path='/signup' component={SignupPage}/>
      <Route path='/sites' component={SitesPage}/>
      <Route path='/store' component={StorePage}/>
      <Route path='/todos' component={TodosPage}/>
      <Route path='/todos/:id' component={TodoWrapper}/>
      <Route path='/users' component={UsersPage}/>
      <Route path='/users/new' component={CreateUser}/>

      <Route path='/posts' component={PostsPage}/>
      <Route path='/profile' component={UserProfile}/>
      <Route path='/preview' component={Preview}/>

    </Route>
  </Router>,
  document.body
);
