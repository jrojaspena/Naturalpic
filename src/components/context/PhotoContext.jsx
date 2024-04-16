import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const PhotosContext = createContext();

const URL = '/NaturalPic/photos.json';

const PhotosProvider = ({children}) => {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async ()=> {
        try {
            const response = await axios.get(URL);
            if (response.status != 200) {
                throw new Error ('Nos encontramos con problemas en la API');
            }
            const {photos: photosDB} = response.data;
            setPhotos(photosDB.map((photo) => ({... photo, isFavorite: false})));
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect (() => {
        getPhotos();
    }, []);

    return(
        <PhotosContext.Provider
        value = {{
            photos,
            setPhotos,
        }}
        >
         {children}
        </PhotosContext.Provider>
    );
};

export default PhotosProvider;