import SectionHeading from "@/components/atoms/sectionHeading";
import HotelCard from "./hotelCard";

export default function TrendHotelsSection() {
    return (
        <div className="mt-[48px] container">
            <SectionHeading title="Trending Hotel" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <HotelCard />
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </div>
        </div>
    );
}