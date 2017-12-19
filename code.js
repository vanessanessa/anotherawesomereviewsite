/*this function will recieve a movie object, like the one in data.js,
and update the document by mutating the right nodes with the right data*/ 

function renderMovie(data) {
    //rendering logic
    document.querySelector(".info-section h1").textContent = data.title;
    document.querySelector(".info-section p").textContent = data.info;
    document.querySelector(".poster").setAttribute("src", data.imgUrl);

    let actorList = ""; 
    for (let i = 0; i < data.actors.length; i++) {
        actorList += "<li>" + data.actors[i] + "</li>"; 
    }

    document.querySelector(".info-section ul").innerHTML = actorList;
}

function changeStarRating(rating) {
    for(let i = 1; i <= 5; i++) {
        let star = document.getElementById("star" + i);
        if (i <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    }
}

for(let i = 1; i <= 5; i++) {
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function() {
        changeStarRating(i);
    });
}

//movieData variable created in data.js
renderMovie(movieData);