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
      userFullname: formEl.username.value,
      mail: formEl.email.value,
      // password: formEl.password.value,
    };
    // userData.reset();
    dispatch(addUserForm(userData));
    // console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{ margin: "50px" }}>User Form Input</h1>

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
        </div>
        <button style={{ width: "60px", marginLeft: "80px" }} type="submit">
          Submit
        </button>
      </form>
      <h1>User</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user.userFullname}>
              <p>Fullname: {user.userFullname}</p>
              <p>email: {user.mail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
