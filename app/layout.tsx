import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RoommatesIO",
  description: "Website for finding roommates online."
};

const Header = () => {
  return (
    <header className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        {/* Brand Logo */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          RoommatesIO
        </Link>
      </div>
      <div className="flex-none">
        {/* Navigation Links */}
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li>
            <Link href="/listings">Listings</Link>
          </li>
          <li>
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        {/* User Actions */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-primary">
            Login / Signup
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <p className="font-bold">RoommatesIO</p>
        <p>Uniting people, one booking at a time.</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link href="/" className="link link-hover">About Us</Link>
        <Link href="/" className="link link-hover">Contact</Link>
        <Link href="/" className="link link-hover">Careers</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link href="/" className="link link-hover">Terms of Service</Link>
        <Link href="/" className="link link-hover">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
