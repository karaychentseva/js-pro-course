
export const getEmailError = (value = ""): string => {
    return !value.match(/^\w+@\w+\.\w+$/) ? "Email is not valid" : "";
}

export const getPasswordError = (value = ""): string => {
    return value.length < 4 ? "Password is not valid" : "";
}