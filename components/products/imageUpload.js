import { faPlus, faRedoAlt, faSync, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ImageUploading from 'react-images-uploading';

export default function ImageUpload() {

    const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-center">
              <div className="add-button"
              onClick={onImageUpload}
              {...dragProps}
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
            &nbsp;
            <div className="action-button" onClick={onImageRemoveAll}><FontAwesomeIcon icon={faTrash}/></div>
              </div>
            
            <div className="flex flex-row mt-8">
            {imageList.map((image, index) => (
              <div key={index} className="ml-5">
                <img className="h-40" src={image['data_url']} alt="" height="150" />
                <div className="flex flex-row mt-5">
                  <div className="action-button" onClick={() => onImageUpdate(index)}><FontAwesomeIcon icon={faSync}/></div>
                  <button className="action-button" onClick={() => onImageRemove(index)}><FontAwesomeIcon icon={faTrash}/></button>
                </div>
              </div>
            ))}
            </div>
            
          </div>
        )}
      </ImageUploading>
    </div>
  );
}