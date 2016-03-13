
  ctrl.$inject = ['myValues', 'customerService'];

  export default function ctrl(myValues, customerService) {
    var that = this;
    that.name = myValues.hero();
    refresh();
    that.addUser = function() {
      customerService.addUser(that.username, that.email);
      clearInput();
      refresh();
    };
    that.removeUser = function(user) {
      customerService.removeUser(user.email);
      refresh();
    };
    function refresh() {
      that.users = customerService.users();
    }

    function clearInput() {
      that.username = "";
      that.email = "";
    }
  }
