import React from "react";
import { useEffect, useState } from "react";
const DataProcessing = ({ onSendData, groupby, orderby }) => {
  const [tickets, settickets] = useState([]);
  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const data = await response.json();
        settickets(data.tickets);
        setusers(data.users);
      } catch (error) {
        console.error("Fetching data error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupby", groupby);
  }, [groupby]);

  useEffect(() => {
    localStorage.setItem("orderby", orderby);
  }, [orderby]);

  const groupbyuser = (tickets, users) => {
    const grouped = {};
    users.forEach((user) => {
      grouped[user.name] = tickets.filter(
        (ticket) => ticket.userId === user.id
      );
    });
    return grouped;
  };

  const groupbystatus = (tickets) => {
    const grouped = {
      Todo: [],
      "In progress": [],
      Backlog: [],
    };
    tickets.forEach((ticket) => {
      grouped[ticket.status].push(ticket);
    });
    return grouped;
  };

  const groupbypriority = (tickets) => {
    const grouped = {
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
      "No Priority": [],
    };
    tickets.forEach((ticket) => {
      if (ticket.priority === 4) grouped.Urgent.push(ticket);
      else if (ticket.priority === 3) grouped.High.push(ticket);
      else if (ticket.priority === 2) grouped.Medium.push(ticket);
      else if (ticket.priority === 1) grouped.Low.push(ticket);
      else grouped["No Priority"].push(ticket);
    });
    return grouped;
  };

  const group = (tickets) => {
    if (groupby === "User") {
      return groupbyuser(tickets, users);
    } else if (groupby === "Priority") {
      return groupbypriority(tickets);
    } else {
      return groupbystatus(tickets);
    }
  };

  const order = (groupedData) => {
    const orderedData = {};
    Object.keys(groupedData).forEach((key) => {
      orderedData[key] = [...groupedData[key]].sort((a, b) => {
        if (orderby === "Priority") {
          return b.priority - a.priority;
        } else if (orderby === "Title") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });
    return orderedData;
  };

  const groupeddata = group(tickets);
  const orderedGroupedData = order(groupeddata);
  useEffect(() => {
    onSendData(orderedGroupedData);
  }, [groupby, orderby, tickets]);

  return <></>;
};
export default DataProcessing;
