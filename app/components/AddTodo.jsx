var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();
      var todo = this.refs.todo.value;
        console.log(todo);
      if(todo.length>1){
        this.refs.todo.value = '';
        this.props.onAddTodo(todo);
      } else {
          this.refs.todoText.focus
      }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
            );
    }
})

module.exports = AddTodo;