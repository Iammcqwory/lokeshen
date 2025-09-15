import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { EventType } from "@/types/venue";

interface HeroSearchProps {
  onQuickSearch: (query: string) => void;
  onEventTypeFilter: (eventType: EventType) => void;
}

const eventTypes: { label: string; value: EventType }[] = [
  { label: "Wedding", value: "wedding" },
  { label: "Party", value: "party" },
  { label: "Corporate", value: "corporate" },
  { label: "Photoshoot", value: "photoshoot" }
];

export function HeroSearch({ onQuickSearch, onEventTypeFilter }: HeroSearchProps) {
  const [quickSearch, setQuickSearch] = useState("");

  const handleQuickSearch = () => {
    onQuickSearch(quickSearch);
  };

  return (
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
          {eventTypes.map((type) => (
            <Badge 
              key={type.value}
              variant="secondary" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              onClick={() => onEventTypeFilter(type.value)}
            >
              {type.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}