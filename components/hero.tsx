import Link from "next/link"
import Navbar from "./navbar"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Navbar />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/italian-cuisine.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Experience Authentic Italian Cuisine
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Handcrafted dishes made with fresh, locally-sourced ingredients. A culinary journey through the heart of
            Italy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#menu"
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md text-center transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="#reservation"
              className="bg-white hover:bg-gray-100 text-gray-900 font-medium px-6 py-3 rounded-md text-center transition-colors"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
