import './Todo.css'

function TodoItem(props) {
  return (
    <div className="TodoItem">
      <strong>{props.dateAndTime}</strong>
      {props.priority ? (
        <p className="todoDetailUrgent">{props.content}</p>
      ) : (
        <p className="todoDetail">{props.content}</p>
      )}
      <button className="todoDeleteButton" onClick={props.clickEvent} value={props.id}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;