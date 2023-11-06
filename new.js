console.log('hello from js')


const htwo= document.getElementsByTagName('h2');
for(threes of htwo){
    threes.style.color='lightblue';
}


const section_edit= document.getElementById('backpack')
const edit= section_edit.style.backgroundColor='red'


function write(){
    console.log('hi bhai..why you clicked me')
}

// submit button challenge
const field= document.getElementById('inputOne')
const work = field.addEventListener('keyup', function(event){
    const text = event.target.value;
    const button= document.getElementById('btn-submit-last');
    if(text==='submit' || text==='Submit'){
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled', true)
    }

})



