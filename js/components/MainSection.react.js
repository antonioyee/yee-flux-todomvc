var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.react');

var MainSection = React.createClass({

    render: function() {
        var allTodos = this.props.allTodos;
        var todos = [];

        for (var key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]} />);
        }

        return (
            <div iclassName="container">
                <ul className="list-group">{todos}</ul>
            </div>
        );
    },

});

module.exports = MainSection;
