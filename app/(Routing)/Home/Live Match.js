import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Tv } from 'lucide-react'

export default function Live() {
    return (
        <div className="p-10 col min-h-100 items-center justify-center p-2">
            <div className="w-full max-w-xs">
                <div className="bg-white shadow-md rounded-md overflow-hidden">
                    <div className="p-3 space-y-3">
                        <div className="flex items-center space-x-2">
                            <Tv className="w-5 h-5 text-red-600" />
                            <h1 className="m-1 text-base font-semibold text-gray-800">NPL 2024 Live Now</h1>
                        </div>
                        <p className="m-5 text-xs text-gray-600">
                            Watch the latest Nepal Premier League 2024 competition live!
                        </p>
                        <Link href="./live-stream" passHref>
                            <Button className="m-2 w-full text-xs bg-[#2e3192] hover:bg-red-700 text-white">
                                Watch Now Live
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
