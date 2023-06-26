import React, {useEffect, useState} from 'react';

const Image: React.FC<any> = (path: any, id?: string, alt?: string) => {
  const [data, setData] = useState('');

  const getImage = async () => {
    const image = await import(`@assets/images/${path.path}`);

    setData(image.default);
  };

  useEffect(() => {
    getImage();
  }, [path]);

  return <img src={data} id={id} alt={alt} />;
};

export default Image;
