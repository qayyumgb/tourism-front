import React from 'react';
import { Button, Slider, Checkbox, Rate, Typography, Space, Divider } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface FilterSidebarProps {
  filters: {
    priceRange: [number, number];
    rating: number;
    services: string[];
    reviewCount: number;
    // hotelType, roomType, amenities, specialOffers can be added later
  };
  onFilterChange: (filters: any) => void;
  resultCount: number;
}

const FilterSidebar = ({ filters, onFilterChange, resultCount }: FilterSidebarProps) => {
  const services = [
    'Hotel Pickup',
    'Small Group',
    'In Flight Entertainment',
    'Private',
    'USB Mode',
    'Free WiFi',
    'Swimming Pool',
    'Gym/Fitness Center',
    'Restaurant',
    'Room Service'
  ];

  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      priceRange: [value[0], value[1]]
    });
  };

  const handleRatingChange = (value: number) => {
    onFilterChange({
      ...filters,
      rating: value
    });
  };

  const handleServiceChange = (checkedValues: string[]) => {
    onFilterChange({
      ...filters,
      services: checkedValues
    });
  };

  const handleReviewCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onFilterChange({
      ...filters,
      reviewCount: value
    });
  };

  const resetFilters = () => {
    onFilterChange({
      priceRange: [0, 20000],
      rating: 0,
      services: [],
      reviewCount: 0,
    });
  };

  return (
    <div className="bg-white p-6 space-y-6 border border-gray-200 rounded-lg h-fit">
      <div className="flex items-center justify-between">
        <Title level={4} className="m-0">Filter</Title>
        <Button 
          type="text" 
          icon={<ReloadOutlined />}
          onClick={resetFilters}
          className="text-gray-500 hover:text-gray-700"
        >
          Clear All
        </Button>
      </div>

      <div className="text-sm text-gray-600">
        <Text strong>{resultCount} Results Found</Text>
      </div>

      <Divider />

      {/* Rating Filter */}
      <div className="space-y-3">
        <Title level={5} className="m-0">Minimum Rating</Title>
        <Rate 
          value={filters.rating} 
          onChange={handleRatingChange}
          allowClear
        />
        <Text className="text-sm text-gray-600">
          {filters.rating > 0 ? `${filters.rating} stars and above` : 'Any rating'}
        </Text>
      </div>

      <Divider />

      {/* Price Range Filter */}
      <div className="space-y-4">
        <Title level={5} className="m-0">Price Range (PKR per night)</Title>
        <Slider
          range
          min={0}
          max={50000}
          step={100}
          value={filters.priceRange}
          onChange={handlePriceChange}
          tooltip={{
            formatter: (value) => `Rs. ${value}`
          }}
        />
        <div className="flex justify-between text-sm">
          <Text>Rs. {filters.priceRange[0]}</Text>
          <Text>Rs. {filters.priceRange[1]}</Text>
        </div>
      </div>

      <Divider />

      {/* Services Filter */}
      <div className="space-y-3">
        <Title level={5} className="m-0">Hotel Services</Title>
        <Checkbox.Group
          value={filters.services}
          onChange={handleServiceChange}
          className="flex flex-col space-y-2"
        >
          {services.map((service) => (
            <Checkbox key={service} value={service} className="text-sm">
              {service}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>

      <Divider />

      {/* Review Count Filter */}
      <div className="space-y-3">
        <Title level={5} className="m-0">Minimum Reviews</Title>
        <input
          type="number"
          min={0}
          value={filters.reviewCount}
          onChange={handleReviewCountChange}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          placeholder="e.g. 100"
        />
        <Text className="text-sm text-gray-600">
          {filters.reviewCount > 0 ? `${filters.reviewCount}+ reviews` : 'Any review count'}
        </Text>
      </div>

      {/* Future filters: hotelType, roomType, amenities, specialOffers */}

      {/* <Divider /> */}
     
    </div>
  );
};

export default FilterSidebar;