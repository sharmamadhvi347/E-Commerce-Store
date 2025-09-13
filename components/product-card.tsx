"use client"

import type { Product } from "@/lib/api"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  return (
    <Card
      className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Badge
          className="absolute top-2 right-2 text-xs font-medium"
          style={{ backgroundColor: "#98878F", color: "white" }}
        >
          {product.category}
        </Badge>
      </div>

      <CardContent className="flex-1 p-4 space-y-3">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-gray-900">{product.title}</h3>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating.rate}</span>
          </div>
          <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold" style={{ color: "#494E6B" }}>
            {formatPrice(product.price)}
          </span>
        </div>

        <Button
          onClick={handleAddToCart}
          size="sm"
          className="flex items-center gap-2 transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "#985E6D",
            color: "white",
            border: "none",
          }}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
