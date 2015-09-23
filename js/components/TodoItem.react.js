var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

var TodoItem = React.createClass({

    propTypes: {
        todo: React.PropTypes.object.isRequired
    },

    render: function () {
        var todo = this.props.todo;

        return (
            <li key={todo.id} className="list-group-item" >

                <label>{todo.text}</label>

                <button className="btn btn-xs btn-danger pull-right" onClick={this._onDestroyClick} >
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                </button>

            </li>
        );
    },

    _onDestroyClick: function () {
        TodoActions.destroy(this.props.todo.id);
    }

});

module.exports = TodoItem;
