import "./Grouping.css";
import dots from "../assets/3-dot-menu.svg";
import add from "../assets/add.svg";
import HighPriorityIcon from "./assets/Img-HighPriority.svg";
import LowPriorityIcon from "./assets/Img-LowPriority.svg";
import MediumPriorityIcon from "./assets/Img-MediumPriority.svg";
import NoPriorityIcon from "./assets/no-priority.svg";
import UrgentPriorityIcon from "./assets/SVG-UrgentPrioritycolour.svg";

const statusLabels = ["Backlog", "Todo", "In Progress", "Done", "Cancelled"];

function Grouping({ data, groupBy }) {
  return (
    <div class="grouping">
      <div class="grouping-container">
        {statusLabels.map((status, index) => (
          <div key={index} class="group-left">
            <span>
              <img src={dots} alt="Icon" width="20" height="20" />
            </span>
            {status}{" "}
            <span className="count-cards">
              {data.tickets.filter((ticket) => ticket.status === status).length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grouping;
