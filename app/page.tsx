"use client"

import { useState, useEffect } from "react"
import { fetchProducts, type Product } from "@/lib/api"
import { ProductGrid } from "@/components/product-grid"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        const fetchedProducts = await fetchProducts()
        setProducts(fetchedProducts)
      } catch (err) {
        setError("Failed to load products. Please try again later.")
        console.error("Error loading products:", err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8f9fa" }}>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div
          className="mb-12 text-center py-16 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #192231 0%, #494E6B 100%)",
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Premium Products</h1>
          <p className="text-xl mb-6" style={{ color: "#98878F" }}>
            Discover our curated collection of exceptional items
          </p>
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{ backgroundColor: "#985E6D", color: "white" }}
          >
            ✨ Free shipping on orders over $50
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#192231" }}>
            Featured Products
          </h2>
          <p className="text-gray-600">Shop from our carefully selected range of premium products</p>
        </div>

        {error ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-lg mb-4">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-md text-white font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "#985E6D" }}
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <LoadingSpinner />
        ) : (
          <ProductGrid products={products} loading={loading} />
        )}
      </main>

      <Footer />
    </div>
  )
}
