'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle, ArrowLeft, Maximize2 } from 'lucide-react';
import axios from 'axios';

export default function Live_Stream() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoContainerRef = useRef(null);
    const [npl, setNpl] = useState([]);
    const [error, setError] = useState(null);
    const API_NPL = process.env.NEXT_PUBLIC_API_NPL;
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const extractVideoId = (url) => {
        try {
            const urlObj = new URL(url);
            if (urlObj.pathname.startsWith('/live/')) {
                return urlObj.pathname.split('/live/')[1];
            }
            return null;
        } catch (error) {
            console.error('Invalid URL:', error);
            return null;
        }
    };

    const liveUrl = 'https://www.youtube.com/live/XDRyffzokis?si=rUJZexLQwLdenQf5';
    const videoId = extractVideoId(liveUrl);

    const handleFullScreen = () => {
        if (videoContainerRef.current) {
            if (videoContainerRef.current.requestFullscreen) {
                videoContainerRef.current.requestFullscreen();
            } else if (videoContainerRef.current.webkitRequestFullscreen) {
                videoContainerRef.current.webkitRequestFullscreen();
            } else if (videoContainerRef.current.msRequestFullscreen) {
                videoContainerRef.current.msRequestFullscreen();
            }
        }
    };

    useEffect(() => {
        const getNpl = async () => {
            try {
                const response = await axios.get(API_NPL, { params: { GetNPL: true } });
                console.log('API Response:', response.data);
                if (Array.isArray(response.data)) {
                    setNpl(response.data);
                } else {
                    console.error('API returned unexpected format:', response.data);
                    setNpl([]);
                }
            } catch (err) {
                console.error('Error fetching NPL data:', err);
                setError('Failed to fetch data');
                setNpl([]);
            }
        };

        getNpl();
    }, [API_BASE_URL, API_NPL]);

    return (
        <>
            <head>
                <title>Live Stream | The Cricket Nerd | Watch Nepal Cricket Matches Live</title>
                <meta name="description" content="Watch live streams of Nepal cricket matches on The Cricket Nerd. Stay updated with real-time action, match commentary, and exclusive coverage of your favorite games." />
                <meta name="keywords" content="live stream cricket, watch Nepal cricket live, cricket streaming, Nepal cricket live matches, live cricket commentary, cricket live action, live streaming Nepal, The Cricket Nerd live stream, cricket matches live" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.thecricketnerd.com/live-stream" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Live Stream | The Cricket Nerd | Watch Nepal Cricket Matches Live" />
                <meta property="og:description" content="Watch live streams of Nepal cricket matches on The Cricket Nerd. Stay updated with real-time action, match commentary, and exclusive coverage of your favorite games." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png" />
                <meta property="og:url" content="https://www.thecricketnerd.com/live-stream" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Live Stream | The Cricket Nerd | Watch Nepal Cricket Matches Live" />
                <meta name="twitter:description" content="Watch live streams of Nepal cricket matches on The Cricket Nerd. Stay updated with real-time action, match commentary, and exclusive coverage of your favorite games." />
                <meta name="twitter:image" content="https://www.thecricnerd.com/Images/Logo/The Cricket Nerd.png" />
                <link rel="me" href="https://www.facebook.com/thecricketnerd01/" />
                <link rel="me" href="https://www.instagram.com/thecricketnerd17/" />
            </head>

            <div className="col min-h-100 items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <Link href="/" passHref>
                                <Button variant="ghost" className="flex items-center space-x-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Back</span>
                                </Button>
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-800">NPL 2024</h1>
                        </div>

                        {npl.map((item, index) => (
                            <div
                                key={index}
                                ref={videoContainerRef}
                                className="relative aspect-video bg-gray-200 flex items-center justify-center"
                            >
                                {isPlaying && videoId ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (

                                    item.ID === '1' && (
                                        <img
                                            src={`${API_BASE_URL + item.Thumbnail}`}
                                            alt="NPL 2024 Preview"
                                            className="w-full h-full object-cover"
                                        />
                                    )
                                )}
                            </div>
                        ))}

                        <div className="mt-6 flex justify-center space-x-4">
                            <Button
                                onClick={() => setIsPlaying(true)}
                                disabled={isPlaying}
                                className={`flex items-center space-x-2 text-xs hover:bg-red-700 ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <PlayCircle className="w-5 h-5 text-white" />
                                <span className="text-white">Watch Now</span>
                            </Button>

                            <Button
                                onClick={handleFullScreen}
                                className="flex items-center space-x-2 text-xs hover:bg-red-700"
                            >
                                <Maximize2 className="w-5 h-5 text-white" />
                                <span className="text-white">Fullscreen</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
