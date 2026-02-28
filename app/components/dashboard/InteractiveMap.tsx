"use client"
import React, { useEffect, useRef } from 'react'
import Heading from '../ui/Heading'
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return;

    const mapInstance = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAP_KEY}`,
      center: [-74.006, 40.7128],
      zoom: 12,
      pitch: 65,
      bearing: -20,
    });

    map.current = mapInstance;

    mapInstance.on("load", () => {
      mapInstance.resize();

      // Smooth cinematic movement
      mapInstance.easeTo({
        pitch: 65,
        bearing: -20,
        duration: 2000,
      });

      // 3D Buildings
      const layers = mapInstance.getStyle().layers;
      const labelLayerId = layers?.find(
        (layer) =>
          layer.type === "symbol" &&
          layer.layout &&
          (layer.layout as Record<string, unknown>)["text-field"]
      )?.id;

      mapInstance.addLayer(
        {
          id: "3d-buildings",
          source: "openmaptiles",
          "source-layer": "building",
          type: "fill-extrusion",
          minzoom: 14,
          paint: {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              14,
              0,
              14.5,
              ["get", "render_height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              14,
              0,
              14.5,
              ["get", "render_min_height"],
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        labelLayerId
      );

      // -------------------------------
      // CLUSTER SOURCE
      // -------------------------------

      mapInstance.addSource("locations", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.006, 40.7128] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.01, 40.71] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.02, 40.713] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.015, 40.718] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.03, 40.72] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.04, 40.722] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.05, 40.725] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.06, 40.73] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.07, 40.735] }, properties: {} },
            { type: "Feature", geometry: { type: "Point", coordinates: [-74.08, 40.74] }, properties: {} },
          ],
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 60,
      });

      // -------------------------------
      // CLUSTER CIRCLES (Big like screenshot)
      // -------------------------------

      mapInstance.addLayer({
        id: "clusters",
        type: "circle",
        source: "locations",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#22c55e",
            5,
            "#eab308",
            10,
            "#ef4444",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            30,
            5,
            45,
            10,
            60,
          ],
          "circle-opacity": 0.6,
        },
      });

      // -------------------------------
      // CLUSTER NUMBERS
      // -------------------------------

      mapInstance.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "locations",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count}",
          "text-size": 22,
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      // -------------------------------
      // CLICK CLUSTER TO ZOOM
      // -------------------------------

      mapInstance.on("click", "clusters", (e) => {
        const features = mapInstance.queryRenderedFeatures(e.point, {
          layers: ["clusters"],
        });

        const clusterId = features[0].properties?.cluster_id;

        const source = mapInstance.getSource("locations") as maplibregl.GeoJSONSource;

        source.getClusterExpansionZoom(clusterId).then((zoom: number) => {
          mapInstance.easeTo({
            center: (features[0].geometry as GeoJSON.Point).coordinates as [number, number],
            zoom: zoom,
          });
        }).catch((err: Error) => {
          console.error('Error getting cluster expansion zoom:', err);
        });
      });

      mapInstance.on("mouseenter", "clusters", () => {
        mapInstance.getCanvas().style.cursor = "pointer";
      });

      mapInstance.on("mouseleave", "clusters", () => {
        mapInstance.getCanvas().style.cursor = "";
      });
    });

    // Cleanup (important in Next.js strict mode)
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);
  return (
    <div className='flex flex-col w-full sm:w-[50%] bg-white p-4 rounded-[15px]  h-auto'>
      {/* <h2 className='font-medium leading-120 text-black text-xl -tracking-[0.64px] mb-4'>
        
      </h2> */}
      <Heading className='mb-4'>Interactive Map</Heading>
      <div className='relative w-full h-45 sm:flex-1 sm:h-full'>
        <div
          ref={mapContainer}
          className="w-full h-45 rounded-xl overflow-hidden"
        />
      </div >
    </div>
  )
}

export default InteractiveMap