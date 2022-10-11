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

    const [titleError, setTitleError] = useState(false);
    const [authorsError, setAuthorsError] = useState(false);
    const [journalNameError, setJournalNameError] = useState(false);
    const [volumeError, setVolumeError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [pagesError, setPagesError] = useState(false);
    const [doiError, setDOIError] = useState(false);
    const [pubyearError, setPubyearError] = useState(false);

    const onTitleChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setTitleError(true);
        } else {
            setTitle(input);
        }
    };

    const onAuthorChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setAuthorsError(true);
        } else {
            setAuthors(input);
        }        
    };

    const onJournalNameChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setJournalNameError(true);
        } else {
            setJournalName(input);
        } 
    };

    const onVolumeChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setVolumeError(true);
        } else {
            setVolume(input);
        } 
    };

    const onNumberChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setNumberError(true);
        } else {
            setNumber(input);
        } 
    };

    const onPagesChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setPagesError(true);
        } else {
            setPages(input);
        } 
    };

    const onDOIChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setDOIError(true);
        } else {
            setDOI(input);
        } 
    };

    const onPubYearChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        if(input === ''){
            setPubyearError(true);
        } else {
            setPubyear(input);
        } 
    };


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
                            <TextField error={titleError} onChange={onTitleChangeHandler}  label="Title" placeholder={title} variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={authorsError} onChange={onAuthorChangeHandler} label="Author" placeholder="Enter author" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={journalNameError} onChange={onJournalNameChangeHandler} label="Journal Name" placeholder="Enter journal name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={volumeError} onChange={onVolumeChangeHandler} label="Volume" placeholder="Enter volume" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={numberError} onChange={onNumberChangeHandler} label="Number" placeholder="Enter number" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={pagesError} onChange={onPagesChangeHandler} label="Pages" placeholder="Enter pages" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={doiError} onChange={onDOIChangeHandler} label="DOI" placeholder="Enter DOI" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField error={pubyearError} onChange={onPubYearChangeHandler} InputLabelProps={{ shrink: true }} type = "date" label="Publication date" placeholder="Enter publication date" variant="outlined" fullWidth required/>
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