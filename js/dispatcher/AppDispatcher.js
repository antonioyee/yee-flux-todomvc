var Dispatcher = require('./Dispatcher');
var assing = require('object-assign');

var AppDispatcher = assing({}, Dispatcher.prototype, {

    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;
