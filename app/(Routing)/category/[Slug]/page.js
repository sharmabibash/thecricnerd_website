"use client";
import axios from 'axios';
import Link from "next/link";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { BiArrowBack } from "react-icons/bi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format, formatDistance, parseISO } from 'date-fns';
import Loader from '@/Components/Loader';
import CategoryNewsMetaInfo from '@/Components/MetaInfo/CategoryNewsMetaInfo';

const API_NEWS = process.env.NEXT_PUBLIC_API_NEWS;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


async function fetchNewsCategoryData(Slug) {
  try {
    const response = await axios.get(API_NEWS, {
      params: {
        FetchNewsCategory: true,
        Slug: Slug,
      },
    });

    return response.data.length > 0 ? response.data : [];
  } catch (error) {
    console.error("Error fetching spotlight data:", error);
    return [];
  }
}

export default function Page() {
  const { Slug } = useParams();
  const [newsCategoryData, setNewsCategoryData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchNewsCategoryData(Slug);
      setNewsCategoryData(data);
    }
    fetchData();
  }, [Slug]);

  if (newsCategoryData.length === 0) {
    return <Loader />;
  }

  const formatPostDate = (dateString) => {
    const postDate = parseISO(dateString);
    const now = new Date();

    const isToday = now.toDateString() === postDate.toDateString();

    if (isToday) {
      return formatDistance(postDate, now).replace(/about /, '').replace(/ ago/, '') + " ago";
    } else {
      return format(postDate, 'MMM d, yyyy');
    }
  };
  return (
    <div>
     <head>
      {Slug && <CategoryNewsMetaInfo Slug={Slug} />} 
    </head>
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <Link href="/News" className="inline-flex items-center text-[#1e3a8a] hover:underline mb-6">
            <BiArrowBack className='mr-2 h-4 w-4' />
            Back to Categories
          </Link>
          <div className="flex flex-col items-start space-y-4 mb-12">
            <h1 className="text-3xl font-bold tracking-tighter text-[#1e3a8a]">{newsCategoryData.length > 0 ? newsCategoryData[0]['News Type'] : 'No News Type'}</h1>
            <p className="text-gray-500 md:text-xl/relaxed max-w-[700px]">
              Latest updates and coverage from {newsCategoryData[0]['News Type']} cricket competition
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsCategoryData.map((data) => (
              <Card key={data.ID} className="flex flex-col justify-between">
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={`${API_BASE_URL + data.Thumbnail}`}
                    alt={data.Title}
                    fill
                    className="object-cover rounded-t-lg border h-[230px] w-full"
                  />
                </div>
                <CardHeader>
                  <CardDescription className="mt-4">{formatPostDate(data['Post Date'])}</CardDescription>
                  <CardTitle className="text-xl text-[#1e3a8a]">{data.Title}</CardTitle>
                  <CardDescription
                    dangerouslySetInnerHTML={{
                      __html: TruncateText(data.Description.replace(/\n/g, '<br />'), 100),
                    }}>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={"../Spotlight/" + data['Slug Url']}><Button className="w-full bg-[#1e3a8a] hover:bg-[#2a4caf]">Read More</Button></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


const TruncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
