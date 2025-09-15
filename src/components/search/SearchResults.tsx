import { Button } from "@/components/ui/button";
import { VenueCard } from "@/components/VenueCard";
import { Venue } from "@/types/venue";
import { Filter } from "lucide-react";

interface SearchResultsProps {
  venues: Venue[];
  onVenueClick: (venueId: string) => void;
  onShowAll: () => void;
}

export function SearchResults({ venues, onVenueClick, onShowAll }: SearchResultsProps) {
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
            {...venue}
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