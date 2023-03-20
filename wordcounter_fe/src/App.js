import './App.css';
import {useState} from "react";
import axios from "axios";
import ListItems from "./ListItems";


function App() {
    const [selected, setSelected] = useState(null)
    const [error, setError] = useState('')

    const [btnDisable, setbtnDisable] = useState(true)
    const [list, setList] = useState()

    const onFileChange = event => {
        setSelected({selectedFile: event.target.files[0]});
        setbtnDisable(false)
    };

    const onFileUpload = () => {
        const formData = new FormData();
        formData.append(
            "file",
            selected.selectedFile,
        );
        axios.post("http://127.0.0.1:8000/upload/", formData).then(response => {
            setList(response.data);
            setError('')
        }).catch(response => {
            setError('Something went wrong! it might be because you are not using text file.')
            setList(null)
        });
    };

    return (
        <div style={{textAlign: "center"}}>
            <h1>
                Most Occurring Words
            </h1>
            <h3>
                Please Upload text file containing words!!!
            </h3>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={onFileUpload} disabled={btnDisable}>
                    Upload!
                </button>
            </div>
            <ListItems data={list}/>

            <div style={{color:"red"}}>
                <br/>
                {error}
            </div>
        </div>

    );
}

export default App;
