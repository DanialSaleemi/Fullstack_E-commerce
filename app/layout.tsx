import './globals.css'
import { Inter } from 'next/font/google'
import { Menu } from '@/components/NavBar/menu'
import Providers from '@/components/Provider'
import { Footer } from '@/components/Footer/footer'
import AuthProvider from './Context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'A perfect store for all your clothing needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
      <Providers>     
      <Menu/>   
        {children}
      <Footer/>   
      </Providers>
      </AuthProvider>
      </body>
    </html>
  )
}
