var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assing = require('object-assign');

var ParseReact = require('parse-react');

var CHANGE_EVENT = 'change';

var _todos = {};

function create(text) {
    var id = Date.now();
    _todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

function destroy(id) {
    delete _todos[id];
}

var TodoStore =  assing({}, EventEmitter.prototype, {

    getAll: function () {
        return _todos;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action;
        var text;

        switch (action.actionType) {
            case TodoConstants.TODO_CREATE:
                text = action.text.trim();
                if ( text !== '' ) {

                    ParseReact.Mutation.Create('Items', {
                        text: text
                    }).dispatch();

                    TodoStore.emitChange();
                }
                break;

            case TodoConstants.TODO_DESTROY:
                ParseReact.Mutation.Destroy(action.id).dispatch();
                TodoStore.emitChange();
                break;

            case TodoConstants.TODO_UPDATE_TEXT:
                text = action.text.trim();
                if ( text !== '' && action.id !== '' ) {

                    ParseReact.Mutation.Set(action.id, {
                        text: text
                    }).dispatch();

                    TodoStore.emitChange();
                }
                break;
        }

    })

});

module.exports = TodoStore;
