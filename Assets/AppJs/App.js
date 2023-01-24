let theme = document.querySelector('#theme-btn');
let dark = document.querySelector(".DarkMode");
let light = document.querySelector(".lightMode");
theme.onclick=()=>{
    theme.classList.toggle('fa-sun');
    if(theme.classList.contains('fa-sun')){
        document.body.classList.add("lightTheme");
        dark.classList.add("mode");
        light.style.display="none";
    }else{
        document.body.classList.remove("lightTheme");
        dark.classList.remove("mode");
        light.style.display="flex";
    }
}
// Targetting the DOM and fetching the API
const input = document.querySelector('#search');
const searchBtn =  document.querySelector(".searchBtn");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const followings = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".web");
const companies = document.querySelector(".companies");
const githubBio = document.querySelector(".githubBio");
let img = document.createElement("img");
let block = document.querySelector(".mainImg");
// const url = `https://api.github.com/users/CletsyMedia${input.value}`;




searchBtn.addEventListener("click", function(){
    const url = `https://api.github.com/users/${input.value}`;
    async function getUrl(){
        const response = await fetch(url);
        const data = await response.json();
        const dataDate = data.created_at.slice(0, data.created_at.length - 10);

        img.src = data.avatar_url;
        block.appendChild(img);
        block.style.border="none";
        user.innerText = data.name;
        login.innerHTML = `@${data.login}`
        joined.innerText = `Joined ${dataDate}`
        repo.innerText = data.public_repos;
        follower.innerText = data.followers;
        followings.innerText = data.following;
        locations.innerText = data.location === "" || data.location === null 
            ? "No location" : data.location
        twit.innerText = data.twitter_username === "" || data.twitter_username === null 
            ? "Not a user" : data.twitter_username;
        websites.innerText = data.blog === "" || data.blog === null 
            ? "No website" : data.blog;
        companies.innerText = data.company === "" || data.company === null 
            ? "No company" : data.company;
        githubBio.innerText = data.bio === "" || data.bio === null 
            ? "This profile has no bio...." : data.bio;
    }
    getUrl();
    input.value="";
})
