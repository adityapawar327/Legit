import { IconPhotoUp } from "@tabler/icons-react";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const CustomImageUploader = ({ onImagesChange }) => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages((prevImages) => {
        const updatedImages = [...prevImages, ...newImages];
        if (onImagesChange) {
          onImagesChange(updatedImages);
        }
        return updatedImages;
      });
    },
    [onImagesChange]
  );

  const removeImage = (file) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((image) => image !== file);
      if (onImagesChange) {
        onImagesChange(updatedImages);
      }
      return updatedImages;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  useEffect(() => {
    // Revoke the data URIs to avoid memory leaks
    return () => images.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [images]);

  return (
    <div className="p-4">
      <div
        {...getRootProps()}
        className={`border-4 border-black shadow-[6px_6px_0px_#000] bg-white rounded-lg flex flex-col items-center justify-center w-full p-8 text-center ${
          isDragActive ? "bg-blue-100" : "bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-lg font-bold">Drop the files here...</p>
        ) : (
          <div>
            <div className="flex flex-col space-y-3 items-center justify-center">
              <IconPhotoUp width={40} height={40} className="text-blue-500" />
              <p className="text-lg font-bold">
                Drag 'n' drop profile picture here, or click to select an image
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6">
              {images.map((file) => (
                <div
                  key={file.name}
                  className="relative border-2 border-black shadow-[4px_4px_0px_#000] rounded-md overflow-hidden"
                >
                  <img
                    src={file.preview}
                    alt="Preview"
                    className="object-cover w-full h-32"
                  />
                  <button
                    onClick={() => removeImage(file)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_0px_#000]"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomImageUploader;
