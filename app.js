
const chalk=require('chalk')
const notes=require('./notes.js')


const yargs=require('yargs');
const { demandOption, string } = require('yargs');
//create add
yargs.command({command:'add',
               describe:'add a note',
               builder:{
                title: {
                    describe:'a note title',
                    demandOption: true,
                    type:'string'
                },

                body: {
                    describe:'note body',
                    demandOption: true,
                    type:'string'
                }
                        
               },
               handler:(argv)=>{
                const t1=argv.title;
                const b1=argv.body
                notes.addnotes(t1,b1)

               } 
})


//create remove
yargs.command({command:'remove',
               describe:'remove a note',
               builder:{
                title: {
                    describe:'a note title',
                    demandOption: true,
                    type:'string'
                },
            },
               handler:(argv)=>{
                notes.removenotes(argv.title);
               } 
})

//create list
yargs.command({command:'list',
               describe:'list a note',
               handler(){
                notes.listnotes();
               } 
            
})
//create read
yargs.command({command:'read',
               describe:'read a note',
               builder:{
                title:{
                    describe:'a note title',
                    demandOption:true,
                    type:'string'
                }
               },
               handler:(argv)=>{
                notes.readNotes(argv.title);
               } 
})
yargs.parse()