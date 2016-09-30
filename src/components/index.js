import angular from 'angular'
import uiRouter from 'angular-ui-router'
import services from 'services'
import initComponent from './init.component'

export default angular.module('app.component', [services])
.component(initComponent.selector, initComponent)
.name
