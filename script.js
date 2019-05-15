var typing = document.getElementById('type');
var post = document.getElementById('posted');
var share = document.getElementById('shared');
var drop = document.getElementById('drope');

typing.focus();

function addRemove() {
    var element = document.createElement('div');
    element.innerText = typing.value;
    post.appendChild(element);
    typing.value = '';
    typing.focus();
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
