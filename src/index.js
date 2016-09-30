import 'bootstrap/less/bootstrap.less'
import angular from 'angular'
import uiRouter from 'angular-ui-router'
import components from 'components'
import services from 'services'
import routes from './config/router.config'


export default angular.module('app', [uiRouter, components, services])
    .config(routes)
