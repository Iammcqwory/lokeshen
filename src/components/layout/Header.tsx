import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlistDB } from "@/hooks/useWishlistDB";
import { Heart, Calendar, LogIn, LogOut, User, MapPin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { wishlist } = useWishlistDB();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

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

      {user && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/bookings")}
          className="bg-background/80 hover:bg-background"
        >
          <Calendar className="h-4 w-4" />
        </Button>
      )}

      <ThemeToggle />

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="bg-background/80 hover:bg-background">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  {user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="text-muted-foreground">
              <User className="mr-2 h-4 w-4" />
              {user.email}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/bookings")}>
              <Calendar className="mr-2 h-4 w-4" />
              My Bookings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/wishlist")}>
              <Heart className="mr-2 h-4 w-4" />
              My Wishlist
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/auth")}
          className="bg-background/80 hover:bg-background"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </Button>
      )}
    </div>
  );
}
