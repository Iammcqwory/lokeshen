export interface Venue {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  eventTypes: EventType[];
  description?: string;
  amenities?: string[];
  images?: string[];
  reviews?: number;
}

export type EventType = "wedding" | "party" | "photoshoot" | "corporate" | "birthday" | "anniversary";

export interface SearchFilters {
  location: string;
  date: Date | undefined;
  eventType: string;
  priceRange: number[];
  capacity: string;
}

export interface VenueCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  eventTypes: EventType[];
  onClick: () => void;
}