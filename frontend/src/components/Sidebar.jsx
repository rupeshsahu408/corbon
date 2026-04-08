import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const companyNavItems = [
  {
    to: '/financial-impact',
    label: 'Money & risk',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    to: '/pro/dashboard',
    label: 'PRO Dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    to: '/suppliers',
    label: 'Suppliers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    to: '/pro/suppliers',
    label: 'PRO Suppliers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
  },
  {
    to: '/supplier-marketplace',
    label: 'Marketplace',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M6 7l1 12h10l1-12M9 7V5a3 3 0 116 0v2" />
      </svg>
    ),
  },
  {
    to: '/data-entry',
    label: 'Data Entry',
    badge: '1+2',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    to: '/insights',
    label: 'Insights',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    to: '/reports',
    label: 'Reports',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    to: '/enterprise',
    label: 'Enterprise',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01" />
      </svg>
    ),
  },
]

const supplierNavItems = [
  {
    to: '/supplier-dashboard',
    label: 'Supplier Dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    to: '/insights',
    label: 'Insights',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const { user, roles, logout } = useAuth()
  const navigate = useNavigate()
  const hasCompanyRole = roles?.some((r) => r.role === 'company')
  const hasSupplierRole = roles?.some((r) => r.role === 'supplier')
  const navItems = hasCompanyRole ? companyNavItems : supplierNavItems

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  return (
    <aside className="w-64 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-900/50">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-white text-lg">CarbonFlow</span>
            <p className="text-xs text-slate-500 leading-none mt-0.5">Carbon intelligence workspace</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 leading-none">
                S{item.badge}
              </span>
            )}
          </NavLink>
        ))}
        {hasCompanyRole && hasSupplierRole && (
          <NavLink to="/supplier-dashboard" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
            <span className="flex-1">Supplier View</span>
          </NavLink>
        )}
      </nav>

      {/* User section */}
      <div className="px-3 py-4 border-t border-slate-800">
        {hasCompanyRole && hasSupplierRole && (
          <div className="mb-3 p-2 rounded-xl border border-slate-800 bg-slate-900">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-2 px-2">Switch role</p>
            <div className="grid grid-cols-2 gap-2">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `text-xs text-center px-2 py-2 rounded-lg border transition-colors ${isActive ? 'border-brand-500 text-brand-300 bg-brand-900/20' : 'border-slate-700 text-slate-400 hover:text-white'}`}
              >
                Company
              </NavLink>
              <NavLink
                to="/supplier-dashboard"
                className={({ isActive }) => `text-xs text-center px-2 py-2 rounded-lg border transition-colors ${isActive ? 'border-brand-500 text-brand-300 bg-brand-900/20' : 'border-slate-700 text-slate-400 hover:text-white'}`}
              >
                Supplier
              </NavLink>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 mb-2">
          <div className="w-8 h-8 rounded-full bg-brand-600/30 border border-brand-600/50 flex items-center justify-center text-brand-400 text-sm font-bold shrink-0">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-slate-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-950/30 transition-all duration-200 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </aside>
  )
}
