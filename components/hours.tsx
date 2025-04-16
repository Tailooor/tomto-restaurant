import { Clock } from "lucide-react"

const hours = [
  { day: "Monday", hours: "11:30 AM - 10:00 PM" },
  { day: "Tuesday", hours: "11:30 AM - 10:00 PM" },
  { day: "Wednesday", hours: "11:30 AM - 10:00 PM" },
  { day: "Thursday", hours: "11:30 AM - 10:00 PM" },
  { day: "Friday", hours: "11:30 AM - 11:00 PM" },
  { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
]

export default function Hours() {
  return (
    <section id="hours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Opening Hours</h2>
            <p className="text-gray-600">
              Join us for lunch, dinner, or a special celebration. We're open 7 days a week.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex items-center justify-center mb-8">
                <Clock className="h-10 w-10 text-red-600 mr-4" />
                <h3 className="text-2xl font-semibold">We're Open</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium">{item.day}</span>
                    <span className="text-gray-600">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">Kitchen closes 30 minutes before closing time</p>
                <p className="mt-4 text-red-600 font-medium">Special hours may apply on holidays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
