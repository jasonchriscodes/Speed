import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// const initialValues ={
//     title: '',
//     author: '',
//     jnl_name: '',
//     vol: '',
//     number: 0,
//     doi: '',
//     pub: '',
// };

export default function SubmitArticle() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style': { m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField id="title" label="title" variant="standard" />
                <TextField id="author" label="author" variant="standard" />
            </div>

            <div>
                <TextField id="jnl_name" label="journal name" variant="standard" />
                <TextField id="vol" label="volume" variant="standard" />
            </div>
            
            <div>   
                <TextField id="number" label="number" variant="standard" />
                <TextField id="pages" label="pages" variant="standard" />
            </div>
            
            <div>
                <TextField id="doi" label="DOI" variant="standard" />
                <TextField id="pub" label="publication date" variant="standard" />
            </div>
        </Box>
    );
}