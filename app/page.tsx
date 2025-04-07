import Link from "next/link"
import { Flame, ArrowRight, Book, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Simplified Design */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Simple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>

          {/* Coal particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="coal-particle"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 20}%`,
                width: `${5 + Math.random() * 10}px`,
                height: `${5 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <div className="absolute inset-0 rounded-full bg-orange-600 animate-pulse"></div>
              <Image src="/images/eliyab-logo.png" alt="E-LIYAB Logo" fill className="rounded-full object-cover p-2" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-500 animate-text-glow">E-L I Y A B</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Isang digital na plataporma na nagtatampok ng wika at kultura sa tradisyunal na proseso ng pag-uuling ng bao
            sa bayan ng San Lorenzo Ruiz, Camarines Norte.
          </p>
          <div
            className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-5px]"
            >
              <Link href="/proseso">
                <Flame className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Alamin ang Proseso
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-950 px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-5px]"
            >
              <Link href="/terminolohiya">
                Tuklasin ang Terminolohiya
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>

      {/* About Section with Enhanced Design */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

        {/* Floating coal particles */}
        {Array.from({ length: 10 }).map((_, i) => (
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

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="h-0.5 bg-orange-700 w-16 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 animate-text-glow">Tungkol sa E-LIYAB</h2>
            <div className="h-0.5 bg-orange-700 w-16 ml-4"></div>
          </div>

          <div className="prose prose-invert prose-orange max-w-none">
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-glow relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-transparent opacity-20 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500 to-transparent opacity-20 rounded-tl-full"></div>

              <p className="text-lg mb-6 animate-fade-in-up">
                Nilalayon nitong itampok ang mga natatanging termino, at paraan ng komunikasyon na ginagamit ng mga
                manggagawa sa industriya ng pag-uuling ng bao, na nagsisilbing salamin ng kanilang kasanayan, pamumuhay,
                at pagkakakilanlan bilang bahagi ng pamayanang ito.
              </p>
              <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Sa pamamagitan ng E-LIYAB, nabibigyang-pansin ang mahahalagang terminolohiyang ginagamit ng mga
                manggagawa, gayundin ang mga kaugnay na paniniwala, kasanayan, at paraan ng pagpapasa ng kaalaman mula
                sa isang henerasyon patungo sa susunod.
              </p>
              <p className="text-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Isa itong mahalagang instrumento tungo sa mas malalim na pag-unawa at pagpapanatili ng tradisyon ng
                pag-uuling ng bao isang yaman ng kultura na patuloy na nag-aalab sa puso ng mga mamamayan ng San Lorenzo
                Ruiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Proseso Card */}
            <Card className="feature-card bg-gradient-to-br from-gray-900 to-black border-orange-900/30 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-16 h-16 rounded-full bg-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Proseso</h3>
                <p className="text-white/80 mb-6">
                  Alamin ang masusing hakbang sa tradisyunal na pag-uuling ng bao sa San Lorenzo Ruiz, mula sa
                  pangangalap hanggang sa paghahanda para sa pagbebenta.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-orange-500 p-0 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <Link href="/proseso" className="flex items-center">
                    Tuklasin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Terminolohiya Card */}
            <Card className="feature-card bg-gradient-to-br from-gray-900 to-black border-orange-900/30 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-16 h-16 rounded-full bg-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Book className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Terminolohiya</h3>
                <p className="text-white/80 mb-6">
                  Tuklasin ang mga natatanging salita at termino na ginagamit sa industriya ng pag-uuling, na may
                  kasamang tunog para sa tamang pagbigkas.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-orange-500 p-0 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <Link href="/terminolohiya" className="flex items-center">
                    Tuklasin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pagsusulit Card */}
            <Card className="feature-card bg-gradient-to-br from-gray-900 to-black border-orange-900/30 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="w-16 h-16 rounded-full bg-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileQuestion className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-4">Pagsusulit</h3>
                <p className="text-white/80 mb-6">
                  Subukan ang iyong kaalaman sa pamamagitan ng 26 na katanungan tungkol sa proseso at kultura ng
                  pag-uuling ng bao.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="text-orange-500 p-0 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <Link href="/pagsusulit" className="flex items-center">
                    Tuklasin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Importance Section with Enhanced Design */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Coal illustration background */}
        <div className="absolute inset-0 opacity-10">
          <div className="coal-bg"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500 text-center animate-text-glow">
            Kahalagahan ng Pag-uuling
          </h2>

          <div className="prose prose-invert prose-orange max-w-none">
            <div className="relative">
              {/* Decorative quote marks */}
              <div className="absolute -top-10 -left-10 text-8xl text-orange-700/20">"</div>
              <div className="absolute -bottom-10 -right-10 text-8xl text-orange-700/20">"</div>

              <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-glow">
                <p className="text-lg mb-6 animate-fade-in-up">
                  Sa San Lorenzo Ruiz, Camarines Norte, ang pag-uuling ng bao ay isang mahalagang hanapbuhay na
                  nagbibigay kabuhayan sa maraming pamilya. Ang industriya ng paggawa ng uling mula sa bao ay hindi
                  lamang isang pinagkukunan ng kita kundi isang simbolo ng sipag at kasanayan ng mga tao sa bayan.
                </p>
                <p className="text-lg mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Isinasagawa ito bilang isang tradisyon na ipinapasa mula sa isang henerasyon patungo sa susunod. Ang
                  industriyang ito ay may malaking papel sa pagpapanatili ng kultura at pagkakakilanlan ng mga
                  residente, kaya't patuloy itong sumusuporta sa ekonomiya ng bayan at nagsisilbing daan para mapanatili
                  ang kanilang kasaysayan at tradisyon.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden"
              >
                <Link href="/pagsusulit">
                  <span className="relative z-10 flex items-center">
                    Subukan ang Pagsusulit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

