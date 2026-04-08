import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Supplier Data Collection',
    description: 'Send unique submission links to suppliers. They fill a simple form — no account needed. Data flows directly into your dashboard.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Emissions Calculation',
    description: 'Automatic CO₂ calculations based on electricity usage, fuel consumption, and transport distance using industry-standard formulas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'PDF Report Generation',
    description: 'Generate professional PDF reports with supplier breakdowns, total emissions, and company summary — ready for auditors and stakeholders.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: 'Real-time Dashboard',
    description: 'Track submission status across all suppliers at a glance. See total emissions, completed vs pending, and key insights in one view.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Authentication',
    description: 'Enterprise-grade Firebase authentication. Your data is protected, access is controlled, and supplier links are unique and tamper-proof.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Built for Scale',
    description: 'Modular architecture ready for future expansion — BRSR/CBAM compliance, AI insights, supplier accounts, and third-party integrations.',
  },
]

const stats = [
  { value: 'Scope 3', label: 'Emissions Tracking' },
  { value: '100%', label: 'Automated Calculation' },
  { value: 'PDF', label: 'Instant Reports' },
  { value: 'No-login', label: 'Supplier Forms' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-900/50">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-lg text-white">CarbonFlow</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors font-medium">
            Sign In
          </Link>
          <Link to="/signup" className="px-4 py-2 text-sm bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-lg transition-all duration-200">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-brand-800/20 rounded-full blur-[80px]" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600/10 border border-brand-600/30 text-brand-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          Scope 3 Carbon Accounting Platform
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none max-w-4xl mb-6 animate-slide-up">
          Measure Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300">
            Supply Chain Emissions
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 animate-slide-up">
          CarbonFlow helps businesses collect carbon data from suppliers, calculate Scope 3 emissions automatically, and generate audit-ready reports — all in one platform.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
          <Link to="/signup" className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-900/40">
            Start Free Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link to="/login" className="btn-secondary text-base px-8 py-4">
            Sign In
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 max-w-3xl w-full">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-black text-white">{s.value}</span>
              <span className="text-sm text-slate-500 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="px-6 pb-24 flex justify-center">
        <div className="relative max-w-5xl w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-slate-950 pointer-events-none z-10 rounded-2xl" />
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl shadow-black/60">
            {/* Mock dashboard bar */}
            <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 h-6 bg-slate-800 rounded-md" />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[
                { label: 'Total Suppliers', value: '24', color: 'text-white' },
                { label: 'Completed', value: '18', color: 'text-brand-400' },
                { label: 'Total CO₂ (tonnes)', value: '4,821', color: 'text-yellow-400' },
              ].map(s => (
                <div key={s.label} className="bg-slate-800/60 rounded-xl p-4">
                  <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-800/60 rounded-xl p-4">
              <div className="h-2 bg-slate-700 rounded mb-3 w-32" />
              <div className="space-y-2">
                {['Acme Manufacturing', 'Global Logistics Co.', 'EcoSupply Ltd'].map((name, i) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand-600/30 border border-brand-600/50" />
                      <div className="text-sm text-slate-300">{name}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${i < 2 ? 'bg-brand-600/20 text-brand-400' : 'bg-yellow-600/20 text-yellow-400'}`}>
                      {i < 2 ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Everything you need for Scope 3</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A focused platform that solves the core challenge — getting supplier data and turning it into actionable emissions intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card group hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-brand-600/15 border border-brand-600/20 flex items-center justify-center text-brand-400 mb-5 group-hover:bg-brand-600/25 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How CarbonFlow Works</h2>
            <p className="text-slate-400 text-lg">Four steps from onboarding to your first emissions report.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Create your company account in seconds using email and password.' },
              { step: '02', title: 'Add Suppliers', desc: 'Add your suppliers by name and contact. Each gets a unique submission link.' },
              { step: '03', title: 'Collect Data', desc: 'Suppliers fill in electricity, fuel, and transport data on a simple form.' },
              { step: '04', title: 'Get Reports', desc: 'CO₂ is calculated automatically. Download your PDF report instantly.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-600/10 border border-brand-600/30 flex items-center justify-center text-brand-400 font-black text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to measure your impact?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Join companies already tracking and reducing their Scope 3 emissions with CarbonFlow.
          </p>
          <Link to="/signup" className="btn-primary text-base px-10 py-4 shadow-xl shadow-brand-900/40">
            Get Started Free
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-slate-800 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-white">CarbonFlow</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} CarbonFlow. Carbon Accounting Platform.</p>
      </footer>
    </div>
  )
}
