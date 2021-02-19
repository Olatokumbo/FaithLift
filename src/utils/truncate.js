export const truncate = (text)=>{
    return text.length > 360 ? text.substring(0, 360) + "..." : text;
}

