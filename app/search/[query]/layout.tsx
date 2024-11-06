import React from 'react'

export default function ContentLayout({children}:{
    children: React.ReactNode
}) {
  return (
    <div className="w-4/5 min-w-[920px] xl:w-3/4 xl:px-5 flex gap-3 flex-col">
      {children}
    </div>
  )
}