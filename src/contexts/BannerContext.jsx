import { createContext, useState } from "react";
import { fetcher } from "../Helper/fetch-wrapper";

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
    const [homeTopo, setHomeTopo] = useState(null);
    const [homeSecundario, setHomeSecundario] = useState(null);
    const [homeRecente, setHomeRecente] = useState(null);
    const [homeLateral, setHomeLateral] = useState(null);
    const [homeLateralPublication, setHomeLateralPublication] = useState([]);
    const [homeClassificados, setHomeClassificados] = useState(null);

    const fetcherBanner = async (type) => {
        const data = await fetcher(`banner/list?type=${type}&active=true`);
        return data;
    }
    const getBannerTop = async () => {
        setHomeTopo(await fetcherBanner(1));
    }
    const getBannerSecundario = async () => {
        setHomeSecundario(await fetcherBanner(3));
    }
    const getBannerRecente = async () => {
        setHomeRecente(await fetcherBanner(2));
    }
    const getBannerLateral = async () => {
        setHomeLateral(await fetcherBanner(4));
    }
    const getBannerLateralPublication = async () => {
        setHomeLateralPublication(await fetcherBanner(7));
    }
    const getBannerClassificados = async () => {
        setHomeClassificados(await fetcherBanner(5));
    }
    const getAllBanners = async () => {
        homeTopo ? null : await getBannerTop();
        homeSecundario ? null : await getBannerSecundario();
        homeRecente ? null : await getBannerRecente();
        homeLateral ? null : await getBannerLateral();
        homeClassificados ? null : await getBannerClassificados();
    }
    const getBannersPublication = async () => {
        homeTopo ? null : await getBannerTop();
        homeLateralPublication ? null : await getBannerLateralPublication();
    }

    return (
        <BannerContext.Provider
            value={{
                homeTopo,
                homeSecundario,
                homeRecente,
                homeLateral,
                homeClassificados,
                getBannerTop,
                getBannerSecundario,
                getBannerRecente,
                getBannerLateral,
                getBannerClassificados,
                getAllBanners,
                getBannersPublication
            }}
        >
            {children}
        </BannerContext.Provider>
    )
}