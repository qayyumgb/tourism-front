'use client';

import Image from 'next/image';
import { FaFire } from "react-icons/fa";
import Img from "../../../../public/images/destination.png"

const DestinationCard = () => {
    return (
    <div className="relative rounded-2xl overflow-hidden shadow-md w-full h-full">
      <Image
        src={Img}
        alt="hotel img"
        width={400}
        height={500}
        className="object-cover w-full"
        priority
      />
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
          <FaFire className="w-4 h-4" />
          <span>Hot</span>
        </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
        <p className="text-3xl !mb-2 font-semibold">London</p>
        <p className="text-sm">Pearl Hotel</p>
      </div>
    </div>
  );
}

export default DestinationCard
