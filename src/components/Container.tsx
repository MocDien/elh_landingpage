import React from 'react'

import { cn } from '@/lib/utils'

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('mx-auto w-full max-w-[1920px] px-4 lg:px-32', className)}>{children}</div>
}

export default Container
