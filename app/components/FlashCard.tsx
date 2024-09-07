import React, { useState } from 'react'
import { Card, Text } from '@mantine/core'

interface FlashCardProps {
  question: string
  answer: string
}

export default function FlashCard({ question, answer }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder onClick={() => setIsFlipped(!isFlipped)}>
      <Text size="lg" weight={500}>
        {isFlipped ? answer : question}
      </Text>
      <Text size="sm" color="dimmed" mt="xs">
        {isFlipped ? 'Answer' : 'Question'}
      </Text>
    </Card>
  )
}