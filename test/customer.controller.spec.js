import customerController from '../app/customer-administration/customer.controller';
import customerService from '../app/customer-administration/customer.service';
import myValueFactory from '../app/customer-administration/my-values.factory';

describe("A customerController", function() {
  it("has a manual mocked myValues factory", function() {
    var myValueMockService = function MyValueMockService() {
      function hero() {
        return "not my hero";
      }
      return {
        hero: hero
      };
    };

    var controller = new customerController(new myValueMockService(), new customerService().$get());
    expect(controller.name).toBe('not my hero');
  });

  it("has a jasmine mocked myValues factory", function() {
    var mockService = new myValueFactory();
    spyOn(mockService, "hero").and.returnValues("not my hero");

    var controller = new customerController(mockService, new customerService().$get());

    expect(controller.name).toBe('not my hero');
    expect(mockService.hero.calls.count()).toEqual(1);
  });

});
