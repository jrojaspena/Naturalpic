import { useContext } from "react";
import { PhotosContext } from "../components/context/PhotoContext";
const Favorites = () => {
  const {photos, setPhotos} = useContext(PhotosContext)
  const filterPhoto = photos.filter((photo) => {
    return photo.isFavorite 
  })
  return (
    <div className="gallery grid-columns-5 p-3">
    {filterPhoto.map((photo) => (
      <div
        className="photo"
        style={{backgroundImage: `url(${photo.src.large})`}}
        key={photo.id}
      >
      </div>
      )
    )}
  </div>
  );
};
export default Favorites;