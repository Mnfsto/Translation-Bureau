import Navbar from "@/component/Navbar/Navbar.jsx"
import Footer from "@/component/footer"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin', 'cyrillic'] })



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body >
        <Navbar />
        {children}
     <Footer />
      </body>
    </html>
  )
}