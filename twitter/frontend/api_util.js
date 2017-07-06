const APIUtil = {
  followUser: id => (
    $.ajax ({
      url: `/users/${id}/follow`,
      type: "POST",
      dataType: 'json'
    })
  ),

  unfollowUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      type: "DELETE",
      dataType: 'json'
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax ({
      url: `/users/search`,
      type: "GET",
      dataType: 'json'
    });
  }
};

module.exports = APIUtil;
