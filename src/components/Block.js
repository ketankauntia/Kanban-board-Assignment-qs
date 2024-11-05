import React from "react";
import "./Block.css";
import Card from "./Card";

import dots from "../assets/3-dot-menu.svg";
import add from "../assets/add.svg";

import High from "../assets/Img-HighPriority.svg";
import Low from "../assets/Img-LowPriority.svg";
import Medium from "../assets/Img-MediumPriority.svg";
// import {No Priority} from "../assets/No-priority.svg";
import Urgent from "../assets/SVG-UrgentPrioritycolour.svg";

function Block({ title, tickets }) {
  const priorityIcon = () => {
    switch (title) {
      case "High":
        return High;
      case "Medium":
        return Medium;
      case "Low":
        return Low;
      case "Urgent":
        return Urgent;
      default:
        return null; // No icon for other titles
    }
  };

  return (
    <div className="block">
      <div className="single-block">
        <div className="block-title">
          <div className="block-left">
            <span className="block-icon">
              {priorityIcon() && <img src={priorityIcon()} alt="Priority" />}
            </span>
            <span className="block-text">{title}</span>
            <span className="ticket-count">{tickets.length}</span>
          </div>
          <div className="block-right">
            <span className="block-icon">
              <img src={add} alt="Add" />
            </span>
            <span className="block-icon">
              <img src={dots} alt="Menu" />
            </span>
          </div>
        </div>
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Block;
