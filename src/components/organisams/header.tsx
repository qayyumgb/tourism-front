import { Button, Input } from "antd"
import { Search, Globe } from "lucide-react"
import Link from "next/link"

export default function Index() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <h1 className="text-xl font-bold text-primary">Logo</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search"
                className="!pl-10 !pr-4 !py-2 w-full border border-gray-300 !rounded-full !focus:outline-none focus:ring-2 !focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation and Controls */}
          <div className="flex items-center space-x-6">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/flight" className="text-gray-700 hover:!text-primary font-medium">
                Flight
              </Link>
              <Link href="/hotel" className="text-gray-700 hover:!text-primary font-medium">
                Hotel
              </Link>
              <Link href="/community" className="text-gray-700 hover:!text-primary font-medium">
                Community
              </Link>
            </nav>

            {/* Currency Selector */}
            <div
              className="flex items-center space-x-1 px-3 py-1 border border-gray-300 rounded-full"
              role="button"
              aria-label="Select currency"
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">USD</span>
            </div>

            {/* Sign In Button */}
            <Button
              type="primary"
              className="!bg-primary hover:bg-yellow-500 !text-black font-medium px-6 py-2 !rounded-full border-none"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="flex justify-around py-2">
          <Link href="/flight" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2">
            Flight
          </Link>
          <Link href="/hotel" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2">
            Hotel
          </Link>
          <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2">
            Community
          </Link>
        </nav>
      </div>
    </header>
  )
}
