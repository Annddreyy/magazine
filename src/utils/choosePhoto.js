function choosePhoto(img_path, defaultImg, baseUrl) {
    return img_path ? `${baseUrl}${img_path}?raw=true` : defaultImg;
};

export default choosePhoto;
