"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Loader from "@/Components/Loader";

export default function Live() {
    const API_NPL_BATTING = process.env.NEXT_PUBLIC_API_NPL_BATTING;
    const API_NPL_BOWLING = process.env.NEXT_PUBLIC_API_NPL_BOWLING;
    const API_TOURNAMENT_NAME = process.env.NEXT_PUBLIC_API_NPL_POINTS_TABLE;

    const [mostRuns, setMostRuns] = useState({ player: "", score: "", average: "" });
    const [mostWickets, setMostWickets] = useState({ player: "", wickets: "", economy: "" });
    const [tournamentName, setTournamentName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMostRuns = async () => {
            try {
                const response = await axios.get(API_NPL_BATTING, { params: { GetNPLBatter: true } });
                const data = response.data;

                if (data.length > 0) {
                    const topRunScorer = data.reduce((best, current) => {
                        const currentRuns = parseInt(current['Run Scored'], 10) || 0;
                        const bestRuns = parseInt(best['Run Scored'], 10) || 0;
                        const currentAverage = parseFloat(current['Batting Average']) || 0;
                        const bestAverage = parseFloat(best['Batting Average']) || 0;

                        return (currentRuns > bestRuns ||
                            (currentRuns === bestRuns && currentAverage > bestAverage))
                            ? current : best;
                    }, data[0]);

                    setMostRuns({
                        player: topRunScorer['Player Name'] || "Unknown Player",
                        score: topRunScorer['Run Scored'] || 0,
                        average: topRunScorer['Batting Average'] || "0.00"
                    });
                }
            } catch (error) {
                console.error('Error fetching most runs:', error);
            }
        };

        const fetchTournamentName = async () => {
            try {
                const response = await axios.get(API_TOURNAMENT_NAME, { params: { GetAllTeam: true } });
                const data = response.data;

                if (data.length > 0) {
                    setTournamentName(data[0]['Title'] || "Unknown Tournament");
                } else {
                    console.log('No tournament data found.');
                }
            } catch (error) {
                console.error('Error fetching tournament name:', error);
            }
        };

        const fetchMostWickets = async () => {
            try {
                const response = await axios.get(API_NPL_BOWLING, { params: { GetNPLBowler: true } });
                const data = response.data;

                if (data.length > 0) {
                    const topWicketTaker = data.reduce((best, current) => {
                        const currentWickets = parseInt(current['Total Wickets'], 10) || 0;
                        const bestWickets = parseInt(best['Total Wickets'], 10) || 0;
                        const currentEconomy = parseFloat(current['Economy Rate']) || Infinity;
                        const bestEconomy = parseFloat(best['Economy Rate']) || Infinity;

                        return (currentWickets > bestWickets ||
                            (currentWickets === bestWickets && currentEconomy < bestEconomy))
                            ? current : best;
                    }, data[0]);

                    setMostWickets({
                        player: topWicketTaker['Player Name'] || "Unknown Player",
                        wickets: topWicketTaker['Total Wickets'] || 0,
                        economy: topWicketTaker['Economy Rate'] || "N/A"
                    });
                }
            } catch (error) {
                console.error('Error fetching most wickets:', error);
            }
        };

        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([fetchMostRuns(), fetchMostWickets(), fetchTournamentName()]);
            setIsLoading(false);
        };

        fetchData();
    }, [API_NPL_BATTING, API_NPL_BOWLING, API_TOURNAMENT_NAME]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="m-6 flex items-center justify-center min-h-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex justify-center items-center space-x-3 mb-6">
                        <h1 className="text-2xl font-semibold text-[#2e3192] text-center">{`${tournamentName} Stats`}</h1>
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

                    <Link href="./npl-stats" passHref>
                        <Button className="mt-6 w-full py-2 text-xs bg-[#2e3192] hover:bg-[#1d1f87] text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105">
                            More Statistics
                        </Button>
                    </Link>
                    <Link href="./points-table" passHref>
                        <Button className="mt-6 w-full py-2 text-xs bg-[#2e3192] hover:bg-[#1d1f87] text-white font-semibold rounded-lg shadow-lg transition-all ease-in-out duration-300 transform hover:scale-105">
                            Points Table
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
