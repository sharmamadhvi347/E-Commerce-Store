"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Store } from "lucide-react"
import Link from "next/link"

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{ backgroundColor: "#192231", borderColor: "#494E6B" }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <Store className="w-6 h-6" />
          <span className="font-bold text-lg">E-Commerce Store</span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="relative text-white hover:bg-white/10">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <Badge
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  style={{ backgroundColor: "#985E6D", color: "white" }}
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
