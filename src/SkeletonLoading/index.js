import ContentLoader from 'react-content-loader';

export const SkeletonNewsMain = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonNewsMain"
            speed={2}
            width={'100%'}
            height={'656px'}

            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="m-0"
        >
            <rect id="rect-1" x="0" y="0" rx="4" ry="4" width="313" height="100%" />
            <rect id="rect-2" x="324" y="0" rx="4" ry="4" width="520" height="56" />
            <rect id="rect-3" x="324" y="66" rx="4" ry="4" width="520" height="56" />
            <rect id="rect-4" x="324" y="132" rx="4" ry="4" width="320" height="24" />
        </ContentLoader>
    );
}
export const SkeletonNews = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonNews"
            speed={2}
            width={'100%'}
            height={'320px'}
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="m-0"
        >
            <rect id="rect-1" x="0" y="0" rx="4" ry="4" width="313" height="100%" />
            <rect id="rect-2" x="324" y="0" rx="4" ry="4" width="520" height="56" />
            <rect id="rect-3" x="324" y="66" rx="4" ry="4" width="520" height="56" />
            <rect id="rect-4" x="324" y="132" rx="4" ry="4" width="320" height="24" />
        </ContentLoader>
    );
}
export const SkeletonNewsHorizontal = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonNewsHorizontal"
            speed={2}
            width={'100%'}
            height={'226px'}
            overflow="hidden"
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="mx-0 mb-3"
        >
            <rect id="rect-1" x="0" y="0" rx="4" ry="4" width="313" height="100%" />
            <rect id="rect-2" x="324" y="0" rx="4" ry="4" width="60%" height="56" />
            <rect id="rect-3" x="324" y="66" rx="4" ry="4" width="50%" height="56" />
            <rect id="rect-4" x="324" y="132" rx="4" ry="4" width="320" height="24" />
        </ContentLoader>
    );
}
export const SkeletonNewsCardAside = ({ height }) => {
    return (
        <ContentLoader
            speed={2}
            width='100%'
            height='134px'
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
        >
            <rect x="4" y="12" rx="4" ry="4" width="110" height="110" />
            <rect x="126" y="12" rx="4" ry="4" width="100" height="18" />
            <rect x="126" y="38" rx="4" ry="4" width="248" height="40" />
        </ContentLoader>
    );
}
export const SkeletonNewsCardVideos = ({ height }) => {
    return (
        <ContentLoader
            speed={2}
            width="100%"
            height="300px"
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
        >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="200" />
            <rect x="0" y="216" rx="4" ry="4" width="89" height="16" />
            <rect x="0" y="248" rx="4" ry="4" width="242" height="40" />
        </ContentLoader>
    );
}
export const SkeletonTitle = ({ height }) => {
    return (
        <ContentLoader
            speed={2}
            width="400px"
            height="40px"
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
        >
            <rect x="0" y="0" rx="4" ry="4" width="100%" height="40" />
        </ContentLoader>
    );
}
export const SkeletonAnnouncementAside = ({ height }) => {
    return (
        <ContentLoader
            speed={2}
            width="300px"
            height="320px"
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
        >
            <rect x="0" y="0" rx="4" ry="4" width="89" height="16" />
            <rect x="0" y="20" rx="4" ry="4" width="300" height="300" />
        </ContentLoader>
    );
}
export const SkeletonAnnouncementBanner = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonAnnouncementBanner"
            speed={2}
            width={'100%'}
            height={'152px'}
            overflow="hidden"
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="mx-0 mb-3"
        >
            <rect x="0" y="0" rx="4" ry="4" width="89" height="16" />
            <rect x="0" y="20" rx="4" ry="4" />
        </ContentLoader>
    );
}
export const SkeletonClassifiedVertical = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonClassifiedVertical"
            speed={2}
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="m-0"
        >
            <rect id="rect-1" rx="4" ry="4" />
            <rect id="rect-2" rx="4" ry="4" />
            <rect id="rect-3" rx="4" ry="4" />
            <rect id="rect-4" rx="4" ry="4" />
            <rect id="rect-5" rx="4" ry="4" />
        </ContentLoader>
    );
}
export const SkeletonClassifiedHorizontal = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonClassifiedhorizontal"
            speed={2}
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="m-0"
        >
            <rect id="rect-1" rx="4" ry="4" />
            <rect id="rect-2" rx="4" ry="4" />
            <rect id="rect-3" rx="4" ry="4" />
            <rect id="rect-4" rx="4" ry="4" />
            <rect id="rect-5" rx="4" ry="4" />
        </ContentLoader>
    );
}
export const SkeletonClassifiedOther = ({ height }) => {
    return (
        <ContentLoader
            //id="SkeletonClassifiedOther"
            speed={2}
            backgroundColor="#e5e5e5"
            foregroundColor="#c2c2c2"
            className="m-0"
        >
            <rect id="rect-1" rx="4" ry="4" />
            <rect id="rect-2" rx="4" ry="4" />
            <rect id="rect-3" rx="4" ry="4" />
            <rect id="rect-4" rx="4" ry="4" />
        </ContentLoader>
    );
}