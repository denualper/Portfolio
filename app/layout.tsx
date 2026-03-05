import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Denisse Alperovich | Software Engineer",
    description: "Portfolio of Denisse Alperovich - Fullstack Developer",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>

        <Navbar />
        {children}
        <Footer />

        </body>
        </html>
    );
}