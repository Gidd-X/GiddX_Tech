'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary-foreground hover:text-accent transition-colors">
          <BarChart3 className="h-8 w-8 text-accent" />
          DataFortress
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {NAV_LINKS.map((item) => (
            <Button key={item.label} variant="ghost" asChild
              className={cn(
                "text-primary-foreground hover:bg-accent/20 hover:text-accent",
                pathname === item.href && "bg-accent/30 text-accent font-semibold"
              )}
            >
              <Link href={item.href}>
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-primary-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-0">
              <div className="flex flex-col space-y-2 p-6">
                <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary-foreground mb-6" onClick={() => setIsMobileMenuOpen(false)}>
                  <BarChart3 className="h-8 w-8 text-accent" />
                  DataFortress
                </Link>
                {NAV_LINKS.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-start text-lg py-3 text-primary-foreground hover:bg-accent/20 hover:text-accent",
                      pathname === item.href && "bg-accent/30 text-accent font-semibold"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>
                      {item.icon && <item.icon className="mr-3 h-5 w-5" />}
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
