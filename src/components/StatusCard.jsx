import React from "react";
import styles from "./StatusCard.module.css";
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
import Ramesh from "../assets/Ramesh.jpg";
import ShankarKumar from "../assets/ShankarKumar.jpg";
import Suresh from "../assets/Suresh.jpg";
import Yogesh from "../assets/Yogesh.jpg";
import AnoopSharma from "../assets/Anoopsharma.jpg";

const StatusCard = ({ ticket }) => {
  const userId = ticket.userId;

  const userimg = () => {
    if (userId === "usr-1") return AnoopSharma;
    else if (userId === "usr-2") return Yogesh;
    else if (userId === "usr-3") return ShankarKumar;
    else if (userId === "usr-4") return Ramesh;
    else return Suresh;
  };
  const priorityimg = () => {
    if (ticket.priority == 0) return noPriority;
    else if (ticket.priority == 1) return low;
    else if (ticket.priority == 2) return medium;
    else if (ticket.priority == 3) return high;
    else return urgentorange;
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.cardheading}>
        <p>{ticket.id}</p>
        <div className={styles.profileheading}>
          <img className={styles.icon} src={userimg()} alt="User Profile" />
        </div>
      </div>
      <div className={styles.title}>
        <h4>{ticket.title}</h4>
      </div>

      <div className={styles.cardfooter}>
        <div className={styles.priority}>
          <img className={styles.small} src={priorityimg()} alt="" />
        </div>
        <div className={styles.featurerequest}>
          <img className={styles.small} src={circle} alt="grey circle" />
          <p>{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
