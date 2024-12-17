"use client"

import { usePathname } from 'next/navigation'
import { Sidebar } from "@/components/ui/sidebar"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAppRoute = pathname.startsWith('/dashboard') || 
                    pathname.startsWith('/earnings') || 
                    pathname.startsWith('/schedule') || 
                    pathname.startsWith('/servers') || 
                    pathname.startsWith('/settings')

  return (
    <div className="h-full relative">
      {isAppRoute && (
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
          <Sidebar />
        </div>
      )}
      <main className={isAppRoute ? "md:pl-72" : ""}>
        {children}
      </main>
    </div>
  )
} 