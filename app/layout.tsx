import './globals.css'
import { Inter } from 'next/font/google'
import { Lato } from 'next/font/google' 
import RecoilWrapper from './components/RecoilWrapper/RecoilWrapper'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Sans&display=swap" rel="stylesheet"/>

      </head>
      <body className={inter.className}>
        <RecoilWrapper>
              {children}
        </RecoilWrapper>
        </body>
    </html>
  )
}
