import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { siteConfig } from '../../data/site_config';
import { navigationItems } from '../../data/nav_items';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (ancora: string) => {
        const element = document.getElementById(ancora);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-foreground">{siteConfig.nome}</div>

                    <nav className="hidden md:flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <Button
                                key={item.ancora}
                                variant="ghost"
                                onClick={() => scrollToSection(item.ancora)}
                                className="text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-transparent px-2 h-auto"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>

                    <div className="relative md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-foreground hover:bg-transparent"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="relative size-6">
                                <Menu
                                    size={24}
                                    className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                                />
                                <X
                                    size={24}
                                    className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                                />
                            </div>
                        </Button>

                        {isMobileMenuOpen && (
                            <nav className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-background shadow-lg z-50 flex flex-col overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                                {navigationItems.map((item) => (
                                    <button
                                        key={item.ancora}
                                        onClick={() => scrollToSection(item.ancora)}
                                        className="text-left text-sm font-medium text-muted-foreground px-4 py-3 hover:bg-muted hover:text-foreground transition-colors duration-150 w-full"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
