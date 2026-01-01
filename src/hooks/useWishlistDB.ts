import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export interface WishlistItem {
  id: string;
  user_id: string;
  venue_id: string;
  created_at: string;
}

export function useWishlistDB() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: wishlist = [], isLoading } = useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from("wishlists")
        .select("*")
        .eq("user_id", user.id);

      if (error) throw error;
      return data as WishlistItem[];
    },
    enabled: !!user,
  });

  const addMutation = useMutation({
    mutationFn: async (venueId: string) => {
      if (!user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("wishlists")
        .insert({
          user_id: user.id,
          venue_id: venueId,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist");
    },
    onError: (error) => {
      toast.error(`Failed to add to wishlist: ${error.message}`);
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (venueId: string) => {
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase
        .from("wishlists")
        .delete()
        .eq("user_id", user.id)
        .eq("venue_id", venueId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist");
    },
    onError: (error) => {
      toast.error(`Failed to remove from wishlist: ${error.message}`);
    },
  });

  const isInWishlist = (venueId: string) => {
    return wishlist.some((item) => item.venue_id === venueId);
  };

  const toggleWishlist = async (venueId: string) => {
    if (!user) {
      toast.error("Please sign in to save venues to your wishlist");
      return;
    }

    if (isInWishlist(venueId)) {
      await removeMutation.mutateAsync(venueId);
    } else {
      await addMutation.mutateAsync(venueId);
    }
  };

  return {
    wishlist,
    isLoading,
    isInWishlist,
    toggleWishlist,
    addToWishlist: addMutation.mutate,
    removeFromWishlist: removeMutation.mutate,
  };
}
