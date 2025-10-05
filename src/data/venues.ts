import { Venue } from "@/types/venue";

// Import venue images
import enchantedGardenVilla from "@/assets/venues/enchanted-garden-villa.jpg";
import rooftopTerraceNairobi from "@/assets/venues/rooftop-terrace-nairobi.jpg";
import rusticBarnRetreat from "@/assets/venues/rustic-barn-retreat.jpg";
import modernEventHall from "@/assets/venues/modern-event-hall.jpg";
import lakesideLodge from "@/assets/venues/lakeside-lodge.jpg";
import urbanLoftSpace from "@/assets/venues/urban-loft-space.jpg";
import coastalParadiseResort from "@/assets/venues/coastal-paradise-resort.jpg";
import highlandViewLodge from "@/assets/venues/highland-view-lodge.jpg";
import kisumuWaterfrontHall from "@/assets/venues/kisumu-waterfront-hall.jpg";
import eldoretCountryClub from "@/assets/venues/eldoret-country-club.jpg";
import meruRiversideGardens from "@/assets/venues/meru-riverside-gardens.jpg";
import thikaPalmGardens from "@/assets/venues/thika-palm-gardens.jpg";
import machakosExecutiveLodge from "@/assets/venues/machakos-executive-lodge.jpg";
import nyeriHillResort from "@/assets/venues/nyeri-hill-resort.jpg";
import malindiBeachClub from "@/assets/venues/malindi-beach-club.jpg";
import kakamegaForestRetreat from "@/assets/venues/kakamega-forest-retreat.jpg";
import nanyukiHighlandsEstate from "@/assets/venues/nanyuki-highlands-estate.jpg";
import kitaleGrandHall from "@/assets/venues/kitale-grand-hall.jpg";
import embuValleyGardens from "@/assets/venues/embu-valley-gardens.jpg";
import kerichoTeaEstateHall from "@/assets/venues/kericho-tea-estate-hall.jpg";
import bungomaCulturalCenter from "@/assets/venues/bungoma-cultural-center.jpg";
import garissaDesertOasis from "@/assets/venues/garissa-desert-oasis.jpg";
import kajiadoMaasaiLodge from "@/assets/venues/kajiado-maasai-lodge.jpg";
import kwaleCoastalGardens from "@/assets/venues/kwale-coastal-gardens.jpg";

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
    image: rooftopTerraceNairobi,
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
    image: rusticBarnRetreat,
    eventTypes: ["wedding", "anniversary", "birthday"],
    description: "Charming rustic venue with authentic barn atmosphere and country charm.",
    amenities: ["Rustic Decor", "Outdoor Space", "Kitchen Facilities", "Parking", "Photo Areas"],
    images: [
      rusticBarnRetreat,
      rusticBarnRetreat,
      rusticBarnRetreat
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
    image: modernEventHall,
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
    image: lakesideLodge,
    eventTypes: ["wedding", "photoshoot", "anniversary"],
    description: "Breathtaking lakeside venue offering serene water views and natural beauty.",
    amenities: ["Lake Views", "Boat Access", "Gardens", "Guest Rooms", "Restaurant"],
    images: [
      lakesideLodge,
      lakesideLodge,
      lakesideLodge
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
    image: urbanLoftSpace,
    eventTypes: ["party", "corporate", "photoshoot"],
    description: "Trendy urban loft with industrial design and flexible event space.",
    amenities: ["Industrial Design", "Natural Light", "Sound System", "Bar Area", "Loading Dock"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 72
  },
  {
    id: "7",
    name: "Coastal Paradise Resort",
    location: "Mombasa County",
    price: 180000,
    rating: 4.9,
    capacity: 350,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["wedding", "anniversary", "corporate"],
    description: "Stunning beachfront venue with ocean views and tropical ambiance.",
    amenities: ["Beach Access", "Ocean View", "Pool", "Catering", "Guest Rooms"],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 245
  },
  {
    id: "8",
    name: "Highland View Lodge",
    location: "Nakuru County",
    price: 110000,
    rating: 4.7,
    capacity: 220,
    image: highlandViewLodge,
    eventTypes: ["wedding", "corporate", "photoshoot"],
    description: "Scenic highland venue overlooking the Great Rift Valley.",
    amenities: ["Valley Views", "Gardens", "Parking", "Catering Kitchen", "Outdoor Deck"],
    images: [
      highlandViewLodge,
      highlandViewLodge,
      highlandViewLodge
    ],
    reviews: 132
  },
  {
    id: "9",
    name: "Kisumu Waterfront Hall",
    location: "Kisumu County",
    price: 90000,
    rating: 4.5,
    capacity: 280,
    image: kisumuWaterfrontHall,
    eventTypes: ["wedding", "party", "corporate"],
    description: "Modern lakeside venue with stunning Lake Victoria views.",
    amenities: ["Lake Views", "A/V Equipment", "Catering", "Boat Rides", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 98
  },
  {
    id: "10",
    name: "Eldoret Country Club",
    location: "Uasin Gishu County",
    price: 85000,
    rating: 4.6,
    capacity: 200,
    image: eldoretCountryClub,
    eventTypes: ["wedding", "corporate", "party"],
    description: "Elegant country club setting with lush green surroundings.",
    amenities: ["Golf Course", "Restaurant", "Bar", "Gardens", "Ample Parking"],
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 167
  },
  {
    id: "11",
    name: "Meru Riverside Gardens",
    location: "Meru County",
    price: 70000,
    rating: 4.4,
    capacity: 160,
    image: meruRiversideGardens,
    eventTypes: ["wedding", "birthday", "anniversary"],
    description: "Tranquil riverside venue surrounded by natural beauty.",
    amenities: ["River Views", "Gardens", "Outdoor Seating", "Parking", "Catering"],
    images: [
      meruRiversideGardens,
      meruRiversideGardens,
      meruRiversideGardens
    ],
    reviews: 85
  },
  {
    id: "12",
    name: "Thika Palm Gardens",
    location: "Kiambu County",
    price: 78000,
    rating: 4.3,
    capacity: 175,
    image: thikaPalmGardens,
    eventTypes: ["wedding", "party", "photoshoot"],
    description: "Beautiful palm-lined gardens perfect for outdoor celebrations.",
    amenities: ["Palm Gardens", "Gazebo", "Sound System", "Parking", "Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ],
    reviews: 94
  },
  {
    id: "13",
    name: "Machakos Executive Lodge",
    location: "Machakos County",
    price: 92000,
    rating: 4.6,
    capacity: 240,
    image: machakosExecutiveLodge,
    eventTypes: ["corporate", "wedding", "party"],
    description: "Contemporary lodge with panoramic views of Machakos town.",
    amenities: ["City Views", "Conference Rooms", "Restaurant", "Bar", "Security"],
    images: [
      machakosExecutiveLodge,
      machakosExecutiveLodge,
      machakosExecutiveLodge
    ],
    reviews: 118
  },
  {
    id: "14",
    name: "Nyeri Hill Resort",
    location: "Nyeri County",
    price: 105000,
    rating: 4.8,
    capacity: 190,
    image: nyeriHillResort,
    eventTypes: ["wedding", "corporate", "anniversary"],
    description: "Mountain resort with breathtaking views of Mount Kenya.",
    amenities: ["Mountain Views", "Gardens", "Guest Rooms", "Restaurant", "Spa"],
    images: [
      nyeriHillResort,
      nyeriHillResort,
      nyeriHillResort
    ],
    reviews: 154
  },
  {
    id: "15",
    name: "Malindi Beach Club",
    location: "Kilifi County",
    price: 155000,
    rating: 4.9,
    capacity: 300,
    image: malindiBeachClub,
    eventTypes: ["wedding", "party", "photoshoot"],
    description: "Exclusive beach club with white sand and turquoise waters.",
    amenities: ["Private Beach", "Pool", "Water Sports", "Catering", "Accommodation"],
    images: [
      malindiBeachClub,
      malindiBeachClub,
      malindiBeachClub
    ],
    reviews: 201
  },
  {
    id: "16",
    name: "Kakamega Forest Retreat",
    location: "Kakamega County",
    price: 68000,
    rating: 4.5,
    capacity: 140,
    image: kakamegaForestRetreat,
    eventTypes: ["wedding", "photoshoot", "party"],
    description: "Unique rainforest setting with natural canopy and wildlife.",
    amenities: ["Forest Views", "Nature Walks", "Outdoor Seating", "Catering", "Eco-Friendly"],
    images: [
      kakamegaForestRetreat,
      kakamegaForestRetreat,
      kakamegaForestRetreat
    ],
    reviews: 76
  },
  {
    id: "17",
    name: "Nanyuki Highlands Estate",
    location: "Laikipia County",
    price: 125000,
    rating: 4.7,
    capacity: 210,
    image: nanyukiHighlandsEstate,
    eventTypes: ["wedding", "corporate", "anniversary"],
    description: "Luxury highland estate with equator line and mountain views.",
    amenities: ["Equator Line", "Horse Riding", "Gardens", "Guest Cottages", "Restaurant"],
    images: [
      nanyukiHighlandsEstate,
      nanyukiHighlandsEstate,
      nanyukiHighlandsEstate
    ],
    reviews: 143
  },
  {
    id: "18",
    name: "Kitale Grand Hall",
    location: "Trans Nzoia County",
    price: 72000,
    rating: 4.4,
    capacity: 185,
    image: kitaleGrandHall,
    eventTypes: ["wedding", "corporate", "birthday"],
    description: "Spacious hall in the heart of Kenya's agricultural region.",
    amenities: ["A/V Equipment", "Stage", "Parking", "Catering", "AC"],
    images: [
      kitaleGrandHall,
      kitaleGrandHall,
      kitaleGrandHall
    ],
    reviews: 91
  },
  {
    id: "19",
    name: "Embu Valley Gardens",
    location: "Embu County",
    price: 76000,
    rating: 4.5,
    capacity: 165,
    image: embuValleyGardens,
    eventTypes: ["wedding", "party", "photoshoot"],
    description: "Scenic valley gardens with terraced landscapes.",
    amenities: ["Terraced Gardens", "Water Features", "Gazebo", "Parking", "Catering"],
    images: [
      embuValleyGardens,
      embuValleyGardens,
      embuValleyGardens
    ],
    reviews: 102
  },
  {
    id: "20",
    name: "Kericho Tea Estate Hall",
    location: "Kericho County",
    price: 88000,
    rating: 4.6,
    capacity: 195,
    image: kerichoTeaEstateHall,
    eventTypes: ["wedding", "corporate", "party"],
    description: "Unique venue surrounded by rolling tea plantations.",
    amenities: ["Tea Plantation Views", "Colonial Architecture", "Gardens", "Catering", "Tours"],
    images: [
      kerichoTeaEstateHall,
      kerichoTeaEstateHall,
      kerichoTeaEstateHall
    ],
    reviews: 129
  },
  {
    id: "21",
    name: "Bungoma Cultural Center",
    location: "Bungoma County",
    price: 65000,
    rating: 4.3,
    capacity: 170,
    image: bungomaCulturalCenter,
    eventTypes: ["wedding", "party", "anniversary"],
    description: "Traditional venue celebrating local culture and heritage.",
    amenities: ["Cultural Displays", "Outdoor Space", "Stage", "Parking", "Local Cuisine"],
    images: [
      bungomaCulturalCenter,
      bungomaCulturalCenter,
      bungomaCulturalCenter
    ],
    reviews: 68
  },
  {
    id: "22",
    name: "Garissa Desert Oasis",
    location: "Garissa County",
    price: 82000,
    rating: 4.4,
    capacity: 155,
    image: garissaDesertOasis,
    eventTypes: ["wedding", "corporate", "party"],
    description: "Unique desert venue with traditional and modern elements.",
    amenities: ["AC", "Generator", "Catering", "Security", "Indoor/Outdoor Space"],
    images: [
      garissaDesertOasis,
      garissaDesertOasis,
      garissaDesertOasis
    ],
    reviews: 54
  },
  {
    id: "23",
    name: "Kajiado Maasai Lodge",
    location: "Kajiado County",
    price: 115000,
    rating: 4.8,
    capacity: 205,
    image: kajiadoMaasaiLodge,
    eventTypes: ["wedding", "photoshoot", "corporate"],
    description: "Authentic Maasai-themed lodge with savannah views.",
    amenities: ["Wildlife Views", "Cultural Performances", "Bomas", "Catering", "Guest Rooms"],
    images: [
      kajiadoMaasaiLodge,
      kajiadoMaasaiLodge,
      kajiadoMaasaiLodge
    ],
    reviews: 178
  },
  {
    id: "24",
    name: "Kwale Coastal Gardens",
    location: "Kwale County",
    price: 98000,
    rating: 4.6,
    capacity: 180,
    image: kwaleCoastalGardens,
    eventTypes: ["wedding", "anniversary", "party"],
    description: "Tropical coastal gardens with ocean breeze.",
    amenities: ["Tropical Gardens", "Ocean Breeze", "Catering", "Parking", "Photo Spots"],
    images: [
      kwaleCoastalGardens,
      kwaleCoastalGardens,
      kwaleCoastalGardens
    ],
    reviews: 112
  }
];