// ARTICLE LOADING MESSAGE


const articleBox=document.getElementById("articles");


if(articleBox){


articleBox.innerHTML=
`
<div class="loading">
Loading articles
</div>
`;


}
/*
====================================
KStar Daily Advanced JavaScript
====================================
*/


// ============================
// DARK MODE
// ============================


const darkButton = document.getElementById("darkMode");


if(darkButton){


darkButton.addEventListener("click",()=>{


document.body.classList.toggle("dark");



localStorage.setItem(

"darkMode",

document.body.classList.contains("dark")

);



});


}



// Load saved dark mode


if(localStorage.getItem("darkMode") === "true"){


document.body.classList.add("dark");


}






// ============================
// LOAD ARTICLES FROM JSON
// ============================


async function loadArticles(){


const container = document.getElementById("articles");


if(!container) return;



try{


const response = await fetch("data/articles.json");


const articles = await response.json();




container.innerHTML="";



articles.forEach(article=>{


const card=document.createElement("article");


card.className="card";



card.innerHTML=`

<img 
src="${article.image}"
alt="${article.title}"
loading="lazy"
>


<h3>

${article.title}

</h3>


<p>

${article.description}

</p>



<a href="${article.link}">

Read More

</a>

`;



container.appendChild(card);



});



}

catch(error){


console.log(
"Article loading error:",
error
);


}



}




loadArticles();







// ============================
// REAL SEARCH SYSTEM
// ============================



const searchInput=document.getElementById("searchInput");



if(searchInput){



searchInput.addEventListener("input",async()=>{



const value=searchInput.value.toLowerCase();



const container=document.getElementById("articles");



if(!container)return;



try{


const response=await fetch("data/articles.json");


const articles=await response.json();



const results=articles.filter(article=>{


return(

article.title.toLowerCase().includes(value)

||

article.description.toLowerCase().includes(value)

||

article.category.toLowerCase().includes(value)

);


});




container.innerHTML="";



results.forEach(article=>{



container.innerHTML += `


<article class="card">


<img src="${article.image}" loading="lazy">


<h3>${article.title}</h3>


<p>${article.description}</p>


<a href="${article.link}">
Read More
</a>


</article>



`;



});




}

catch(error){


console.log(error);


}



});


}








// ============================
// SMOOTH SCROLL
// ============================


document.querySelectorAll("a[href^='#']").forEach(link=>{


link.addEventListener("click",function(e){


const target=document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});






// ============================
// IMAGE LAZY FALLBACK
// ============================



document.querySelectorAll("img").forEach(img=>{


img.loading="lazy";


});







// ============================
// CURRENT YEAR FOOTER
// ============================


const year=document.querySelector(".year");


if(year){


year.textContent=new Date().getFullYear();


}


// ============================
// SCROLL ANIMATION
// ============================


const animatedElements =
document.querySelectorAll(".card, section");



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



animatedElements.forEach(element=>{


element.classList.add("fade-in");


observer.observe(element);


});

// MOBILE MENU


const menuToggle=document.getElementById("menuToggle");


const nav=document.querySelector("nav");



if(menuToggle && nav){


menuToggle.addEventListener("click",()=>{


nav.classList.toggle("active");


});


}