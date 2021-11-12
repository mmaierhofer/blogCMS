export const isEmpty = (object) => {
    return Object.keys(object).length === 0;
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}