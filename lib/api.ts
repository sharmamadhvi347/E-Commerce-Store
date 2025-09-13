// API functions for Fake Store API integration
export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch product")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}
