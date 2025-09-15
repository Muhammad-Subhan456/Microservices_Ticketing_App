import { Publisher, Subjects, TicketCreatedEvent} from "@msatickets/common"

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated 

};