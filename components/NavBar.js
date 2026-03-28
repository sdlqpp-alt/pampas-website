'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const items=[['/','Home'],['/products','Products'],['/custom-solutions','Solutions'],['/about','About'],['/contact','Contact']];
export default function NavBar(){const [open,setOpen]=useState(false);return <header className="navbar"><div className="container nav-inner"><Link href="/" className="brand"><Image src="/logo-pampas.jpg" alt="Pampas logo" width={42} height={42} className="brand-logo" /><div><div className="brand-title">WEIFANG PAMPAS</div><div className="brand-sub">International Trading Co., Ltd.</div></div></Link><button className="menu-btn" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button><nav className={`nav-links ${open?'open':''}`}>{items.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}<Link href="/contact" className="btn btn-light">Get a Quote</Link></nav></div></header>}
