import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/useWishlist";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  venueId: string;
  className?: string;
  size?: "sm" | "default" | "lg";
}

export function WishlistButton({ venueId, className, size = "default" }: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWished = isInWishlist(venueId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(venueId);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "bg-background/80 hover:bg-background text-foreground hover:text-primary transition-all duration-200",
        size === "sm" && "h-8 w-8",
        size === "lg" && "h-12 w-12",
        className
      )}
      onClick={handleClick}
    >
      <Heart 
        className={cn(
          "transition-all duration-200",
          size === "sm" && "h-4 w-4",
          size === "default" && "h-5 w-5", 
          size === "lg" && "h-6 w-6",
          isWished ? "fill-red-500 text-red-500" : "text-current hover:text-red-500"
        )} 
      />
    </Button>
  );
}