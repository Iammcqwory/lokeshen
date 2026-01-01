import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Venue {
  id: string;
  name: string;
  location: string;
  county: string;
  description: string | null;
  price_per_day: number;
  capacity: number;
  rating: number;
  reviews_count: number;
  image_url: string | null;
  images: string[];
  amenities: string[];
  event_types: string[];
  host_name: string | null;
  host_image: string | null;
  host_response_time: string | null;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export function useVenues() {
  return useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("venues")
        .select("*")
        .order("is_featured", { ascending: false })
        .order("rating", { ascending: false });

      if (error) throw error;
      return data as Venue[];
    },
  });
}

export function useVenue(id: string | undefined) {
  return useQuery({
    queryKey: ["venue", id],
    queryFn: async () => {
      if (!id) throw new Error("Venue ID is required");
      
      const { data, error } = await supabase
        .from("venues")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new Error("Venue not found");
      return data as Venue;
    },
    enabled: !!id,
  });
}

export function useFeaturedVenues() {
  return useQuery({
    queryKey: ["venues", "featured"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("venues")
        .select("*")
        .eq("is_featured", true)
        .order("rating", { ascending: false })
        .limit(6);

      if (error) throw error;
      return data as Venue[];
    },
  });
}
