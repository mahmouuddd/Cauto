const ajoutColisElem = {
    btnAjout:'[href="/ajouterColis"] > .d-flex > .my-auto',
    quantVerif:'.col-3',
    quantiteInput:'input[name="qte"]',
    nomObjetInput:'input[name="title"]',
    longeurInput:'input[name="length"]',
    largeurInput:'input[name="width"]',
    hauteurInput:'input[name="height"]',
    poidsBtn:'label[for="5KG à 30KG-0"]',
    photoBtn:'label[for="photo-0"]',
    btnSuivant:'button[type="submit"]',
    villeDepart:':nth-child(1) > .col-12 > :nth-child(1) > .form-control',
    bizerte:'div[class="pac-container pac-logo hdpi"] div:nth-child(1)',
    villeArrivee:':nth-child(2) > .col-12 > :nth-child(1) > .form-control',
    mahdia:'div[class="pac-container pac-logo hdpi"] div:nth-child(1)', 
    dateDepart:':nth-child(3) > :nth-child(1) > .form-control',
    dateArrivee:'.ajouter-colis_FromBox__MTfnE > :nth-child(1) > :nth-child(3) > :nth-child(2) > .form-control',
    btnSuivant2:'button[type="submit"]',
    prixInput:'div[class="input-group"] input[type="number"]',
    sucessAjout:'.alert-success'

}
export default ajoutColisElem;
