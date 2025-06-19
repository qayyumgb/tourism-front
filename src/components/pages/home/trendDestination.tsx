import SectionHeading from "@/components/atoms/sectionHeading";
import DestinationCard from "./destinationCard";

export default function TrendDestinationSection() {
    return (
        <div className="my-[48px] container">
            <SectionHeading title="Trending Destinations" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
                <DestinationCard />
            </div>
        </div>
    );
}