import angular from 'angular';
import customerAdministration from './customerAdministration/customerAdministration';

const moduleName = 'crm';

export default moduleName;

// main app module with additional configuration
angular.module(moduleName, [customerAdministration])
  .config(function(customerServiceProvider) {
    var customers = [{
      username: 'Mart Köhler',
      email: 'mart.koehler@openknowledge.de'
    }];
    customerServiceProvider.activate(customers);
  });
