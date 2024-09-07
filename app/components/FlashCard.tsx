import React, { useState } from 'react'
import { Card, Text } from '@mantine/core'

interface FlashCardProps {
  question: string
  answer: string
}

const FlashCard: React.FC<FlashCardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder onClick={() => setIsFlipped(!isFlipped)}>
      <Text size="lg" fw={500}>
        {isFlipped ? answer : question}
      </Text>
      <Text size="sm" c="dimmed" mt="xs">
        {isFlipped ? 'Answer' : 'Question'}
      </Text>
    </Card>
  )
}

export default FlashCard