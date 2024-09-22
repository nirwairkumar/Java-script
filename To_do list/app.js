let list = [];
while (true){
    action = prompt("Action [add | list | delete | quit]");
    
    if (action == "list"){
        console.log("-------------");
        let i=1;
        for(work of list){
            console.log(i,work);
            i++
        }
        console.log("--------------")
    }
    else if (action=="add"){
        task = prompt("add your task")
        list.push(task);
    }
    else if (action =="quit"){
        console.log("closing todo list");
        break;
    }
    else if (action =="delete"){
        rmv= prompt("type serial number of your task")
        list.splice(rmv-1,1)
        console.log("your task removed")
    }
    else{
        console.log("invalid key entered")
    }
}