"use client";

const topWicketTakers = [
    { name: "John Doe", wickets: 25, matches: 10, average: 15.2 },
    { name: "Jane Smith", wickets: 22, matches: 10, average: 16.8 },
    { name: "Mike Johnson", wickets: 20, matches: 9, average: 17.5 },
    { name: "Sarah Williams", wickets: 18, matches: 10, average: 18.2 },
    { name: "Tom Brown", wickets: 17, matches: 8, average: 16.9 },
];

const topRunScorers = [
    { name: "Emma Wilson", runs: 450, matches: 10, average: 45.0 },
    { name: "David Lee", runs: 425, matches: 9, average: 47.2 },
    { name: "Sophie Taylor", runs: 400, matches: 10, average: 40.0 },
    { name: "Chris Anderson", runs: 380, matches: 8, average: 47.5 },
    { name: "Alex Martinez", runs: 360, matches: 10, average: 36.0 },
];

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
                                className={`text-[#2e3192] border-b-2 px-6 py-3 text-left whitespace-nowrap font-medium ${index === 3 ? 'text-right' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-200`}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-6 py-4 ${cellIndex === 3 ? 'text-right' : 'text-left'} whitespace-nowrap`}
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
    return (
        <div className="max-w-6xl mx-auto py-12 px-6 sm:px-4 pl-4">
            <h1 className="text-4xl font-bold mb-10 text-center text-[#2e3192] sm:text-3xl">
                NPL 2024 Statistics
            </h1>

            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 ">
                <Card title="Top Wicket Takers">
                    <Table
                        headers={["Name", "Wickets", "Matches", "Economy"]}
                        rows={topWicketTakers.map((player) => [
                            player.name,
                            player.wickets,
                            player.matches,
                            player.average.toFixed(2),
                        ])}
                    />
                </Card>

                <Card title="Top Run Scorers">
                    <Table
                        headers={["Name", "Runs", "Matches", "Average"]}
                        rows={topRunScorers.map((player) => [
                            player.name,
                            player.runs,
                            player.matches,
                            player.average.toFixed(2),
                        ])}
                    />
                </Card>
            </div>
        </div>
    );
}
