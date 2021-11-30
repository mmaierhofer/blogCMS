export const isEmpty = (object) => {
    return Object.keys(object).length === 0;
}

export const capitalizeFirstLetter = (string) => {
    if(string)
        return string.charAt(0).toUpperCase() + string.slice(1);
    return "";
}

export const createRandomApiKey = () => {
return(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}