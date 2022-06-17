const pseudo = "Gerard";
const sponso = "sponsored";
const points = "...";
const likes = "250,223 likes";

const avatar = "img/User_Avatar_2.png";
const imgInsta = "img/instagram.webp";
const imgHearth = "img/heart-solid.svg";
const imgComment = "img/comment-solid.svg";
const imgPlane = "img/paper-plane-solid.svg";
const imgBookmark = "img/bookmark-solid.svg";


document.body.innerHTML=
`<article>
    <div id="header">
        <img src="${avatar}">
        <div>
            <p>${pseudo}</p>
            <p>${sponso}</p>
            <p>${points}</p>
        </div>
    </div>

    <div id="main">
        <img src="${imgInsta}">
    </div>
    
    <div id="footer">
        <div id="likeAndImg">
            <div id="gauche">
                <img src="${imgHearth}">
                <img src="${imgComment}">
                <img src="${imgPlane}">
            </div>
            <div id="likes">
                <p>${likes}</p>
            </div>
        </div>
            <div id="droite">
                <img src="${imgBookmark}">
            </div>
    </div>
</article>`;