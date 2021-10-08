import { useCallback, useState } from "react";

export function useFetch() {
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(false);
            //response = await fetch(url, options);
            //json = await response.json();
            //if(response.ok === false) throw new Error(json.message);
        } catch (err) {
            json = null;
            setError(err.message);
        } finally {
            setPost(json);
            setLoading(false);
            return {response, json}
        }
    }, []);

    return {
        post, loading, setLoading, error, request
    };
}