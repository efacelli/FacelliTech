import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../data/products'

export function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
        <img src="/logo.png" alt="FACELLI TECH" style={{ height: 34, width: 34, borderRadius: 4, objectFit: 'cover' }} />
        FACELLI TECH
        <span className="sub">ARMADO &amp; VENTA DE PCs</span>
      </Link>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="nav-cta">
        Consultar
      </a>
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="brand"><span className="mark"></span> FACELLI TECH</div>
      <div>
        <a href="https://efacelli.github.io/portfolio/" target="_blank" rel="noopener noreferrer">efacelli</a> — todos los derechos reservados
      </div>
    </footer>
  )
}

export function CpuIcon({ size = 64 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#6fae7c" strokeWidth="1.5" width={size} height={size} style={{ opacity: 0.5 }}>
      <rect x="6" y="6" width="12" height="12" rx="1"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  )
}

export function ProductImage({ src, alt, size = 64 }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}><CpuIcon size={size} /></div>
  return <img src={src} alt={alt} onError={() => setFailed(true)} />
}
