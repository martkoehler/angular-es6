import crm from '../app/crm';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("contains name of crm module", function() {
    expect(crm).toBe('crm');
  });
  it("has crm module", function() {
    let mod = angular.module('crm');
    expect(mod).not.toBe(undefined);
  });
});
