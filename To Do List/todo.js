let todoTask=[
    {
        item:'Buy Milk',
        date: '02/08/2005',
    }
];
displayTask();
function addTask()
{
    let inputTask=document.querySelector("#todoInpute").value;
    let inputDate=document.querySelector("#todoDate").value;
    todoTask.push(
        {
            item:inputTask,
            date:inputDate,
        });
    document.querySelector("#todoInpute").value="";
    document.querySelector("#todoDate").value="";
    displayTask();
}

function displayTask()
{
    let displayContainer=document.querySelector("#displayElement");
    let newElement='';
    for(let i=0; i<todoTask.length; i++)
    {
        newElement+= `
                <span>${todoTask[i].item}</span>
                <span>${todoTask[i].date}</span>
                <button class="todoDelete" onclick='todoTask.splice(${i},1); displayTask();'>Delete</button>
        `;
    }
    displayContainer.innerHTML=newElement;
}