'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const questions = [
  {
    category: "Gestion administrative",
    question: "Maîtrise de la gestion budgétaire",
    options: [
      { value: 1, label: "Débutant" },
      { value: 2, label: "Intermédiaire" },
      { value: 3, label: "Avancé" },
      { value: 4, label: "Expert" }
    ]
  },
  {
    category: "Leadership",
    question: "Capacité à motiver son équipe",
    options: [
      { value: 1, label: "Débutant" },
      { value: 2, label: "Intermédiaire" },
      { value: 3, label: "Avancé" },
      { value: 4, label: "Expert" }
    ]
  }
]

export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = value
    setAnswers(newAnswers)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Barre de progression */}
      <div className="mb-8">
        <div className="h-3 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600 text-sm">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </div>

      {/* Question actuelle */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-gray-500 text-sm mb-2">
          {questions[currentQuestion].category}
        </h2>
        <h1 className="text-2xl font-bold mb-6">
          {questions[currentQuestion].question}
        </h1>

        {/* Options de réponse */}
        <div className="grid gap-4">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all
                ${answers[currentQuestion] === option.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-400'}`}
            >
              <span className="font-medium">{option.label}</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center gap-1 text-blue-600 disabled:opacity-50"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Précédent
          </button>
          
          <button
            onClick={() => {
              if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
              } else {
                // Soumettre le questionnaire
                window.location.href = '/resultats'
              }
            }}
            className="flex items-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}