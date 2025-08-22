import React, { useState, useRef } from 'react'
import { LuUser, LuUpload, LuTrash} from 'react-icons/lu'

const ProfilePhoto = ({ image, setImage }) => {

    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleChangeImage = (event) => {
        const file = event.target.files[0]

        if (file) {
            //update image file
            setImage(file);
        }

        //Handle preview url from the file
        const preview = URL.createObjectURL(file);
        setPreviewUrl(preview);
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }


    return (
        <div className='flex justify-center mb-6'> 
         <input
            type="file"
            accept = 'image/*'
            ref= {inputRef}
            onChange = {handleChangeImage}
            className=""
            />
        </div>

    )
}

export default ProfilePhoto
