"use client"
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Make sure to set your Mapbox API key as an environment variable
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

interface MapboxLocationViewerProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  style?: string;
}

const MapboxLocationViewer: React.FC<MapboxLocationViewerProps> = ({
  latitude,
  longitude,
  zoom = 12,
  style = 'mapbox://styles/mapbox/streets-v11'
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Only run this effect if we haven't initialized the map yet
    if (map.current) return;

    // Validate API token
    if (!MAPBOX_ACCESS_TOKEN) {
      console.error('Mapbox access token is not set');
      return;
    }

    // Set the Mapbox access token
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    // Initialize the map
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: style,
        center: [longitude, latitude],
        zoom: zoom
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl());

      // Add a marker for the specific location
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map.current);
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, zoom, style]);

  return (
    <div
      ref={mapContainer}
      className="map-container w-full h-[400px] rounded-md overflow-hidden my-10"
    />
  );
};

export default MapboxLocationViewer;