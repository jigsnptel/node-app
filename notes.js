const fs=require('fs');
const chalk=require('chalk');




const addnotes=(title, body)=> {
    const notes=loadnotes()
    //const duplicatenotes=notes.filter((note)=>note.title===title);
    var duplicateNote=notes.find((note)=>note.title===title);
    if(!duplicatenote){
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes);
        console.log(chalk.green.inverse('note added'))
    } else {
        console.log(chalk.red.inverse('note already exist'))
    }
    
}

const savenotes=(notes)=>{
    const data=JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}
const loadnotes=()=>{
    try {
        const databuffer=fs.readFileSync('notes.json')
        //console.log(databuffer)
        const datajson=databuffer.toString();
        return JSON.parse(datajson)
    } catch(e){
        return []
    }   
}

const removenotes=(title)=>{
    const notes=loadnotes()
    const notestokeep=notes.filter((note)=> note.title!==title)
    if(notes.length>notestokeep.length){
        console.log(chalk.green.inverse('note removed'))
        savenotes(notestokeep);    
    }else {
        console.log(chalk.red.inverse('nothing removed'))
    }
    
}
const listnotes=()=>{
    console.log(chalk.blue.inverse('List of Notes'));
    const notes = loadnotes();
    notes.forEach((note) => {
        console.log(note.title);       
    });
    
}

const readNotes=(title)=>{
    console.log(chalk.blue.inverse('note description'));
    const notes=loadnotes();
    var notetodisplay=notes.find((note)=>note.title===title);
    if(!notetodisplay){
        console.log(chalk.red("note does not exist"));
    }
    else {
        console.log('note title: ' + chalk.blue(notetodisplay.title));
        console.log('note body: ' + chalk.blue(notetodisplay.body));
    }
}

module.exports={addnotes:addnotes, removenotes:removenotes, listnotes:listnotes, readNotes:readNotes}