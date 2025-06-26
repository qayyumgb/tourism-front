import { Hotel } from './hotelCard';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    name: "Serena Hotel Islamabad",
    location: "Blue Area, Islamabad",
    rating: 4.8,
    reviewCount: 562,
    price: 15000,
    originalPrice: 18000,
    services: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Room Service', 'Gym'],
    destination: 'islamabad',
    coordinates: { lat: 33.7077, lng: 73.0563 }
  },
  {
    id: '2',
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    name: "Pearl Continental Hotel",
    location: "Shahrah-e-Quaid-e-Azam, Islamabad",
    rating: 4.6,
    reviewCount: 423,
    price: 12000,
    originalPrice: 15000,
    services: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Hotel Pickup'],
    destination: 'islamabad',
    coordinates: { lat: 33.6973, lng: 73.0515 }
  },
  {
    id: '3',
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
    name: "Marriott Hotel Islamabad",
    location: "Aga Khan Road, Shalimar 5",
    rating: 4.7,
    reviewCount: 789,
    price: 18000,
    services: ['Free WiFi', 'Swimming Pool', 'Gym', 'Restaurant', 'Private'],
    destination: 'islamabad',
    coordinates: { lat: 33.6844, lng: 73.0479 }
  },
  {
    id: '4',
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
    name: "Ramada Plaza Karachi",
    location: "Airport Road, Karachi",
    rating: 4.3,
    reviewCount: 345,
    price: 8000,
    originalPrice: 10000,
    services: ['Free WiFi', 'Restaurant', 'Hotel Pickup', 'Room Service'],
    destination: 'karachi',
    coordinates: { lat: 24.9056, lng: 67.1608 }
  },
  {
    id: '5',
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    name: "PC Hotel Lahore",
    location: "Mall Road, Lahore",
    rating: 4.5,
    reviewCount: 567,
    price: 11000,
    services: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Gym', 'Small Group'],
    destination: 'lahore',
    coordinates: { lat: 31.5497, lng: 74.3436 }
  },
  {
    id: '6',
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
    name: "Burj Al Arab Dubai",
    location: "Jumeirah Beach, Dubai",
    rating: 5.0,
    reviewCount: 1200,
    price: 45000,
    originalPrice: 50000,
    services: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Private', 'USB Mode'],
    destination: 'dubai',
    coordinates: { lat: 25.1411, lng: 55.1856 }
  },
  {
    id: '7',
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
    name: "Four Seasons Istanbul",
    location: "Sultanahmet, Istanbul",
    rating: 4.9,
    reviewCount: 890,
    price: 25000,
    services: ['Free WiFi', 'Swimming Pool', 'Restaurant', 'Room Service', 'Gym'],
    destination: 'istanbul',
    coordinates: { lat: 41.0058, lng: 28.9784 }
  },
  {
    id: '8',
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
    name: "Best Western Islamabad",
    location: "F-8 Markaz, Islamabad",
    rating: 4.2,
    reviewCount: 234,
    price: 7500,
    originalPrice: 9000,
    services: ['Free WiFi', 'Restaurant', 'Hotel Pickup'],
    destination: 'islamabad',
    coordinates: { lat: 33.6692, lng: 73.0563 }
  }
];
