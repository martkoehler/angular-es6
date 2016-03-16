export default class MySuperHeroService {

    constructor(hidden) {
      this._hidden = hidden;
    }
    hero() {
      return this._hidden.getName();
    }
    heroDetails() {
      return {
        username: 'Batman',
        email: 'batman@foobar.de'
      }
    }
  }
