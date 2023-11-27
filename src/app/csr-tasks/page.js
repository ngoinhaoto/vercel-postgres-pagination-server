"use client";
import React from "react";
import "../../components/table/table.css";
import TableRow from "../../components/table/TableRow";
import PaginationFooter from "../../components/table/PaginationFooter";

export default function Task() {
  const [taskResponse, setTasksResponse] = React.useState({
    items: [],
    total: 0,
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemPerpage, setItemPerpage] = React.useState(5);

  const taskRows = taskResponse.items.map((task) => {
    return <TableRow key={task.id} {...task} />;
  });

  React.useEffect(() => {
    const loadTasks = async () => {
      let params = new URLSearchParams();
      params.append("itemsPerPage", itemPerpage);
      params.append("pageNumber", currentPage);
      const res = await fetch(`http://localhost:3000/api/tasks?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setTasksResponse(data);
    };

    loadTasks();
  }, [currentPage, itemPerpage]);

  return (
    <>
      <h1 className="flex justify-center">Task List</h1>
      <br />
      <p>
        Hello you, this is Task list page and auto generate by NextJs, you no
        need to install any aditionaly libary such as react-router-dom
      </p>
      <br />
      <table id="customers">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {taskRows}
        </tbody>
      </table>
      <PaginationFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemPerpage={itemPerpage}
        setItemPerpage={setItemPerpage}
        totalItem={taskResponse.total}
      />
    </>
  );
}
