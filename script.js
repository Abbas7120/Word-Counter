let wordcount= function(words){
document.getElementById("output").innerHTML="Words Length is " + words + "😎";
};

document.getElementById("btn").onclick=function(){
    wordcount(document.getElementById("words").value.length);
};
