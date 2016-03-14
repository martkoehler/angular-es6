import customerController from '../app/customerAdministration/customerController';
import customerService from '../app/customerAdministration/customerService';

describe("A customerController", function() {
  it("has a title", function() {
    var myValueMockService = function MyValueMockService() {
      function hero() {
        return "not my hero";
      }
      return {
        hero: hero
      }
    }

    var controller = new customerController(new myValueMockService(), new customerService().$get());
    expect(controller.name).toBe('not my hero');
  });

});
