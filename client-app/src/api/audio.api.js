import React from 'react';
import axios from 'axios';
import {websitePrefix} from '../constants/api.constants';
import {useSelector, useDispatch} from 'react-redux';
import {setAudio} from "../redux/audio/audio.actions";
import { Button, Input } from 'antd';

export const AudioTranscribe = (audio) => {
    return axios({
        url: websitePrefix + "api/audio",
        method: "POST",
        data: audio,
        headers: { "Content-Type": "application/json" },
        mode: "cors"
    })
}

const Audio = () => {
    const {audio} = useSelector(state => state.audioReducer);
    const dispatch = useDispatch();

    const onFileChange = e => {
        dispatch(setAudio(e.target.files[0]));
    }

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            audio.name,
            audio
        )
       AudioTranscribe(formData).then(word => console.log(word));
    }
    
    return(
        <div>
            <Input type="file" onChange={onFileChange} />
            <Button type="primary" onClick={onFileUpload}>
                Upload!
            </Button>
        </div>
    )
}

export default Audio;