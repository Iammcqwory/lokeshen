import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("venue-wishlist");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (error) {
        console.error("Error loading wishlist:", error);
      }
    }
  }, []);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("venue-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (venueId: string) => {
    setWishlist(prev => [...prev, venueId]);
  };

  const removeFromWishlist = (venueId: string) => {
    setWishlist(prev => prev.filter(id => id !== venueId));
  };

  const toggleWishlist = (venueId: string) => {
    if (wishlist.includes(venueId)) {
      removeFromWishlist(venueId);
    } else {
      addToWishlist(venueId);
    }
  };

  const isInWishlist = (venueId: string) => {
    return wishlist.includes(venueId);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
  };
}