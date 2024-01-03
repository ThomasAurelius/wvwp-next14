import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Willamette Valley Water Polo',
  description: 'Willamette Valley Water Polo is a water polo club in the Willamette Valley of Oregon.1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}