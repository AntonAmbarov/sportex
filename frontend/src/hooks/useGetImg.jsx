import { useSelector } from "react-redux";

const DEFAULT_IMG_ID = 101;

function useGetImg(id, size = 'medium') {
    console.log(size)
    console.log(id)
    const images = useSelector(state => state.imgs.entities);
    return images[id]?.media_details?.sizes?.[size]?.source_url ||
        images[DEFAULT_IMG_ID]?.media_details?.sizes?.[size]?.source_url;
}

export default useGetImg;