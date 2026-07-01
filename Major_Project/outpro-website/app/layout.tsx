import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="layout-body">
        
        {/* THE TOP */}
        <Navbar />

        {/* THE MIDDLE */}
        <main className="main-content">
          {children}
        </main>

        {/* THE BOTTOM */}
        <Footer />

      </body>
    </html>
  );
}