import Link from 'next/link';
import { Button } from "@/components/ui/button";
export default function Live() {
    return (
        <div className="m-6 flex items-center justify-center min-h-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className="flex justify-center items-center space-x-3 mb-6">
                        {/* <Tv className="w-6 h-6 text-[#f83a6f]" /> */}
                        <h1 className="text-2xl font-semibold text-[#2e3192] text-center">NPL 2024 Stats</h1>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-sm font-semibold text-[#2e3192]">Most Runs:</span>
                            <div className="text-sm font-semibold text-gray-900 text-center ml-4">
                                <span className="block">Emma Wilson</span>
                                <span className="block text-[#f83a6f]">400 Runs</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-sm font-semibold text-[#2e3192]">Most Wickets:</span>
                            <div className="text-sm font-semibold text-gray-900 text-center ml-4">
                                <span className="block">Emma Wilson</span>
                                <span className="block text-[#f83a6f]">20 Wickets</span>
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
