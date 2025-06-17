'use client'

import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube, Phone, Mail } from "lucide-react";

const socialIcons = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Linkedin },
  { href: "#", icon: Instagram },
  { href: "#", icon: Youtube },
];

const aboutLinks = [
  { label: "About Us", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Resources and Policies", href: "#" },
  { label: "Trust & Safety", href: "#" },
  { label: "Contact Us", href: "#" },
];

const usefulLinks = [
  { label: "Flight Booking", href: "#" },
  { label: "Hotel Booking", href: "#" },
  { label: "Community", href: "#" },
  { label: "Itinerary", href: "#" },
];

const contactDetails = [
  { icon: Phone, text: "0900-78600" },
  { icon: Mail, text: "info@halasky.com" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Logo & Social Media */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-primary font-bold text-lg">Logo</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Get Connected</h4>
              <div className="flex gap-3">
                {socialIcons.map(({ href, icon: Icon }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-slate-600 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map(({ label, href }, idx) => (
                <li key={idx}>
                  <Link href={href} className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Link</h4>
            <ul className="space-y-2">
              {usefulLinks.map(({ label, href }, idx) => (
                <li key={idx}>
                  <Link href={href} className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Office Address</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>2715 Ash Dr, San Jose,</p>
              <p>South Dakota 83475</p>

              <div className="mt-6">
                <h5 className="text-white font-semibold mb-2 text-sm">Contact Us</h5>
                <div className="space-y-1">
                  {contactDetails.map(({ icon: Icon, text }, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon className="w-3 h-3" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download App Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Download the App Now</h4>
            <div className="space-y-4">

              {/* QR Code (static dummy pattern) */}
              <div className="w-20 h-20 bg-white rounded p-1">
                <div className="w-full h-full bg-black rounded flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-px">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-white" : "bg-black"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="space-y-2">
                <Link href="#" className="block">
                  <div className="bg-black rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">▶</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">GET IT ON</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </div>
                </Link>

                <Link href="#" className="block">
                  <div className="bg-black rounded-md px-3 py-2 flex items-center gap-2 hover:bg-gray-900 transition-colors">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">🍎</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">Download on the</p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">© 2024 LLC All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}