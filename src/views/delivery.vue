<script setup>
import { ref, onMounted } from 'vue'

const carrinho = ref([])
const total = ref(0)

onMounted(() => {
  const carrinhoSalvo = localStorage.getItem('carrinho')
  carrinho.value = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []
  calcularTotal()
})

function calcularTotal() {
  total.value = carrinho.value.reduce((soma, item) => {
    return soma + (item.preco * (item.quantidade || 1))
  }, 0)
}

function removerItem(index) {
  carrinho.value.splice(index, 1)
  localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
  calcularTotal()
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho.value))
}

function aumentarQuantidade(index) {
  carrinho.value[index].quantidade++
  salvarCarrinho()
  calcularTotal()
}

function diminuirQuantidade(index) {
  if (carrinho.value[index].quantidade > 1) {
    carrinho.value[index].quantidade--
  } else {
    carrinho.value.splice(index, 1)
  }

  salvarCarrinho()
  calcularTotal()
}

function limparCarrinho() {
  carrinho.value = []
  localStorage.setItem('carrinho', JSON.stringify([]))
  calcularTotal()
}

async function enviarPedido(event) {
  const form = event.target
  const dados = new FormData(form)

  const pedidoCarrinho = carrinho.value.map(item => {
    return `${item.nome} - Quantidade: ${item.quantidade || 1}`
  }).join(', ')

  const pedidoFinal = pedidoCarrinho || dados.get('pedido')

  const pedido = {
    nome: dados.get('nome'),
    telefone: dados.get('telefone'),
    endereco: dados.get('endereco'),
    pedido: pedidoFinal,
    forma_pagamento: dados.get('forma_pagamento'),
    total: total.value
  }

const resposta = await fetch('http://restaurante-web-v9v7.onrender.com/pedidos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pedido)
  })

if (resposta.ok) {
    const dadosResposta = await resposta.json()
    alert(dadosResposta.mensagem || 'pedido realizadado ccom sucesso!')
} else {
    alert('Erro ao enviar pedido')
}

</script>

<template>

   
  <section class="delivery">
    <div class="delivery-card">
      <h1>Delivery da Cafeteria ☕</h1>

      <p class="descricao">
        Receba seus cafés, lanches e doces favoritos no conforto da sua casa.
      </p>

      <div class="info">
        <div>
          <h3>🚚 Entrega rápida</h3>
          <p>Tempo médio: 30 a 50 minutos</p>
        </div>

        <div>
          <h3>📍 Área de entrega</h3>
          <p>Belém e bairros próximos</p>
        </div>

        <div>
          <h3>💳 Pagamento</h3>
          <p>Pix, dinheiro ou cartão</p>
        </div>
      </div>

      <form @submit.prevent="enviarPedido" class="form-delivery">
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="text" name="telefone" placeholder="Telefone" required />
        <input type="text" name="endereco" placeholder="Endereço" required />

        <textarea
          name="pedido"
          placeholder="Digite seu pedido"
          required
        ></textarea>

        <select name="forma_pagamento" required>
          <option value="">Forma de pagamento</option>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão">Cartão</option>
        </select>

        <button type="submit" class="botao-pedido">
          Fazer Pedido
        </button>
      </form>

      <a
        href="https://wa.me/5591999999999"
        target="_blank"
        class="botao-whatsapp"
      >
        Pedir pelo WhatsApp
      </a>
    </div>

 <div class="carrinho" v-if="carrinho.length > 0">
  <h2>🛒 Seu pedido</h2>

  <div class="item-carrinho" v-for="(item, index) in carrinho" :key="index">
    <span>{{ item.nome }}</span>
    <strong>R$ {{ item.preco.toFixed(2) }}</strong>
    <div class="quantidade">
      <button type="button" @click="diminuirQuantidade(index)">-</button>
      <span>{{ item.quantidade || 1 }}</span>
      <button type="button" @click="aumentarQuantidade(index)">+</button>
    </div>

    <strong>
  R$ {{ (item.preco * (item.quantidade || 1)).toFixed(2) }}
</strong>

<button type="button" @click="removerItem(index)">
  Remover
</button>
  </div>

  <p><strong>Quantidade:</strong> {{ carrinho.length }} item(ns)</p>
  <p><strong>Total:</strong> R$ {{ total.toFixed(2) }}</p>

  <button type="button" @click="limparCarrinho">
    Limpar carrinho
  </button>
</div>

  </section>
</template>

<style scoped>
.delivery {
 min-height: 80vh;
background: #f8f1ec;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding: 40px;
}

.delivery-card {
  background: white;
  max-width: 800px;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

.form-delivery {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 25px;
}

.form-delivery input,
.form-delivery textarea,
.form-delivery select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.botao-pedido,
.botao-whatsapp {
  margin-top: 15px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #6b3e2e;
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.delivery {
  padding-top: 20px;
}

.carrinho {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px #00000022;
}

.item-carrinho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.item-carrinho button,
.carrinho button {
  background: #8b4a5a;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.delivery-card {
  margin-top: 20px;
}
</style>