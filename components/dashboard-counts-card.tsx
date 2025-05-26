'use client';

import { useEffect, useState } from 'react';

interface SeniorCounts {
    totalSeniors: number;
    totalPwdSeniors: number;
    categoryCounts: {
        Special: number;
        Regular: number;
        LowIncome: number;
    };
}

export const DashboardCountsCard = () => {
    const [seniorCounts, setSeniorCounts] = useState<SeniorCounts | null>(null);
    const [loadingCounts, setLoadingCounts] = useState(true);
    const [errorCounts, setErrorCounts] = useState<string | null>(null);

    useEffect(() => {
        const fetchSeniorCounts = async () => {
            try {
                setLoadingCounts(true);
                const response = await fetch('/api/seniors/counts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: SeniorCounts = await response.json();
                setSeniorCounts(data);
            } catch (error: any) {
                console.error('Error fetching senior counts:', error);
                setErrorCounts(error.message);
            } finally {
                setLoadingCounts(false);
            }
        };

        fetchSeniorCounts();
    }, []);

    return (
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Senior Citizen Overview</h2>
            {loadingCounts && <p>Loading senior counts...</p>}
            {errorCounts && <p className="text-red-500">Error: {errorCounts}</p>}
            {seniorCounts && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                        <h3 className="text-lg font-medium">Total Seniors</h3>
                        <p className="text-3xl font-bold text-green-600">{seniorCounts.totalSeniors}</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                        <h3 className="text-lg font-medium">Total PWD Seniors</h3>
                        <p className="text-3xl font-bold text-gray-600">{seniorCounts.totalPwdSeniors}</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                        <h3 className="text-lg font-medium">Special Category</h3>
                        <p className="text-3xl font-bold text-blue-600">{seniorCounts.categoryCounts.Special}</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                        <h3 className="text-lg font-medium">Regular Category</h3>
                        <p className="text-3xl font-bold text-purple-600">{seniorCounts.categoryCounts.Regular}</p>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                        <h3 className="text-lg font-medium">Low-income Category</h3>
                        <p className="text-3xl font-bold text-yellow-600">{seniorCounts.categoryCounts.LowIncome}</p>
                    </div>
                </div>
            )}
        </div>
    );
};