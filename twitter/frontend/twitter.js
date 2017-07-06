const FollowToggle = require('./follow_toggle.js');
const UserSearch = require('./users_search.js');

$(() => {
  let $el = $("button.follow-toggle");
  let $users = $("nav.users-search");

  let buttArray = [];
  $el.each((idx, el) => {
    buttArray.push(new FollowToggle($(el)));
  });
  $users.each((idx, user) => {
    new UserSearch($(user));
  });
});
