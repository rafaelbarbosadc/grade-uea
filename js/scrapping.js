//index.js
const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: 'http://cursos3.uea.edu.br/curriculo.php?cursoId=60',
  transform: function (body) {
    return cheerio.load(body)
  },
  encoding: 'latin1'
}

function processarDados(dados){
  //salva no banco de dados
  // console.log(dados)
}

rp(options)
.then(($) => {
  const curso = [];
  const materias = [];
  $('.txt').each((i,item) => {
    curso.push($(item).text());
  })
  curso_nome = curso[0];
  $('.tbSep tr').each((i, item) => {
    if($(item).find('td').length > 0 ) {
      const materia = {
        curso: curso_nome,
        codigo: $($(item).find('td')[0]).text(),
        nome: $($(item).find('td')[1]).text(),
        creditos: $($(item).find('td')[2]).text(),
        carga_horaria: $($(item).find('td')[3]).text(),
      }
      materias.push(materia);
    }
  })
  console.log(materias);  
})
.catch((err) => {
  console.log(err);
})


function formatNome(word) {
  let nome = word.replace(/\n/ig,'');
  nome = nome.replace(/[\t]+/ig,'|');
  return nome;
}


function formatCurso(dados) {
  dados.forEach((dados,indice) => {
    // console.log(dados);
    if(dados.indexOf('PERÍODO') > -1) {
      // console.log(dados);
    }
  });
}



