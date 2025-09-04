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

            {!image ? (
                <div onClick={onChooseFile} className='w-32 h-32 rounded-full bg-size-200 bg-center bg-no-repeat cursor-pointer flex flex-col justify-center items-center border-2 border-dashed border-size-300'>
                    <LuUpload className='text-size-400 text-3xl' />
                    <p className='text-size-400 text-xs mt-2'>Upload Photo</p>
                </div>
            ) : (
                <div className='relative'>
                    <img src={previewUrl ? previewUrl : URL.createObjectURL(image)} alt="Profile" className='w-32 h-32 rounded-full object-cover' />
                    <div onClick={handleRemoveImage} className='absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer'>
                        <LuTrash className='text-red-500' />
                    </div>
                </div>
            )}
        </div>

    )
}

export default ProfilePhoto
