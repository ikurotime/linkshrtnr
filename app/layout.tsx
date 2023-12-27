import './globals.css'

import { Gabarito } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const gabarito = Gabarito({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'LinkShrtnr',
  description: 'A simple URL shortener.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={gabarito.className}>
      <body className={cn('bg-background text-foreground dark:dark')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex flex-col items-center min-h-screen'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
