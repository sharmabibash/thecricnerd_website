"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, formatDistance, parseISO } from 'date-fns';
import Link from 'next/link';


const formatPostDate = (dateString) => {
  const postDate = parseISO(dateString);
  const now = new Date();

  const isToday = now.toDateString() === postDate.toDateString();
  const daysAgo = Math.floor((now - postDate) / (1000 * 60 * 60 * 24)); 

  if (isToday) {
    return formatDistance(postDate, now).replace(/about /, '').replace(/ ago/, '') + " ago";
  } else if (daysAgo === 1) {
    return "1 day ago"; // Singular for 1 day
  } else if (daysAgo === 2) {
    return "2 days ago"; // Singular for 2 days
  } else {
    return format(postDate, 'MMM d, yyyy'); // Formatted date for anything older than 2 days
  }
};


const NewsPage = () => {
  const [newsData, setNewsData] = useState({
    "Nepal Premier League": [],
    "Nepal National": [],
    "Nepal Domestic": [],
    "Editorial": [],
  });
  const API_HOME = process.env.NEXT_PUBLIC_API_HOME;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_HOME}`, {
          params: { LatestNews: true },
        });

        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const TruncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="container mx-auto px-10 py-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl justify-start text-[#2e3192] mb-10">LATEST NEWS</h2>
      {Object.keys(newsData).map((category, index) => (
        newsData[category].length > 0 && (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-[#2A2A8C] pb-2">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {newsData[category].map((article, idx) => (
                <Link href={"Spotlight/"+article['Slug Url']} key={article.ID}>
                <div
                  key={idx}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow h-[445px]"
                >
                  <div className="relative h-48 w-full">
                    <img
                      src={`${API_BASE_URL + article.Thumbnail}`}
                      alt={article.Title}
                      className="rounded-t-lg h-[200px] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 p-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-[#2A2A8C] border-[#2A2A8C]">
                        {category}
                      </div>
                      <time className="text-sm text-muted-foreground">{formatPostDate(article["Post Date"])}</time>
                    </div>
                    <h3 className="tracking-tight text-lg font-semibold text-[#2A2A8C]">{article.Title}</h3>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{
                        __html: TruncateText(article.Description, 100).replace(/\n/g, '<br />'),
                      }}
                    ></p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </section>
        )
      ))}
    </div>
  );
};

export default NewsPage;
