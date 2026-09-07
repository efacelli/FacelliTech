import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { products, tagLabel, formatPrice } from '../data/products'
import { Nav, Footer, ProductImage } from '../components/Shared'

export default function Catalog() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('todos')
  const [sort, setSort] = useState('default')

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      const matchesFilter = filter === 'todos' || p.category === filter
      const haystack = `${p.name} ${p.cpu} ${p.ram} ${p.storage} ${p.gpu} ${p.desc}`.toLowerCase()
      return matchesFilter && haystack.includes(search.toLowerCase())
    })
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [search, filter, sort])

  return (
    <>
      <Nav />

      <section className="hero" id="inicio">
        <svg className="hero-circuit" viewBox="0 0 1200 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#2b342d" strokeWidth="1.4" fill="none">
            <path d="M0 80 H220 L260 120 H520" />
            <path d="M0 420 H160 L200 380 H460 L500 420 H1200" />
            <path d="M1200 60 H960 L920 100 H700" />
            <path d="M1200 220 H1000 L960 260 H760 L720 220 H600" />
            <path d="M0 250 H140 L180 210" />
          </g>
          <g fill="#c9a227">
            <circle cx="260" cy="120" r="4" /><circle cx="520" cy="120" r="4" />
            <circle cx="200" cy="380" r="4" /><circle cx="500" cy="420" r="4" />
            <circle cx="920" cy="100" r="4" /><circle cx="960" cy="260" r="4" />
            <circle cx="720" cy="220" r="4" /><circle cx="180" cy="210" r="4" />
          </g>
        </svg>
        <div className="hero-eyebrow">6 equipos armados y listos para entrega</div>
        <h1>PCs armadas a mano<br />para <span className="accent">trabajar, diseñar y jugar</span></h1>
        <p className="lead">Cada equipo se arma, se prueba y se configura antes de llegar a tus manos, con Windows y Office ya instalados.</p>
        <div className="hero-actions">
          <a href="#catalogo" className="btn-primary">Ver catálogo</a>
          <a href="https://wa.me/5493855166419" target="_blank" rel="noopener noreferrer" className="btn-ghost">Hablar por WhatsApp</a>
        </div>
        <div className="hero-stats">
          <div><div className="num">6</div><div className="lbl">equipos en stock</div></div>
          <div><div className="num">$70k–500k</div><div className="lbl">rango de precios</div></div>
          <div><div className="num">100%</div><div className="lbl">probadas antes de entregar</div></div>
        </div>
      </section>

      <section className="catalog" id="catalogo">
        <div className="catalog-head">
          <div>
            <h2>Catálogo de equipos</h2>
            <p>Filtrá por procesador, memoria o uso — oficina, diseño o gaming.</p>
          </div>
          <div className="result-count">{filtered.length} equipo{filtered.length === 1 ? '' : 's'}</div>
        </div>

        <div className="filters">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Buscar por procesador, memoria, uso..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="filter-pills">
            {['todos', 'oficina', 'diseno', 'gaming'].map(f => (
              <div key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                {f === 'todos' ? 'Todos' : tagLabel[f]}
              </div>
            ))}
          </div>
          <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="default">Orden: recomendado</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state show">
            <h3>No encontramos equipos con esa búsqueda</h3>
            <p>Probá con otro término o quitá el filtro aplicado.</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map(p => (
              <Link className="card" key={p.id} to={`/producto/${p.id}`}>
                <div className="card-media">
                  <ProductImage src={p.images[0]} alt={p.name} />
                  <span className="cpu-badge">{p.cpu.split('(')[0].trim()}</span>
                  <span className={`tag ${p.category}`}>{tagLabel[p.category]}</span>
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <ul className="specs">
                    <li>{p.ram}</li>
                    <li>{p.storage}</li>
                    <li>{p.gpu}</li>
                    <li>{p.extra}</li>
                    <li>{p.software}</li>
                  </ul>
                  <p className="desc">{p.desc}</p>
                  <div className="card-footer">
                    <div className="price">{formatPrice(p.price)}<small>precio final</small></div>
                    <span className="consult-btn">Ver ficha</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  )
}
