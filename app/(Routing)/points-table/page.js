"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '@/Components/Loader';
import PointsTableMetaInfo from "@/Components/MetaInfo/PointsTableMetaInfo";

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
                        <tr
                            key={rowIndex}
                            className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200`}
                        >
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

export default function CricketPointsTable() {
    const [pointsTable, setPointsTable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchPointsTable = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_NPL_POINTS_TABLE;
                if (!apiUrl) {
                    throw new Error("API URL not defined. Please set NEXT_PUBLIC_API_NPL_POINTS_TABLE in your .env.local file.");
                }

                const response = await axios.get(apiUrl, {
                    params: {
                        GetAllTeam: true
                    }
                });
                const data = response.data;
                if (Array.isArray(data)) {

                    const pointsTableWithPoints = data.map(team => ({
                        ...team,
                        points: team.Wins * 2
                    }));


                    const sortedPointsTable = pointsTableWithPoints.sort((a, b) => {
                        if (a.points > b.points) return -1;
                        if (a.points < b.points) return 1;

                        return b.Nrr - a.Nrr;
                    });

                    setPointsTable(sortedPointsTable);
                } else {
                    throw new Error("Data received from API is not an array.");
                }
            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPointsTable();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (errorMessage) {
        return <div className="text-center mt-10 text-red-500">Error fetching points table: {errorMessage}</div>;
    }

    return (
        <>
            <PointsTableMetaInfo />
            <div className="max-w-6xl mx-auto py-12 px-6 sm:px-4">
                <Card title={`${pointsTable[0]?.Title} Standings`}>
                    <Table
                        headers={["Position", "Team Name", "Match", "Wins", "Lost", "NR", "Points", "NRR"]}
                        rows={pointsTable.map((team, index) => [
                            index + 1,
                            team["Team Name"],
                            team["Match Played"],
                            team["Wins"],
                            team["Loss"],
                            team["Nr"],
                            team["Points"],
                            team["Nrr"],
                        ])}
                    />
                </Card>
            </div>
        </>
    );
}
