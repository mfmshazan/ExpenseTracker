import React, { useState, useRef } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

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
                accept='image/*'
                ref={inputRef}
                onChange={handleChangeImage}
                className="hidden"
            />

            {!image ? (
                <div className='w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative cursor-pointer'>
                    <LuUser className='text-4xl text-primary' />

                    <button
                        type='button'
                        className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full absolute -right-0 -bottom-0"
                        onClick={onChooseFile}
                    >
                        <LuUpload />
                    </button>
                </div>
            ) : (<div className='relative'>
                <img
                    src={previewUrl}
                    alt="Profile Photo"
                    className='w-20 h-20 rounded-full object-cover mb-4'
                />

                <button
                    type='button'
                    className="w-8 h-8 flex items-center justify-center bg-red-700 text-white rounded-full absolute -right-2 bottom-1"
                    onClick={handleRemoveImage}
                >
                    <LuTrash />
                </button>
            </div>
            )}
        </div>
    )
}

export default ProfilePhoto
