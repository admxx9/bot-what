# 🎰 CasinoBot — Bot de Cassino para WhatsApp

Bot de cassino completo para WhatsApp, construído com **Node.js + Baileys**.  
Sistema de moeda própria, jogos com apostas, menus interativos com botões e animações de digitação.

---

## 📐 Lógica Geral do Bot

### Fluxo de Primeira Interação
1. Usuário manda qualquer mensagem pela primeira vez
2. Bot detecta que é novo usuário → cria perfil com saldo inicial de **500 Fichas**
3. Envia mensagem de boas-vindas apresentando o cassino
4. Exibe o menu principal com botões interativos

### Fluxo de Uso Normal
```
Usuário manda comando ou clica botão
   ↓
Bot reage com emoji (feedback imediato)
   ↓
Bot exibe animação "digitando..." (suspense)
   ↓
Bot responde com resultado
```

---

## 💰 Sistema de Moeda — Fichas (🎰)

Cada usuário tem um saldo de **Fichas** — moeda interna do cassino.  
Fichas são usadas para apostar em todos os jogos. Não expiram.

### Saldo Inicial
- Todo novo usuário recebe **500 Fichas** de boas-vindas

### Formas de Ganhar Fichas
| Fonte | Quantidade | Condição |
|-------|-----------|----------|
| Boas-vindas | 500 Fichas | Apenas 1x ao se cadastrar |
| Bônus diário | 100 Fichas | 1x por dia (`.diario`) |
| Vencer jogos | Variável | Depende da aposta e jogo |
| Jackpot no Slot | 500–5000x aposta | Combinação especial |
| Ranking semanal | 1000 Fichas | Top 1 da semana |

### Regras
- Saldo mínimo para jogar: **10 Fichas**
- Se zerar, pode pegar bônus diário e aguardar
- Fichas não têm valor real — são apenas para o jogo

---

## 🎮 Menu Principal

```
🎰 CASINO BOT

👤 [Nome]
💰 Fichas: [saldo]

[ 🎮 Jogar        ]
[ 👤 Meu Perfil   ]
[ 🏆 Ranking      ]
[ 🎁 Bônus Diário ]
```

---

## 🎲 Lista de Jogos

### ✅ Implementados

---

#### 🎰 Slot Machine (Caça-Níqueis)
**Comando:** `.slot [aposta]`  
3 rolos giram e param em emojis aleatórios.

| Combinação | Prêmio |
|-----------|--------|
| 3 iguais comuns | 2x |
| 3 💎 | 5x |
| 3 7️⃣ | 10x — JACKPOT |
| 3 🌟 | 20x — MEGA JACKPOT |

**WhatsApp:** typing animation durante o giro, reação 🎉 ou 😢 no resultado.

---

#### 🎲 Dado
**Comando:** `.dado [aposta]`  
Tirar 6 = ganhar 5x a aposta.

---

#### ⚡ Duplicar
**Comando:** `.duplicar [aposta]`  
50% de chance de dobrar ou perder tudo.  
**WhatsApp:** suspense com typing animation de 3s antes do resultado.

---

### 🔨 Para Criar

---

#### 💣 Campo Minado (Mines)
**Comando:** `.mines [aposta]`  
Grade 3×3 com botões. Usuário clica nas células revelando 💎 gemas ou 💣 bombas.

- Cada gema revelada aumenta o multiplicador
- Botão "💰 Sacar [valor atual]" sempre disponível
- Clicar em bomba = perde tudo

**Multiplicadores:** 1.2x → 1.5x → 2x → 3x → 5x → 8x → 13x → 20x → 50x  
**WhatsApp:** 9 botões para a grade + botão sacar. A cada clique, nova mensagem com grade atualizada.

---

#### 🗼 Torre (Tower)
**Comando:** `.torre [aposta]`  
Torre com 5 andares. Cada andar tem 3 portas — 1 libera passagem, 2 são armadilhas.

- A cada andar superado o multiplicador cresce
- Botão "🏃 Fugir e Sacar" disponível em cada andar
- Errou a porta = perde tudo

**Multiplicadores:** 1.5x → 2.5x → 4x → 7x → 15x  
**WhatsApp:** botões Porta A / Porta B / Porta C + botão Sacar. Typing animation entre andares.

---

#### 💥 Crash
**Comando:** `.crash [aposta]`  
Multiplicador sobe progressivamente. Usuário deve ejetar antes de crashar.

- Começa em 1.00x e sobe até crashar em ponto aleatório
- Bot atualiza o multiplicador a cada poucos segundos
- `.ejetar` ou botão para sacar com o valor atual
- Se crashar antes = perde tudo

**WhatsApp:** mensagens periódicas com multiplicador atual + botão "🚀 Ejetar (X.XXx)". Reação 🚀 = saiu a tempo | 💥 = perdeu.

---

