import { Ticket } from './Ticket.interface';

export interface Concert {
  date: string;
  title: string;
  category: string;
  description: string;
  image: string;
  header_image: string;
  location: string;
  url: string;
  tickets: Ticket[];
}
