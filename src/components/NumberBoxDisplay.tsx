import React from 'react'

import { cn } from '@/lib/utils'

interface NumberBoxDisplayProps {
  number: number
  className?: string
}

const NumberBoxDisplay: React.FC<NumberBoxDisplayProps> = ({ number, className }) => {
  const digits = number.toString().split('')

  return (
    <div className="flex gap-2">
      {digits.map((digit, index) => (
        <div
          key={index}
          className={cn(
            'text-primary-blue grid h-5 w-5 place-items-center rounded border border-gray-300 bg-white text-sm font-semibold',
            className,
          )}
        >
          {digit}
        </div>
      ))}
    </div>
  )
}

export default NumberBoxDisplay
