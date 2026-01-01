import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateBooking } from "@/hooks/useBookings";
import { Venue } from "@/hooks/useVenues";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingDialogProps {
  venue: Venue;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialDate?: Date;
}

export function BookingDialog({ venue, open, onOpenChange, initialDate }: BookingDialogProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const createBooking = useCreateBooking();

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(initialDate);
  const [eventType, setEventType] = useState<string>("");
  const [guestCount, setGuestCount] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleSubmit = async () => {
    if (!user) {
      navigate("/auth");
      return;
    }

    if (!selectedDate || !eventType) return;

    await createBooking.mutateAsync({
      venue_id: venue.id,
      event_date: format(selectedDate, "yyyy-MM-dd"),
      event_type: eventType,
      guest_count: guestCount ? parseInt(guestCount) : undefined,
      special_requests: specialRequests || undefined,
      total_price: venue.price_per_day,
    });

    onOpenChange(false);
    navigate("/bookings");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book {venue.name}</DialogTitle>
          <DialogDescription>
            Fill in the details to request a booking for this venue.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Event Date</Label>
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
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Event Type</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                {venue.event_types.map((type) => (
                  <SelectItem key={type} value={type} className="capitalize">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Number of Guests</Label>
            <Input
              type="number"
              placeholder={`Max ${venue.capacity} guests`}
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              max={venue.capacity}
            />
          </div>

          <div className="space-y-2">
            <Label>Special Requests (Optional)</Label>
            <Textarea
              placeholder="Any special requirements or requests..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            />
          </div>

          <div className="bg-muted p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Price per day</span>
              <span className="font-semibold">
                KSh {venue.price_per_day.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!selectedDate || !eventType || createBooking.isPending}
            className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
          >
            {createBooking.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request Booking"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
