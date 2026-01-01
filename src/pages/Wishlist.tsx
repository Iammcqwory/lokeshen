import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VenueCard } from "@/components/VenueCard";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlistDB } from "@/hooks/useWishlistDB";
import { useVenues } from "@/hooks/useVenues";
import { Heart, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Wishlist = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { wishlist, isLoading: wishlistLoading } = useWishlistDB();
  const { data: venues, isLoading: venuesLoading } = useVenues();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  const isLoading = authLoading || wishlistLoading || venuesLoading;

  // Filter venues to show only wishlisted ones
  const wishlistedVenues = venues?.filter(venue => 
    wishlist.some(item => item.venue_id === venue.id)
  ) || [];

  const handleVenueClick = (venueId: string) => {
    navigate(`/venue/${venueId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-bold">My Wishlist</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                  id={venue.id}
                  name={venue.name}
                  location={venue.location}
                  price={venue.price_per_day}
                  rating={Number(venue.rating)}
                  capacity={venue.capacity}
                  image={venue.image_url || ""}
                  eventTypes={venue.event_types as ("wedding" | "party" | "corporate" | "photoshoot" | "anniversary" | "birthday")[]}
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
