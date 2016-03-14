import app from '../app/app';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("has app module", function() {
    let mod = angular.module('app');
    expect(mod).not.toBe(undefined);
  });
});
