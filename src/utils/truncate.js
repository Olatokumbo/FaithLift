export const truncate = (text)=>{
    return text.length > 270 ? text.substring(0, 270) + "..." : text;
}

