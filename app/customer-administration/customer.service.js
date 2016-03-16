  export default class customerService {
    constructor() {
      this.privateUserList = [];
    }

    activate(users) {
      this.privateUserList = users;
    }

    $get() {
      var that = this;
      return {
        users() {
          return [].concat(this.privateUserList);
        },
        addUser(username, email) {
          that.privateUserList.push({
            username: username,
            email: email
          });
        },
        removeUser(email) {
          that.privateUserList = that.privateUserList.filter(function(user) {
            return user.email !== email;
          });
        }
      };
    }
  };
