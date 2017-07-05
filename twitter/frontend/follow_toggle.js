const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render = this.render.bind(this);
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "false") {
      this.$el.text("Follow");
    } else if (this.followState === "true") {
      this.$el.text("Unfollow");
    }
  }

  handleClick() {
    this.$el.click(event => {
      event.preventDefault();
      if (this.followState === "false") {
        APIUtil.followUser(this.userId).then(() => {

          this.followState = "true";
          // this.$el.data("initial-follow-state", "true");
          this.render();
        });
    } else {
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = "false";
          // this.$el.attr("data-initial-follow-state", "false");
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;
