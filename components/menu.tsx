"use client"

import { useState } from "react"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

// Menu data
const menuCategories = [
  {
    name: "Starters",
    items: [
      {
        name: "Bruschetta",
        description: "Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes",
        price: "$8.95",
        image: "/menu/Bruschetta.jpg",
      },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil",
        price: "$10.95",
        image: "/menu/caprese-salad.jpg",
      },
      {
        name: "Arancini",
        description: "Stuffed rice balls coated with bread crumbs and fried",
        price: "$9.95",
        image: "/menu/arancini.jpg",  // Updated from placeholder to actual image
      },
    ],
  },
  {
    name: "Pasta",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Spaghetti with eggs, cheese, pancetta, and black pepper",
        price: "$16.95",
        image: "/menu/spaghetti-carbonara.jpg",
      },
      {
        name: "Fettuccine Alfredo",
        description: "Fettuccine tossed with butter and parmesan cheese",
        price: "$15.95",
        image: "/menu/fettuccine-alfredo.jpg",
      },
      {
        name: "Lasagna",
        description: "Layers of flat pasta with sauce, cheese, and ragù",
        price: "$18.95",
        image: "/menu/lasagna.jpg?height=200&width=300",
      },
    ],
  },
  {
    name: "Main Courses",
    items: [
      {
        name: "Osso Buco",
        description: "Veal shanks braised with vegetables, white wine, and broth",
        price: "$28.95",
        image: "/menu/osso-buco.jpg?height=200&width=300",
      },
      {
        name: "Chicken Parmigiana",
        description: "Breaded chicken breast with tomato sauce and mozzarella",
        price: "$22.95",
        image: "/menu/chicken-parmigiana.jpg?height=200&width=300",
      },
      {
        name: "Grilled Salmon",
        description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
        price: "$24.95",
        image: "/menu/grilled-salmon.jpg?height=200&width=300",
      },
    ],
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert made of ladyfingers dipped in coffee",
        price: "$8.95",
        image: "/menu/tiramisu.jpg?height=200&width=300",
      },
      {
        name: "Panna Cotta",
        description: "Italian dessert of sweetened cream thickened with gelatin",
        price: "$7.95",
        image: "/menu/panna-cotta.jpg?height=200&width=300",
      },
      {
        name: "Cannoli",
        description: "Tube-shaped shells of fried pastry dough filled with a sweet, creamy filling",
        price: "$6.95",
        image: "/menu/cannoli.jpg?height=200&width=300",
      },
    ],
  },
]

export default function Menu() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring authentic Italian recipes made with the freshest ingredients
            and traditional techniques.
          </p>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 max-w-2xl mx-auto mb-12">
            {menuCategories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  cn(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-red-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-red-600"
                      : "text-gray-600 hover:bg-white/[0.12] hover:text-red-600",
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {menuCategories.map((category, idx) => (
              <Tab.Panel key={idx} className="rounded-xl bg-white p-3">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image || "/italian-cuisine.jpg"}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <span className="text-red-600 font-bold">{item.price}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
