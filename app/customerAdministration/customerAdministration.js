import confirm from './confirm';
import ctrl from './customerController';
import customerService from './customerService';
import myFactory from './myValues';

const moduleName = 'customerAdministration';

export default moduleName;

// customer administration feature module
angular.module(moduleName, [])
.directive('confirm',confirm)
.controller('CustomerController', ctrl)
.provider('customerService', customerService)
.factory('myValues', myFactory);
