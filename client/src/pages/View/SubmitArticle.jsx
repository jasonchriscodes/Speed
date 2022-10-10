import React from "react";

import { Card, CardContent, Grid, TextField, Button} from '@material-ui/core';

export default function SubmitArticle() {
    return (
        <div className="App">
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                <CardContent>
                    <form>
                    <Grid container spacing={1} >
                        <Grid xs={12} item>
                            <TextField label="Title" placeholder="Enter title" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Author" placeholder="Enter author" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Journal Name" placeholder="Enter journal name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Volume" placeholder="Enter volume" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Number" placeholder="Enter number" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Pages" placeholder="Enter pages" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="DOI" placeholder="Enter DOI" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField InputLabelProps={{ shrink: true }} type = "date" label="Publication date" placeholder="Enter publication date" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <Button variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}