import { Button } from "@/components/ui/button";
import { VenueCard } from "@/components/VenueCard";
import { Venue } from "@/hooks/useVenues";
import { Filter } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface SearchResultsProps {
  venues: Venue[];
  isLoading?: boolean;
  onVenueClick: (venueId: string) => void;
  onShowAll: () => void;
}

export function SearchResults({ venues, isLoading, onVenueClick, onShowAll }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-80 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">
          {venues.length} venues found
        </h2>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Sort
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <VenueCard
            key={venue.id}
            id={venue.id}
            name={venue.name}
            location={venue.location}
            price={venue.price_per_day}
            rating={Number(venue.rating)}
            capacity={venue.capacity}
            image={venue.image_url || ""}
            eventTypes={venue.event_types as any}
            onClick={() => onVenueClick(venue.id)}
          />
        ))}
      </div>

      {venues.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground mb-4">No venues found</p>
          <Button onClick={onShowAll}>
            Show all venues
          </Button>
        </div>
      )}
    </div>
  );
}
