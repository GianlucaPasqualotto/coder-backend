"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User(name, lastname) {
        _classCallCheck(this, User);

        this.name = name;
        this.lastname = lastname;
    }

    _createClass(User, [{
        key: "getName",
        value: function getName() {
            return this.name + " " + this.lastname;
        }
    }]);

    return User;
}();

var usuario1 = new User("Gianluca", "Pasqualotto");
