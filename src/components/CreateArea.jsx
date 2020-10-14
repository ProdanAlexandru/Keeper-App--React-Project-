import React from "react";
import {useState} from "react";
import AddIcon from '@material-ui/icons/Add';



    function CreateArea(props){

            
        
        const [note, setNote] =useState(
            {
                title: "",
                content: ""
            }
        );

        function handleChange(event){
            const {name, value} = event.target;

            setNote(prevNote => {
                return {
                     ...prevNote,
                     [name]: value
                };
            });
            

        }
        
        function submitNote(event){
                props.AddOn(note);
                setNote({
                    title: "",
                    content: ""
                });
            event.preventDefault();
        }
        
        return (
            <div>
            <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} />
            <button onClick={submitNote}
            >
                <AddIcon />
                </button>
            </form>
            </div>

        );
    }

        export default CreateArea;