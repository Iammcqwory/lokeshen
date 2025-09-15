import { useState, useMemo } from "react";
import { mockVenues } from "@/data/venues";
import { Venue, SearchFilters } from "@/types/venue";

export function useVenueSearch() {
  const [searchFilters, setSearchFilters] = useState<Partial<SearchFilters>>({});
  const [quickSearchQuery, setQuickSearchQuery] = useState("");

  const filteredVenues = useMemo(() => {
    let filtered = mockVenues;

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
        venue.eventTypes.some(type => 
          type.toLowerCase() === searchFilters.eventType!.toLowerCase()
        )
      );
    }
    
    if (searchFilters.priceRange?.[0]) {
      filtered = filtered.filter(venue => venue.price <= searchFilters.priceRange![0]);
    }

    return filtered;
  }, [searchFilters, quickSearchQuery]);

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
    searchVenues,
    quickSearch,
    resetSearch,
    isSearchActive: Object.keys(searchFilters).length > 0 || quickSearchQuery.trim() !== ""
  };
}