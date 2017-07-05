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
      if (this.followState === "false") {
        $.ajax ({
        url: `/users/${this.userId}/follow`,
        type: "POST",
        success: (followData) => {
          this.followState = "true";
          this.$el.attr("data-initial-follow-state", "true");
          this.render();
        }
      });
    } else {
      $.ajax ({
        url: `/users/${this.userId}/follow`,
        type: "DELETE",
        dataType: 'json',
        success: (followData) => {
          this.followState = "false";
          this.$el.attr("data-initial-follow-state", "false");
          this.render();
        }
      });
    }
    });
  }
}

module.exports = FollowToggle;
