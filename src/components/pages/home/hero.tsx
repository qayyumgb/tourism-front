"use client";

import { DatePicker, Select, Button, Radio } from "antd";
import { CalendarOutlined, EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import '../../../styles/home.css'

const { Option } = Select;

export default function HeroSection() {
  const [tripType, setTripType] = useState("one-way");
  const [tab, setTab] = useState("flight");

  return (
    <div className="relative min-h-[600px] bg-heroCover bg-center text-white">
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Travel Made Easy:</h1>
          <p className="text-2xl font-medium mt-3">Flights and Hotels in One Place</p>
        </div>
        <Image
          src={'/images/heroGirl.png'}
          alt="Travel Woman"
          width={450}
          height={450}
          className="object-contain z-10 relative"
        />
      </div>

      {/* Booking Card */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-8 mt-[-70px] text-black">
        <h2 className="text-xl font-semibold mb-4">Explore your journey</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* From */}
          <div>
            <label className="text-sm font-medium mb-1 block">From</label>
            <Select defaultValue="Karachi" className="w-full">
              <Option value="Karachi">Karachi, Pakistan</Option>
              <Option value="Lahore">Lahore, Pakistan</Option>
            </Select>
          </div>

          {/* To */}
          <div>
            <label className="text-sm font-medium mb-1 block">To</label>
            <Select defaultValue="Auckland" className="w-full">
              <Option value="Auckland">Auckland, New Zealand</Option>
              <Option value="Sydney">Sydney, Australia</Option>
            </Select>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium mb-1 block">Flight Date</label>
            <DatePicker
              className="w-full"
              suffixIcon={<CalendarOutlined />}
              defaultValue={undefined}
              placeholder="Fri, 29 Aug 2024"
              format="DD, MMM YYYY"
            />
          </div>

          {/* Passenger */}
          <div>
            <label className="text-sm font-medium mb-1 block">Passenger</label>
            <Select defaultValue="1 Adult, 2 Children" className="w-full">
              <Option value="1 Adult">1 Adult</Option>
              <Option value="1 Adult, 2 Children">1 Adult, 2 Children</Option>
              <Option value="2 Adults">2 Adults</Option>
            </Select>
          </div>

          {/* Search */}
          <div className="flex items-end">
            <Button type="primary" size="large" className="w-full bg-yellow-400 hover:bg-yellow-500 border-none text-black">
              Search →
            </Button>
          </div>
        </div>

        {/* Trip Type + Tabs */}
        <div className="flex justify-between items-center mt-6 flex-wrap gap-4">
          <Radio.Group
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            buttonStyle="solid"
          >
            <Radio.Button value="one-way">One-way</Radio.Button>
            <Radio.Button value="return">Return</Radio.Button>
            <Radio.Button value="multi-city">Multi City</Radio.Button>
          </Radio.Group>

          <div className="space-x-4">
            <Button
              type={tab === "flight" ? "primary" : "default"}
              onClick={() => setTab("flight")}
            >
              Flight
            </Button>
            <Button
              type={tab === "hotel" ? "primary" : "default"}
              onClick={() => setTab("hotel")}
            >
              Hotels
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
