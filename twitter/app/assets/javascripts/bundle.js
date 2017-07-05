/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
$(() => {
  let $el = $("button.follow-toggle");
  let buttArray = [];
  $el.each((idx, el) => {
    buttArray.push(new FollowToggle($(el)));
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map