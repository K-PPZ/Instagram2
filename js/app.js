const body = document.body;

const article = document.createElement("article");

const div = document.createElement("div");

const pseudo = document.createElement("p");
pseudo.innerText = "Pseudo";

const sponso = document.createElement("p");
sponso.innerText = "sponsored";

const threepoint = document.createElement("p");
threepoint.innerText = "...";

const numberlike = document.createElement("p");
numberlike.innerText = "250,223 likes";


const header = document.createElement("div");
header.id = "header";

const main = document.createElement("div");
main.id = "main";

const footer = document.createElement("div");
footer.id = "footer";

const likeAndImg = document.createElement("div");
likeAndImg.id = "likeAndImg";

const gauche = document.createElement("div");
gauche.id = "gauche";

const likes = document.createElement("div");
likes.id = "likes";

const droite = document.createElement("div");
droite.id = "droite";

const imgHeader = document.createElement("img");
imgHeader.src="img/User_Avatar_2.png";

const imgMain = document.createElement("img");
imgMain.src="img/instagram.webp";

const imgGauche1 = document.createElement("img");
imgGauche1.src="img/heart-solid.svg";

const imgGauche2 = document.createElement("img");
imgGauche2.src="img/comment-solid.svg";

const imgGauche3 = document.createElement("img");
imgGauche3.src="img/paper-plane-solid.svg";

const imgDroite = document.createElement("img");
imgDroite.src="img/bookmark-solid.svg";



body.appendChild(article);
    article.appendChild(header);
        header.appendChild(imgHeader);
        header.appendChild(div);
            div.appendChild(pseudo);
            div.appendChild(sponso);
            div.appendChild(threepoint);

    article.appendChild(main);
        main.appendChild(imgMain);

    article.appendChild(footer);
        footer.appendChild(likeAndImg);
            likeAndImg.appendChild(gauche);
                gauche.appendChild(imgGauche1);
                gauche.appendChild(imgGauche2);
                gauche.appendChild(imgGauche3);

            likeAndImg.appendChild(likes);
                likes.appendChild(numberlike);

        footer.appendChild(droite);
            droite.appendChild(imgDroite);