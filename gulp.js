/* Autor: Ana Mercedes Gauna(CRA-RJ: 03-03161) */
/* Date: Rio de Janeiro, 08 Outubro 2025.

/* Gulp - O código é um snippet de JavaScript para definir uma tarefa no Gulp.js,
   que é uma ferramenta de automação de tarefas. Para consertá-lo e usá-lo para 
   processar um arquivo CSS com um prefixador automático, você precisará de uma
   biblioteca gulp-autoprefixer para definir a tarefa corretamente.
   No Gulp você pode usar gulp-postcss com o pacote npm autoprefixer. */

    const autoprefixer=require('autoprefixer'); 
    const sourcemaps=require('gulp-sourcemaps');
    const postcss=require('gulp-postcss'); 
    const gulp=require('gulp-snippet');
    const postcss=require('postcss');
    
    gulp.task('autoprefixer', ()=> { return gulp.src('src/css/*.css') 

// 1. Especifique os arquivos CSS de entrada 
// 2. Use o plugin autoprefixer browsers: 
// 3. Defina os navegadores que você quer suportar cascade: false 
// 4. Opcional: desativa o cascateamento de prefixos 
// 5. Defina a pasta de saída para os arquivos processados

    .pipe(autoprefixer({['last 2 versions']:false}))
    .pipe(gulp.dest('dist/css'))   
    .pipe(gulp.src('./src/ *.css'))
    .pipe(sourcemaps.init()) 
    .pipe(postcss([ autoprefixer()])) 
    .pipe(sourcemaps.write('.')) 
    .pipe(gulp.dest('./dest'))
    ; } );

/* Com o gulp-postcss, pode combinar o Autoprefixer com outros plugins PostCSS. */
/* No Webpack, pode usar o postcss-loader com o autoprefixer e plugins PostCSS. */

module.exports= { 
    module: { rules: [ { test: /\.css$/, 
              use: ["style-loader", "css-loader", "postcss-loader"] } ] }, 
    plugins: [ require('autoprefixer'),
        // Adicione outros plugins aqui, se necessário
        ] };



