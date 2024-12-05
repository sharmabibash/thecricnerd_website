"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Live() {
    const API_NPL_BATTING = process.env.NEXT_PUBLIC_API_NPL_BATTING;
    const API_NPL_BOWLING = process.env.NEXT_PUBLIC_API_NPL_BOWLING;
    const [mostRuns, setMostRuns] = useState({ player: "", score: "", average: "" });
    const [mostWickets, setMostWickets] = useState({ player: "", wickets: "", economy: "" });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMostRuns = async () => {
            try {
                const response = await axios.get(API_NPL_BATTING, { params: { GetNPLBatter: true } });
                const data = response.data;

                if (data.length > 0) {
                    const topRunScorer = data.reduce((best, current) => {
                        return (current['Run Scored'] > best['Run Scored'] ||
                            (current['Run Scored'] === best['Run Scored'] && current['Batting Average'] > best['Batting Average']))
                            ? current : best;
                    }, data[0]);

                    setMostRuns({
                        player: topRunScorer['Player Name'],
                        score: topRunScorer['Run Scored'],
                        average: topRunScorer['Batting Average']
                    });
                }
            } catch (error) {
                console.error('Error fetching most runs:', error);
            }
        };

        const fetchMostWickets = async () => {
            try {
                const response = await axios.get(API_NPL_BOWLING, { params: { GetNPLBowler: true } });
                const data = response.data;

                if (data.length > 0) {
                    const topWicketTaker = data.reduce((best, current) => {
                        return (current['Total Wickets'] > best['Total Wickets'] ||
                            (current['Total Wickets'] === best['Total Wickets'] && current['Economy Rate'] < best['Economy Rate']))
                            ? current : best;
                    }, data[0]);

                    setMostWickets({
                        player: topWicketTaker['Player Name'],
                        wickets: topWicketTaker['Total Wickets'],
                        economy: topWicketTaker['Economy Rate']
                    });
                }
            } catch (error) {
                console.error('Error fetching most wickets:', error);
            }
        };

        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([fetchMostRuns(), fetchMostWickets()]);
            setIsLoading(false);
        };

        fetchData();
    }, [API_NPL_BATTING, API_NPL_BOWLING]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="m-6 flex items-center justify-center min-h-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex justify-center items-center space-x-3 mb-6">
                        <h1 className="text-2xl font-semibold text-[#2e3192] text-center">NPL 2024 Stats</h1>
                    </div>

                    <div className="mt-4 space-y-4">
                        <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-sm font-semibold text-[#2e3192]">Most Runs:</span>
                            <div className="text-sm font-semibold text-gray-900 text-center ml-4">
                                <span className="block">{mostRuns.player}</span>
                                <span className="block text-[#f83a6f]">{mostRuns.score} Runs</span>

                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-sm font-semibold text-[#2e3192]">Most Wickets:</span>
                            <div className="text-sm font-semibold text-gray-900 text-center ml-4">
                                <span className="block">{mostWickets.player}</span>
                                <span className="block text-[#f83a6f]">{mostWickets.wickets} Wickets</span>
                            </div>
                        </div>
                    </div>

                    <Link href="./live-stream" passHref>
                        <Button className="mt-6 w-full py-2 text-xs bg-[#2e3192] hover:bg-[#1d1f87] text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105">
                            More Statistics
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
