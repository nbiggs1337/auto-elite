import { NextResponse } from "next/server"

// This would typically come from a database
const products = [
  {
    id: 1,
    name: "Premium Sport Wheels",
    price: 899,
    category: "wheels",
    stock: 15,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "All-Terrain Tires",
    price: 299,
    category: "tires",
    stock: 32,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Chrome Luxury Rims",
    price: 1299,
    category: "wheels",
    stock: 8,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export async function GET() {
  return NextResponse.json(products)
}
