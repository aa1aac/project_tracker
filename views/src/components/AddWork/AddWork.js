import React, { useState } from "react";

const AddWork = (props) => {
  const [flag, setFlag] = useState("");
  const [work, setWork] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (flag && work) {
      props.addWork({ flag, work });
    }
  };

  return (
    <form className="container mt-3" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="work">work</label>
        <input
          type="text"
          required
          className="form-control"
          id="work"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
      </div>

      <div className="form-group ">
        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          className="form-control"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        >
          <option value="" disabled>
            {" "}
          </option>
          <option value="urgent">Urgent</option>
          <option value="not urgent">Not Urgent</option>
        </select>
      </div>

      <button type="submit" className="btn btn-info">
        {" "}
        Add Work!{" "}
      </button>
    </form>
  );
};

export default AddWork;
