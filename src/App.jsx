import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import wheat from './assets/Wheat.jpeg'
import rice from './assets/Rice.jpeg'
import vegetables from './assets/Fresh vegetables.webp'
import fruits from './assets/Fresh fruits.jpeg'
import oils from './assets/Cooking oils.jpeg'
import dairy from './assets/Milk products.jpeg'
import coffee from './assets/Coffee.jpeg'
import sugar from './assets/Sugar.jpeg'
import pantry from './assets/Pantry products.jpeg'

const products = [
  { name: 'Wheat', category: 'Grains & Cereals', image: wheat, description: 'Reliable wholesale wheat sourcing for retailers, distributors and food producers.' },
  { name: 'Rice', category: 'Grains & Cereals', image: rice, description: 'Everyday rice products selected for consistent quality and dependable supply.' },
  { name: 'Fresh Vegetables', category: 'Fruits & Vegetables', image: vegetables, description: 'Fresh and seasonal vegetables sourced according to market availability.' },
  { name: 'Fresh Fruits', category: 'Fruits & Vegetables', image: fruits, description: 'Selected fruit products for retail, food service and commercial buyers.' },
  { name: 'Cooking Oils', category: 'Oils & Ingredients', image: oils, description: 'Cooking oils and edible products for professional kitchens and food businesses.' },
  { name: 'Milk Products', category: 'Dairy & Eggs', image: dairy, description: 'Wholesale dairy products for retailers, restaurants and food-service partners.' },
  { name: 'Coffee', category: 'Tea, Coffee & Spices', image: coffee, description: 'Popular coffee products for retail and hospitality requirements.' },
  { name: 'Sugar', category: 'Sugar & Confectionery', image: sugar, description: 'Flexible sugar supply for businesses purchasing at wholesale volume.' },
  { name: 'Pantry Products', category: 'General Food Products', image: pantry, description: 'Everyday grocery products tailored to your purchasing requirements.' },
]

const categories = [
  ['01', 'Grains & Cereals', 'Grains, rice, oats and cereal products for reliable everyday supply.', wheat],
  ['02', 'Fruits & Vegetables', 'Fresh and seasonal products sourced around your needs.', vegetables],
  ['03', 'Dairy & Eggs', 'Quality dairy and egg products for professional buyers.', dairy],
  ['04', 'Oils & Food Ingredients', 'Cooking oils, edible products and selected ingredients.', oils],
  ['05', 'Tea, Coffee & Spices', 'Popular ingredients for retail, food service and hospitality.', coffee],
  ['06', 'Sugar & Confectionery', 'Sugar, chocolate and confectionery products at wholesale.', sugar],
]

function Header({ cartCount, onCart }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
    <Link to="/" className="brand"><span className="brand-mark">M</span><span>MAGNOVIX<small>WHOLESALE SUPPLY</small></span></Link>
    <nav id="main-navigation" aria-label="Main navigation">
      <Link to="/" onClick={closeMenu}>Home</Link><Link to="/products" onClick={closeMenu}>Products</Link><Link to="/about" onClick={closeMenu}>About us</Link><Link to="/contact" onClick={closeMenu}>Get in touch</Link>
    </nav>
    <div className="header-actions">
      <button className="cart-button" onClick={onCart} aria-label={`Open cart, ${cartCount} items`}><span className="cart-label">Cart</span><b>{cartCount}</b><span className="cart-arrow">↗</span><span className="cart-icon" aria-hidden="true">▱</span></button>
      <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}><span /><span /></button>
    </div>
  </header>
}

function Button({ children, to, onClick, light = false }) {
  const className = `button ${light ? 'button-light' : ''}`
  return to ? <Link to={to} className={className}>{children}<span>↗</span></Link> : <button onClick={onClick} className={className}>{children}<span>↗</span></button>
}

