import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

// Add this CSS
import "./footer.css"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-900/20 py-10 relative overflow-hidden">
      {/* Decorative fire effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1">
        <div className="fire-base h-full"></div>
      </div>

      {/* Floating coal particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="floating-coal absolute"
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0 group">
            <div className="relative h-8 w-8 mr-2">
              <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <Image
                src="/images/eliyab-logo.png"
                alt="E-LIYAB Logo"
                width={32}
                height={32}
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-xl font-bold text-orange-500 transition-colors duration-300 group-hover:text-orange-400">
              E-LIYAB
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="/" className="nav-link text-white hover:text-orange-400 transition-colors duration-300">
              Pangunahing Pahina
            </Link>
            <Link href="/proseso" className="nav-link text-white hover:text-orange-400 transition-colors duration-300">
              Proseso
            </Link>
            <Link
              href="/terminolohiya"
              className="nav-link text-white hover:text-orange-400 transition-colors duration-300"
            >
              Terminolohiya
            </Link>
            <Link
              href="/pagsusulit"
              className="nav-link text-white hover:text-orange-400 transition-colors duration-300"
            >
              Pagsusulit
            </Link>
          </div>
        </div>

        {/* Researchers and Team Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-500">Mga Mananaliksik</h3>
            <ul className="space-y-1 text-gray-300">
              <li>Roxanne M. Abletes</li>
              <li>Aziel Joy M. Oga</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-500">Tagapayo</h3>
            <div className="flex flex-col items-center md:items-start">
              <div className="relative h-24 w-24 mb-3 rounded-full overflow-hidden border-2 border-orange-500">
                <Image
                  src="/images/tagapayo.jpg"
                  alt="Rose Ann Dela Paz Aler"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-300 font-medium">Rose Ann Dela Paz Aler</p>
              <p className="text-gray-400 text-sm mt-2">Propesor sa Filipino at Eksperto sa Kulturang Pilipino</p>
              <p className="text-gray-400 text-sm mt-1">
                Nag-ambag ng mahahalagang kaalaman at gabay sa pananaliksik tungkol sa proseso ng pag-uuling ng bao at
                ang kahalagahan nito sa kultura ng San Lorenzo Ruiz.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-500">Katuwang na IT Ekspert</h3>
            <ul className="space-y-1 text-gray-300">
              <li>placeholder</li>
              <li>placeholder</li>
              <li>placeholder</li>
            </ul>
          </div>
        </div>

        {/* Social media links */}
        <div className="flex justify-center mt-8 gap-6">
          <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition-colors duration-300">
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-900/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} E-LIYAB. Lahat ng karapatan ay nakalaan.</p>
          <p className="mt-2">
            Isang digital na plataporma na nagtatampok ng wika at kultura sa tradisyunal na proseso ng pag-uuling ng bao
            sa bayan ng San Lorenzo Ruiz, Camarines Norte.
          </p>
        </div>
      </div>
    </footer>
  )
}
