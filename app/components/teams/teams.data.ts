// app/components/team/team.data.ts

export type TeamStatus = {
  text: string;
  color: "on" | "off" | "red";
};

export type TeamLocation = {
  text: string;
  icon?: "alert";
};

export type TeamRow = {
  name: string;
  title: string;
  status: TeamStatus;
  assignment?: string;
  time?: string;
  location: TeamLocation;
  issues?: string;
};

export const teamsData: TeamRow[] = [
  {
    name: "Crew A",
    title: "North · 4 members",
    status: {
      text: "On Duty",
      color: "on",
    },
    assignment: "Westside Bulk Pickup",
    time: "8:00 AM",
    location: {
      text: "Last ping: 4&nbsp;min&nbsp;ago",
    },
    issues: "2",
  },
  {
    name: "Crew B",
    title: "South · 5 members",
    status: {
      text: "Off Duty",
      color: "off",
    },
    time: "No active assignment",
    location: {
      text: "Last ping: 2&nbsp;hours&nbsp;ago",
    },
  },
  {
    name: "Crew C",
    title: "East · 3 members",
    status: {
      text: "Needs Attention",
      color: "red",
    },
    assignment: "Downtown Cleanup",
    time: "9:30 AM",
    location: {
      text: "Stale&nbsp;location",
      icon: "alert",
    },
    issues: "1",
  },
];