import dynamic from 'next/dynamic'
import React from 'react'

interface Props {
  content: string
  setContent: (val: string) => void
}

const ClientOnlyEditorInner = dynamic(() => import('./ClientOnlyEditorInner'), { ssr: false })

export default function ClientOnlyEditor(props: Props) {
  return <ClientOnlyEditorInner {...props} />
}
