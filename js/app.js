const pseudo = "mel";
const img ='img/User_Avatar_2.png';


document.body.innerHTML=
`<article>
    <div id="header">
        <img src="${img}">
        <div>
            <p>${pseudo}</p>
            <p>sponsored</p>
            <p>...</p>
        </div>
    </div>

    <div id="main">
        <img src="img/instagram.webp">
    </div>
    
    <div id="footer">
        <div id="likeAndImg">
            <div id="gauche">
                <img src="img/heart-solid.svg">
                <img src="img/comment-solid.svg">
                <img src="img/paper-plane-solid.svg">
            </div>
            <div id="likes">
                <p>250,223 likes</p>
            </div>
        </div>
            <div id="droite">
                <img src="img/bookmark-solid.svg">
            </div>
    </div>
</article>`;