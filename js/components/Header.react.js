var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var Header = React.createClass({

    render: function () {
        return (
            <header id="header" style={{'margin-bottom':'20px'}} >

                <h1 className="lead text-center">Yee - Flux - TodoMVC</h1>

                <TodoTextInput
                    id="new-todo"
                    className="form-control"
                    placeholder="¿Alguna tarea pendiente?"
                    onSave={this._onSave}
                />

            </header>
        );
    },

    _onSave: function (text) {
        TodoActions.create(text);
    }

});

module.exports = Header;
