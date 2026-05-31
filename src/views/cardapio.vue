cappucino.jpg
cafe.jpg
fatiadebolo.jpg
bolodechocolate.jpg
sucodemaracuja.jpg
sucodemanga.jpg
sucodemorango.jpg
taioca.jpg
tapiocacomcharque.jpg
paocomovo.jpg
mistoquente.jpg
croissant.jpg
lanches.jpg
cafedamanha.jpg

<script setup>
import cappuccino from '../assets/imagens/cappucino.jpg'
import cafe from '../assets/imagens/cafe.jpg'
import fatiaBolo from '../assets/imagens/fatiadebolo.jpg'
import boloChocolate from '../assets/imagens/bolo.jpg'
import sucoMaracuja from '../assets/imagens/sucodemaracuja.jpg'
import sucoManga from '../assets/imagens/sucodemanga.jpg'
import sucoMorango from '../assets/imagens/sucodemorango.jpg'
import tapioca from '../assets/imagens/taioca.jpg'
import tapiocaCharque from '../assets/imagens/tapiocacomcharque.jpg'
import paoOvo from '../assets/imagens/paocomovo.jpg'
import misto from '../assets/imagens/mistoquente.jpg'
import croissant from '../assets/imagens/croissant.jpg'
import lanche from '../assets/imagens/lanches.jpg'
import cafeDaManha from '../assets/imagens/cafedamanha.jpg'

const categorias = [
  {
    titulo: '☕ Cafés e Cappuccinos',
    produtos: [
      { nome: 'Cappuccino', descricao: 'Café cremoso com leite vaporizado', preco: 'R$ 12,00', imagem: cappuccino },
      { nome: 'Café Expresso', descricao: 'Café forte e aromático', preco: 'R$ 8,00', imagem: cafe }
    ]
  },
  {
    titulo: '🥤 Bebidas',
    produtos: [
      { nome: 'Suco de Maracujá', descricao: 'Suco natural gelado', preco: 'R$ 10,00', imagem: sucoMaracuja },
      { nome: 'Suco de Manga', descricao: 'Suco natural gelado', preco: 'R$ 10,00', imagem: sucoManga },
      { nome: 'Suco de Morango', descricao: 'Suco natural gelado', preco: 'R$ 10,00', imagem: sucoMorango }
    ]
  },
  {
    titulo: '🥪 Pães e Sanduíches',
    produtos: [
      { nome: 'Misto Quente', descricao: 'Pão com queijo e presunto', preco: 'R$ 12,00', imagem: misto },
      { nome: 'Pão com Ovo', descricao: 'Pão artesanal com ovo mexido', preco: 'R$ 11,00', imagem: paoOvo },
      { nome: 'Croissant', descricao: 'Massa folhada crocante', preco: 'R$ 14,00', imagem: croissant },
      { nome: 'Lanche Natural', descricao: 'Lanche leve e saboroso', preco: 'R$ 13,00', imagem: lanche }
    ]
  },
  {
    titulo: '🥞 Tapiocas',
    produtos: [
      { nome: 'Tapioca', descricao: 'Tapioca recheada com queijo', preco: 'R$ 15,00', imagem: tapioca },
      { nome: 'Tapioca com Charque', descricao: 'Tapioca recheada com charque', preco: 'R$ 18,00', imagem: tapiocaCharque }
    ]
  },
  {
    titulo: '🍰 Bolos e Sobremesas',
    produtos: [
      { nome: 'Fatia de Bolo', descricao: 'Fatia de bolo caseiro', preco: 'R$ 15,00', imagem: fatiaBolo },
      { nome: 'Bolo de Chocolate', descricao: 'Bolo macio de chocolate', preco: 'R$ 15,00', imagem: boloChocolate }
    ]
  },
  {
    titulo: '🍽️ Combos',
    produtos: [
      { nome: 'Combo Café da Manhã', descricao: 'Café, pão e acompanhamento', preco: 'R$ 22,00', imagem: cafeDaManha }
    ]
  }
]

function adicionarAoCarrinho(produto) {
  const carrinhoSalvo = localStorage.getItem('carrinho')
  const carrinho = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []

  carrinho.push({
    nome: produto.nome,
    preco: produto.preco,
    quantidade: 1
  })

  localStorage.setItem('carrinho', JSON.stringify(carrinho))
  alert(`${produto.nome} adicionado ao carrinho!`)
}
</script>

<template>
  <section class="cardapio">
    <h2>Cardápio da Cafeteria</h2>

    <div v-for="categoria in categorias" :key="categoria.titulo" class="categoria">
      <h3>{{ categoria.titulo }}</h3>

      <div class="produtos">
        <div v-for="produto in categoria.produtos" :key="produto.nome" class="card">
          <img :src="produto.imagem" :alt="produto.nome">

          <h4>{{ produto.nome }}</h4>
          <p>{{ produto.descricao }}</p>

          <div class="rodape-card">
            <strong>{{ produto.preco }}</strong>
            <button @click="adicionarAoCarrinho(produto)">Pedir</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cardapio {
  padding: 40px;
  background: #f8f3f5;
}

.cardapio h2 {
  text-align: center;
  color: #3b0d1c;
  font-size: 36px;
  margin-bottom: 40px;
}

.categoria {
  margin-bottom: 50px;
}

.categoria h3 {
  color: #4b1020;
  font-size: 26px;
  margin-bottom: 20px;
  border-bottom: 2px solid #b04a76;
  padding-bottom: 8px;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.card {
  background: white;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
}

.card h4 {
  color: #3b0d1c;
  margin-top: 12px;
  font-size: 20px;
}

.card p {
  color: #555;
  font-size: 15px;
}

.rodape-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.rodape-card button {
  background: #b04a76;
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

.rodape-card button:hover {
  background: #8f345c;
}
</style>