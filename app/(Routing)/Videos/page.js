"use client"
import VideosMetaInfo from "@/Components/MetaInfo/VideosMetaInfo";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Videos() {
    const API_VIDEOS = process.env.NEXT_PUBLIC_API_VIDEOS;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [Videos, setVideos] = useState([]);
    useEffect(() => {
        let GetVideos = async () => {
            let response = await axios.get(API_VIDEOS, { params: { GetAllVideo: true } });
            response = response.data;
            if (response.length > 0) {
                setVideos(response);
            } else {

            }
        }
        GetVideos();
    }, []);

    return (
        <>
        <VideosMetaInfo/>
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 text-[#2e3192]">OUR YOUTUBE CHANNEL</h1>
                <p className="text-muted-foreground">
                    Check out all the latest videos from our YouTube channel, covering on and off the field of Nepal Cricket.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden place-items-center">
                {Videos.map((Item) => (
                    <Link href={Item['Link']} target="_blank" key={Item['ID']}>
                    <div className="w-full max-w-72 rounded-lg overflow-hidden shadow-lg mx-4 p-4 mb-10 h-[405px]">
                        <img
                           src={`${API_BASE_URL + Item.Thumbnail}`}
                            alt="Card Image"
                            width={500}
                            height={300}
                            className="w-full aspect-[5/3] object-cover rounded-lg"
                        />
                        <div className="p-4 bg-background">
                            <h3 className="text-xl font-bold mb-2">{TruncateText(Item.Title, 40)}</h3>
                            <p className="text-muted-foreground">
                            {TruncateText(Item.Description, 100)}
                            </p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}


const TruncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};