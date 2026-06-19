import Section from "./layout/section";
import ContactLinks from "./ui/contact_links";
import { contato } from "../data/contact_items";

export default function Contact() {
    return (
        <Section
            id={contato.id_secao}
            title={contato.titulo_secao}
            description={contato.texto_chamada}
        >
            <ContactLinks
                email={contato.email}
                telefone={contato.telefone}
                redes_sociais={contato.redes_sociais}
            />
        </Section>
    );
}
