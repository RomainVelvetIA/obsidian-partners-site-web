import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ROIResults } from '@/lib/leadMagnet/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ROIChartProps {
    results: ROIResults | null;
    coutActuel: number;
}

export default function ROIChart({ results, coutActuel }: ROIChartProps) {
    if (!results) return null;

    const coutApres = coutActuel - results.gainMensuel;

    const data = {
        labels: ['Coût Actuel', 'Avec IA'],
        datasets: [
            {
                label: 'Coût Mensuel (€)',
                data: [coutActuel, coutApres],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'],
                borderColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    color: '#374151', // Gray-700
                    font: {
                        family: 'sans-serif',
                        weight: 300
                    }
                },
            },
            title: {
                display: true,
                text: 'Comparaison des Coûts Mensuels',
                color: '#0f172a', // Slate-900
                font: {
                    size: 16,
                    weight: 300
                }
            },
        },
        scales: {
            y: {
                ticks: { color: '#64748b' }, // Slate-500
                grid: { color: 'rgba(0, 0, 0, 0.05)' },
            },
            x: {
                ticks: { color: '#64748b' }, // Slate-500
                grid: { display: false },
            },
        },
    };

    return <Bar options={options} data={data} />;
}
