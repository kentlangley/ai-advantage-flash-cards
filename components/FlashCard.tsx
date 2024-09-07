import React, { useState } from 'react'

interface FlashCardProps {
  question: string
  answer: string
}

const FlashCard: React.FC<FlashCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flip-card h-64 w-full perspective-1000">
      <div
        className={`flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
          <p className="text-lg font-semibold text-center text-gray-800">{question}</p>
        </div>
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-indigo-600 rounded-xl shadow-lg p-6 flex items-center justify-center rotate-y-180">
          <p className="text-lg font-semibold text-center text-white">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default FlashCard