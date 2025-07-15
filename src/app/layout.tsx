import './globals.css';
import './style/aboutus.css';
import './style/contact.css';
import Navbar from './components/nav_bar';
import Footer from './components/footer';
export const metadata = {
  title: 'Mini Digital Media',
  description: 'Your digital solution partner.',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600&display=swap" rel="stylesheet"/>
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
