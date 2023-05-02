export function NewTodoForm() {
    <form action="" onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item" className="item">New Item</label>
      <input 
      type="text" 
      onChange={e => setNewItem(e.target.value)} 
      id="item" />
    </div>
    <button onClick={() => deleteTodo(todo.id)} 
        className="btn btn-danger">Delete</button>
  </form>

}