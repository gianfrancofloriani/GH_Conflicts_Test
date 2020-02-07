const form = document.querySelector('.maschera');

//listener submit form di ingresso
form.addEventListener('submit', e => {
  e.preventDefault();
  let nome = form.firstname.value;
  let cognome = form.lastname.value;
  let eta = form.old.value;
  const corpo = document.getElementsByTagName('body')[0];
  let chiudiScatola=document.getElementById('popup');

  if(eta<18){
    chiudiScatola.setAttribute('style','background-color:red');
    alert('Hey '+nome+' '+cognome+" you can't stay here, you re underage!");
  }else{
    chiudiScatola.classList.replace('scatola','scatola_chiusa');
    corpo.classList.add('showbody');
    alert('Hey '+nome+' '+cognome+' you are ok dude, have a good time on my site');
   } }) ;

//funzione che preleva squadre da file sorgente, crea tabella e relativi sfondi-gradiente
const getTeams = async() => {
  let riempiTabella = document.getElementsByTagName('td');
  let i=0;
  footballDB.collection('classifica').orderBy('Points','desc').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
      riempiTabella[i].innerText=doc.data().Name;
      riempiTabella[i+1].innerText=doc.data().Points;
      riempiTabella[i].parentElement.style.backgroundImage= 'linear-gradient(to right,'+doc.data().Color1+','+doc.data().Color2+')';
      riempiTabella[i].parentElement.style.color= 'black';
      riempiTabella[i].parentElement.style.fontWeight= 'bold';
      i+=3;
    });
    }).catch(err =>{
   console.log(err);
})


}

//funzione che preleva giocatori da file sorgente e compila lista
const getPlayers = async() => {
  let giocatori = document.getElementsByTagName('li');
  let por=0;
  let dif=3;
  let cen=11;
  let att=19;
  footballDB.collection('rosa').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{

      switch (doc.data().Role){
        case 'gk':
          giocatori[por].innerText=doc.data().Name;
        por++;
        break;
        case 'df':
          giocatori[dif].innerText=doc.data().Name;
          dif++;
        break;
        case 'mf':
          giocatori[cen].innerText=doc.data().Name;
          cen++;
        break;
        case 'st':
          giocatori[att].innerText=doc.data().Name;
          att++;
        break;
        default:
          console.log('ERROR:Role mismatch');
        break;
      }
      }
    );
    }).catch(err =>{
   console.log(err);
  })
}
//funzione principale caricata dal body
function classifica() {
 getTeams();
 getPlayers();
}

//funzione mostra/nascondi classifica legata al pulsante freccia
function hideshow (show) {
  let righeTabella = document.getElementsByTagName('tr');
  let cambio = document.querySelector('.arrow');
  let start = 6;
  if(!show){
    for(let i=start;i<righeTabella.length;i++)
    {
    righeTabella[i].classList.add('tr-hidden');
    }
  cambio.setAttribute('src','down_button.png');
  cambio.setAttribute('alt','show table');
  cambio.setAttribute('onclick','hideshow(true)');
  }
  else{
    for(let i=start;i<righeTabella.length;i++)
    {
      righeTabella[i].classList.remove('tr-hidden');
    }
  cambio.setAttribute('src','up_button.png');
  cambio.setAttribute('alt','hide table');
  cambio.setAttribute('onclick','hideshow(false)');
   
  }
}
