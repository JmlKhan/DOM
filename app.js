const addBtn = document.querySelector('.addBtn');
const lists = document.querySelector('.lists');
const info = document.querySelector('.info');

addBtn.addEventListener('click', function(){
    // create li
    const newLI = document.createElement('LI');
    const liContent = document.createTextNode(info.value)
   

    //add input value to li content
    newLI.appendChild(liContent);
    //attach li value to the lists
    lists.appendChild(newLI);
});