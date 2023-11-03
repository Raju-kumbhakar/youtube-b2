function fetchData(){
    console.log("Fetch Data called")

    let d = null;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(data){
        console.log("promise succes",data);
        return data.json()
    })
    .then(function(data){
        console.log("Final data[0].username", data[0].username);
        let para = document.getElementById('username')
        for(let i=0;i<data.length;i++){
            let eachuser = document.createElement('h6');
        eachuser.innerHTML="Welcome "+data[i].username.toUpperCase()

        para.appendChild(eachuser)
        }
        para.style.color="blue";
        para.style.backgroundColor="yellow";
        para.style.fontFamily="cursive"
        para.style.fontSize="25px"



        d = data;  
    })
    .catch(function(err){
        console.log("Promise failed",err)
    });
     console.log(d)
    }
    //timebomb implementation
let timeInSeconds=30;

function updateTimer(){
    if(timerInSeconds < 0){
        clearInterval(interval);
        alert('boom!!!')
        return;
    }
    else{
    const minutes = Math.floor(timerInSeconds/60);
    const seconds = timerInSeconds % 60;
    
    const formattedTime = (minutes + ":" + seconds);
    document.getElementById('timebomb').innerHTML = formattedTime;
    document.getElementById('timebomb').style.color ='red';
    timerInSecond = timerInSeconds - 1;
}

}
interval = setInterval(updateTimer,1000);