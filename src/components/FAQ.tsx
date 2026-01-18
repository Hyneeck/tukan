import { ReactNode, useState } from 'react'
import { Container } from './Container'

interface FAQItem {
  question: string
  answer: ReactNode
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Container>
      <div className="space-y-[clamp(16px,2.5vw,24px)]">
        {items.map((item, index) => (
            <div 
            key={index}
            className="border-b border-text/12 pb-[clamp(16px,2.5vw,24px)]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left flex justify-between items-start gap-4 text-text"
            >
              <h3 className="t-h3">{item.question}</h3>
              <span className="text-text/70 shrink-0 mt-1">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-[clamp(12px,2vw,20px)]">
                <div className="t-body text-text/70 whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  )
}
