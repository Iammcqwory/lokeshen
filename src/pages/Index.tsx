import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchFilters } from "@/components/SearchFilters";
import { Header } from "@/components/layout/Header";
import { HeroSearch } from "@/components/search/HeroSearch";
import { SearchResults } from "@/components/search/SearchResults";
import { Button } from "@/components/ui/button";
import { useVenueSearch } from "@/hooks/useVenueSearch";
import { SlidersHorizontal } from "lucide-react";
import { SearchFilters as SearchFiltersType, EventType } from "@/types/venue";

const Index = () => {
  const navigate = useNavigate();
  const { venues, searchVenues, quickSearch, resetSearch } = useVenueSearch();
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (filters: SearchFiltersType) => {
    searchVenues(filters);
  };

  const handleQuickSearch = (query: string) => {
    quickSearch(query);
  };

  const handleEventTypeFilter = (eventType: EventType) => {
    searchVenues({ 
      location: "", 
      date: undefined, 
      eventType, 
      priceRange: [500000], 
      capacity: "" 
    });
  };

  const handleVenueClick = (venueId: string) => {
    navigate(`/venue/${venueId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSearch 
        onQuickSearch={handleQuickSearch}
        onEventTypeFilter={handleEventTypeFilter}
      />

      {/* Search Filters */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 mb-8">
        {showFilters && (
          <div className="mb-6">
            <SearchFilters onSearch={handleSearch} />
          </div>
        )}
        
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-background shadow-lg"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            {showFilters ? "Hide Filters" : "Advanced Filters"}
          </Button>
        </div>
      </div>

      <SearchResults 
        venues={venues}
        onVenueClick={handleVenueClick}
        onShowAll={resetSearch}
      />
    </div>
  );
};

export default Index;
