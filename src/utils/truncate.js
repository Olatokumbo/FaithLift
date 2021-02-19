export const truncate = (text)=>{
    return text.length > 50 ? text.substring(0, 50) + "..." : text;
}

