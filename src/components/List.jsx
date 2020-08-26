import React from "react";

function List() {
  var counter = 1;
  return (<div>
    <h3 className="reactWork">React Work</h3>
    <ul>
      <li>Day 0
        <a href="http://eddieprogramming.tk" className="fade-in">
          &nbsp;This Home Page</a>
      </li>
      <li>Day 1
        <a href="#" className="fade-in">
          &nbsp;Simple To Do List App</a>
      </li>
    </ul>
  </div>);
}

export default List;
