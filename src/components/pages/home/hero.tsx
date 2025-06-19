"use client";

import { DatePicker, Select, Button, Radio } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import "../../../styles/home.css";

const { Option } = Select;

export default function HeroSection() {
  const [tripType, setTripType] = useState("one-way");
  const [tab, setTab] = useState("flight");

  const tripOptions = [
  { label: "One-way", value: "one-way" },
  { label: "Return", value: "return" },
  { label: "Multi City", value: "multi-city" },
];

  return (
    <div className="relative min-h-[600px] bg-heroCover bg-center text-white">
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h1 className="text-xl md:text-[84px] font-bold leading-tight">Travel Made Easy:</h1>
          <h2 className="text-lg md:text-5xl font-medium mt-3">Flights and Hotels in One Place</h2>
        </div>
        <Image
          src={"/images/heroGirl.png"}
          alt="Travel Woman"
          width={450}
          height={450}
          className="object-contain z-10 relative"
        />
      </div>

      {/* Booking Card */}
      <div className="relative z-10 container mx-auto bg-white rounded-2xl shadow-xl px-6 py-8 mt-[-70px] text-black">
        <div className="flex justify-between flex-wrap items-center gap-4">
          <p className="text-xl md:text-[36px] font-semibold mb-4">Explore your journey</p>
          <div className="space-x-1">
            {["flight", "hotel"].map((item) => (
              <Button
                key={item}
                onClick={() => setTab(item)}
                aria-pressed={tab === item}
                className={`!rounded-full !border-none ${tab === item ? "!bg-secondary !text-white" : "!bg-white !text-black"
                  }`}
              >
                {item === "flight" ? "Flight" : "Hotels"}
              </Button>
            ))}
          </div>

        </div>

        {/* Flight Tab Content */}
        {tab === "flight" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-4">
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

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  type="primary"
                  size="large"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                >
                  Search →
                </Button>
              </div>
            </div>

            {/* Trip Type Selection */}
            <Radio.Group
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="flex gap-3 flex-wrap"
            >
              {tripOptions.map((option) => (
                <Radio.Button
                  key={option.value}
                  value={option.value}
                  className={`!rounded-full !mr-2 px-4 py-1 font-medium border 
        ${tripType === option.value
                      ? "!bg-blue-900 !text-white !border-blue-900"
                      : "!bg-white !text-black !border-gray-300"
                    }`}
                >
                  {option.label}
                </Radio.Button>
              ))}
            </Radio.Group>
          </>
        )}

        {/* Hotel Tab Content */}
        {tab === "hotel" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              {/* Destination */}
              <div className="md:col-span-2">
                <label className="text-sm font-medium mb-1 block">Destination</label>
                <Select defaultValue="Dubai" className="w-full">
                  <Option value="Dubai">Dubai, UAE</Option>
                  <Option value="London">London, UK</Option>
                </Select>
              </div>

              {/* Check-in Date */}
              <div>
                <label className="text-sm font-medium mb-1 block">Check-in</label>
                <DatePicker
                  className="w-full"
                  suffixIcon={<CalendarOutlined />}
                  placeholder="Check-in Date"
                  format="DD, MMM YYYY"
                />
              </div>

              {/* Check-out Date */}
              <div>
                <label className="text-sm font-medium mb-1 block">Check-out</label>
                <DatePicker
                  className="w-full"
                  suffixIcon={<CalendarOutlined />}
                  placeholder="Check-out Date"
                  format="DD, MMM YYYY"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  type="primary"
                  size="large"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 border-none text-black"
                >
                  Search →
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
