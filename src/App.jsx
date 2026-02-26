const products = [
  {
    name: 'Daily Multivitamin',
    description: 'Complete daily support for energy, immunity, and focus.',
    price: 24,
    image:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Vitamin capsules in a bottle',
  },
  {
    name: 'Greens Boost Powder',
    description: 'Nutrient-rich greens blend for daily gut and immune support.',
    price: 29,
    image:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Healthy smoothie bowl',
  },
  {
    name: 'Omega-3 Softgels',
    description: 'Heart and brain support with high-purity EPA and DHA.',
    price: 19,
    image:
      'https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fish oil vitamin softgels',
  },
  {
    name: 'Healthy Lifestyle Kit',
    description: 'Starter bundle with vitamins, hydration bottle, and meal planner.',
    price: 49,
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fresh fruits and vegetables',
  },
];

const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 font-sans text-slate-800">
      <header className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-600 px-5 pb-[68px] pt-4 text-white">
        <nav className="page-container flex items-center justify-between">
          <p className="text-xl font-bold">
            <span className="sm:hidden">Neat &amp; Net</span>
            <span className="hidden sm:inline">Neat &amp; Net Healthy Living</span>
          </p>
          <div className="flex items-center gap-5">
            <a href="#products" className="top-nav-link">
              Shop
            </a>
            <a href="#contact" className="top-nav-link">
              Contact
            </a>
          </div>
        </nav>

        <div className="mx-auto mt-[52px] w-[min(780px,94%)] text-center">
          <p className="text-xs uppercase tracking-[1.5px] opacity-90">Healthy Living Store</p>
          <h1 className="my-[10px] text-[clamp(30px,5vw,48px)] font-bold">Fuel Your Day with Better Wellness Choices</h1>
          <p className="mx-auto mb-5 max-w-[700px] leading-relaxed">
            Discover premium vitamins, clean supplements, and healthy lifestyle picks curated for your daily routine.
          </p>
          <a
            href="#products"
            className="btn-light"
          >
            Shop Vitamins
          </a>
        </div>
      </header>

      <main>
        <section id="products" className="section-block">
          <h2 className="section-title">Merchandise</h2>
          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className="surface-card overflow-hidden">
                <img src={product.image} alt={product.alt} className="h-[180px] w-full object-cover" />
                <div className="p-[14px]">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="info-copy">{product.description}</p>
                  <p className="price-text">{formatCurrency(product.price)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block mb-[52px]">
          <h2 className="section-title">Why Neat &amp; Net Healthy Living?</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3 className="card-title">Clean Ingredients</h3>
              <p className="info-copy">No unnecessary fillers, just quality wellness support.</p>
            </div>
            <div className="info-card">
              <h3 className="card-title">Expert Selected</h3>
              <p className="info-copy">Products curated for modern healthy living routines.</p>
            </div>
            <div className="info-card">
              <h3 className="card-title">Fast Shipping</h3>
              <p className="info-copy">Quick delivery so you can stay on track without delays.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block mb-[52px]">
          <h2 className="section-title">Contacts</h2>
          <div className="surface-card border-transparent bg-transparent shadow-none p-5">
            <p className="info-copy">Reach out and stay updated through our social channels:</p>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              <a
                href="https://t.me/neathealth"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#229ED9" aria-hidden="true">
                  <path d="M21.4 3.2 2.9 10.3c-1.1.4-1.1 1.2-.2 1.5l4.7 1.5 1.8 5.7c.2.7.1 1 .9 1l2.7-2.6 5.6 4.1c1 .6 1.7.3 2-.9l3.3-15.5c.4-1.6-.6-2.3-2.3-1.9Zm-3.2 3.3-8.1 7.3-.3 3.4-1.3-4 9.7-8.4Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/neathealth"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.5-4.3 4.4V10H7v3h2.9v8h3.6Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/neathealth"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#instagramGradient)" strokeWidth="1.8" aria-hidden="true">
                  <defs>
                    <linearGradient id="instagramGradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#F58529" />
                      <stop offset="0.35" stopColor="#DD2A7B" />
                      <stop offset="0.7" stopColor="#8134AF" />
                      <stop offset="1" stopColor="#515BD4" />
                    </linearGradient>
                  </defs>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.7" r="1" fill="#DD2A7B" stroke="none" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@neathealth"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M13.9 4v8.9a3.3 3.3 0 1 1-2.4-3.1V7.4h-1.8a5.1 5.1 0 1 0 6 5V9.7c1 .8 2.2 1.2 3.5 1.2V9.1c-1.9 0-3.5-1.6-3.5-3.5H13.9Z" fill="#25F4EE" />
                  <path d="M14.4 4v9.3a3.3 3.3 0 1 1-2.4-3.1V7.7h-1.8a5.1 5.1 0 1 0 6 5V10c1 .8 2.2 1.2 3.5 1.2V9.4c-1.9 0-3.5-1.6-3.5-3.5H14.4Z" fill="#FE2C55" />
                  <path d="M14.1 4v9.1a3.3 3.3 0 1 1-2.4-3.1V7.5h-1.8a5.1 5.1 0 1 0 6 5V9.8c1 .8 2.2 1.2 3.5 1.2V9.2c-1.9 0-3.5-1.6-3.5-3.5H14.1Z" fill="#121212" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-950 px-5 py-5 text-center text-emerald-100">
        <p>© {new Date().getFullYear()} Neat &amp; Net Healthy Living. Live well every day.</p>
      </footer>
    </div>
  );
}