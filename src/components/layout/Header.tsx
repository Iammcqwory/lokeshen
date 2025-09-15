import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useWishlist } from "@/hooks/useWishlist";
import { Heart } from "lucide-react";

export function Header() {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  return (
    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => navigate("/wishlist")}
        className="bg-background/80 hover:bg-background"
      >
        <div className="relative">
          <Heart className="h-4 w-4" />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </div>
      </Button>
      <ThemeToggle />
    </div>
  );
}