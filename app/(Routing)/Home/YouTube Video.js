"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default () => {
    const API_HOME = process.env.NEXT_PUBLIC_API_HOME;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const [Videos, setVideos] = useState([]);
    useEffect(() => {
        let GetVideos = async () => {
            let response = await axios.get(API_HOME, { params: { GetYTVideo: true } });
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
            <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground justify-start text-center underline mb-10 text-[#2e3192]">LATEST VIDEOS</h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                breakpoints={{
                    100: {
                        slidesPerView: 1,
                    },
                    585: {
                        slidesPerView: 2,
                    },

                    882: {
                        slidesPerView: 3,
                    },
                    1162: {
                        slidesPerView: 4,
                    },
                }}
                loop={true}
                autoplay={{ delay: 1000 }}
                pagination={{ clickable: true }}
            >
                {Videos.map((Item, index) => (
                    <SwiperSlide key={Item['ID']}>
                        <Link href={Item['Link']} target="_blank">
                            <div className="w-full max-w-72 rounded-lg overflow-hidden shadow-lg mx-4 p-4 mb-10 h-[406px]">
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
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
};

const TruncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    }
    return text;
};