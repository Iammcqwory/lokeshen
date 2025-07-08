import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users } from "lucide-react";

interface VenueCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  capacity: number;
  image: string;
  eventTypes: string[];
  onClick: () => void;
}

export function VenueCard({
  name,
  location,
  price,
  rating,
  capacity,
  image,
  eventTypes,
  onClick
}: VenueCardProps) {
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1" 
      onClick={onClick}
      style={{ boxShadow: "var(--shadow-elegant)" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            <Star className="w-3 h-3 mr-1 fill-primary text-primary" />
            {rating}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-1" />
            Up to {capacity} guests
          </div>
          
          <div className="flex flex-wrap gap-1">
            {eventTypes.slice(0, 2).map((type) => (
              <Badge key={type} variant="outline" className="text-xs">
                {type}
              </Badge>
            ))}
            {eventTypes.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{eventTypes.length - 2} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">
              KSh {price.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">per day</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}