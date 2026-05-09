export function Home() {
  return (
    <div className="flex flex-col">
      {/* Top bar / brand */}
      <header className="bg-white border-b border-warm-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            {/* Sun-burst mark echoing the brightwell wordmark icon on the cartons */}
            <span aria-hidden="true" className="relative w-9 h-9">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-primary-500 shadow-md" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-lg">✦</span>
            </span>
            <span
              className="text-2xl tracking-[0.04em] lowercase leading-none"
              style={{ fontFamily: '"Bebas Neue", "Inter", system-ui, sans-serif' }}
            >
              <span className="text-accent-600">bright</span>
              <span className="text-primary-600">well</span>
              <span className="text-warm-700 ml-2 uppercase tracking-[0.15em] text-base align-middle">
                Pharma
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-warm-700">
            <a href="#about" className="hover:text-primary-700 transition-colors">About</a>
            <a href="#products" className="hover:text-primary-700 transition-colors">Products</a>
            <a href="#therapies" className="hover:text-primary-700 transition-colors">Therapies</a>
            <a href="#quality" className="hover:text-primary-700 transition-colors">Quality</a>
            <a href="#contact" className="hover:text-primary-700 transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold tracking-[0.15em] uppercase transition-all shadow"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* Hero — red wave layout echoing the carton design */}
      <section
        id="top"
        className="relative overflow-hidden bg-white"
      >
        {/* Decorative red wave inspired by the MithGlim cartons */}
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 w-full h-full text-primary-600"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="brightwell-wave" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
          <path
            fill="url(#brightwell-wave)"
            d="M0,0 L1440,0 L1440,360 C1180,470 940,300 700,360 C460,420 240,540 0,460 Z"
          />
          <path
            fill="#f97316"
            opacity="0.85"
            d="M0,0 L1440,0 L1440,260 C1200,340 960,200 720,260 C480,320 240,400 0,340 Z"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[480px] lg:min-h-[560px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full py-16 lg:py-20">
            <div className="max-w-xl text-white">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-accent-100 mb-3 uppercase">
                Research · Quality · Care
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.05] mb-4 drop-shadow-sm">
                Trusted Medicines
                <br />
                For Healthier Lives
              </h1>
              <p className="text-base lg:text-lg text-white/90 mb-6 leading-relaxed">
                Brightwell Pharma is a research-driven pharmaceutical company
                developing high-quality medicines across cardiology, diabetology,
                respiratory care, and general wellness.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-accent-50 text-primary-700 text-sm font-bold tracking-[0.15em] uppercase ring-2 ring-white/50 transition-all shadow-lg"
                >
                  Our Products
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-700/30 hover:bg-primary-700/50 text-white text-sm font-bold tracking-[0.15em] uppercase ring-2 ring-white/40 hover:ring-white/70 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-end justify-end">
              {/* Wordmark card — mirrors the carton brand block */}
              <div className="bg-white rounded-2xl shadow-2xl ring-1 ring-warm-200 p-7 max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span aria-hidden="true" className="text-2xl text-accent-500">✦</span>
                  <p
                    className="text-4xl tracking-[0.02em] lowercase leading-none"
                    style={{ fontFamily: '"Bebas Neue", "Inter", system-ui, sans-serif' }}
                  >
                    <span className="text-accent-600">bright</span>
                    <span className="text-primary-600">well</span>
                  </p>
                </div>
                <div className="h-0.5 w-20 bg-primary-500 rounded-full mb-3" />
                <p className="text-2xl font-extrabold uppercase tracking-tight text-warm-900 leading-none">
                  Pharma
                </p>
                <p className="text-xs font-light uppercase tracking-[0.3em] text-warm-500 mt-2">
                  Science · Wellness · Care
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {['Cardiology', 'Diabetology', 'Respiratory', 'Wellness'].map((label) => (
                    <li key={label}>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase bg-primary-50 text-primary-700 ring-1 ring-primary-200">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '120+', label: 'Products Marketed' },
            { value: '15', label: 'Therapeutic Areas' },
            { value: '40+', label: 'Countries Served' },
            { value: 'GMP', label: 'WHO-Certified Plant' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-primary-700">{value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-warm-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-primary-700 uppercase mb-2">
              About Brightwell
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-900 mb-4">
              Built on science. Driven by patient outcomes.
            </h2>
            <div className="h-0.5 w-16 bg-accent-500 rounded-full mb-6" />
            <p className="text-warm-700 leading-relaxed mb-4">
              Brightwell Pharma combines rigorous scientific research with modern
              manufacturing to deliver medicines that are safe, effective, and
              accessible. From cardiovascular to chronic-care therapies, every
              product is built to international quality standards.
            </p>
            <p className="text-warm-700 leading-relaxed">
              We work with hospitals, clinicians, and pharmacy partners across
              India and globally — helping millions of patients live healthier,
              longer lives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🧪', title: 'R&D First', body: 'In-house formulation labs and partnerships with leading research institutes.' },
              { icon: '🏭', title: 'GMP Facility', body: 'WHO-GMP certified manufacturing plant with stringent quality controls.' },
              { icon: '🌍', title: 'Global Reach', body: 'Exports to 40+ countries across Asia, Africa, and Latin America.' },
              { icon: '💊', title: 'Affordable Care', body: 'High-quality generics and branded medicines priced for accessibility.' },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border-2 border-primary-100 bg-white p-5 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-2xl mb-3">
                  {icon}
                </div>
                <h3 className="text-base font-bold text-warm-900 mb-1">{title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products — the brands shown on the cartons */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-primary-700 uppercase mb-2">
              Featured Brands
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-900">
              A growing portfolio of trusted medicines
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-accent-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'MithGlim-M1 / M2',
                composition: 'Glimepiride + Metformin Hydrochloride (PR) Tablets',
                tint: 'from-primary-500 to-primary-700',
                pill: 'Diabetology',
              },
              {
                name: 'MithGlim-MV1 / MV2',
                composition: 'Voglibose, Glimepiride & Metformin Hydrochloride SR Tablets',
                tint: 'from-sky-500 to-sky-700',
                pill: 'Diabetology',
              },
              {
                name: 'MithTelme-AMH',
                composition: 'Telmisartan, Amlodipine & Hydrochlorothiazide Tablets',
                tint: 'from-primary-400 to-accent-500',
                pill: 'Cardiology',
              },
              {
                name: 'MithTelme-CL 40',
                composition: 'Telmisartan & Cilnidipine Tablets',
                tint: 'from-accent-500 to-primary-600',
                pill: 'Cardiology',
              },
              {
                name: 'VIVI-D3',
                composition: 'Cholecalciferol Soft Gelatin Capsules USP 60,000 IU',
                tint: 'from-accent-400 to-accent-600',
                pill: 'Wellness',
              },
              {
                name: 'DAPATHANQ-VD 10/100',
                composition: 'Dapagliflozin & Vildagliptin Sustained Release Tablets',
                tint: 'from-primary-600 to-accent-600',
                pill: 'Diabetology',
              },
            ].map(({ name, composition, tint, pill }) => (
              <article
                key={name}
                className="rounded-2xl border border-warm-200 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className={`h-24 bg-gradient-to-r ${tint} relative`}>
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: "radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
                  }} />
                  <span className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-white/90 text-primary-700">
                    {pill}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-warm-900 tracking-tight">
                    {name}
                  </h3>
                  <p className="text-sm text-warm-600 mt-1.5 leading-relaxed">
                    {composition}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic areas */}
      <section id="therapies" className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-primary-700 uppercase mb-2">
              Therapeutic Areas
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-900">
              Medicines across the conditions that matter most
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-accent-500 rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { label: 'Cardiology', icon: '❤️', tint: 'from-primary-200 to-primary-400' },
              { label: 'Diabetology', icon: '🩸', tint: 'from-accent-200 to-accent-400' },
              { label: 'Respiratory', icon: '🫁', tint: 'from-sky-200 to-sky-400' },
              { label: 'Wellness', icon: '🌿', tint: 'from-emerald-200 to-emerald-400' },
              { label: 'Pain Care', icon: '💊', tint: 'from-violet-200 to-violet-400' },
            ].map(({ label, icon, tint }) => (
              <div key={label} className="group block text-center">
                <div className={`relative mx-auto aspect-square w-24 sm:w-28 rounded-full bg-gradient-to-br ${tint} ring-1 ring-warm-200 group-hover:ring-primary-400 transition flex items-center justify-center`}>
                  <span aria-hidden="true" className="text-4xl sm:text-5xl drop-shadow">
                    {icon}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-warm-900 group-hover:text-primary-700 transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-primary-700 uppercase mb-2">
              Quality & Compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-warm-900">
              Quality you can trust at every step
            </h2>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-accent-500 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'WHO-GMP', body: 'Manufacturing aligned with WHO Good Manufacturing Practices.' },
              { title: 'ISO 9001', body: 'Quality management systems certified to ISO 9001 standards.' },
              { title: 'ISO 14001', body: 'Environmental responsibility built into every facility.' },
              { title: 'Pharmacovigilance', body: 'Continuous post-market safety monitoring on all products.' },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-warm-50 border border-warm-200 p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent-600 mb-2">
                  Certified
                </p>
                <h3 className="text-lg font-bold text-warm-900 mb-2">{title}</h3>
                <p className="text-sm text-warm-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Partner with Brightwell Pharma
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Whether you're a hospital, distributor, or pharmacy chain — let's
            talk about how we can help you serve your patients better.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@brightwellpharma.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-accent-50 text-primary-700 text-sm font-bold tracking-[0.15em] uppercase transition-all shadow-lg"
            >
              hello@brightwellpharma.com
            </a>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-[0.15em] uppercase ring-2 ring-white/30 hover:ring-white/60 transition-all"
            >
              +91 00 0000 0000
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-900 text-warm-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm">
            © {new Date().getFullYear()} Brightwell Pharma. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em]">
            Science · Wellness · Care
          </p>
        </div>
      </footer>
    </div>
  );
}
