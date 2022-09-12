import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImgages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const data = await getGifs(category);        
        setImgages(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}