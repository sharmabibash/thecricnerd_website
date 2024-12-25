"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "@/Components/Loader";

function Card({ title, children }) {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg bg-white p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[#2e3192]">{title}</h2>
            {children}
        </div>
    );
}

function Table({ headers, rows }) {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full border-collapse text-sm sm:text-xs">
                <thead>
                    <tr className="bg-gray-100 text-gray-600">
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`text-[#2e3192] border-b-2 px-6 py-3 text-left whitespace-nowrap font-medium ${index === headers.length - 1 ? "text-right" : ""}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200`}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-6 py-4 ${cellIndex === headers.length - 1 ? "text-right" : "text-left"} whitespace-nowrap`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function NPLStatsPage() {
    const API_NPL_BATTING = process.env.NEXT_PUBLIC_API_NPL_BATTING;
    const API_NPL_BOWLING = process.env.NEXT_PUBLIC_API_NPL_BOWLING;
    const API_TOURNAMENT_NAME = process.env.NEXT_PUBLIC_API_NPL_POINTS_TABLE;

    const [tournamentName, setTournamentName] = useState("");
    const [topRunScorers, setTopRunScorers] = useState([]);
    const [topWicketTakers, setTopWicketTakers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [battingResponse, bowlingResponse] = await Promise.all([
                    axios.get(API_NPL_BATTING, { params: { GetNPLBatter: true } }),
                    axios.get(API_NPL_BOWLING, { params: { GetNPLBowler: true } })
                ]);

                const sortedBattingData = battingResponse.data
                    .sort((a, b) => b["Run Scored"] - a["Run Scored"] || b["Batting Average"] - a["Batting Average"])
                    .slice(0, 5);

                const sortedBowlingData = bowlingResponse.data
                    .sort((a, b) => b["Total Wickets"] - a["Total Wickets"] || a["Economy"] - b["Economy"])
                    .slice(0, 5);

                setTopRunScorers(sortedBattingData);
                setTopWicketTakers(sortedBowlingData);
            } catch (error) {
                console.error("Error fetching cricket stats:", error);
            }
        };

        const fetchTournamentName = async () => {
            try {
                const response = await axios.get(API_TOURNAMENT_NAME, { params: { GetAllTeam: true } });
                const tournament = response.data[0]?.Title || "Unknown Tournament";
                setTournamentName(tournament);
            } catch (error) {
                console.error("Error fetching tournament name:", error);
            }
        };

        Promise.all([fetchStats(), fetchTournamentName()]).finally(() => setIsLoading(false));
    }, [API_NPL_BATTING, API_NPL_BOWLING, API_TOURNAMENT_NAME]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <head>
                <title>{`${tournamentName} Statistics`}</title>
            </head>
            <div className="max-w-6xl mx-auto py-12 px-6 sm:px-4">
                <h1 className="text-4xl font-bold mb-10 text-center text-[#2e3192] sm:text-3xl">
                    {`${tournamentName} Top Performers`}
                </h1>

                <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
                    <Card title="Top Wicket Takers">
                        <Table
                            headers={["S.No", "Name", "Wickets", "Matches", "Economy"]}
                            rows={topWicketTakers.map((player, index) => [
                                index + 1,
                                player["Player Name"],
                                player["Total Wickets"],
                                player["Total Match"],
                                player["Economy"]
                            ])}
                        />
                    </Card>

                    <Card title="Top Run Scorers">
                        <Table
                            headers={["S.No", "Name", "Runs", "Matches", "Average"]}
                            rows={topRunScorers.map((player, index) => [
                                index + 1,
                                player["Player Name"],
                                player["Run Scored"],
                                player["Total Match"],
                                player["Batting Average"]
                            ])}
                        />
                    </Card>
                </div>
            </div>
        </>
    );
}
