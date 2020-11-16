var data = [];

function addItem() {
    var task, added = false;
    task = document.querySelector(".task").value;

    var todo = {
        text: task,
        checked: false
    }

    if (task !== "") {
        data.forEach(item => {
            if (item.text == task) {
                added = true;
            }
        })
        if (!added) {
            data.push(todo);
            var html, newHtml;
            html = '<div class="item" id="%id%"><div class="container"><div class="row"><div class="custom-control custom-checkbox bs-checkbox"><input type="checkbox" class="custom-control-input" id="todo-%checkbox%"><label class="custom-control-label task" for="todo-%forCheckbox%">%task%</label></div><div class="delete ml-auto my-auto"><i class="far fa-trash-alt"></i></div></div></div></div>'
            newHtml = html.replace('%task%', todo.text);
            newHtml = newHtml.replace('%id%', todo.text);
            newHtml = newHtml.replace('%checkbox%', todo.text);
            newHtml = newHtml.replace('%forCheckbox%', todo.text);
            document.querySelector(".items-container").insertAdjacentHTML('beforeend', newHtml);
            document.querySelector(".input-task").value = "";
            document.querySelector(".input-task").focus();
        } else {
            alert("You have already created this task")
        }
    } else {
        alert("You must fill in the input")
    }
}
document.querySelector(".add-button").addEventListener("click", addItem)
document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        addItem();
    }
})

function deleteTodo(e) {
    if (!e.target.matches('.fa-trash-alt')) return;

    const itemID = e.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID !== -1) {
        data.splice(itemID, 1);
    }
    const el = document.getElementById(itemID);
    el.parentNode.removeChild(el);

}

document.querySelector(".items-container").addEventListener("click", deleteTodo)