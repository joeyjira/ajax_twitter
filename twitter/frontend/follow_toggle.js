const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userId = $el.attr("data-user-id");
    this.followState = $el.attr("data-initial-follow-state");
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
      this.$el.prop("disabled", true);
      if (this.followState === "false") {
        APIUtil.followUser(this.userId).then(() => {
          this.followState = "true";
          this.render();
        }).then(() => {
          this.$el.prop("disabled", false);
        });
    } else {
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = "false";
          this.render();
        }).then(() => {
          this.$el.prop("disabled", false);
        });
      }
    });
  }
}

module.exports = FollowToggle;
