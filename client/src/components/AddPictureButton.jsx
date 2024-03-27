import React, { useState, useEffect } from "react";

function AddPictureButton() {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Revoke the object URL when component unmounts or when a new file is selected
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [imageUrl]);

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            const url = URL.createObjectURL(selectedFile);
            setImageUrl(url);
        }
    };

    const handleClick = (e) => {
        console.log(file);
    };

    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            {imageUrl && (
                <img src={imageUrl} alt="Selected file" style={{ width: '100px', height: '100px' }} />
            )}
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default AddPictureButton;