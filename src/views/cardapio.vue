
<script setup>
import cappuccino from '../assets/imagens/cappucino.jpg'
import croissant from '../assets/imagens/croissant.jpg'
import bolo from '../assets/imagens/bolo.jpg'
import cafe from '../assets/imagens/cafe.jpg'
import cafeDaManha from '../assets/imagens/cafedamanha.jpg'
import lanche from '../assets/imagens/lanches.jpg'
import misto from '../assets/imagens/mistoquente.jpg'
import taioca from '../assets/imagens/taioca.jpg'
import  sucodemaracuja from '../assets/imagens/sucodemaracuja.jpg'
import sucodemanga from '../assets/imagens/sucodemanga.jpg'
import sucodemorango from '../assets/imagens/sucodemorango.jpg'
import tapiocacomcharque from '../assets/imagens/tapiocacomcharque.jpg'
import paocomovo from '../assets/imagens/paocomovo.jpg'
import paocomovoequeijo from '../assets/imagens/paocomovoequeijo.jpg'
import croisantt from '../assets/imagens/croissantt.jpg'
import sagudemilho from '../assets/imagens/sagudemilho.jpg'
import fatiadebolo from '../assets/imagens/fatiadebolo.jpg'


function adicionarAoCarrinho(nome, preco) {
  const carrinhoSalvo = localStorage.getItem('carrinho')

  const carrinho = carrinhoSalvo
    ? JSON.parse(carrinhoSalvo)
    : []

  carrinho.push({
    nome: nome,
    preco: preco,
    quantidade: 1
  })

  localStorage.setItem('carrinho', JSON.stringify(carrinho))

  alert(`${nome} adicionado ao carrinho!`)
}
</script>

<template>
  <section class="cardapio">
    <h2>Cardápio da Cafeteria </h2>

    <div class="produtos">
      <div class="card">
        <img :src="cappuccino" alt="cappucino" class="foto">
        <h3>Cappuccino</h3>
        <p>Café cremoso com leite vaporizado.</p>
        <strong>R$ 12,00</strong>
        <button
  class="btn-pedir"
  @click="adicionarAoCarrinho('Cappuccino', 12.00)"
>
  Pedir
</button>
      </div>

      <div class="card">
        <div class="card">
          <img :src="fatiadebolo" alt="Fatia de Bolo" class="foto">
          <h3>Fatia de bolo</h3>
          <p>Fatia de bolo caseiro</p>
          <strong>R$ 15.00</strong>
            <button class="btn-pedir" @click="adicionarAoCarrinho('Fatia de bolo', 15.00)">
  Pedir
</button>
        </div>
      </div>

      <div class="card">
  <img :src="paocomovo" alt="Pão com Ovo" class="foto">

  <h3>Pão com Ovo</h3>

  <p>Pão quentinho com ovo.</p>

  <strong>R$ 11,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Fatia de bolo', 15.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="sucodemanga" alt="Suco de Manga" class="foto">

  <h3>Suco de Manga</h3>

  <p>Suco natural gelado.</p>

  <strong>R$ 10,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Fatia de bolo', 15.00)">
  Pedir
</button>

</div>

      <div class="card">
  <img :src="tapiocacomcharque" alt="Tapioca com Charque" class="foto">

  <h3>Tapioca com Charque</h3>

  <p>Tapioca recheada com charque.</p>

  <strong>R$ 18,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Fatia de bolo', 15.00)">
  Pedir
</button>
</div>

      <div class="card">
  <img :src="sucodemaracuja" alt="Suco de Maracujá" class="foto">

  <h3>Suco de Maracujá</h3>

  <p>Suco natural gelado.</p>

  <strong>R$ 10,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Suco de Maracujá', 10.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="taioca" alt="Taioca" class="foto">

  <h3>Tapioca</h3>

  <p>Tapioca recheada com queijo.</p>

  <strong>R$ 15,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Tapioca', 15.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="misto" alt="Misto Quente" class="foto">

  <h3>Misto Quente</h3>

  <p>Pão quentinho com queijo e presunto.</p>

  <strong>R$ 12,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Fatia de bolo', 15.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="paocomovo" alt="Pão com Ovo" class="foto">

  <h3>Pão com Ovo</h3>

  <p>Pão artesanal com ovo mexido.</p>

  <strong>R$ 11,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Pão com Ovo', 11.00)">
  Pedir
</button>
</div>

      <div class="card">
  <img :src="cafe" alt="Café Expresso" class="foto">
  <h3>Café Expresso</h3>
  <p>Café forte e aromático.</p>
  <strong>R$ 8,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Café Expresso', 8.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="misto" alt="Misto Quente" class="foto">
  <h3>Misto Quente</h3>
  <p>Pão quentinho com queijo e presunto.</p>
  <strong>R$ 10,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Misto Quente', 10.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="lanche" alt="Lanche Natural" class="foto">
  <h3>Lanche Natural</h3>
  <p>Opção leve e saborosa.</p>
  <strong>R$ 13,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Lanche Natural', 13.00)">
  Pedir
</button>
</div>

<div class="card">
  <img :src="cafeDaManha" alt="Café da Manhã" class="foto">
  <h3>Combo Café da Manhã</h3>
  <p>Café, pão de queijo e bolo.</p>
  <strong>R$ 22,00</strong>
  <button class="btn-pedir" @click="adicionarAoCarrinho('Combo Café da Manhã', 22.00)">
  Pedir
</button>
</div>

      <div class="card">
        <img :src="croissant" alt="Croissant" class="foto">
        <h3>Croissant</h3>
        <p>Massa folhada leve e crocante.</p>
        <strong>R$ 14,00</strong>
        <button class="btn-pedir" @click="adicionarAoCarrinho('Croissant', 14.00)">
  Pedir
</button>
      </div>

      <div class="card">
        <img :src="bolo" alt="Bolo de Chocolate" class="foto">
        <h3>Bolo de Chocolate</h3>
        <p>Fatia macia com cobertura especial.</p>
        <strong>R$ 15,00</strong>
        <button class="btn-pedir" @click="adicionarAoCarrinho('Bolo de Chocolate', 15.00)">
  Pedir
</button>
      </div>
    </div>
  </section>
</template>

<style scoped>

.produtos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  justify-items: center;
  padding: 30px;
}
.cardapio h2 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #4b0f14;
  font-size: 40px;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
.card h3 {
  color: #4b0f14;
  margin-top: 10px;
}

.card p {
  color: #666;
  margin: 10px 0;
}

.card strong {
  color: #c2185b;
  font-size: 18px;
}

.btn-pedir {
  margin-top: 12px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: #c2185b;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.btn-pedir:hover {
  background: #8b1e3f;
}

.foto {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.3s;
  .card:hover .foto{
    transform: scale(1.05);
  }
}
.foto{
    width: 200px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;

}


@media (max-width: 768px) {
  .card-reserva {
    width: 90%;
    padding: 25px;
  }

  input,
  button {
    width: 100%;
  }

  nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>