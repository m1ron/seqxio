export type PinPriority = "High" | "Medium" | "Low";
export type PinStatus = "Open" | "In Progress" | "Resolved";

export type PinItem = {
    title: string;
    status: PinStatus;
    type: string;
    priority: PinPriority;
    date: string;
    latitude: number;
    longitude: number;
};

export const pinsData: PinItem[] = [
    {
        title: "Overflowing Bin",
        status: "Open",
        type: "Overflow",
        priority: "High",
        date: "2/19/2026",
        latitude: 35.2271,
        longitude: -80.8431,
    },
    {
        title: "Missed Pickup",
        status: "In Progress",
        type: "Missed pickup",
        priority: "Medium",
        date: "2/19/2026",
        latitude: 35.2358,
        longitude: -80.8328,
    },
    {
        title: "Illegal Dumping",
        status: "Open",
        type: "Illegal dumping",
        priority: "High",
        date: "2/19/2026",
        latitude: 35.2174,
        longitude: -80.8519,
    },
    {
        title: "Blocked Access",
        status: "Resolved",
        type: "Blocked access",
        priority: "Low",
        date: "2/19/2026",
        latitude: 35.2462,
        longitude: -80.8465,
    },
    {
        title: "Equipment Issue",
        status: "In Progress",
        type: "Equipment issue",
        priority: "Medium",
        date: "2/19/2026",
        latitude: 35.2213,
        longitude: -80.8264,
    },
    {
        title: "Road Debris",
        status: "Open",
        type: "Blocked access",
        priority: "Medium",
        date: "2/20/2026",
        latitude: 35.2326,
        longitude: -80.8571,
    },
    {
        title: "Damaged Street Sign",
        status: "Resolved",
        type: "Equipment issue",
        priority: "Low",
        date: "2/20/2026",
        latitude: 35.2148,
        longitude: -80.8386,
    },
    {
        title: "Missed Alley Pickup",
        status: "In Progress",
        type: "Missed pickup",
        priority: "High",
        date: "2/20/2026",
        latitude: 35.2417,
        longitude: -80.8249,
    },
    {
        title: "Overflow Near Park",
        status: "Open",
        type: "Overflow",
        priority: "Medium",
        date: "2/21/2026",
        latitude: 35.2491,
        longitude: -80.8342,
    },
    {
        title: "Construction Waste",
        status: "Open",
        type: "Illegal dumping",
        priority: "High",
        date: "2/21/2026",
        latitude: 35.2099,
        longitude: -80.8478,
    },
];