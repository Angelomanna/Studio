let count = 0
count = document.getElementById("count")


function hello(){
    count += 1
    console.log(count);
}
setInterval(hello,1000)




function toCelsius(temp){
    return (temp - 32) * (5/9)
}

function toFarenheit(temp){
    return temp * 9/5 + 32
}