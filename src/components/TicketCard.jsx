import { Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ color, ticket }) => {
  return (
    <div className="ticket-card flex w-full">
      <Link
        to={`/ticket/${ticket.documentId}`}
        id="link"
        className="flex w-full"
      >
        <div className="ticket-color w-4 p-4" style={{backgroundColor: color}}></div>
        <h3 className="flex items-center justify-center px-8 font-semibold bg-gray-200 mx-2"> {ticket.title} </h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={Number(ticket.priority)} />
        <ProgressDisplay priority={Number(ticket.progress)}/>
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  );
};

export default TicketCard;
