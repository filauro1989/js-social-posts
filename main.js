// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


let arrayCards = [
    {
        'profile' : "https://unsplash.it/300/300?image=15",
        'autore' : 'Phil Mangione',
        'time' : '4 mesi fa',
        'post' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'image' : 'https://unsplash.it/600/300?image=171',
        'like' : 80
    },
    {
        'profile' : "https://unsplash.it/300/300?image=16",
        'autore' : 'Fulvio Gaudenzi',
        'time' : '5 mesi fa',
        'post' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'image' : 'https://unsplash.it/600/300?image=172',
        'like' : 110
    },
    {
        'profile' : "https://unsplash.it/300/300?image=17",
        'autore' : 'Valerio Giuffrida',
        'time' : '6 mesi fa',
        'post' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'image' : 'https://unsplash.it/600/300?image=173',
        'like' : 90
    },
    {
        'profile' : "https://unsplash.it/300/300?image=18",
        'autore' : 'Paul Gascoigne',
        'time' : '2 mesi fa',
        'post' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'image' : 'https://unsplash.it/600/300?image=174',
        'like' : 45
    },
    {
        'profile' : "https://unsplash.it/300/300?image=19",
        'autore' : 'Michael Jackson',
        'time' : '6 mesi fa',
        'post' : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        'image' : 'https://unsplash.it/600/300?image=175',
        'like' : 98
    },
];

const cardContainer = document.getElementById('container');

// creo funzione per inserire le card
function printCards(array, container) {
  // svuoto il container
  container.innerHTML = '';

  // ciclo l'array per selezionare i dati
  for (let i = 0; i < array.length; i++) {

    // assegno variabile obj ad ogni elemento dell'array
    const obj = array[i];

    // assegno variabile con dati da stampare
    const templateDiv = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.profile}" alt="${obj.autore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.autore}</div>
                        <div class="post-meta__time">${obj.time}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.post}</div>
            <div class="post__image">
                <img src="${obj.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.like}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;

    // stampo nel container i dati
    container.innerHTML += templateDiv;
  }
};

// richiamo la funzione
printCards(arrayCards, cardContainer);

const likeButton = document.querySelectorAll(".like-button");
let likeNumb = document.getElementById('like-counter-1');

for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", function() {

        likeButton[i].classList.toggle("like-button--liked");

        if (likeButton[i].classList.contains('like-button--liked') == true){
            likeNumb.innerHTML = arrayCards[i].like += 1;

        } else {
            likeNumb.innerHTML = arrayCards[i].like -= 1;
        }

    });
}


