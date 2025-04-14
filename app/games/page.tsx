import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-lg mb-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Mga Laro at Pagsusulit</h1>
          <p className="text-lg mb-4">
            Subukin ang iyong kaalaman tungkol sa mga terminolohiya ng tradisyunal na proseso ng pag-uuling ng bao sa
            San Lorenzo Ruiz, Camarines Norte.
          </p>
          <p className="text-lg">
            Piliin ang isa sa mga laro sa ibaba upang magsimula. Maaari kang pumili ng pagsusulit o word jumble game.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-orange-500">Pagsusulit sa Terminolohiya</CardTitle>
              <CardDescription className="text-white/80">
                Subukin ang iyong kaalaman sa pamamagitan ng pagpili ng tamang larawan para sa bawat termino.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-gray-800 rounded-md flex items-center justify-center">
                <span className="text-orange-500 text-5xl">?</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                <Link href="/games/pagsusulit">Magsimula</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-orange-500">Word Jumble</CardTitle>
              <CardDescription className="text-white/80">
                Ayusin ang mga letra upang mabuo ang tamang salita batay sa ibinigay na kahulugan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-40 bg-gray-800 rounded-md flex items-center justify-center">
                <div className="flex gap-2">
                  {["A", "N", "A", "H", "A", "W"].map((letter, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded-md text-white font-bold"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                <Link href="/games/word-jumble">Magsimula</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-950">
            <Link href="/">Bumalik sa Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
