import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
    label: string;
    ancora: string;
}

import { Button } from '../ui/button';

const navigationItems: NavigationItem[] = [
    { label: "Projetos", ancora: "projetos" },
    { label: "Experiência", ancora: "experiencia" },
    { label: "Formação", ancora: "formacao" },
    { label: "Contato", ancora: "contato" },
];

export default function Navbar() {
    const nome = "Gustavo Peder";
    const itens = navigationItems;
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
                    <div className="text-xl font-bold text-foreground">{nome}</div>

                    <nav className="hidden md:flex items-center gap-8">
                        {itens.map((item) => (
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

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden text-foreground hover:bg-transparent"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 flex flex-col gap-2">
                        {itens.map((item) => (
                            <Button
                                key={item.ancora}
                                variant="ghost"
                                onClick={() => scrollToSection(item.ancora)}
                                className="justify-start text-left text-muted-foreground hover:text-primary transition-colors py-2 bg-transparent hover:bg-transparent w-full h-auto px-0"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
