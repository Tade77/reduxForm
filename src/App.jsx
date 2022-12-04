import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserForm } from "./store/form";
import "./App.css";
import Modal from "./Modal";
// import ModalOverLay from "./ModalOverLay";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const users = useSelector((state) => state.formSlice.users);
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
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <h1>User Form</h1>

          <div className="user--form">
            <label>
              <span>username</span>
              <input type="text" name="username" required />
            </label>
            <label>
              <span>email</span>
              <input type="email" name="email" required />
            </label>
            <label>
              <span>Phone Number</span>
              <input type="number" name="number" required />
            </label>
            <label>
              <span>leave your comment</span>
              <textarea name="comment" />
            </label>
            <button
              style={{ width: "80px", marginTop: "1rem", borderRadius: "5px" }}
              onClick={() => setOpenModal(true)}
              type="submit"
            >
              Submit
            </button>
            {openModal && (
              <Modal closeModal={setOpenModal} handleSubmit={handleSubmit} />
            )}
          </div>
        </form>
      </div>
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
