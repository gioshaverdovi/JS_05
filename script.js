var typing = document.getElementById('type');
var post = document.getElementById('posted');
var share = document.getElementById('shared');


typing.focus();

function addRemove() {
    var element = document.createElement('div');
    element.style.display = "flex";
    element.style.justifyContent = "space-between";
    element.innerText = typing.value;
    post.appendChild(element);
    typing.value = '';
    typing.focus();


    var close = document.createElement('button');
    close.innerText = "delete"
    close.type="button";
    element.appendChild(close);
    close.addEventListener('click', function(event){
        event.target.parentNode.remove();
    });
}

typing.addEventListener('keyup', function(event){
    if(event.which == 13 && typing.value != ''){
        addRemove();
    }
    else if (event.which == 13 && typing.value == ''){
        window.alert('შეიყვანეთ ტექსტი');
    }
});

share.addEventListener('click', function(){
    if (typing.value != ''){
        addRemove();
    }
    else {
        window.alert('შეიყვანეთ ტექსტი');
    }
});
