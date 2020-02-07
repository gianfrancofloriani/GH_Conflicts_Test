const form = document.querySelector('.maschera');
class squadra {
  constructor() {
    this.team = "";
    this.points=0;
    this.color1="";
    this.color2="";
   }
   setDatas(team,points,color1,color2)
   {
    this.team = team;
    this.points= points;
    this.color1= color1;
    this.color2= color2;
   }

  }
/*
footballDB.collection('classifica').get().then((snapshot) => {
  snapshot.docs.forEach(doc =>{
    console.log(doc.data().squadra);
    console.log(doc.data().punti);
    //console.log(doc.data().created_at.toDate());
  });
  }).catch(err =>{
 console.log(err);
})
*/
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

//funzione che preleva squadre da file sorgente e crea tabella
const getTeams = async() => {
//const lettura = await fetch('http://localhost/RCTest/teams.json');
//const dati = await lettura.json();

let dati;

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

//funzione che preleva giocatori da file sorgente e compila lista
const getPlayers = async() => {
  const lettura = await fetch('http://localhost/RCTest/myteam.json');
  const dati = await lettura.json();
  let giocatori = document.getElementsByTagName('li');
  let por=0;
  let dif=3;
  let cen=11;
  let att=19;
  for(let i=0;i<dati.length;i++){
      switch (dati[i].Role){
      case 'gk':
        giocatori[por].innerText=dati[i].Name;
      por++;
      break;
      case 'df':
        giocatori[dif].innerText=dati[i].Name;
        dif++;
      break;
      case 'mf':
        giocatori[cen].innerText=dati[i].Name;
        cen++;
      break;
      case 'st':
        giocatori[att].innerText=dati[i].Name;
        att++;
      break;
      default:
        console.log('ERROR:Role mismatch');
      break;
    }
    } 
}
//funzione principale caricata dal body
function classifica() {
 downloadTables(); 
// getTeams();
//getPlayers();
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

const downloadTables = async() => {
  let dati = new squadra();
  
  footballDB.collection('classifica').get().then((snapshot) => {
    for(let i=0; i < snapshot.docs.length;i++)
    {
     dati [i].setDatas(snapshot.docs[i].data().Name,snapshot.docs[i].data().Points,snapshot.docs[i].data().Color1,snapshot.docs[i].data().Color2);
     
  
   }
})
console.log(dati);
/*
     for(let i=0; i < snapshot.docs.length;i++)
    {
     dati [i].setDatas(snapshot.docs[i].data().Name,snapshot.docs[i].data().Points,snapshot.docs[i].data().Color1,snapshot.docs[i].data().Color2);
      =new squadra(snapshot.docs[i].data().Name,snapshot.docs[i].data().Points,snapshot.docs[i].data().Color1,snapshot.docs[i].data().Color2);
  
   }
    
      
    a.push({
    Name : (doc.data().Name),
    Points : (doc.data().Points),
    Color1 : (doc.data().Color1),
    Color2 : (doc.data().Color2),
     })
     let a=new squadra(doc.data().Name,doc.data().Points,doc.data().Color1,doc.data().Color2);
     console.log(a);
     dati.push(a);
  });
  }).catch(err =>{
 console.log(err);
})*/

}