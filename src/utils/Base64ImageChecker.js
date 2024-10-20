const isBase64Image = (data) => {
    return typeof data === 'string' && data.startsWith('data:image/');
  };
 

  export default isBase64Image