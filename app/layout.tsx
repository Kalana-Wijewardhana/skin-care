
// import type React from "react"
// import type { Metadata, Viewport } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const geistSans = Geist({ subsets: ["latin"] })
// const geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Lavish Skin Wellness | Luxury Skincare Treatments",
//   description:
//     "Premium skincare clinic in Kurunegala. Expert treatments for acne, anti-aging, hair removal, and more. Led by Dr. Nathalie Herath.",
//   generator: "v0.app",
// }

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }




import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lavish Skin Wellness | Luxury Skincare Treatments",
  description:
    "Premium skincare clinic in Kurunegala. Expert treatments for acne, anti-aging, hair removal, and more. Led by Dr. Nathalie Herath.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}