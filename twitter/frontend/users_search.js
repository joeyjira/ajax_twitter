class UsersSearch {
  constructor($user) {
    this.$user = $user;
    this.$input = $('.search-input');
    // this.$input = $user.find("input");
    this.$ul = $user.find("ul");
  }

  
}

module.exports = UsersSearch;
