import Item from "./Item";
import Loader from "./Loader";

export default function TableContainer() {
    return (
        <section className="todo-list-container">
        <h1>Todo List</h1>
  
        <div className="add-btn-container">
          <button className="btn">+ Add new Todo</button>
        </div>
  
        <div className="table-wrapper">
  
          {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
            <Loader />

          <table className="table">
            <thead>
              <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
              </tr>
            </thead>
            <tbody>

                <Item />

            </tbody>
          </table>
        </div>
      </section>
    )
}