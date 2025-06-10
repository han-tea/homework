"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StoryPage() {
  const stories = [
    {
      year: "2013",
      title: "수학교사 시작",
      content: "중학교 수학교사로 첫 발을 내딛었습니다. 학생들과 함께하는 수학의 즐거움을 발견했습니다.",
    },
    {
      year: "2016",
      title: "교육 혁신의 시작 - 수학나눔학교 운영",
      content: "마산제일여중·고와 공동으로 '제3회 나누고 즐기는 수학체험전'을 개최했습니다. 40여 개의 다양한 체험 부스에서 실생활에 활용된 수학적 원리를 발견하고 적용할 수 있는 기회를 제공했습니다. 1,000명이 넘는 학생들과 학부모, 그리고 여러 학교의 수학동아리 회원들이 참가한 이 행사는 수학이 어렵고 힘든 것이 아니라 쉽고 재미있는 과목이라는 것을 체험으로 몸으로 느낄 수 있도록 했습니다.",
    },
    {
      year: "2020",
      title: "온라인 교육의 도전",
      content: "코로나19로 인한 온라인 수업을 통해 디지털 교육의 가능성을 발견했습니다.",
    },
    {
      year: "2023",
      title: "에듀테크 교육의 시작",
      content: "수업에 적용할 수 있는 에듀테크에 관심을 갖고, 에듀테크선도교사단 소속으로 강의를 시작했습니다.",
    },
    {
      year: "2024",
      title: "새로운 도전",
      content: "정보·컴퓨터 교사로의 새로운 도전을 시작합니다. AI와 코딩 교육의 미래를 만들어갑니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            돌아가기
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                한지쌤의 스토리
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              10년간의 교육 여정과 새로운 도전의 이야기
            </p>
          </div>

          <div className="space-y-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                        {story.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                      <p className="text-gray-600">{story.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 