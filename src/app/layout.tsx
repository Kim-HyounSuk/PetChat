import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PetChat | AI 펫 채팅 서비스',
  description: 'AI 펫과 대화하는 채팅 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
