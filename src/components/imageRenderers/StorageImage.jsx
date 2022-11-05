import React ,{ useEffect, useState } from 'react';
import RenderImage from '../../utils/RenderImage'

const StorageImage = ({ imageId, path  }) => {

    const [image, setImage] = useState(null);

    const loadImage = async () => {
        const imageUrl = await RenderImage(imageId, path);
        setImage(imageUrl)
    }

    useEffect(() => {
        if(imageId){
            loadImage();
        }
    }, [imageId])

    return (
        <img src={image} alt=" "/>
    )
}


export default StorageImage;