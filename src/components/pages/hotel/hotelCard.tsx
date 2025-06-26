'use client'

import React from 'react';
import { Card, Rate, Button, Tag, Typography } from 'antd';
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

  return (
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
      actions={[
        <Button 
          type="primary" 
          className="bg-yellow-400 border-yellow-400 text-black hover:bg-yellow-500 hover:border-yellow-500"
          block
        >
          Book Now
        </Button>
      ]}
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
            </div>
            <Text className="text-xs text-gray-500">per night</Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HotelCard;