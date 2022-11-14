import React, { useState } from "react";
import { Card, CardContent, Grid, TextField, Button} from '@material-ui/core';
import Axios from 'axios';

const URL_POST = 'https://speed-database.herokuapp.com/api/articles/post-new-submit-article';

const Submit = () => {
    // states for the text fields
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [journalName, setJournalName] = useState('');
    const [volume, setVolume] = useState('');
    const [number, setNumber] = useState('');
    const [pages, setPages] = useState('');
    const [doi, setDOI] = useState('');
    const [pubyear, setPubyear] = useState('');

    // states to manage the validations of the text fields
    const [titleError, setTitleError] = useState(false);
    const [authorsError, setAuthorsError] = useState(false);
    const [journalNameError, setJournalNameError] = useState(false);
    const [volumeError, setVolumeError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [pagesError, setPagesError] = useState(false);
    const [doiError, setDOIError] = useState(false);
    const [pubyearError, setPubyearError] = useState(false);

    /**
     *  handles the title change input
     **/
    const onTitleChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setTitleError(true);
        } else {
            // set the error value to false and update the value of title
            setTitleError(false);
            setTitle(input);
        }
    };

    const onAuthorChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setAuthorsError(true);
        } else {
            // set the error value to false and update the value of authors
            setAuthorsError(false);
            setAuthors(input);
        }        
    };

    const onJournalNameChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setJournalNameError(true);
        } else {
            // set the error value to false and update the value of journal name
            setJournalNameError(false);
            setJournalName(input);
        } 
    };

    const onVolumeChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setVolumeError(true);
        } else {
            // set the error value to false and set the value of volume
            setVolumeError(false);
            setVolume(input);
        } 
    };

    const onNumberChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setNumberError(true);
        } else {
            // set the error value to false and update the value of number
            setNumberError(false);
            setNumber(input);
        } 
    };

    const onPagesChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setPagesError(true);
        } else {
            // set the error value to false and update the value of pages
            setPagesError(false);
            setPages(input);
        } 
    };

    const onDOIChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setDOIError(true);
        } else {
            // set the error value to false and update the value of DOI
            setDOIError(false);
            setDOI(input);
        } 
    };

    const onPubYearChangeHandler = (e) => {
        e.preventDefault();
        const input = e.target.value;

        // sets error to true if the text field is empty
        if(input === ''){
            setPubyearError(true);
        } else {
            // set the error value to false and update the value of pubyear
            setPubyearError(false);
            setPubyear(input);
        } 
    };

    /**
     * This function makes a post request to send
     * the article details submitted by the user.
     */
    const postNewSubmitArticle = () => {
        // URL_POST is the API URL to manage post request
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
            console.log(response.data);
            alert('New Article Submitted');
            
        }).catch((error) => {
            console.log(error);
            alert('Please make sure all text fields have been filled in!!!!!!!!!');
        });          
        
    };



    return (
        <div className="App">
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                <CardContent>
                    <form>
                    <Grid container spacing={1} >
                        <Grid xs={12} item>
                            <TextField error={titleError} onChange={onTitleChangeHandler}  label="Title" placeholder="Enter Title" variant="outlined" fullWidth required/>
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
                            <Button onClick={postNewSubmitArticle} id={'button-submit'} variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Submit;
