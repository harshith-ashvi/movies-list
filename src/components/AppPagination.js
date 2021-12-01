import { Pagination } from "@mui/material";
import React from "react";

// const style = {
//     position: "fixed",
//     bottom: 0,
//     zIndex: 200,
//     backgroundColor: "green",
//     padding: "10px 80px",
//     color: "white",
//     width: "100%"
// }

// const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white"
// }

const containerStyle = {
    marginTop: "5px",
    marginBottom: "10px"
}

const paginationStyle = {
    display: "flex",
    justifyContent: "center"
}

const AppPagination = (props) => {
    const { movies, moviesPerPage, handlePageUpdate } = props

    const pages = Math.ceil(movies.length / moviesPerPage)

    return (
        <div style={containerStyle}>
            <div>
                <Pagination 
                    sx={paginationStyle} 
                    variant="outlined" 
                    count={pages}
                    color="primary" 
                    onChange={(e) => handlePageUpdate(e.target.textContent)}
                />
            </div> 
        </div>
    )
}

export default AppPagination