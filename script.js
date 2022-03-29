const hora1 = document.querySelector('#faturamento');
const hora2 = document.querySelector('#diasDeTrabalho');
const hora3 = document.querySelector('#horasDeTrabalho');
const horaSend = document.querySelector('#horaSend');
const storage = {};

//HORA DE TRABALHO

function calculateHour() {
     const f = hora1.value;
     const d = hora2.value;
     const h = hora3.value;
     console.log(f, d, h);
     const show = document.querySelector('.mostrarHorasDeTrabalho');
     const calculo = f / ((d * 4) * h);
     if (f != 0 && d > 0 && d < 8 && h < 25 && h > 0) {
          show.innerHTML = `Você deve cobrar R$${calculo} por cada hora de trabalho. Vamos para a próxima etapa!`;
          return storage.calculoHoras = calculo;
     } else {
          show.innerHTML = `Tem alguma informação errada, bordadeira! Tente novamente.`
     }
};

horaSend.addEventListener('click', calculateHour);


//CUSTOS FIXOS MENSAIS
const custo1 = document.querySelector('#custosMensais');
const custo2 = document.querySelector('#encomendasMensais');
const custosSend = document.querySelector('.custosSend');

function calculateCustos() {
     const c = custo1.value;
     const e = custo2.value;
     const calculo = c / e;
     const show = document.querySelector('.mostrarCustosFixos');
     if (c > 0 && e > 0) {
          show.innerHTML = `Teremos que adicionar R$${calculo} ao valor de cada bordado, mas não se preocupe: isso é feito automaticamente aqui. Vamos para o próximo passo!`
          return storage.calculoCusto = calculo;
     } else {
          show.innerHTML = `Tem alguma informação errada, bordadeira! Volte e tente novamente.`
     }
};


custosSend.addEventListener('click', calculateCustos);

//VALOR DA ENCOMENDA
const valor1 = document.querySelector('#tecido');
const valor2 = document.querySelector('#bastidor');
const valor3 = document.querySelector('#linhas');
const valor4 = document.querySelector('#horas');
const valor5 = document.querySelector('#embalagem');
const valor6 = document.querySelector('#porcentagem');
const valorSend = document.querySelector('.valorSend');

function calculateEncomenda() {
     const tecido = +valor1.value;
     const bastidor = +valor2.value;
     const linhas = +valor3.value;
     const horas = +valor4.value;
     const embalagem = +valor5.value;
     const porcentagem = +valor6.value;
     const show = document.querySelector('.mostrarValorEncomenda');
     const calculo = tecido + bastidor + linhas + (horas * storage.calculoHoras) + embalagem + storage.calculoCusto + (100 + porcentagem / 100);
     if (tecido && bastidor && linhas && horas && embalagem && porcentagem) {
          show.innerHTML = `O valor da sua encomenda é ${calculo}`
     } else {
          show.innerHTML = `Tem alguma informação errada, bordadeira! Volte e tente novamente.`
     }
}

valorSend.addEventListener('click', calculateEncomenda);