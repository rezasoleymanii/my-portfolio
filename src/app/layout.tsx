'use client'
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}