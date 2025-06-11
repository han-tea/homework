"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Mail, Github, BookOpen, ArrowRight, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export default function HanjiTeacherSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Counter animation for stats
  const [stats, setStats] = useState({
    experience: 0,
    students: 0,
    programs: 0,
    satisfaction: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        experience: 10,
        students: 500,
        programs: 15,
        satisfaction: 98,
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const testimonials = [
    {
      name: "이O연",
      role: "중학교 2학년",
      content: "한지쌤 덕분에 수학이 재미있어졌어요! 제가 알고 있는 부분과 모르는 부분을 명확히 알게 되어 다음 단계로 나아갈 수 있었어요.",
      rating: 5,
    },
    {
      name: "김O정",
      role: "중학교 교사",
      content: "하이러닝으로 스마트 업! 연수를 듣고 수업 시간에 활용할 수 있는 아이디어를 많이 얻었습니다. 학생들의 반응이 정말 좋아요!",
      rating: 5,
    },
    {
      name: "윤O진 학부모",
      role: "학부모",
      content: "아이가 수학을 힘들어 했는데, 한지쌤 수업 후 자신감을 찾은 것 같아요. 감사합니다.",
      rating: 5,
    },
  ]

  const programs = [
    {
      title: "Math Clinic",
      description: "1:1 맞춤형 수학 클리닉으로 학습 격차를 해소합니다.",
      features: ["개별 진단", "맞춤 커리큘럼", "실시간 피드백"],
    },
    {
      title: "Math Experience Fair",
      description: "수학을 체험하고 즐길 수 있는 다양한 활동을 제공합니다.",
      features: ["체험형 학습", "창의적 사고", "협력 학습"],
    },
    {
      title: "Coding Jump-start",
      description: "수학적 사고와 코딩을 연결한 프로그래밍 입문 과정입니다.",
      features: ["논리적 사고", "문제 해결", "창작 활동"],
    },
  ]

  const blogPosts = [
    {
      title: "수학과 코딩의 만남",
      category: "수학",
      date: "2024.12.01",
      excerpt: "수학적 사고가 프로그래밍에 미치는 영향에 대해 알아봅시다.",
    },
    {
      title: "AI 시대의 교육",
      category: "CS",
      date: "2024.11.28",
      excerpt: "인공지능 시대에 필요한 교육 방향성을 제시합니다.",
    },
    {
      title: "학습 동기 부여 전략",
      category: "자료실",
      date: "2024.11.25",
      excerpt: "학생들의 학습 동기를 높이는 실전 노하우를 공유합니다.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const mailtoLink = `mailto:hanji0601@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n\n${message}`
    )}`
    
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = mailtoLink
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            한지쌤
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              소개
            </a>
            <a href="#programs" className="text-gray-700 hover:text-blue-600 transition-colors">
              프로그램
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              블로그
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              연락처
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/90 border-t border-white/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">
                소개
              </a>
              <a href="#programs" className="block text-gray-700 hover:text-blue-600 transition-colors">
                프로그램
              </a>
              <a href="#blog" className="block text-gray-700 hover:text-blue-600 transition-colors">
                블로그
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
                연락처
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-xl">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-orange-400 p-1">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="한지쌤 프로필"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                수학 × 코딩 = 가능성
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              10년 차 수학교사에서 정보·컴퓨터 교사로 레벨업 중!
              <br />
              호기심 중심의 교육으로 학생들에게 두근두근 설렘을 선물합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                수업 및 강의 의뢰하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full"
                onClick={() => window.location.href = '/story'}
              >
                스토리 보기
              </Button>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stats.experience}년</div>
                <div className="text-gray-600">교육 경험</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{stats.students}+</div>
                <div className="text-gray-600">지도 학생</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">{stats.programs}+</div>
                <div className="text-gray-600">운영 프로그램</div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-purple-500 mb-2">{stats.satisfaction}%</div>
                <div className="text-gray-600">만족도</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Philosophy */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">교육 철학</h2>
            <p className="text-xl text-gray-600">ENTP 성향으로 창의적이고 혁신적인 교육을 추구합니다</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-6 text-center">3-Step Learning Loop</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">호기심 자극</h4>
                    <p className="text-gray-600">질문과 탐구로 시작하는 학습</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">체험과 실습</h4>
                    <p className="text-gray-600">직접 해보며 깨닫는 학습</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">창작과 공유</h4>
                    <p className="text-gray-600">배운 것을 나만의 방식으로 표현</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 border border-white/30">
              <h3 className="text-2xl font-bold mb-6">ENTP 교사의 특징</h3>
              <div className="space-y-4">
                <Badge className="text-lg p-3">
                  💡 아이디어 뱅크
                </Badge>
                <Badge className="text-lg p-3">
                  🔄 유연한 사고
                </Badge>
                <Badge className="text-lg p-3">
                  🎯 문제 해결 중심
                </Badge>
                <Badge className="text-lg p-3">
                  🌟 긍정 에너지
                </Badge>
              </div>
              <p className="mt-6 text-gray-600">"증명 못 해도 괜찮아요, 호기심은 이미 정답!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">시그니처 프로그램</h2>
            <p className="text-xl text-gray-600">학생 맞춤형 교육 프로그램을 제공합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Start Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-3xl p-8 md:p-12 border border-white/30">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">New Start - 정보·컴퓨터 교사</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                수학 교사에서 정보·컴퓨터 교사로의 새로운 도전!
                <br />
                AI와 코딩 교육의 미래를 함께 만들어갑니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub 프로젝트
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Notion 자료실
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">학생·동료들의 이야기</h2>
            <p className="text-xl text-gray-600">함께한 분들의 생생한 후기를 들어보세요</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 p-8">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Resources */}
      <section id="blog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">블로그 & 자료실</h2>
            <p className="text-xl text-gray-600">교육 인사이트와 유용한 자료를 공유합니다</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <Badge className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              더 많은 글 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">연락하기</h2>
            <p className="text-xl text-gray-600">함께 교육의 미래를 만들어가요!</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="backdrop-blur-lg bg-white/20 border border-white/30 p-8">
              <CardContent className="p-0">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">이름</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력하세요" 
                        className="bg-white/50 border-white/30" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">이메일</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="이메일을 입력하세요" 
                        className="bg-white/50 border-white/30" 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">제목</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="문의 제목을 입력하세요" 
                      className="bg-white/50 border-white/30" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">내용</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="문의 내용을 입력하세요" 
                      rows={5} 
                      className="bg-white/50 border-white/30" 
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    메시지 보내기
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-6 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
                <Mail className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
                <BookOpen className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 한지쌤. "증명 못 해도 괜찮아요, 호기심은 이미 정답!"</p>
        </div>
      </footer>
    </div>
  )
}

export {}
