
  export default class customerController {
    constructor(myValues, customerService, $timeout) {
      this._myValues = myValues;
      this._customerService = customerService;
      this._$timeout = $timeout;
      this.name = myValues.hero();
      this.formActive = true;
      this.refresh();
      this.users= [];
      this.username = "";
      this.email = "";
    }

    addUser() {
      this._customerService.addUser(this.username, this.email);
      this.resetForm();
      this.refresh();
    }
    removeUser(user) {
      this._customerService.removeUser(user.email);
      this.refresh();
    }
    refresh() {
      this.users = this._customerService.users();
    }

    resetForm() {
     this.formActive = false;
     var that = this;
      this._$timeout(function() {
        that.username = "";
        that.email = "";
        that.formActive=true;
      }, 0);
    }
  }
