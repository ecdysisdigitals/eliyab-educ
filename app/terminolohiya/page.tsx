"use client"

import { useState, useEffect } from "react"
import { Play, Search, Volume2, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export default function TerminolohiyaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeAudio, setActiveAudio] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const termsPerPage = 8

  // Complete terminology data with 60 terms
  const terms = [
    {
      id: 1,
      term: "Albok",
      definition: "Alikabok o maliliit na butil ng dumi o lupa na matatagpuan sa hangin o sa ibabaw ng mga bagay.",
      audioUrl: "/audio/ALBOK.ogg",
      type: "pangngalan",
      imageUrl: "/images/albok.jpg",
    },
    {
      id: 2,
      term: "Amak",
      definition: "Apoy o apoy na may matinding init at mabilis kumalat.",
      audioUrl: "/audio/AMAK.ogg",
      type: "pangngalan",
      imageUrl: "/images/amak.jpg",
    },
    {
      id: 3,
      term: "Anahaw",
      definition:
        "Isang uri ng dahon na malapad at matibay. Ginagamit pamalit sa dahon ng saging upang takpan ang uling upang hindi masunog ng lubusan.",
      audioUrl: "/audio/ANAHAW.ogg",
      type: "pangngalan",
      imageUrl: "/images/anahaw.jpg",
    },
    {
      id: 4,
      term: "Asó",
      definition: "Usok na mula sa apoy, kadalasang nagmumula sa pagkasunog ng mga bagay.",
      audioUrl: "/audio/ASÓ.ogg",
      type: "pangngalan",
      imageUrl: "/images/aso.jpg",
    },
    {
      id: 5,
      term: "Baga",
      definition:
        "Tumutukoy sa mga nasunog na piraso ng kahoy o materyal, karaniwang ginagamit sa mga barbecue o pagluluto gamit ang apoy.",
      audioUrl: "/audio/BAGA.ogg",
      type: "pangngalan",
      imageUrl: "/images/baga.jpg",
    },
    {
      id: 6,
      term: "Bal'on",
      definition: "Malaking butas o agwat sa isang bagay na maaaring likhain nang dahil sa pagkasira o kalikasan.",
      audioUrl: "/audio/BAL_ON.ogg",
      type: "pangngalan",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Bal'on",
    },
    {
      id: 7,
      term: "Barani",
      definition: "Bahagi ng halaman ng saging ginagamit bilang pantakip upang makontrol ang init.",
      audioUrl: "/audio/BARANI.ogg",
      type: "pangngalan",
      imageUrl: "/images/barani.jpg",
    },
    {
      id: 8,
      term: "Bareta",
      definition:
        "Isang kagamitan na gawa sa bakal na may matulis na dulo. Karaniwang ginagami upang maghukay ng lupa at alisin ang mga ugat ng halaman.",
      audioUrl: "/audio/BARETA.ogg",
      type: "pangngalan",
      imageUrl: "/images/bareta.jpg",
    },
    {
      id: 9,
      term: "Baul",
      definition:
        'Tumutukoy sa balat o shell ng niyog. Karaniwan, ang balat ng niyog na ito, na tinatawag na "buko shell" o "bao," ay ginagamit upang gumawa ng uling.',
      audioUrl: "/audio/BAUL.ogg",
      type: "pangngalan",
      imageUrl: "/images/baul.jpg",
    },
    {
      id: 10,
      term: "Dangdang",
      definition:
        "Isang kondisyon kung saan ang bagay o tao ay babad o malapit sa harap ng apoy, karaniwang ginagamit upang ilarawan ang pagsasagwan ng mga gamit sa apoy.",
      audioUrl: "/audio/DANGDANG.ogg",
      type: "pangngalan",
      imageUrl: "/images/dangdang.jpg",
    },
    {
      id: 11,
      term: "Dangkal",
      definition:
        "Isang sukat ng haba, karaniwang ginagamit upang ilarawan ang haba ng kamay mula sa dulo ng mga daliri hanggang sa pulso.",
      audioUrl: "/audio/DANGKAL.ogg",
      type: "pangngalan",
      imageUrl: "/placeholder.svg?height=200&width=300&text=Dangkal",
    },
    {
      id: 12,
      term: "Daga",
      definition:
        "Ipinapatong sa ibabaw ng bao upang mabawasan ang dami ng hangin na pumapasok at maiwasan ang tuluyang pagkasunog.",
      audioUrl: "/audio/DAGA.ogg",
      type: "pangngalan",
      imageUrl: "/images/daga.jpg",
    },
    {
      id: 13,
      term: "Gatong",
      definition:
        "Tumutukoy sa mga bagay na ginagamit upang magpatuloy ang apoy, tulad ng kahoy, panggatong, o iba pang mga materyales na nasusunog.",
      audioUrl: "/audio/GATONG.ogg",
      type: "pangngalan",
      imageUrl: "/images/gatong.jpg",
    },
    {
      id: 14,
      term: "Gulpi",
      definition:
        "Tumutukoy sa isang bagay na maraming bilang o dami, maaaring gamitin upang ilarawan ang sitwasyon kung saan ang isang bagay ay nagiging sobra o labis.",
      audioUrl: "/audio/GULPI.ogg",
      type: "pangngalan",
      imageUrl: "/images/gulpi.jpg",
    },
    {
      id: 15,
      term: "Gwantes",
      definition:
        "Isang pantakip para sa kamay, karaniwang gawa sa tela o katad, na may hiwalay na daliri para sa bawat daliri.",
      audioUrl: "/audio/GWANTES.ogg",
      type: "pangngalan",
      imageUrl: "/images/gwantes.jpg",
    },
    {
      id: 16,
      term: "Hakat",
      definition:
        "Pagkuha o paghango ng bagay mula sa isang lugar, karaniwan ay ginagamit sa kontekstong paghango ng prutas o gamit.",
      audioUrl: "/audio/HAKAT.ogg",
      type: "pandiwa",
      imageUrl: "/images/hakat.jpg",
    },
    {
      id: 17,
      term: "Hakbon",
      definition: "Pagkukuha ng uling muna sa lutuan.",
      audioUrl: "/audio/HAKBON.ogg",
      type: "pandiwa",
      imageUrl: "/images/hakbon.jpg",
    },
    {
      id: 18,
      term: "Hali",
      definition: "Pag-aalis o pagtanggal ng isang bagay mula sa isang lugar o sitwasyon.",
      audioUrl: "/audio/HALI.ogg",
      type: "pandiwa",
      imageUrl: "/images/hali.jpg",
    },
    {
      id: 19,
      term: "Haloy",
      definition: "Tumutukoy sa isang bagay o pangyayari na nagtagal o inabot ng maraming oras.",
      audioUrl: "/audio/HALOY.ogg",
      type: "pangngalan",
      imageUrl: "/images/haloy.jpg",
    },
    {
      id: 20,
      term: "Hulog",
      definition: "Tumutukoy sa aksyon ng pagbagsak o paghuhulog ng isang bagay mula sa isang taas o pinagmulan.",
      audioUrl: "/audio/HULOG.ogg",
      type: "pandiwa",
      imageUrl: "/images/hulog.jpg"
    },
    {
      id: 21,
      term: "Kaag",
      definition: "Paglalagay o pagsingit ng isang bagay sa isang lugar o sitwasyon.",
      audioUrl: "/audio/KAAG.ogg",
      type: "pandiwa",
      imageUrl: "/images/kaag.jpg"
    },
    {
      id: 22,
      term: "Kalayo",
      definition: "Apoy na ginagamit sa pagluluto, pagpapainit, o pag-iilaw.",
      audioUrl: "/audio/KALAYO.ogg",
      type: "pangngalan",
      imageUrl: "/images/kalayo.jpg"
    },
    {
      id: 23,
      term: "Kalot",
      definition: "Butas o kaluwagan na nahuhukay sa lupa o isang bagay.",
      audioUrl: "/audio/KALOT.ogg",
      type: "pangngalan",
      imageUrl: "/images/kalot.jpg"
    },
    {
      id: 24,
      term: "Katsa",
      definition: "Tumutukoy sa isang kapirasong tela na ginagamit upang magsindi ng apoy.",
      audioUrl: "/audio/KATSA.ogg",
      type: "pangngalan",
      imageUrl: "/images/katsa.jpg"
    },
    {
      id: 25,
      term: "Kubeta",
      definition: "Tumutukoy sa isang lugar na ginagamit para sa pangangailangang pangkalinisan tulad ng pag-ihi, pagdumi o paghugas. Lugar na karaniwang ginagamitan ng uling sa paggagawa.",
      audioUrl: "/audio/KUBETA.ogg",
      type: "pangngalan",
      imageUrl: "/images/kubeta.jpg"
    },
    {
      id: 26,
      term: "Kulob",
      definition: "Isang lugar o sulok na parang tinatago o walang hangin, madalas ay ginagamit upang ilarawan ang isang nakapaloob na lugar.",
      audioUrl: "/audio/KULOB.ogg",
      type: "pangngalan",
      imageUrl: "/images/kulob.jpg"
    },
    {
      id: 27,
      term: "Laad",
      definition: "Ang pagsikò o sindi ng apoy, karaniwan itong ginagamit upang ipahiwatig na nagsimula na ang apoy o nagkaroon ng maliit na alitaptap mula sa isang pinagmulan ng apoy.",
      audioUrl: "/audio/LAAD.ogg",
      type: "pangngalan",
      imageUrl: "/images/laad.jpg"
    },
    {
      id: 28,
      term: "Lab'as",
      definition: "Tumutukoy sa isang bagay na hindi pa tuyo o basa.",
      audioUrl: "/audio/LABAS.ogg",
      type: "pangngalan",
      imageUrl: "/images/lab'as.jpg"
    },
    {
      id: 29,
      term: "Labot",
      definition: "Isang butas o agwat na nabuo sa isang bagay, karaniwang nangyayari dahil sa pagkabasag o kalikasan ng materyal.",
      audioUrl: "/audio/LABOT.ogg",
      type: "pangngalan",
      imageUrl: "/images/labot.jpg"
    },
    {
      id: 30,
      term: "Latag",
      definition: "Paglalatag o pagpapalawak ng mga bagay sa isang patag na ibabaw, karaniwang ginagamit upang ilarawan ang paghahanda ng lugar tulad ng sa picnic o ibang aktibidad.",
      audioUrl: "/audio/LATAG.ogg",
      type: "pandiwa",
      imageUrl: "/images/latag.jpg"
    },
    {
    id: 31,
    term: "Lutó",
    definition: "Pagluluto o paghahanda ng uling na bao gamit ang apoy o init.",
    audioUrl: "/audio/LUTO.ogg",
    type: "pandiwa",
    imageUrl: "/images/lutó.jpg"
  },
  {
    id: 32,
    term: "Makusog",
    definition: "Malakas o matindi ang lakas, maaaring gamitin upang ilarawan ang isang tunog, hangin, o kahit tao na malakas.",
    audioUrl: "/audio/MAKUSOG.ogg",
    type: "pang-uri",
    imageUrl: "/images/makusog.jpg"
  },
  {
    id: 33,
    term: "Nasusulo",
    definition: "Tumutukoy sa isang bagay na nauurong o nasusunog, karaniwang ginagamit kapag may apoy.",
    audioUrl: "/audio/NASUSULO.ogg",
    type: "pangngalan",
    imageUrl: "/images/nasusulo.jpg"
  },
  {
    id: 34,
    term: "Ningas",
    definition: "Ang paglakas ng apoy, karaniwan itong ginagamit upang ilarawan ang mabilis na paglaki ng apoy mula sa isang pinagmulan.",
    audioUrl: "/audio/NINGAS.ogg",
    type: "pangngalan",
    imageUrl: "/images/ningas.jpg"
  },
  {
    id: 35,
    term: "Pabakal",
    definition: "Tumutukoy sa isang tao o bagay na nagbibili ng mga bagay, madalas sa pangangalakal o pamilihan.",
    audioUrl: "/audio/PABAKAL.aac",
    type: "pangngalan",
    imageUrl: "/images/pabakal.png"
  },
  {
    id: 36,
    term: "Pag-ipon",
    definition: "Pagsama sama ng bao bago ihulog sa butas para ulingin.",
    audioUrl: "/audio/PAG-IPON.aac",
    type: "pandiwa",
    imageUrl: "/images/pagipon.jpg"
  },
  {
    id: 37,
    term: "Pala",
    definition: "Isang kagamitan na may patag at malapad na ulo na nakakabit sa isang hawakan. Ginagamit upang maghukay ng lupa at alisin ang uling na bao.",
    audioUrl: "/audio/PALA.aac",
    type: "pangngalan",
    imageUrl: "/images/pala.jpg"
  },
  {
    id: 38,
    term: "Palapa",
    definition: "Tumutukoy sa kahoy na mula sa puno ng niyog, karaniwan ginagamit sa paggawa ng bubong o iba pang gamit.",
    audioUrl: "/audio/PALAPA.aac",
    type: "pangngalan",
    imageUrl: "/images/palapa.jpg"
  },
  {
    id: 39,
    term: "Panuon",
    definition: "Tumutukoy sa akto ng pagpapuno o pagtanggap ng laman sa isang bagay na walang laman.",
    audioUrl: "/audio/PANUON.aac",
    type: "pangngalan",
    imageUrl: "/images/panuon.jpg"
  },
  {
    id: 40,
    term: "Pasma",
    definition: "Isang uri ng sakit o kondisyon na nararamdaman kapag ikaw ay naliligo o nababasa pagkatapos magbabad sa init, isang uri ng pagkapagod sa katawan.",
    audioUrl: "/audio/PASMA.aac",
    type: "pangngalan",
    imageUrl: "/images/pasma.jpg"
  },
  {
    id: 41,
    term: "Petrolyo",
    definition: "Tumutukoy sa likido o gas na ginagamit bilang panggatong, pampatibay ng makina, o iba pang gamit.",
    audioUrl: "/audio/Petrolyo.aac",
    type: "pangngalan",
    imageUrl: "/images/petrolyo.jpg"
  },
  {
    id: 42,
    term: "Pinamakutan",
    definition: "Tumutukoy sa aksyon ng pagsindi ng apoy mula sa isang pinagmulan.",
    audioUrl: "/audio/PINAMAKUTAN.aac",
    type: "pandiwa",
    imageUrl: "/images/pinamakutan.jpg"
  },
  {
    id: 43,
    term: "Pugon",
    definition: "Tumutukoy sa isang gamit na ginagamit sa pagluluto, karaniwang may mga apuyan o init na ginagamit upang magluto ng pagkain.",
    audioUrl: "/audio/PUGON.aac",
    type: "pangngalan",
    imageUrl: "/images/pugon.jpg"
  },
  {
    id: 44,
    term: "Sako",
    definition: "Isang malaking bag o lalagyan na kadalasang ginagamit sa pag-iimbak ng mga bagay, tulad ng uling, bigas, o iba pang materyales.",
    audioUrl: "/audio/SAKO.aac",
    type: "pangngalan",
    imageUrl: "/images/sako.jpg"
  },
  {
    id: 45,
    term: "Salang",
    definition: "Paglalagay ng mga bao sa isang lugar o posisyon, kadalasang may kinalaman sa pag-aayos o pagsasaayos ng gamit.",
    audioUrl: "/audio/SALANG.aac",
    type: "pandiwa",
    imageUrl: "/images/salang.jpg"
  },
  {
    id: 46,
    term: "Salansan",
    definition: "Ang pag-aayos o pagpapatong-patong ng mga bagay, karaniwan upang madaling maipon o maorganisa.",
    audioUrl: "/audio/SALANSAN.aac",
    type: "pangngalan",
    imageUrl: "/images/salansan.jpg"
  },
  {
    id: 47,
    term: "Sirni",
    definition: "Tumutukoy sa isang kagamitan na ginagamit upang salain ang bao o uling.",
    audioUrl: "/audio/SIRNI.aac",
    type: "pangngalan",
    imageUrl: "/images/sirni.jpg"
  },
  {
    id: 48,
    term: "Sulwak",
    definition: "Pag-aapaw o paglabas ng likido mula sa isang lalagyan, karaniwang ginagamit upang ilarawan ang mga bagay na labis-labis.",
    audioUrl: "/audio/SULWAK.aac",
    type: "pangngalan",
    imageUrl: "/images/sulwak.jpg"
  },
  {
    id: 49,
    term: "Sundang",
    definition: "Isang uri ng matalim na panggupit na ginagamit sa mga gawain tulad ng pagputol ng kahoy o iba pang materyales.",
    audioUrl: "/audio/SUNDANG.aac",
    type: "pangngalan",
    imageUrl: "/images/sundang.jpg"
  },
  {
    id: 50,
    term: "Sungaw",
    definition: "Tumutukoy sa mga gas o usok na lumalabas mula sa isang bagay, lalo na kapag ito ay kumukulo o nag-iinit.",
    audioUrl: "/audio/SUNGAW.aac",
    type: "pangngalan",
    imageUrl: "/images/sungaw.jpg"
  },
  {
    id: 51,
    term: "Switer",
    definition: "Isang damit na pang-itaas na karaniwang gawa sa lana o sintetikong materyal, na may mahabang manggas at kadalasang may kwelyo.",
    audioUrl: "/audio/SWITER.aac",
    type: "pangngalan",
    imageUrl: "/images/switer.jpg"
  },
  {
    id: 52,
    term: "Taklob",
    definition: "Ang bagay na ginagamit upang takpan ang isang lalagyan o bagay, maaari ring gamitin bilang pandiwa para sa aksyon ng pagtanggal/paglalagay ng takip.",
    audioUrl: "/audio/TAKLOB.aac",
    type: "pangngalan",
    imageUrl: "/images/taklob.jpg"
  },
  {
    id: 53,
    term: "Tambak",
    definition: "Isang kondisyon o kalagayan kung saan ang maraming bagay ay tinipon o inipon sa isang lugar, maaaring gamitin upang ilarawan ang masalimuot na kalat.",
    audioUrl: "/audio/TAMBAK.aac",
    type: "pangngalan",
    imageUrl: "/images/tambak.jpg"
  },
  {
    id: 54,
    term: "Tambon",
    definition: "Isang uri ng lalagyan o imbakan, kadalasang ginagamit sa pag-iimbak ng mga bagay sa komunidad.",
    audioUrl: "/audio/TAMBON.aac",
    type: "pangngalan",
    imageUrl: "/images/tambon.jpg"
  },
  {
    id: 55,
    term: "Tingi-tingi",
    definition: "Pagbili o pagbebenta ng uling na bao na unti-unti o sa maliliit na bahagi, tulad ng mga produkto na binibili ng paisa-isa.",
    audioUrl: "/audio/TINGI-TINGI.aac",
    type: "pangngalan",
    imageUrl: "/images/tingitingi.jpg"
  },
  {
    id: 56,
    term: "Tinukduan",
    definition: "Tumutukoy sa aksyon ng pagtuturo o pagpapaliwanag ng kaalaman o kasanayan sa ibang tao.",
    audioUrl: "/audio/TINUKDUAN.aac",
    type: "pangngalan",
    imageUrl: "/images/tinukduan.jpg"
  },
  {
    id: 57,
    term: "Tubig",
    definition: "Likidong walang kulay, ginagamit ito upang patayin ang apoy.",
    audioUrl: "/audio/TUBIG.aac",
    type: "pangngalan",
    imageUrl: "/images/tubig.jpg"
  },
  {
    id: 58,
    term: "Uring",
    definition: "Uling, ang nasunog na materyal na kadalasang ginagamit bilang panggatong o pangluto.",
    audioUrl: "/audio/URING.aac",
    type: "pangngalan",
    imageUrl: "/images/uring.jpg"
  },
  {
    id: 59,
    term: "Uran",
    definition: "Ulan o mga patak ng tubig mula sa kalangitan na dulot ng pag-ulan.",
    audioUrl: "/audio/URAN.aac",
    type: "pangngalan",
    imageUrl: "/images/uran.jpg"
  },
  {
    id: 60,
    term: "Utay-utay",
    definition: "Unti-unti o dahan-dahan na proseso ng paggawa ng isang bagay, maaaring gamitin upang ilarawan ang sunod-sunod na aksyon o paghahati-hati ng gawain.",
    audioUrl: "/audio/UTAY-UTAY.aac",
    type: "pang-abay",
    imageUrl: "/images/utay-utay.jpg"
  },

  ]

  // Filter terms based on search
  const filteredTerms = terms.filter(
    (term) =>
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const indexOfLastTerm = currentPage * termsPerPage
  const indexOfFirstTerm = indexOfLastTerm - termsPerPage
  const currentTerms = filteredTerms.slice(indexOfFirstTerm, indexOfLastTerm)
  const totalPages = Math.ceil(filteredTerms.length / termsPerPage)

  // Add a function to handle page changes
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to play audio
  const playAudio = (id: number, audioUrl: string) => {
    // Stop any currently playing audio
    if (activeAudio !== null) {
      const currentAudio = document.getElementById(`audio-${activeAudio}`) as HTMLAudioElement
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }
    }

    // Play the selected audio
    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement
    if (audio) {
      setActiveAudio(id)

      audio.play().catch((error) => {
        console.error("Error playing audio:", error)
        setActiveAudio(null)
      })

      // Reset active audio when playback ends
      audio.onended = () => {
        setActiveAudio(null)
      }
    }
  }

  // Add floating particles
  useEffect(() => {
    const addParticles = () => {
      const container = document.querySelector(".term-container")
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

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Simplified Design */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        </div>

        <div className="z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500 animate-text-glow">Terminolohiya</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Alamin ang mga natatanging termino sa proseso ng pag-uuling ng bao
          </p>
        </div>
      </div>

      {/* Search Section with Enhanced Design */}
      <section className="py-10 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-orange-500" />
            </div>
            <Input
              type="text"
              placeholder="Maghanap ng termino..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gradient-to-r from-gray-900 to-black border-orange-900/30 focus:border-orange-500 focus:ring-orange-500 pl-10 pr-4 py-6 text-lg w-full shadow-glow"
            />
          </div>
        </div>
      </section>

      {/* Terms Section with Enhanced Design */}
      <section className="py-10 px-4 bg-gradient-to-b from-gray-900 to-black relative term-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTerms.map((term, index) => (
              <Card
                key={term.id}
                className={`term-card bg-gradient-to-r from-gray-900 to-black border-orange-900/30 shadow-glow overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-2 relative">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-transparent opacity-10 rounded-br-full"></div>

                  <CardTitle className="text-2xl text-orange-500 flex justify-between items-center">
                    {term.term}
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`text-orange-500 hover:text-orange-400 hover:bg-orange-950 relative ${activeAudio === term.id ? "animate-pulse" : ""}`}
                      onClick={() => playAudio(term.id, term.audioUrl)}
                    >
                      {activeAudio === term.id ? <Volume2 className="h-5 w-5" /> : <Play className="h-5 w-5" />}

                      {/* Sound wave animation */}
                      {activeAudio === term.id && (
                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                          <div className="flex items-center gap-0.5">
                            <div
                              className="w-0.5 h-2 bg-orange-500 animate-sound-wave"
                              style={{ animationDelay: "0s" }}
                            ></div>
                            <div
                              className="w-0.5 h-3 bg-orange-500 animate-sound-wave"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                              className="w-0.5 h-4 bg-orange-500 animate-sound-wave"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-0.5 h-2 bg-orange-500 animate-sound-wave"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </Button>
                  </CardTitle>
                  <div className="text-sm text-orange-400/70 italic">{term.type}</div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Image
                      src={term.imageUrl || "/placeholder.svg"}
                      alt={term.term}
                      width={300}
                      height={200}
                      className="rounded-md w-full object-cover"
                    />
                  </div>
                  <CardDescription className="text-white/80 text-base">{term.definition}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-10 animate-fade-in">
              <p className="text-gray-400 text-lg">Walang nahanap na termino. Subukang maghanap ng ibang salita.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredTerms.length > termsPerPage && (
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="border-orange-500 text-orange-500 hover:bg-orange-950"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show a window of 5 pages around the current page
                  let pageNum
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      onClick={() => paginate(pageNum)}
                      className={
                        currentPage === pageNum
                          ? "bg-orange-600 hover:bg-orange-700"
                          : "border-orange-500 text-orange-500 hover:bg-orange-950"
                      }
                    >
                      {pageNum}
                    </Button>
                  )
                })}

                <Button
                  variant="outline"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="border-orange-500 text-orange-500 hover:bg-orange-950"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Next section navigation */}
          <div className="mt-16 flex justify-center animate-fade-in-up">
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
      </section>
      {terms.map((term) => (
        <audio key={`audio-${term.id}`} id={`audio-${term.id}`} src={term.audioUrl} preload="none" />
      ))}
    </main>
  )
}

