let emailList = [];
let parent  = document.getElementsByClassName('email-conatiner')[0];
const addEmail = (e) => {
    let email = document.getElementById('email');
    addHeaderDom();
    emailList.push({email:email.value,enabled:false});
    addSingleRow(email.value);
    console.log(emailList);
}
const search = (e) => {
    let searchVal = document.getElementById('search').value;
    console.log(searchVal);
}
const addDom = () => {

    addHeaderDom();
    emailList.forEach( item => {
        addSingleRow(item.email);
    })
}
const addHeaderDom = () => {
    let headerRow = document.createElement('tr');
    headerRow.setAttribute('class','header');

    let enableHeader = document.createElement('th');
    let emailHeader = document.createElement('th');
    let deleteHeader = document.createElement('th');

    headerRow.appendChild(enableHeader);
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(deleteHeader);

    parent.appendChild(headerRow);
}
const addSingleRow = (email) => {
    let row = document.createElement('tr');
    row.setAttribute('id',email);
    let enableContent = document.createElement('td');
    let emailContent = document.createElement('td');
    let deleteButton = document.createElement('td');
    let checkBox = document.createElement('input');
    let button = document.createElement('button');
    button.setAttribute('onclick','deleteRow(event)');

    enableContent.appendChild(checkBox);
    emailContent.textContent=email;
    checkBox.setAttribute('type','checkbox');
    checkBox.setAttribute('onclick','toggleEnable(event)');
    deleteButton.textContent='delete';
    deleteButton.appendChild(button);
    row.appendChild(enableContent);
    row.appendChild(emailContent);
    row.appendChild(deleteButton);
    parent.appendChild(row);
}
const deleteRow = (e) => {
    let parent = e.target.parentNode.parentNode;
    emaiList = emailList.filter( item => {
        item.email !== parent.id;
    })
    deleteNode(parent);
}
const deleteNode = (node) => {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}

const toggleEnable = (e) => {
    let parentId = e.target.parentNode.parentNode.id;
    emailList = emailList.map( item => {
        item.enabled = item.email === parentId ? !item.enabled : item.enabled;
        return item;
    })
}