import React from "react";
import "./Canvas.css";
import Block from "./Block";

function Canvas({ data, groupBy }) {
  const groupedData = groupTickets(data.tickets, groupBy);

  return (
    <div className="canvas">
      {Object.entries(groupedData).map(([group, tickets]) => (
        <Block key={group} title={group} tickets={tickets} />
      ))}
    </div>
  );
}

// Helper function to group tickets based on selected grouping
function groupTickets(tickets, groupBy) {
  return tickets.reduce((groups, ticket) => {
    let key;
    if (groupBy === "priority") key = priorityLabel(ticket.priority);
    else if (groupBy === "user") key = ticket.userId;
    else key = ticket.status;

    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
    return groups;
  }, {});
}

// Convert priority number to readable label
function priorityLabel(priority) {
  const labels = ["No priority", "Low", "Medium", "High", "Urgent"];
  return labels[priority] || "No priority";
}

export default Canvas;
