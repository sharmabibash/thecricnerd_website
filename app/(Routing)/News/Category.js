import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function NewsCategories() {
  const categories = [
    {
      title: "Nepal Premier League",
      description: "Latest updates and coverage from Nepal's premier cricket competition",
      slug: "nepal-premier-league",
      src: "Images/Logo/NPL.jpg"
    },
    {
      title: "Nepal National",
      description: "News and updates about Nepal's national cricket team",
      slug: "nepal-national",
      src: "Images/Logo/national and domestic.webp"
    },
    {
      title: "Nepal Domestic",
      description: "Coverage of domestic cricket tournaments and matches",
      slug: "nepal-domestic",
      src: "Images/Logo/national and domestic.webp"
    },
    {
      title: "Editorial",
      description: "Expert analysis and opinion pieces on Nepal cricket",
      slug: "editorial",
      src: "Images/Logo/The Cricket Nerd.png"
    },
    {
      title: "Elite Cup (Jay Trophy)",
      description: "Detailed coverage, expert analysis, and updates on the Elite Cup (Jay Trophy), a premier domestic cricket tournament in Nepal.",
      slug: "elite-cup-jay-trophy",
      src: "Images/Logo/Elite Cup (Jay Trophy).jpg"
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-[#1e3a8a]">Cricket News Categories</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
            Stay updated with the latest cricket news from Nepal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <Card className="h-full transition-colors hover:border-[#1e3a8a] cursor-pointer">
                <CardHeader>
                  <img src={category.src} className="h-[200px] object-contain"/>
                  <CardTitle className="text-xl text-[#1e3a8a]">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

