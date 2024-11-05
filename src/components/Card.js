import React from "react";
import "./Card.css";

import HighPriorityIcon from "../assets/Img-HighPriority.svg";
import LowPriorityIcon from "../assets/Img-LowPriority.svg";
import MediumPriorityIcon from "../assets/Img-MediumPriority.svg";
import NoPriorityIcon from "../assets/No-priority.svg";
import UrgentPriorityIcon from "../assets/SVG-UrgentPrioritycolour.svg";

import UserAvatar from "../images/usr-1.png"; // Ensure the path is correct

const TicketCard = ({ ticket }) => {
  const { id, title, priority, tag, userId } = ticket;
  const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
  const priorityClasses = ["no-priority", "low", "medium", "high", "urgent"];

  return (
    <div className="ticket-card">
      <div className="ticket-left">
        <div className="ticket-id">{id}</div>
        <div className="ticket-title">{title}</div>

        <div className="ticket-meta">
          <div className={`priority-badge ${priorityClasses[priority]}`}>
            {priority === 0 && <img src={NoPriorityIcon}></img>}
            {priority === 1 && <img src={LowPriorityIcon}></img>}
            {priority === 2 && <img src={MediumPriorityIcon}></img>}
            {priority === 3 && <img src={HighPriorityIcon}></img>}
            {priority === 4 && <img src={UrgentPriorityIcon}></img>}
          </div>

          <div className="type-badge">{tag[0]}</div>
        </div>
      </div>

      <div className="ticket-user">
        <img src={UserAvatar} alt="User Avatar" />
      </div>
    </div>
  );
};

export default TicketCard;
