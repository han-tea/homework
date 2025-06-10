import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "한지쌤 - 수학 × 코딩 = 가능성",
  description:
    "10년 차 수학교사에서 정보·컴퓨터 교사로 레벨업 중! 호기심 중심의 교육으로 학생들에게 두근두근 설렘을 선물합니다.",
  keywords: "수학교사, 코딩교육, STEAM교육, 한지쌤, 정보교사",
  openGraph: {
    title: "한지쌤 - 수학 × 코딩 = 가능성",
    description: "호기심 중심의 교육으로 학생들에게 두근두근 설렘을 선물합니다.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
