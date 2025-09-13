export function Footer() {
  return (
    <footer className="mt-16 border-t py-8" style={{ backgroundColor: "#192231", borderColor: "#494E6B" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-white">E-Commerce Store</h3>
            <p className="text-sm" style={{ color: "#98878F" }}>
              Your one-stop shop for premium products with exceptional quality and service.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Shop</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#98878F" }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Jewelry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#98878F" }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#98878F" }}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm" style={{ borderColor: "#494E6B", color: "#98878F" }}>
          <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
