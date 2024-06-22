import React, { useEffect, useRef } from 'react';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

Chart.register(...registerables);

const ExpenseChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        const canvas = chartRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            // Установка размеров canvas и повышение DPI
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);

            const data: ChartData = {
                labels: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August'
                ],
                datasets: [
                    {
                        label: 'Personal Expenses',
                        data: [500, 1000, 750, 900, 1200, 700, 850],
                        backgroundColor: '#64CFF6',
                        borderColor: '#64CFF6',
                        borderWidth: 1,
                    },
                    {
                        label: 'Team Expenses',
                        data: [5000, 10000, 7500, 9000, 12000, 7000, 8500],
                        backgroundColor: '#6359E9',
                        borderColor: '#6359E9',
                        borderWidth: 1,
                    },
                ],
            };

            const options: ChartOptions = {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '',
                        },
                    },
                },
            };

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data,
                options,
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} style={{ width: '660px', height: '400px' }} />;
};

export default ExpenseChart;
