import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const companyNavItems = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    group: 'Overview',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    to: '/pro/dashboard',
    label: 'PRO Dashboard',
    group: 'Overview',
    badge: 'PRO',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    to: '/financial-impact',
    label: 'Money & Risk',
    group: 'Overview',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    to: '/suppliers',
    label: 'Suppliers',
    group: 'Supply Chain',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    to: '/pro/suppliers',
    label: 'PRO Suppliers',
    group: 'Supply Chain',
    badge: 'PRO',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8h10M7 12h10M7 16h6" />
      </svg>
    ),
  },
  {
    to: '/supplier-marketplace',
    label: 'Marketplace',
    group: 'Supply Chain',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M6 7l1 12h10l1-12M9 7V5a3 3 0 116 0v2" />
      </svg>
    ),
  },
  {
    to: '/data-entry',
    label: 'Data Entry',
    group: 'Intelligence',
    badge: 'S1+2',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    to: '/insights',
    label: 'Insights',
    group: 'Intelligence',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    to: '/reports',
    label: 'Reports',
    group: 'Intelligence',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    to: '/enterprise',
    label: 'Enterprise',
    group: 'Settings',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01" />
      </svg>
    ),
  },
]

const supplierNavItems = [
  {
    to: '/supplier-dashboard',
    label: 'Supplier Dashboard',
    group: 'Overview',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    to: '/insights',
    label: 'Insights',
    group: 'Intelligence',
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

function NavGroup({ label, items, hasCompanyRole, hasSupplierRole }) {
  return (
    <div className="mb-1">
      <p className="px-3 mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600 select-none">{label}</p>
      {items.map(item => (
        <NavItem key={item.to} item={item} />
      ))}
    </div>
  )
}

function NavItem({ item }) {
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl mx-1 mb-0.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'text-white'
            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="activeNav"
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(20,184,166,0.12) 100%)',
                border: '1px solid rgba(16,185,129,0.25)',
              }}
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 40 }}
            />
          )}
          <div className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-lg transition-all duration-200 ${
            isActive
              ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/40'
              : 'text-slate-500 group-hover:text-slate-300'
          }`}>
            {item.icon}
          </div>
          <span className="relative z-10 flex-1 truncate">{item.label}</span>
          {item.badge && (
            <span className={`relative z-10 text-[9px] font-black px-1.5 py-0.5 rounded-md leading-none ${
              isActive
                ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/30'
                : 'bg-slate-800 text-slate-500 border border-slate-700'
            }`}>
              {item.badge}
            </span>
          )}
          {isActive && (
            <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          )}
        </>
      )}
    </NavLink>
  )
}

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

  const groups = navItems.reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  }, {})

  const userInitial = user?.email?.[0]?.toUpperCase() || 'U'

  return (
    <aside
      className="w-64 min-h-screen flex flex-col relative"
      style={{
        background: 'linear-gradient(180deg, #080e1a 0%, #060c16 100%)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Subtle top glow */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(16,185,129,0.08) 0%, transparent 70%)' }} />

      {/* Logo */}
      <div className="px-5 py-5 relative">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/50">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080e1a] shadow-lg shadow-emerald-400/50" />
          </div>
          <div>
            <span className="font-black text-white text-lg tracking-tight">CarbonFlow</span>
            <p className="text-[10px] text-slate-500 leading-none mt-0.5 font-medium">Carbon Intelligence</p>
          </div>
        </div>
        <div className="mt-4 h-px" style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.3) 0%, rgba(255,255,255,0.04) 60%, transparent 100%)' }} />
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 overflow-y-auto space-y-3">
        {Object.entries(groups).map(([group, items]) => (
          <NavGroup key={group} label={group} items={items} />
        ))}

        {hasCompanyRole && hasSupplierRole && (
          <div className="mb-1">
            <p className="px-3 mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">Supplier View</p>
            <NavItem item={{
              to: '/supplier-dashboard',
              label: 'Switch to Supplier',
              icon: (
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
            }} />
          </div>
        )}
      </nav>

      {/* Bottom section */}
      <div className="px-3 py-4 relative">
        <div className="h-px mb-3" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)' }} />

        {/* Role switcher */}
        {hasCompanyRole && hasSupplierRole && (
          <div className="mb-3 p-2 rounded-xl border border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <p className="text-[10px] uppercase tracking-wider text-slate-600 mb-2 px-1">Switch role</p>
            <div className="grid grid-cols-2 gap-1.5">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `text-xs text-center px-2 py-1.5 rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/15 text-emerald-300 border border-emerald-500/25'
                    : 'text-slate-500 hover:text-slate-300 border border-transparent hover:border-white/10'
                }`}
              >
                Company
              </NavLink>
              <NavLink
                to="/supplier-dashboard"
                className={({ isActive }) => `text-xs text-center px-2 py-1.5 rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/15 text-emerald-300 border border-emerald-500/25'
                    : 'text-slate-500 hover:text-slate-300 border border-transparent hover:border-white/10'
                }`}
              >
                Supplier
              </NavLink>
            </div>
          </div>
        )}

        {/* User card */}
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl mb-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-black shrink-0 shadow-md shadow-emerald-900/50">
            {userInitial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-slate-300 truncate font-medium">{user?.email}</p>
            <p className="text-[10px] text-slate-600 mt-0.5">{hasCompanyRole ? 'Company account' : 'Supplier account'}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-950/20 transition-all duration-200 text-sm font-medium group"
        >
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign out
        </button>
      </div>
    </aside>
  )
}
