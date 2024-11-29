"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PiCaretDoubleRightThin } from "react-icons/pi";
import { format, parse } from 'date-fns';
import Link from 'next/link';

const Match = () => {
  const API_HOME = process.env.NEXT_PUBLIC_API_HOME;
  const API_FLAG = process.env.NEXT_PUBLIC_API_FLAG;
  const [MatcheData, setMatcheData] = useState([]);

  useEffect(() => {
    const GetMatches = async () => {
      let response = await axios.get(API_HOME, { params: { LatestMatches: true } });
      response = response.data;
      if (response.length > 0) {
        setMatcheData(response);
      }
    };
    GetMatches();
  }, [API_HOME]);

  return (
    <div>
      <section className="bg-background pt-6 md:pt-10 mb-10 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="mb-6 md:mb-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-[#2e3192]">MATCHES</h2>
          </div>

          <div className="flex items-center justify-between mb-2 p-3 rounded-lg border">
            <h3 className="text-lg font-medium">ALL UPCOMING MATCHES</h3>
            <Link href="./Matches">
              <button className="flex items-center gap-2">
                <span>View All</span>
                <PiCaretDoubleRightThin />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {MatcheData.map((match) => {
              const date = new Date(match['Schedule']);
              const formattedDate = format(date, 'MMM, d, yyyy');

              const timeString = match['Time'];
              const time = parse(timeString, 'HH:mm:ss', new Date());
              const formattedTime = format(time, 'hh:mm a');

              return (
                <a href={match['Link']} key={match['ID']}>
                <div className="bg-card rounded-lg border border-muted p-4 flex flex-col gap-6">
                  <h2>{match['Tournament Name']}</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={`${API_FLAG + match['FlagA']}`} className="w-[40px] h-[40px] object-contain" />
                      <span className="text-xs">{match['Country A']}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs">{match['Country B']}</span>
                      <img src={`${API_FLAG + match['FlagB']}`} className="object-contain w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between gap-2">
                    <div className="text-sm text-muted-foreground">
                     {formattedTime} - {formattedDate}
                    </div>
                  </div>
                </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Match;
