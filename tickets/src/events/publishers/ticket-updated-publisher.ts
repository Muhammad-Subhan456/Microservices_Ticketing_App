import { Publisher, Subjects, TicketUpdatedEvent} from "@msatickets/common"

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

};