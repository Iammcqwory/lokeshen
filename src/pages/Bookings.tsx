import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useBookings, useCancelBooking } from "@/hooks/useBookings";
import { useVenues } from "@/hooks/useVenues";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Calendar, MapPin, Users, Loader2 } from "lucide-react";

export default function Bookings() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { data: bookings, isLoading: bookingsLoading } = useBookings();
  const { data: venues } = useVenues();
  const cancelBooking = useCancelBooking();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  if (authLoading || bookingsLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const getVenue = (venueId: string) => {
    return venues?.find((v) => v.id === venueId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "cancelled":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "completed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

        {!bookings || bookings.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
              <p className="text-muted-foreground mb-4">
                Start exploring venues and make your first booking
              </p>
              <Button onClick={() => navigate("/")}>Browse Venues</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => {
              const venue = getVenue(booking.venue_id);
              return (
                <Card key={booking.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {venue?.name || "Unknown Venue"}
                        </CardTitle>
                        {venue && (
                          <p className="text-sm text-muted-foreground flex items-center mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {venue.location}
                          </p>
                        )}
                      </div>
                      <Badge variant="outline" className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(new Date(booking.event_date), "PPP")}
                      </div>
                      <div className="capitalize">{booking.event_type}</div>
                      {booking.guest_count && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {booking.guest_count} guests
                        </div>
                      )}
                    </div>
                    {booking.total_price && (
                      <p className="font-semibold mb-4">
                        Total: KSh {booking.total_price.toLocaleString()}
                      </p>
                    )}
                    <div className="flex gap-2">
                      {venue && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/venue/${venue.id}`)}
                        >
                          View Venue
                        </Button>
                      )}
                      {booking.status === "pending" && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => cancelBooking.mutate(booking.id)}
                          disabled={cancelBooking.isPending}
                        >
                          {cancelBooking.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            "Cancel"
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
