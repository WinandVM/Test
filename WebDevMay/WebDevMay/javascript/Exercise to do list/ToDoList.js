function toDoList(title){
    this.title=[]
    }

toDoList.prototype.showTask = function (){
    console.log(`Tasks: ${this.title}`);
}

toDoList.prototype.deleteTask = function(){ //verwijdert de laatste taak
    this.title.pop();
}

toDoList.prototype.addTask = function (task){
    this.title.push(task);
}

toDoList.prototype.deleteSpecificTask=function(value){
    let temp = [];
    this.title.forEach(todo => {
        temp.push(todo.toLowerCase())
    })
    let index=temp.indexOf(value.toLowerCase());
    this.title=[...temp] //we moeten het resultaat ook terug pushen naar de originele array
    if (index > -1) {
        console.log("Task found: ", index, this.title[index]);
        this.title.splice(index,1); //dit verwijdert één element
    }
    else {
        console.log("Task not found")
    }
}

let task1 = new toDoList();
task1.addTask("Trying to add something to the list");
task1.addTask("Trying out other functions");
// task1.showTask();
task1.deleteTask();
// task1.showTask();
task1.addTask("Trying out other functions");
task1.addTask("Trying out something else");
task1.deleteSpecificTask("Trying out other functions"); //maar dit werkt enkel als de capitalisation ook overeenkomt, dus daarom moeten we dat fixen met toLowerCase
task1.showTask();
