let cat = "general"

let catLinks = document.querySelectorAll(".nav-link");

console.log(catLinks);
for(let i=0 ; i< catLinks.length ; i++){
    catLinks[i].addEventListener("onClick", console.log(catLinks[i].innerHTML)
    )
}




let req = new XMLHttpRequest();
let Url= `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&language=en&apiKey=854990eb3b914833ad2f3e86c6b1c604`;
let news;
req.open("GET" , Url)
req.send();
req.onreadystatechange = function(){
    if(req.status==200 && req.readyState== 4){
        news = JSON.parse(req.response);
        let data = news.articles;
        console.log(data)
        displayData(data);

    }else{
        return false
    }

}
let col = ""

let displayData = (data)=>{
    data.map( item =>{
        return col += `
                            <div class="col-md-3">
                                <img src="${item.urlToImage}" alt="" class="img-fluid">
                                <h2>${item.title}</h2>
                                <p>${item.description}</p>
                            </div>
                        `
    })
    document.getElementById("show").innerHTML = col

}



