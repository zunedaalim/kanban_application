import React from "react";
import StatusCard from "./StatusCard";
import PriorityCard from "./PriorityCard";
import CardHeader from "./cardheader";
import UserCard from "./UserCard";
const Column = ({ title, tickets, icon, groupby }) => {
  const size = tickets.length;
  return (
    <div className="column">
      <CardHeader title={title} icon={icon} size={size}></CardHeader>
      {/* <button
        onClick={() => {
          console.log(groupby);
        }}
      >
        Show
      </button> */}
      <div className="tickets">
        {tickets.map((ticket) =>
          groupby === "Status" ? (
            <StatusCard key={ticket.id} ticket={ticket} />
          ) : groupby === "Priority" ? (
            <PriorityCard key={ticket.id} ticket={ticket} />
          ) : (
            <UserCard key={ticket.id} ticket={ticket}></UserCard>
          )
        )}
      </div>
    </div>
  );
};

export default Column;
