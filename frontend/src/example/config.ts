import * as angular from 'angular';
import { example } from './controller';

let exampleApp = angular.module('exampleApp', []);

exampleApp.config(($interpolateProvider) => {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol('[[');
});

exampleApp.controller('exampleCtrl', example.ExampleCtrl);
