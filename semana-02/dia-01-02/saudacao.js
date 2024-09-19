// saudacao.js
/*function saudar(nome) {
    return Olá, </span><span class="token interpolation"><span class="token interpolation-pinctuation punctuation">${</span>nome<span class="token interpolation-punctuation punctuation">}
    </span></span><span class="token string">! Seja bem-vindo(a)!;
}

module.exports = saudar;*/

// saudacao.js
function saudar(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)!`;
}
module.exports = saudar