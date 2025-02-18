import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import imageAvtar from "@/assets/image/avtar.jpeg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const userDetails = {
  userName: "John Doe",
  profileImage: imageAvtar,
  email: "john.doe@example.com",
  phoneNumber: "+1 123 456 7890",
  id: 8896658745822146,
}

export default function Page() {
  const userName = userDetails.userName || "User";
  const initials = userName.substring(0, 2).toUpperCase();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex border-b-2 sticky top-0 h-16 shrink-0 items-center bg-[#18181B] gap-2 justify-between pe-5 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className=" uppercase w-[40px] h-[40px] flex justify-center items-center rounded-full border-2 border-white bg-black text-white  " >
                <Avatar>
                  <AvatarImage src={userDetails.profileImage} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Change Password</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className=" p-5 py-0  " >
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
