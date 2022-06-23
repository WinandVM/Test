//hetzelfde als dinsdag, maar nu met een class
class TodoApplication{
    constructor(){
        this.todos=[];
    }
// addTodo
addTodo(todo){
    return this.todos.push(todo);
}
//getTodos -> all todos
getTodos(){
    return this.todos;
}
// get TodoByValue -> single todo
getTodoByValue(todo){
    let single_todo = this.todos.filter(val => val.toLowerCase().trim() == todo.toLowerCase().trim()) //we gebruiken trim() als er een pipo iets ingeeft met spaties (zowel als die een task ingeeft, als die iets opzoekt -> dus vandaar twee keer trim())
    console.log(single_todo)
}
//delete TodoByValue -> delete todo
deleteTodoByValue(todo){
    let index= this.todos.indexOf(todo);
    this.todos.splice(index,1);
}
//toString -> display my todos
toString(){
    this.todos.forEach((todo, index) => {console.log(`#${index} Task: ${todo}`)})
}
}

let app = new TodoApplication(); //creates a new todo list
app.addTodo("Go to the store");
app.addTodo("Finish my homework");
app.addTodo("Learn JavaScript");
console.log(app.getTodos());
app.toString();
app.getTodoByValue("      FinisH mY hoMeWork");
app.deleteTodoByValue("Finish my homework");
app.toString();