'use client'


import React, { useState, useMemo } from 'react';
import { Row, Col, Select, Typography, Space } from 'antd';
import FilterSidebar from './filterSidebar';
import SearchBar from './searchBar';
import HotelCard from './hotelCard';
import MapView from './mapView';
import { mockHotels } from './hotelMockData';
import dynamic from 'next/dynamic';



const MapWithNoSSR = dynamic(() => import('./mapView'), {
    ssr: false,
})




const { Option } = Select;
const { Title } = Typography;

const initialFilters = {
    destination: 'islamabad',
    dates: null,
    guests: '2-adults-2-children',
    priceRange: [0, 50000] as [number, number],
    rating: 0,
    services: [] as string[],
    hotelType: '',
    roomType: '',
    reviewCount: 0,
    specialOffers: [] as string[],
    amenities: [] as string[],
};

const HotelPage = () => {
    const [filters, setFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState('rating');

    // Filter and sort hotels based on current filters
    const filteredHotels = useMemo(() => {
        let filtered = mockHotels.filter(hotel => {
            // Filter by destination
            if (filters.destination && hotel.destination !== filters.destination) {
                return false;
            }

            // Filter by price range
            if (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1]) {
                return false;
            }

            // Filter by rating
            if (filters.rating > 0 && hotel.rating < filters.rating) {
                return false;
            }

            // Filter by services
            if (filters.services.length > 0) {
                const hasRequiredServices = filters.services.every(service =>
                    hotel.services.includes(service)
                );
                if (!hasRequiredServices) {
                    return false;
                }
            }

            // Filter by review count
            if (filters.reviewCount > 0 && hotel.reviewCount < filters.reviewCount) {
                return false;
            }

            // The following filters are commented out for now as they are not present in Hotel interface or mock data:
            // hotelType, roomType, specialOffers, amenities, maxGuests
            // Uncomment and implement when data is available
            // if (filters.hotelType && hotel.hotelType !== filters.hotelType) return false;
            // if (filters.roomType && hotel.roomType !== filters.roomType) return false;
            // if (filters.specialOffers.length > 0) { ... }
            // if (filters.amenities.length > 0) { ... }
            // if (filters.guests && hotel.maxGuests && parseInt(filters.guests) > hotel.maxGuests) return false;
            // if (filters.dates && hotel.availability) { ... }

            return true;
        });

        // Sort hotels
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'reviews':
                    return b.reviewCount - a.reviewCount;
                default:
                    return 0;
            }
        });

        return filtered;
    }, [filters, sortBy]);

    const handleSearch = (searchValues: any) => {
        setFilters(prev => ({ ...prev, ...searchValues }));
    };

    const handleFilterChange = (newFilters: any) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="max-w-7xl mx-auto px-6 py-6">
                <SearchBar onSearch={handleSearch} />

                <Row gutter={[24, 24]} className="mt-6">
                    {/* Filter Sidebar */}
                    <Col xs={24} lg={7}>
                        <FilterSidebar
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            resultCount={filteredHotels.length}
                        />
                    </Col>

                    {/* Main Content */}
                    <Col xs={24} lg={17}>
                        {/* Sort Controls */}
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                            <Row justify="space-between" align="middle">
                                <Col>
                                    <Title level={5} className="m-0">
                                        {filteredHotels.length} Hotels Found in {filters.destination.charAt(0).toUpperCase() + filters.destination.slice(1)}
                                    </Title>
                                </Col>
                                <Col>
                                    <Space>
                                        <span className="text-sm text-gray-600">Sort by:</span>
                                        <Select
                                            value={sortBy}
                                            onChange={setSortBy}
                                            className="w-32"
                                        >
                                            <Option value="rating">Highest Rating</Option>
                                            <Option value="price-low">Price: Low to High</Option>
                                            <Option value="price-high">Price: High to Low</Option>
                                            <Option value="reviews">Most Reviews</Option>
                                        </Select>
                                    </Space>
                                </Col>
                            </Row>
                        </div>

                        <Row gutter={[24, 24]}>
                            {/* Hotel Listings */}
                            <Col xs={24} xl={14}>
                                <div className="space-y-6">


                                    <Row gutter={[24, 24]}>
                                        {filteredHotels.length > 0 ? (
                                            filteredHotels.map((hotel) => (
                                                <Col xs={24} key={hotel.id} >
                                                    <HotelCard hotel={hotel} />
                                                </Col>
                                            ))
                                        ) : (
                                            <div className="bg-white p-8 rounded-lg text-center border border-gray-200 w-full">
                                                <Title level={4} className="text-gray-500">No hotels found</Title>
                                                <p className="text-gray-400">Try adjusting your filters or search criteria</p>
                                            </div>
                                        )}
                                    </Row>
                                </div>
                            </Col>

                            {/* Map */}
                            <Col xs={24} xl={10}>
                                <div className="sticky top-6">
                                    <MapWithNoSSR hotels={filteredHotels} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HotelPage;