import angular from 'angular'
import uiRouter from 'angular-ui-router'
import reduxModule from 'reduxModule'
import services from 'services'
import initComponent from './init.component'

export default angular.module('app.component', [reduxModule, services])
.component(initComponent.selector, initComponent)
.name