#### 🃏 Blackjack (21)
**Comando:** `.bj [aposta]`  
Versão clássica contra o dealer (bot).

- Usuário e dealer recebem 2 cartas (1 do dealer virada)
- Botões: "🃏 Pedir carta" | "🛑 Parar"
- Mais próximo de 21 sem ultrapassar ganha
- Blackjack natural (21 direto) = 2.5x

**WhatsApp:** cartas em texto formatado (`♠A ♥7`). Dealer revela carta virada com typing animation.

---

#### 🎡 Roleta
**Comando:** `.roleta [aposta] [aposta_tipo]`  
Roleta europeia simplificada.

| Aposta | Prêmio |
|--------|--------|
| Vermelho/Preto | 1.8x |
| Par/Ímpar | 1.8x |
| Dezena (1-12, 13-24, 25-36) | 2.8x |
| Número exato (0–36) | 35x |

**WhatsApp:** typing animation longa (4s) simulando a roleta girando. Reveal: "🎡 A bolinha parou no 17 — VERMELHO!"

---

#### 🎁 Raspadinha
**Comando:** `.raspar [aposta]`  
3 botões para revelar símbolos progressivamente.

- 3 iguais = premiação (varia por símbolo)
- 2 iguais = devolve aposta
- Sem iguais = perde

**WhatsApp:** cada botão revela um símbolo com suspense (typing animation entre revelações). Reação comemorativa ou derrota no final.

---

#### 🎯 Plinko
**Comando:** `.plinko [aposta] [risco]`  
Bolinha cai por uma pirâmide e pousa em slot com multiplicador.

| Risco | Multiplicadores |
|-------|----------------|
| Baixo | 0.5x a 3x |
| Médio | 0.1x a 10x |
| Alto | 0x a 50x |

**WhatsApp:** mensagem animada mostrando a bolinha descendo nível por nível.

---

#### ❓ Quiz com Apostas
**Comando:** `.quiz [aposta]`  
Pergunta de conhecimentos gerais. Acertou = 2x. Errou = perde.

- 4 opções de resposta em botões
- Perguntas mais difíceis = multiplicador maior (até 5x)
- Timer de 30 segundos visível na mensagem

**WhatsApp:** botões A, B, C, D para as opções. Reação ✅ ou ❌ imediata.

---

#### 🐉 Dragão ou Fênix
**Comando:** `.dragao [aposta]`  
Escolha um lado — 🐉 ou 🔥. O lado com cartas mais próximas de 7.5 ganha.

- Botões: "🐉 Dragão" | "🔥 Fênix"
- Bot distribui cartas e revela com animação
- Empate = devolve 90% da aposta

---

## 🏆 Sistema de Ranking

- Ranking por total de fichas acumuladas
- Reset semanal com recompensa para o top 3
- `.rank` mostra top 10 com medalhas 🥇🥈🥉

---

## 📋 Comandos

| Comando | Descrição |
|---------|-----------|
| `.menu` | Menu principal |
| `.perfil` | Ver saldo e fichas |
| `.diario` | Bônus diário (100 fichas) |
| `.rank` | Ranking dos jogadores |
| `.slot [aposta]` | Caça-níqueis |
| `.dado [aposta]` | Jogar dado |
| `.duplicar [aposta]` | 50/50 |
| `.mines [aposta]` | Campo minado (botões) |
| `.torre [aposta]` | Jogo da torre (botões) |
| `.crash [aposta]` | Crash game |
| `.bj [aposta]` | Blackjack |
| `.roleta [aposta] [tipo]` | Roleta |
| `.raspar [aposta]` | Raspadinha (botões) |
| `.plinko [aposta] [risco]` | Plinko |
| `.quiz [aposta]` | Quiz apostado |
| `.dragao [aposta]` | Dragão ou Fênix |

---

## ⚙️ Stack Técnica

- **Runtime:** Node.js 20
- **WhatsApp:** Baileys 6.7.x (`@whiskeysockets/baileys`)
- **Banco de dados:** JSON local (`/database`)
- **Botões:** `generateWAMessageFromContent` + `relayMessage` com `additionalNodes` (biz + bot nodes)

---

## 📁 Estrutura do Projeto

```
/
├── index.js              # Entrada principal e handler de mensagens
├── buttons.js            # Wrapper para botões interativos WhatsApp
├── efipay.js             # Integração Efí Bank PIX
├── paymentHandler.js     # Lógica de pagamentos
├── userSystem.js         # Sistema de usuários
├── database/
│   ├── usuarios.json     # Perfis e saldos
│   └── pagamentos.json   # Histórico
├── Games/                # Lógica dos jogos
├── settings/             # Configurações
└── sessao/               # Sessão WhatsApp (auth)
```

---

## 🚀 Como Rodar

```bash
npm install
node index.js
```

Na primeira execução, um **código de vinculação** será gerado.  
Acesse no WhatsApp: `Configurações > Aparelhos conectados > Conectar com código`
