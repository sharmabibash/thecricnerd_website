"use client"
import React, { useEffect, useState } from 'react';
import Loader from '@/Components/Loader'; 

const StatsMetaInfo = ({ statsData, API_BASE_URL }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (statsData && statsData.length > 0) {
            setIsLoading(false); 
        }
    }, [statsData]);

    if (isLoading) {
        return <Loader />; 
    }

    if (!statsData || statsData.length === 0) {
        return <div>No data available.</div>;
    }

    const currentItem = statsData[0];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div>
                <div className="flex flex-col items-center justify-start">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden">
                        <img
                            src={`${API_BASE_URL + currentItem['Player Photo']}`}
                            alt="Player Image"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl my-4 font-bold text-[#2e3192]">{currentItem['Player Name']}</h1>
            <div className="mb-10 shadow rounded-lg p-6 inline-block">
        <div className="text-gray-600">
        <strong>Role:</strong> {currentItem['Player Role']}
        </div>

            <div className="text-gray-600 mt-2">
                <strong>Bowling Style:</strong> {currentItem['Bowling Style']}
            </div>
            <div className="text-gray-600 mt-2">
                <strong>Batting Style:</strong> {currentItem['Batting Style']}
            </div>
            </div>
                </div>
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <h2 className="text-3xl font-bold text-[#2e3192]">Batting Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                  <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{currentItem.ODI_Matches}</span>
                                    </div>
                                      <div className="flex justify-between">
                                        <span>Batting Innings</span>
                                        <span>{currentItem.ODI_Batting_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Runs</span>
                                        <span>{currentItem.ODI_Run_Scored}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{currentItem.ODI_Batting_Average}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Strike Rate</span>
                                        <span>{currentItem.ODI_Strike_Rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Half Centuries</span>
                                        <span>{currentItem.ODI_Half_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Centuries</span>
                                        <span>{currentItem.ODI_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Highest Score</span>
                                        <span>{currentItem.ODI_Highest_Score}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">T20I</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                     <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{currentItem.T20_Matches}</span>
                                    </div>
                                     <div className="flex justify-between">
                                        <span>Batting Innings</span>
                                        <span>{currentItem.T20_Batting_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Runs</span>
                                        <span>{currentItem.T20_Run_Scored}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Average</span>
                                        <span>{currentItem.T20_Batting_Average}</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span>Strike Rate</span>
                                        <span>{currentItem.T20_Strike_Rate}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Half Centuries</span>
                                        <span>{currentItem.T20_Half_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Centuries</span>
                                        <span>{currentItem.T20_Centuries}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Highest Score</span>
                                        <span>{currentItem.T20_Highest_Score}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-3xl font-bold text-[#2e3192]">Bowling Statistics</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">ODI</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                 
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{currentItem.ODI_Matches}</span>
                                    </div>
                                   <div className="flex justify-between">
                                        <span>Bowlings Innings</span>
                                        <span>{currentItem.ODI_Bowlings_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{currentItem.ODI_Wickets_Taken}</span>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{currentItem.ODI_Bowling_Economy}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Best Bowling</span>
                                        <span>{currentItem.ODI_Best_Bowling}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-card p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold">T20I</h3>
                                <div className="grid gap-3 text-muted-foreground mt-4">
                                    <div className="flex justify-between">
                                        <span>Matches</span>
                                        <span>{currentItem.T20_Matches}</span>
                                    </div>
                                     <div className="flex justify-between">
                                        <span>Bowlings Innings</span>
                                        <span>{currentItem.T20_Bowlings_Innings}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wickets</span>
                                        <span>{currentItem.T20_Wickets_Taken}</span>
                                    </div>
                    
                                    <div className="flex justify-between">
                                        <span>Economy</span>
                                        <span>{currentItem.T20_Bowling_Economy}</span>
                                    </div>
                                        <div className="flex justify-between">
                                        <span>Best Bowling</span>
                                        <span>{currentItem.T20_Best_Bowling}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsMetaInfo;

