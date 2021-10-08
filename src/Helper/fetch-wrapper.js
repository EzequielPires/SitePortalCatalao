export const tolken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRldmVsb3BlckBwb3J0YWxjYXRhbGFvLmNvbS5iciJ9.xesxCjkR6anfzSUILvy5J9vnEnwDpInclzxF7MKVOgs';
export const urlBase = 'https://api.portalcatalao.com.br/';
export const fetcher = async (url) => {
    try {
        let data = await fetch(urlBase + url, {
            headers: { 'Authorization': 'Bearer ' + tolken }
        }).then(response => response.json()).then(response => response.data);
        return data;
    } catch(error) {
        console.error(error);
        return {
            error: true
        };
    }
};