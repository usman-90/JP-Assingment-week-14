function checkName(){
   var x = document.getElementById("namee").value 
    if ( x === ""){
        alert("You cant leave name empty");
        exit()
    }
}
function LName(){
    var y = document.getElementById("lnamee").value
     if ( y === ""){
         alert("You cant leave name empty");
         exitt()
     }
 }
function checkEmail(){
    var a =document.getElementById('email').value
    var b = true
    for (var i = 0 ; i < a.length ; i++ ){
        if (a[i] === "@"){
            b = false
        }
    }
    if ( b !== false){
        alert("Invalid email: '@' is missing! " )
    }
}

function checkNum(){
    var a = document.getElementById('number').value
    if (a.length  !== 11){
        alert("Number must consist of 11 digits! ")
    }
}

function checkzip(){
    var a = document.getElementById('zip').value
    if (a.length !== 5){
        alert("zip code must consist of 5 digits! ")
    }
}

function show(){
    location.href = 'infopg.html'


}
function showdata(){
    a = document.getElementById('namee').value
    document.write(a)
}