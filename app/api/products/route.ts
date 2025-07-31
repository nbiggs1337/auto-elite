import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

// In a real application, you would save this to a database
// For now, we'll simulate saving to a JSON file and store images locally
const products: any[] = [
  {
    id: 1,
    name: "Premium Sport Wheels",
    price: 899,
    category: "wheels",
    stock: 15,
    description: "High-performance sport wheels for enhanced driving experience",
    image: "/placeholder.svg?height=300&width=300",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "All-Terrain Tires",
    price: 299,
    category: "tires",
    stock: 32,
    description: "Durable all-terrain tires for any road condition",
    image: "/placeholder.svg?height=300&width=300",
    createdAt: new Date().toISOString(),
  },
]

export async function GET() {
  return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const price = Number.parseFloat(formData.get("price") as string)
    const category = formData.get("category") as string
    const stock = Number.parseInt(formData.get("stock") as string)
    const description = formData.get("description") as string
    const imageFile = formData.get("image") as File | null

    // Validate required fields
    if (!name || !price || !category || stock === undefined) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    let imagePath = "/placeholder.svg?height=300&width=300"

    // Handle image upload
    if (imageFile && imageFile.size > 0) {
      // Create uploads directory if it doesn't exist
      const uploadsDir = join(process.cwd(), "public", "uploads")
      if (!existsSync(uploadsDir)) {
        await mkdir(uploadsDir, { recursive: true })
      }

      // Generate unique filename
      const timestamp = Date.now()
      const fileExtension = imageFile.name.split(".").pop()
      const fileName = `product-${timestamp}.${fileExtension}`
      const filePath = join(uploadsDir, fileName)

      // Convert file to buffer and save
      const bytes = await imageFile.arrayBuffer()
      const buffer = Buffer.from(bytes)
      await writeFile(filePath, buffer)

      imagePath = `/uploads/${fileName}`
    }

    // Create new product
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      category,
      stock,
      description,
      image: imagePath,
      createdAt: new Date().toISOString(),
    }

    // Add to products array (in a real app, save to database)
    products.push(newProduct)

    return NextResponse.json({
      message: "Product created successfully",
      product: newProduct,
    })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
