var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    };
}

var TodoApp = React.createClass({

    getInitialState: function () {
        return getTodoState();
    },

    mixins: [ParseReact.Mixin],

    observe: function() {
        return {
            items: (new Parse.Query('Items')).descending('createdAt')
        };
    },

    componentDidMount: function () {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodoStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return(
            <div className="container">

                <button className="btn btn-xs btn-success pull-right" onClick={this._refresh.bind(this)} style={{'margin-top':'24px'}}  >
                    <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                </button>

                <Header />

                <MainSection allTodos={this.data.items} areAllComplete={this.state.areAllComplete} />

                <Footer allTodos={this.data.items}  />

            </div>
        );
    },

    _onChange: function () {
        this.setState(getTodoState());
    },

    _refresh() {
      this.refreshQueries('items');
    }

});

module.exports = TodoApp;
