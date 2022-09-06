
import { useState, useEffect } from "react";

const useFetch = ({ api, method, url, data, config }) => {
    const [response, setResponse]       = useState(null);
    const [error, setError]             = useState();
    const [isLoading, setIsLoading]     = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            api[method](url, JSON.parse(config), JSON.parse(data))
                .then(res => {
                    setResponse(res.data);
                    console.log("response", res);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };

        fetchData();
    }, [api, method, url, data, config]);

    return { response, error, isLoading };
};

export default useFetch;