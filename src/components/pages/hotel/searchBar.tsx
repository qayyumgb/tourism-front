import React, { useState } from 'react';
import { Row, Col, Input, DatePicker, Select, Button } from 'antd';
import { SearchOutlined, CalendarOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface SearchBarProps {
  onSearch: (filters: any) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [destination, setDestination] = useState('islamabad');
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null] | null>(null);
  const [guests, setGuests] = useState('2-adults-2-children');

  const handleSearch = () => {
    onSearch({
      destination,
      dates,
      guests
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={12} md={6}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <EnvironmentOutlined className="mr-2" />
              Destination
            </label>
            <Select
              value={destination}
              onChange={setDestination}
              className="w-full"
              size="large"
              placeholder="Select destination"
            >
              <Option value="islamabad">Islamabad</Option>
              <Option value="karachi">Karachi</Option>
              <Option value="lahore">Lahore</Option>
              <Option value="dubai">Dubai</Option>
              <Option value="istanbul">Istanbul</Option>
            </Select>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={8}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <CalendarOutlined className="mr-2" />
              Check-in / Check-out
            </label>
            <RangePicker
              value={dates}
              onChange={(values) => setDates(values)}
              className="w-full"
              size="large"
              placeholder={['Check-in', 'Check-out']}
            />
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center">
              <UserOutlined className="mr-2" />
              Guests
            </label>
            <Select
              value={guests}
              onChange={setGuests}
              className="w-full"
              size="large"
            >
              <Option value="1-adult">1 Adult</Option>
              <Option value="2-adults">2 Adults</Option>
              <Option value="2-adults-1-child">2 Adults, 1 Child</Option>
              <Option value="2-adults-2-children">2 Adults, 2 Children</Option>
              <Option value="4-adults">4 Adults</Option>
            </Select>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={4}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 invisible">Search</label>
            <Button
              type="primary"
              size="large"
              icon={<SearchOutlined />}
              onClick={handleSearch}
              className="w-full bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500 hover:border-yellow-500"
            >
              Search
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;