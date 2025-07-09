import { VenueCard } from "@/components/VenueCard";
import { useWishlist } from "@/hooks/useWishlist";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock venues data (in a real app, this would come from an API)
const mockVenues = [
  {
    id: "1",
    name: "Enchanted Garden Villa",
    location: "Karen, Nairobi",
    price: 120000,
    rating: 4.8,
    capacity: 200,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Wedding", "Party", "Corporate"]
  },
  {
    id: "2",
    name: "Rooftop Terrace Nairobi",
    location: "Westlands, Nairobi",
    price: 85000,
    rating: 4.6,
    capacity: 150,
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Party", "Photoshoot", "Corporate"]
  },
  {
    id: "3",
    name: "Rustic Barn Retreat",
    location: "Kiambu County",
    price: 75000,
    rating: 4.7,
    capacity: 180,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Wedding", "Anniversary", "Birthday"]
  },
  {
    id: "4",
    name: "Modern Event Hall",
    location: "Kilimani, Nairobi",
    price: 95000,
    rating: 4.5,
    capacity: 300,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Corporate", "Wedding", "Party"]
  },
  {
    id: "5",
    name: "Lakeside Lodge",
    location: "Naivasha",
    price: 140000,
    rating: 4.9,
    capacity: 250,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Wedding", "Photoshoot", "Anniversary"]
  },
  {
    id: "6",
    name: "Urban Loft Space",
    location: "CBD, Nairobi",
    price: 65000,
    rating: 4.4,
    capacity: 100,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    eventTypes: ["Party", "Corporate", "Photoshoot"]
  }
];

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  
  // Filter venues to show only wishlisted ones
  const wishlistedVenues = mockVenues.filter(venue => wishlist.includes(venue.id));

  const handleVenueClick = (venueId: string) => {
    navigate(`/venue/${venueId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">My Wishlist</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {wishlistedVenues.length > 0 ? (
          <>
            <p className="text-muted-foreground mb-6">
              {wishlistedVenues.length} saved venue{wishlistedVenues.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistedVenues.map((venue) => (
                <VenueCard
                  key={venue.id}
                  {...venue}
                  onClick={() => handleVenueClick(venue.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No saved venues yet</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start exploring venues and save your favorites by clicking the heart icon
            </p>
            <Button onClick={() => navigate("/")}>
              Discover Venues
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;