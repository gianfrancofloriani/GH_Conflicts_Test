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

//funzuione che preleva squadre da file sorgente e crea tabella
const getTeams = async() => {
const lettura = await fetch('http://localhost/RCTest/teams.json');
const dati = await lettura.json();
dati.sort((a, b )=>{
  if(a.Points<b.Points){
      return 1;
  } else if(a.Name>b.Name){
      return 1;
  }
  else{
    return -1;
  }
})

let tabella = document.getElementById('standing');
const partenza = 1;
for(let i=(dati.length-1);i>=0;i--){
  let riga = tabella.insertRow(partenza);
  let nomeSquadra = riga.insertCell(0);
  let numeroPunti = riga.insertCell(1);
  let numeroPosizione = riga.insertCell(2);
  nomeSquadra.innerText = dati[i].Name;
  numeroPunti.innerText = dati[i].Points;
  numeroPosizione.innerText = partenza+i;
  }
  let creaGradiente = document.getElementsByTagName('tr');
  creaGradiente[0].style.backgroundColor='#13273c';
  creaGradiente[0].style.color= 'white';
  for(let i=1;i<=20;i++){
    creaGradiente[i].style.backgroundImage= 'linear-gradient(to right,'+dati[i-1].Color1+','+dati[i-1].Color2+')';
    creaGradiente[i].style.color= 'black';
    creaGradiente[i].style.fontWeight= 'bold';
  }  
return dati;
}

//funzione principale caricata dal body
function classifica() {
 getTeams();
 fillTeam();
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
//funzione che riempie le liste nella form centrale il basso
function fillTeam(){
let rosa = [{Name:'Szczesny', Role:'gk'},{Name:'Gollini', Role:'gk'},{Name:'Sportiello', Role:'gk'},{Name:'Bonucci', Role:'df'},{Name:'Toloi', Role:'df'},{Name:'Hateboer', Role:'df'},{Name:'Djimsiti', Role:'df'},{Name:'Smalling', Role:'df'},{Name:'Danilo', Role:'df'},{Name:'Kjaer', Role:'df'},{Name:'Caceres', Role:'df'},{Name:'Gomez', Role:'mf'},{Name:'Callejon', Role:'mf'},{Name:'Candreva', Role:'mf'},{Name:'Pellegrini', Role:'mf'},{Name:'Locatelli', Role:'mf'},{Name:'Bentancour', Role:'mf'},{Name:'Kluivert', Role:'mf'},{Name:'Malinovskyi', Role:'mf'},{Name:'Zapata', Role:'st'},{Name:'Milik', Role:'st'},{Name:'Cornelius', Role:'st'},{Name:'Caprari', Role:'st'},{Name:'Lapadula', Role:'st'},{Name:'Okaka', Role:'st'}];
let giocatori = document.getElementsByTagName('li');
let por=0;
let dif=3;
let cen=11;
let att=19;
 for(let i=0;i<rosa.length;i++){
    switch (rosa[i].Role){
     case 'gk':
      giocatori[por].innerText=rosa[i].Name;
     por++;
     break;
     case 'df':
      giocatori[dif].innerText=rosa[i].Name;
      dif++;
     break;
     case 'mf':
      giocatori[cen].innerText=rosa[i].Name;
      cen++;
     break;
     case 'st':
      giocatori[att].innerText=rosa[i].Name;
      att++;
     break;
     default:
      console.log('ERROR:Role mismatch');
     break;
   }
  }  
}