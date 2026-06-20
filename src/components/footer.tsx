import { siteConfig } from '../data/site_config';

const YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="container mx-auto px-6 text-center text-muted-foreground">
                <p>&copy; {YEAR} {siteConfig.nome}</p>
            </div>
        </footer>
    );
}
