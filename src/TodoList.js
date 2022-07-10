import { Component } from "react";
import TodoItem from "./TodoItem";
import TopSearch from "./ToDoSearchAndFilter"


let uniqueSerial = 1;

const startingTodoList = [
  {
    id: uniqueSerial++,
    dateAndTime: "7/3/2022 6:12 PM",
    content: "Take rubbish bins out",
    priority: false,
  },
  {
    id: uniqueSerial++,
    dateAndTime: "7/3/2022 6:10 PM",
    content: "Finish Homework",
    priority: true,
  },
  {
    id: uniqueSerial++,
    dateAndTime: "7/3/2022 6:08 PM",
    content: "Feed cat",
    priority: false,
  },
];
localStorage.setItem("toDos", startingTodoList);
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.uniqueSerial = 4;
    this.state = {
      todos: startingTodoList,
      newTodo: "",
      newSearch: "",
      filterPriority: false,
    };
    // this.st = new Date()
  }
  deleteToDoItem = (event) => {
    let idToDelete = this.state.todos.findIndex((x) => x.id === parseInt(event.target.value));
    if (idToDelete > -1) {
      this.state.todos.splice(idToDelete, 1);
      this.setState({
        todos: [...this.state.todos],
      });
    }
  };
  deleteAll = () => {
    if (this.state.filterPriority)
    { 
      this.setState({
        todos: (this.state.todos.filter((e) => {
          if (!e.priority) {
            console.log(e.priority);
            return e
          }
      })) });
    } else {
      this.setState({ todos: (this.state.todos = []) })
    };
    console.log("Still NOT IMPLEMENTED");
  }; // TODO: Fill this
  searchHandler = () => {
    console.log("Still NOT IMPLEMENTED");
  };

  handlePost = (event) => {
    // How do we know what the value of the text box is?
    if (this.state.newTodo) {
      const newTodo = {
        id: this.uniqueSerial++,
        dateAndTime: new Date().toLocaleString().replace(",", "").replace(/:.. /, " "),
        content: this.state.newTodo,
        priority: this.state.priority,
      };
      this.setState({
        todos: [newTodo, ...this.state.todos],
      });
      this.state.newTodo = "";
    }
  };
  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  handleSearchInputChange = (event) => {
    this.setState({ newSearch: event.target.value });
  };
  handleCheckBox = (event) => {
    this.setState({ priority: event.target.checked });
  };
  handleCheckBox2 = (event) => {
    this.setState({ filterPriority: event.target.checked });
  };
  render() {
    return (
      <div className="wholePage">
        <div className="topWrapper">
          <p className="addToDo">
            <input type="text" value={this.state.newTodo} onChange={this.handleInputChange} />
            <button className="todoPostButton" onClick={this.handlePost}>
              Post
            </button>
            <button className="todoDeleteAllButton" onClick={this.deleteAll}>
              Delete ALl
            </button>
            <label>
              <input type="checkbox" id="highPriorityCheckMark" onChange={this.handleCheckBox} />
              High Priority
            </label>
          </p>
          <TopSearch
            searchText={this.state.newSearch}
            searchBoxChangeEvent={this.handleSearchInputChange}
            searchButClickEvent={this.searchHandler}
            checkBoxChangeEvent={this.handleCheckBox2}
            filterButtonEvent={this.searchHandler}
          ></TopSearch>
        </div>
        <div className="theActualList">
          {this.state.todos
            .map((todo, index) => {
              return (
                <TodoItem
                  key={index}
                  dateAndTime={todo.dateAndTime}
                  id={todo.id}
                  content={todo.content}
                  priority={todo.priority}
                  // clickEvent = {()=> {this.deleteToDoItem(index)}}  // TODO: try and implement this
                  clickEvent={this.deleteToDoItem}
                ></TodoItem>
              );
            })
            .sort((x, y) => {
              return x.props.priority === y.props.priority ? 0 : x.props.priority ? -1 : 1;
            })
            .filter((e) => {
              if (this.state.filterPriority) {
                console.log("DISPLAY THEM NOW", e.props.priority);
                if (e.props.priority) return e;
              } else {
                return e;
              }
            })}
        </div>
      </div>
    );
  }
}
export default TodoList;
