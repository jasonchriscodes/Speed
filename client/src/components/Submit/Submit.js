import React, { useState } from "react";
import { Card, CardContent, Grid, TextField, Button} from '@material-ui/core';
import Axios from 'axios';

const URL_POST = 'http://localhost:8888/api/articles/post-new-submit-article';

const Submit = () => {
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [journalName, setJournalName] = useState('');
    const [volume, setVolume] = useState('');
    const [number, setNumber] = useState('');
    const [pages, setPages] = useState('');
    const [doi, setDOI] = useState('');
    const [pubyear, setPubyear] = useState('');

    const [titleError, setTitleError] = useState('');
    const [authorsError, setAuthorsError] = useState('');
    const [journalNameError, setJournalNameError] = useState('');
    const [volumeError, setVolumeError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [pagesError, setPagesError] = useState('');
    const [doiError, setDOIError] = useState('');
    const [pubyearError, setPubyearError] = useState('');



    const onTitleChangeHandler = (e) => setTitle(e.target.value);
    const onAuthorChangeHandler = (e) => setAuthors(e.target.value);
    const onJournalNameChangeHandler = (e) => setJournalName(e.target.value);
    const onVolumeChangeHandler = (e) => setVolume(e.target.value);
    const onNumberChangeHandler = (e) => setNumber(e.target.value);
    const onPagesChangeHandler = (e) => setPages(e.target.value);
    const onDOIChangeHandler = (e) => setDOI(e.target.value);
    const onPubYearChangeHandler = (e) => setPubyear(e.target.value);

    const postNewSubmitArticle = () => {
        Axios.post(URL_POST, {
            title: title,
            authors: authors,
            journalName: journalName,
            volume: volume,
            number: number,
            pages: pages,
            doi: doi,
            pubyear: pubyear,
        }).then((response) => {
            console.log(response);
        })
          .catch((error) => console.log(error));          

        alert('New Article Submitted');
        
    };

    return (
        <div className="App">
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                <CardContent>
                    <form>
                    <Grid container spacing={1} >
                        <Grid xs={12} item>
                            <TextField onChange={onTitleChangeHandler}  label="Title" placeholder={title} variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onAuthorChangeHandler} label="Author" placeholder="Enter author" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onJournalNameChangeHandler} label="Journal Name" placeholder="Enter journal name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onVolumeChangeHandler} label="Volume" placeholder="Enter volume" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onNumberChangeHandler} label="Number" placeholder="Enter number" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onPagesChangeHandler} label="Pages" placeholder="Enter pages" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onDOIChangeHandler} label="DOI" placeholder="Enter DOI" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField onChange={onPubYearChangeHandler} InputLabelProps={{ shrink: true }} type = "date" label="Publication date" placeholder="Enter publication date" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <Button onClick={postNewSubmitArticle} variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Submit;