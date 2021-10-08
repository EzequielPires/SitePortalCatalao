import { useRouter } from "next/router";
import { Ajuda } from "../../components/pages/Suporte/Ajuda";
import { Anuncie } from "../../components/pages/Suporte/Anuncie";
import { Contato } from "../../components/pages/Suporte/Contato";
import { FAQ } from "../../components/pages/Suporte/FAQ";
import { TrabalheConosco } from "../../components/pages/Suporte/TrabalheConosco";

export default function Suporte() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className="py-4">
            {id === 'contato' ? <Contato /> : null}
            {id === 'faq' ? <FAQ /> : null}
            {id === 'trabalhe-conosco' ? <TrabalheConosco /> : null}
            {id === 'ajuda' ? <Ajuda /> : null}
            {id === 'anuncie' ? <Anuncie /> : null}
        </div>
    );
}