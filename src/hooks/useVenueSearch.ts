import { useState, useMemo } from "react";
import { useVenues, Venue } from "@/hooks/useVenues";
import { SearchFilters } from "@/types/venue";

export function useVenueSearch() {
  const { data: venues = [], isLoading } = useVenues();
  const [searchFilters, setSearchFilters] = useState<Partial<SearchFilters>>({});
  const [quickSearchQuery, setQuickSearchQuery] = useState("");

  const filteredVenues = useMemo(() => {
    let filtered = venues;

    // Apply quick search
    if (quickSearchQuery.trim()) {
      filtered = filtered.filter(venue =>
        venue.name.toLowerCase().includes(quickSearchQuery.toLowerCase()) ||
        venue.location.toLowerCase().includes(quickSearchQuery.toLowerCase())
      );
    }

    // Apply advanced filters
    if (searchFilters.location) {
      filtered = filtered.filter(venue => 
        venue.location.toLowerCase().includes(searchFilters.location!.toLowerCase())
      );
    }
    
    if (searchFilters.eventType) {
      filtered = filtered.filter(venue => 
        venue.event_types.some(type => 
          type.toLowerCase() === searchFilters.eventType!.toLowerCase()
        )
      );
    }
    
    if (searchFilters.priceRange?.[0]) {
      filtered = filtered.filter(venue => venue.price_per_day <= searchFilters.priceRange![0]);
    }

    return filtered;
  }, [venues, searchFilters, quickSearchQuery]);

  const searchVenues = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const quickSearch = (query: string) => {
    setQuickSearchQuery(query);
  };

  const resetSearch = () => {
    setSearchFilters({});
    setQuickSearchQuery("");
  };

  return {
    venues: filteredVenues,
    isLoading,
    searchVenues,
    quickSearch,
    resetSearch,
    isSearchActive: Object.keys(searchFilters).length > 0 || quickSearchQuery.trim() !== ""
  };
}
