// Eine Beispielliste von Zutaten mit ihren Mengen für eine Portion
const rezeptZutaten = [
    { zutat: 'Sphagetti', menge: 125, einheit: ' g' },
    { zutat: 'Tomate', menge: 0.25, einheit: ' ' },
    { zutat: 'Knoblauchzehen', menge: 1.25, einheit: ' ' },
    { zutat: 'Peperoni', menge: 0.5, einheit: ' ' },
    { zutat: 'Petersilie', menge: 1.25, einheit: ' EL' },
    { zutat: 'Gemüsebrühepulver', menge: 0.5, einheit: ' TL' },
    { zutat: 'Olivenöl, nativ', menge: 25, einheit: ' ml' },
    { zutat: 'Hartkäse', menge: 10, einheit: ' g' },
    { zutat: 'Basilikum', menge: 0.25, einheit: ' TL' },
    { zutat: 'Oregano', menge: 0.25, einheit: ' TL' },
    { zutat: 'Salz', menge: 0.125, einheit: ' TL' },
  ];
 
  // Funktion zum Berechnen der Mengen basierend auf der ausgewählten Anzahl der Portionen
  function berechneMengen() {
    const portionen = parseInt(document.getElementById('portionen').value);
  
    // Tabelle zurücksetzen
    const tabelle = document.getElementById('mengenTabelle');
    tabelle.getElementsByTagName('tbody')[0].innerHTML = '';
  
    // Neue Zutatenzeilen basierend auf der Anzahl der Portionen generieren
    rezeptZutaten.forEach(zutat => {
      const neueZeile = document.createElement('tr');
      const zutatNameZelle = document.createElement('td');
      const zutatMengeZelle = document.createElement('td');
  
      zutatNameZelle.textContent = zutat.zutat;
      zutatMengeZelle.textContent = (zutat.menge * portionen).toFixed(1) + (zutat.einheit); // Mengen für die ausgewählten Portionen berechnen
  
      neueZeile.appendChild(zutatMengeZelle);
      neueZeile.appendChild(zutatNameZelle);

      tabelle.getElementsByTagName('tbody')[0].appendChild(neueZeile);
    });

  }
   
  berechneMengen();



  

  const rezeptNaehrwerte = [
    { naehrwert: 'Kalorien', menge: 178, einheit: ' ' },
    { naehrwert: 'Kohlenhydrate', menge: 23, einheit: ' g' },
    { naehrwert: 'Eiweiß', menge: 4.7, einheit: ' g' },
    { naehrwert: 'Fett', menge: 178.25, einheit: ' g' }
  ];

/*function berechneMengenNaehrwerte() {
    
    const portionen = parseInt(document.getElementById('portionen').value);

  // Tabelle zurücksetzen
  const tabelle = document.getElementById('naehrwerte');
  tabelle.innerHTML = '';

  // Neue Zutatenzeilen basierend auf der Anzahl der Portionen generieren
  rezeptZutaten.forEach(zutat => {
    const zutatNameDefinition = document.createElement('dt');
    const zutatMengeDefinition = document.createElement('dd');

    zutatNameDefinition.textContent = zutat.zutat;
    zutatMengeDefinition.textContent = (zutat.menge * portionen).toFixed(2); // Mengen für die ausgewählten Portionen berechnen

    tabelle.appendChild(zutatNameDefinition);
    tabelle.appendChild(zutatMengeDefinition);
  });
}

  berechneMengenNaehrwerte();*/


  