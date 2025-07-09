import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchFilters, type SearchFilters as SearchFiltersType } from "@/components/SearchFilters";
import { VenueCard } from "@/components/VenueCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useWishlist } from "@/hooks/useWishlist";
import { Search, Filter, SlidersHorizontal, Heart } from "lucide-react";

// Mock data for venues
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

const Index = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const [searchResults, setSearchResults] = useState(mockVenues);
  const [quickSearch, setQuickSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (filters: SearchFiltersType) => {
    // In a real app, this would make an API call
    let filtered = mockVenues;
    
    if (filters.location) {
      filtered = filtered.filter(venue => 
        venue.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.eventType) {
      filtered = filtered.filter(venue => 
        venue.eventTypes.some(type => 
          type.toLowerCase() === filters.eventType.toLowerCase()
        )
      );
    }
    
    if (filters.priceRange[0]) {
      filtered = filtered.filter(venue => venue.price <= filters.priceRange[0]);
    }
    
    setSearchResults(filtered);
  };

  const handleQuickSearch = () => {
    if (quickSearch.trim()) {
      const filtered = mockVenues.filter(venue =>
        venue.name.toLowerCase().includes(quickSearch.toLowerCase()) ||
        venue.location.toLowerCase().includes(quickSearch.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(mockVenues);
    }
  };

  const handleVenueClick = (venueId: string) => {
    navigate(`/venue/${venueId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/wishlist")}
          className="bg-background/80 hover:bg-background"
        >
          <div className="relative">
            <Heart className="h-4 w-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>
        </Button>
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div 
        className="relative py-20 px-4"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Find Your Perfect Venue
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover stunning event venues across Kenya for weddings, parties, photoshoots, and corporate events
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search venues, locations..."
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleQuickSearch()}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button 
                onClick={handleQuickSearch}
                className="h-12 px-6"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Event Type Quick Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Wedding", "Party", "Corporate", "Photoshoot"].map((type) => (
              <Badge 
                key={type}
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                onClick={() => handleSearch({ 
                  location: "", 
                  date: undefined, 
                  eventType: type.toLowerCase(), 
                  priceRange: [500000], 
                  capacity: "" 
                })}
              >
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>

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

      {/* Results */}
      <div className="container mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            {searchResults.length} venues found
          </h2>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((venue) => (
            <VenueCard
              key={venue.id}
              {...venue}
              onClick={() => handleVenueClick(venue.id)}
            />
          ))}
        </div>

        {searchResults.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No venues found</p>
            <Button onClick={() => setSearchResults(mockVenues)}>
              Show all venues
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
