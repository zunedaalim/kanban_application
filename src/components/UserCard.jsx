import React from "react";
import styles from "./UserCard.module.css";
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
import circle from "../assets/circle.png";

const UserCard = ({ ticket }) => {
  const userId = ticket.userId;
  const priorityimg = () => {
    if (ticket.priority == 0) return noPriority;
    else if (ticket.priority == 1) return low;
    else if (ticket.priority == 2) return medium;
    else if (ticket.priority == 3) return high;
    else return urgentorange;
  };
  const statusimg = () => {
    if (ticket.status == "Backlog") return Backlog;
    else if (ticket.status == "Todo") return todo;
    else if (ticket.status == "In progress") return inprogress;
    else if (ticket.status == "Done") return done;
    else return cancelled;
  };
  return (
    <div className={styles.ticket}>
      <div className={styles.cardheading}>
        <p>{ticket.id}</p>
      </div>
      <div className={styles.title}>
        <div className={styles.priority}>
          <img className={styles.small} src={statusimg()} alt="" />
        </div>
        <h4>{ticket.title}</h4>
      </div>

      <div className={styles.cardfooter}>
        <img className={styles.small} src={priorityimg()} alt="grey circle" />
        <div className={styles.featurerequest}>
          <p>{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
