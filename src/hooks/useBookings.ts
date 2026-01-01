import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface Booking {
  id: string;
  user_id: string;
  venue_id: string;
  event_date: string;
  event_type: string;
  guest_count: number | null;
  special_requests: string | null;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  total_price: number | null;
  created_at: string;
  updated_at: string;
}

export interface CreateBookingData {
  venue_id: string;
  event_date: string;
  event_type: string;
  guest_count?: number;
  special_requests?: string;
  total_price?: number;
}

export function useBookings() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["bookings", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Booking[];
    },
    enabled: !!user,
  });
}

export function useCreateBooking() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookingData: CreateBookingData) => {
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          ...bookingData,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data as Booking;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking request submitted successfully!");
    },
    onError: (error) => {
      toast.error(`Failed to create booking: ${error.message}`);
    },
  });
}

export function useCancelBooking() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (bookingId: string) => {
      const { data, error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" as const })
        .eq("id", bookingId)
        .select()
        .single();

      if (error) throw error;
      return data as Booking;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Booking cancelled successfully");
    },
    onError: (error) => {
      toast.error(`Failed to cancel booking: ${error.message}`);
    },
  });
}