function Home({ onAdd }) {
  const navigate = useNavigate()
  return <div>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">POLAND · EUROPE · WHOLESALE</p>
        <h1>Good products.<br /><em>Better business.</em></h1>
        <p className="hero-text">Quality products, competitive wholesale solutions and dependable service for businesses across Poland and Europe.</p>
        <div className="hero-actions"><Button to="/products">Explore products</Button><button className="text-button" onClick={() => navigate('/contact')}>Talk to our team <span>↗</span></button></div>
        <div className="hero-proof"><strong>01</strong><span>Reliable supply<br />for growing businesses</span><strong>02</strong><span>Professional<br />partnerships</span></div>
      </div>
      <div className="hero-image"><img src={vegetables} alt="Fresh wholesale vegetables" /><div className="image-label">FRESH / SOURCED<br /><b>WITH PURPOSE</b></div></div>
    </section>

    <section className="intro section-pad">
      <div><p className="eyebrow">THE MAGNOVIX APPROACH</p><h2>Wholesale that<br /><em>moves with you.</em></h2></div>
      <div className="intro-content"><p className="large-copy">We connect businesses with reliable products and flexible supply solutions. Our goal is to make purchasing simple, efficient and dependable.</p><p>Whether you need regular wholesale supply or a specific product requirement, our team is ready to listen, source and deliver.</p><Button to="/about" light>Discover our story</Button></div>
    </section>

    <section className="products-strip section-pad">
      <div className="section-heading"><div><p className="eyebrow">WHAT WE SUPPLY</p><h2>Products for<br /><em>real businesses.</em></h2></div><Link to="/products" className="underlined-link">View all products ↗</Link></div>
      <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.name} product={product} onAdd={onAdd} />)}</div>
    </section>

    <section className="values-section">
      <div className="section-pad"><p className="eyebrow">WHY MAGNOVIX</p><h2>Built on the things<br /><em>that matter.</em></h2><div className="value-grid">
        {['Quality first', 'Competitive pricing', 'Reliable supply', 'Flexible solutions', 'Professional service', 'Long-term partnerships'].map((value, i) => <div className="value" key={value}><span>0{i + 1}</span><h3>{value}</h3><p>{['Products that meet appropriate quality and commercial requirements.', 'A wholesale approach built around your volume and goals.', 'Dependable sourcing and clear communication at every step.', 'Purchasing and supply solutions shaped around your needs.', 'Clear, professional cooperation from first enquiry to delivery.', 'We build relationships, not one-time transactions.'][i]}</p></div>)}
      </div></div>
    </section>

    <section className="categories section-pad"><div className="section-heading"><div><p className="eyebrow">OUR RANGE</p><h2>Find your<br /><em>category.</em></h2></div></div><div className="category-grid">{categories.map(([number, name, description, image]) => <Link to="/products" className="category-card" key={name}><img src={image} alt="" /><div><span>{number}</span><h3>{name}</h3><p>{description}</p><b>Explore ↗</b></div></Link>)}</div></section>

    <section className="process section-pad"><p className="eyebrow">HOW IT WORKS</p><h2>Simple from<br /><em>start to supply.</em></h2><div className="process-grid">{['Browse products', 'Select products', 'Send your requirement', 'Receive a quote', 'Confirm your order', 'Delivery'].map((step, i) => <div className="process-step" key={step}><span>0{i + 1}</span><h3>{step}</h3><p>{['Explore our wholesale categories.', 'Choose products for your business.', 'Tell us your quantity and packaging needs.', 'We review availability and pricing.', 'Agree terms and finalize the order.', 'Products arrive as arranged.'][i]}</p></div>)}</div></section>

    <section className="cta"><div><p className="eyebrow">LET'S WORK TOGETHER</p><h2>Have a requirement?<br /><em>Let's talk.</em></h2></div><Button to="/contact" light>Get in touch</Button></section>
  </div>
}

function ProductCard({ product, onAdd }) {
  return <article className="product-card"><Link to="/products"><div className="product-image"><img src={product.image} alt={product.name} /><span>Wholesale</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.category}</p></div><button onClick={(e) => { e.preventDefault(); onAdd(product) }} aria-label={`Add ${product.name} to cart`}>+</button></div></Link></article>
}

function Products({ onAdd }) {
  return <div className="page"><div className="page-hero"><p className="eyebrow">THE MAGNOVIX RANGE</p><h1>Products for<br /><em>wholesale buyers.</em></h1><p>Availability changes with market conditions and supplier requirements. If you do not see what you need, ask us.</p></div><section className="section-pad catalogue"><div className="catalogue-intro"><p className="eyebrow">01 / PRODUCTS</p><h2>Quality, value,<br /><em>reliability.</em></h2><Button to="/contact">Request a quote</Button></div><div className="full-product-grid">{products.map((product) => <ProductCard key={product.name} product={product} onAdd={onAdd} />)}</div></section></div>
}

