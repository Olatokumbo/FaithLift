import React, {useState, createContext} from "react";

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [movies, setMovies] = useState(null);
    const [articles, setArticles] = useState(null);

    return(
        <AppContext.Provider value={{moviesList: [movies, setMovies], articlesList: [articles, setArticles]}}>
            {props.children}
        </AppContext.Provider>
    )
}