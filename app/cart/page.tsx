"use client"

import { useCart } from "@/lib/cart-context"
import { CartItem } from "@/components/cart-item"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShoppingBag, CreditCard, Shield, Truck } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8f9fa" }}>
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>

          <h1 className="text-3xl font-bold mb-2" style={{ color: "#192231" }}>
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {totalItems > 0 ? `${totalItems} item${totalItems !== 1 ? "s" : ""} in your cart` : "Your cart is empty"}
          </p>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-xl font-semibold mb-2 text-gray-600">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some products to get started!</p>
            <Link href="/">
              <Button className="text-white font-medium px-8 py-3" style={{ backgroundColor: "#985E6D" }}>
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold" style={{ color: "#192231" }}>
                  Cart Items
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearCart}
                  className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                >
                  Clear Cart
                </Button>
              </div>

              {state.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-0 shadow-lg" style={{ backgroundColor: "white" }}>
                <CardHeader>
                  <CardTitle className="text-lg" style={{ color: "#192231" }}>
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                      <span className="font-medium">{formatPrice(state.total)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">{formatPrice(state.total * 0.08)}</span>
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between text-lg font-bold">
                    <span style={{ color: "#192231" }}>Total</span>
                    <span style={{ color: "#494E6B" }}>{formatPrice(state.total + state.total * 0.08)}</span>
                  </div>

                  <div className="space-y-4">
                    <Button
                      className="w-full text-white font-medium py-3 transition-all hover:scale-105"
                      style={{ backgroundColor: "#985E6D" }}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Proceed to Checkout
                    </Button>

                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Secure Payment
                      </div>
                      <div className="flex items-center gap-1">
                        <Truck className="w-3 h-3" />
                        Free Shipping
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link href="/">
                      <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-800">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
