customerService.$inject = [];

  export default function customerService() {
    var privateUserList = [];

    this.activate = function(users) {
      privateUserList = users;
    };

    this.$get = function() {
      return {
        users: function() {
          return [].concat(privateUserList);
        },
        addUser: function(username, email) {
          privateUserList.push({
            username: username,
            email: email
          });
        },
        removeUser: function(email) {
          privateUserList = privateUserList.filter(function(user) {
            return user.email !== email;
          });
        },
        editUser: function(email) {

        }
      };
    };
  }
