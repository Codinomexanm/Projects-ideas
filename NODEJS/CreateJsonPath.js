const tj = require('togeojson');
const fs = require('fs');
const path = require('path');
const DOMParser = require('xmldom').DOMParser;

// Especifique o caminho do arquivo KML
const kmlPath = 'ti.kml';

// Crie um objeto DOM a partir do arquivo KML
const kml = new DOMParser().parseFromString(fs.readFileSync(kmlPath, 'utf8'));

// Converta o KML em um objeto JavaScript
const converted = tj.kml(kml);

// Especifique o caminho e nome do arquivo JSON que será gerado
const jsonPath = path.join(path.dirname(kmlPath), `${path.basename(kmlPath, path.extname(kmlPath))}.json`);

// Salve o objeto JavaScript em um arquivo JSON local
fs.writeFileSync(jsonPath, JSON.stringify(converted, null, 2));

console.log(`Arquivo JSON gerado com sucesso: ${jsonPath}`);


// converte um arquivo kml em json
