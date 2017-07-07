angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function () {

    var _lenght = 10;
    this.getLenght = function () {
        return _length;
    };

    this.setLenght = function (length) {
        _lenght = length;
    };

    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < _lenght) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        }
    }
});