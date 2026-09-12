import React from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Car,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  ExternalLink,
  Facebook,
  Flame,
  Heart,
  Instagram,
  Leaf,
  LogIn,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
  Users,
  X,
} from 'lucide-react';
import { links, restaurant } from './data';

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export function Logo({ className = '' }) {
  return (
    <span className={`logo-frame ${className}`}>
      <img src="/images/logo.png" alt="Noodle Plus — Pan Asian Cuisine" />
    </span>
  );
}

export function OrderMenu({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      className="order-menu"
    >
      <div className="order-menu-label">ORDER ONLINE</div>
      <a href={links.zomato} target="_blank" rel="noreferrer" onClick={onClose}>
        <span>Zomato</span>
        <ExternalLink size={15} />
      </a>
      <a href={links.swiggy} target="_blank" rel="noreferrer" onClick={onClose}>
        <span>Swiggy</span>
        <ExternalLink size={15} />
      </a>
    </motion.div>
  );
}

export function Header({ user, onAuth }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOrderOpen(false);
  }, [location.pathname]);

  const navItems = [
    ['/', 'Home'],
    ['/menu', 'Menu'],
    ['/about', 'About Us'],
    ['/visit', 'Visit Us'],
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand-link" aria-label="Noodle Plus home">
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-actions">
          <button className="icon-btn" onClick={onAuth} aria-label="Sign in">
            {user ? (
              <span className="avatar">{user.displayName?.[0] || user.email?.[0] || 'U'}</span>
            ) : (
              <LogIn size={18} />
            )}
          </button>
          <div className="order-wrap">
            <button
              className="btn btn-primary"
              onClick={() => setOrderOpen((value) => !value)}
            >
              Order Now
              <ChevronDown size={16} className={orderOpen ? 'rotate-180' : ''} />
            </button>
            <AnimatePresence>
              {orderOpen && <OrderMenu onClose={() => setOrderOpen(false)} />}
            </AnimatePresence>
          </div>
        </div>

        <div className="mobile-actions">
          <button className="icon-btn" onClick={onAuth} aria-label="Sign in">
            {user ? <span className="avatar">{user.email?.[0] || 'U'}</span> : <LogIn size={18} />}
          </button>
          <button
            className="icon-btn"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} /> : <MenuIcon size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-panel"
          >
            {navItems.map(([to, label]) => (
              <NavLink key={to} to={to} className="mobile-link">
                {label}
              </NavLink>
            ))}
            <div className="mobile-order-row">
              <a href={links.zomato} target="_blank" rel="noreferrer" className="btn btn-primary">
                Order on Zomato <ExternalLink size={15} />
              </a>
              <a href={links.swiggy} target="_blank" rel="noreferrer" className="btn btn-outline">
                Order on Swiggy <ExternalLink size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo className="logo-footer" />
          <p className="footer-copy">
            Pan-Asian comfort, wok-fresh craft, and an easygoing table in Baner.
          </p>
          <div className="footer-rating">
            <Star size={16} fill="currentColor" />
            <strong>{restaurant.rating}</strong>
            <span>({restaurant.reviews} Google reviews)</span>
          </div>
        </div>

        <div>
          <div className="footer-title">Explore</div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/visit">Visit Us</Link>
          </div>
        </div>

        <div>
          <div className="footer-title">Visit</div>
          <a href={links.map} target="_blank" rel="noreferrer" className="footer-address">
            {restaurant.address}
          </a>
          <a href={links.phone} className="footer-phone">
            <Phone size={15} /> {restaurant.phone}
          </a>
          <div className="footer-hours">
            <Clock3 size={15} /> {restaurant.hours}
          </div>
        </div>

        <div>
          <div className="footer-title">Order & Social</div>
          <div className="footer-order-links">
            <a href={links.zomato} target="_blank" rel="noreferrer">Zomato <ExternalLink size={14} /></a>
            <a href={links.swiggy} target="_blank" rel="noreferrer">Swiggy <ExternalLink size={14} /></a>
            <a href={links.instagram} target="_blank" rel="noreferrer">Instagram <Instagram size={14} /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Noodle Plus. All rights reserved.</span>
        <span>Proudly women-owned.</span>
      </div>
    </footer>
  );
}

export function SectionHeading({ kicker, title, text, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center' : ''}`}>
      <div className="eyebrow">{kicker}</div>
      <h2 className="display-heading">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function RatingPill() {
  return (
    <div className="rating-pill">
      <Star size={15} fill="currentColor" />
      <strong>{restaurant.rating}</strong>
      <span>· {restaurant.reviews} reviews</span>
    </div>
  );
}

export function ServiceGrid() {
  const services = [
    ['Dine-in', Utensils],
    ['Takeaway', ShoppingBag],
    ['Catering', Heart],
    ['Kerbside pickup', Car],
    ['No-contact delivery', Sparkles],
    ['Plenty of parking', MapPin],
    ['Cards & NFC payments', CreditCard],
    ['Good for kids', Users],
  ];

  return (
    <div className="service-grid">
      {services.map(([label, Icon]) => (
        <div className="service-card" key={label}>
          <Icon size={18} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function ImageCard({ src, alt, label, className = '' }) {
  return (
    <motion.div variants={fadeUp} className={`image-card ${className}`} whileHover={{ y: -6 }}>
      <img src={src} alt={alt} loading="lazy" />
      {label && <span>{label}</span>}
    </motion.div>
  );
}

export function MobileOrderBar() {
  return (
    <div className="mobile-order-bar">
      <span>Hungry?</span>
      <a href={links.zomato} target="_blank" rel="noreferrer">Zomato</a>
      <a href={links.swiggy} target="_blank" rel="noreferrer">Swiggy</a>
    </div>
  );
}

export function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="info-card">
      <div className="info-icon"><Icon size={19} /></div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export function DietIcon({ type }) {
  return (
    <span className={`diet-icon ${type}`} aria-label={type === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}>
      {type === 'veg' ? <Leaf size={12} /> : <Flame size={12} />}
    </span>
  );
}

export function SearchBox({ value, onChange }) {
  return (
    <label className="search-box">
      <Search size={18} />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search noodles, dumplings, soups..."
        aria-label="Search menu"
      />
      {value && <button type="button" onClick={() => onChange('')} aria-label="Clear search"><X size={16} /></button>}
    </label>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div><Star size={15} fill="currentColor" /> <strong>4.6★</strong> · {restaurant.reviews} Google reviews</div>
      <div><Heart size={15} /> Proudly women-owned</div>
      <div><Clock3 size={15} /> Daily till 11:30 PM</div>
      <div><MapPin size={15} /> Baner, Pune</div>
    </div>
  );
}
