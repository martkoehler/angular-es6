import confirmDialog from './confirm-dialog.directive';
import controller from './customer.controller';
import customerService from './customer.service';
import MySuperHeroService from './my-superhero.service';
import hidden from './hidden';
import {MyDirective} from './MyDirective';


// customer administration feature module
export default angular.module('customerAdministration', [])
.directive('confirmDialog', confirmDialog)
.controller('customerController', controller)
.provider('customerService', customerService)
.service('myValues', MySuperHeroService)
.directive('myDirective', MyDirective)
.service('hidden', hidden);
