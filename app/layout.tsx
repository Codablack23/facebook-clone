import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react"
const inter = Inter({ subsets: ['latin'] })
import "bootstrap-icons/font/bootstrap-icons.min.css"

export const metadata: Metadata = {
  title: 'Facebook Clone',
  description: 'Facebook Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200` }>{children}</body>
    </html>
  )
}
