import * as angular from 'angular';
import router from 'angular-ui-router';

//configs
import routeConfig from './config/routes.config';

//components
import appComponent from './root';
import appHeaderComponent from './components/header';
import appTitleComponent from './components/title';

//services
import services from './services';
//views
import views from './views';

export default angular.module('app', [
  router,
  appComponent.name,
  appHeaderComponent.name,
  appTitleComponent.name,
  services.name,
  views.name
]).config(routeConfig)

  ;
