const form = document.querySelector('.maschera');

form.addEventListener('submit', e => {
  e.preventDefault();
  let nome = form.firstname.value;
  let cognome = form.lastname.value;
  let eta = form.old.value;
  const corpo = document.getElementsByTagName('body')[0];
  if(eta<18){
    corpo.setAttribute('style', 'background-color:red;');
    alert('Hey '+nome+' '+cognome+" you can't stay here, you re underage!");
  }else{
    corpo.setAttribute("style", "background-color:blue;");
    alert('Hey '+nome+' '+cognome+' you are ok dude, have a good time on my site');
   } }) ;

function classifica(){
 let seriea = [{Name:'Juventus',Points:51,Color1:'#FFFFFF',Color2:'#050505'},{Name:'Inter',Points:47,Color1:'#0175C0',Color2:'#010203'},{Name:'Lazio',Points:45,Color1:'#84D8FC',Color2:'#DDDDDF'},{Name:'Roma',Points:38,Color1:'#F5B922',Color2:'#82142A'},{Name:'Atalanta',Points:35,Color1:'#0060AD',Color2:'#1D1D1B'},{Name:'Cagliari',Points:30,Color1:'#9B1226',Color2:'#0B294B'},{Name:'Parma',Points:28,Color1:'#FFD200',Color2:'#22378C'},{Name:'Milan',Points:28,Color1:'#DE1311',Color2:'#1C1317'},{Name:'Torino',Points:27,Color1:'#8A1E03',Color2:'#FEFFF8'},{Name:'Hellas Verona',Points:26,Color1:'#0850A1',Color2:'#FEE42C'},{Name:'Napoli',Points:24,Color1:'#2192CC',Color2:'#FFFFFF'},{Name:'Bologna',Points:24,Color1:'#002938',Color2:'#B32133'},{Name:'Fiorentina',Points:24,Color1:'#5D44A8',Color2:'#FCFFFF'},{Name:'Udinese',Points:24,Color1:'#FEFFFF',Color2:'#2E2B20'},{Name:'Sassuolo',Points:22,Color1:'#0AA152',Color2:'#1D1E17'},{Name:'Sampdoria',Points:19,Color1:'#0E1D99',Color2:'#FFFDFF'},{Name:'Lecce',Points:16,Color1:'	#FDF201',Color2:'#E91D23'},{Name:'Spal',Points:15,Color1:'#01A0F3',Color2:'#FCFDF2'},{Name:'Brescia',Points:15,Color1:'#025BA6',Color2:'#FCFCFC'},{Name:'Genoa',Points:14,Color1:'#AE1A11',Color2:'#05232C'}];
 seriea.sort((a, b )=>{
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
for(let i=(seriea.length-1);i>=0;i--){
  let riga = tabella.insertRow(partenza);
  let nomeSquadra = riga.insertCell(0);
  let numeroPunti = riga.insertCell(1);
  let numeroPosizione = riga.insertCell(2);
  nomeSquadra.innerText = seriea[i].Name;
  numeroPunti.innerText = seriea[i].Points;
  numeroPosizione.innerText = partenza+i;
  }
  let creaGradiente = document.getElementsByTagName('tr');
  creaGradiente[0].style.backgroundColor='#13273c';
  creaGradiente[0].style.color= 'white';
  for(let i=1;i<=20;i++){
    creaGradiente[i].style.backgroundImage= 'linear-gradient(to right,'+seriea[i-1].Color1+','+seriea[i-1].Color2+')';
    creaGradiente[i].style.color= 'black';
    creaGradiente[i].style.fontWeight= 'bold';
  }  
}

/*
function hideshow (show) {
  let righeTabella = document.getElementsByTagName('tr');
  let cambio = document.getElementsByClassName('.arrow');
  let start = 4;
  if(!show){
    for(let i=start;i<righeTabella.length;i++)
    {
      righeTabella[i].setAttribute('style','display:none');
    }
  cambio.setAttribute('src','down_button.png');
  cambio.setAttribute('alt','show table');
  cambio.setAttribute('onclick','hideshow(true)');
  }
  else{
    for(let i=start;i<righeTabella.length;i++)
    {
      righeTabella[i].setAttribute('style','display:initial');
    }
  cambio.setAttribute('src','up_button.png');
  cambio.setAttribute('alt','hide table');
  cambio.setAttribute('onclick','hideshow(false)');
  }


});*/
