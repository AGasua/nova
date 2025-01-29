'use client'

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export default function Results() {
  // Données exemple (à remplacer par vos calculs réels)
  const data = {
    labels: ['Gestion', 'Leadership', 'Pédagogie', 'Règlementation', 'RH'],
    datasets: [
      {
        label: 'Compétences',
        data: [3.2, 2.8, 4, 3.5, 3],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Résultats de l&apos;évaluation</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <Radar data={data} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Recommandations</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Formation en gestion de conflits</li>
          <li>Atelier sur les nouvelles réglementations</li>
          <li>Coaching en leadership transformationnel</li>
        </ul>
      </div>
    </div>
  )
}