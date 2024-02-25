let vimal = document.getElementById("vimal");

function display(num){
    vimal.value += num;
}
function calculator (num){
    try{
        vimal.value=eval(vimal.value)
    }
    catch{
        alert("invalid option")
    }
}
function clear1(){
    vimal.value = "" ;
}
function del(){
    vimal.value=vimal.value.slice(0,-1);
}