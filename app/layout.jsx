import { Inter } from 'next/font/google'
import '../styles/globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reliant Business Solutions',
  description: 'Reliant Business Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light">
          {children}
        </Theme>
      </body>
    </html>
  )
}
