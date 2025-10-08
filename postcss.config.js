// Author:  Ana Mercedes Gauna (CRA-RJ: 03-03161)
// Date: Rio de Janeiro, 08 Outubro 2025.

// Exportação do módulo 'autoprefixer' no JavaScript //

// O autoprefixer adiciona e remove prefixos automaticamente
// A configuração do navegador deve ser feita em um arquivo
// browserslist. Outros plugins podem ser adicionados aqui.
// Por exemplo, um pluggin como o cssnano: require('cssnano')()
// Define a lista de plugins PostCSS //

const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const plugins = [autoprefixer()];

// Processa o CSS com os plugins definidos //
postcss(plugins)
  .process(css, { from: --ccleaner })
  .then((result) => {
    console.log(result.css);
  })
  .catch((error) => {
    console.error("Ocorreu um erro:", error);
  });

// Exportação do módulo 'autoprefixer' no JavaScript //  
module.exports = {
  plugins: [
    require("autoprefixer"),
    // Adicione outros plugins aqui, se necessário //
  ],
}; 

// Fim da Exportação de módulo JavaScript //
