import { useRouter } from "next/router";
import { PoliticaPrivacidade } from "../../components/pages/privacidade-e-termos/PoliticaPrivacidade";
import { TermosUso } from "../../components/pages/privacidade-e-termos/TermosUso";

export default function PrivacidadeETermos() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div className="py-4">
            {
                id === 'politica-de-privacidade' ? <PoliticaPrivacidade /> : null
            }
            {
                id === 'termos-de-uso' ? <TermosUso /> : null
            }
        </div>
    );
}