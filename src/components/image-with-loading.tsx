import React, { useState } from 'react';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <LoadingIcon />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
      />
    </div>
  );
};

const LoadingIcon: React.FC = () => (
  <div>Loading...</div>
);

export default ImageWithLoading;
