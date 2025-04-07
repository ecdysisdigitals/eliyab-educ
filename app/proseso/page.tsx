import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProsesoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Simplified Design */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
        </div>

        <div className="z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500 animate-text-glow">
            Proseso ng Pag-uuling
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Alamin ang masusing proseso ng tradisyunal na pag-uuling ng bao sa San Lorenzo Ruiz
          </p>
        </div>
      </div>

      {/* Process Section with Enhanced Design */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 relative">
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

        <div className="max-w-5xl mx-auto">
          <div className="prose prose-invert prose-orange max-w-none">
            <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border border-orange-900/30 shadow-glow mb-12 animate-fade-in-up">
              <p className="text-lg">
                Tanyag ang bayan ng San Lorenzo Ruiz, Camarines Norte sa pag-uuling ng bao bilang pangunahing
                hanapbuhay. Isa itong masusing proseso na nangangailangan nang maingat na pagsunod sa tamang pamamaraan
                upang makalikha ng mataas na kalidad na uling.
              </p>
            </div>

            <div className="grid gap-8 mt-12">
              {/* Step 1 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-transparent opacity-10 rounded-br-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Pangangalap ng Bao</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Nagsisimula ito sa pangangalap ng mga bao ng niyog na karaniwang nagmumula sa mga natuyong bunga na
                    ginamit na sa iba't ibang layunin, tulad ng paggawa ng langis o pagkopra.
                  </p>
                </div>

                {/* Coal particles */}
                <div
                  className="coal-particle absolute"
                  style={{ left: "80%", top: "30%", animationDelay: "0.5s" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "90%", top: "60%", animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Step 2 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500 to-transparent opacity-10 rounded-bl-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Pagsasalansan sa Lutuan</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Matapos makolekta, ang mga bao, maingat na isinasalansan sa loob ng isang hukay na lupa bilang
                    lutuan. Kinakailangan ang tamang pagsasaayos upang matiyak ang pantay na pagkalantad sa init at
                    maiwasan ang hindi pantay na pagkakasunog.
                  </p>
                </div>

                <div className="coal-particle absolute" style={{ left: "10%", top: "40%", animationDelay: "2s" }}></div>
                <div className="coal-particle absolute" style={{ left: "20%", top: "70%", animationDelay: "1s" }}></div>
              </div>

              {/* Step 3 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500 to-transparent opacity-10 rounded-tr-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Pagpapasiklab ng Apoy</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Kapag handa na, sinisimulan ang pagsusunog sa pamamagitan ng pagpapasiklab ng apoy sa pinakaloob na
                    bahagi ng lutuan ng uling. Kinokontrol ang suplay ng hangin sa pamamagitan ng pagtatakip gamit ang
                    katawan at dahon ng saging bago takpan ito ng lupa. Ginagawa ang pamamaraang ito upang matiyak na
                    walang lagusan ng hangin lalo't upang mapanatili ang tamang temperatura at maiwasan ang labis na
                    pagkasunog.
                  </p>
                </div>
              </div>

              {/* Remaining steps with similar enhancements */}
              {/* Step 4 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500 to-transparent opacity-10 rounded-tl-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Proseso ng Pagkasunog</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Pagkatapos ng naunang proseso, hindi na ito kinakailangan pang bantayan. Sa paglipas ng ilang oras o
                    araw, dahan-dahang nagaganap ang pagkasunog ng bao, kung saan ang bao ay unti- unting nagiging
                    uling.
                  </p>
                </div>

                <div
                  className="coal-particle absolute"
                  style={{ left: "50%", top: "20%", animationDelay: "0.7s" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "70%", top: "50%", animationDelay: "1.7s" }}
                ></div>
              </div>

              {/* Step 5 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-transparent opacity-10 rounded-br-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">5</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Pagpapalamig</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Kapag natapos ang prosesong ito, iniiwan ang mga bao sa loob ng lutuan upang lumamig nang unti-unti.
                    Subalit may alternatibong pamamaraan upang mabilis na lumamig ang uling mula sa lutuan. Ginagawa ang
                    pagbubuhos ng tubig sa mga nilutong uling upang agarang mapatay ang apoy at lumamig.
                  </p>
                </div>

                {/* Steam effect */}
                <div className="absolute top-10 right-10 w-20 h-20 opacity-20">
                  <div className="steam"></div>
                </div>
              </div>

              {/* Step 6 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500 to-transparent opacity-10 rounded-bl-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">6</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Pangangalap at Pagsusuri</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Sa sandaling lumamig na, kinokolekta ang uling at sinusuri upang matiyak ang kalidad nito. Ang
                    pinakamainam na uling ay may pare-parehong itim na kulay.
                  </p>
                </div>

                {/* Coal particles */}
                <div
                  className="coal-particle absolute"
                  style={{ left: "30%", bottom: "10%", width: "8px", height: "8px" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "60%", bottom: "20%", width: "6px", height: "6px" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "80%", bottom: "15%", width: "7px", height: "7px" }}
                ></div>
              </div>

              {/* Step 7 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-500 to-transparent opacity-10 rounded-tr-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">7</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">Kasuotan at Kaligtasan</h3>
                </div>
                <div className="ml-16">
                  <p>
                    Kinakailangan na may kompletong kasuotan ang manggagawa ng uling upang matiyak ang kaligtasan ng
                    katawan. Karaniwang nagsusuot sila ng gwantes upang protektahan ang kanilang mga kamay laban sa
                    labis na init ng apoy. Mahabang damit, sa pag-iwas sa duming didikit sa kanilang mga braso sapagkat
                    mahigpit na ipinagbabawal ang pagbabasa ng katawan pagkatapos ng trabahong ito. Isa pang higit
                    nilang kailangan ang pagsusuot ng mask o takip sa ilong upang masiguro na hindi malalanghap o
                    makapapasok sa loob ng katawan ang mga alikabok mula sa uling.
                  </p>
                </div>
              </div>

              {/* Step 8 */}
              <div
                className="process-step bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-lg p-6 border border-orange-900/30 shadow-glow relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500 to-transparent opacity-10 rounded-tl-full"></div>

                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-glow">
                    <span className="font-bold text-lg">8</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-500 animate-text-glow">
                    Paghahanda para sa Pagbebenta
                  </h3>
                </div>
                <div className="ml-16">
                  <p>
                    Matapos ang masusing pagsusuri, hinahango muna ito sa lutuan ang mga lutong uling na bao at
                    inilalagay sa sako. Pagkatapos nito isinasalansan at inihahanda para sa pagbebenta o paggamit.
                  </p>
                </div>

                {/* Coal particles */}
                <div
                  className="coal-particle absolute"
                  style={{ left: "20%", bottom: "10%", width: "8px", height: "8px" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "50%", bottom: "20%", width: "6px", height: "6px" }}
                ></div>
                <div
                  className="coal-particle absolute"
                  style={{ left: "70%", bottom: "15%", width: "7px", height: "7px" }}
                ></div>
              </div>
            </div>

            {/* Beliefs Section with Enhanced Design */}
            <div
              className="mt-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 p-8 rounded-lg border-l-4 border-orange-500 shadow-glow relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500 to-transparent opacity-5 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500 to-transparent opacity-5 rounded-tr-full"></div>

              <h3 className="text-2xl font-bold text-orange-500 mb-4 animate-text-glow">Mga Paniniwala</h3>
              <p className="mb-4 relative z-10">
                Naniniwala ang mga manggagawa ng uling sa sakit na pasma, dulot ito ng hindi sinasadyang pagkabasa ng
                kanilang katawanan galing sa pagkabilad sa apoy. Sa usaping ito mayroong paniniwala ang mga manggagawa
                na mismong mula sa uling din ang makapagpapagaling sa kanila.
              </p>
              <p className="relative z-10">
                Habang ang uling naman na mismong ginagamit sa pagluluto, ay pinaniniwalaan naman na mainam din gamiting
                panglagay sa poso negro bago isemento upang maiwasan ang pagkalap ng mikrobyo.
              </p>
            </div>

            {/* Next section navigation */}
            <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: "1s" }}>
              <Button
                asChild
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg group transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden"
              >
                <Link href="/terminolohiya">
                  <span className="relative z-10 flex items-center">
                    Tuklasin ang Terminolohiya
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

