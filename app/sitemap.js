export default function sitemap() {
  const base = 'https://pampasgrp.com';
  return ['', '/products', '/custom-solutions', '/about', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
