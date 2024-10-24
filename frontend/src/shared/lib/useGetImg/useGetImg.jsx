import { useSelector } from 'react-redux';

const DEFAULT_IMG_ID = 101;

export function useGetImg(id, size = 'medium') {
    const images = useSelector(state => state.imgs.entities);
    return images[id]?.media_details?.sizes?.[size]?.source_url ||
        images[DEFAULT_IMG_ID]?.media_details?.sizes?.[size]?.source_url;
}