function About() {
  return <div className="page"><div className="page-hero about-hero"><p className="eyebrow">ABOUT MAGNOVIX</p><h1>Building reliable<br /><em>wholesale connections.</em></h1><p>A Poland-based company focused on professional business solutions, wholesale trade and supply opportunities.</p></div><section className="section-pad about-content"><div><p className="eyebrow">OUR MISSION</p><h2>Make wholesale<br /><em>work better.</em></h2></div><div><p className="large-copy">Our approach is simple: understand what our customers need, source suitable products and create a smooth purchasing experience.</p><p>We aim to combine <b>quality, value, reliability and service</b> to create better purchasing opportunities for our customers across Poland and international markets.</p><div className="values-line"><span>Quality</span><span>Value</span><span>Reliability</span><span>Service</span></div></div></section></div>
}

function Contact() {
  return <div className="page"><div className="page-hero contact-hero"><p className="eyebrow">GET IN TOUCH</p><h1>Let's talk about<br /><em>your requirements.</em></h1><p>Tell us what you need, and our team will review your request and get back to you.</p></div><section className="contact-section section-pad"><div className="contact-details"><p className="eyebrow">CONTACT DETAILS</p><h2>MAGNOVIX<br /><em>sp. z o.o.</em></h2><p>Poznań, Poland</p><a href="mailto:info@magnovix.com">info@magnovix.com ↗</a><p className="muted">Replace with your actual company phone number.</p></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Full name<input placeholder="Your name" required /></label><label>Company name<input placeholder="Your company" /></label><label>Email address<input type="email" placeholder="you@company.com" required /></label><label>What can we help with?<textarea placeholder="Tell us about your products, quantities and delivery needs..." rows="5" required /></label><button className="button" type="submit">Send request <span>↗</span></button></form></section></div>
}

function Cart({ items, onClose, onChange }) {
  return <aside className={`cart-drawer ${items.open ? 'is-open' : ''}`}><div className="cart-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Wholesale cart</h2></div><button onClick={onClose} aria-label="Close cart">×</button></div>{items.length === 0 ? <div className="empty-cart"><span>+</span><p>Your cart is empty.</p><small>Add products to send a wholesale request.</small></div> : <><div className="cart-items">{items.map((item) => <div className="cart-item" key={item.name}><img src={item.image} alt="" /><div><h3>{item.name}</h3><p>{item.category}</p><div className="quantity"><button onClick={() => onChange(item.name, -1)}>−</button><span>{item.quantity}</span><button onClick={() => onChange(item.name, 1)}>+</button></div></div></div>)}</div><Button to="/contact">Request wholesale quote</Button></>}</aside>
}

function Footer() {
  return <footer><div className="footer-main"><Link to="/" className="brand"><span className="brand-mark">M</span><span>MAGNOVIX<small>WHOLESALE SUPPLY</small></span></Link><p>Reliable wholesale.<br />Professional business.<br />Strong partnerships.</p><div className="footer-links"><Link to="/products">Products</Link><Link to="/about">About us</Link><Link to="/contact">Get in touch</Link></div><div className="footer-contact"><span>Poznań, Poland</span><a href="mailto:info@magnovix.com">info@magnovix.com ↗</a></div></div><div className="footer-bottom"><span>© 2025 MAGNOVIX sp. z o.o.</span><span>Quality · Value · Reliability · Service</span></div></footer>
}

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const addToCart = (product) => { setCart((items) => items.some((item) => item.name === product.name) ? items.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...product, quantity: 1 }]); setCartOpen(true) }
  const changeQuantity = (name, change) => setCart((items) => items.map((item) => item.name === name ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0))
  const cartCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart])
  return <BrowserRouter><Header cartCount={cartCount} onCart={() => setCartOpen(true)} /><main><Routes><Route path="/" element={<Home onAdd={addToCart} />} /><Route path="/products" element={<Products onAdd={addToCart} />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home onAdd={addToCart} />} /></Routes></main><Footer /><Cart items={Object.assign([...cart], { open: cartOpen })} onClose={() => setCartOpen(false)} onChange={changeQuantity} /></BrowserRouter>
}

export default App
