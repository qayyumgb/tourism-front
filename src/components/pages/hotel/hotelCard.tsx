'use client'

import React, { useState } from 'react';
import { Card, Rate, Button, Tag, Typography, Modal, Descriptions, Divider } from 'antd';
import { HeartOutlined, SwapOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text, Title } = Typography;

export interface Hotel {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  services: string[];
  destination: string;
  coordinates: { lat: number; lng: number; };
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  const { image, name, location, rating, reviewCount, price, originalPrice, services } = hotel;
  const [open, setOpen] = useState(false);

  // Mocked details for demo
  const guestsPerRoom = 2;
  const roomsAvailable = 5;
  const checkIn = '2:00 PM';
  const checkOut = '12:00 PM';
  const charges = price;
  const availability = roomsAvailable > 0 ? 'Available' : 'Sold Out';
  const amenities = services.join(', ');

  return (
    <>
      <Card
        hoverable
        className="overflow-hidden"
        cover={
          <div className="relative">
            <img
              alt={name}
              src={image}
              className="h-48 w-full object-cover"
            />
            <div className="absolute top-3 right-3 flex space-x-2">
              <Button
                shape="circle"
                icon={<SwapOutlined />}
                className="bg-white shadow-md"
              />
              <Button
                shape="circle"
                icon={<HeartOutlined />}
                className="bg-white shadow-md"
              />
            </div>
            {originalPrice && (
              <div className="absolute top-3 left-3">
                <Tag color="red" className="text-sm font-medium">
                  Save Rs. {originalPrice - price}
                </Tag>
              </div>
            )}
          </div>
        }
      >
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <Title level={4} className="m-0 flex-1">{name}</Title>
            <div className="flex items-center space-x-1 ml-2">
              <Rate disabled defaultValue={rating} className="text-sm" />
              <Text className="text-sm font-medium">{rating}</Text>
              <Text className="text-sm text-gray-500">({reviewCount})</Text>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <EnvironmentOutlined className="mr-1" />
            {location}
          </div>

          <div className="flex flex-wrap gap-1">
            {services.slice(0, 3).map((service) => (
              <Tag key={service} className="text-xs">
                {service}
              </Tag>
            ))}
            {services.length > 3 && (
              <Tag className="text-xs">+{services.length - 3} more</Tag>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div>
              <Text className="text-xs text-gray-500 block">Starting from</Text>
                <div className="flex items-center space-x-2">
                  <Title level={4} className="m-0 text-green-600">Rs. {price.toLocaleString()}/-</Title>
                  {originalPrice && (
                    <Text delete className="text-sm text-gray-500">Rs. {originalPrice.toLocaleString()}/-</Text>
                  )}
                <Text className="text-xs text-gray-500">per night</Text>
              </div>
            </div>
            <Button type="primary" onClick={() => setOpen(true)} className="bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500 hover:border-yellow-500">
              View Details
            </Button>
          </div>
        </div>
      </Card>
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        title={<span className="font-semibold text-lg">{name} - Details</span>}
        width={600}
      >
        <img src={image} alt={name} className="w-full h-56 object-cover rounded mb-4" />
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label="Location">{location}</Descriptions.Item>
          <Descriptions.Item label="Rating">
            <Rate disabled defaultValue={rating} className="text-sm" />
            <span className="ml-2">{rating} ({reviewCount} reviews)</span>
          </Descriptions.Item>
          <Descriptions.Item label="Price">
            <span className="text-green-600 font-semibold">Rs. {price.toLocaleString()}</span>
            {originalPrice && (
              <span className="ml-2 text-gray-500 line-through">Rs. {originalPrice.toLocaleString()}</span>
            )}
          </Descriptions.Item>
          <Descriptions.Item label="Availability">{availability}</Descriptions.Item>
          <Descriptions.Item label="Guests per Room">{guestsPerRoom}</Descriptions.Item>
          <Descriptions.Item label="Rooms Available">{roomsAvailable}</Descriptions.Item>
          <Descriptions.Item label="Check-in Time">{checkIn}</Descriptions.Item>
          <Descriptions.Item label="Check-out Time">{checkOut}</Descriptions.Item>
          <Descriptions.Item label="Charges">Rs. {charges.toLocaleString()} per night</Descriptions.Item>
          <Descriptions.Item label="Services / Amenities">{amenities}</Descriptions.Item>
        </Descriptions>
        <Divider />
        <div className="text-xs text-gray-500 mt-2">
          <p>For more details, please contact the hotel or visit the official website. All information is subject to change and availability.</p>
        </div>
      </Modal>
    </>
  );
};

export default HotelCard;