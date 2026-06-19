import { siteConfig } from '../data/site_config';

export default function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="container mx-auto px-6 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {siteConfig.nome}</p>
            </div>
        </footer>
    );
}
