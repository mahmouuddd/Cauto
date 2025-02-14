import { date } from "assert-plus";
import { addRSAMissing } from "sshpk";

const ajoutTrajetElem = {

    btnTrajet:'.py-2.py-lg-0.mx-4.my-2.m-lg-0.my-lg-auto.nav-link[href="/proposerTrajet"]',
    navTrajet:'.form.needs-validation',
    villeDepart:'input[placeholder="Saisir la ville ou adresse"]',  
    click1:'body > div:nth-child(3) > div:nth-child(1)',
    click2:'body > div:nth-child(4) > div:nth-child(1)',
    dateDepart:'input[type="date"]',
    dateArrivee:'input[type="date"]', 
    transport:'label[for="voiture"]', 
    longeur:'input[name="max_length"]',
    largeur:'input[name="max_width"]',
    hauteur:'input[name="max_height"]',
    poids:'label[for="5KG à 30KG"]',
    dMain:'#r1',
    dRelais:'#r4',
    aMain:'#r5',
    aRelais:'#r8',
    btnSbmit:'button[type="submit"]',
    btnVoirTrajet:'.py-2.py-lg-0.mx-4.my-2.m-lg-0.my-lg-auto.nav-link[href="/voirTrajets"]',
    navVoirTrajet:'.row.my-4',
    sucessAjout:'body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',


} 

export default ajoutTrajetElem;