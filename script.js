var model = {
  count: 0,
  history: [
    'Sozialdarwinismus', 'Menscheit weißt unterschiedlich wertvolle Rassen auf',
  ],
  spanishVocab: [['hablar', 'sprechen'], ['correr', 'laufen'], 'ir'],
  englishVocab: [
    ['Breakfast', 'Fruehstueck'], ['Kleidung', 'Clothes'], ['Eye', 'Auge'],
    ['Stomach', 'Bauch'], ['Jam', 'Marmelade'], ['Butter', 'Butter'], ['Tisch', 'Table'],
    ['History', 'Geschichte'], ['Vocabulary', 'Vokabeln'], ['Story', 'Geschichte'], ['Clock', 'Uhr']
    ['Mouse', 'Maus'], ['Plate', 'Teller'], ['Baby', 'Baby'], ['This', 'Dieses'], ['Points', 'Punkte']],
  user: {},
}


var cardView = {
  init: () => {
    this.points = localStorage.getItem('vocab-points');
    if (this.points === "null") { this.points = 0 }
    this.punkteElement = document.getElementById('punkte');
    this.punkteElement.innerHTML = '&#x2b50;' + this.points;
    this.aufgabeElement = document.getElementById("aufgabe");
    this.aufgabeElement.innerHTML = model.englishVocab[model.count][0];
    this.checkenElement = document.getElementById("checken");
    this.inputElement = document.getElementById('input');
    this.checkenElement.addEventListener('click', () => {
      octopus.check();
      if (model.count > model.englishVocab.length - 1) { model.count = 0; }
      this.points++;
      localStorage.setItem('vocab-points', this.points);
      this.punkteElement.innerHTML = '&#x2b50;' + this.points;
    })
  },
}

var octopus = {
  init: () => {
    let modelCopy = JSON.parse(localStorage.getItem('vocab-model'));
    if(modelCopy){ model = modelCopy; }
    this.inputElement = document.getElementById('input');
    //alertView.init();
    cardView.init();
  },
  check: () => {
    if (this.inputElement.value.replace(/\u00fc/g, "ue") == model.englishVocab[model.count][1]) {
      alert('Richtig!');
      model.count++;
      localStorage.setItem('vocab-model', JSON.stringify(model));
    } else {
      alert('Die richtige Antwort war: ' + model.englishVocab[model.count][1]);
    }
  },
  getCurrent: () => { }
}

onload = () => {
  octopus.init();
}