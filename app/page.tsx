'use client'

import React, { useState, useEffect } from 'react'
import FlashCardForm from './components/FlashCardForm'
import { Container, Title, Text } from '@mantine/core'
import ShimmerButton from '../components/magicui/shimmer-button'
import DotPattern from '../components/magicui/dot-pattern'
import { defaultFlashCards } from './defaultFlashCards'
import { QuestionMarkCircledIcon, CheckCircledIcon } from '@radix-ui/react-icons'

interface FlashCardData {
  id: number
  question: string
  answer: string
}

export default function Home() {
  const [flashCards, setFlashCards] = useState<FlashCardData[]>([])
  const [showForm, setShowForm] = useState(false)
  const [currentCard, setCurrentCard] = useState<FlashCardData | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const addFlashCard = (question: string, answer: string) => {
    const newCard: FlashCardData = {
      id: Date.now(),
      question,
      answer,
    }
    setFlashCards([...flashCards, newCard])
    setShowForm(false)
    if (!currentCard) {
      setCurrentCard(newCard)
    }
  }

  const loadDefaultCards = () => {
    setFlashCards(defaultFlashCards)
    selectRandomCard(defaultFlashCards)
  }

  const selectRandomCard = (cards: FlashCardData[]) => {
    if (cards.length > 0) {
      const randomIndex = Math.floor(Math.random() * cards.length)
      setCurrentCard(cards[randomIndex])
      setIsFlipped(false)
    } else {
      setCurrentCard(null)
    }
  }

  useEffect(() => {
    if (flashCards.length > 0 && !currentCard) {
      selectRandomCard(flashCards)
    }
  }, [flashCards, currentCard])

  const handleNextCard = () => {
    selectRandomCard(flashCards)
  }

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen bg-[#FBF4EB] text-[#0B1415] relative overflow-hidden">
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={1}
        className="absolute inset-0 opacity-10 text-[#FB7344]"
      />
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <Container size="xl">
          <div className="bg-[#FBA363] bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
            <Title order={1} className="text-4xl font-bold text-[#FB7344] mb-6 text-center">
              AI Advantage Flash Cards
            </Title>
            
            <div className="flex space-x-4 mb-8">
              <ShimmerButton
                onClick={() => setShowForm(true)}
                className="flex-1 text-[#0B1415]"
                background="rgba(251, 115, 68, 0.2)"  // Increased opacity
                shimmerColor="rgba(251, 163, 99, 0.5)"  // Changed color and increased opacity
              >
                Create New Flash Card
              </ShimmerButton>
              <ShimmerButton
                onClick={loadDefaultCards}
                className="flex-1 text-[#0B1415]"
                background="rgba(251, 115, 68, 0.2)"  // Increased opacity
                shimmerColor="rgba(251, 163, 99, 0.5)"  // Changed color and increased opacity
              >
                Shuffle the Cards
              </ShimmerButton>
            </div>

            {showForm && <FlashCardForm onSubmit={addFlashCard} />}

            {currentCard ? (
              <div className="mt-8 bg-[#FB7344] bg-opacity-20 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  {isFlipped ? (
                    <CheckCircledIcon className="w-8 h-8 text-[#FBA363]" />
                  ) : (
                    <QuestionMarkCircledIcon className="w-8 h-8 text-[#FB7344]" />
                  )}
                </div>
                <Text className="text-2xl font-bold text-center text-[#0B1415] mb-4">
                  {isFlipped ? "Answer" : "Question"}
                </Text>
                <Text className="text-xl text-center text-[#0B1415] mb-6">
                  {isFlipped ? currentCard.answer : currentCard.question}
                </Text>
                <div className="flex justify-center">
                  <ShimmerButton
                    onClick={handleCardClick}
                    className="w-full text-[#0B1415]"
                    background="rgba(251, 115, 68, 0.2)"  // Increased opacity
                    shimmerColor="rgba(251, 163, 99, 0.5)"  // Changed color and increased opacity
                  >
                    {isFlipped ? "Back to Question" : "Reveal Answer"}
                  </ShimmerButton>
                </div>
                {isFlipped && (
                  <div className="flex justify-center mt-4">
                    <ShimmerButton
                      onClick={handleNextCard}
                      className="w-full text-[#0B1415]"
                      background="rgba(251, 163, 99, 0.2)"  // Increased opacity
                      shimmerColor="rgba(251, 115, 68, 0.5)"  // Changed color and increased opacity
                    >
                      Next Card
                    </ShimmerButton>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-center text-[#0B1415] text-opacity-70 mt-8">
                No flash cards yet. Create your first one or load the AI Advantage set!
              </p>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}
