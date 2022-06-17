//const pseudo = ["Gerard", "LolXD", "HAAAAA"];
//const sponso = "sponsored";
//const points = "...";
//const likes = ["250,223 likes", "12 likes", "563 likes"];
//
//const avatar = "img/User_Avatar_2.png";
//const imgInsta = ["img/instagram.webp", "img/crapaud.jpg", "img/Logo_de_Gulli_Africa_(Chaîne_TV).jpg"];
//const imgHearth = "img/heart-solid.svg";
//const imgComment = "img/comment-solid.svg";
//const imgPlane = "img/paper-plane-solid.svg";
//const imgBookmark = "img/bookmark-solid.svg";


const post = [
    {
        name: "Gerard",
        img: "img/instagram.webp",
        number: "250,223 likes" 
    },

    {
        name: "LolXD", 
        img: "img/crapaud.jpg",
        number: "12 likes" 
        
    },

    {
        name: "HAAAAA",
        img: "img/Logo_de_Gulli_Africa_(Chaîne_TV).jpg",
        number: "563 likes"
    },

    {
        name: "E.T.",
        img: "img/e.t.gif",
        number: "63 likes"
    },

    {
        name: "Le Gros",
        img: "img/gros.png",
        number: "HIII likes"
    },

    {
        name: "MASTUUUUU",
        img: "img/teteMastu.jpg",
        number: "563 likes"
    }
];

const sponso = "sponsored";
const points = "...";

const avatar = "img/User_Avatar_2.png";
const imgHearth = "img/heart-solid.svg";
const imgComment = "img/comment-solid.svg";
const imgPlane = "img/paper-plane-solid.svg";
const imgBookmark = "img/bookmark-solid.svg";



for (let i = 0; i < 6; i++) {
    document.body.innerHTML +=
`<article>
    <div id="header">
        <img src="${avatar}">
        <div>
            <p>${post[i].name}</p>
            <p>${sponso}</p>
            <p>${points}</p>
        </div>
    </div>

    <div id="main">
        <img src="${post[i].img}">
    </div>
    
    <div id="footer">
        <div id="likeAndImg">
            <div id="gauche">
                <img src="${imgHearth}">
                <img src="${imgComment}">
                <img src="${imgPlane}">
            </div>
            <div id="likes">
                <p>${post[i].number}</p>
            </div>
        </div>

        <div id="droite">
            <img src="${imgBookmark}">
        </div>
    </div>
</article>`;
}