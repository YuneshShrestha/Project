var sub =document.getElementById("button");
sub.addEventListener("click",myfunction);
function myfunction()
{
    const d  = new Date();
    document.getElementById("date").innerHTML = d ;
    alert("button clicked!");
}
