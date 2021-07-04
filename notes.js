const addbtn = document.getElementById("add")

let notes = JSON.parse(localStorage.getItem('notes'))

console.log(localStorage.getItem("notes"))

console.log(JSON.stringify(localStorage.getItem("something")))

localStorage.setItem('something', JSON.stringify([{name : 'frangklyn', umur : 18}]))

// localStorage.removeItem('notes')
if(notes && notes.length > 0){

    try {
       
        // for(let x=0;x<notes.length;x++){
        //     console.log(notes[x].name)
        //     addNewNote(notes[x])
        // }
        notes.forEach(n  => {
            addNewNote(n.name)
            console.log('mister', n)
        })
    } catch (error) {
        console.error("error", error)
        console.log("notes", notes)
        // console.warn
    }
    
}

console.log("notes", notes)


addbtn.addEventListener('click', () => addNewNote())

function addNewNote(text = ''){
   try{
    let note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="controls">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <span></span>
        <button class="delete"><i class="fas fa-trash"></i></button>
    </div>

    <div class="main ${text ?"" : "hidden"}"></div>
    <textarea class="${text ?"hidden" : ""}" ></textarea>`

    let editbtn = note.querySelector('.edit')
    let deletetbtn = note.querySelector('.delete')
    let main = note.querySelector('.main')
    let textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = text

    deletetbtn.addEventListener('click', () =>{
        note.remove()
        Save()
    })

    editbtn.addEventListener('click', () =>{
        main.classList.toggle('hidden')
        // console.log("apakah ?", main.classList)
        textArea.classList.toggle('hidden')
    })

    // console.log("apakah ?", value)
    textArea.addEventListener('input', (e) => {
        const{value} = e.target
        main.innerHTML = value

        Save()
    })
    document.body.appendChild(note)
   }catch (error){
        console.error("error", error)
   }
}

function Save() {
    const notesText = document.querySelectorAll('textarea')

    const semuanotes = []

    notesText.forEach(note => semuanotes.push({name : note.value, umur: note.value} ))

    localStorage.setItem('notes', JSON.stringify(semuanotes))
}