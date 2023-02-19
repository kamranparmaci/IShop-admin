import React, { FC, useCallback } from 'react';

import { Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface DropZoneProps {
  onDrop: (files: File[]) => void;
}

const DropZoneSection: FC<DropZoneProps> = ({ onDrop }) => {
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="h5">Drop your files here</Typography>
      ) : (
        <>
          <CloudUploadIcon />
          <Typography variant="h5">
            Drag and drop your files here, or click to select files
          </Typography>
        </>
      )}
    </div>
  );
};

export default DropZoneSection;
