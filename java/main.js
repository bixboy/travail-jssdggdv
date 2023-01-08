//switch (meteo) {
   // case "solei":
       // console.log("ils fait solei")
      //  break

      //  case "pluie":
         //   console.log("il pleu")
          //  break;

          //  case "vent":
            //    console.log("il il y a du vent")
           //     break

           //     default:
             //       console.log("il fait autre")
              //      break
//}

//let prenoms = ["pierre","maxence","volodia"]
//console.log(prenoms)

//prenoms.push("shaine")
//console.log(prenoms)

//prenoms[1] = "bite"
//console.log(prenoms)

//prenoms.splice(prenoms)
//console.log(prenoms)


//let voitures = ["Tesla","BMW","Porch"]
//console.log(voitures)

//prenoms.push("twingo")
//console.log(voitures)

//prenoms[1] = "Alpine"
//console.log(voitures)

//prenoms.splice(voitures)
//console.log(voitures)

// const = ducoment.querySelector('p#text')
// const text = ducoment.getElementById('text')
// text.innerHTML = "text"

// const liste = document.querySelector('#liste')
// console.log(liste)
// liste.insertAdjacentHTML('beforeend', '<li>Zoé</li>')
// const prenom = document.querySelectorAll('#liste li')
// prenom.forEach(prenom => {
//   console.log(prenom.innerHTML)
//   prenom.style.display = 'none'
//   prenom.classList.add('class-test')
// })

// document.getElementById('premier').classList.add('vert')
// document.getElementById('second').classList.add('rouge')

// const contenu = document.getElementById('contenu')
// const tableau = ["texte 1", "texte 2", "texte 3", "texte 4"]
// tableau.forEach(Texte => {
//   const p = document.createElement('p')
// p.innerHTML = Texte
// contenu.appendChild(p)
// })

// console.log('test 1')
// setTimeout(() => {
//   console.log('test 2')
// }, 4000)

// setInterval(() => {
//   console.log('bonjour')
// }, 1000)

// setInterval(() =>{
//   document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
// },0.001)


//   const contenu = document.getElementById('contenu')
// const tableau = ["texte 1", "texte 2", "texte 3", "texte 4"]
//   setInterval(() => {
//     const p = document.createElement('p')
//     p.innerHTML = "Texte" + Math.floor(Math.random() * 3+1).toString()
//     contenu.appendChild(p)
//   }, 1)

// let canard = document.querySelector('#canard')
// setInterval(() => {
//   const date = new Date()
//   contenu.innerHTML = (date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()) + ':' + (date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()) + ':' + (date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds())
//   if (date.getHours()==12 && date.getMinutes()==30) {
//     document.body.style.backgroundImage = `url(${"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRlex2yeMomsbkm0qzpHjtPf8j9QLCDPLZ_brREwaQIrpsnwot3sOfn8Qr3ujA92cho"})`
//     canard.play()
//     window.open("https://www.instant-gaming.com/fr/7072-acheter-hogwarts-legacy-l-heritage-de-poudlard-pc-jeu-steam-europe/", "nomdelafenetrepopup", "height=XXX, width=XXX, menubar='yes|no', toolbar='yes|no', location='yes|no', status='yes|no', scrollbars='yes|no'");

//   }
// }, 1000)

// titre.style.transform = `translateX(${i}px)`
// i++

// const logo = document.getElementById('logo')
// const dvd = document.getElementById('dvd')
// logo.style.transform = `translate (10px,(${dvd}px))`
// dvd++

document.querySelector('button#click').addEventListener('click', (event) => {
  event.preventDefault()
})

//taille de la box de colision 

let x = 600,
  y = 100,
  dirX = 1,
  dirY = 1;

  //Création et localisation des noms (logo, dvd,)
const speed = 2;
let logo = document.getElementById("logo");
let black = document.getElementById("dvd");
const dvdWidth = logo.clientWidth;
const dvdHeight = logo.clientHeight;

  //Calcule de la box et du mouvement du logo

  const animate = () => {
    const screenHeight = black.clientHeight;
    const screenWidth = black.clientWidth;

    if (y + dvdHeight >= screenHeight+100 || y < 100) {
      dirY *= -1;
    }
    console.log(-document.body.clientWidth/2 + screenWidth/2)
    if (x + dvdWidth >= document.body.clientWidth/2 + screenWidth/2 || x < document.body.clientWidth/2-screenWidth/2) {
      dirX *= -1;
    }
    //Vitesse dans les deux axes x et y

    x += dirX * speed;
    y += dirY * speed;
    logo.style.left = x + "px";
    logo.style.top = y + "px";
    window.requestAnimationFrame(animate);
    }
window.requestAnimationFrame(animate);



let musique = document.querySelector('#musique')

const click = document.getElementById("click")
const i1 = document.querySelector(".i1")
const i2 = document.querySelector(".i2")
const i3 = document.querySelector(".i3")
const i4 = document.querySelector(".i4")
const i5 = document.querySelector(".i5")
const i6 = document.querySelector(".i6")
const i7 = document.querySelector(".i7")
const i8 = document.querySelector(".i8")
const i9 = document.querySelector(".i9")

click.addEventListener('click',()=>{
  setTimeout(() => {
    document.getElementById("click").textContent= "Enfonce moi";
    i1.classList.remove('rotate')
    i2.classList.remove('rotate')
    i3.classList.remove('rotate')
    i4.classList.remove('rotate')
    i5.classList.remove('rotate')
    i6.classList.remove('rotate')
    i7.classList.remove('rotate')
    i8.classList.remove('rotate')
    i9.classList.remove('rotate')
  }, 15000)
})
 
click.addEventListener('click',()=>{
  document.getElementById("click").textContent= "Yaaaaaaaaaaaa";
  musique.play()
  i1.classList.toggle('rotate')
  i2.classList.toggle('rotate')
  i3.classList.toggle('rotate')
  i4.classList.toggle('rotate')
  i5.classList.toggle('rotate')
  i6.classList.toggle('rotate')
  i7.classList.toggle('rotate')
  i8.classList.toggle('rotate')
  i9.classList.toggle('rotate')
}) 

