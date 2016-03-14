import confirmDialog from './confirm-dialog.directive';
import controller from './customer.controller';
import customerService from './customer.service';
import myValues from './my-values.factory';

// customer administration feature module
export default angular.module('customerAdministration', [])
.directive('confirmDialog', confirmDialog)
.controller('customerController', controller)
.provider('customerService', customerService)
.factory('myValues', myValues);
