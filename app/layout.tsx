import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-red-600 via-yellow-500 to-orange-400`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
