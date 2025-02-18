import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: any;
    plan?: string;
  }[];
}) {
  const [activeTeam, _] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center justify-center w-full  rounded-lg overflow-hidden ">
          <img
            src={activeTeam.logo}
            alt="Team Logo"
            className="w-full  object-cover"
          />
        </div>

      </SidebarMenuItem>
    </SidebarMenu>
  );
}
