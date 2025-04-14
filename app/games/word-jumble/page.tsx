"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Trophy, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function WordJumblePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [availableLetters, setAvailableLetters] = useState<{ letter: string; id: number }[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [timer, setTimer] = useState(10)
  const [timerActive, setTimerActive] = useState(true)

  // Word jumble questions
  const questions = [
    {
      id: 1,
      term: "ANAHAW",
      definition: "Uri ng dahon na malapad at matibay. Ginagamit pamalit sa dahon ng saying upang takpan ang uling.",
      distractors: "ANAHAWXYZ",
    },
    {
      id: 2,
      term: "TUBIG",
      definition: "Likidong walang kulay, ginagamit ito upang patayin ang apoy.",
      distractors: "TUBIGKLMN",
    },
    {
      id: 3,
      term: "ALBOK",
      definition: "Maliit na butil ng dumi o lupa na matatagpuan sa hangin o sa ibabaw ng mga bagay.",
      distractors: "ALBOKPQRS",
    },
    {
      id: 4,
      term: "SUNGAW",
      definition:
        "Tumutukoy sa mga gas o usok na lumalabas mula sa isang bagay, lalo na kapag Ito ay kumukulo o nag-iinit.",
      distractors: "SUNGAWBCD",
    },
    {
      id: 5,
      term: "URING",
      definition: "Ang nasunog na materyal na kadalasang ginagamit bilang panggatong o pangluto.",
      distractors: "URINGHJKL",
    },
    {
      id: 6,
      term: "PALA",
      definition:
        "Isang kagamitan na may pantay at malapad na nakakabit sa isang hawakan. Ginagamit upang maghukay ng lupa at alisin ang uling.",
      distractors: "PALAMNOPQ",
    },
    {
      id: 7,
      term: "LABOT",
      definition:
        "Butas o agwat na nabuo sa isang bagay, karaniwang nangyayari dahil sa pagkabasag o kalikasan ng materyal.",
      distractors: "LABOTXYZW",
    },
    {
      id: 8,
      term: "GATONG",
      definition: "Tumutukoy sa mga bagay na ginagamit upang magpatuloy ang apoy.",
      distractors: "GATONGBCD",
    },
    {
      id: 9,
      term: "BARETA",
      definition:
        "Isang kagamitan na gawa sa bakal na may matulis na dulo. Ginagamit para sa paghuhukay ng lupa at alisin ang mga ugat ng halaman.",
      distractors: "BARETMNOP",
    },
    {
      id: 10,
      term: "BAGA",
      definition:
        "Tumutukoy sa mga nasunog na pirado ng kahoy o materyal, karaniwang giangamit sa mga barbecue o pagluluto gamit ang apoy.",
      distractors: "BAGACDEFG",
    },
  ]

  // Shuffle letters for the current question
  useEffect(() => {
    if (showResults) return

    const currentWord = questions[currentQuestion].term
    const distractors = questions[currentQuestion].distractors

    // Combine the correct word and distractors, then shuffle
    const allLetters = (currentWord + distractors).split("")
    const shuffledLetters = shuffleArray([...allLetters]).slice(0, Math.min(15, allLetters.length))

    // Create array of letter objects with unique IDs
    const letterObjects = shuffledLetters.map((letter, index) => ({
      letter,
      id: index,
    }))

    setAvailableLetters(letterObjects)
    setSelectedLetters([])
    setIsCorrect(null)
    setTimer(10)
    setTimerActive(true)
  }, [currentQuestion, showResults])

  // Update the timer countdown effect to automatically proceed to next question
  useEffect(() => {
    if (!timerActive || showResults || isCorrect !== null) return

    const countdown = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown)
          setTimerActive(false)

          // Show "Time's up" briefly before moving to next question
          setIsCorrect(false)

          // Automatically proceed to next question after a short delay
          setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1)
              setTimer(10)
              setTimerActive(true)
              setIsCorrect(null)
            } else {
              setShowResults(true)
            }
          }, 1500)

          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [timerActive, showResults, isCorrect, currentQuestion, questions.length])

  // Helper function to shuffle array
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const handleLetterSelect = (letter: { letter: string; id: number }) => {
    // Add letter to selected letters
    setSelectedLetters([...selectedLetters, letter.letter])

    // Remove letter from available letters
    setAvailableLetters(availableLetters.filter((l) => l.id !== letter.id))
  }

  const handleRemoveLetter = (index: number) => {
    // Get the letter being removed
    const letterToRemove = selectedLetters[index]

    // Create a new ID for this letter when returning to available
    const newId = availableLetters.length > 0 ? Math.max(...availableLetters.map((l) => l.id)) + 1 : 0

    // Remove letter from selected letters
    const newSelectedLetters = [...selectedLetters]
    newSelectedLetters.splice(index, 1)
    setSelectedLetters(newSelectedLetters)

    // Add letter back to available letters
    setAvailableLetters([...availableLetters, { letter: letterToRemove, id: newId }])
  }

  const handleClearSelection = () => {
    // Return all selected letters to available letters
    const returnedLetters = selectedLetters.map((letter, index) => ({
      letter,
      id: availableLetters.length + index,
    }))

    setAvailableLetters([...availableLetters, ...returnedLetters])
    setSelectedLetters([])
  }

  const handleCheckAnswer = () => {
    const currentWord = questions[currentQuestion].term
    const userAnswer = selectedLetters.join("")

    const correct = userAnswer.toUpperCase() === currentWord.toUpperCase()
    setIsCorrect(correct)

    if (correct) {
      // Wait a moment before moving to next question
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1)
          setScore(score + 1)
          setTimer(10)
          setTimerActive(true)
        } else {
          setScore(score + 1)
          setShowResults(true)
        }
        setIsCorrect(null)
      }, 1500)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setTimer(10)
      setTimerActive(true)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setTimer(10)
      setTimerActive(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedLetters([])
    setShowResults(false)
    setScore(0)
    setIsCorrect(null)
    setTimer(10)
    setTimerActive(true)
  }

  const currentQuestionData = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-10 px-4 relative">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-glow mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-orange-500 mb-4 animate-text-glow">Word Jumble</h2>
          <p className="text-lg mb-4">
            Ayusin ang mga letra upang mabuo ang tamang salita batay sa ibinigay na kahulugan.
          </p>
          <p className="text-lg mb-4">
            Ang laro na ito ay binubuo ng {questions.length} na salita na may kaugnayan sa tradisyunal na proseso ng
            pag-uuling.
          </p>
          <p className="text-lg">
            May 10 segundo ka para sa bawat salita. I-click ang mga letra para mabuo ang salita at i-click ang "Suriin"
            para tingnan kung tama.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {!showResults ? (
          <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-glow overflow-hidden animate-fade-in">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-orange-500 font-medium">
                  Tanong {currentQuestion + 1} sa {questions.length}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`font-bold px-3 py-1 rounded-full ${
                      timer > 5 ? "bg-green-600" : timer > 2 ? "bg-yellow-600" : "bg-red-600 animate-pulse"
                    }`}
                  >
                    {timer}s
                  </span>
                  <span className="text-orange-500 font-medium">{Math.round(progress)}%</span>
                </div>
              </div>
              <Progress
                value={progress}
                className="h-2 bg-gray-800"
                indicatorClassName="bg-gradient-to-r from-orange-600 to-orange-500"
              />

              <CardDescription className="text-white/80 text-lg mt-4">{currentQuestionData.definition}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Selected letters display */}
                <div className="flex flex-wrap justify-center gap-2 min-h-16 p-4 border border-orange-900/30 rounded-lg bg-gray-900/50">
                  {selectedLetters.length > 0 ? (
                    selectedLetters.map((letter, index) => (
                      <button
                        key={`selected-${index}`}
                        onClick={() => handleRemoveLetter(index)}
                        className={`w-10 h-10 flex items-center justify-center text-lg font-bold rounded-md transition-all 
                          ${
                            isCorrect === true
                              ? "bg-green-600 text-white"
                              : isCorrect === false
                                ? "bg-red-600 text-white"
                                : "bg-orange-600 hover:bg-orange-700 text-white"
                          }`}
                      >
                        {letter}
                      </button>
                    ))
                  ) : (
                    <div className="text-gray-500 italic flex items-center justify-center h-10">
                      Piliin ang mga letra para mabuo ang salita...
                    </div>
                  )}
                </div>

                {/* Available letters */}
                <div className="flex flex-wrap justify-center gap-2">
                  {availableLetters.map((letter) => (
                    <button
                      key={`available-${letter.id}`}
                      onClick={() => handleLetterSelect(letter)}
                      disabled={isCorrect !== null}
                      className="w-10 h-10 flex items-center justify-center text-lg font-bold bg-gray-800 hover:bg-gray-700 rounded-md transition-all"
                    >
                      {letter.letter}
                    </button>
                  ))}
                </div>

                {/* Update the feedback message for when time runs out */}
                {isCorrect === true && (
                  <div className="text-center text-green-500 font-bold animate-fade-in">Tama! 👏</div>
                )}
                {isCorrect === false && (
                  <div className="text-center text-red-500 font-bold animate-fade-in">
                    {timer === 0 ? "Naubos ang oras! Lilipat sa susunod na tanong..." : "Hindi tama. Subukan muli!"}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={handleClearSelection}
                    disabled={selectedLetters.length === 0 || isCorrect !== null}
                    className="border-orange-500 text-orange-500 hover:bg-orange-950 flex items-center gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    I-clear
                  </Button>
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={selectedLetters.length === 0 || isCorrect !== null}
                    className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                  >
                    Suriin
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleNext}
                    disabled={isCorrect === true}
                    className="text-orange-500 hover:bg-orange-950/50 flex items-center gap-2"
                  >
                    Laktawan
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
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
                Resulta ng Word Jumble
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
                <Link href="/games">
                  <ArrowLeft className="h-4 w-4" />
                  Bumalik sa Mga Laro
                </Link>
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  )
}
