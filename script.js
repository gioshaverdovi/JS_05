var typing = document.getElementById('type');
var post = document.getElementById('posted');
var share = document.getElementById('shared');
// var close = document.getElementById('close');


typing.focus();

function addRemove() {
    var element = document.createElement('div');
    element.innerText = typing.value;
    post.appendChild(element);
    typing.value = '';
    typing.focus();
    var close = document.createElement('span');
    close.innerText = " X";
    close.classList.add('close');
    element.appendChild(close);
    close.addEventListener('click', function(event){
        event.target.parentNode.remove();
    })
}

typing.addEventListener('keyup', function(event){
    if(event.which == 13){
        addRemove();
    }
});

share.addEventListener('click', function(){
    addRemove();
});
