import {
    SquareTerminal,
  } from "lucide-react";

import logo from "@/assets/image/logo.png"             
  

export const data = {
    teams: [
      {
        name: "Telco Learn Logo",
        logo: logo,
        // plan: "Enterprise",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/",
        icon: SquareTerminal,
      },
      {
        title: "Courses",
        url: "/courses",
        icon: SquareTerminal,
      },
    ],
  };