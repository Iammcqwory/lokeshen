import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ImageGallery } from "@/components/ImageGallery";
import { WishlistButton } from "@/components/WishlistButton";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  Utensils, 
  Music,
  CalendarIcon,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { mockVenues } from "@/data/venues";

export default function VenueDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  
  // Find venue from mock data
  const venue = mockVenues.find(v => v.id === id) || mockVenues[0];
  
  // Create display amenities with icons
  const displayAmenities = venue.amenities?.map((amenity, index) => ({
    icon: [Wifi, Car, Utensils, Music, CheckCircle][index % 5],
    label: amenity
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-10">
        <div className="container mx-auto px-4 py-3">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to results
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <WishlistButton venueId={id || "1"} size="lg" />
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <ImageGallery images={venue.images || [venue.image]} alt={venue.name} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
                  <span className="font-medium">{venue.rating}</span>
                  <span className="ml-1">({venue.reviews || 0} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {venue.location}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Up to {venue.capacity} guests
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="flex flex-wrap gap-2">
              {venue.eventTypes.map((type) => (
                <Badge key={type} variant="secondary" className="capitalize">
                  {type}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-3">About this venue</h2>
              <p className="text-muted-foreground leading-relaxed">
                {venue.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-semibold mb-3">What this place offers</h2>
              <div className="grid grid-cols-2 gap-3">
                {displayAmenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="w-5 h-5 mr-3 text-muted-foreground" />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold">
                      KSh {venue.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">per day</span>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          className="pointer-events-auto"
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Booking Buttons */}
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
                      size="lg"
                      disabled={!selectedDate}
                    >
                      Book Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message Host
                    </Button>
                  </div>

                  {/* Host Info */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        V
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Venue Manager</p>
                        <p className="text-sm text-muted-foreground">Professional Host</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}