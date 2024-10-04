import React from "react";
import Column from "./Column";
import "./Layout.css";
import threedot from "../assets/3 dot menu.svg";
import add from "../assets/add.svg";
import done from "../assets/done.svg";
import cancelled from "../assets/Cancelled.svg";
import inprogress from "../assets/in-progress.svg";
import Backlog from "../assets/Backlog.svg";
import noPriority from "../assets/No-priority.svg";
import urgentgrey from "../assets/urgent-grey.svg";
import urgentorange from "../assets/urgent-orng.svg";
import low from "../assets/low.svg";
import medium from "../assets/medium.svg";
import high from "../assets/high.svg";
import todo from "../assets/to-do.svg";
import Ramesh from "../assets/Ramesh.jpg";
import ShankarKumar from "../assets/ShankarKumar.jpg";
import Suresh from "../assets/Suresh.jpg";
import Yogesh from "../assets/Yogesh.jpg";
import AnoopSharma from "../assets/Anoopsharma.jpg";

const Layout = ({ data, groupby }) => {
  const processcolumn = (groupby) => {
    if (groupby === "Status")
      return [
        { title: "Backlog", icon: Backlog },
        { title: "Todo", icon: todo },
        { title: "In progress", icon: inprogress },
        { title: "Done", icon: done },
        { title: "Cancelled", icon: cancelled },
      ];
    else if (groupby === "User")
      return [
        { title: "Anoop sharma", icon: AnoopSharma },
        { title: "Yogesh", icon: Yogesh },
        { title: "Shankar Kumar", icon: ShankarKumar },
        { title: "Ramesh", icon: Ramesh },
        { title: "Suresh", icon: Suresh },
      ];
    else if (groupby === "Priority")
      return [
        { title: "No Priority", icon: noPriority },
        { title: "Urgent", icon: urgentorange },
        { title: "High", icon: high },
        { title: "Medium", icon: medium },
        { title: "Low", icon: low },
      ];
    else return [];
  };

  const preparecolumns = (groupedData, columns) => {
    return columns.reduce((acc, column) => {
      const columnName = column.title;
      acc[columnName] = {
        tickets: groupedData[columnName] || [],
        icon: column.icon,
      };
      return acc;
    }, {});
  };

  const columns = processcolumn(groupby);
  const preparedData = preparecolumns(data, columns);

  return (
    <div className="layout">
      {columns.map((column) => (
        <>
          <Column
            key={column.title}
            title={column.title}
            tickets={preparedData[column.title].tickets}
            icon={column.icon}
            groupby={groupby}
          />
          {/* <button
            onClick={() => {
              console.log(preparedData[column.title].tickets);
            }}
          >
            Log tickets
          </button> */}
        </>
      ))}
    </div>
  );
};

export default Layout;
