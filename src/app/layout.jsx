import Navbar from "@/component/Navbar/Navbar.jsx"
import Footer from "@/component/footer"
import { Inter } from 'next/font/google'
import { NavigationEvents } from '@/component/NavigationEvents'
import { Suspense } from 'react'
import "@/styles/style.scss"
import { ApolloWrapper } from "@/app/ApolloWrapper";


const inter = Inter({ subsets: ['latin', 'cyrillic'] })



export const metadata = {
  title: ' Translation Bureau | Експрес-переклад документів',
  description: 'Ваші документи будуть перекладені на будь-яку мову. Замовте зараз та отримайте знижку.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={inter.className}>
      <body >
        <Navbar />
        <ApolloWrapper>
           {children} 
           </ApolloWrapper>
         <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
     <Footer />
      </body>
    </html>
  )
}
