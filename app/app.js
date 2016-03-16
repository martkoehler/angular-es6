import angular from 'angular';
import customerAdministration from './customer-administration/customer-administration.module';
import MyDirective from './customer-administration/MyDirective';

// main app module with additional configuration
export default angular.module('app', ['customerAdministration'])
  .config(function(customerServiceProvider) {
    var customers = [{
      username: 'Mart Köhler',
      email: 'mart.koehler@openknowledge.de'
    }];

    customerServiceProvider.activate(customers);
  });
