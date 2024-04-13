const hamb = document.getElementsByClassName("btm")[0];
const cont = document.getElementsByClassName("btm_inner")[0];

var g = document.getElementsByClassName('btn')[0]

hamb.addEventListener("click", function() {
    alert()
    if(cont.style.display == 'None'){
        cont.style.display = 'Block';
    }else{    
        cont.style.display = 'None';
    }
});

g.addEventListener("mouseover", function() {
    g.innerHTML = 'Get Started >>';
});


 

g.addEventListener("mouseout", function() {
    g.innerHTML = 'Get Started';
});
