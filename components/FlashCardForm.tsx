import React, { useState } from 'react'
import { TextInput, Button } from '@mantine/core'

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextInput
        placeholder="Enter question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        className="bg-[#FBA363] bg-opacity-20 rounded-lg"
        styles={{ input: { color: '#0B1415', '::placeholder': { color: '#0B1415' } } }}
      />
      <TextInput
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        className="bg-[#FBA363] bg-opacity-20 rounded-lg"
        styles={{ input: { color: '#0B1415', '::placeholder': { color: '#0B1415' } } }}
      />
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-[#FB7344] hover:bg-[#FBA363] text-[#0B1415]"  // Changed text color to black
        >
          Add Flash Card
        </Button>
      </div>
    </form>
  )
}

export default FlashCardForm