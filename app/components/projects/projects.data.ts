// app/components/projects/projects.data.ts

export type ProjectStatusColor =
  | "green"
  | "yellow"
  | "gray"
  | "red"
  | "blue";

export type ProjectStatus = {
  text: string;
  color: ProjectStatusColor;
};

export type ProjectRow = {
  name: string;
  title: string;
  status: ProjectStatus;
  assignedTeam?: string;
  assignedTeamClassName?: string;
  startTime: string;
  roads: string[];
  issues?: string;
};

export const projectsData: ProjectRow[] = [
  {
    name: "Uptown Route Collection",
    title: "Route Collection · Zone A",
    status: {
      text: "On Track",
      color: "green",
    },
    assignedTeam: "Crew A",
    startTime: "Nov 24 · 3:00 AM",
    roads: ["Main St", "Oak Ave"],
  },
  {
    name: "Westside Bulk Pickup",
    title: "Bulk Pickup · Zone B",
    status: {
      text: "At Risk",
      color: "yellow",
    },
    assignedTeam: "Crew B",
    startTime: "Nov 24 · 4:30 AM",
    roads: ["Pine Ln", "Maple Dr", "Cedar St"],
    issues: "2",
  },
  {
    name: "South End Special Cleanup",
    title: "Special Cleanup · Zone C",
    status: {
      text: "Completed",
      color: "gray",
    },
    assignedTeam: "Crew C",
    startTime: "Nov 24 · 6:00 AM",
    roads: ["Elm Rd"],
    issues: "1",
  },
  {
    name: "Downtown Dumping Response",
    title: "Illegal Dumping Response · Zone A",
    status: {
      text: "Critical",
      color: "red",
    },
    assignedTeam: "Unassigned",
    assignedTeamClassName: "text-golden-brown",
    startTime: "Nov 25 · 8:00 AM",
    roads: [],
    issues: "5",
  },
  {
    name: "Airport Runway Sweep",
    title: "Special Cleanup · Zone C",
    status: {
      text: "In Progress",
      color: "blue",
    },
    assignedTeam: "Crew B",
    startTime: "Nov 25 · 12:00 AM",
    roads: ["Runway Dr"],
  },
];