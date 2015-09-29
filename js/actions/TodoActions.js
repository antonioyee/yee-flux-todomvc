var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

    create: function (text) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    },

    destroy: function (id) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    },

    editing: function (id, text) {
        AppDispatcher.handleViewAction({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            text: text,
            id: id
        });
    },

};

module.exports = TodoActions;
