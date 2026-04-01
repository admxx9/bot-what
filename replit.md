# BotAluguel — Sistema de Aluguel de Bot WhatsApp

Sistema completo de aluguel de bot WhatsApp com painel web integrado, pagamentos automáticos via PIX (Efí Bank) e gerenciamento de grupos.

## Arquitetura

### Bot WhatsApp (`index.js`)
- Construído com Baileys (WhiskeySockets)
- Sistema de moedas e planos (Básico / Pro / Premium)
- Gerenciamento de grupos por usuário
- Menus interativos em camadas (WhatsApp list messages)
- Fluxo de entrada em grupo via `.link`
- Detecção automática de cargo admin
- Sistema de ativação por privado (`.ativar`)
- Notificações de expiração (48h e 24h)

### API REST (`api.js`)
- Express.js na porta 3001
- Autenticação por número de telefone (header `x-user-phone`)
- Endpoints para usuário, grupos, planos, PIX
- Compartilha a mesma base de dados JSON do bot

### Painel Web (`web/`)
- React 19 + TypeScript + Vite
- Tailwind CSS v4 + shadcn/ui (componentes customizados)
- TanStack Query v5 para gerenciamento de estado assíncrono
- React Router v6 para navegação
- Framer Motion para animações
- Dark mode por padrão, mobile-first

## Estrutura de Arquivos

```
index.js            — Bot WhatsApp (Baileys)
api.js              — API REST (Express, porta 3001)
efipay.js           — Integração Efí Bank PIX (NÃO MODIFICAR)
buttons.js          — Helpers de mensagens interativas Baileys
database/
  usuarios.json     — Usuários e saldo de moedas
  grupos.json       — Grupos vinculados por usuário
  planos_ativos.json— Planos ativos por usuário
  pagamentos.json   — Histórico de pagamentos PIX
sessao/             — Sessão WhatsApp (Baileys multi-file)
certificado.p12     — Certificado mTLS Efí Bank (PRODUÇÃO)
web/
  src/
    pages/          — Dashboard, Login, Grupos, Planos, Recarregar
    components/     — Layout, ui/Button, ui/Card, ui/Badge, ui/Input
    lib/            — api.ts, utils.ts
    hooks/          — useAuth.ts
```

## Planos Disponíveis

| Plano   | Moedas | Duração | Grupos      |
|---------|--------|---------|-------------|
| Básico  | 150    | 30 dias | 1           |
| Pro     | 350    | 30 dias | 5           |
| Premium | 600    | 30 dias | Ilimitados  |

**Taxa de conversão:** 1 BRL = 10 moedas (mínimo R$ 5,00)

## Configuração

### Variáveis de Ambiente (`.env`)
```
EFI_CLIENT_ID=...        — Client ID Efí Bank
EFI_CLIENT_SECRET=...    — Client Secret Efí Bank
EFI_PIX_KEY=...          — Chave PIX (email, CPF, celular)
DONO=5511999999999       — Número do dono do bot (sem @s.whatsapp.net)
```

### Configurar dono do bot
Edite a variável `DONO` no `.env` ou diretamente no `index.js`.

## Workflows

- **Start application** — Inicia o bot WhatsApp (`node index.js`)
- **Start API** — Inicia a API REST (`node api.js`, porta 3001)
- **Start Web** — Inicia o painel web (`cd web && npm run dev`, porta 5000)

## Melhorias Implementadas (Abril 2025)

### Detecção de Admin (Corrigida)
- Detecção automática via evento `group-participants.update` (action: promote)
- Fallback via `messageStubType === 29`
- Verificação manual: `sendAdminConfirmList` envia lista com 1 opção "✅ Confirmar que virei administrador"
- Substituiu `sendBtn` (que usava quick_reply buttons com fallback ruim) por `sendList` (mais confiável)
- Ao clicar, bot verifica admin via `groupMetadata` — se ok, ativa; se não, reenvia o prompt

### Padrão de Botões (1 botão → lista)
- Todos os menus usam `sendList`: 1 botão que abre uma caixa de opções
- Sem múltiplos botões na mesma mensagem
- Comandos: `.menu`, `.painel`, `.planos`, `.comprar`, `.ativar`, `.grupos`, `.recarregar`

### Login Seguro (Bot + Site)
- Senha obrigatória para acessar o painel web
- Usuário cria senha no bot com `.senha suasenha`
- API retorna erro claro se usuário não tem senha: "Envie .senha suasenha no bot"
- Senha armazenada como SHA-256 hash no JSON
- `useAuth.ts` sempre persiste senha no localStorage para autenticar todas as chamadas

### Sincronização Bot ↔ Site
- API lê dos mesmos arquivos JSON que o bot escreve (sincronização em tempo real)
- Endpoints cobrem: autenticação, planos, grupos, pagamentos, status PIX
- Cada usuário acessa apenas seus próprios dados (validação por phone + senha)

## Comandos do Bot (WhatsApp)

### Privado
- `.menu` — Menu principal em camadas
- `.painel` — Ver saldo, plano e grupos
- `.recarregar [valor]` — Comprar moedas via PIX
- `.planos` — Ver planos disponíveis
- `.comprar [basico|pro|premium]` — Comprar plano com moedas
- `.link` — Adicionar bot a um grupo
- `.ativar [groupId]` — Ativar bot em grupo após receber admin
- `.grupos` — Listar meus grupos
- `.ajuda` — Guia de uso

### Grupo (após ativação)
- `.menu` — Menu do grupo
- `.status` — Status e tempo restante do plano
- `.info` — Informações do grupo

### Dono
- `.darmoedas [número] [qtd]` — Dar moedas a um usuário
- `.usuarios` — Total de usuários
- `.grupos_total` — Total de grupos

## Integração Efí Bank PIX
O arquivo `efipay.js` é a integração com a API PIX da Efí Bank e **não deve ser modificado**. Requer:
- Certificado `.p12` na raiz do projeto
- Credenciais válidas no `.env`
- Modo produção ativo (`EFI_SANDBOX = false`)
