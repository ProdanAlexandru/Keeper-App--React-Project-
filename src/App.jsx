import React from "react";
import Header from "./Header"; 
import Footer from "./Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import {useState} from "react";


function App ()
{

        const [notes,setNotes] =useState([]);

        function addNote(newNote){
            setNotes(prevNotes =>{
                return [...prevNotes, newNote];
            });
            
        }

        function deleteNote(id){
            setNotes(prevNotes=>{
                return prevNotes.filter((noteItem, index) => {
                    return index !== id;
                });
            }); 
        }

    return <div> 
    <Header />
    <CreateArea
    AddOn={addNote} />
    {notes.map((noteItem,index)=>{
        return <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onChecked={deleteNote}  
        />
    })}
    
    <Footer />
    </div> ;

}

export default App;
