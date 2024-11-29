import axios from "axios";
import StatsMetaInfo from "@/Components/MetaInfo/StatsMetaInfo";

const API_STATISTICS = process.env.NEXT_PUBLIC_API_STATISTICS;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchStatsData(Slug) {
    try {
        const response = await axios.get(API_STATISTICS, {
            params: {
                FetchStats: true,
                SlugUrl: Slug,
            }
        });

        return response.data.length > 0 ? response.data : [];
    } catch (error) {
        console.error("Error fetching Stats data:", error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const StatsData = await fetchStatsData(params.Stats);
    const currentItem = StatsData[0];

    const title = currentItem ? `${currentItem["Player Name"]} - Cricket Stats | Player Profile, Stats, Records & Achievements` : "Player - Cricket Stats";
    const description = currentItem
        ? `${currentItem["Player Name"]} is a talented cricketer known for his performances in ODI and T20I formats. Explore his complete profile, batting, and bowling stats.`
        : "Player - Cricket Stats";
    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            images: currentItem ? `${API_BASE_URL + currentItem["Player Photo"]}` : "",
            description: description,
        },
    };
}

const Page = async ({ params }) => {
    const StatsData = await fetchStatsData(params.Stats);

    return <StatsMetaInfo statsData={StatsData} API_BASE_URL={API_BASE_URL} />;
};

export default Page;
