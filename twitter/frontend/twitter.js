const FollowToggle = require('./follow_toggle.js');
$(() => {
  let $el = $("button.follow-toggle");
  let buttArray = [];
  $el.each((idx, el) => {
    buttArray.push(new FollowToggle($(el)));
  });
});
