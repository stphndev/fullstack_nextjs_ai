'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const Question = () => {
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const answer = await askQuestion(value)
    setValue('')
    setAnswer(answer)
    setLoading(false)
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="border border-black/20 rounded-lg px-4 py-2 text-lg"
          disabled={loading}
          placeholder="Ask a question..."
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 py-2 rounded-md"
        >
          Ask
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {answer && <p className="my-4 text-sm">{answer}</p>}
    </div>
  )
}

export default Question