import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserForm } from "./store/form";
import "./App.css";
console.log({ addUserForm });

const App = () => {
  const users = useSelector((state) => state.formSlice);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const userData = {
      name: formEl.username.value,
      email: formEl.email.value,
      contact: formEl.number.value,
      comment: formEl.comment.value,
      // password: formEl.password.value,
    };
    // userData.reset();
    dispatch(addUserForm(userData));
    // console.log(userData);
    e.target.reset();
  };

  return (
    <aside className="app">
      <form onSubmit={handleSubmit}>
        <h1 style={{ margin: "50px" }}>User Form</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            rowGap: "10px",
            marginTop: "2rem",
            margin: "50px",
          }}
        >
          <label>
            <span>username</span>
            <input name="username" required />
          </label>
          <label>
            <span>email</span>
            <input name="email" required />
          </label>
          <label>
            <span>Phone Number</span>
            <input name="number" required />
          </label>
          <label>
            <span>leave your comment</span>
            <textarea name="comment" />
          </label>
        </div>
        <button style={{ width: "60px", marginLeft: "80px" }} type="submit">
          Submit
        </button>
      </form>
      <div className="output">
        <h1>Users</h1>
        <span>{JSON.stringify(users, null, 2)}</span>
        {/* <div>
        {users.map((user) => {
          return (
            <div key={user.userFullname}>
            <p>Fullname: {user.userFullname}</p>
            <p>email: {user.mail}</p>
            </div>
            );
          })}
        </div> */}
      </div>
    </aside>
  );
};

export default App;
