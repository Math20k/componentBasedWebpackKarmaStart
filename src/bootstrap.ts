require('!!file?name=[name].[ext]!./index.html');

require('jquery');
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

import * as angular from 'angular';
import appModule from './app/index';

angular.element(document).ready(() => {
  angular.bootstrap(document, [
    appModule.name
  ]);
});
