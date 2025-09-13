"use client"

import type { CartItem as CartItemType } from "@/lib/cart-context"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart()

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
  }

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove()
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: newQuantity },
      })
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  return (
    <Card className="overflow-hidden border-0 shadow-sm" style={{ backgroundColor: "white" }}>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-50">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-contain p-2"
              sizes="80px"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm line-clamp-2 mb-2" style={{ color: "#192231" }}>
              {item.title}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-md" style={{ borderColor: "#98878F" }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    onClick={() => handleUpdateQuantity(item.quantity - 1)}
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                    onClick={() => handleUpdateQuantity(item.quantity + 1)}
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={handleRemove}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold" style={{ color: "#494E6B" }}>
                  {formatPrice(item.price * item.quantity)}
                </div>
                <div className="text-xs text-gray-500">{formatPrice(item.price)} each</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
