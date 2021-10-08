import { useState } from "react"

const useLink = () => {
    let str = '';

    const generateLink = (category, linkCategory) => {
        if(linkCategory) {
            str = linkCategory + '/' + category.id_string;
        } else {
            str = category.id_string;
        }
        return str;
    }

    return [str, generateLink];
}
export default useLink;