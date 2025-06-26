'use client'

import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Hotel } from './hotelCard';
import 'leaflet/dist/leaflet.css';





interface MapViewProps {
  hotels: Hotel[];
}


const MapView = ({ hotels }: MapViewProps) => {
  // Create custom icon for hotel markers
  const hotelIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiNGRkMxMDciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjE2IiB5PSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzAwMCI+SDwvdGV4dD4KPHN2Zz4K',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  // Calculate map center based on hotels
  const mapCenter = useMemo(() => {
    if (hotels.length === 0) return [33.6844, 73.0479]; // Default to Islamabad
    
    const avgLat = hotels.reduce((sum, hotel) => sum + hotel.coordinates.lat, 0) / hotels.length;
    const avgLng = hotels.reduce((sum, hotel) => sum + hotel.coordinates.lng, 0) / hotels.length;
    
    return [avgLat, avgLng];
  }, [hotels]);

  // Calculate appropriate zoom level based on hotels spread
  const mapZoom = useMemo(() => {
    if (hotels.length <= 1) return 13;
    
    const lats = hotels.map(h => h.coordinates.lat);
    const lngs = hotels.map(h => h.coordinates.lng);
    
    const latDiff = Math.max(...lats) - Math.min(...lats);
    const lngDiff = Math.max(...lngs) - Math.min(...lngs);
    const maxDiff = Math.max(latDiff, lngDiff);
    
    if (maxDiff > 10) return 4;
    if (maxDiff > 5) return 6;
    if (maxDiff > 1) return 8;
    if (maxDiff > 0.1) return 11;
    return 13;
  }, [hotels]);


    if (typeof window === 'undefined') {
      return null;
    } else


  return (
    <div className="w-full h-[600px] rounded-lg border border-gray-200 overflow-hidden">
      <MapContainer
        center={mapCenter as [number, number]}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            position={[hotel.coordinates.lat, hotel.coordinates.lng]}
            icon={hotelIcon}
          >
            <Popup>
              <div className="max-w-xs">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{hotel.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{hotel.location}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xs">★</span>
                    <span className="text-xs ml-1">{hotel.rating} ({hotel.reviewCount})</span>
                  </div>
                  <span className="font-semibold text-green-600 text-sm">
                    Rs. {hotel.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-90 px-2 py-1 rounded z-[1000]">
        {hotels.length} hotels shown
      </div>
    </div>
  );
};

export default MapView;