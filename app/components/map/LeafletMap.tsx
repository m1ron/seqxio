"use client";

import React, { useMemo } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { type PinItem } from "@/app/components/map/map.data";

type LeafletMapProps = {
    pins: PinItem[];
};

export default function LeafletMap({ pins }: LeafletMapProps) {
    const pinIcon = useMemo(
        () =>
            L.icon({
                iconUrl: "/assets/images/pin.png",
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                popupAnchor: [0, -41],
            }),
        []
    );

    return (
        <MapContainer
            center={[35.2271, -80.8431]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {pins.map((pin) => (
                <Marker
                    key={`${pin.title}-${pin.latitude}-${pin.longitude}`}
                    position={[pin.latitude, pin.longitude]}
                    icon={pinIcon}
                >
                    <Popup>
                        <div>
                            <strong>{pin.title}</strong>
                            <p>{pin.type}</p>
                            <p>{pin.status}</p>
                            <p>{pin.priority}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}