import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alex Portfolio - Full Stack Developer",
  description: "Beautiful animated portfolio showcasing projects and expertise",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isMobile && prefersDark) {
                  document.documentElement.classList.add('dark');
                } else if (!isMobile) {
                  // Remove dark class on desktop
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
