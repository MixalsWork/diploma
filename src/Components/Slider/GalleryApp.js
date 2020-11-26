import './Gallery.css';
import galeryList from './Gallery.json';

let newGalleryArray = [];
function GalleryCreator(element){
    return(
        <div className="gallery-item">
          <h1>{element.name}</h1>
        <img 
        src={element.src}
        alt='random-img'
        >
        </img>
        </div>
    );
}
function GalleryAppAppend(elementArr) {
    elementArr.forEach(element => {
        let tempElement = GalleryCreator(element);
        newGalleryArray.push(tempElement)
    });
}
GalleryAppAppend(galeryList)



function GalleryApp(){
    return(
        <div className="gallery">
          {newGalleryArray}
        </div>
    )
}

export default GalleryApp;