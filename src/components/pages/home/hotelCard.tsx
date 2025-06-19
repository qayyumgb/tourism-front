import { Card } from "antd";
import { Heart, Repeat } from "lucide-react";
import Image from "next/image";
import hotelImg from "../../../../public/images/trendingHotel.png"
export default function HotelCard() {
  return (
    <Card className="hotel-card rounded-2xl !p-0 overflow-hidden !border-none">
      <div className="relative">
        <Image
          src={hotelImg} // Replace with actual image path or URL
          alt="R South Beach"
          width={320}
          height={200}
          className="rounded-t-2xl object-cover !w-full"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
          🔥 Hot
        </div>
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="bg-white p-1.5 rounded-full shadow-sm cursor-pointer">
            <Repeat size={16} className="text-gray-600" />
          </div>
          <div className="bg-white p-1.5 rounded-full shadow-sm cursor-pointer">
            <Heart size={16} className="text-gray-600" />
          </div>
        </div>
      </div>

      <div className="py-3">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-900 mb-1">
            R South Beach
          </p>

          <div className="flex items-center text-sm text-gray-600">
            <span className="text-yellow-500 mr-1">⭐
            </span>
            4.5
            <span className="ml-1 text-gray-400 !mb-0">(562)</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          South Beach, Miami, Florida
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Starting from</p>
          <p className="text-black font-semibold ml-1 text-lg">Rs. 2,500/-</p>
        </div>
      </div>
    </Card>
  );
}