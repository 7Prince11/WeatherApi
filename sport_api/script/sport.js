const football = document.querySelector('#football'); 
const golf = document.querySelector('#golf');
 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '631147a32cmsh3ddee0650df535fp168592jsn23f579588f47',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

    fetch('https://odds.p.rapidapi.com/v4/sports?all=true', options)
	.then(response => response.json())
	.then(response =>  response.forEach(element =>{
        const p = document.createElement('p');
        p.innerHMTL = `Group : ${element.group}`;
        console.log(p)
    }) )





 
    // fetch('https://weatherapi-com.p.rapidapi.com/sports.json?q=London', options)
	// .then(response => response.json())
	// .then(response => response.golf.forEach(element => {
   

    //     const p = document.createElement('p');
    //     p.innerHTML = `<div class='inf'> Stadium : ${element.stadium}</div>`;
    //     p.innerHTML += `<div class='inf'> Country : ${element.country}</div>` ;
    //     p.innerHTML += `<div class='inf'> Tournament : ${element.tournament}</div>` ;
    //     p.innerHTML += `<div class='inf'> Start : ${element.start}</div>` ;
    //     p.innerHTML += `<div class='inf'> Match : ${element.match}</div> <hr color='red' width='100%'>` ;
    //     golf.appendChild(p);  
    // }))
 