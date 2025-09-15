import { Venue } from "@/types/venue";

export const mockVenues: Venue[] = [
  {
    id: "1",
    name: "Enchanted Garden Villa",
    location: "Karen, Nairobi",
    price: 120000,
    rating: 4.8,
    capacity: 200,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["wedding", "party", "corporate"],
    description: "A beautiful garden villa perfect for elegant events with stunning natural surroundings.",
    amenities: ["Garden", "Parking", "Catering", "Audio/Visual Equipment", "Bridal Suite"],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 124
  },
  {
    id: "2",
    name: "Rooftop Terrace Nairobi",
    location: "Westlands, Nairobi",
    price: 85000,
    rating: 4.6,
    capacity: 150,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["party", "photoshoot", "corporate"],
    description: "Modern rooftop space with panoramic city views, perfect for stylish events.",
    amenities: ["City Views", "Bar", "Dance Floor", "Climate Control", "Security"],
    images: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 89
  },
  {
    id: "3",
    name: "Rustic Barn Retreat",
    location: "Kiambu County",
    price: 75000,
    rating: 4.7,
    capacity: 180,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["wedding", "anniversary", "birthday"],
    description: "Charming rustic venue with authentic barn atmosphere and country charm.",
    amenities: ["Rustic Decor", "Outdoor Space", "Kitchen Facilities", "Parking", "Photo Areas"],
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 156
  },
  {
    id: "4",
    name: "Modern Event Hall",
    location: "Kilimani, Nairobi",
    price: 95000,
    rating: 4.5,
    capacity: 300,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["corporate", "wedding", "party"],
    description: "Contemporary event hall with state-of-the-art facilities and flexible layouts.",
    amenities: ["Modern Design", "A/V Equipment", "Stage", "Green Rooms", "Catering Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 203
  },
  {
    id: "5",
    name: "Lakeside Lodge",
    location: "Naivasha",
    price: 140000,
    rating: 4.9,
    capacity: 250,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["wedding", "photoshoot", "anniversary"],
    description: "Breathtaking lakeside venue offering serene water views and natural beauty.",
    amenities: ["Lake Views", "Boat Access", "Gardens", "Guest Rooms", "Restaurant"],
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 87
  },
  {
    id: "6",
    name: "Urban Loft Space",
    location: "CBD, Nairobi",
    price: 65000,
    rating: 4.4,
    capacity: 100,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["party", "corporate", "photoshoot"],
    description: "Trendy urban loft with industrial design and flexible event space.",
    amenities: ["Industrial Design", "Natural Light", "Sound System", "Bar Area", "Loading Dock"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 72
  }
];