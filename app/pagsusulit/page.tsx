"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PagsusuliPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  // Sample quiz questions based on terminolohiya
  const questions = [
    {
      id: 1,
      term: "Baul",
      definition:
        "Tumutukoy sa balat o shell ng niyog. Karaniwan, ang balat ng niyog na ito ay ginagamit upang gumawa ng uling.",
      options: [
        { id: 1, imageUrl: "/images/baul.jpg" },
        { id: 2, imageUrl: "/images/anahaw.jpg" },
        { id: 3, imageUrl: "/images/albok.jpg" },
        { id: 4, imageUrl: "/images/hakbon.jpg" },
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      term: "Anahaw",
      definition:
        "Isang uri ng dahon na malapad at matibay. Ginagamit pamalit sa dahon ng saging upang takpan ang uling upang hindi masunog ng lubusan.",
      options: [
        { id: 1, imageUrl: "/images/barani.jpg" },
        { id: 2, imageUrl: "/images/anahaw.jpg" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Taklob" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Palapa" },
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      term: "Bareta",
      definition:
        "Isang kagamitan na gawa sa bakal na may matulis na dulo. Karaniwang ginagami upang maghukay ng lupa at alisin ang mga ugat ng halaman.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Sundang" },
        { id: 2, imageUrl: "/placeholder.svg?height=150&width=150&text=Pala" },
        { id: 3, imageUrl: "/images/bareta.jpg" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Sirni" },
      ],
      correctAnswer: 3,
    },
    {
      id: 4,
      term: "Asó",
      definition: "Usok na mula sa apoy, kadalasang nagmumula sa pagkasunog ng mga bagay.",
      options: [
        { id: 1, imageUrl: "/images/aso.jpg" },
        { id: 2, imageUrl: "/placeholder.svg?height=150&width=150&text=Sungaw" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Ningas" },
        { id: 4, imageUrl: "/images/amak.jpg" },
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      term: "Baga",
      definition:
        "Tumutukoy sa mga nasunog na piraso ng kahoy o materyal, karaniwang ginagamit sa mga barbecue o pagluluto gamit ang apoy.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Uring" },
        { id: 2, imageUrl: "/images/baga.jpg" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Kalayo" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Gatong" },
      ],
      correctAnswer: 2,
    },
    {
      id: 6,
      term: "Gwantes",
      definition:
        "Isang pantakip para sa kamay, karaniwang gawa sa tela o katad, na may hiwalay na daliri para sa bawat daliri.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Switer" },
        { id: 2, imageUrl: "/placeholder.svg?height=150&width=150&text=Katsa" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Gwantes" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Taklob" },
      ],
      correctAnswer: 3,
    },
    {
      id: 7,
      term: "Kalayo",
      definition: "Apoy na ginagamit sa pagluluto, pagpapainit, o pag-iilaw.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Kalayo" },
        { id: 2, imageUrl: "/images/amak.jpg" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Laad" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Ningas" },
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      term: "Pala",
      definition:
        "Isang kagamitan na may patag at malapad na ulo na nakakabit sa isang hawakan. Ginagamit upang maghukay ng lupa at alisin ang uling na bao.",
      options: [
        { id: 1, imageUrl: "/images/bareta.jpg" },
        { id: 2, imageUrl: "/placeholder.svg?height=150&width=150&text=Sundang" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Sirni" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Pala" },
      ],
      correctAnswer: 4,
    },
    {
      id: 9,
      term: "Sako",
      definition:
        "Isang malaking bag o lalagyan na kadalasang ginagamit sa pag-iimbak ng mga bagay, tulad ng uling, bigas, o iba pang materyales.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Tambon" },
        { id: 2, imageUrl: "/placeholder.svg?height=150&width=150&text=Sako" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Kulob" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Tambak" },
      ],
      correctAnswer: 2,
    },
    {
      id: 10,
      term: "Uring",
      definition: "Uling, ang nasunog na materyal na kadalasang ginagamit bilang panggatong o pangluto.",
      options: [
        { id: 1, imageUrl: "/placeholder.svg?height=150&width=150&text=Uring" },
        { id: 2, imageUrl: "/images/baga.jpg" },
        { id: 3, imageUrl: "/placeholder.svg?height=150&width=150&text=Gatong" },
        { id: 4, imageUrl: "/placeholder.svg?height=150&width=150&text=Nasusulo" },
      ],
      correctAnswer: 1,
    },
  ]

  // Add floating particles
  useEffect(() => {
    const addParticles = () => {
      const container = document.querySelector(".quiz-container")
      if (!container) return

      for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div")
        particle.className = "floating-coal"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.width = `${10 + Math.random() * 20}px`
        particle.style.height = `${10 + Math.random() * 20}px`
        particle.style.animationDuration = `${20 + Math.random() * 40}s`
        particle.style.animationDelay = `${Math.random() * 10}s`

        container.appendChild(particle)
      }
    }

    addParticles()
  }, [])

  // Confetti effect for high scores
  useEffect(() => {
    if (showResults && score >= questions.length * 0.8) {
      setShowConfetti(true)

      // Create confetti elements
      const container = document.querySelector(".confetti-container")
      if (!container) return

      for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div")
        confetti.className = "confetti"
        confetti.style.left = `${Math.random() * 100}%`
        confetti.style.animationDuration = `${1 + Math.random() * 3}s`
        confetti.style.animationDelay = `${Math.random() * 2}s`

        // Random colors
        const colors = ["#ff4500", "#ff7800", "#ffb700", "#ffffff", "#ffd700"]
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

        container.appendChild(confetti)
      }

      // Remove confetti after animation
      setTimeout(() => {
        setShowConfetti(false)
      }, 5000)
    }
  }, [showResults, score, questions.length])

  const handleAnswerSelect = (answerId: number) => {
    setSelectedAnswer(answerId)
  }

  const handleNext = () => {
    // Check if answer is correct and update score
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResults(false)
    setScore(0)
  }

  const currentQuestionData = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-10 px-4 relative quiz-container">
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-glow mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-orange-500 mb-4 animate-text-glow">Pagsusulit sa Terminolohiya</h2>
          <p className="text-lg mb-4">
            Subukin ang iyong kaalaman tungkol sa mga terminolohiya ng tradisyunal na proseso ng pag-uuling ng bao sa
            San Lorenzo Ruiz, Camarines Norte.
          </p>
          <p className="text-lg mb-4">
            Ang pagsusulit na ito ay binubuo ng {questions.length} na katanungan na susubok sa iyong pag-unawa sa mga
            termino at kahalagahan ng pag-uuling bilang bahagi ng kultura at kabuhayan.
          </p>
          <p className="text-lg">
            Piliin ang tamang larawan para sa bawat termino at i-click ang "Susunod" para magpatuloy. Sa katapusan ng
            pagsusulit, makikita mo ang iyong iskor at pagtatasa ng iyong kaalaman.
          </p>
        </div>
      </div>
      {/* Confetti container */}
      {showConfetti && <div className="confetti-container fixed inset-0 pointer-events-none z-50"></div>}

      {/* Floating coal particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="floating-coal"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animationDuration: `${20 + Math.random() * 40}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        ></div>
      ))}

      <div className="max-w-3xl mx-auto">
        {!showResults ? (
          <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-glow overflow-hidden animate-fade-in">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-medium">
                  Tanong {currentQuestion + 1} sa {questions.length}
                </span>
                <span className="text-orange-500 font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-gray-800"
                indicatorClassName="bg-gradient-to-r from-orange-600 to-orange-500"
              />
              <CardTitle className="text-2xl mt-4 animate-text-glow">{currentQuestionData.term}</CardTitle>
              <CardDescription className="text-white/80 text-lg mt-2">{currentQuestionData.definition}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {currentQuestionData.options.map((option) => (
                  <div
                    key={option.id}
                    className={`quiz-option flex flex-col items-center rounded-lg border border-orange-900/30 p-4 transition-all duration-300 cursor-pointer ${
                      selectedAnswer === option.id ? "selected bg-orange-900/30 border-orange-500" : ""
                    }`}
                    onClick={() => handleAnswerSelect(option.id)}
                  >
                    <div className="relative w-full h-40 mb-2">
                      <Image
                        src={option.imageUrl || "/placeholder.svg"}
                        alt={`Option ${option.id}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="border-orange-500 text-orange-500 hover:bg-orange-950 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Nakaraan
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedAnswer === null}
                className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2 transition-all duration-300"
              >
                {currentQuestion === questions.length - 1 ? "Tapusin" : "Susunod"}
                {currentQuestion === questions.length - 1 ? null : <ArrowRight className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-glow overflow-hidden animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-orange-500 animate-text-glow">
                Resulta ng Pagsusulit
              </CardTitle>
              <CardDescription className="text-center text-white/80 text-lg">
                Nakakuha ka ng {score} sa {questions.length} na puntos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-6">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-orange-500">
                      {Math.round((score / questions.length) * 100)}%
                    </span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-800 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-orange-500 stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / questions.length)}`}
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="text-center space-y-2">
                {score === questions.length && (
                  <div className="flex items-center justify-center gap-2 text-green-500 font-medium">
                    <Trophy className="h-5 w-5" />
                    <p>Perpekto! Napakahusay mo!</p>
                  </div>
                )}
                {score >= questions.length * 0.8 && score < questions.length && (
                  <div className="flex items-center justify-center gap-2 text-green-500 font-medium">
                    <CheckCircle2 className="h-5 w-5" />
                    <p>Napakahusay! Marami kang alam tungkol sa mga terminolohiya ng pag-uuling!</p>
                  </div>
                )}
                {score >= questions.length * 0.6 && score < questions.length * 0.8 && (
                  <div className="flex items-center justify-center gap-2 text-yellow-500 font-medium">
                    <CheckCircle2 className="h-5 w-5" />
                    <p>Magaling! May sapat kang kaalaman tungkol sa mga terminolohiya ng pag-uuling.</p>
                  </div>
                )}
                {score >= questions.length * 0.4 && score < questions.length * 0.6 && (
                  <div className="flex items-center justify-center gap-2 text-yellow-500 font-medium">
                    <CheckCircle2 className="h-5 w-5" />
                    <p>Hindi masama! May kaalaman ka tungkol sa mga terminolohiya ng pag-uuling.</p>
                  </div>
                )}
                {score < questions.length * 0.4 && (
                  <div className="flex items-center justify-center gap-2 text-red-500 font-medium">
                    <XCircle className="h-5 w-5" />
                    <p>Kailangan mo pang pag-aralan ang mga terminolohiya ng pag-uuling.</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={restartQuiz}
                className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Subukan Muli
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-950 flex items-center gap-2 transition-all duration-300"
              >
                <Link href="/terminolohiya">
                  <ArrowLeft className="h-4 w-4" />
                  Bumalik sa Terminolohiya
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  )
}

