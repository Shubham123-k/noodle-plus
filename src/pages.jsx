import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Flame,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';
import { beverages, gallery, happyHours, links, menuSections, restaurant } from './data';
import {
  DietIcon,
  Footer,
  ImageCard,
  InfoCard,
  MobileOrderBar,
  Page,
  RatingPill,
  SectionHeading,
  SearchBox,
  ServiceGrid,
  TrustStrip,
  fadeUp,
} from './components';
import { auth, firebaseConfigured, googleProvider } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

const heroImage = '/images/popular/popular-02.jpg';

export function Home() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <Page>
      <Hero onAuth={() => setAuthOpen(true)} />
      <TrustStrip />

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            kicker="SIGNATURE CRAVINGS"
            title="Start with what makes the room smell incredible."
            text="From steamed dumplings to smoky noodles, choose a lane and let the wok do the rest."
          />
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="category-grid"
          >
            {[
              ['Dumplings', '/images/menu/menu-01.jpg', 'Steam-soft, sauce-ready'],
              ['Noodles', '/images/menu/menu-05.jpg', 'Wok-tossed comfort'],
              ['Rice', '/images/menu/menu-02.jpg', 'Fragrant, punchy grains'],
              ['Appetizers', '/images/menu/menu-03.jpg', 'Crisp, saucy, shareable'],
              ['Soups', '/images/menu/menu-07.jpg', 'Warm bowls, bold broths'],
            ].map(([name, image, copy]) => (
              <Link to={`/menu?category=${encodeURIComponent(name === 'Appetizers' ? 'Veg Appetizers' : name)}`} key={name}>
                <motion.div variants={fadeUp} className="category-card">
                  <img src={image} alt={name} loading="lazy" />
                  <div className="category-overlay" />
                  <div className="category-content">
                    <span>{copy}</span>
                    <h3>{name}</h3>
                    <ArrowRight size={18} />
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow">WHY NOODLE PLUS</div>
            <h2 className="display-heading">Big Pan-Asian flavour. Easygoing Baner energy.</h2>
            <p className="lead-copy">
              A proudly women-owned kitchen built around wok-fresh plates, warm hospitality, and a table that works for solo lunches and family-sized cravings.
            </p>
            <div className="value-list">
              {[
                ['Authentic Pan-Asian Craft', 'Classic techniques with a playful local rhythm.'],
                ['Fresh, Wok-Tossed Daily', 'Hot, aromatic plates made for the moment.'],
                ['Family & Group Friendly', 'A casual table for catch-ups, celebrations and kids.'],
                ['Proudly Women-Owned', 'Independent, welcoming and proudly homegrown.'],
              ].map(([title, copy]) => (
                <div className="value-row" key={title}>
                  <span className="value-number">+</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="story-image-wrap"
          >
            <img src="/images/normal/normal-03.jpg" alt="Noodle Plus restaurant interior" />
            <div className="story-badge">
              <span>Baner, Pune</span>
              <strong>Come hungry.</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <HappyHours />

      <section className="section section-cream">
        <div className="container">
          <div className="rating-section">
            <div>
              <div className="eyebrow dark">THE NOD FROM BANER</div>
              <div className="big-rating"><Star size={32} fill="currentColor" /> 4.6</div>
              <p className="rating-copy">A strong 4.6★ rating from 350+ Google reviews — proof that the wok is doing something right.</p>
            </div>
            <div className="rating-notes">
              <div>“Wok-fresh noodles and a relaxed table make Noodle Plus an easy repeat.”</div>
              <div>“A casual Pan-Asian stop that works equally well for families and groups.”</div>
              <div>“Dumplings, noodles and saucy plates are the kind of food you come back for.”</div>
              <small>Sample editorial summaries — replace with approved customer testimonials before publishing.</small>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
      <Footer />
      <MobileOrderBar />

      <AnimatePresence>
        {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
      </AnimatePresence>
    </Page>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 650], [0, 90]);

  return (
    <section className="hero-section">
      <motion.img
        style={{ y: imageY }}
        className="hero-image"
        src={heroImage}
        alt="Signature Noodle Plus noodles"
        fetchPriority="high"
      />
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="container hero-content">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="hero-kicker"><span /> PAN-ASIAN CUISINE · BANER, PUNE</div>
          <h1 className="hero-title">Pan-Asian flavour,<br /><em>perfected in Baner.</em></h1>
          <p className="hero-copy">
            A 4.6★ neighbourhood favourite, proudly women-owned and built around the craft of wok-fresh dumplings, noodles, rice and more.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary btn-large">View Menu <ArrowRight size={17} /></Link>
            <a href={links.district} target="_blank" rel="noreferrer" className="btn btn-outline btn-large">Reserve a Table <ExternalLink size={16} /></a>
            <a href={links.zomato} target="_blank" rel="noreferrer" className="btn btn-ghost btn-large">Order Now</a>
          </div>
          <div className="hero-badges">
            <RatingPill />
            <div className="rating-pill"><Heart size={15} /> Women-Owned Business</div>
            <div className="rating-pill"><MapPin size={15} /> Plenty of Parking</div>
          </div>
        </motion.div>
      </div>
      <div className="hero-scroll">SCROLL TO EXPLORE <span /></div>
    </section>
  );
}

export function HappyHours() {
  return (
    <section className="happy-section">
      <div className="container happy-grid">
        <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="eyebrow">DAILY · 1 PM — 6 PM</div>
          <h2 className="display-heading">Happy hours,<br /><em>single-person style.</em></h2>
          <p>Pick a noodle or rice base, add a semi-gravy starter, then level up with momo and a cold drink.</p>
          <Link to="/menu#happy-hours" className="btn btn-light">See Combo Details <ArrowRight size={16} /></Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="combo-card">
          <div className="combo-top"><span>HAPPY HOURS COMBO</span><span>FOR ONE</span></div>
          {happyHours.map((item) => (
            <div className="combo-row" key={item.title}>
              <div>{item.title}</div>
              <div className="combo-prices"><span>Veg ₹{item.prices[0]}</span><span>Paneer ₹{item.prices[1]}</span><span>Chicken ₹{item.prices[2]}</span></div>
            </div>
          ))}
          <div className="combo-note">No sharing · ₹100 extra for sharing. Starter: Manchurian / Paneer Chilly / Chicken Chilly. Momo: Veg / Chicken.</div>
        </motion.div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section className="section instagram-section">
      <div className="container">
        <div className="instagram-head">
          <div>
            <div className="eyebrow">FOLLOW THE FLAVOUR</div>
            <h2 className="display-heading">@noodlepluspune</h2>
            <p>Food, tables, noodles and the occasional behind-the-scenes moment.</p>
          </div>
          <a href={links.instagram} target="_blank" rel="noreferrer" className="btn btn-outline"><Instagram size={17} /> Follow us</a>
        </div>
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="instagram-grid"
        >
          {gallery.map((item) => <a href={links.instagram} target="_blank" rel="noreferrer" key={item.src}><ImageCard {...item} /></a>)}
        </motion.div>
      </div>
    </section>
  );
}

export function MenuPage() {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category') || 'All';
  const [tab, setTab] = useState('food');
  const [diet, setDiet] = useState('all');
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState('');

  const categories = ['All', ...menuSections.map((section) => section.category)];

  const visibleSections = useMemo(() => {
    if (tab === 'beverages') return [];

    return menuSections
      .filter((section) => category === 'All' || section.category === category)
      .map((section) => ({
        ...section,
        items: section.items.filter(([name, description, price, type]) => {
          const matchesDiet = diet === 'all' || type === diet;
          const haystack = `${name} ${description}`.toLowerCase();
          return matchesDiet && haystack.includes(search.toLowerCase().trim());
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [category, diet, search, tab]);

  return (
    <Page>
      <div className="page-top-space" />
      <section className="menu-hero">
        <div className="container menu-hero-grid">
          <div>
            <div className="eyebrow">THE FULL MENU</div>
            <h1 className="display-heading">Wok, steam,<br /><em>repeat.</em></h1>
            <p>Explore our full Pan-Asian menu — wok-tossed noodles, steamed dumplings, sizzling appetizers, soups and more.</p>
          </div>
          <img src="/images/menu/menu-05.jpg" alt="Noodle Plus menu noodles" />
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <div className="menu-toolbar">
            <div className="main-tabs">
              <button className={tab === 'food' ? 'tab active' : 'tab'} onClick={() => setTab('food')}>FOOD</button>
              <button className={tab === 'beverages' ? 'tab active' : 'tab'} onClick={() => setTab('beverages')}>BEVERAGES</button>
            </div>
            <SearchBox value={search} onChange={setSearch} />
          </div>

          {tab === 'food' ? (
            <>
              <div className="menu-filter-row">
                <div className="diet-filters">
                  <button className={`filter-btn ${diet === 'all' ? 'active' : ''}`} onClick={() => setDiet('all')}>ALL</button>
                  <button className={`filter-btn ${diet === 'veg' ? 'active' : ''}`} onClick={() => setDiet('veg')}><Leaf size={14} /> VEG</button>
                  <button className={`filter-btn ${diet === 'nonveg' ? 'active' : ''}`} onClick={() => setDiet('nonveg')}><Flame size={14} /> NON-VEG</button>
                </div>
                <div className="category-scroller">
                  {categories.map((item) => (
                    <button key={item} className={`chip-btn ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>{item}</button>
                  ))}
                </div>
              </div>

              <div className="menu-results">
                {visibleSections.length === 0 ? (
                  <div className="empty-menu"><Search size={24} /><h3>No dishes found.</h3><p>Try another search or reset the filters.</p><button className="btn btn-light" onClick={() => { setSearch(''); setDiet('all'); setCategory('All'); }}>Reset Menu</button></div>
                ) : visibleSections.map((section) => <MenuSection key={section.category} section={section} />)}
              </div>
            </>
          ) : (
            <Beverages />
          )}
        </div>
      </section>

      <section id="happy-hours" className="section section-cream menu-combo-section">
        <div className="container">
          <SectionHeading kicker="1 PM — 6 PM · DAILY" title="Happy Hours Combo" text="Single-person combos from the restaurant's supplied menu card." />
          <div className="happy-menu-card">
            <div className="happy-columns"><span>COMBO</span><span>VEG</span><span>PANEER</span><span>CHICKEN</span></div>
            {happyHours.map((item) => (
              <div className="happy-menu-row" key={item.title}>
                <strong>{item.title}</strong>
                <span>₹{item.prices[0]}</span><span>₹{item.prices[1]}</span><span>₹{item.prices[2]}</span>
              </div>
            ))}
            <div className="happy-foot">Semi-gravy starter: Manchurian / Paneer Chilly / Chicken Chilli · Momo: Veg / Chicken · No sharing (₹100 extra for sharing)</div>
          </div>
        </div>
      </section>

      <section className="section menu-cta">
        <div className="container menu-cta-card">
          <div><div className="eyebrow">CRAVING THIS?</div><h2 className="display-heading">Take it to your table.</h2></div>
          <div className="menu-cta-actions">
            <a href={links.zomato} target="_blank" rel="noreferrer" className="btn btn-primary">Order on Zomato <ExternalLink size={16} /></a>
            <a href={links.swiggy} target="_blank" rel="noreferrer" className="btn btn-outline">Order on Swiggy <ExternalLink size={16} /></a>
            <a href={links.map} target="_blank" rel="noreferrer" className="btn btn-light">Get Directions <MapPin size={16} /></a>
          </div>
        </div>
      </section>
      <Footer />
      <MobileOrderBar />
    </Page>
  );
}

function MenuSection({ section }) {
  return (
    <motion.section initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} className="menu-category">
      <div className="menu-category-head">
        <div>
          <div className="eyebrow">CATEGORY</div>
          <h2>{section.category}</h2>
          {section.variants && <p>{section.variants}</p>}
        </div>
        <img src={section.image} alt="" loading="lazy" />
      </div>
      <div className="menu-items">
        {section.items.map(([name, description, price, type, variants]) => (
          <motion.article key={name} className="menu-item" whileHover={{ y: -3 }}>
            <div className="menu-item-icon"><DietIcon type={type} /></div>
            <div className="menu-item-copy">
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
            <div className="menu-price">
              <strong>₹{price}</strong>
              {variants?.length > 0 && <small>₹{variants.join(' / ₹')}</small>}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Beverages() {
  return (
    <div className="beverage-layout">
      <div className="beverage-image"><img src="/images/menu/menu-08.jpg" alt="Noodle Plus desserts and beverages" /></div>
      <div className="beverage-list">
        <div className="eyebrow">DESSERTS & BEVERAGES</div>
        {beverages.map(([name, description, price, type]) => (
          <div className="beverage-row" key={name}>
            <div><span className="beverage-type">{type === 'dessert' ? 'DESSERT' : 'BEVERAGE'}</span><h3>{name}</h3><p>{description}</p></div>
            <strong>{price === null ? '—' : `₹${price}`}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <Page>
      <div className="page-top-space" />
      <section className="about-hero">
        <img src="/images/normal/normal-03.jpg" alt="Noodle Plus restaurant interior" />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <div className="eyebrow">OUR STORY · BANER</div>
          <h1 className="display-heading">Pan-Asian passion,<br /><em>homegrown in Baner.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container about-story-grid">
          <SectionHeading kicker="OUR STORY" title="A neighbourhood kitchen with a big wok." />
          <div className="story-copy">
            <p>Noodle Plus is a proudly women-owned Pan-Asian kitchen in Baner, Pune — a casual, trendy place designed to feel easy from the first hello to the last bite.</p>
            <p>The kitchen focuses on wok-fresh dumplings, noodles, rice, soups and saucy plates. The food is familiar enough to comfort, bold enough to excite, and built for a table that can change shape from a solo lunch to a family dinner.</p>
            <p>With a 4.6★ rating from 350+ guests, Noodle Plus has become a neighbourhood choice for lunch, dinner, groups and those very specific noodle cravings.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading kicker="WHAT MAKES US DIFFERENT" title="The details that make the table feel right." />
          <div className="difference-grid">
            {[
              [Heart, 'Women-Owned & Proud', 'Independent, welcoming and homegrown.'],
              [Flame, 'Fresh Wok-Tossed Cooking', 'Aromatic plates made hot and served hot.'],
              [Users, 'Family & Group Friendly', 'A relaxed room for shared meals and catch-ups.'],
              [CheckCircle2, 'Warm Casual-Trendy Vibe', 'Easygoing energy without losing the polish.'],
            ].map(([Icon, title, text]) => (
              <motion.div key={title} className="difference-card" whileHover={{ y: -5 }}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading kicker="GOOD TO KNOW" title="Built for real-life dining." />
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cream-cta">
            <div><div className="eyebrow dark">COME TASTE THE CRAFT</div><h2 className="display-heading">Your table is waiting.</h2></div>
            <div className="cta-row"><Link to="/menu" className="btn btn-dark">View Menu <ArrowRight size={16} /></Link><a href={links.map} target="_blank" rel="noreferrer" className="btn btn-light-outline">Get Directions <MapPin size={16} /></a></div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileOrderBar />
    </Page>
  );
}

export function Visit() {
  return (
    <Page>
      <div className="page-top-space" />
      <section className="visit-intro section">
        <div className="container">
          <div className="eyebrow">VISIT US</div>
          <h1 className="display-heading">Find us in<br /><em>Baner, Pune.</em></h1>
          <p>Shop No. C9, Sai Heritage, Aundh–Baner Link Road, Shambhu Vihar Society, Baner, Pune, Maharashtra 411045</p>
        </div>
      </section>

      <section className="map-wrap">
        <div className="container">
          <div className="map-card">
            <iframe title="Noodle Plus location map" src="https://www.google.com/maps?q=18.5653237,73.8013186&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container info-grid">
          <InfoCard icon={MapPin} title="Address">
            <a href={links.map} target="_blank" rel="noreferrer">{restaurant.address}</a>
          </InfoCard>
          <InfoCard icon={Phone} title="Call us">
            <a href={links.phone}>{restaurant.phone}</a>
            <p>{restaurant.hours}</p>
          </InfoCard>
          <InfoCard icon={Star} title="Good to know">
            <p>{restaurant.priceRange}</p>
            <p>4.6★ · {restaurant.reviews} Google reviews</p>
          </InfoCard>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container visit-actions">
          <a href={links.map} target="_blank" rel="noreferrer" className="btn btn-primary">Get Directions <MapPin size={16} /></a>
          <a href={links.phone} className="btn btn-outline">Call Us Now <Phone size={16} /></a>
          <a href={links.district} target="_blank" rel="noreferrer" className="btn btn-outline">Reserve a Table <ExternalLink size={16} /></a>
          <a href={links.zomato} target="_blank" rel="noreferrer" className="btn btn-soft">Order Online <ExternalLink size={16} /></a>
        </div>
        <div className="container service-line">Dine-in · Takeaway · Kerbside Pickup · No-Contact Delivery · Catering · Plenty of Parking</div>
      </section>

      <InstagramSection />
      <Footer />
      <MobileOrderBar />
    </Page>
  );
}

export function AuthPage() {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo"><img src="/images/logo.png" alt="Noodle Plus" /></div>
          <div className="eyebrow">NOODLE PLUS CLUB</div>
          <h1 className="display-heading">Welcome back.</h1>
          <p>Sign in to keep your restaurant preferences handy.</p>
          <AuthForm onSuccess={() => navigate('/')} />
        </div>
      </div>
      <Footer />
    </Page>
  );
}

export function AuthModal({ onClose }) {
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal-card" initial={{ opacity: 0, y: 25, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 25 }}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><span>×</span></button>
        <div className="auth-logo"><img src="/images/logo.png" alt="Noodle Plus" /></div>
        <div className="eyebrow">NOODLE PLUS CLUB</div>
        <h2 className="display-heading">Your table, your way.</h2>
        <AuthForm onSuccess={onClose} />
      </motion.div>
    </motion.div>
  );
}

function AuthForm({ onSuccess }) {
  const [mode, setMode] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const requireFirebase = () => {
    if (!firebaseConfigured || !auth) {
      throw new Error('Firebase is not configured. Create a .env file from .env.example and add your Firebase Web App credentials.');
    }
  };

  const handleGoogle = async () => {
    try {
      requireFirebase();
      setBusy(true);
      setError('');
      await signInWithPopup(auth, googleProvider);
      onSuccess();
    } catch (err) {
      setError(getAuthError(err));
    } finally {
      setBusy(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      requireFirebase();
      setBusy(true);
      setError('');

      if (mode === 'signup') {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        if (name.trim()) {
          await updateProfile(credential.user, { displayName: name.trim() });
        }
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      onSuccess();
    } catch (err) {
      setError(getAuthError(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-form">
      <button className="google-btn" onClick={handleGoogle} disabled={busy}>
        <span>G</span> Continue with Google
      </button>

      <div className="auth-divider"><span /> OR <span /></div>

      <form onSubmit={handleSubmit}>
        {mode === 'signup' && <input className="input" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />}
        <input className="input" type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="input" type="password" placeholder="Password" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn btn-primary auth-submit" disabled={busy}>
          {busy ? 'Please wait…' : mode === 'signup' ? 'Create Account' : 'Sign In'}
          <ArrowRight size={16} />
        </button>
      </form>

      {error && <div className="auth-error">{error}</div>}

      <p className="auth-switch">
        {mode === 'signup' ? 'Already have an account?' : 'New to Noodle Plus?'}{' '}
        <button onClick={() => { setMode(mode === 'signup' ? 'signin' : 'signup'); setError(''); }}>
          {mode === 'signup' ? 'Sign in' : 'Create one'}
        </button>
      </p>

      <div className="auth-security"><ShieldCheck size={15} /> Firebase Authentication secures your account.</div>
    </div>
  );
}

function getAuthError(error) {
  const messages = {
    'auth/invalid-credential': 'The email or password is incorrect.',
    'auth/email-already-in-use': 'An account already exists with this email.',
    'auth/weak-password': 'Use a stronger password with at least 6 characters.',
    'auth/popup-closed-by-user': 'Google sign-in was closed before completion.',
    'auth/popup-blocked': 'Your browser blocked the Google sign-in popup. Allow popups and try again.',
  };

  return messages[error?.code] || error?.message || 'Authentication failed. Please try again.';
}
