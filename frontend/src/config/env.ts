const getEnv  = (key : string) : string => {

    const value = import.meta.env[key]

    if(!value){
        throw new Error (`Missing Environment Variable : ${key}`);
    }

    return value;
}

export const env = {
    BACKEND_BASE_URL : getEnv('VITE_BACKEND_BASE_URL')
}