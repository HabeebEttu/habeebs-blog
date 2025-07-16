
import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { href: "https://x.com/EttuHabeeb", icon: FaTwitter },
  { href: "/", icon: FaFacebook },
  { href: "/", icon: FaInstagram },
  { href: "https://github.com/HabeebEttu", icon: FaGithub },
  { href: "https://www.linkedin.com/in/ettu-habeeb-966b09329/", icon: FaLinkedin },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const popularCategories = [
  { href: "/category/frontend", label: "Frontend Development" },
  { href: "/category/backend", label: "Backend Development" },
  { href: "/category/ui-ux", label: "UI/UX Design" },
  { href: "/category/mobile", label: "Mobile Development" },
  { href: "/category/devops", label: "DevOps" },
];

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
      {children}
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="border-t pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* DevInsight Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">DevInsight</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A community-driven blog for developers, designers, and tech
              enthusiasts to share knowledge and stay updated with the latest
              trends.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <FooterLink href={link.href} key={link.label}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Popular Categories Section */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              {popularCategories.map((link) => (
                <FooterLink href={link.href} key={link.label}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <p className="text-muted-foreground text-sm">
                  123 Developer Avenue
                  <br />
                  San Francisco, CA 94107
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:info@devinsight.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  info@devinsight.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t mt-10 pt-6">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} DevInsight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

