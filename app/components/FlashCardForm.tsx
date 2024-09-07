import React, { useState } from 'react'
import { TextInput, Button, Stack } from '@mantine/core'

interface FlashCardFormProps {
  onSubmit: (question: string, answer: string) => void
}

export default function FlashCardForm({ onSubmit }: FlashCardFormProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim() && answer.trim()) {
      onSubmit(question, answer)
      setQuestion('')
      setAnswer('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="md">
        <TextInput
          label="Question"
          placeholder="Enter the question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <TextInput
          label="Answer"
          placeholder="Enter the answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        />
        <Button type="submit" color="blue" fullWidth>
          Add Flash Card
        </Button>
      </Stack>
    </form>
  )
}