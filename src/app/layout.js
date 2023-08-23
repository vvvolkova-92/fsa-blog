import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";
const inter = Inter({ subsets: ['latin'] })
import {ThemeProvider} from "@/context/ThemeContex";
export const metadata = {
  title: 'VVVolkova Test Nextjs App',
  description: 'Test app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
