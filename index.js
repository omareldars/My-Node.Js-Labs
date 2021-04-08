const fs = require('fs');
const myFilePath = "./todos.json";

// read file
function readfile(filepath)
{
    const todos = fs.readFileSync(filepath,'utf8');
    return JSON.parse(todos);
}


// write file
function writeFile(data) {
    const parseddata = JSON.stringify(data);
    fs.writeFileSync('todos.json',parseddata );
}


// add option 
function add(options) {
    console.log(options);
    let data = {};
    data.title = options.title;
    let todo = readfile(myFilePath );
    data.id = getLastId(todo);
    data.checked = false;
    todo.push(data);
    writeFile(todo);
}

function edit(data)
{
    let todo = readfile(myFilePath);
    todo.forEach((element,index) => {
        if(element.id == data.id)
        {
            editObject(todo,data, index);
            console.log(`Task ${data.id} Updated Successfully`);
            writeFile(todo);
        }
        else{
            console.log(`${data.id} Update Failed`);
        }
    });
}

getLastId = (data) =>{
    if(!data.length)
    {
        return 1;
    }
    else
    {
        let lastId = data[data.length -1].id;
        return lastId+1;
    }
}

function editObject(old,updated,index)
{
    old[index].title = updated.title;
    old[index].checked = true;
    console.log(old);
    writeFile(old);
}

function remove(data)
{
    let todoData = readfile(myFilePath);
    todoData.forEach((element,index) =>{
        if(element.id == data.id)
        {
            console.log(`Task ${data.id} Removed Successfully`);
            todoData.splice(index,1);
        }
        else
        {
            console.log(`Remove ${data.id} Failed`);
        }
    });
    writeFile(todoData);
}

function list()
{
    listData = readfile(myFilePath);
    console.log(listData);
}

function checkedTask()
{
    const items =readfile(myFilePath);
}

function uncheckedTask()
{
    const items =readfile(myFilePath);
}

function argument(args)
{
    const [_,__,command, ...options] = args;
    const parsedoptions = options.reduce((comm,element)=>{
        const [optname,optvalue] = element.split('=');
        comm[optname] = optvalue;
        return comm;
    }, {});
    parsedoptions.command = command;
    return parsedoptions;
}

checkFile = (path) =>{
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path,'[]');
    }
}

const parsedArgs = argument(process.argv);
switch (parsedArgs.command) {
    case "add":
        add(parsedArgs);
        break;
    case "edit":
        edit(parsedArgs);
        break;
    case "remove":
        remove(parsedArgs);
        break;
    case "list":
        list();
        break;
    case "checked":
        checkedTask();
        break;
    case "unchecked":
        uncheckedTask();
        break;
    default:
        console.log("InValid Option, Please Try Again");
        break;
}

checkFile('./todos.json');



 