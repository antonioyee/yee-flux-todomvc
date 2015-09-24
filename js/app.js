var React = require('react');
var Parse = require('parse');
var TodoApp = require('./components/TodoApp.react');

Parse.initialize('ApplicationID', 'JavaScriptKey');

React.render(
    <TodoApp />, document.getElementById('contenedor')
);
