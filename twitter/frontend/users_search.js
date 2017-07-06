const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor($user) {
    this.$user = $user;
    this.$input = $('.search-input');
    // this.$input = $user.find("input");
    this.$ul = $user.find("ul");
  }

  render() {
    this.$ul.empty();
    
  }

  handleInput(){
    this.$user.on("input", event => {
      event.preventDefault();
      APIUtil.searchUsers(this.$input.val()).then(() => {

      });
    });
  }
}

module.exports = UsersSearch;
