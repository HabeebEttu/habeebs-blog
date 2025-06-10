import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import { LucidePenTool } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DevInsight Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-white">DevInsight</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A community-driven blog for developers, designers, and tech
              enthusiasts to share knowledge and stay updated with the latest
              trends.
            </p>
            <div className="flex gap-2">
              <Link href={"https://x.com/EttuHabeeb"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaFacebook />
              </Link>
              <Link href={"/"}>
                <FaInstagram />
              </Link>
              <Link href={"https://github.com/HabeebEttu"}>
                <FaGithub />
              </Link>
              <Link href={"https://www.linkedin.com/in/ettu-habeeb-966b09329/"}>
                <FaLinkedin />
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Popular Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/frontend"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/backend"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Backend Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/ui-ux"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/category/mobile"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/category/devops"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 mt-1" />
                <p className="text-gray-400 text-sm">
                  123 Developer Avenue
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <a
                  href="mailto:info@devinsight.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@devinsight.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DevInsight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
