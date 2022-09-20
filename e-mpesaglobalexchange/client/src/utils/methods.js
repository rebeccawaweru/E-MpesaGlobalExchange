export const isValidObjField = obj => {
    return Object.values(obj).every(value => value.trim());
  };

export const isValidEmail = value =>{
const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
return regx.test(value);
}

export const isValidPhone = value =>{
    const regx = /^\d{10}$/;
    return regx.test(value);
}