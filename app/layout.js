import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import { site } from '@/lib/siteData';
export const metadata = {metadataBase:new URL(site.domain),title:{default:'Pampas - One-Stop Engineering and Material Solutions',template:'%s | Pampas'},description:'One-stop engineering and material solutions for building, solar and industrial projects. From design support to sourcing, production and delivery.'};
export default function RootLayout({children}){return <html lang="en"><body><NavBar /><main>{children}</main><Footer /><FloatingActions /></body></html>}
