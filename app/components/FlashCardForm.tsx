import React, { useState } from 'react'
import { TextInput, Button, Stack } from '@mantine/core'

interface FlashCardFormProps {
  onSubmit: (question: string, answer: string) => void
}

const FlashCardForm: React.FC<FlashCardFormProps> = ({ onSubmit }) => {
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
      <Stack gap="md">
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
        <Button type="submit" className="bg-[#FB7344] hover:bg-[#FBA363] text-[#0B1415]">
          Add Flash Card
        </Button>
      </Stack>
    </form>
  )
}

export default FlashCardForm