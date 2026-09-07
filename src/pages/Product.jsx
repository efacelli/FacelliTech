import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products, tagLabel, formatPrice, WHATSAPP_NUMBER } from '../data/products'
import { Nav, Footer, ProductImage } from '../components/Shared'

export default function Product() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id, 10)) || products[0]
  const [activeImg, setActiveImg] = useState(product.images[0])

  const waMessage = encodeURIComponent(
    `Hola! Te consulto por la PC "${product.name}" (${formatPrice(product.price)}) que vi en la web de FACELLI TECH.`
  )
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <>
      <Nav />

      <div className="back-link">
        <Link to="/">← Volver al catálogo</Link>
      </div>

      <div className="product">
        <div className="gallery">
          <div className="gallery-main">
            <ProductImage src={activeImg} alt={product.name} size={120} />
          </div>
          <div className="thumb-row">
            {product.images.map((img, i) => (
              <div key={i} className={`thumb ${activeImg === img ? 'active' : ''}`} onClick={() => setActiveImg(img)}>
                <ProductImage src={img} alt={`${product.name} foto ${i + 1}`} size={28} />
              </div>
            ))}
          </div>
        </div>

        <div className="info">
          <div className="badges"><span className={`badge ${product.category}`}>{tagLabel[product.category]}</span></div>
          <h1>{product.name}</h1>
          <div className="price">{formatPrice(product.price)}<small>precio final, equipo probado y listo para usar</small></div>
          <p className="desc">{product.desc}</p>
          <div className="spec-table">
            <div className="spec-row"><span className="label">PROCESADOR</span><span className="value">{product.cpu}</span></div>
            <div className="spec-row"><span className="label">MEMORIA</span><span className="value">{product.ram}</span></div>
            <div className="spec-row"><span className="label">ALMACENAMIENTO</span><span className="value">{product.storage}</span></div>
            <div className="spec-row"><span className="label">VIDEO</span><span className="value">{product.gpu}</span></div>
            <div className="spec-row"><span className="label">GABINETE / EXTRAS</span><span className="value">{product.extra}</span></div>
            <div className="spec-row"><span className="label">SOFTWARE</span><span className="value">{product.software}</span></div>
          </div>
          <a className="wa-btn" href={waLink} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.507 3.633 1.393 5.147L2 22l4.985-1.362A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12.001 2zm0 18.031a8.006 8.006 0 01-4.084-1.115l-.293-.174-3.037.83.813-2.964-.191-.304A8.02 8.02 0 014 12c0-4.411 3.589-8 8.001-8C16.412 4 20 7.589 20 12s-3.588 8.031-7.999 8.031z"></path></svg>
            Consultar por WhatsApp
          </a>
          <div className="secondary-note">Te vamos a responder directo por WhatsApp con la disponibilidad</div>
        </div>
      </div>

      <Footer />
    </>
  )
}
