/*============≠≠==========≠≠=============\\

BGLH É O SEGUINTE, QUANDO VOCÊ COMPROU O BOT, TBM CONCORDOU COM NOSSOS TERMOS DE SERVIÇO

VOCÉ LIVRE PRA MODIFICAR O BOT COMO QUISER... COLOCRAR NOVAS APIS, CASES ETC

MAS COMO JÁ FOI DITO ANTES, NOSSA ÚNICA E MAIOR PROIBIÇÃO, É SOBRE A QUESTÃO DE REPASSAR/REVENDER A BASE DO BOT

EU, MATHEUS, CONFESSO QUE NÃO FIZ TUDO SOZINHO... ETT TENHA CONSIDERAÇÃO COM QUEM SE DESPÔS A FAZER ISSO PRA VC

//=======================================*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, prepareWAMessageMedia } = require('@whiskeysockets/baileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, sesc, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, isFiltered, addFilter, temporizador, chyt, kyun, simih, botoff, colors, comand, sendButton, RSM_FUNC } = require('./config.js');

//const jimp = require('@jimp')

const { arcloud } = require('./arcc.js')

const AssemblyAI = require("assemblyai");

const { payment } = require("./mercado-pago-API/index.js")

const { superimg } = require("./database/superimg.js")

const os = require('os');


//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { anotacao, infocontador, infobemvindo, infolistanegra, infotransmitir, infopalavrao, infobancarac, configbot, cmd_termux, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, obrigadoEXT, setting, logoslink, vip, aluguel, globegroup, music, tinder, amongus, vdddsf, akinator, moedas, pvlojinha, cardxp, mute, figname, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, antiModLetra, convertBytes, pushnames, ausentes, avisos, ads, grupos, funcgp, revealmsg, vipgp, shieldantilinkgp, shieldantilinkhard, adsgp, bcgp, rankcmd } = require('./config.js');

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { botoes, forwarding, crtt, visualizarmsg, modoaluguel, API_KEY_BARBA, API_KEY_JRC, API_KEY_ALEATORY, API_KEY_BLACK, stopcmdlist, blacksite, barbasite, jrcsite, idchatofc, idprivategp, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/config-all.json");

var { NomeDoBot, NickDono, prefix } = require("./dono/settings.json");

const { __esModule, text } = require('cheerio');

const { multi } = require('linkifyjs');

const figurinhas = JSON.parse(fs.readFileSync("./database/data/figurinhas.json"));

const recolherLNK = JSON.parse(fs.readFileSync("./armor/funcoes/recolherLNK.json"));

const links = JSON.parse(fs.readFileSync('./base de dados/links.json'));

//====================≠≠===============\\
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

var nmrdnCmMais = "+" + numerodono_ofc.slice(0, 2) + " " + numerodono_ofc.slice(2, 4) + " " + numerodono_ofc.slice(4, numerodono_ofc.length - 4) + "-" + numerodono_ofc.slice(numerodono_ofc.length - 4, numerodono_ofc.length)

async function reiniciarBLK() {
file = require.resolve("./start.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function startBlack() {

module.exports = blackmd = async(blackmd, qrcode) => {
module.exports = upsert = async(upsert, blackmd) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(blackmd, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(fs.existsSync(`./base de dados/grupos/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./base de dados/grupos/${from}.json`));
}

// 🇸 🇮 🇲 🇵 🇱 🇮 🇫 🇮 🇨 🇦 🇨 🇴 🇪 🇸 \\
// RODAR COMANDOS DE OUTROS BOTS \\

var conn = blackmd
var japa = blackmd
var aqua = blackmd
var lukaz = blackmd
var pl = blackmd
var vieno = blackmd
var mikasa = blackmd
var sabrina = blackmd
var chris = blackmd
var kaic = blackmd
var kimbler = blackmd
var vitu = blackmd

if(fs.existsSync(`./base de dados/grupos/${from}.json`) && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
blackmd.sendMessage(info.key.remoteJid, {text: `@${info.participant.split("@")[0]} *acaba de promover o/a* @${info.messageStubParameters[0].split("@")[0]} *à ADM do grupo...* 👑`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
case 30:
await delay(1000);
blackmd.sendMessage(info.key.remoteJid, {
text: `@${info.participant.split("@")[0]} *acaba de rebaixar o/a* @${info.messageStubParameters[0].split("@")[0]} *à membro comum do grupo...* 🥲`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushTestName = info.pushName ? info.pushName : 'Usuário';
if(visualizarmsg) {
await blackmd.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

//var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || info.message?.editedMessage?.message?.protocolMessage?.editedMessage?.imageMessage?.caption || info?.message?.interactiveMessage?.body || ((JSON?.parse(info?.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson))?.id || '') || '';

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./base de dados/grupos/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./base de dados/grupos/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\
//X9 de fixação de msg
if(fs.existsSync(`./base de dados/grupos/${from}.json`) && jsonGp[0].x9 && type === "pinInChatMessage") {
duration = info.message?.messageContextInfo?.messageAddOnDurationInSecs;
fixedTime = (duration) => (duration === 0) ? "0" : (duration >= 30 * 24 * 60 * 60) ? "30d" : (duration >= 7 * 24 * 60 * 60) ? "7d" : (duration >= 24 * 60 * 60) ? "24h" : duration;
action = fixedTime(duration) === "0" ? 'desfixar uma mensagem' : `fixar uma mensagem por *${fixedTime(duration)}*`;
await blackmd.sendMessage(from, {text: `O admin *@${sender.split("@")[0]}* acabou de ${action}.`, mentions: [sender]})
}

try {var groupMetadata = isGroup ?  await blackmd.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const pushname = JSON.stringify(pushnames).includes(sender) ? pushnames[pushnames.map(i => i.id).indexOf(sender)].nick : pushTestName

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await blackmd.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const isSesc = sesc.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

const apikeymeta = `https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { pia } = require('./armor/js/piadas.js');

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)];

react1 = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '❤‍🔥', '❤‍🩹', '💞', '💗', '💖'];

react2 = react1[Math.floor(Math.random()*react1.length)]

//================RPG-FUNC===================\\

const { cidadesRPG, saveCityBlackRPG, createCityBlackRPG, existCity, limitCity, findCity, filesDBuserBC, registrarUsuInBlackCity, rmUsuBlackCity, isYouInBlackCity, totalUserBlackCity } = require("./base de dados/RPG BLACK CITY/blackrpg.js")

//================LEVEL-FUNC===================\\

const { isYouInLevel, dbpt, patente, saveLeVeLdb, level, addlevel, rmlevel, addXP, rmXP, blockLevelUser, unBlockLevelUser, isBlockGetLevelUser, levelDBuser } = require("./base de dados/leveling/level.js")

//================STOP-CMD===================\\

const { stopcmd, saveSC, isBlockGlobalCmd, addStopCmd, rmStopCmd } = require("./base de funcionamento/configcmd/stopcmd.js")

//================SHIELD-LINK===================\\

const { shieldantilinkgp, notGroupRegisteredSALGP, addShieldGP, rmShieldGP, saveSALGP, isShieldGPuser, getShieldGPuser, shieldantilinkhard, notGroupRegisteredSALHARD, addShieldHARD, rmShieldHARD, saveSALHARD, isShieldHARDuser, getShieldHARDuser } = require("./base de dados/shieldantilink/shield-all.js")

//================LIMITE-CMD===================\\

const { limitcmd, saveLimitCmd, rgGroupLC, isLimitCmd, addLimitCmd, addCmdUsageLC, isMaxUsageLC, addLimitAllCmd, rmLimitCmd, rmLimitAllCmd, getLimitCmd, nextDayLC } = require(`./base de funcionamento/configcmd/limitcmd.js`)

//================CASAMENTO===================\\

const { waitFriendZone, saveWaitFriendZone, dbFriendZone, saveDBfriendZone, getDBFZuser, isGroupOfPedidoFriendZone, userEstaNamorando, gerarPedidoDeNamoro, userPediuAlguemEmNamoro, cancelarPedidoDeNamoro, isWaitUsuFZ_namoro, deletarAntigoPedidoDeNamoro, aceitarPedidoDeNamoro, recusarPedidoDeNamoro, userEstaCasado, isUserMencFZ, gerarPedidoDeCasamento, userPediuAlguemEmCasamento, cancelarPedidoDeCasamento, isWaitUsuFZ_casamento, aceitarPedidoDeCasamento, recusarPedidoDeCasamento, terminarOuDivorciar, aniversarioDeNamoroOuCasamento } = require("./base de dados/namoro-casamento/relacionamento.js")

//================FORCA===================\\

const { saveUsuForcaGame, usuarios_forca, addUsuarioForca, rmUsuarioForca, addAcertoUsuForca, addErroUsuForca, existIdForcaGameInUsu, registrarIdNaForca, addVitoriaForca, addDerrotaForca, getUsuDatabaseForca, saveForcaWord, forcaWord, sendPathForcaGame, existSomeWordForcaGame, existThemeWordForcaGame, getThemeWordForcaGame, getRandomWordForcaGame, rgWordForcaGame, rmThemeForcaGame, rmWordForcaGame, isForcaGame, saveForcaGame, startForcaGame, resetForcaGame, restartForcaGame, getJSONforcaGame, letraFoiJogada, isTrueLetter, isLetterFinishForcaGame, registrarLetraForca, getWordSplitForcaGame, getErrEmojiForcaGame, sendTextForcaGame, jogarLetraForcaGame } = require("./armor/jogo/forca/forca.js")

//================= Funções de Grupo 🥋

const dirGroup = `./base de dados/grupos/${from}.json`

const nescj = "./dono/config-all.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
banlinkgp: true, antilinkhard: false,
banlinkhard: true, antifake: false, antispam: false, 
antinotas: false, anticatalogo: false,
modorpg: false, visuUnica: false, soadm: false, 
listanegra: [], advertir: [], prefixos: ["!"], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: 4000
},
acceptGroup: {
active: false,
time: 1200
},
wellcome: [{
bemvindo1: false,
legendabv: "#tempo# #numerodele#, seja bem vindo (a) ao grupo #nomedogp#",
legendasaiu: 0,
fundobemvindo: links.fundo1,
fundosaiu: links.fundo2
},
{
bemvindo2: false,
legendabv: "#tempo# #numerodele#, seja bem vindo (a) ao grupo #nomedogp#",
legendasaiu: 0
},
{
bemvindo3: false,
selo: false,
legendabv: `#tempo# #numerodele#, seja bem vindo (a) ao grupo #nomedogp#`,
legendasaiu: 0
},
{
bemvindo4: false,
selo: false,
legendabv: `#tempo# #numerodele#, seja bem vindo (a) ao grupo #nomedogp#`,
legendasaiu: 0
},
{
bemvindo5: false,
legendabv: `#tempo# #numerodele#, seja bem vindo (a) ao grupo #nomedogp#`,
fundobemvindo: links.fundo3,
legendasaiu: 0,
fundosaiu: links.fundo4
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: true,
jogos: false, level: true,
bangp: false, nsfw: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./base de funcionamento/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setObg(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

function saveJSON(inter, caminho){
fs.writeFileSync(caminho, JSON.stringify(inter, null, 2))}
//=======(ADMS/DONO/ETC..CONST)========\\

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

const quoted = info.quoted ? info.quoted : seloctt

const isBot = info.key.fromMe ? true : false

const isOwner = numerodono.includes(sender) || isBot || isnit || issupre || ischyt || isSesc

dfndofc = setting.numerodono+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isJsonIncludes = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const isSupremeOwner = (id = sender) => {
  if(nmrdn.includes(id) || nit.includes(id) || supre.includes(id) || chyt.includes(id) || sesc.includes(id)) return true
  return false
  }

const isAllOwner = (id = sender) => {
if(numerodono.includes(id) || nit.includes(id) || supre.includes(id) || chyt.includes(id) || sesc.includes(id)) return true
return false
}

const isAdmin = (id = sender) => {
if(groupAdmins.includes(id)) return true
return false
}

//============all const vip==============\\
const isVip = isJsonIncludes(vip, sender) || isJsonIncludes(vipgp, from) || isOwner

const isOnlyVip = (id = sender) => {
if(isJsonIncludes(vip, id) || isAllOwner(id)) return true
return false
}

const isGroupVip = (id = from) => {
if(isJsonIncludes(vipgp, id) || isAllOwner(sender)) return true
return false
}

const isAllVip = (id = sender) => {
if(isOnlyVip(id) || isGroupVip(from) || isAllOwner(id)) return true
return false
}
//=======================================\\

const alerandom = (nmr) => {
return Math.floor(Math.random()*nmr)
}

var letras = `abcdefghijklmnopqrstuvwxyz`

const randomLetra = letras[alerandom(letras.length)].toUpperCase()

const randomUser = isGroup ? groupMembers[alerandom(groupMembers.length)].id : nmrdn

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial || isOwner

const isBanned = ban.includes(sender)

const isVisualizar = obrigadoEXT.visualizarmsg

const isVerificado = obrigadoEXT.verificado

const isAudioMenu = obrigadoEXT.menu_audio

const isAntiPv2 = obrigadoEXT.antipv2

const isConsole = obrigadoEXT.consoleoff

const isBotoff = obrigadoEXT.botoff

const listanegraG = obrigadoEXT.listanegraG

const isAntiPv = obrigadoEXT.antipv

const isAnticall = obrigadoEXT.anticall

const isStopCmd = obrigadoEXT.stopcmdlist

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const MercadoPagoKey = `APP_USR-2368866818836875-012121-29d938ca5687952fdf147ae2d8a10d8e-1157196589`

const isBylojinha = obrigadoEXT.bylojinha


//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa madrugada'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const time_emoji = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_emoji > "00:00:00" && time_emoji < "05:00:00"){
var tempo_emoji = '🌑'
} if(time_emoji > "05:00:00" && time_emoji < "12:00:00"){
var tempo_emoji = '☀️'
} if(time_emoji > "12:00:00" && time_emoji < "18:00:00"){
var tempo_emoji = '🍃'
} if(time_emoji > "18:00:00"){
var tempo_emoji = '🌙'
}

const time_pro = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time_pro > "00:00:00" && time_pro < "05:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "05:00:00" && time_pro < "12:00:00"){
var tempo_pro = 'um'
} if(time_pro > "12:00:00" && time_pro < "18:00:00"){
var tempo_pro = 'uma'
} if(time_pro > "18:00:00"){
var tempo_pro = 'uma'
}

//============(FUNÇÕES)============\\


const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isBanlinkgp = isGroup ? dataGp[0].banlinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isBanLinkHard = isGroup ? dataGp[0].banlinkhard : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isWelkom3 = isGroup ? dataGp[0].wellcome[2].bemvindo3 : undefined

const isWelkom4 = isGroup ? dataGp[0].wellcome[3].bemvindo4 : undefined

const isWelkom5 = isGroup ? dataGp[0].wellcome[4].bemvindo5 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

//const isAntiSpam = isGroup ? dataGp[0].antispam : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isAcceptGroup = isGroup ? dataGp[0].acceptGroup.active : undefined

const isBlackCity = isGroup ? dataGp[0].modorpg : undefined

const isModRent = obrigadoEXT.modoaluguel == true ? true : false

const isMsgPV = obrigadoEXT.msgpv == true ? true : false

const isChatOfc = from == obrigadoEXT.idchatofc ? true : false

const isPrivateChat = from == obrigadoEXT.idprivategp ? true : false

const sorteio = JSON.parse(fs.readFileSync("./base de funcionamento/sorteio.json"))

const TMGP = JSON.parse(fs.readFileSync("./base de funcionamento/TMGP.json"))

const novidades = JSON.parse(fs.readFileSync("./database/data/novidades.json"))

const gbmsg = JSON.parse(fs.readFileSync("./base de dados/gbmsg.json"))

const audios = JSON.parse(fs.readFileSync("./database/data/audios.json"))

const adivinharnmr = JSON.parse(fs.readFileSync("./armor/jogo/adivinharnmr.json"))

const { Aki } = require('aki-api')

const jogo = { jogador: '', now: true }


//=======================================\\

enviar = {
  espere: `${enviarmen}`,
  successo: '️❬ ✔ ❭ Sucesso 🖤',
  levelon: '❬ ✔ ❭ *leveling* *ativado*',
  leveloff: '❬ X ❭  *leveling* *desativado*',
  levelnoton: '❬ X ❭ *leveling não ativado*',
  levelnol: '*error* 0 °-°',
  error: {
    stick: '*falhou, tente novamente ^_^*',
    Iv: 'Link invalido ☹️'
  },
  msg: {
  grupo: '[❗] Este comando só pode ser usado em grupos! ❌',
  vip: '[❗] ESTE COMANDO É SÓ PARA *USUÁRIOS VIP*',
  mod: `[❗] ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${NickDono}*`,
  banido: '[❗] Você está proibido de usar os comandos do bot... Entre em contato com meu dono para saber o por que ❌' ,
  donosmt: '[❗] Este comando está restrito ao uso do meu dono ❌',
  donosmt2: `[❗] Este comando só pode ser usado pelo ${NickDono}, meu dono ❌`,
  adm: '[❗] Este comando só pode ser usado por administradores de grupo! ❌',
  Badmin: '[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌',
  modobz: `[❗] Este comando só pode ser usado com as brincadeiras ativadas... Use ${prefix}modozoeira ❌`,
  consulta: '[⚙️] consultando dados, aguarde um momento❗',
  notusu: `[❗] ID do usuário não encontrado ou inexistente ❌`,
  pvnotvip: "[ ❗ ] o uso desde recurso no PV está liberado apenas para usuários VIP ❌",
  modonsfw: `[ ❗ ] Este comando só pode ser usado com o nsfw ativo... Para ativar, use ${prefix}modonsfw`
  },
  stopcmd: {
    isblock: `Este comando JÁ está bloqueado...`,
    notblock: `Este comando NÃO está bloqueado...`
  },
  shield: {
    gp: {
      true: `[❕] Este usuário já está protegido ao envio de links de grupo ✔`,
      false: `[❗] Este usuário não está na lista de protegidos do anti link de grupo ❌`
    },
    hard: {
      true: `[❕] Este usuário já está protegido ao envio de links em geral ✔`,
      false: `[❗] Este usuário não está na lista de protegidos do anti link hard ❌`
    }
  },
  rpg: {
    ativar: `[❗] é necessário ativar o RPG primeiro... Use ${prefix}modorpg ♨️`,
    registrar: `${tempo} ${pushname}, vejo que você não está registrado no Barba City.. Caso queira entrar, use o comando ${prefix}rgbc, para assim usar destes sistemas 😉`,
    existrg: `Seu registro foi encontrado no Barba City... Olhe o comando ${prefix}saldo`,
    notcdd: `[❗] Não há cidades disponíveis ❌`,
    notexistcity: `Ops, a cidade "#city#" não está inclusa na database do RPG... Olhe no ${prefix}cidadesrpg para saber quais cidades estão disponíveis para registro 😀`,
    citylimit: `[❗] Esta cidade já está com a capacidade máxima de moradores... Procure outra cidade ♨️`,
    welcome: `${tempo} @#usu#, seu registro foi efetuado com sucesso... Bem vindo (a) a Barba City 🥰`
  }
}

var downoff = 'Sistema apresenta instabilidades... Pfvr, volte mais tarde.'

var downon = 'Sistema cancelou a operação, devido a demora na resposta...'

var semfoto = `https://telegra.ph/file/d9909cc45b86459fcb8a9.jpg`

//==========(VERIFICADO)===============\\

if(isVerificado) {
//verificado whatsapp
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
//selo contato
var seloctt = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}}
//selo black
var seloblk = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ... {}}, message: {"contactMessage": {"displayName": `👑 BARBA DOMINAH 👑`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;👑 BARBA DOMINAH 👑,;;;\nFN:👑 BARBA DOMINAH 👑,\nitem1.TEL;waid=${botNumber.split('@')[0]}:${botNumber.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
} else {
var selo = info
var seloctt = info
var seloblk = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

function formatUptime(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let mins = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  return `${hours} horas ${mins} minutos e ${secs} segundos`;
} 

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

const getname = (nmr) => {
  buscar = nmr.includes(`@s.whatsapp.net`) ? nmr : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  jherffeson = JSON.stringify(pushnames).includes(buscar) ? pushnames[pushnames.map(i => i.id).indexOf(buscar)].nick : "usuário"
  return jherffeson
}

const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}

const identArroba = (txt) => {
  return txt.includes('@') ? txt.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : txt.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
}

const iniMai = (texto) => {
  txt = texto.toUpperCase().slice(0, 1) + texto.slice(1)
  return txt
}

const reverse = (texto) => {
  return texto.split("").reverse().join("")
}

const getallcases = () => {
  findindex = fs.readFileSync("index.js").toString().match(/case\s+'(.+?)'/g)
  caixa = []
  for(i of findindex) {
    caixa.push(i.split(`'`)[1])
  }
  return caixa
}

const allCases = getallcases();

const contar = (frase, letraProcurada) => {
  total = 0
  for(i = 0; i < frase.length; i++) {
    if(letraProcurada == frase[i]) total += 1
  }
  return total
}

function remover(id, usu) {
blackmd.groupParticipantsUpdate(id, [usu], "remove")}

function promover(id, usu) {
blackmd.groupParticipantsUpdate(id, [usu], "promote")}

function rebaixar(id, usu) {
blackmd.groupParticipantsUpdate(id, [usu], "demote")}

function aceitar(id, usu) {
blackmd.groupRequestParticipantsUpdate(id, [usu], "approve")}

function recusar(id, usu) {
blackmd.groupRequestParticipantsUpdate(id, [usu], "reject")}

async function wppuser(user) {
const [result] = await blackmd.onWhatsApp(user)
if(result == undefined) return reply(`[❗] erro, o mod "${user}" não foi encontrado no whatsapp ❌`)}

async function carregamento(id, txt, hehe) {
  var download = [
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
    `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
    `${txt.length > 0 ? "~_*© barba system*_~\n" : ""}𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
    ]
  let { key } = await blackmd.sendMessage(id, {text: `${txt} ${txt.length > 0 ? "\n" : ""}ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`}, {quoted: hehe})
  await sleep(2000)
  for(let i = 0; i < download.length; i++) {
    await blackmd.sendMessage(id, {text: download[i], edit: key }, {quoted: hehe})
  }
}

const barrinha = (parte, todo, value = true) => {
  nmr = ((parte / todo) * 10).toFixed(0)
  pc = ((parte / todo) * 100).toFixed(1)
  return `〘${"█".repeat(nmr) + "▒".repeat(10 - nmr)}〙${value == true ? pc+"%" : value == false ? "" : ""}`
}

const progresso = (parte, todo, value = true) => {
  nmr = ((parte / todo) * 10).toFixed(0)
  pc = ((parte / todo) * 100).toFixed(1)
  return `${value == true ? "『 "+pc+"% 』" : value == false ? "" : ""}[${"█".repeat(nmr) + "▒".repeat(10 - nmr)}]`
}

const largeNumber = (value) => {
  if(Number(value) < 0) return "O número precisa ser ≥ 0"
  nmr = `${Number(value).toFixed(0)}`
  if(nmr.length >= 4) {
    const existPoint = (nmr) => {
      if(Number(nmr) !== 0) return "." + `${nmr}`
      return ``
    }
    if(nmr.length >= 4) txt = nmr.slice(0, (nmr.length - 3)) + existPoint(nmr.slice((nmr.length - 3), (nmr.length - 2))) + "K"
    if(nmr.length >= 7) txt = nmr.slice(0, (nmr.length - 6)) + existPoint(nmr.slice((nmr.length - 6), (nmr.length - 5))) + "M"
    if(nmr.length >= 10) txt = nmr.slice(0, (nmr.length - 9)) + existPoint(nmr.slice((nmr.length - 9), (nmr.length - 8))) + "B"
    if(nmr.length >= 13) txt = nmr.slice(0, (nmr.length - 12)) + existPoint(nmr.slice((nmr.length - 12), (nmr.length - 11))) + "T"
  } else { txt = nmr }
  return txt
}

const permuteFigPackName = (secondtxt, usu = sender) => {
  if(isOnlyVip(usu)) {
    if(isJsonIncludes(figname, usu)) {
      AB = figname.map(i => i.id).indexOf(usu)
      if(isJsonIncludes(figname[AB].fig, "pack")) {
        BC = figname[AB].fig.map(i => i.mod).indexOf("pack")
        return figname[AB].fig[BC].pack
      } else return secondtxt
    } else return secondtxt
  } else return secondtxt
}

const permuteFigAuthorName = (secondtxt, usu = sender) => {
  if(isOnlyVip(usu)) {
    if(isJsonIncludes(figname, usu)) {
      AB = figname.map(i => i.id).indexOf(usu)
      if(isJsonIncludes(figname[AB].fig, "author")) {
        BC = figname[AB].fig.map(i => i.mod).indexOf("author")
        return figname[AB].fig[BC].author
      } else return secondtxt
    } else return secondtxt
  } else return secondtxt
}

const gerarkey = (a) => {
  nmr = Number(a)
  idks = randomLetra + a + "-"
  idks += `${Number(from.replace("-", "").slice(2, 8)) * Number(sender.slice(2, 8))}`
  idks += `${randomLetra + (nmr * 2) + randomLetra}` + "-" + `${Number(moment.tz('America/Sao_Paulo').format('DDMMYY')) + Number(moment.tz('America/Sao_Paulo').format('HHmmss'))}` + randomLetra
  return idks
}

const sendHours = (formato) => {
  return moment.tz('America/Sao_Paulo').format(formato)
}

const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const replaceAll = (frase, txt, rp) => {
  caixa = [frase]
  for(i = 0; i < 1000; i++) {
    caixa.push(caixa[i].replace(txt, rp))
  }
  return caixa[caixa.length - 1]
} 

const contarDias = (dias) => {
  if(!dias.includes("/")) return "Tem que colocar em /, ex: 01/01/2024"
  barra = 0
  for(i of dias) {
    if(i == "/") barra += 1
  }
  if(barra <= 0 || barra > 2) return "Revise o formato da data pfvr... Receio que você não tenha colocado o formato correto DD/MM/YYYY"
  var [aa, bb, cc] = dias.split("/")
  year = cc.length == 2 ? "20" + cc : cc
  if(Number(aa) < 1 || Number(aa) > 31) return `Os dias vão de 1 até no mxm 31`
  if(Number(bb) < 1 || Number(bb) > 12) return `Os meses vão de 1 até no mxm 12`
  if(Number(year) < 1 || Number(aa) > 100000000) return `Os anos vão de 1 até no mxm 100000000`
  day = Number(year) * 365
  day += Number(bb) * 30
  day += Number(aa)
  return day
}

const converterDias = (dias) => {
  nmr = Number(dias)
  if(nmr < 0) return "A quantidade de dias precisa ser ≥ 0"
  year = (nmr - (nmr % 365)) / 365
  mm = ((nmr % 365) - ((nmr % 365) % 30)) / 30
  day = (nmr % 365) % 30
  txt = year > 0 ? year + ` Ano${year != 1 ? "s" : ""}${day > 0 ? mm > 0 ? ", " : " e " : "  "}` : ``
  txt += mm > 0 ? mm + ` M${mm != 1 ? "eses" : "ês"}${day > 0 ? " e " : "  "}` : ``
  txt += day > 0 ? day + ` Dia${day != 1 ? "s" : ""}  ` : ``
  return txt.slice(0, txt.length - 2)
}

const contarMin = (base_a) => {
  if(contar(base_a, `:`) != 1) return `É necessário o uso dos : no horário, seguindo apenas horas e minutos`
  var [a, b] = base_a.split(':')
  return Number(Number(a) * 60) + Number(b)
}

const converterMin = (base_b) => {
  if(!Number(base_b)) return `Precisa ser um número`
  nmr = Number(base_b)
  b = nmr % 60
  a = (nmr - b) / 60
  return `${a < 10 ? `0` + a : a}:${b < 10 ? `0` + b : b}`
}

const divisores = (base) => {
  nmr = Number(base)
  caixa = []
  for(a = 0; a < nmr; a++) {
    for(b = 0; b < nmr; b++) {
      if(((a + 1) * (b + 1)) == nmr) caixa.push(a + 1)
    }
  }
  return caixa
}

const raiz = (base) => {
  nmr = Number(base)
  meta = nmr / 2
  total = 0
  for(i = 1; i < (meta + 1); i++) {
    if((i*i) == nmr) total += 1
  }
  if(total > 0) return true
  return false
}

const findRaiz = (base) => {
  nmr = Number(base)
  if(raiz(nmr)) {
    meta = nmr / 2
    caixa = []
    for(i = 1; i < (meta + 1); i++) {
      if((i*i) == nmr) caixa.push(i)
    }
    return caixa[0]
  } else return "O número não tem raiz"
}

const porCentPorCent = (txt1, txt2, nmr = 1) => {
  nmr1 = Number(txt1)
  nmr2 = Number(txt2)
  return Number((nmr1 * nmr2) / 100).toFixed(nmr)
}

const existCmd = (txt) => {
  cmd = txt.toLowerCase()
  nmr = 0
  for(i of allCases) {
    if(cmd == i) nmr += 1
  }
  if(nmr > 0) return true
  return false
}

const similarityCmd = (txt) => {
  cmd = rmLetras(txt)
  data = [
    {
      comando: `"não encontrado"`,
      porcentagem: 0
    }
  ]
  separar = [{maior: []}, {menor: []}]
  for(a of allCases) {
    corte = a
    if(corte.length >= cmd.length) {
      separar[0].maior.push(corte)
    } else {
      separar[1].menor.push(corte)
    }
  }
  primeiro = []
  total = 0
  for(b = 0; b < cmd.length; b++) {
    for(c of separar[0].maior) {
      if(cmd[b] == c[b]) {
        contadorcmd = 0
        for(d of primeiro) {
          if(c == d.cmd) {
            d.quantidade += 1
            contadorcmd += 1
            total += 1
          }
        }
        if(contadorcmd <= 0) primeiro.push({cmd: c, quantidade: 1})
      }
    }
  }
  for(e of separar[1].menor) {
    for(f = 0; f < e.length; f++) {
      if(cmd[f] == e[f]) {
        hehe = 0
        for(d of primeiro) {
          if(e == d.cmd) {
            c.quantidade += 1
            hehe += 1
            total += 1
          }
        }
        if(contadorcmd <= 0) primeiro.push({cmd: e, quantidade: 1})
      }
    }
  }
  if(primeiro.length <= 0) return data
  mapa = primeiro.map(i => i)
  rank = mapa.sort((a, b) => (a.quantidade < b.quantidade) ? 0 : -1)
  segundo = []
  for(g of primeiro) {
    if(g.quantidade == rank[0].quantidade) segundo.push(g.cmd)
  }
  por1 = ((total + rank.length) / allCases.length) * 100
  por2 = (1 / segundo.length) * 100
  final = porCentPorCent(por1, por2) * rank[0].quantidade
  data[0].comando = prefix + segundo[alerandom(segundo.length)]
  data[0].porcentagem = Number(final > 100 ? 100 : final).toFixed(1)
  return data
}

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
blackmd.sendMessage(from, { text: texto }, {quoted: seloctt}).catch(e => {
return reply("Erro..");
})
}

function replyJson(txt) {
return reply(JSON.stringify(txt, null, 2))}

const privateCmd = (id, pc, cmd, porcentagem) => {
notcmd = `╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t❌ C̷O̷M̷M̷A̷N̷D̷ N̷O̷T̷ F̷O̷U̷N̷D̷ ❌
╽╟ • usuário ~> @${id.split("@")[0]}
╽╟ • ᴄᴏᴍᴀɴᴅᴏ『 ${pc} 』ɴãᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ
╽╟ • comando ꜱᴜɢᴇʀɪᴅᴏ ~> ${cmd}
╽╟ • ɢʀᴀᴜ ᴅᴇ ꜱᴇᴍᴇʟʜᴀɴçᴀ ~> ${porcentagem}%
╽╟ • ᴏʟʜᴇ ɴᴏ『 ${prefix}menu 』
╽║\t\t\t\tᴩᴀʀᴀ ꜱᴀʙᴇʀ ᴍᴀɪꜱ...
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
return notcmd
}

const shuffle = (XXX) => {
palavra = `${XXX} `
armax = []
for(i = 0; i < palavra.length; i++) {
armax.push({letra: palavra.split(palavra.slice(i+1))[0].slice(i)})
}
pross = ""
total_armax = armax.length
for(a = 0; a < total_armax; a++) {
alex = Math.floor(Math.random()*armax.length)
pross += `${armax[alex].letra}`
armax.splice(alex, 1)
}
return pross
}

const morse = (XXX) => {
palavra = `${XXX} `
armax = []
for(i = 0; i < palavra.length; i++) {
armax.push({letra: palavra.split(palavra.slice(i+1))[0].slice(i).replace("ã", "a").replace("á", "a").replace("ê", "e").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ô", "o").replace("ú", "u")})
}
pross = ""
total_armax = armax.length
for(a = 0; a < total_armax; a++) {
alex = armax[a].letra.toLowerCase()
if(alex == " ") pross += ` `
if(alex == "a") pross += `- .-`
if(alex == "b") pross += `- -...`
if(alex == "c") pross += `- -.-.`
if(alex == "d") pross += `- -..`
if(alex == "e") pross += `- .`
if(alex == "f") pross += `- ..-.`
if(alex == "g") pross += `- --.`
if(alex == "h") pross += `- ....`
if(alex == "i") pross += `- ..`
if(alex == "j") pross += `- .---`
if(alex == "k") pross += `-.-.`
if(alex == "l") pross += `– .-..`
if(alex == "m") pross += `– --`
if(alex == "n") pross += `–-.`
if(alex == "o") pross += `– ---`
if(alex == "p") pross += `– .--.`
if(alex == "q") pross += `– --.-`
if(alex == "r") pross += `– .-.`
if(alex == "s") pross += `– ...`
if(alex == "t") pross += `–-`
if(alex == "u") pross += `--..`
if(alex == "v") pross += `– …-`
if(alex == "w") pross += `--..-.`
if(alex == "x") pross += `-.- .. .-..  --.`
if(alex == "y") pross += `–.---`
if(alex == "z") pross += `–--..`
}
return pross
}

const romanN = (txt) => {
  nmr = Number(txt) ? txt : Number(txt)
  total = `${nmr}`
  if(nmr > 1 && !total.includes(`.`)) {
    if(total.length == 1) {
      if(nmr <= 3) alg = `I`.repeat(nmr)
      if(nmr == 4) alg = `IV`
      if(nmr == 5) alg = `V`
      if(nmr >= 6 && nmr != 9) alg = `V`+`I`.repeat(nmr-5)
      if(nmr == 9) alg = `IX`
    }
    if(total.length == 2) {
      dez = Number(total.slice(0, 1))
      um = Number(total.slice(1))
      if(dez <= 3) alg = `X`.repeat(dez)
      if(dez == 4) alg = `XL`
      if(dez == 5) alg = `L`
      if(dez >= 6 && dez != 9) alg = `L`+`X`.repeat(dez-5)
      if(dez == 9) alg = `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    if(total.length == 3) {
      cem = Number(total.slice(0, 1))
      dez = Number(total.slice(1, 2))
      um = Number(total.slice(2))
      if(cem <= 3) alg = `C`.repeat(cem)
      if(cem == 4) alg = `CD`
      if(cem == 5) alg = `D`
      if(cem >= 6 && cem != 9) alg = `D`+`C`.repeat(cem-5)
      if(cem == 9) alg = `CM`
      if(dez <= 3) alg += `X`.repeat(dez)
      if(dez == 4) alg += `XL`
      if(dez == 5) alg += `L`
      if(dez >= 6 && dez != 9) alg += `L`+`X`.repeat(dez-5)
      if(dez == 9) alg += `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    if(total.length > 3) {
      mil = Number(total.slice(0, total.length-3))
      cem = Number(total.slice(total.length-3, total.length-2))
      dez = Number(total.slice(total.length-2, total.length-1))
      um = Number(total.slice(total.length-1))
      alg = `M`.repeat(mil)
      if(cem <= 3) alg += `C`.repeat(cem)
      if(cem == 4) alg += `CD`
      if(cem == 5) alg += `D`
      if(cem >= 6 && cem != 9) alg += `D`+`C`.repeat(cem-5)
      if(cem == 9) alg += `CM`
      if(dez <= 3) alg += `X`.repeat(dez)
      if(dez == 4) alg += `XL`
      if(dez == 5) alg += `L`
      if(dez >= 6 && dez != 9) alg += `L`+`X`.repeat(dez-5)
      if(dez == 9) alg += `XC`
      if(um <= 3) alg += `I`.repeat(um)
      if(um == 4) alg += `IV`
      if(um == 5) alg += `V`
      if(um >= 6 && um != 9) alg += `V`+`I`.repeat(um-5)
      if(um == 9) alg += `IX`
    }
    return alg
  } else return `erro`
}

const sendTimeDay = (nmr) => {
  if(Number(nmr) > 1) {
    return `${Number(nmr)} dias`
  } else {
    hh = Number(moment.tz('America/Sao_Paulo').format('HH'))
    mm = Number(sendHours('MM'))
    ss = Number(moment.tz('America/Sao_Paulo').format('ss'))
    txt = `${ss} segundo${ss < 59 ? 's' : ''}`
    if(mm < 59) txt = `${60 - mm} minutos`
    if(hh < 23) txt = `${24 - hh} horas`
    return txt
  }
}

const sendTimeCort = (nmr) => {
  if(Number(nmr) > 1) {
    if(Number(nmr) > 36) {
      return `${Number(nmr / 24).toFixed(0)} dias`
    } else return `${Number(nmr)} horas`
  } else {
    hh = Number(nmr)
    mm = Number(sendHours('MM'))
    ss = Number(moment.tz('America/Sao_Paulo').format('ss'))
    txt = `${60 - ss} segundo${ss < 59 ? 's' : ''}`
    if(mm < 59) txt = `${60 - mm} minutos`
    return txt
  }
}

const sendTimeHours = (txt) => {
  nmr = Number(txt)
  if(nmr <= 36) return `${nmr} hora${nmr != 1 ? `s` : ``}`
  dias = Number(nmr / 24).toFixed(0)
  return `${dias} dia${dias != 1 ? `s` : ``}`
}

const addNumberMais = (nmr) => {
  usu = (nmr.includes("@s.whatsapp.net") ? nmr : identArroba(nmr)).split("@")[0]
  return "+" + usu.slice(0, 2) + " " + usu.slice(2, 4) + " " + usu.slice(4, usu.length - 4) + "-" + usu.slice(usu.length - 4, usu.length)
}

const realtime = () => {
tempo100 = Number(sendHours('MM'))
if(tempo100 == 1) mesAtt = "janeiro"
if(tempo100 == 2) mesAtt = "fevereiro"
if(tempo100 == 3) mesAtt = "março"
if(tempo100 == 4) mesAtt = "abril"
if(tempo100 == 5) mesAtt = "maio"
if(tempo100 == 6) mesAtt = "junho"
if(tempo100 == 7) mesAtt = "julho"
if(tempo100 == 8) mesAtt = "agosto"
if(tempo100 == 9) mesAtt = "setembro"
if(tempo100 == 10) mesAtt = "outubro"
if(tempo100 == 11) mesAtt = "novembro"
if(tempo100 == 12) mesAtt = "dezembro"
return `${sendHours('HH')} hora${Number(sendHours('HH')) !== 1 ? "s" : ""}, ${sendHours('mm')} minuto${Number(sendHours('mm')) !== 1 ? "s" : ""} e ${sendHours('ss')} segundo${Number(sendHours('ss')) !== 1 ? "s" : ""} do dia ${sendHours('DD')} de ${mesAtt} de ${sendHours('YYYY')}`
}

const envPV = (texto) => {
blackmd.sendMessage(sender, {text: texto})
}

const envImagePV = (link, mark) => {
blackmd.sendMessage(sender, {image: {url: link}}, {quoted: mark})
}

const sendSticker = (from, filename, info) => {
blackmd.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

async function sendContact(id, nome1, nome2, nmr) {
nmr1 = `${nmr.split('@')[0].replace(new RegExp("[()+-/ +/]", "gi"), "")}`
nmr2 = "+" + nmr1.slice(0, 2) + " " + nmr1.slice(2, 4) + " " + nmr1.slice(4, nmr1.length - 4) + "-" + nmr1.slice(nmr1.length - 4, nmr1.length)
vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + `FN: ${nome1}\n` // full name
            + `ORG: ${nome2};\n` // the organization of the contact
            + `TEL;type=CELL;type=VOICE;waid=${nmr1}:${nmr2}\n` // WhatsApp ID + phone number
            + 'END:VCARD'
await blackmd.sendMessage(id, {contacts: {  displayName: nome1,  contacts: [{ vcard }] }})
}

async function sendUrlText(id, texto, title, desc, foto, link, hehe) {
blackmd.sendMessage(id, {text: texto, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(foto), mediaType: 1, showAdAttribution: true, sourceUrl: link}}}, {quoted: hehe})
}

async function sendUrlText2(id, texto, title, desc, foto, link, hehe) {
blackmd.sendMessage(id, {text: texto, contextInfo: {externalAdReply: {title: title, body: desc, thumbnail: await getBuffer(foto), mediaType: 1, renderLargerThumbnail: true, showAdAttribution: true, sourceUrl: link}}}, {quoted: hehe})
}

async function sendUrlDoc(id, txt, tipo, titulo, tamanho, nome, desc, thumb, link, hehe) {
blackmd.sendMessage(id, {document: Buffer.from('oi curioso'), caption: txt, mimetype: tipo, fileName: titulo, fileLength: 1000000 * Number(tamanho), contextInfo: {externalAdReply: {title: nome, body: desc, mediaType: 1, thumbnail: await getBuffer(thumb), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: link}}}, {quoted: hehe})
}

const sendVideo = (id, link, desc, hehe) => {
  return blackmd.sendMessage(id, {video: {url: link}, caption: desc, mimetype: 'video/mp4'}, {quoted: hehe})
}

const sendAudio = (id, link, tipo, hehe) => {
  return blackmd.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: hehe})
}

const sendImage = (id, ytb, cap) => {
blackmd.sendMessage(from, {image: {url: ytb}, caption: cap}, {quoted:info})
}

const sendMess = (hehe, ytb, yah) => {
blackmd.sendMessage(hehe, {text: ytb}, {quoted: yah})
}

const sendMenu = (cap) => {
blackmd.sendMessage(from, {image: {url: logoslink.logo}, caption: cap, mentions: [sender]}, {quoted: seloctt})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? blackmd.sendMessage(from, {text: teks.trim(), mentions: memberr}) : blackmd.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
blackmd.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
blackmd.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
blackmd.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await blackmd.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
blackmd.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
blackmd.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !isOwner && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
blackmd.sendMessage(from, {text: "Acha mesmo que você vai sair marcando todo mundo com esse imune lixo aí ? kkk sinta o poder do BAN 🗣️"})
blackmd.sendMessage(from, {audio: {url:'./database/audios/ban.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
blackmd.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
blackmd.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

async function vipTime() {
  if(vip.length > 0) {
    for( y of vip ) {
      if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
        y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./base de dados/vip.json", JSON.stringify(vip))
        if(y.infinito == false) {
          if(y.dias > 1) {
            y.dias -= 1
            fs.writeFileSync("./base de dados/vip.json", JSON.stringify(vip))
          } else {
            AB = vip.map(b => b.id).indexOf(y.id)
            vip.splice(AB, 1)
            fs.writeFileSync("./base de dados/vip.json", JSON.stringify(vip))
          }
        }
      }
    }
  }
}

vipTime();

async function vipGpTime() {
  if(vipgp.length > 0) {
    for( y of vipgp ) {
      if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
        y.save = Number(moment.tz('America/Sao_Paulo').format('DD'))
        fs.writeFileSync("./base de dados/vipgp.json", JSON.stringify(vipgp))
        if(y.infinito == false) {
          if(y.dias > 1) {
            y.dias -= 1
            fs.writeFileSync("./base de dados/vipgp.json", JSON.stringify(vipgp))
          } else {
            blackmd.sendMessage(y.id, {text: `O tempo VIP deste grupo terminou... Caso ainda se vejam interessados, favor contactar meu dono 🥸`})
            AB = vipgp.map(b => b.id).indexOf(y.id)
            vipgp.splice(AB, 1)
            fs.writeFileSync("./base de dados/vipgp.json", JSON.stringify(vipgp))
          }
        }
      }
    }
  }
}

vipGpTime();

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack =`${pushname}`
var author2 = `${NomeDoBot}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(blackmd, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack =`${pushname}`
var author2 = `${NomeDoBot}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(blackmd, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

/*if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}*/

if(obrigadoEXT.dia != moment.tz('America/Sao_Paulo').format('DD')) {
  if(obrigadoEXT.semana != 7) {
    obrigadoEXT.semana += 1
    obrigadoEXT.dia = moment.tz('America/Sao_Paulo').format('DD')
    setObg(obrigadoEXT)
  } else {
    obrigadoEXT.semana = 1
    obrigadoEXT.dia = moment.tz('America/Sao_Paulo').format('DD')
    setObg(obrigadoEXT)
  }
}

const semanal = () => {
  if(obrigadoEXT.semana == 1) txt = "domingo"
  if(obrigadoEXT.semana == 2) txt = "segunda-feira"
  if(obrigadoEXT.semana == 3) txt = "terça-feira"
  if(obrigadoEXT.semana == 4) txt = "quarta-feira"
  if(obrigadoEXT.semana == 5) txt = "quinta-feira"
  if(obrigadoEXT.semana == 6) txt = "sexta-feira"
  if(obrigadoEXT.semana == 7) txt = "sábado"
  return txt
}

if(isOwner && budy.includes("reiniciar-barba") || info.key.fromMe && budy.includes("reiniciar-barba")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./start.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !isOwner) return

if(isGroup && isCmd && So_Adm && !isOwner && !isGroupAdmins) return

if(isBotoff && !isOwner) return

let isCmdKey = Array('loja', "reembolso", "entrarnogp", "tranfgrupo", 'freegrupo', 'minhaskey', 'reembolsar', 'recarga', 'recarregar', 'buykeygp', 'buygp', 'buycort', 'buyvip', 'me', 'inforent', 'comprar-key', 'comprarkey').some(item => item === command)

if(isGroup && isCmd && !isOwner && !isCmdKey && isModRent) {
  if(!JSON.stringify(grupos).includes("jherffeson")) {
    grupos.push({id: "jherffeson", gps: []})
    fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
  }
  if(!JSON.stringify(grupos).includes(from)) {
    grupos.push({id: from, limite: 5, validado: false})
    fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
  }
  AB = grupos.map(i => i.id).indexOf(from)
  if(grupos[AB].validado == false) {
    if(grupos[AB].limite <= 1) {
      grupos.splice(AB, 1)
      fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      reply(`Visto que os senhores não se vêem interessados em adquirir uma key, vou indo...`)
      await sleep(3000)
      return blackmd.groupLeave(from)
    } else {
      grupos[AB].limite -= 1
      fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      return reply(`✋🏽😳🤚🏽 PAROU !! Não encontrei esse grupo em meus registros... Pfvr, caso o mesmo seja alugado, será necessário o uso de uma chave de acesso para ativar os comandos. Caso não tenha uma, podes comprar no comando ${prefix}buykeygp`)
    }
  }
}

if(isGroup && isCmd) {
  caixa = []
  for(i of allCases) {
    if(type == "conversation" && command == i) caixa.push(i)
  }
  if(caixa.length > 0) {
    var contadorcmd = 0
    for(c of rankcmd) {
      if(caixa[0] == c.cmd) {
        c.usado += 1
        saveJSON(rankcmd, "./base de dados/rankcmd.json")
        contadorcmd += 1
      }
    }
    if(contadorcmd <= 0) {
      rankcmd.push({cmd: caixa[0], usado: 1})
      saveJSON(rankcmd, "./base de dados/rankcmd.json")
    }
  }
}


//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
blackmd.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !isOwner && !isnit && getComandoBlock(from).includes(command)) return reply('⚠️ *COMANDO BLOQUEADO* ⚠️')

if(isGroup && isCmd && isStopCmd && isBlockGlobalCmd(command) && !isOwner) return reply("⚠️ *INDISPONÍVEL TEMPORARIAMENTE* ⚠️")

if(isGroup) {
  if(!isJsonIncludes(limitcmd, from)) rgGroupLC(from)
  if(isCmd && !isGroupAdmins && !isOwner) {
    getcmd = isLimitCmd(from, command)
    if(getcmd.boolean) {
      if(isMaxUsageLC(from, command)) return reply(`⚠ _Este comando atingiu o máximo de uso neste grupo por hoje... Por favor, volte amanhã_ 🥰`)
      addCmdUsageLC(from, command)
    }
  }
}

nextDayLC();

aniversarioDeNamoroOuCasamento(blackmd);

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${isGroup ? colors.blue(groupName) : colors.red(`"privado"`)}
╽║
╽╟ • reação ~>『 ${info.message.reactionMessage.text} 』
┕╨${"⚋".repeat(44)}┚
`))
} else if(isGroup && !isCmd) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${colors.blue(groupName)}
╽║
╽╟ • tipo ~> ${colors.white(type == "stickerMessage" ? `"figurinha"` : type == "documentMessage" ? `"documento"` : type == "locationMessage" ? `"localização"` : type == "audioMessage" ? `"áudio"` : type == "videoMessage" ? `"vídeo"` : type == "imageMessage" ? `"imagem"` : `"mensagem"`)}
┕╨${"⚋".repeat(44)}┚
`))
} else if(isCmd && !isGroup) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(addNumberMais(sender))}
╽║
╽║『 ${colors.red("privado")} 』
╽║
╽╟ • comando ~> ${colors.white(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`)) 
} else if(isCmd && isGroup) {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(addNumberMais(sender))}
╽║
╽╟ • grupo ~> ${colors.blue(groupName)}
╽║
╽╟ • comando ~> ${colors.white(prefix+command)}
┕╨${"⚋".repeat(44)}┚
`))
} else {
console.log(colors.cyan(`
╓─━${"⎓⎔".repeat(20)}⎓━─┒
┢╕\t\t${colors.white(NomeDoBot)}
╽╟ • usuário ~> ${colors.brightYellow(pushname)}
╽║
╽╟ • número ~> ${colors.brightMagenta(addNumberMais(sender))}
╽║
╽║『 ${colors.red("privado")} 』
┕╨${"⚋".repeat(44)}┚
`))
}
}

//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

blackmd.sendMessage(from, {text: chatWon, mentions: [winnerJID]}, {quoted: seloctt,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO... 🕹️*

*⚠️ JOGADORES DEMORARAM MUITO ⚠️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
blackmd.sendMessage(from, {text: `_*🥳Parabéns @${winnerJID} por ter ganhado o jogo da velha🎉...*_`, mentions: [identArroba(winnerJID)]})
DLT_FL(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
} 
}

//=================================\\

joguinhodavelha()

if(isGroup) {
  notGroupRegisteredSALGP(from);
  notGroupRegisteredSALHARD(from);
}

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
  if(Procurar_String.includes("chat.whatsapp.com/")){
    if(isBot) return 
    link_dgp = await blackmd.groupInviteCode(from)
    if(Procurar_String.match(link_dgp)) return reply(`Como esse é o link do nosso grupo, não irei remover... Você deu sorte dessa vez 😰`)
    if(!JSON.stringify(groupMembers).includes(sender)) return
    function delgp() {blackmd.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}
    if(!isBanlinkgp) {
      delgp()
      await sleep(1500)
      AB = dataGp[0].advertir.map(i => i.id).indexOf(sender)
      if(AB >= 0) {
        if(dataGp[0].advertir[AB].adv < 2) {
          dataGp[0].advertir[AB].adv += 1
          setGp(dataGp)
          return blackmd.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, você foi advertido ${dataGp[0].advertir[AB].adv} vezes... O próximo envio de link resultará em banimento 💢`, mentions: [sender]})
        } else {
          blackmd.sendMessage(from, {text: `[❗] Você não me deu escolha @${sender.split("@")[0]}... Por desacato a autoridade, irei te aplicar a devida punição 💢`, mentions: [sender]})
          dataGp[0].advertir.splice(AB, 1)
          setGp(dataGp)
          await sleep(1500)
          return remover(from, sender)
        }
      } else {
        dataGp[0].advertir.push({id: sender, adv: 1})
        setGp(dataGp)
        return blackmd.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, é terminantemente proibido o envio de links neste grupo... Por sorte, o sistema de ban está desativado, mas isso não lhe isenta de ser advertido 💢`, mentions: [sender]})
      }
    }
    //aqui começa o escudo anti link
    if(isShieldGPuser(from, sender)) {
      pessoa = getShieldGPuser(from, sender)
      isInfinity = pessoa.infinito
      if(isInfinity) {
        delgp()
        await sleep(2000)
        return sendMess(from, `Sem links pfvr ${pushname}...`)
      } else {
        if(pessoa.quant > 0) {
          pessoa.quant -= 1
          saveSALGP();
          delgp()
          await sleep(2000)
          nmr = getShieldGPuser(from, sender).quant + 1
          return sendMess(from, `Anti link GP está ativado ${pushname}... Pra sua sorte, você ainda tem direito a enviar +${nmr} link${nmr != 1 ? `s` : ``} 🥰`)
        } else {
          rmShieldGP(from, sender)
          delgp()
          await sleep(1000)
          remover(from, sender)
          await sleep(1000)
          return sendMess(from, `Suas chances acabaram ${pushname}... Falta de aviso não foi 😪`)
        }
      }
    } else {
      blackmd.sendMessage(from, {text: `[❗] aplicando punição ao usuário @${sender.split("@")[0]} por enviar link ❌`, mentions: [sender]})
      await sleep(1000)
      remover(from, sender)
      await sleep(1000)
      delgp()
    }
  }
}

if(isCmd && !isOwner) {
if(isFiltered(sender)) {
return reply(`🛑 Para evitar spam, aguarde 5s ${pushname} 📵`)
} else {
addFilter(sender)
}
}

const allGroupIDcountMessage = [];
for(i of countMessage) {
allGroupIDcountMessage.push(i.groupId);
}

const isGroupCountMessage = (grupo = from) => {return allGroupIDcountMessage.indexOf(grupo) >= 0 ? true : false}

const getCountGroupMessage = isGroup && allGroupIDcountMessage.indexOf(from) >= 0 ? countMessage[allGroupIDcountMessage.indexOf(from)] : {}

const usuInCountMessage = (usu = sender) => {
  if(!isGroupCountMessage(from)) return false
  return isJsonIncludes(getCountGroupMessage.participants, usu)
}

const getUsuCountMessage = (usu = sender) => {
  AB = getCountGroupMessage.participants.map(i => i.id).indexOf(usu)
  return getCountGroupMessage.participants[AB]
}

//========(CONTADOR-DE-MENSAGENS)========\\
if(budy2 != undefined && isGroup) {
  if(!isJsonIncludes(countMessage, from)) {
    countMessage.push({groupId: from, participants: []})
    saveJSON(countMessage, `./base de dados/countmsg.json`)
  } else {
    AB = countMessage.map(a => a.groupId).indexOf(from)
    if(!isJsonIncludes(countMessage[AB].participants, sender)) {
      countMessage[AB].participants.push({id: sender, mensagens: 0, comandos: 0})
      saveJSON(countMessage, `./base de dados/countmsg.json`)
    } else {
      AC = countMessage[AB].participants.map(b => b.id).indexOf(sender)
      usu = countMessage[AB].participants[AC]
      msg = 0
      cmd = 0
      if(isCmd) cmd += 1
      else msg += 1
      usu.mensagens += msg
      usu.comandos += cmd
      saveJSON(countMessage, `./base de dados/countmsg.json`)
    }
  }
}

const downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
  const FileType = require("file-type");
  let quoted = message.msg ? message.msg : message
  let mime = (message.msg || message).mimetype || ''
  let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
  const stream = await downloadContentFromMessage(quoted, messageType)
  let buffer = Buffer.from([])
  for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
  }
  let type = await FileType.fromBuffer(buffer)
  filedesbug = `${Math.floor(Math.random() * 9999)}`
  trueFileName = attachExtension ? (filedesbug + '.' + type.ext) : filename
  // save to file
  await fs.writeFileSync(trueFileName, buffer)
  return trueFileName
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!isOwner && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return blackmd.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!isOwner && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return blackmd.sendMessage(from, {text: bang}, {quoted: seloctt})
}

blackmd.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!isOwner && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return blackmd.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_imagem != "0") {
blackmd.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: seloctt})  
}
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return blackmd.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
blackmd.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return blackmd.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_documento != "0") {
blackmd.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: seloctt}) 
}
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array("play", "play2", "play3", "play4", "play5", "spotify", "playlist", "ytsearch", "ytmp4", "ytmp4-2", "ytmp3", "ytmp3-2", "tiktok", "tiktokhd", "tiktok2", "tiktokimg", "instamp3", "facebook", "facebook2", "twitter").some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
  if(Procurar_String.includes("chat.whatsapp.com")) {
    link_dgp = await blackmd.groupInviteCode(from)
    if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
  }
  if(isCmd && isTrueFalse) return
  if(!JSON.stringify(groupMembers).includes(sender)) return
  function delhard() {blackmd.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}
  if(!isBanLinkHard) {
    delhard()
    await sleep(1500)
    AB = dataGp[0].advertir.map(i => i.id).indexOf(sender)
    if(AB >= 0) {
      if(dataGp[0].advertir[AB].adv < 2) {
        dataGp[0].advertir[AB].adv += 1
        setGp(dataGp)
        return blackmd.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, você foi advertido ${dataGp[0].advertir[AB].adv} vezes... O próximo envio de link resultará em banimento 💢`, mentions: [sender]})
      } else {
        blackmd.sendMessage(from, {text: `[❗] Você não me deu escolha @${sender.split("@")[0]}... Por desacato a autoridade, irei te aplicar a devida punição 💢`, mentions: [sender]})
        dataGp[0].advertir.splice(AB, 1)
        setGp(dataGp)
        await sleep(1500)
        return remover(from, sender)
      }
    } else {
      dataGp[0].advertir.push({id: sender, adv: 1})
      setGp(dataGp)
      return blackmd.sendMessage(from, {text: `[❗] Atenção @${sender.split("@")[0]}, é terminantemente proibido o envio de links neste grupo... Por sorte, o sistema de ban está desativado, mas isso não lhe isenta de ser advertido 💢`, mentions: [sender]})
    }
  }
  //aqui começa o escudo anti link
  if(isShieldHARDuser(from, sender)) {
    pessoa = getShieldHARDuser(from, sender)
    isInfinity = pessoa.infinito
    if(isInfinity) {
      delhard()
      await sleep(2000)
      return sendMess(from, `Sem links pfvr ${pushname}...`)
    } else {
      if(pessoa.quant > 0) {
        pessoa.quant -= 1
        saveSALHARD();
        delhard()
        await sleep(2000)
        nmr = getShieldHARDuser(from, sender).quant + 1
        return sendMess(from, `Anti link HARD está ativado ${pushname}... Pra sua sorte, você ainda tem direito a enviar +${nmr} link${nmr != 1 ? `s` : ``} 🥰`)
      } else {
        rmShieldHARD(from, sender)
        delhard()
        await sleep(1000)
        remover(from, sender)
        await sleep(1000)
        return sendMess(from, `Suas chances acabaram ${pushname}... Falta de aviso não foi 😪`)
      }
    }
  } else {
    blackmd.sendMessage(from, {text: `[❗] aplicando punição ao usuário @${sender.split("@")[0]} por enviar link ❌`, mentions: [sender]})
    await sleep(1000)
    remover(from, sender)
    await sleep(1000)
    delhard()
  }
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !isOwner && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return blackmd.sendMessage(from,{text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
if(dataGp[0].legenda_video == "0") {
blackmd.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
} else {
blackmd.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: seloctt})  
}
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return blackmd.sendMessage(from, {text:'O ban já ia cantar kkkkk cê deu sorte que é admin 🤪'}, {quoted: seloctt})
blackmd.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: seloctt})
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv) {
if(!isGroup && !isOwner && !isnit && !isVip && !isCmdKey){ 
reply(`[❗] Modo ANTI PV está ativo ${pushname}... Sinto muito, mas não vejo outra opção a não ser te bloquear 🚫`)
await sleep(2500)
return blackmd.updateBlockStatus(sender, 'block')
}
}
//=========(LOJINHA/MENSAGEM-PV/BYADMX)==========\\

botaoblk = {
  type: `list`,
  title: `〘 𝕃𝕠𝕛𝕚𝕟𝕙𝕒 𝕕𝕒 𝔸𝕜𝕚𝕣𝕒 〙`,
  rowId: [
    {
      title: "『 🏡 𝙷𝚘𝚖𝚎 』",
      options: [
        {title: "🏪 𝗜𝗿 𝗽𝗮𝗿𝗮 𝗟𝗼𝗷𝗮 🏪", command: `${prefix}loja`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}
      ]
    }
    
  ]
}


txt = `⚠️ Quer a acesso aos comandos? Torne-se VIP ou alugue o bot. Teste grátis no seu grupo por 24 horas! Aproveite agora! 👇`

if(!isGroup && !isVip && !isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe && isBylojinha && isCmd && !isCmdKey) 
return sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot}, blackmd, sender, [botaoblk], info)




//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isVip && !isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && isCmd && !isCmdKey) return sendUrlText(from, `[❗] Atenção ${pushname}, o modo ANTI PV está ativo... Recebi ordens para não responder usuários inferiores aqui ❌`, NomeDoBot, ``, logoslink.menu, `https://wa.me/`+nmrdn.split("@")[0], seloctt)

//======================================\\

// ANTI_LIGAR \\

if(!isGroup && isAnticall) {
blackmd.ws.on('CB:call', async (B) => {
if(B.content[0].tag == 'offer') {
blackmd.sendMessage(B.content[0].attrs['call-creator'], {text: `[ ❌ ] É proibido ligar pro bot... BLOQUEADO!! 🚫`}).then(() => {
setTimeout(() => {
blackmd.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
}, 2500)
})
}
})
}

//======================================\\

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
blackmd.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando Visualização única.."
blackmd.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isBanned) return BannedExpired(ban)

const resptinder = (txt) => {
  return txt.replace("#p#", prefix).replace("#p#", prefix).replace("#pc#", prefix+command).replace("#pc#", prefix+command)
}

if(isGroup && isAcceptGroup) {
  setTimeout(async() => {
    req = await blackmd.groupRequestParticipantsList(from)
    for(r of req) {
      await sleep(500)
      aceitar(from, r.jid)
    }
  }, dataGp[0].acceptGroup.time * 1000)
}

const sendAsPoll = (jid, name = '', values = [], selectableCount = 0) => { return blackmd.sendMessage(jid, { poll: { name, values, selectableCount }}) }

// CONST PROS COMANDOS POR FIGURINHAS \\
    
const vitinhufds = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

// INICIO DAS CASES / COMANDOS COM PREFIXO --- DEIXE ACIMA DO >SWITCH(COMMAND) {< E NÃO APAGUE O MESMO \\

switch(vitinhufds){
case '148,210,71,42,225,186,0,231,155,200,107,169,7,118,220,14,33,80,212,0,180,186,188,46,153,184,200,178,27,175,144,211':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == false) return
reagir(from, "🔓")
blackmd.groupSettingUpdate(from, 'not_announcement')
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
break

case '243,170,138,56,156,165,163,234,6,249,190,30,234,76,17,54,38,180,121,195,48,201,85,71,250,97,246,148,91,66,75,203':
if(!isGroup) return
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(groupMetadata.announce == true) return
reagir(from, "🔒")
blackmd.groupSettingUpdate(from, 'announcement')
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
break

case '117,114,63,152,127,74,57,32,71,11,146,86,67,157,143,255,176,180,90,6,128,165,78,214,212,7,97,134,23,12,88,26':
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(!menc_os2) return
if(!JSON.stringify(groupMembers).includes(menc_os2)) return
reagir(from, "👑")
mention(`👑 *@${menc_os2.split('@')[0]} acaba de receber a promoção de administrador do grupo* 🔱`)
blackmd.groupParticipantsUpdate(from, [menc_os2], "promote")
break

case '105,230,118,61,67,20,227,139,207,240,155,98,152,112,202,241,204,98,130,66,105,26,120,22,148,110,217,255,0,52,83,130':
if(!isGroupAdmins) return
if(!isBotGroupAdmins) return
if(!menc_os2) return
if(!JSON.stringify(groupMembers).includes(menc_os2)) return
reagir(from, "👑")
mention(`💫 *Foi retirada do @${menc_os2.split('@')[0]} sua coroa de administrador do grupo* 🥲`)
blackmd.groupParticipantsUpdate(from, [menc_os2], "demote")
break
}

//INICIO DE COMANDO DE PREFIXO
switch(command){

case 'comprarbot':
reagir(from, `💞`)
nmr = `wa.me/5511915540467?text=comprar%20bot`
txt = `🥰 _${tempo} ${pushname}, queres comprar o *Barba Branca descriptografado e 100% editável?* Basta ir no link abaixo, aonde você será rederecionado para MEU DONO *JHERFFESON...*_

=> ${nmr}

_Lembrando que o bot custa *75$* e todo o processo é feito com meu dono*, com direito ao suporte até mesmo antes da compra_`
sendUrlText(from, txt, `⎙ B̶A̶R̶B̶A̶ B̶R̶A̶N̶C̶A̶ ⎙`, `Seu bot pessoal, pronto para lhe ajudar...`, `https://telegra.ph/file/100ce8f777056a5f29cdd.jpg`, `https://`+nmr, seloctt)
break

case 'letra': case 'letras':
if(!q) return reply(`Qual o nome da música? Exemplo: ${prefix + command} wanna be yours`)
ABC = await fetchJson(`${barbasite}/api/letramusic?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
try {
sendUrlText(from, "- ".repeat(20)+`\n\n`+ABC.resultado.letraDaMusica+`\n\n`+"- ".repeat(20), NomeDoBot, ``, ABC.resultado.imagemMusic, barbasite, seloctt)
} catch {
reply("Erro")
}
break

case 'rgtinder':
try {
ABC = await fetchJson(`${barbasite}/tinder/login?usu=${sender}&${q && !isQuotedImage ? `rg=${q}&` : ``}apikey=`+API_KEY_BARBA)
try {
data = await fetchJson(`${barbasite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BARBA)
} catch { return reply("Erro ao tentar acessar o registro") }
fini = data.nome != 0 && data.idade != 0 && data.gene != 0 && data.sexualidade != 0 && data.filtro != 0 && data.bio != 0 && data.foto == 0
if(fini && isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`${barbasite}/tinder/login?usu=${sender}&rg=${img}&apikey=`+API_KEY_BARBA)
return reply(resptinder(BCD.message))
} catch { return reply("Erro ao salvar a imagem... Tente novamente") }
}
reply(resptinder(ABC.message))
} catch(e) {
console.log(e)
reply("Erro")
}
break

case 'tinder':
reagir(from, "🔥")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${barbasite}/tinder/find?usu=${sender}&apikey=`+API_KEY_BARBA)
data = await fetchJson(`${barbasite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BARBA)
txt = `
ㅤㅤㅤ🔥 𝒕𝒊𝒏𝒅𝒆𝒓 🔥
╔══════════════════╣
╟ ❪😍ฺ࣭࣪͘ꕸ▸ ɴᴏᴍᴇ: ${ABC.dados[0].nome}
║
╟ ❪😏ฺ࣭࣪͘ꕸ▸ ᴡʜᴀᴛꜱᴀᴩᴩ: wa.me/${ABC.dados[0].nmr}
║
╟ ❪🤫ฺ࣭࣪͘ꕸ▸ ɪᴅᴀᴅᴇ: ${ABC.dados[0].idade} anos
║
╟ ❪🤭ฺ࣭࣪͘ꕸ▸ ꜱᴇxᴜᴀʟɪᴅᴀᴅᴇ: ${ABC.dados[0].sexualidade}
║
╟ ❪🫣ฺ࣭࣪͘ꕸ▸ ɢêɴᴇʀᴏ: ${ABC.dados[0].gene}
║
╩ 𖥨ํ∘̥⃟⸽⃟💌৴▸ ʙɪᴏ: ${ABC.dados[0].bio}

_Exibindo perfil nº${ABC.dados[0].id} de ${ABC.dados[0].total} usuário${ABC.dados[0].total > 1 ? 's' : ''} registrado${ABC.dados[0].total > 1 ? 's' : ''}_
`
blackmd.sendMessage(from, {image: {url: `${barbasite}/api/canvas/ship?foto1=${data.dados[0].foto}&foto2=${ABC.dados[0].foto}&mat=${alerandom(100)}&fundo=https://telegra.ph/file/b41f8e7f2ca966c8a6667.jpg`}, caption: txt}, {quoted: seloctt})
} catch { reply(resptinder(ABC.message || "Erro")) }
break

case 'tindernome':
case 'tinderidade':
case 'tinderbio':
case 'setgene':
case 'setsex':
case 'setfiltro':
case 'tinderfoto':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${barbasite}/tinder/config?usu=${sender}&mod=${command}&${q && !isQuotedImage ? `q=${q}&` : ``}apikey=`+API_KEY_BARBA)
if(command == "tinderfoto" && isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
img = await upload(owgi)
BCD = await fetchJson(`${barbasite}/tinder/config?usu=${sender}&mod=${command}&q=${img}&apikey=`+API_KEY_BARBA)
return reply(resptinder(BCD.message))
} catch { return reply("Erro ao salvar a imagem... Tente novamente") }
}
reply(resptinder(ABC.message))
} catch { reply("Erro") }
break

case 'meutinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
try {
ABC = await fetchJson(`${barbasite}/tinder/perfil?usu=${sender}&apikey=`+API_KEY_BARBA)
txt = `
╔══════════════════╣
╟ • ${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `ɴᴏᴍᴇ` : `ᴜꜱᴜáʀɪ${ABC.dados[0].gene == "masculino" ? "ᴏ" : "ᴀ"}`}: ${ABC.dados[0].nome}
║
╟ • ɪᴅᴀᴅᴇ: ${ABC.dados[0].idade} anos
║
╟ • ᴡʜᴀᴛꜱᴀᴩᴩ: wa.me/${ABC.dados[0].nmr}
║
╟ • ꜱᴇxᴜᴀʟɪᴅᴀᴅᴇ: ${ABC.dados[0].sexualidade}
║
╟ • ɢêɴᴇʀᴏ: ${ABC.dados[0].gene}
║
╟ • ꜰɪʟᴛʀᴏ: ${ABC.dados[0].filtro == 3 ? `sem preferências` : `pesquisar por ${ABC.dados[0].filtro == 1 ? ` homens` : `mulheres`}`}
║
╩ • ʙɪᴏ: ${ABC.dados[0].bio}

_${ABC.dados[0].gene.replace("ã", "a") == "nao declarar" ? `Deu entrada no tinder` : `Registrad${ABC.dados[0].gene == "masculino" ? "o" : "a"}`} em ${ABC.dados[0].registro[0]}, às ${ABC.dados[0].registro[1]}_
`
blackmd.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `ㅤㅤㅤ🔥 𝒃𝒍𝒂𝒄𝒌 𝒕𝒊𝒏𝒅𝒆𝒓 🔥`,
    body: ``,
    thumbnail: await getBuffer(`${ABC.dados[0].foto}`),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: `${barbasite}`
  }
}}, {quoted: seloctt})
} catch { reply(resptinder(ABC.message || "Erro")) }
break

case 'sairtinder':
case 'rmtinder':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(command == 'rmtinder') {
  if(!isOwner) return reply(enviar.msg.donosmt)
  if(!q && !menc_os2) return reply("Retorne após o comando o número ou @ do usuário que você quer deletar do tinder")
  deletar = identArroba(q)
} else { deletar = sender }
try {
ABC = await fetchJson(`${barbasite}/tinder/delete?usu=${deletar}&apikey=`+API_KEY_BARBA)
reply(resptinder(ABC.message))
} catch { reply("Erro") }
break

case 'envvdd':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD a verdade ?`)
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
vdddsf[BC].verdades.push({vdd: q})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Verdade enviada com sucesso...`)
break

case 'envdsf':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!q) return reply(`KD o desafio ?`)
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
vdddsf[BC].desafios.push({dsf: q})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`✓ Desafio enviado com sucesso...`)
break

case 'vdsflist':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
txt = `😇 Lista de verdades:\n`
for(i = 0; i < vdddsf[BC].verdades.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].verdades[i].vdd}\n`
}
txt += `\n😈 Lista de desafios:\n`
for(i = 0; i < vdddsf[BC].desafios.length; i++) {
txt += `• ${i} -> ${vdddsf[BC].desafios[i].dsf}\n`
}
reply(txt)
break

case 'rmvdd':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].verdades.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].verdades.splice(Number(args[0]), 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Verdade deletada do jogo`)
break

//MEUS COMANDOS 2

case 'chavekeys':
await
blackmd.sendMessage(from, { react: { text: `🔑`, key: info.key }})
reply('https://api.bronxyshost.com.br/')
break

case 'playjrc': 
case 'jr2':
await blackmd.sendMessage(from, {react: { text: "🎵", key: info.key }})       
/*await clockLoop()*/
try {
ytbr = await fetchJson(`http://br1.bronxyshost.com:4266/youtube/play?query=${q}&apikey=${API_KEY_JRC}`)
/*ytbrt = `*📄 Título➧* ${ytbr.Title}
*📊 Views➧* ${ytbr.Viewer}
*👤 Author➧* ${ytbr.Author} 
*⌛️ Duração➧* ${ytbr.Duration}
*🚹 Size➧* ${ytbr.Duration}
*🔼 Share➧* \n ${ytbr.Link}
*💬 Descrição➧*${ytbr.Description}`
blackmd.sendMessage(from, {image: {url: `${ytbr.Thumb}`}, caption: ytbrt}, {quoted: info})*/
blackmd.sendMessage(from, {audio: {url: `http://br1.bronxyshost.com:4266/youtube/mp3?url=${ytbr.Link}&apikey=${API_KEY_JRC}` }, mimetype: "audio/mpeg",
  contextInfo: {
    externalAdReply: {
    
      title: "𝗕𝗔𝗥𝗕𝗔 𝗔𝗨𝗗𝗜𝗢 𝗘 𝗩𝗜𝗗𝗘𝗢",
      body: `                   ↻     ⊲  Ⅱ  ⊳     ↺`,
      renderLargerThumbnail: true,
      mediaType: 2,  
      thumbnail: await getBuffer(`${ytbr.Thumb}`),
      mediaUrl: `${ytbr.Link}`,
      sourceUrl: `${ytbr.Link}`,
    } 
}},{quoted: info})
} catch (err) {
reply(`Seja mais específico..`)
console.log(err)
} 
/*continueLoop = false; // Interrompe o loop do relógio*/
break

case 'myapi':
try {
const api = await fetchJson(`http://br1.bronxyshost.com:4266/runtime?apikey=${API_KEY_JRC}`);
const ping = `
🟢 *Sua API está:* ${api.status}
⚡ *Taxa de resposta da API:* ${api.speed}
🎫 *Limite de requisições restantes:* ${api.suakey}
⏳ *Tempo Online:* ${api.online}
📊 *Requisições Processadas:* ${api.request}
⚙️ *Host:* http://br1.bronxyshost.com:4266/
    `;

await blackmd.sendMessage(from, { image: { url: `https://brayroon.sirv.com/Images/WhatsApp%20Image%202023-08-28%20at%2003.33.20.jpeg` }, caption: ping}, {quoted: info});
} catch (e) {
console.log(e);
}
break

case 'ping':
case 'velocidade':
try {
blackmd.sendMessage(from, { react: { text: `🏃`, key: info.key }}) 
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
const ingfoo = groups.map(v => v)
uptime = Math.abs(process.uptime()); // A função Math.abs() evita valores negativos
var fixedUptime = uptime.toFixed(2); // 
respon = `
✴️ UPTIME BOT: ${kyun(fixedUptime)}ms\n\n
🚹 MACHINE: ${NomeDoBot}
🚹 SYSTEM: ${os.type()} 
🚹 PLATAFORM: ${os.platform()}
🚹 GROUPS: ${ingfoo.length}
🚹 TOTAL RAM: ${Math.round(require('os').totalmem() / 1024 / 1024)}MB
🚹 USO RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
`.trim();
await blackmd.sendMessage(from, 
{ image: { url: `https://brayroon.sirv.com/Images/IMG-20230819-WA0073.jpg?text.0.text=VELOCIDADE%20DO%20BARBA%20ROBOT&text.0.position.gravity=north&text.0.position.y=18%30&text.0.size=50&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=10&text.0.outline.blur=10&text.1.text=%20%20%20${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=00FF00&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon}, {quoted: info})
} catch (e) {
reply(`${e}`)
} 
break

case 'uptime': {
blackmd.sendMessage(from, { react: { text: `⚡`, key: info.key }})
const groupName = isGroup ? groupMetadata.subject : '';
let timestamp = speed();
let latensi = speed() - timestamp;
let uptimeInSeconds = process.uptime();
let osType = os.type();  
let osRelease = os.release(); 
blackmd.sendMessage(from, {image: { url: `https://brayroon.sirv.com/Images/pinggg.jpg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${latensi.toFixed(4)}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, 
caption: `
⏱️ Velocidade de Resposta: ${latensi.toFixed(4)} ms\n 
🤖 O bot se encontra online por: ${formatUptime(uptimeInSeconds)}\n
💻 Sistema Operacional: ${osType}\n
📂 Versão da OS: ${osRelease}\n
💾 Memoria RAM total: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB\n
💾 Memoria RAM disponível: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB\n
${!isGroup ? `👤 Usuário: ${pushname}` :  `‼️ Grupo: ${groupName}`}\n
➤ Solicitado por: ${pushname}\n
  `
}, {quoted: selo});    
}
break; 

case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break









case 'rmdsf':
if(!isOwner) return reply("Só meu dono pode usar esse comando...")
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > vdddsf[BC].desafios.length) return reply(`Use o comando ${prefix}vdsflist e escolha um dos números na lista para deletar... Ex:
${prefix+command} 2`)
vdddsf[BC].desafios.splice(Number(args[0]), 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Desafio deletado do jogo`)
break

case 'vdddsf':
if(!isGroup) return reply(`Só em grupo`)
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
if(vdddsf[BC].verdades.length <= 1 || vdddsf[BC].desafios.length <= 1) return reply(`É necessário ao menos duas verdades e dois desafios para iniciarmos... ${isOwner ? `Use o comando ${prefix}envvdd e ${prefix}envdsf` : ``}`)
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo == 0) return reply(`Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`)
if(vdddsf[AB].jogadores[DC].tipo == 1) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(responda com verdade ou mentira)_`)
if(vdddsf[AB].jogadores[DC].tipo == 2) return reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[AB].jogadores[DC].vdouds}

_(quando concluir o desafio, use ${prefix}pronto)_`)
} else {
vdddsf[AB].jogadores.push({id: sender, vdouds: "", tipo: 0})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `Olá ${pushname}, faça sua escolha...
😇⃤ Verdade
ㅤㅤㅤㅤOu
😈⃤ Desafio`
sendButton(from, {text: txt, footer: `Selecione uma das opções abaixo...`}, blackmd, sender, [{type: `cmd`, text: `😇⃤ VERDADE`, command: `verdade`}, {type: `cmd`, text: `😈⃤ DESAFIO`, command: `desafio`}], seloctt)
}
break

case 'pulardesafio': case 'pulardsf'://by jherffeson
{
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível pular o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
let { key } = await blackmd.sendMessage(from, {text: `Ih ala, desistiu kkkkk`}, {quoted: seloctt})//primeira mensagem
await sleep(1000)
await blackmd.sendMessage(from, {text: `😈 Gerando novo desafio...`, edit: key }, {quoted: seloctt})
await sleep(1000)
BA = vdddsf.map(b => b.idgp).indexOf(from)
BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
CD = vdddsf[BA].jogadores.map(i => i.id).indexOf(sender)
aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
vdddsf[AB].jogadores.push({id: sender, vdouds: vdddsf[BC].desafios[aledsf].dsf, tipo: 2})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
txt = `\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`
await blackmd.sendMessage(from, {text: txt, edit: key }, {quoted: seloctt})
}
break

case 'pronto':
if(!JSON.stringify(vdddsf).includes("jherffeson")) {
vdddsf.push({idvd: "jherffeson", verdades: [], desafios: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
if(!JSON.stringify(vdddsf).includes(from)) {
vdddsf.push({idgp: from, jogadores: []})
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
}
AB = vdddsf.map(b => b.idgp).indexOf(from)
if(!JSON.stringify(vdddsf[AB].jogadores).includes(sender)) return reply(`Você não iniciou nenhum jogo... Use ${prefix}vdddsf`)
DC = vdddsf[AB].jogadores.map(x => x.id).indexOf(sender)
if(vdddsf[AB].jogadores[DC].tipo != 2) return reply(`Você escolheu verdade, portanto, não é possível finalizar o desafio assim... Diga verdade ou mentira para a seguinte afirmação/pergunta: ${vdddsf[AB].jogadores[DC].vdouds}`)
vdddsf[AB].jogadores.splice(DC, 1)
fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
reply(`Btf mn, parabéns por completar o desafio 🌚🍷`)
break

case 'advn-nmr': case 'adivinharnmr':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isJsonIncludes(adivinharnmr, from)) {
  adivinharnmr.push({groupId: from, participants: []})
  saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
}
if(!isModobn) return reply(enviar.msg.modobz)
AB = adivinharnmr.map(i => i.groupId).indexOf(from)
if(isJsonIncludes(adivinharnmr[AB].participants, sender)) {
  AC = adivinharnmr[AB].participants.map(i => i.id).indexOf(sender)
  adivinharnmr.splice(AC, 1)
  saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
}
adivinharnmr[AB].participants.push({id: sender, progresso: 0, resultado: 0, fim: false})
saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
reply(`😀 ${tempo} ${pushname}, iniciarei o jogo de adivinhação do número... A cada ordem, após você resolver a questão, responda "pronto" para prosseguir.`)
await sleep(1000)
sendMess(from, `Digite "pronto" para começar (sem as aspas, é claro) 🥰`)
break

case 'savegp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isJsonIncludes(grupos, from)) {
grupos.push({id: from, limite: 5, validado: true})
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Grupo salvo na pasta 📁`)
} else {
GP = grupos.map(i => i.id).indexOf(from)
grupos[GP].validado = true
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Grupo já foi salvo ✔️`)
}
break

case 'unsavegp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(isJsonIncludes(grupos, from)) {
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
reply(`Grupo deletado ✔️`)
} else reply(`Grupo não encontrado`)
break

case 'addrent': case 'rgrent'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
  GP = grupos.map(i => i.id).indexOf(from)
  grupos[GP].validado = true
  fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} 
if(!JSON.stringify(aluguel).includes(from)) {
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30d`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, dias] = barra.split('/')
day = dias.slice(0, dias.length-1)
if(dias.slice(dias.length-1, dias.length).toLowerCase() === "h") {
letra = 1
} else if(dias.slice(dias.length-1, dias.length).toLowerCase() === "d") {
letra = 24
} else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
if(!Number(day)) return reply(`Apenas números pfvr`)
jherffeson = nmr.includes('@') ? nmr.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : nmr.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkwpp] = await blackmd.onWhatsApp(jherffeson.split('@')[0])
if(checkwpp == undefined) {
return reply(`O número ${jherffeson.split('@')[0]} não é válido no whatsapp`)
}
if(Number(day) <= 0) return reply(`É necessário ao menos 1 hora de aluguel né`)
if(dias.includes('.')) return reply("Não use números decimais")
aluguel.push({id: from, nome: groupName, tempo: (Number(day) + 1) * letra, totalRent: (Number(day) + 1) * letra, cliente: jherffeson, save: Number(moment.tz('America/Sao_Paulo').format("HH")), cortesia: false})
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
if(!JSON.stringify(TMGP).includes(from)) {
TMGP.push({id: from, infonome: groupName})
fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(TMGP))
}
reply(`*Grupo adicionado ao aluguel com sucesso* ✅`)
} else {
day = q.slice(0, q.length-1)
if(!Number(day)) return reply(`Coloque quantos dias mais serão adicionados ao aluguel deste grupo...`)
if(q.slice(q.length-1, q.length).toLowerCase() === "h") {
letra = 1
} else if(q.slice(q.length-1, q.length).toLowerCase() === "d") {
letra = 24
} else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
hehe = Number(day) * letra
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].totalRent = aluguel[AB].tempo + hehe
aluguel[AB].tempo += hehe
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`+${q} adicionad${letra == 1 ? "a" : "o"}${Number(args[0]) > 1 ? 's' : ''} para este grupo`)
}
break

case 'tirarrent':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
day = q.slice(0, q.length-1)
if(q.slice(q.length-1, q.length).toLowerCase() === "h") {
letra = 1
} else if(q.slice(q.length-1, q.length).toLowerCase() === "d") {
letra = 24
} else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
if(!Number(day)) return reply(`Apenas números pfvr`)
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
AB = aluguel.map(i => i.id).indexOf(from)
aluguel[AB].cortesia = false
aluguel[AB].nome = groupName
aluguel[AB].tempo -= Number(day) * letra
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`${q} retirad${letra == 1 ? "a" : "o"}${Number(args[0]) > 1 ? 's' : ''} deste grupo`)
break

case 'delrent': case 'rmrent'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) {
if(!JSON.stringify(aluguel).includes(from)) return reply(`ID inexistente`)
if(JSON.stringify(TMGP).includes(from)) {
AD = TMGP.map(i => i.id).indexOf(from)
TMGP.splice(AD, 1)
fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(TMGP))
}
GP = grupos.map(i => i.id).indexOf(from)
grupos.splice(GP, 1)
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
AB = aluguel.map(i => i.id).indexOf(from)
aluguel.splice(AB, 1)
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Registro desse grupo deletado com sucesso 📍`)
} else {
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > Number(aluguel.length + 1)) return reply(`Retorne um número válido... Olhe na ${prefix}listrent e veja o número`)
BC = Number(args[0]) - 1
if(JSON.stringify(TMGP).includes(aluguel[BC].id)) {
TMGP.splice(BC, 1)
fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(TMGP))
}
GP = grupos.map(i => i.id).indexOf(aluguel[BC].id)
grupos.splice(GP, 1)
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
aluguel.splice(BC, 1)
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`Registro desse grupo deletado com sucesso 📍`)
}
break

case 'cortesia'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(JSON.stringify(aluguel).includes(from)) return reply(`Grupo já registrado`)
if(!JSON.stringify(grupos).includes(from)) {
  grupos.push({id: from, limite: 5, validado: true})
  fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
} else {
  AD = grupos.map(i => i.id).indexOf(from)
  grupos[AD].validado = true
  fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: nmrdn, save: Number(sendHours('MM')), cortesia: true})
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
reply(`💵 Cartão verde validado ✅
24h liberadas neste grupo contando a partir de agora ⏲️`)
break

case 'listrent': case 'lista-aluguel'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(aluguel.length > 0) {

//salvar o nome dos grupos
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
for (g = 0; g < ingfoo.length; g++){
if(JSON.stringify(aluguel).includes(ingfoo[g].id)) {
jherffeson = aluguel.map(m => m.id).indexOf(ingfoo[g].id)
aluguel[jherffeson].nome = ingfoo[g].subject
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
}
}

//enviar o nome dos grupos
txt = `⏤͟͟͞͞ ꦿ𝙻𝚒𝚜𝚝𝚊 𝙳𝚎 𝙶𝚛𝚞𝚙𝚘𝚜 𝙰𝚕𝚞𝚐𝚊𝚍𝚘𝚜 ↴
▧⃯⃟𝚃𝚘𝚝𝚊𝚕〘 ${aluguel.length} 〙
________________________________________\n`
for(i = 0; i < aluguel.length; i++) {
hmm = aluguel[i].tempo
txt += `『 ${i + 1} 』
⏤͟͟͞͞ ꦿ𝙶𝚛𝚞𝚙𝚘: ${aluguel[i].nome}\n`
if(aluguel[i].cortesia == false) {
txt += `ㅤㅤ⏤͟͟͞͞ ꦿ𝚃𝚎𝚖𝚙𝚘 𝚁𝚎𝚜𝚝𝚊𝚗𝚝𝚎: ${sendTimeCort(hmm)}
${isPrivateChat ? `ㅤ⸺͟͞ꪶ𝙲𝚕𝚒𝚎𝚗𝚝𝚎: @${aluguel[i].cliente.split('@')[0]} (${addNumberMais(aluguel[i].cliente)})\n` : ``}________________________________________\n`
} else {
txt += `» ${sendTimeCort(hmm)} restantes «
________________________________________\n`
}
}
mention(txt)
} else {
reply(`Nenhum grupo adicionado`)
}
break

case 'lastrent':
if(!isOwner) return reply(enviar.msg.donosmt)
if(aluguel.length > 0) {
jherffeson = aluguel.map(i => i)
rank = jherffeson.sort((a, b) => (a.tempo < b.tempo) ? -1 : 0)
txt = "```⏤͟͟͞͞ ꦿTop 3 grupos com o aluguel mais próximo de acabar:```\n________________________________________\n"
for(i = 0; i < 3; i++) {
if(rank[i].cortesia == false) {
hmm = rank[i].tempo
txt += `『 ${i + 1} 』
⏤͟͟͞͞ ꦿ𝙶𝚛𝚞𝚙𝚘: ${rank[i].nome}
ㅤㅤ⏤͟͟͞͞ ꦿ𝚃𝚎𝚖𝚙𝚘 𝚁𝚎𝚜𝚝𝚊𝚗𝚝𝚎: ${sendTimeCort(hmm)}
${isPrivateChat ? `ㅤ⸺͟͞ꪶ𝙲𝚕𝚒𝚎𝚗𝚝𝚎: @${rank[i].cliente.split('@')[0]} (${addNumberMais(aluguel[i].cliente)})\n` : ``}________________________________________\n`
}
}
mention(txt)
} else {
reply(`Nenhum grupo adicionado`)
}
break

case 'iddogrupo': case 'idgp':
if(!isOwner) return reply(enviar.msg.donosmt)
reply(from)
break

case 'figurinhas': case 'figurinha':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(1000)
sendStickerFromUrl(sender, `${barbasite}/api/figurinhas?apikey=`+API_KEY_BARBA)
}
break

case 'figurinhas2': case 'figurinhas':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(1000)
sendStickerFromUrl(sender, `${barbasite}/api/figurinhas2?apikey=`+API_KEY_BARBA)
}
break

case 'figemoji': case 'figflork': case 'figale': case 'figmemes': case 'figanime': case 'figcoreana': case 'figbebe': case 'figdesenho': case 'figanimais': case 'figengracada': case 'figraiva': case 'figroblox':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!q) return reply(`Insira a quantidade de figurinhas que você deseja receber, exemplo: ${prefix + command} 2`)
if(!Number(args[0]) || Number(q.trim()) > 10 && !isOwner) return reply(`O máximo de figurinhas é 10`)
reply(`ヅ _Calma ae ${pushname}, enviando ${args[0]} figurinha${Number(args[0]) > 1 ? 's' : ''} no seu privado..._ 亗`)
for (i = 0; i < Number(args[0]); i++) {
await sleep(1000)
sendStickerFromUrl(sender, `${barbasite}/sticker/${command}?apikey=`+API_KEY_BARBA)
}
break

case 'tirardocntd': case 'delmsg': case 'delcntd':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply(`Marque o usuário que você quer deletar do contador, o @ ou a mensagem`)
txt = `Este usuário não está na database do contador deste grupo...`
AB = allGroupIDcountMessage.indexOf(from)
if(AB < 0) return reply(txt)
AC = getCountGroupMessage.participants.map(i => i.id).indexOf(sender)
if(AC < 0) return reply(txt)
getCountGroupMessage.participants.splice(AC, 1)
saveJSON(countMessage, "./base de dados/countmsg.json")
reply(`Usuário deletado do contador com sucesso...`)
break

case 'transferirmsg': case 'trfrmsg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(contar(q, `/`) != 1) return reply(`Este comando é para transferir as mensagens do número antigo de um usuário para o seu novo número... Retorne após o comando o número antigo do usuário, e o seu novo número, separando ambos com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/${addNumberMais(randomUser)}`)
usu1 = identArroba(q.split(`/`)[0])
usu2 = identArroba(q.split(`/`)[1])
if(!usuInCountMessage(usu1)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do contador deste grupo...`)
if(!usuInCountMessage(usu2)) return mention(`O usuário @${usu2.split("@")[0]} não está na database do contador deste grupo...`)
dbuser1 = getUsuCountMessage(usu1)
dbuser2 = getUsuCountMessage(usu2)
msg = dbuser1.mensagens
cmd = dbuser1.comandos
dbuser2.mensagens += msg
dbuser2.comandos += cmd
saveJSON(countMessage, "./base de dados/countmsg.json")
AB = getCountGroupMessage.participants.map(i => i.id).indexOf(usu1)
getCountGroupMessage.participants.splice(AB, 1)
saveJSON(countMessage, "./base de dados/countmsg.json")
mention(`As ${msg} mensagens e ${cmd} comandos do usuário @${usu1.split("@")[0]} foram transferidos para o usuário @${usu2.split("@")[0]} com sucesso...`)
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar M4|O mais brabo das edits...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./base de funcionamento/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./base de funcionamento/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./base de funcionamento/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(enviar.msg.grupo)
if(command == "anotacao" || command == "nota") {
if(!q.trim()) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(i2 < 0) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2]?.puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr?.length; i++) {
txtin += `↝ Anotação: ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
blackmd.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: seloctt}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
blackmd.sendMessage(from, {image: {url: q}}, {quoted: seloctt}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`)
try {
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
txt = `${"=".repeat(20)}
🍄 *Signo:* ${q}
${"=".repeat(20)}

${ABC.title + "\n" + ABC.body}`
sendUrlText(from, txt, ABC.img, NomeDoBot, ``, barbasite, seloctt)
} catch(e) {
console.log(e)
return reply("Erro..")
}
break

case 'infoanotacao':
blackmd.sendMessage(from, {text: anotacao(prefix)})
break

case 'ps':
case 'playstore':
if(!q) return reply(`KD o nome do app ?`)
try {
ABC = await fetchJson(`${barbasite}/api/playstore?nome=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
i = ABC.pesquisa.resultado[0]
txt = `
❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}
`
blackmd.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `ㅤㅤㅤ🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`,
    body: ``,
    thumbnail: await getBuffer(i.imagem),
    mediaType: 1,
    sourceUrl: i.link
  }
}}, {quoted: seloctt})
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break

case 'playstore-search': case 'ps-search':
if(!q) return reply(`KD o nome do app ?`)
try {
ABC = await fetchJson(`${barbasite}/api/playstore?nome=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
txt = `ㅤㅤㅤ🎮 𝙋𝙇𝘼𝙔 𝙎𝙏𝙊𝙍𝙀 🎮`
for(i of ABC.pesquisa.resultado) {
txt += `\n\n❪🏷️ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎৴▸ ${i.nome}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙳𝚎𝚜𝚎𝚗𝚟𝚘𝚕𝚟𝚎𝚍𝚘𝚛৴▸ ${i.desenvolvedor}
❪⭐ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘৴▸ ${i.estrelas}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔ฺ࣭࣪͘ꕸ▸ ${i.link}`
}
reply(txt)
} catch {
reply(`Não encontrei nenhum app, ou pode ser que a api caiu`)
}
break

case 'noticias':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
try {
if(!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
ABC = await fetchJson(`${barbasite}/api/noticias/find?q=${encodeURI(q)}&apiKey=`+API_KEY_BARBA)
reply(ABC.resultado)
} catch (e) {
return console.log(e)
reply("Erro")
}
break

case 'livro': case 'book':
if(!q) return reply("KD o nome do livro?")
try {
ABC = await fetchJson(`${barbasite}/api/book?livro=${encodeURI(q)}&apiKey=`+API_KEY_BARBA)
i = ABC.resultado[0].volumeInfo
sendUrlText(from, i.description, `📖 LIVRO - `+i.title, i.subtitle || ``,
barbasite+`/api/convert/image?url=${i.imageLinks.thumbnail}&apikey=`+API_KEY_BARBA,
barbasite, seloctt)
} catch(e) {
console.log(e)
reply("Erro")
}
break

case 'brasileirao':
if(!isGroup) return reply(enviar.msg.grupo)
try {
ABC = await fetchJson(`${blacksite}/api/brasileirao?apikey=`+API_KEY_BLACK)
txt = `_🇧🇷⃤ 𝚃𝚊𝚋𝚎𝚕𝚊 𝙳𝚘 𝙱𝚛𝚊𝚜𝚒𝚕𝚎𝚒𝚛ã𝚘 𝙰𝚝𝚞𝚊𝚕𝚒𝚣𝚊𝚍𝚊 ↴_`
for( i of ABC.resultado ) {
  txt += `\n▧⃯⃟𝚃𝚒𝚖𝚎: ${i.equipe}
▧⃯⃟𝙿𝚘𝚗𝚝𝚘𝚜: ${i.pontos}
▧⃯⃟𝙹𝚘𝚐𝚘𝚜: ${i.jogosJogados}\n`
}
reply(txt)
} catch {
reply("Erro")
}
break

case 'globo': case 'poder360': case 'jovempan': case 'uol': case 'cnnbrasil':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
try {
res = await fetchJson(`${barbasite}/api/noticias/${command}?apikey=`+API_KEY_BARBA);
total = res.pesquisa.resultado
teks = total[Math.floor(Math.random()*total.length)]
pocpoc = `Título - ${teks.noticia}\nLink - ${teks.link}`
await blackmd.sendMessage(from, {image: await getBuffer(teks.imagem), caption: `${pocpoc}`}, {quoted: info}).catch(() => {
return reply("❌️ Erro!");
})
} catch (e) {
return reply("❌️ Erro!");
}
break

case 'addnv-adc': case 'rmnv-adc':
case 'addnv-mod': case 'rmnv-mod':
case 'addnv-rm': case 'rmnv-rm':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o comando?")
com = command.split("-")[1]
if(com == "adc") nmr = 0
if(com == "mod") nmr = 1
if(com == "rm") nmr = 2
if(command.startsWith("add")) {
var [co, de] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
novidades[nmr].add.push({cmd: co.toLowerCase(), desc: de ? de : ""})
saveJSON(novidades, "./database/data/novidades.json")
reply(`*_Comando adicionado a lista com sucesso ✅_*`)
} else {
AB = novidades[nmr].add.map(i => i.cmd).indexOf(q.toLowerCase())
if(AB < 0) return reply("Comando não encontrado")
novidades[nmr].add.splice(AB, 1)
saveJSON(novidades, "./database/data/novidades.json")
reply(`*_Comando removido da lista com sucesso ✔️_*`)
}
break

case 'novidades':
case 'novo':
reagir(from, "✅")
reply(`
✅ *COMANDOS ADICIONADOS:*

${novidades[0].add.length > 0 ? novidades[0].add.map(a => `• ${prefix+a.cmd} ${a.desc.length > 0 ? `_(${a.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
⚠️ *COMANDOS ALTERADOS:*

${novidades[1].add.length > 0 ? novidades[1].add.map(b => `• ${prefix+b.cmd} ${b.desc.length > 0 ? `_(${b.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
🗑️ *COMANDOS REMOVIDOS:*

${novidades[2].add.length > 0 ? novidades[2].add.map(c => `• ${prefix+c.cmd} ${c.desc.length > 0 ? `_(${c.desc})_` : ``}`).join("\n") : "🚫 nenhum 🚫"}

---------------------------------------------------------
💬 *NOSSO CHAT:* ${prefix}blackgp
❓ *Alguma sugestão ? Use o comando:* ${prefix}sugestão
💾 *Algum bug ? relate à nossa equipe no comando:* ${prefix}bug
`)
break

case 'getcase': case 'puxarcase': case 'gc': {
if(!isOwner) return reply(enviar.msg.donosmt)
reply("🔎 🄱🅄🅂🄲🄰🄽🄳🄾 🄲🄰🅂🄴 🔍")
try {
await sleep(500)
blackmd.sendMessage(from, {text: `${getCase(q.toLowerCase())}`})
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
await sleep(500)
reply('*[ ❗ ] Comando Não Encontrado ❌*')
}
}
break

case 'getcase2': case 'puxarcase2': case 'gc2': {
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q.includes('/')) return reply(`Separe a case e o número do usuário com uma barra, ex:
${prefix+command} menu/${randomUser.split("@")[0]}`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [a1, a2] = barra.split("/")
usu = identArroba(a2)
wppuser(usu.split("@")[0])
try {
a3 = getCase(a1.toLowerCase())
mention(`Enviando case no PV do @${usu.split('@')[0]}  🤭`)
await sleep(500)
sendMess(usu, `🤭 ${tempo} ${getname(usu)}, ${pushname} te enviou a case \"${a1.toLowerCase()}\" 🌟`)
await sleep(1000)
sendMess(usu, a3)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
await sleep(500)
reply('*[ ❗ ] Comando Não Encontrado ❌*')
}
}
break

case 'getlinha':
if(!isOwner) return reply(enviar.msg.donosmt)
const arquivo = fs.readFileSync("index.js", "utf-8")
const localCase = arquivo.indexOf(`case '${q}'`)
if(localCase === -1) return reply('Comando não encontrado.')
reply(`O comando '${q}' está na linha: ` + arquivo.substr(0, localCase).split("\n").length)
break

case 'enquete'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q.includes('/') || !q.includes('|')) return reply(`Olha só como faz ${pushname}

${prefix+command} jherffeson o mais brabo ?|sim/não/tlvz`)
luck1 = q.split('|')[0]
luck2 = q.split('|')[1]
math1 = `${luck2} `
math2 = []
for(i = 0; i < math1.length; i++) {
math2.push({sla: math1.split(math1.slice(i+1))[0].slice(i)})
}
math3 = 1
for(i = 0; i < math2.length; i++) {
if(math2[i].sla.includes('/')) {
math3 += 1
}
}
if(math3 < 2) {
reply(`Defina ao mínimo duas alternativas de respostas...`)
} else {
math4 = []
for(i = 0; i < math3; i++) {
math4.push(luck2.split('/')[i])
}
sendAsPoll(from, luck1, math4)
}
break

case 'verificado-global':
case 'globalv':
case 'selo':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isVerificado) {
obrigadoEXT.verificado = true
setObg(obrigadoEXT)
reply(`🔰 verificado global ativado com sucesso ✅`)
} else if(isVerificado) {
obrigadoEXT.verificado = false
setObg(obrigadoEXT)
reply(`➿ verificado global desativado com sucesso ✔️`)
}
break

case "botoes":
if(!isOwner) return reply(enviar.msg.donosmt);
if(botoes) {
botoes = false
obrigadoEXT.botoes = false
setObg(obrigadoEXT)
reply("✖️ Os botões foram desativados... Sábia atitude ➿");
} else if(!botoes) {
botoes = true
obrigadoEXT.botoes = true
setObg(obrigadoEXT)
reply(`✔️ Os botões foram ativados, o que eu acho extremamente desnecessário... Recomendo desativar 〰️`)
}
break;

case 'audio-menu': 
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isAudioMenu) {
obrigadoEXT.menu_audio = true
setObg(obrigadoEXT)
reply(`✔️ O áudio menu foi ativado com sucesso 〰️`)
} else if(isAudioMenu) {
obrigadoEXT.menu_audio = false
setObg(obrigadoEXT)
reply(`✖️ O áudio menu foi desativado com sucesso ➿`)
}
break

case 'console':   
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isConsole) {
obrigadoEXT.consoleoff = true
setObg(obrigadoEXT)
reply(`✔️ O console foi ativado... Todas as ações do bot serão mostradas lá 〰️`) 
} else if(isConsole) {
obrigadoEXT.consoleoff = false
setObg(obrigadoEXT)
reply(`✖️ O console foi desativado... As ações do bot não serão mais vistas lá ➿`)
}
break

case 'menu': case 'm':
setTimeout(() => {reagir(from, react2)}, 300)
botaoblk = {
  type: `list`,
  title: `〘  𝙼𝚘𝚜𝚝𝚛𝚊𝚛 𝙻𝚒𝚜𝚝𝚊 〙`,
  rowId: [
    {
      title: "『 B̶A̶R̶B̶A̶ B̶R̶A̶N̶C̶A̶ 』",
      options: [
        {title: "✧͜͡҉𝙄𝙉𝙁𝙊-𝘿𝙊𝙉𝙊 👑", command: `${prefix}infodono`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}
      ]
    },
    {
      title: "『 𝙳𝙸𝚅𝙴𝚁𝚂𝙾𝚂 𝙼𝙴𝙽𝚄𝚂 』",
      options: [
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 💎", command: `${prefix}comandos`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝘼𝘿𝙈🎗️", command: `${prefix}menuadm`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙕𝙊𝙀𝙄𝙍𝘼 🤪", command: `${prefix}menuzoeira`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙏𝙄𝙉𝘿𝙀𝙍 ❤️‍🔥", command: `${prefix}menutinder`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙂𝘼𝙈𝙀𝙎 🎮", command: `${prefix}menujogos`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        //{title: "✧͜͡҉𝙈𝙀𝙉𝙐 -𝘽𝘼𝙍𝘽𝘼-𝘾𝙄𝙏𝙔 🏦", command: `${prefix}menubc`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙀𝙁𝙀𝙄𝙏𝙊𝙎 🧩", command: `${prefix}menuefeitos`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙈𝙊𝘿𝙎 🧸", command: `${prefix}menumods`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎 💝", command: `${prefix}menufigu`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙀𝙈𝙊𝙅𝙄 😃", command: `${prefix}menuemoji`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 💿", command: `${prefix}menudownloads`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙇𝙊𝙂𝙊𝙎 📜", command: `${prefix}menulogos`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝙑𝙄𝙋 🤑", command: `${prefix}menuvip`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        //{title: "✧͜͡҉𝙈𝙀𝙉𝙐+18 🔞", command: `${prefix}menu+18`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙉𝙐-𝘿𝙊𝙉𝙊 🔱", command: `${prefix}menudono`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}
      ]
    },
    {
      title: "『 𝙲𝙷𝙴𝙲𝙺𝚂 𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙾𝙴𝚂 』",
      options: [
        {title: "✧͜͡҉𝘾𝙃𝙀𝘾𝙆-𝙋𝙄𝙉𝙂 ⚡", command: `${prefix}ping`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝘽𝘼𝙍𝘽𝘼-𝙄𝙉𝙁𝙊 💎", command: `${prefix}barbainfo`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙈𝙀𝙐-𝙋𝙀𝙍𝙁𝙄𝙇 😼", command: `${prefix}perfil`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝘼𝙇𝙐𝙂𝘼𝙍-𝘼𝙆𝙄𝙍𝘼 🛒", command: `${prefix}alugar`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        //{title: "✧͜͡҉𝘾𝙃𝘼𝙏-𝙊𝙁𝙄𝘾𝙄𝘼𝙇 💬", command: `${prefix}barbagp`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝘼𝙑𝘼𝙇𝙄𝘼𝙍-𝘼𝙆𝙄𝙍𝘼 ✅", command: `${prefix}avalie`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙎𝙐𝙂𝙀𝙎𝙏𝘼𝙊💡", command: `${prefix}sugestao`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "✧͜͡҉𝙍𝙀𝙋𝙊𝙍𝙏𝘼𝙍-𝙐𝙈-𝘽𝙐𝙂 💾", command: `${prefix}bug`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        //{title: "⏤͟͟͞͞ ꦿ𝙎𝙀-𝘼𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝙀-BARBA 👻", command: `${prefix}infobot`, body: `𝑨𝒖𝒅𝒊𝒐 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐...`}
      ]
    }
  ]
}
txt = `⏤͟͟͞͞ ꦿ𝙉𝙄𝘾𝙆: ${pushname}
⏤͟͟͞͞ ꦿ𝘿𝘼𝙏𝘼: ${date}
⏤͟͟͞͞ ꦿ𝙃𝙊𝙍𝘼: ${hora120}
⏤͟͟͞͞ ꦿ𝙑𝙄𝙋: ${isVip ? 'Sim ✅' : 'Não ❌'}`, `${NomeDoBot}`
sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot}, blackmd, sender, [botaoblk], info)
break

case 'comandos':
setTimeout(() => {reagir(from, `😃`)}, 300)
if(isAudioMenu) {
blackmd.sendMessage(from, {audio: {url:'./database/audios/audiomenu.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: seloctt})
}
const { menuprime } = require("./dono/menus/comandos.js")
menutxt = menuprime(pushname, date, hora120, isVip, pushnames, prefix)
sendUrlDoc(from, menutxt, `application/vnd.android.package-archive`, `Barba Bot`, 50000000, NomeDoBot, ``, logoslink.menu, barbasite)
break

case 'logos':
case 'menulogo':
case 'menulogos':
setTimeout(() => {reagir(from, "📜")}, 300)
const { menulogos } = require("./dono/menus/menulogos.js")
mlogos = menulogos(sender, prefix)
sendMenu(mlogos)
break

case 'menufigurinhas':
case 'menufigu':
case 'menufig':
setTimeout(() => {reagir(from, "💝")}, 300)
const { menufig } = require("./dono/menus/menufig.js")
menuf = menufig(sender, prefix)
sendMenu(menuf)
break

case 'menuemoji':
setTimeout(() => {reagir(from, "😃")}, 300)
const { menuemoji } = require("./dono/menus/menuemoji.js")
MEJ = menuemoji(sender, prefix)
sendMenu(MEJ)
break

/*case 'menu+18': case '+18': case 'menunsfw':
if(isGroup && !isNsfw) return reply(`*Este comando só pode ser executado com o modo+18 ativo...*
*Para ativa-lo, digite* ${prefix}modo+18`)
if(!isGroup && !isVip) return reply("Este recurso no PV só está liberado para usuários VIP")
setTimeout(() => {reagir(from, "🔞")}, 300)
const { menunsfw } = require("./dono/menus/menunsfw.js")
m18 = menunsfw(sender, prefix)
sendMenu(m18)
break*/

case 'menudownloads':
case 'menudown':
case 'downloads':
case 'musica':
case 'musicas':
case 'tocarmusica':
setTimeout(() => {reagir(from, "💿")}, 300)
const { menudown } = require("./dono/menus/menudown.js")
sendMenu(menudown(sender, prefix))
break

case 'menujogos':
case 'jogos':
case 'menugames':
case 'games':
setTimeout(() => {reagir(from, "🎮")}, 300)
const { menujogos } = require("./dono/menus/menujogos.js")
menugame = menujogos(sender, prefix)
sendMenu(menugame)
break

case 'menutinder':
setTimeout(() => {reagir(from, "❤️‍🔥")}, 300)
const { menutinder } = require("./dono/menus/menutinder.js")
sendMenu(menutinder(sender, prefix))
break

case 'menuadm':
case 'menuadms':
case 'adm':
setTimeout(() => {reagir(from, "🎗️")}, 300)
//if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) { reply(enviar.msg.adm)
return blackmd.sendMessage(from, {audio: {url:'./database/audios/apenasadm.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
const { menuadm } = require("./dono/menus/menuadm.js")
sendMenu(menuadm(sender, prefix))
break

case 'menudono':
case 'donomenu':
if(!isOwner) { reply(enviar.msg.donosmt)
return blackmd.sendMessage(from, {audio: {url:'./database/audios/cmddono.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "🔱")}, 300)
const { menudono } = require("./dono/menus/menudono.js")
txt = menudono(sender, prefix)
sendMenu(txt)
break

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'menuefeitos':
reagir(from, "🧩")
const { menuefeitos } = require("./dono/menus/menuefeitos.js")
txt = menuefeitos(sender, prefix)
blackmd.sendMessage(from, {image: {url: logoslink.logo}, caption: txt, mentions: [sender]})
break

case 'alteradores':
case 'mods':
case 'mod':
case 'menumods':
reagir(from, "🧸")
const { menumods } = require("./dono/menus/menumods.js")
txt = menumods(sender, prefix)
sendMenu(txt)
break

case 'menuzoeira':
case 'zoeira':
case 'brincadeiras':
setTimeout(() => {reagir(from, "🤪")}, 300)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
const { menuzoeira } = require("./dono/menus/menuzoeira.js")
MZ = menuzoeira(sender, prefix)
sendMenu(MZ)
break 

case 'menuvip':
case 'menupremium':
case 'menuprem':
case 'vip':
setTimeout(() => {reagir(from, "🤑")}, 300)
const { menuvip } = require("./dono/menus/menuvip.js")
mvip = menuvip(sender, prefix)
sendMenu(mvip)
break

case 'calendario':
case 'dados':
setTimeout(() => {reagir(from, "📅")}, 300)
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
hora16 = moment.tz('America/Sao_Paulo').format('HH:mm')
date16 = moment.tz('America/Sao_Paulo').format('DD/MM')
totalcmd = JSON.parse(fs.readFileSync("./database/data/totalcmd.json"))[0].totalcmd
day = `
${tempo_emoji} *${tempo.toUpperCase()}*
👤 ${pushname}

👥 *GRUPO:* ${isGroup ? groupName : "privado"}
📆 *DATA & HORA ↴*
${iniMai(semanal())}, ${realtime()}
🎲 *TOTAL-CMD:* ${totalcmd} comandos
🤖 *BOT:* ${NomeDoBot}
👑 *DONO:* ${NickDono}

📠 _Operando em ${ingfoo.length} grupos_
`
if(JSON.stringify(aluguel).includes(from)) {
AB = aluguel.map(i => i.id).indexOf(from)
hmm = aluguel[AB].tempo
day += `🔋 *Bateria restante para uso ↴*
-> ${barrinha(aluguel[AB].tempo, aluguel[AB].totalRent)} ${aluguel[AB].cliente == sender || isOwner ? `\n»⟩ ${sendTimeHours(hmm)} até o fim do contrato ⟨«` : ``}
`
}
reply(`${day}`)
break

case 'stickerid'://vitukjk
if(isQuotedSticker) {
const stickerId = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex').toUpperCase();
reply(`${stickerId}`);
} else {
reply('Marque uma figurinha para mostrar o ID.');
}
break

/*case 'teste23': {
if(!isGroup) return
if(!isGroupAdmins) return
var carre = [
" ʟᴏᴀᴅɪɴɢ\n《 █▒▒▒▒▒▒▒▒▒》10%",
" ʟᴏᴀᴅɪɴɢ\n《 ██▒▒▒▒▒▒▒▒》20%",
" ʟᴏᴀᴅɪɴɢ\n《 ███▒▒▒▒▒▒▒》30%",
" ʟᴏᴀᴅɪɴɢ\n《 ████▒▒▒▒▒▒》40%",
" ʟᴏᴀᴅɪɴɢ\n《 █████▒▒▒▒▒》50%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████▒▒▒▒》60%",
" ʟᴏᴀᴅɪɴɢ\n《 ███████▒▒▒》70%",
" ʟᴏᴀᴅɪɴɢ\n《 ████████▒▒》80%",
" ʟᴏᴀᴅɪɴɢ\n《 █████████▒》90%",
" ʟᴏᴀᴅɪɴɢ\n《 ██████████》100%",
"~_*© jherffeson*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await blackmd.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//primeira mensagem

for (let i = 0; i < carre.length; i++) {
await blackmd.sendMessage(from, {text: carre[i], edit: key })
}
}
break*/

case 'nasa':
if(!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
try {
data = await fetchJson(`${barbasite}/api/nasaphoto?data=${q}&apikey=`+API_KEY_BARBA)
resultExp = await fetchJson(`${barbasite}/api/info/translate?texto=${data.nasa.explanation}&ling=pt&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: {url: data.nasa.hdurl}, caption: resultExp.result}, {quoted: info})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro");
}
break;

case 'traduzir':
if(!isGroup) return
if(args.length < 2) return reply(`Você precisa selecionar o idioma primeiro e após ele o texto, ex:
${prefix+command} pt i love you`)
txt1 = args[0]
txt2 = q.split(args[0])[1]
try {
ABC = await fetchJson(`${barbasite}/api/info/translate?texto=${encodeURI(txt2)}&ling=${encodeURI(txt1)}&apikey=`+API_KEY_BARBA)
reply(`${ABC.result}`)
} catch {
  reply(`Erro 404`)
}
break

case 'apibarba':
reagir(from, "✅")
if(!isOwner) return reply(`Não`)
api = await fetchJson(`${barbasite}/api/keyerrada?apikey=`+API_KEY_BARBA)
api2 = `${tempo} ${pushname}

✔️ Você Tem『 ${api.limite_de_request} 』Downloads Disponíveis...`
reply(api2)
break

case 'apikeybarba':
reagir(from, "🔑")
if(!isOwner) return reply(`Não`)
txtapi = `${tempo} ${NickDono}

Sua Key é『 ${API_KEY_BARBA} 』
⏤͟͟͞͞ ꦿ${NomeDoBot}`
if(isGroup) reply(`Olha o PV ${pushname}`)
await sleep(1000)
blackmd.sendMessage(sender, {text: txtapi}, {quoted: seloctt})
break

case 'barbagp': case 'barbagrupo': case 'barbagroup': case 'link': case 'chatoficial':
reagir(from, `✅`)
try {
nome = (await blackmd.groupMetadata(obrigadoEXT.idchatofc)).subject
link = await blackmd.groupInviteCode(obrigadoEXT.idchatofc)
try { ppUrl = await blackmd.profilePictureUrl(obrigadoEXT.idchatofc, 'image')
} catch { ppUrl = semfoto }
if(isGroup) {
linkgp = `*Link do nosso grupo:* ✅

https://chat.whatsapp.com/I3ONX54nkeE1gtm2gTCZz8`+link
sendUrlText(from, linkgp, nome, `Chat OFC do Barba Branca`, ppUrl, `https://chat.whatsapp.com/I3ONX54nkeE1gtm2gTCZz8`+link, seloctt)
} else {
sendUrlDoc(from, `*Link do nosso Chat...* ✅

🔗 _Clique na imagem para entrar_`, `application/pdf`,
`${tempo_emoji}⃤ ${tempo.toUpperCase()}`,
10000, nome, '', ppUrl, `https://chat.whatsapp.com/I3ONX54nkeE1gtm2gTCZz8`+link, seloctt)
}
} catch { reply("Erro") }
break

case 'barbasite': case 'barbalink':
reagir(from, "🌐")
sendUrlText(from,
`*Site oficial do barba:* ✅\n\n`+barbasite,
`🔎 ${NomeDoBot} 🔍`,
`Um site para Dev's e programadores de bot`,
logoslink.menu,
barbasite,
seloctt)
break

case 'jrcsite': case 'jrclink':
reagir(from, "🌐")
sendUrlText(from,
`*Site oficial do barba:* ✅\n\n`+jrcsite,
`🔎 ${NomeDoBot} 🔍`,
`Um site para Dev's e programadores de bot`,
logoslink.menu,
jrcsite,
seloctt)
break


case 'infobarba':
reagir(from, "🥰")
ib = `${tempo_emoji} _${tempo} ${pushname}, caiu de paraquedas e não sabe como funciona tudo por aqui? Chega mais..._

🤖 _Barba Branca é um bot altamente sofisticado, capaz de operar de forma remota e automática em seu grupo, com altas funções de administração e diversão. Nossa equipe se empenha diariamente para manter o bot online com os melhores sistemas que você pode encontrar._

💡 _Quanto ao uso dos comandos, o prefixo usado é ( ${prefix} ), basta digitar o mesmo na frente do comando para que esse seja executado... Claro que vc pode acabar digitando errado ou pode ser que o comando não exista. Sendo assim, olhe no ${prefix}menu e não exite em procurar o mesmo nos diversos menus que estão organizados lá._

_-> Modo de uso do prefixo:_
❌ menu${prefix}
❌ ${prefix} menu
✅ ${prefix}menu

💬 *NOSSO CHAT:* ${prefix}barbagp
🛒 *Se desejas alugar o bot para seu grupo digite:* ${prefix}alugar
🤔 *Dúvidas? Use:* ${prefix}suporte
❓ *Alguma sugestão ? Use o comando:* ${prefix}sugestão
💾 *Algum bug ? relate à nossa equipe no comando:* ${prefix}bug`
reply(ib)
break

case 'aluguel':
case 'alugueis':
case 'alugar':
case 'alugarbot':
case 'alugarbarba': {
reagir(from, "🛒")
moneybot = `*_»⟩Tabela de preços para alugar o bot ⟨«_*

1️⃣⧽ R$ 5.00 (15 dias)
2️⃣⧽ R$ 10.00 (30 dias)
3️⃣⧽ R$ 18.00 (60 dias)
4️⃣⧽ R$ 27.00 (90 dias)
5️⃣⧽ R$ 35.00 (120 dias)

❪🍧ฺ࣭࣪͘ꕸ▸ _digite *${prefix}buygp* ou *${prefix}buykeygp* para alugar e *${prefix}inforent* caso queira obter mais informações_`
var download = [
`ʟᴏᴀᴅɪɴɢ〘▒▒▒▒▒▒▒▒▒▒〙0%`,
`ʟᴏᴀᴅɪɴɢ〘█▒▒▒▒▒▒▒▒▒〙10%`,
`ʟᴏᴀᴅɪɴɢ〘███▒▒▒▒▒▒▒〙35%`,
`ʟᴏᴀᴅɪɴɢ〘█████▒▒▒▒▒〙51%`,
`ʟᴏᴀᴅɪɴɢ〘███████▒▒▒〙62%`,
`ʟᴏᴀᴅɪɴɢ〘████████▒▒〙80%`,
`ʟᴏᴀᴅɪɴɢ〘██████████〙100%`,
`𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...`
]
let { key } = await blackmd.sendMessage(from, {text: tempo+" "+pushname}, {quoted: info})
await sleep(2000)
for(let i = 0; i < download.length; i++) {
await blackmd.sendMessage(from, {text: download[i], edit: key }, {quoted: info})
}
sendUrlText(from, moneybot, `👑⟩ ${NickDono}`, `🤖⟩ ${NomeDoBot}`, logoslink.menu, `https://wa.me/${nmrdn.split('@')[0]}`, seloctt)
}
break

case 'tabelah':
reagir(from, "🛍️")
try {
jherffeson = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${jherffeson}`);
ppimg = shortpc.data
} catch(e) {
ppimg = semfoto
}
txt = `ㅤㅤㅤㅤㅤㅤ *🛒〘 LOJA 〙🛒* 
❪🛍️ฺ࣭࣪͘ꕸ▸ *ALUGUÉIS*
1️⃣⧽ R$ 5.00 (15 dias)
2️⃣⧽ R$ 10.00 (1 mês)
3️⃣⧽ R$ 18.00 (2 meses)
4️⃣⧽ R$ 27.00 (3 meses)
5️⃣⧽ R$ 35.00 (4 meses)
_Use *${prefix}buykeygp*_

❪💰ฺ࣭࣪͘ꕸ▸ *VIP*
_Cada dia custa R$ 0.16 (Recarga mínima de R$ 5.00)_
1️⃣ R$ 2.52 (15 dias)
2️⃣ R$ 5.04 (1 mês)
_Use *${prefix}buyvip*_

❪🔖ฺ࣭࣪͘ꕸ▸ *Card XP*
_Cada dia é multiplicado 1 a mais (Se for 1 dia, multiplica por 2... Se for 3 dias, multiplica por 4, etc)_
*» 2x «*
1️⃣ R$ 5.00 (2x por 24h)
2️⃣ R$ 7.50 (2x por 48h)
3️⃣ R$ 10.00 (2x por 3d)
4️⃣ R$ 20.00 (2x por 7d)
*» 3x «*
5️⃣ R$ 9.00 (3x por 24h)
6️⃣ R$ 13.50 (3x por 48h)
7️⃣ R$ 18.00 (3x por 3d)
8️⃣ R$ 32.00 (3x por 7d)
_Use *${prefix}buycard*_`
sendUrlText(from, txt, NomeDoBot, ``, ppimg, barbasite, seloctt)
break

case 'infoaluguel':
setTimeout(() => {reagir(from, "🤑")}, 300)
reply(`*Olá caro viajante, está perdido de como alugar o Barba Branca ?? Ett vou lhe dar uma rápida dica.* 🧐
  
*Como visto na tabela acima, tem os preços de aluguel mensal... O preço diminui dependendo da quantidade de meses; porém o preço é unitário por grupo.* 😃

*Por exemplo, se alugar dois grupos por 1 mês, vai ser 10+10 = 20$. Ou se alugar dois grupos por dois meses, será 18+18 = 36$.* 💵

*Temos tbm aluguéis adicionais... Como visto na tabela*
*Um comando simples, como o* ${prefix}barbagp, *ou um if de resposta, como aqueles que o bot responde sem ser comando, com áudio ou texto.* 🤖

*Caso você queira alugar o bot ou queira mais informações, chame meu dono no PV* 👑`)
break

case 'inforent'://by jherffeson
reply(`${tempo} ${pushname}, perdido de como funciona o novo sistema de moedas virtuais? Chega mais 🤭

*> ${prefix}recarga*
No comando ${prefix}recarga você poderá escolher o valor de moedas a serem adicionadas em sua conta... Tais moedas poderão ser usadas na ${prefix}loja

*> ${prefix}loja*
A loja mostrará os valores de aluguéis e outros disponíveis... Para obter os mesmos será necessário o uso das moedas virtuais em sua conta.

*> ${prefix}buygp*
Caso se veja interessado em alugar o bot para o seu grupo, use o comando ${prefix}buygp com o link do grupo logo depois... O bot entrará no grupo logo em seguida.

*> ${prefix}transferirgp*
Caso você queira transferir o bot de um grupo para o outro, use esse comando com o novo link do grupo.

*> ${prefix}buykeygp*
Funciona quase da mesma forma que o buygp, única diferença que aqui não é necessário o link do grupo... Útil para caso vc queira apenas renovar o contrato de aluguel.

*> ${prefix}buycort*
Este comando lhe dará direito a 24h grátis em seu grupo... Basta colocar o link do grupo após o comando (lembrando que este comando é válido apenas 1 vez)

*> ${prefix}buyvip*
Na loja tbm estará disponível os preços do VIP, basta escolher o número referente a quantidade de dias que as suas moedas serão convertidas em VIP

*> ${prefix}reembolsar*
Use esse comando para ressarcir o valor gasto na compra da Key

*> ${prefix}minhaskey*
Aqui você poderá ver quais keys vc comprou`)
break

case 'recarga': case 'recarregar': {//by jherffeson
if(!JSON.stringify(moedas).includes("jherffeson")) {
  moedas.push({id: "jherffeson", chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(moedas).includes(sender)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: sender, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM')})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
valores = [0.01, 10, 15, 20, 25, 30, 35, 40, 45, 50]
if(!q || !Number(args[0]) || Number(args[0]) < 1 ||  Number(args[0]) > valores.length) { reply(tempo + " " + pushname + ", vejo que você não escolheu o valor da recarga corretamente... Irei te mandar a tabela abaixo ↴")
await sleep(500)
return reply(`*_»⟩Tabela de recargas disponíveis ⟨«_*

❪🍧ฺ࣭࣪͘ꕸ▸ _Escolha o número correspondente ao valor da recarga que você quer *(ex: ${prefix+command} 1)*... Após efetuado o pagamento, vc receberá em sua conta do Barba Branca o valor das moedas correspondente a recarga._

1️⃣⧽ R$ 05.00 *(+bônus R$ 0.50)*
2️⃣⧽ R$ 10.00 *(+bônus R$ 1.00)*
3️⃣⧽ R$ 15.00 *(+bônus R$ 1.50)*
4️⃣⧽ R$ 20.00 *(+bônus R$ 2.00)*
5️⃣⧽ R$ 25.00 *(+bônus R$ 2.50)*
6️⃣⧽ R$ 30.00 *(+bônus R$ 3.00)*
7️⃣⧽ R$ 35.00 *(+bônus R$ 3.50)*
8️⃣⧽ R$ 40.00 *(+bônus R$ 4.00)*
9️⃣⧽ R$ 45.00 *(+bônus R$ 4.50)*
🔟⧽ R$ 50.00 *(+bônus R$ 5.00)*

𖥨ํ∘̥⃟⸽⃟💌৴▸ _Lembrando que essa recarga não está vinculada a compra de nenhum produto no bot, com exceção das moedas... Tais moedas após compradas poderão ser usadas para afins como aluguéis de grupos, VIP e outros. Para mais info, ver *${prefix}inforent*_`)
}
if(q.includes('.')) return reply("Não pode números decimais...")
nmr = valores[Number(args[0]) - 1]
var pagament = new payment(MercadoPagoKey);//key do Mercado pago
console.log("Pagamento\n\n\n"+pagament);
try {
let inf = await pagament.create_payment(nmr) //Preco a ser cobrado esta entre os (), no caso aqui e 20 reais 
console.log("INfo\n\n\n"+inf)
// essa parte envia o qr code e o codigo copia e cola
reply(isGroup ? 'Por questões de segurança, irei te enviar os dados no PV...' : 'Gerando pix...')
await sleep(1000)
blackmd.sendMessage(sender, {image: Buffer.from(inf.qr_code, "base64"), caption: `QR code de pagamento acima... Caso queira apenas o código, segue o pix copia e cola abaixo ↴`})
await sleep(3000)
blackmd.sendMessage(sender, {text: `${inf.copy_paste}`})
await sleep(2000)
blackmd.sendMessage(sender, {text: `Lembrando que você tem 5 minutos para efetuar o pagamento... Caso exceda o tempo, há possibilidade do sistema não contabilizar as moedas.

Qualquer dúvida, chame meu dono...`})

let check = await pagament.check_payment();

while (check.status == 'pending') { check = await pagament.check_payment() }
if(check.status == "approved") {
disk = nmr / 10
disk += nmr
AB = moedas.map(i => i.id).indexOf(sender)
moedas[AB].saldo += disk
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
mention(`💠 Parabéns @${sender.split('@')[0]}, seu débito foi aprovado no valor de *R$ ${Number(nmr).toFixed(2)}* debitado em sua conta virtual do Barba System, somado ao bônus de *R$ ${Number(nmr/10).toFixed(2)}* proveniente da recarga... Para mais info sobre o que fazer com suas moedas, acesse *${prefix}inforent*`)
await sleep(2000)
comprovante = `
┏◤ ━━━━━━━━━━───━━━━━━━━━━━ ◢┓
[⚙️] *COMPROVANTE DE PAGAMENTO* [⚙️]
╟┓
║┢ ❪📖ฺ࣭࣪͘ꕸ▸ *Nome:* ${pushname}
║┢ ❪📱ฺ࣭࣪͘ꕸ▸ *Número:* @${sender.split('@')[0]}
║╽
║┢ ❪💸ฺ࣭࣪͘ꕸ▸ *Valor:* R$ ${Number(nmr).toFixed(2)}
║┢ ❪💰ฺ࣭࣪͘ꕸ▸ *Bônus:* R$ ${Number(nmr/10).toFixed(2)}
║┢ ❪🪙ฺ࣭࣪͘ꕸ▸ *Total:* R$ ${Number(Number(nmr) + Number(nmr/10)).toFixed(2)}
║╽
║┢ 📅⃤ *Data:* ${moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')}
║┢ ⏰⃤ *Hora:* ${moment.tz('America/Sao_Paulo').format('HH:mm:ss')}
║╽
║╽ㅤㅤㅤㅤ💠 Barba System 💠
╙┷━━━━━━━━━━━───━━━━━━━━━━━┛
`
blackmd.sendMessage(obrigadoEXT.idprivategp, {text: comprovante, mentions: [sender, nmrdn]})
await sleep(1000)
return blackmd.sendMessage(sender, {text: comprovante, mentions: [sender]})
}
reply("Pagamento expirado ヅ")
} catch(e) {
console.log(e)
reply("Sistema parece instável... Pfvr, volte mais tarde ✋🏽😳🤚🏽")
}
}
break

case 'me'://by jherffeson
if(!JSON.stringify(moedas).includes("jherffeson")) {
  moedas.push({id: "jherffeson", chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(moedas).includes(sender)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: sender, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM')})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
try {
ppimg = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = semfoto
}
AB = moedas.map(i => i.id).indexOf(sender)
if(Number(moedas[AB].mm) !== Number(sendHours('MM'))) {
  moedas[AB].cortesia += 1
  moedas[AB].mm = sendHours('MM')
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
i = moedas[AB]
txt = `📖 *NOME:* ${pushname}
💸 *SALDO:* R$ ${Number(i.saldo).toFixed(2)}
📱 *WHATSAPP:* wa.me/${i.id.split('@')[0]}
🆔 *ID:* ${i.UID}
💳 *CORTESIAS:* ${i.cortesia}

_Registrado em ${i.rg}_`
blackmd.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: NomeDoBot,
    body: ``,
    thumbnail: await getBuffer(ppimg),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: `${barbasite}`
  }
}}, {quoted: seloctt})
break

case 'you'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque o usuário que vc quer puxar o saldo")
if(!isJsonIncludes(moedas, marc_tds)) return reply(enviar.msg.notusu)
try {
ppimg = await blackmd.profilePictureUrl(`${marc_tds.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = semfoto
}
AB = moedas.map(i => i.id).indexOf(marc_tds)
i = moedas[AB]
txt = `📖 *NOME:* ${getname(i.id)}
💸 *SALDO:* R$ ${Number(i.saldo).toFixed(2)}
📱 *WHATSAPP:* wa.me/${i.id.split('@')[0]}
🆔 *ID:* ${i.UID}
💳 *CORTESIAS:* ${i.cortesia}

_Registrado em ${i.rg}_`
blackmd.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: NomeDoBot,
    body: ``,
    thumbnail: await getBuffer(ppimg),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: `${barbasite}`
  }
}}, {quoted: seloctt})
break

case 'minhaskey'://by jherffeson
txt = `*_SUAS KEYs_*`
nmr = 0
BC = moedas.map(i => i.id).indexOf("jherffeson")
for(i of moedas[BC].chaves) {
  if(i.cliente == sender) {
    txt += `\n• ${i.key}`
    nmr += 1
  }
}
if(nmr <= 0) return reply("Você não possui keys")
reply(isGroup ? "Te enviei PV" : "Enviando")
sendMess(sender, txt)
break

case 'keys'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
txt = `*_KEYs_*`
caixa = []
BC = moedas.map(i => i.id).indexOf("jherffeson")
for(i of moedas[BC].chaves) {
  nmr = i.dias
  txt += `\n\n${"- ".repeat(40)}
• Key: ${i.key}
• Cliente: @${i.cliente.split('@')[0]}
• Validade: ${nmr > 0 ? sendTimeHours(nmr) : `∞ INFINITO`}`
  caixa.push(i.cliente)
}
if(caixa <= 0) return reply("Você não possui keys")
reply(isGroup ? "Te enviei PV" : "Enviando")
blackmd.sendMessage(sender, {text: txt, mentions: caixa})
break

case 'addsaldo': {//by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será adc. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
jherffeson = nmr.toLowerCase() == "me" ? sender : identArroba(nmr)
wppuser(jherffeson)
if(!JSON.stringify(moedas).includes(jherffeson)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: jherffeson, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM'), chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
AB = moedas.map(i => i.id).indexOf(jherffeson)
moedas[AB].saldo += Number(quant)
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
mention(`💠 R$ ${Number(quant).toFixed(2)} adc ao saldo do usuário @${jherffeson.split('@')[0]}`)
}
break

case 'rmsaldo': {//by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será removido. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
jherffeson = nmr.toLowerCase() == "me" ? sender : identArroba(nmr)
wppuser(jherffeson)
if(!JSON.stringify(moedas).includes(jherffeson)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: jherffeson, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM'), chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
AB = moedas.map(i => i.id).indexOf(jherffeson)
moedas[AB].saldo -= Number(quant)
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
mention(`💠 R$ ${Number(quant).toFixed(2)} rmvd do saldo do usuário @${jherffeson.split('@')[0]}`)
}
break

case 'transferirsaldo': case 'transferir-saldo': {//by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
var [nmr, quant] = q.split('/')
if(!nmr || !quant) return reply(`Você vai colocar o número da pessoa e após isso uma barra ( / ). Após a barra, coloque o saldo que será transferido. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30`)
if(!Number(quant)) return reply(quant+" não é número...")
if(Number(quant) < 0) return reply("O valor precisa ser maior que 0")
jherffeson = identArroba(nmr)
wppuser(jherffeson)
if(sender.includes(jherffeson)) return reply("Não pode transferir pra vc mesmo...")
if(!JSON.stringify(moedas).includes(sender)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: sender, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM'), chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(moedas).includes(jherffeson)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(jherffeson.slice(4, 10))
  moedas.push({id: jherffeson, saldo: 0, UID: multi, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM'), chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
AB = moedas.map(i => i.id).indexOf(sender)
if(Number(quant) > moedas[AB].saldo) return reply("Você não possui saldo para efetuar essa transferência")
BC = moedas.map(i => i.id).indexOf(jherffeson)
moedas[AB].saldo -= Number(quant)
saveJSON(moedas, "./base de funcionamento/aluguel/moedas.json")
moedas[BC].saldo += Number(quant)
saveJSON(moedas, "./base de funcionamento/aluguel/moedas.json")
mention(`💠 R$ ${Number(quant).toFixed(2)} transferido${Number(quant) === 1 ? "" : "s"} para o usuário @${jherffeson.split('@')[0]}`)
}
break

case 'buygp'://by jherffeson
if(!JSON.stringify(moedas).includes(sender) || !JSON.stringify(moedas).includes("jherffeson")) return reply(`Vc não possui saldo... Use o comando ${prefix}recarga para recarregar moedas a sua conta virtual do Barba System e assim utilizar desses comandos 😃`)
if(!q) return reply('Insira um link de convite do grupo ao lado do comando.')
if(!q.includes('chat.whatsapp.com/') || q.includes('|')) return reply('Ops, verifique o link que você inseriu...\nUse: ${prefix} link do grupo')
AB = moedas.map(i => i.id).indexOf(sender)
if(Number(moedas[AB].saldo) < 5) return reply(`Seu saldo está abaixo do mínimo permitido para usar este comando... Recomendo efetuar uma recarga de moedas através do comando ${prefix}recarga`)
link = q.split('app.com/')[1]
try {
blackmd.groupAcceptInvite(`${link}`)
await sleep(2000)
reply(`🤖 Entrando no grupo... Devo ressaltar que os comandos não funcionarão ao menos que vc compre uma chave de acesso através do comando *${prefix}buykeygp*`)
} catch(erro) {
if(String(erro).includes('resource-limit')) {
reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
} else if(String(erro).includes('not-authorized')) {
reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
} else return reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'buycort'://by jherffeson
if(!JSON.stringify(moedas).includes("jherffeson")) {
  moedas.push({id: "jherffeson", chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(moedas).includes(sender)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: sender, saldo: 0, UID: multi, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM')})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(grupos).includes("jherffeson")) {
  grupos.push({id: "jherffeson", gps: []})
  fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
}
if(!q) return reply(`KD o link do grupo pá eu liberar a cortesia?`)
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
AC = grupos.map(i => i.id).indexOf("jherffeson")
if(Number(moedas[AB].mm) !== Number(sendHours('MM'))) {
  moedas[AB].cortesia += 1
  moedas[AB].mm = sendHours('MM')
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
  if(grupos[AC].gps.length > 0) {
    grupos[AC].gps = []
    fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
  }
}
if(moedas[AB].cortesia <= 0) return reply(`Você não possui mais *CARD CORTESIA* neste mês para prosseguir com este comando...`)
if(!q.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
link = q.split('app.com/')[1]
try {
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
moedas[AB].cortesia -= 1
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
nmr = 24
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
idks = gerarkey(nmr)
moedas[BC].chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender})//tipo 2 = aluguel de grupo
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
blackmd.groupAcceptInvite(`${link}`)
reply(`💡 Te enviarei ${isGroup ? "no PV" : "abaixo"} a chave de acesso... Copie e cole a mesma no seu grupo para validar os dados e liberar os comandos ✋🏽😳🤚🏽`)
await sleep(1000)
sendMess(sender, idks)
} catch(erro) {
if(String(erro).includes('resource-limit')) {
reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
} else if(String(erro).includes('not-authorized')) {
reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
} else return reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'gerarkeycort'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
reagir(from, "😀")
BC = moedas.map(i => i.id).indexOf("jherffeson")
cort = 24
idks = gerarkey(cort)
moedas[BC].chaves.push({key: idks, tipo: 2, dias: 24, cliente: sender, valor: 0})//tipo 3 = cortesia
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Cortesia: 24h`)
break

case 'transferirgp'://by jherffeson
if(aluguel.length <= 0) return reply("Não há grupos registrados")
if(!JSON.stringify(aluguel).includes(sender)) return reply(`Não há grupos registrados em seu nome 😀`)
barra = q.replace(' |', '|').replace('| ', '|').replace(' | ', '|')
var [v1, v2] = barra.split('|')
if(!v1.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
caixa = []
for(a of aluguel) {
  if(a.cliente == sender) {
    caixa.push({id: a.id, nome: a.nome})
  }
}
if(caixa.length <= 0) return reply(`Não há grupos registrados em seu nome... Portanto, não é possível transferir este 🥰`)
if(Number(v2) < 1 || Number(v2) > caixa.length) {
  resp = `_Escolha após a barra ( | ) o número correspondente ao grupo que você quer *APAGAR* para transferir para um novo, ex: ${prefix+command} link|1_
_Grupos registrados em seu nome:_`
  for(i = 0; i < caixa.length; i++) {
    resp += `\n\n»${i+1}«
• *Grupo:* ${caixa[i].nome}`
  }
  return reply(resp)
}
try {
idgp = caixa[Number(v2) - 1].id
AB = aluguel.map(i => i.id).indexOf(idgp)
timerent = aluguel[AB].tempo
aluguel.splice(AB, 1)
fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
AC = grupos.map(i => i.id).indexOf(idgp)
grupos.splice(AC, 1)
fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
try {
await sleep(2000)
blackmd.groupLeave(idgp)
} catch { reagir(from, "😪") }
BC = moedas.map(i => i.id).indexOf("jherffeson")
link = v1.split('app.com/')[1]
idks = gerarkey(v2)
moedas[BC].chaves.push({key: idks, tipo: 1, dias: timerent, cliente: sender})//tipo 1 = aluguel de grupo
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
await sleep(2000)
blackmd.groupAcceptInvite(`${link}`)
reply(`Dados deletados do antigo grupo com sucesso... Estarei te enviando ${isGroup ? 'no PV' : 'abaixo'} a Key de acesso. Jogue a mesma no novo grupo para liberar o acesso ✅`)
await sleep(1000)
sendMess(sender, idks)
} catch(erro) {
if(String(erro).includes('resource-limit')) {
reply(`O grupo já está com o número máximo de membros... Não consigo entrar 🫠`)
} else if(String(erro).includes('not-authorized')) {
reply(`Não foi possível entrar no grupo pq algum admin me baniu... Pfvr, peça para o meu dono me adicionar (chame ${prefix}dono)`)
} else return reply(`Não foi possível entrar no grupo... Pfvr, chame meu dono para ele registrar os dados 🎲`)
}
break

case 'buykeygp'://by jherffeson
if(!JSON.stringify(moedas).includes(sender) || !JSON.stringify(moedas).includes("jherffeson")) return reply(`Vc não possui saldo... Use o comando ${prefix}recarga para recarregar moedas a sua conta virtual do Barba System e assim utilizar desses comandos 😃`)
valores = [5, 10, 18, 27, 35]
diasaluguel = [15, 30, 60, 90, 120]
if(!q || !Number(q) || Number(q) < 1 || Number(q) > valores.length) return reply(`Coloque após o comando o número referente a quantidade de dias de aluguel (veja ${prefix}loja), assim:
${prefix+command} 1`)
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
nmr = valores[Number(q) - 1]
if(Number(moedas[AB].saldo) < nmr) return reply(`[❗] Você não possui saldo suficiente para efetuar essa compra... Para alugar ${diasaluguel[Number(q) - 1]} dias, são necessários R$ ${(nmr).toFixed(2)}, e você possui apenas R$ ${Number(moedas[AB].saldo).toFixed(2)} em sua conta 😕`)
moedas[AB].saldo -= nmr
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
idks = gerarkey(q)
moedas[BC].chaves.push({key: idks, tipo: 1, dias: diasaluguel[Number(q) - 1] * 24, cliente: sender, valor: nmr})//tipo 1 = aluguel de grupo
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`💡 Te enviarei ${isGroup ? "no PV" : "abaixo"} a chave de acesso... Copie e cole a mesma no seu grupo para validar os dados e liberar os comandos ✋🏽😳🤚🏽`)
await sleep(1200)
sendMess(sender, idks)
break

case 'gerarkeygp'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [v1, v2] = barra.split('/')
if(!q.includes('/')) return reply(`Você vai colocar o número da pessoa que alugou e após isso uma barra ( / ). Após a barra, coloque a quantidade de dias que este alugou para seu grupo. Ex:
${prefix+command} ${nmrdn.split('@')[0]}/30d`)
jherffeson = v1.toLowerCase() == "me" ? sender : v1.includes('@') ? v1.split('@')[1].replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net" : v1.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const [checkkeygp] = await blackmd.onWhatsApp(jherffeson.split('@')[0])
if(checkkeygp == undefined) {
return reply(`O número ${jherffeson.split('@')[0]} não é válido no whatsapp`)
}
BC = moedas.map(i => i.id).indexOf("jherffeson")
tlvz = v2.slice(0, v2.length-1)
nmr = Number(tlvz) > 0 ? Number(tlvz) : 0
if(v2.slice(v2.length-1, v2.length).toLowerCase() === "h") {
letra = 1
} else if(v2.slice(v2.length-1, v2.length).toLowerCase() === "d") {
letra = 24
} else return reply("Retorne após o número uma letra como d/h, ex: 30d ou 24h")
total = nmr * letra
idks = gerarkey(v2.slice(0, v2.length - 1))
moedas[BC].chaves.push({key: idks, tipo: 1, dias: total, cliente: jherffeson, valor: 0})//tipo 1 = aluguel de grupo
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
mention(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Quantidade: ${nmr > 0 ? `${v2}` : `∞ INFINITO`}
• Cliente: @${jherffeson.split('@')[0]}`)
break

case 'buyvip'://by jherffeson
if(!JSON.stringify(moedas).includes(sender) || !JSON.stringify(moedas).includes("jherffeson")) return reply(`Vc não possui saldo... Use o comando ${prefix}recarga para recarregar moedas a sua conta virtual do Barba System e assim utilizar desses comandos 😃`)
reagir(from, "🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30`)
if(!Number(args[0]) > 0) return reply("Apenas números positivos para setar o tempo pfvr")
if(q.includes('.')) return reply("Não serão aceitos númerosnúmero decimais...")
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
valorv = 0.168 * Number(args[0])
if(Number(moedas[AB].saldo) < valorv) return reply(`[❗] Não foi possível completar a compra da Key... ${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} custar${Number(args[0]) > 1 ? 'ão' : 'á'} R$ ${(valorv).toFixed(2)}, e você possui apenas R$ ${Number(moedas[AB].saldo).toFixed(2)} em sua conta ⚠️`)
moedas[AB].saldo -= valorv
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
idks = gerarkey(q)
moedas[BC].chaves.push({key: idks, tipo: 3, dias: Number(args[0]), cliente: sender, valor: valorv})//tipo 3 = vip
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`💡 Te enviarei ${isGroup ? "no PV" : "abaixo"} a chave de acesso... Copie e cole a mesma no seu grupo ou no PV do bot para validar o VIP ✋🏽😳🤚🏽`)
await sleep(1000)
sendMess(sender, idks)
await sleep(1000)
sendMess(sender, `Lembrando que você pode doar essa key VIP para outra pessoa caso queira, basta enviar no PV dela... Pois se enviar no grupo o bot validará o VIP para você 🤩`)
break

case 'gerarkeyvip'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
reagir(from, "🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30`)
if(q.includes('.')) return reply("Não serão aceitos númerosnúmero decimais...")
BC = moedas.map(i => i.id).indexOf("jherffeson")
tempovip = Number(args[0]) > 0 ? Number(args[0]) : 0
idks = gerarkey(tempovip)
moedas[BC].chaves.push({key: idks, tipo: 3, dias: tempovip, cliente: sender, valor: 0})//tipo 3 = vip
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Quantidade: ${Number(args[0]) > 0 ? `${args[0]} dia${Number(args[0]) > 1 ? 's' : ''}` : `∞ INFINITO`}`)
break

case 'buyvipgp'://by jherffeson
if(!JSON.stringify(moedas).includes(sender) || !JSON.stringify(moedas).includes("jherffeson")) return reply(`Vc não possui saldo... Use o comando ${prefix}recarga para recarregar moedas a sua conta virtual do Barba System e assim utilizar desses comandos 😃`)
reagir(from, "🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30`)
if(!Number(args[0]) > 0) return reply("Apenas números positivos para setar o tempo pfvr")
if(q.includes('.')) return reply("Não serão aceitos números decimais...")
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
valorv = (10 / 30) * Number(args[0])
if(Number(moedas[AB].saldo) < valorv) return reply(`[❗] Não foi possível completar a compra da Key... ${args[0]} dia${Number(args[0]) > 1 ? 's' : ''} custar${Number(args[0]) > 1 ? 'ão' : 'á'} R$ ${(valorv).toFixed(2)}, e você possui apenas R$ ${Number(moedas[AB].saldo).toFixed(2)} em sua conta ⚠️`)
moedas[AB].saldo -= valorv
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
idks = gerarkey(q)
moedas[BC].chaves.push({key: idks, tipo: 4, dias: Number(args[0]), cliente: sender, valor: valorv})//tipo 4 = grupo vip
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`💡 Te enviarei ${isGroup ? "no PV" : "abaixo"} a chave de acesso... Copie e cole a mesma no seu grupo para validar o VIP ✋🏽😳🤚🏽`)
await sleep(1000)
sendMess(sender, idks)
await sleep(1000)
sendMess(sender, `Lembrando que você pode doar essa key VIP para outra pessoa caso queira, basta enviar no PV dela... Pois se enviar no grupo o bot validará o VIP para você 🤩`)
break

case 'gerarkeyvipgp'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
reagir(from, "🤑")
if(!q) return reply(`Coloque a quantidade de dias VIP...
Ex: ${prefix+command} 30`)
if(q.includes('.')) return reply("Não serão aceitos números decimais...")
BC = moedas.map(i => i.id).indexOf("jherffeson")
tempovip = Number(args[0]) > 0 ? Number(args[0]) : 0
idks = gerarkey(tempovip)
moedas[BC].chaves.push({key: idks, tipo: 4, dias: tempovip, cliente: sender, valor: 0})//tipo 3 = vip
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Quantidade: ${Number(args[0]) > 0 ? `${args[0]} dia${Number(args[0]) > 1 ? 's' : ''}` : `∞ INFINITO`}`)
break

case 'reembolsar':
if(!JSON.stringify(moedas).includes(sender) || !JSON.stringify(moedas).includes("jherffeson")) return reply(`Vc não comprou nenhuma key... Veja ${prefix}minhaskey`)
if(!q) return reply(`KD a key que vc deseja reembolsar?`)
AB = moedas.map(i => i.id).indexOf(sender)
BC = moedas.map(i => i.id).indexOf("jherffeson")
if(!JSON.stringify(moedas[BC].chaves).includes(q)) return reply("Chave não encontrada ou inexistente...")
AD = moedas[BC].chaves.map(i => i.key).indexOf(q)
if(moedas[BC].chaves[AD].cliente != sender) return reply("Chave não encontrada ou inexistente...")
nmr = moedas[BC].chaves[AD].valor
moedas[AB].saldo += nmr
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
if(moedas[BC].chaves[AD].tipo != 2) {
moedas[BC].chaves.splice(AD, 1)
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`💠 Saldo reembolsado em sua conta do Barba System no valor de R$ ${Number(nmr).toFixed(2)} (Key deletada) 🤭`)
} else {
moedas[AB].cortesia += 1
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
moedas[BC].chaves.splice(AD, 1)
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`💠 *CARD CORTESIA* restaurado (Key deletada) 🤭`)
}
break

case 'rmkey':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!JSON.stringify(moedas).includes("jherffeson")) return reply(`Não há keys registradas`)
if(!q) return reply(`KD a key que vc deseja apagar?`)
BC = moedas.map(i => i.id).indexOf("jherffeson")
if(!JSON.stringify(moedas[BC].chaves).includes(q)) return reply("Chave não encontrada ou inexistente...")
AD = moedas[BC].chaves.map(i => i.key).indexOf(q)
moedas[BC].chaves.splice(AD, 1)
fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
reply(`✋🏽😳🤚🏽 A Key ${q} foi deletada do sistema com sucesso ✅`)
break

case 'donate':
case 'doar':
case 'apoiar':{
if(!q) return reply(`Digite após o comando o valor de sua doação para o meu dono... Ele ficará muito grato em receber seu pix 🥰`)
if(!Number(args[0])) return reply("Epa, somente número!!")
if(Number(args[0]) <= 0) return reply("Números positivos pfvr")
reagir(from, "🥺")
var pagament = new payment(MercadoPagoKey);//key do Mercado pago
console.log("Pagamento\n\n\n"+pagament);
try {
let inf = await pagament.create_payment(q) //Preco a ser cobrado esta entre os (), no caso aqui e 20 reais 
console.log("INfo\n\n\n"+inf)
// essa parte envia o qr code e o codigo copia e cola
reply(isGroup ? 'Por questões de segurança, irei te enviar os dados no PV...' : 'Gerando pix...')
await sleep(1000)
blackmd.sendMessage(sender, {image: Buffer.from(inf.qr_code, "base64"), caption: `QR code de pagamento acima... Caso queira apenas o código, segue o pix copia e cola abaixo ↴`})
await sleep(1000)
blackmd.sendMessage(sender, {text: `${inf.copy_paste}`})

let check = await pagament.check_payment();

while (check.status == 'pending') { check = await pagament.check_payment() }
if(check.status == "approved") { 
reply('Nossa equipe agradece vosso apoio... Sua participação e colaboração é muito importante para o andamento de nosso trabalho ❤️🥰')
}
} catch(e) { 
console.log(e)
reply("Sistema parece instável... Pfvr, volte mais tarde ✋🏽😳🤚🏽") }
}
break

case 'pix':
setTimeout(() => {reagir(from, "🥹")}, 300)
reply(`*Caso queira ajudar meu mestre com qualquer quantia... Aqui está o pix dele:* 🙇🏻‍♂️

*Chave ↴*`)
setTimeout(async() => {
blackmd.sendMessage(from, {text: `bd85b595-284f-4d17-9c3d-c933df8e07c4`})
}, 1100)
break

case 'criador':
ttgp = isGroup ? groupMembers.length * groupAdmins.length + somembros.length : 6
horar = moment.tz('America/Sao_Paulo').format('HH:mm')
datar = moment.tz('America/Sao_Paulo').format('DD/MM')
criador = `🤧 *Ah o meu criador ? Jherffeson o nome da lenda... Ele foi quem desenvolveu esse sistema todo que você está usando* 🥰`
sendUrlDoc(from, criador, 'application/pdf', `${horar}H ┋ ${datar} 📆`, ttgp, NomeDoBot, ``, `https://telegra.ph/file/10d3c7ffed2cbb760e9b1.jpg`, `https://wa.me/5511915540467`, seloctt)
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':
case 'jherffeson':
reagir(from, "👑")
const { infodono } = require("./dono/info/infodono.js")
sendUrlText2(from, infodono(tempo, tempo_emoji, pushname, NickDono, nmrdn, NomeDoBot, prefix), NomeDoBot, ``, logoslink.menu, `https://wa.me/`+numerodono_ofc, seloctt)
await sleep(1200)
sendContact(from, NickDono, NomeDoBot, numerodono_ofc)
break

case 'configurar-bot':
if(!isOwner) return reply(`INDISPONÍVEL`)
blackmd.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break

case 'comandos-termux':
blackmd.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break

case 'destrava':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isVip) return reply(`[ ❗ ] Precisa ser VIP e admin ❌`)
if(!isGroupAdmins) return reply(`Você ainda não é admin 🤪`)
blackmd.sendMessage(from, {text: destrava(prefix)}, {quoted: seloctt})
break

case 'getpp':
if(!isVip) return reply(enviar.msg.vip)
if(!menc_os2) return reply(`Marque o usuário que você quer puxar a foto de perfil, a mensagem ou o @`)
try { ppimg = await blackmd.profilePictureUrl(`${menc_os2.split('@')[0]}@c.us`, 'image')
} catch { return mention(`[❗] não foi possível pegar a foto de perfil do usuário @${menc_os2.split("@")[0]} ❌`) }
sendImage(from, ppimg, ``, seloblk)
break

case 'perfil':
reagir(from, "😸")
usu = sender_ou_n
try {
  ppimg = await blackmd.profilePictureUrl(`${usu.split('@')[0]}@c.us`, 'image')
} catch {
  ppimg = semfoto
}
try {
  bio = (await blackmd.fetchStatus(usu)).status
} catch {
  bio = "🔒 Privada 🔒"
}
txt = `╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕ㅤㅤㅤㅤㅤ📦 𝙂𝙀𝙍𝘼𝙇 📦
╽╟ • ɴᴏᴍᴇ: ${getname(usu)}
╽╟ • ɴúᴍᴇʀᴏ: wa.me/${usu.split("@")[0]}
╽╟ • ʙɪᴏ: ${bio}
╽╟ • ꜱᴀʟᴅᴏ: R$ `
if(isJsonIncludes(moedas, usu)) {
  A1 = moedas.map(a => a.id).indexOf(usu)
  txt += `${Number(moedas[A1].saldo).toFixed(2)}`
} else { txt += `00.00` }
txt += `
╽╟ ~>『 ${isAllOwner(usu) ? "✅" : "❌"} 』ᴅᴏɴᴏ
╽╟ ~>『 ${isAdmin(usu) ? "✅" : "❌"} 』ᴀᴅᴍ
╽╟ ~>『 ${isOnlyVip(usu) ? "✅" : "❌"} 』ᴠɪᴩ
╽╟ ~>『 ${isJsonIncludes(vipgp, from) ? "✅" : "❌"} 』ɢʀᴜᴩᴏ ᴠɪᴩ
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`

if(isGroup || isJsonIncludes(level, usu)) {
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤ📊 𝘾𝙊𝙉𝙏𝘼𝘿𝙊𝙍𝙀𝙎 📊`
  if(isGroup) {
    B1 = countMessage.map(b => b.groupId).indexOf(from)
    B2 = countMessage[B1].participants.map(b => b.id).indexOf(usu)
    B3 = B2 >= 0 ? countMessage[B1].participants[B2] : ""
    txt += `
╽╟ • ❪🗒️ฺ࣭࣪͘ꕸ▸ ᴍᴇɴꜱᴀɢᴇɴꜱ: ${B2 >= 0 ? largeNumber(B3.mensagens) : "0"}
┢┸ • ❪🗄️ฺ࣭࣪͘ꕸ▸ ᴄᴏᴍᴀɴᴅᴏꜱ: ${B2 >= 0 ? largeNumber(B3.comandos) : "0"}
┢╕`
    }
    if(isJsonIncludes(level, usu)) {
    C1 = level.map(c => c.id).indexOf(usu)
    C2 = level[C1]
    C3 = level.map(i => i)
    C4 = C3.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
    C5 = level.length > 10 ? 10 : level.length
    C6 = []
    for(i = 0; i < C5; i++) {
      if(i != null) {
        C6.push({id: C4[i].id})
      }
    }
    C7 = C6.map(c => c.id).indexOf(usu)
    txt += `
╽╟ • ❪📬ฺ࣭࣪͘ꕸ▸ ʟᴇᴠᴇʟ: ${C2.level}
╽╟ • ❪🗳️ฺ࣭࣪͘ꕸ▸ xᴩ: ${largeNumber(C2.contador)}
╽╟ • ❪💎ฺ࣭࣪͘ꕸ▸ ʀᴀɴᴋ: ${C7 >= 0 ? "Top " + (C7 + 1) : "\"não está no rank\""}
╽╟ • ❪📥ฺ࣭࣪͘ꕸ▸ ᴩᴀᴛᴇɴᴛᴇ: ${patente(C2.contador)}
┢┸ • ❪🚫ฺ࣭࣪͘ꕸ▸ ʙʟᴏqᴜᴇᴀᴅᴏ『 ${C2.block == true ? "✅" : "❌"} 』`
  }
  txt += `\n┕⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
if(isOnlyVip(usu)) {
  D1 = vip.map(d => d.id).indexOf(usu)
  D2 = vip[D1]
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤㅤㅤㅤ💸 𝙑𝙄𝙋 💸`
  txt += D2.infinito == false ? `
╽║ ${barrinha(((D2.dias - 1) * 24) + Number(sendHours("HH")), D2.total * 24)}
╽╟ • ❪🤑ฺ࣭࣪͘ꕸ▸ _${sendTimeDay(D2.dias)} restante${Number(sendTimeDay(D2.dias).slice(0, 2)) !== 1 ? "s" : ""}_` : `
╽║ 〘██████████〙100%
╽╟ • ❪🤑ฺ࣭࣪͘ꕸ▸ _∞ INFINITY_`
  txt += `\n┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
if(isJsonIncludes(cardxp, usu)) {
  E1 = cardxp.map(e => e.id).indexOf(usu)
  E2 = cardxp[E1]
  txt += `\n\n╓─━═╾╼═╾╼═╾╼═╾╼═╾╼═╾╼═━─┒
┢╕ㅤㅤㅤㅤㅤ🔖 𝘾𝘼𝙍𝘿 𝙓𝙋 🔖
╽╟ • 💾⃤ ᴛᴏᴛᴀʟ: ${E2.cards.length}
╽║ `
  txt += E2.active == true ? `
╽╟ • ❪📼ฺ࣭࣪͘ꕸ▸ ᴍᴜʟᴛɪᴩʟɪᴄᴀᴅᴏʀ: ${E2.cards[E2.mapa].multi}x
╽╟ • ❪📆ฺ࣭࣪͘ꕸ▸ ᴛᴇᴍᴩᴏ: _${sendTimeCort(E2.tempo)} restante${Number(sendTimeCort(E2.tempo).slice(0, 2)) !== 1 ? "s" : ""}_
╽║ ${barrinha(E2.tempo, E2.cards[E2.mapa].horas)}` : `❌ ᴄᴀʀᴅ ɴãᴏ ᴀᴛɪᴠᴀᴅᴏ ❌`
  txt += `\n┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
sendUrlText(from, txt, `😜 𝙋𝙀𝙍𝙁𝙄𝙇 🤪`, ``, ppimg, `https://wa.me/`+usu.split("@")[0], seloctt)
break

case 'perfil2':
reagir(from, "🤭")
//foto de perfil
try {
ppimg = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = semfoto
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
//bio do usuário
try {
bioperfil = (await blackmd.fetchStatus(sender)).status
} catch {
bioperfil = "🔒 Privada 🔒"
}
const dptr = `ㅤㅤ〘 ՏᎬႮ ᏢᎬᎡҒᏆᏞ 〙
⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 *↴*
⇒ ${pushname}

⏤͟͟͞͞ ꦿ𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙 *↴*
⇒ wa.me/${sender.split("@")[0]}

⏤͟͟͞͞ ꦿ𝙱𝚒𝚘 *↴*
⇒ ${bioperfil}

🐂⃤ 𝙽í𝚟𝚎𝚕 𝙶𝚊𝚍𝚘『 ${Math.floor(Math.random()*100)}% 』
📱⃤ 𝚂𝚎𝚞 𝙲𝚎𝚕𝚞𝚕𝚊𝚛『 ${info.key.id.length > 21 ? 'Android  🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS 😂😂😅' : 'Zap zap web  😂😂☝🏼😅'} 』
😈⃤ 𝙽í𝚟𝚎𝚕 𝙿𝚞𝚝𝚊『 ${Math.floor(Math.random()*100)}% 』
🥵⃤ 𝙽í𝚟𝚎𝚕 𝙳𝚎 𝙶𝚘𝚜𝚝𝚘𝚜𝚞𝚛𝚊『 ${Math.floor(Math.random()*100)}% 』
🍼⃤ 𝙿𝚛𝚘𝚐𝚛𝚊𝚖𝚊『 R$ ${Math.floor(Math.random()*9999)} 』


ㅤㅤ〘 ᏟϴΝՏᎬᏞᎻϴ 〙
${conselho}

_${tempo}_ ${tempo_emoji}
`
blackmd.sendMessage(from, {audio: {url:'./database/audios/criatura.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: seloctt})
await sleep(1000)
blackmd.sendMessage(from, {image: {url: ppimg}, caption: dptr}, {quoted: seloctt})
} catch (e) {
console.log(e)
}
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':
case 'conselhos':
case 'conselho':
setTimeout(() => {reagir(from, "🥰")}, 300)
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `Oiê, ${tempo} ${pushname} ! ^-^

🍁𝑪𝒐𝒏𝒔𝒆𝒍𝒉𝒐𝒔 𝑩𝒊́𝒃𝒍𝒊𝒄𝒐𝒔 𝒑𝒓𝒂 𝒗𝒐𝒄𝒆̂ 🍁

- ${conselhosb} 

⏤͟͟͞͞ ꦿBot⧽ ${NomeDoBot}
⏤͟͟͞͞ ꦿGrupo⧽ ${groupName}`
blackmd.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'frases':
case 'frase':
setTimeout(() => {reagir(from, tempo_emoji)}, 300)
frases_ = palavrasc[Math.floor(Math.random() * palavrasc.length)]
reply(`${frases_}

⏤͟͟͞͞ ꦿ${NomeDoBot}
_${tempo}_ ${tempo_emoji}`)
break

case 'tabela':
blackmd.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'pensador':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" amor")
try {
ABC = await fetchJson(`${barbasite}/search/pensador?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
txt = `${"- ".repeat(20)}`
for(i of ABC.resultado) {
txt += `\n${i.frase}\n${"- ".repeat(20)}`
}
reply(txt)
} catch {
reply("Erro")
}
break

case 'frasesearch': case 'frase-search': case 'fs':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" amor")
try {
ABC = await fetchJson(`${barbasite}/api/pesquisa/pensador?text=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
jherffeson = ABC.resultado[Math.floor(Math.random()*ABC.resultado.length)]
blackmd.sendMessage(from, {image: {url: jherffeson.image}, caption: jherffeson.frase+`\n`+`- `.repeat(20)+`\n`+jherffeson.compartilhamentos}, {quoted: info})
} catch(e) {
console.log(e)
reply("Não foi possível achar frases motivacionais com o título \""+q+"\"")
}
break

case 'amazonsearch': case 'azsch':
if(!q) return reply("Retorne um título para ser pesquisado, ex: "+prefix+command+" livro")
try {
ABC = await fetchJson(`${barbasite}/api/amazon?nome=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
jherffeson = ABC.resultado[Math.floor(Math.random()*ABC.resultado.length)]
blackmd.sendMessage(from, {image: {url: jherffeson.imagem}, caption: `${jherffeson.titulo}
» ${jherffeson.valor} «

${jherffeson.link}`}, {quoted: info})
} catch(e) {
console.log(e)
reply("Não foi possível encontrar produtos com o título \""+q+"\"")
}
break

case 'destrava2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isVip) return reply(`[ ❗ ] Precisa ser VIP e admin ❌`)
if(!isGroupAdmins) return reply(`Você ainda não é admin 🤪`)
blackmd.sendMessage(from, {text: destrava2 (prefix)}, {quoted: seloctt})
break 

case 'infobemvindo':
case 'infobv':  
blackmd.sendMessage(from, {text: infobemvindo(prefix, pushname)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
case 'infogtts':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
'eo': 'Esperanto',
'fi': 'Finnish',
'fr': 'French',
'de': 'German',
'el': 'Greek',
'ht': 'Haitian Creole',
'hi': 'Hindi',
'hu': 'Hungarian',
'is': 'Icelandic',
'id': 'Indonesian',
'it': 'Italian',
'ja': 'Japanese',
'ko': 'Korean',
'la': 'Latin',
'lv': 'Latvian',
'mk': 'Macedonian',
'no': 'Norwegian',
'pl': 'Polish',
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${NomeDoBot}🔥`

blackmd.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
case 'infobanghost':  
blackmd.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
blackmd.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'inforgaluguel':
blackmd.sendMessage(from, {text: infoaluguel(prefix, pushname)}, {quoted: selo})
break

case 'infotransmitir':
blackmd.sendMessage(from, {text: infotransmitir(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
blackmd.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
blackmd.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git':
case 'git-bot':  
case 'gitdobot':
case 'gitbot':
reply(`🌐 *Git disponível no site:*
${barbasite}/docs`)
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'ler':
case 'ocr':
case 'lerfoto':
if(!isVip) return reply(enviar.msg.vip)
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
DLT_FL(media)
})
.catch(err => {
reply(err.message)
DLT_FL(media)
})
} else {
reply('Somente fotos!')
}
break

case 'rvisu':
case 'revelarvisu':
if(!isVip) return reply(enviar.msg.vip)
if(!isQuotedVisuU || !isQuotedVisuU2) return reply(`marque uma foto/video em visualização unica`)
try{
reagir(from, "👁️")
if(JSON.stringify(info).includes("videoMessage")) {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewVideo.viewOnce = false
viewVideo.video = {url: viewVideo.url}
viewVideo.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
blackmd.sendMessage(from, viewVideo)
} else {
var vio = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var viewImage = vio?.imageMessage || info.message?.imageMessage || vio?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || vio?.viewOnceMessage?.message?.imageMessage
var viewVideo = vio?.videoMessage || info.message?.videoMessage || vio?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || vio?.viewOnceMessage?.message?.videoMessage
viewImage.viewOnce = false
viewImage.image = {url: viewImage.url}
viewImage.caption += "\n\n👁️ *REVELANDO ONE VISION* 👁️"
blackmd.sendMessage(from, viewImage)
}
} catch(e){
	reply(`Erro`)
	}
break

case 'listavip':
reagir(from, "💎")
if(!isVip) { reply(enviar.msg.vip)
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
tkks = '『 🤑 *ALTA REALEZA* 🤑 』\n'
for (let V of vip) {
tkks += `⇒ @${V.id.split('@')[0]}
${V.infinito == false ? sendTimeDay(V.dias) : `∞ *INFINITY [ VIP ]*`}\n`
}
total = vip.length
if(JSON.stringify(vipgp).includes(from)) {
  AB = vipgp.map(i => i.id).indexOf(from)
  for(i of groupMembers) {
    if(i.id != botNumber && !JSON.stringify(vip).includes(i.id)) {
      tkks += `⇒ @${i.id.split('@')[0]}
${vipgp[AB].infinito == false ? sendTimeDay(vipgp[AB].dias) : `∞ *INFINITY [ VIP ]*`}\n`
total += 1
    }
  }
}
tkks += `ㅤ *TOTAL〘* ${total} *〙*\n\n⏤͟͟͞͞ ꦿ${tempo} ${tempo_emoji}`
mencionarIMG(tkks, `https://telegra.ph/file/c1d8b48cf13e781b5dfeb.jpg`)
break

case 'metodos'://by jherffeson & monarge
if(!isVip) return reply(enviar.msg.vip)
const { metodos } = require('./armor/js/metodos.js');
tipo = q
if(tipo.toLowerCase().startsWith("desban")) {
  dbn = q.split('desban')[1]
  if(Number(dbn) > 0 && Number(dbn) <= metodos.desban.length && !dbn.includes('.')) {
    txt = metodos.desban[Number(dbn)-1]
  } else return reply(`Escolha um número de 1-${metodos.desban.length}, ex:\n${prefix+command} desban 2`)
} else if(tipo.toLowerCase().startsWith("sair do -1")) {
  sd1 = q.split('sair do -1')[1]
  if(Number(sd1) > 0 && Number(sd1) <= metodos.sairdomenos1.length && !sd1.includes('.')) {
    txt = metodos.sairdomenos1[Number(sd1)-1]
  } else return reply(`Escolha um número de 1-${metodos.sairdomenos1.length}, ex:\n${prefix+command} sair do -1 2`)
} else if(tipo.toLowerCase().replace("ú", "u").startsWith("desativar numero")) {
  dn = q.replace("ú", "u").split('desativar numero')[1]
  if(Number(dn) > 0 && Number(dn) <= metodos.desativarnumero.length && !dn.includes('.')) {
    txt = metodos.desativarnumero[Number(dn)-1]
  } else return reply(`Escolha um número de 1-${metodos.desativarnumero.length}, ex:\n${prefix+command} desativar número 2`)
} else return reply(`Vc precisa escolher o método:
> ${prefix+command} desban
> ${prefix+command} sair do -1
> ${prefix+command} desativar número`)
reply(txt+`\n\n〘 𝑴𝑨𝑻𝑯𝑬𝑼𝒁𝑰𝑵𝑯𝑶 👑 𝑫𝑶𝑴𝑰𝑵𝑨 〙`)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'netflix': case 'globoplay': case 'amazonprime': case 'telecine': case 'canvas': case 'hbo': case 'starsplus': case 'sportify'://by jherffeson
if(!isJsonIncludes(moedas, sender)) return reply(`Você não possui saldo... Veja ${prefix}me`)
account = `./database/contas/${command}.json`
if(!fs.existsSync(account)) return reply("Banco de dados dessa conta não foi encontrado... Pfvr, chame meu dono para resolver.")
acc = JSON.parse(fs.readFileSync(account))
if(acc.length <= 0) return reply("Nenhuma conta em estoque no momento... Pfvr, volte mais tarde")
if(command == 'netflix') valor = 10
if(command == 'globoplay') valor = 15
if(command == 'amazonprime') valor = 10
if(command == 'telecine') valor = 20
if(command == 'canvas') valor = 5
if(command == 'hbo') valor = 10
if(command == 'starsplus') valor = 5
if(command == 'sportify') valor = 5
AB = moedas.map(i => i.id).indexOf(sender)
if(moedas[AB].saldo < valor) return reply(`Esta ação lhe custaria R$ ${valor.toFixed(2)}, mas o seu saldo se encontra abaixo disso... Faça uma recarga no comando ${prefix}recarga`)
moedas[AB].saldo -= valor
saveJSON(moedas, `./base de funcionamento/aluguel/moedas.json`)
BC = alerandom(acc.length)
txt = `ㅤㅤㅤㅤㅤㅤ🌟 ${command.toUpperCase()} 🌟

✉️ *Login:* ${acc[BC].login}
🔑 *Senha:* ${acc[BC].senha}

_Conta debitada no valor de R$ ${valor.toFixed(2)}... Nossa equipe agradece a confiança em nossos serviços_ 🥰`
if(isGroup) { reply(`*Enviando* 🥰`) }
await sleep(1000)
sendMess(sender, txt)
acc.splice(BC, 1)
saveJSON(acc, account)
break

case 'add-netflix': case 'add-globoplay': case 'add-amazonprime': case 'add-telecine': case 'add-canvas': case 'add-hbo': case 'add-starsplus': case 'add-sportify'://by jherffeson
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("add-")[1]
account = `./database/contas/${conta}.json`
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [continha, password] = barra.split("/")
if(!continha || !password) return reply(`Separe após o comando, o login e senha com uma barra ( / ), ex:
${prefix+command} teupaidecalinha@gmail.com/12345`)
acc = JSON.parse(fs.readFileSync(account))
if(isJsonIncludes(acc, continha)) return reply("Conta já existente no banco de dados 📂")
acc.push({login: continha, senha: password})
saveJSON(acc, account)
reply(`Conta ${conta.toUpperCase()} adicionada com sucesso ✅`)
break

case 'rm-netflix': case 'rm-globoplay': case 'rm-amazonprime': case 'rm-telecine': case 'rm-canvas': case 'rm-hbo': case 'rm-starsplus': case 'rm-sportify'://by jherffeson
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("rm-")[1]
account = `./database/contas/${conta}.json`
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
if(!q) return reply(`Retorne o email da conta ou o número dela presente no comando ${prefix+"lista-"+conta} para deletar 🗑️`)
acc = JSON.parse(fs.readFileSync(account))
try {
loc = Number(q) ? Number(q) - 1 : acc.map(i => i.login).indexOf(q)
reply(`Conta ${acc[loc].login} deletada com sucesso ✅`)
acc.splice(loc, 1)
return saveJSON(acc, account)
} catch { return reply("Conta não existente no banco de dados 📂") }
break

case 'lista-netflix': case 'lista-globoplay': case 'lista-amazonprime': case 'lista-telecine': case 'lista-canvas': case 'lista-hbo': case 'lista-starsplus': case 'lista-sportify'://by jherffeson
if(!isOwner) return reply(`Só meu dono`)
conta = command.split("lista-")[1]
account = `./database/contas/${conta}.json`
acc = JSON.parse(fs.readFileSync(account))
if(!fs.existsSync(account)) return reply("JSON não encontrado para armazenar os dados... Verifica isso aí")
txt = `🌟 *Lista de contas ${conta.toUpperCase()}:*`
for(i = 0; i < acc.length; i++) {
  txt += `\n\n[ ${i+1} ]\n*Login:* ${acc[i].login}\n*Senha:* ${acc[i].senha}`
}
txt += `\n\n📜 *Total:* ${acc.length}`
reply(txt)
break

case 'disney':
if(!isVip) return reply(enviar.msg.vip)
disney = JSON.parse(fs.readFileSync("./database/disney.json"))
moon = disney[Math.floor(Math.random() * disney.length)]
blackmd.sendMessage(from, {image: {url: 'https://telegra.ph/file/9cb91bf0953c17ca4268a.jpg'}, caption: `
> Lembre-se: teste a conta para ver se tem acesso ou não, algumas contas não tem mais acesso válido, boa sorte.

> Login: ${moon.login}

> Senha: ${moon.senha}`}, {quoted: info})
break

case 'gerarcpf':
if(!isVip) return reply(enviar.msg.vip)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
blackmd.sendMessage(from, {text: `𝐂𝐏𝐅 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌『 𝐒𝐔𝐂𝐄𝐒𝐒𝐎 』💻\n\n${cpf}`}, {quoted: seloctt})
break

case 'ddd':
setTimeout(() => {reagir(from, "📱")}, 300)
if(args.length < 1) return reply(`*Digite o DDD para puxar...*\n*Exemplo:* ${prefix + command} 91`)
try {
ABC = await fetchJson(barbasite+`/api/ddd?ddd=${q}&apikey=`+API_KEY_BARBA)
dddlist = `Lista de Cidades de ${ABC.cidade} com este DDD ${q} ↴

${ABC.resultado.map(i => `»${(ABC.resultado.indexOf(i)) + 1}« ${i}`).join("\n")}`
reply(dddlist)
} catch(e) { console.log(e)
reply("Erro") }
break

case 'listafake': case 'listafakes':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
reagir(from, "🇺🇸")
txt = `🇺🇸 *Lista de números fake presentes neste grupo:*\n`
let totalfake = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].id.split(groupMembers[i].id.slice(2))[0] === ("55")) {} else {
    txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
    totalfake += 1
  }
}
txt += `\n🇺🇸 Total: ${totalfake}`
if(totalfake > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply("Não há números fake neste grupo...")
}
break

case 'brlist': case 'listabr':
if(!isGroup) return reply(enviar.msg.grupo)
reagir(from, "🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros presentes neste grupo:*\n`
let totalbr = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].id.split(groupMembers[i].id.slice(2))[0] === ("55")) {
    if(groupMembers[i].id.includes(botNumber)) {} else {
      txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
      totalbr += 1
    }
  }
}
txt += `\n🇧🇷 Total: ${totalbr}`
if(totalbr > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply("Não há números brasileiros neste grupo...")
}
break

case 'dddlist': case 'listaddd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Use ${prefix+command} DDD`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
if(Number(args[0]) < 10 || Number(args[0]) > 99) return reply("Retorne um DDD válido")
reagir(from, "🇧🇷")
txt = `🇧🇷 *Lista de números brasileiros com DDD +${args[0]} presentes neste grupo:*\n`
let totalddd = 0
for(i = 0; i < groupMembers.length; i++) {
  if(groupMembers[i].id.split(groupMembers[i].id.slice(4))[0] === (`55${args[0]}`)) {
    if(groupMembers[i].id.includes(botNumber)) {} else {
      txt += `⇒ ${isGroupAdmins ? '@' : 'wa.me/'}${groupMembers[i].id.split("@")[0]}\n`
      totalddd += 1
    }
  }
}
txt += `\n🇧🇷 Total: ${totalddd}`
if(totalddd > 0) {
  var resp = isGroupAdmins ? mention : reply
  resp(txt)
} else {
  reply(`Não há números com o DDD +${args[0]} neste grupo...`)
}
break

case 'gerarnmr':
if(!isVip) return reply(enviar.msg.vip)
if(args.length < 1) return reply(`*Digite o DDD para gerar...*\n*Exemplo:* ${prefix + command} 91`)
nmrale1 = `${Math.floor(Math.random() * 3) + 6}`
nmrale2 = `${Math.floor(Math.random() * 3) + 6}`
nmrale3 = `${Math.floor(Math.random() * 3) + 6}`
nmrale4 = `${Math.floor(Math.random() * 3) + 6}`
nmrale5 = `${Math.floor(Math.random() * 3) + 6}`
nmrale6 = `${Math.floor(Math.random() * 3) + 6}`
nmrale7 = `${Math.floor(Math.random() * 3) + 6}`
nmrale8 = `${Math.floor(Math.random() * 3) + 6}`
nmrale = `${nmrale1+nmrale2+nmrale3+nmrale4+nmrale5+nmrale6+nmrale7+nmrale8}`
blackmd.sendMessage(from, {text: `*Gerando número de tell com o DDD* ${q}⧽

⇒ ${q}9${nmrale}
wa.me/55${q+nmrale}`}, {quoted: seloctt})
break

case 'encurtalink':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Ex: ${prefix+command} ${barbasite}`)
try {
link = q
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

case 'criaremail': case 'criar-email':
if(!isVip) return reply(enviar.msg.vip)
try {
ABC = await fetchJson(barbasite+`/api/tempmail/criar-email?apikey=`+API_KEY_BARBA)
reply(`*✉️ Email temporário gerado com sucesso:*`)
await sleep(700)
sendMess(from, ABC.resultado)
} catch(e) { console.log(e)
reply(`Erro`) }
break

case 'leremail': case 'lerinbox':
if(!isVip) return reply(enviar.msg.vip)
if(!q.includes("@")) return reply("KD o email pra eu ler?")
login = q.split("@")[0]
domain = q.split("@")[1]
try {
ABC = await fetchJson(barbasite+`/api/tempmail/ler-inbox?domain=${domain}&login=${login}&apikey=`+API_KEY_BARBA)
reply(`*✉️ Caixa de entrada:* ${`${ABC.resultado.length}` + ABC.resultado.length > 0 ? "\n\n" : ""}${ABC.resultado.map(i => `• *Enviado de:* ${i.from}
• *Assunto:* ${i.subject}
• *Data:* ${i.date}`).join("\n-\n")}`)
} catch(e) { console.log(e)
reply(`Erro`) }
break

// consultas

case 'nome':
case 'nome2':
case 'nome3':
case 'nome4':
case 'tel':
case 'tel2':
case 'rg':
case 'cpf':
case 'cpf2':
case 'datasus':
case 'cns':
case 'placa': {
if(!isChatOfc && !isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Retorne após o comando o dado que deseja pesquisar`)
let { key } = await blackmd.sendMessage(from, {text: enviar.msg.consulta}, {quoted: info})//primeira mensagem
await sleep(1000)
try {
consulta = encodeURI(rmLetras(q))
ABC = await fetchJson(blacksite+`/vip/consultas?type=${command}&query=${consulta}&apikey=`+API_KEY_BLACK)
if(ABC.resultado == undefined) return await blackmd.sendMessage(from, {text: `⚠️ *NÃO ENCONTRADO* ⚠️`, edit: key }, {quoted: info})
txt = `
==============================
\t\t🔎 *CONSULTA DE ${command.toUpperCase()}* 🔍
==============================

${ABC.resultado}

👤 *for* ${pushname}
\t🤖 *by* ${NomeDoBot}`
await blackmd.sendMessage(from, {text: txt, edit: key}, {quoted: info})
} catch(e) { console.log(e)
await blackmd.sendMessage(from, {text: `📵 Comando usado de forma errada ou possível erro na busca de dados do sistema 🎲`, edit: key }, {quoted: info})
}}
break

case 'bin':
case 'cep':
case 'cnpj':
case 'score':
case 'email':
case 'chassi': {
if(!isChatOfc && !isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Retorne após o comando o dado que deseja pesquisar`)
let { key } = await blackmd.sendMessage(from, {text: enviar.msg.consulta}, {quoted: info})//primeira mensagem
await sleep(1000)
try {
consulta = encodeURI(rmLetras(q))
ABC = await fetchJson(blacksite+`/vip/puxadas?type=${command}&query=${consulta}&apikey=`+API_KEY_BLACK)
if(ABC.resultado == undefined) return await blackmd.sendMessage(from, {text: `⚠️ *NÃO ENCONTRADO* ⚠️`, edit: key }, {quoted: info})
txt = `
==============================
\t\t🔎 *CONSULTA DE ${command.toUpperCase()}* 🔍
==============================

${ABC.resultado}

👤 *for* ${pushname}
\t🤖 *by* ${NomeDoBot}`
await blackmd.sendMessage(from, {text: txt, edit: key }, {quoted: info})
} catch(e) {
console.log(e)
await blackmd.sendMessage(from, {text: `📵 Comando usado de forma errada ou possível erro na busca de dados do sistema 🎲`, edit: key }, {quoted: info})
}
}
break

// fim consultas

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'raizq': case 'raizquadrada':
if(!Number(q.replace("√", ""))) return reply("Retorne após o comando o número que você quer encontrar a raiz quadrada")
radical = Number(q.replace("√", ""))
if(!raiz(radical)) {
  divi = divisores(radical)
  if(divi.length <= 0) return reply("Nenhum divisor encontrado...")
  primeiro = []
  for(a of divi) {
    if(raiz(a)) primeiro.push({search: a, resultado: findRaiz(a)})
  }
  if(primeiro.length <= 0) return reply("Nenhuma raiz encontrada...")
  result_x = primeiro[primeiro.length - 1].resultado
  resto = radical / primeiro[primeiro.length - 1].search
  dividir = divisores(resto)
  if(divisores.length > 0) {
    segundo = []
    for(b of dividir) {
      if(raiz(b)) segundo.push({search: b, resultado: findRaiz(b)})
    }
    if(segundo.length > 0) {
      result_x *= segundo[segundo.length - 1].resultado
      result_x += `√` + (resto / segundo[segundo.length - 1].search)
    } else result_x += `√` + resto
  } else result_x += `√` + resto
} else result_x = findRaiz(radical)
reply(`🧮 _Segundo meus cálculos, a √${q.replace("√", "")} é -> *"${result_x}"*_ ヅ`)
break

case 'bhaskara'://by jherffeson
if(!q) return reply(`Retorne a equação quadrática após o comando (use a variável "x", exemplo: ${prefix+command} 2x²+4x+2 = 0)`)
a = Number(q.replace("x²", "x2").split("x2")[0])
b = Number(q.replace("x²", "x2").split("x2")[1].split("x")[0])
c = Number(q.split("x")[2].split("=")[0])
txt = `∆ = b² - 4 • a • c
∆ = ${b}² - 4 • ${a} • ${c}
∆ = ${b*b} ${Number(-4*a*c) >= 0 ? `+${-4*a*c}` : -4*a*c}
∆ = ${Number(b*b) + Number(-4*a*c)}
`
delta = Number(b*b) + Number(-4*a*c)
if(delta < 0) return reply("A equação não possui raiz")
raiz = []
for(i = 0; i < Number(delta/2); i++) {
if(Number(i*i) === delta) {
raiz.push(i)
}
}
if(delta != 0 && raiz.length <= 0) return reply(`√${delta} não encontrada`)
txt += `
x = -b ±√∆
         2 • a
x = -(${b}) ±√${delta}
         2 • ${a}
`
if(delta > 0) {
txt += `
x = ${b*Number(-1)} ±${raiz[0]}
         ${a*2}
x' = ${b*Number(-1)} + ${raiz[0]}
         ${a*2}
x' = ${Number(b*Number(-1)) + Number(raiz[0])}
         ${a*2}
x' = ${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}

x'' = ${b*Number(-1)} - ${raiz[0]}
         ${a*2}
x'' = ${Number(b*Number(-1)) - Number(raiz[0])}
         ${a*2}
x'' = ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}

$ = {${Number(Number(b*Number(-1)) + Number(raiz[0])) / Number(a*2)}, ${Number(Number(b*Number(-1)) - Number(raiz[0])) / Number(a*2)}}`
} else {
txt += `x = ${b*Number(-1)}
       ${a*2}
x = ${Number(b*Number(-1)) / Number(a*2)}
`
}
reply(txt)
break

case 'calculadora':
case 'calcular':  
case 'calc':
case 'math':
if(!q) return reply(`KD a conta matemática pá eu fazer ?`)
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
setTimeout(() => {reagir(from, react2)}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(`Escreva o novo nome do grupo`)
blat = args.join(" ")
blackmd.groupUpdateSubject(from, `${blat}`)
blackmd.sendMessage(from, {text: `🙇🏻‍♂️ *Ok alteza, o nome do grupo foi alterado para:* ${q}`}, {quoted: seloctt})
break

case 'chatblack':
reagir(from, react2)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blackmd.groupUpdateSubject(from, `༒ ɓℓα૮ҡ ɓσƭ ૮ɦαƭ ༒`)
blackmd.sendMessage(from, {text: `*_Nome do chat atualizado ✅_*`}, {quoted: seloctt})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Escreva a nova bio do grupo`)
blabla = args.join(" ")
blackmd.groupUpdateDescription(from, `${blabla}`)
blackmd.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: seloctt})
break

case 'setfotogp':
case 'fotogp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
blackmd.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgrupo':
reagir(from, "✅")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
var jherffeson = await blackmd.profilePictureUrl(from, 'image')
} catch {
var jherffeson = `https://telegra.ph/file/c918735f74e9ec9a6527c.jpg`
}
linkgc = await blackmd.groupInviteCode(from)
blackmd.sendMessage(from, {text: '*_Aqui está o link do grupo⧽_*\n\nhttps://chat.whatsapp.com/'+linkgc, contextInfo: {
  externalAdReply: {
    title: groupName,
    body: ``,
    thumbnail: await getBuffer(jherffeson),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: 'https://chat.whatsapp.com/'+linkgc
  }
}}, {quoted: seloctt})
break

case 'novolink':
case 'nlink':
case 'redefinir':
setTimeout(() => {reagir(from, "🧵")}, 300)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await blackmd.groupRevokeInvite(from)
await sleep(1000)
link = await blackmd.groupInviteCode(from)
sendButton(from, {text: `[❗] link redefinido com sucesso 💢`, footer: NomeDoBot}, blackmd, sender, [{type: `copy_text`, text: `🥏 𝙇𝙄𝙉𝙆 𝘼𝙌𝙐𝙄 🎳`, url: `https://chat.whatsapp.com/`+link}], seloctt)
} catch(e) { console.log(e)
reply("Erro ao tentar redefinir o link") }
break

case 'recrutar':
case 'recrutar2':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroupAdmins || !isVip) return reply("[ ❗ ] *precisa ser ADM e VIP* ❌")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await blackmd.groupInviteCode(from)
try {
var ftgpcmd = await blackmd.profilePictureUrl(from, 'image')
} catch {
var ftgpcmd = logoslink.logo
}
rlink = `https://chat.whatsapp.com/${linkgc}`
if(command == `recrutar`) {
blackmd.sendMessage(rcrt, {image:{url: ftgpcmd}, caption: `${pushname} te convida para entrar no grupo ${groupName}... Clique no link acima para aceitar`, contextInfo: {
externalAdReply: {
title: `${groupName}`,
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logoslink.logo, 
sourceUrl: rlink, 
mediaType: 2
}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
} else {
ttgp = groupMembers.length * groupAdmins.length + somembros.length
horar = moment.tz('America/Sao_Paulo').format('HH:mm');
datar = moment.tz('America/Sao_Paulo').format('DD/MM');
blackmd.sendMessage(rcrt, {
   document: Buffer.from('oi curioso'),
   caption: `${tempo}, ${pushname} te convidou para entrar no grupo... Clique na imagem, caso queira aceitar.`,
   mimetype: 'application/pdf', // Formato
   fileName: `${horar} ┋ ${datar} 📆`,
   fileLength: 1000000 * ttgp, // Tamanho (250mb)
   contextInfo: {
    externalAdReply: {
      title: groupName,
      body: '',
      mediaType: 1,
      thumbnail: await getBuffer(logoslink.menu), // só pega imagens até 300x300 
      showAdAttribution: true, // Coloca true para enviada como anúncio 
      renderLargerThumbnail: true, // Deixa a imagem grande
      sourceUrl: rlink // Link que aparece quando aperta
    }
  }
})
reply(`Convite de recrutamento enviado com sucesso 🫡`)
}
break

case 'listatm':
if(!isOwner) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./base de funcionamento/TMGP.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = `✧͜͡҉𝙂𝙍𝙐𝙋𝙊𝙎-𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊𝙎
________________________________________\n\n`;
for ( i = 0; i < rgp.length; i++) {
bl += `»${i+1}«
ೈ፝͜͡𝙄𝘿: ${rgp[i].id}
ೈ፝͜͡𝙉𝙊𝙈𝙀: ${rgp[i].infonome}
________________________________________\n\n`
}
bl += `*By:* ${NomeDoBot}`
reply(bl)
break

case 'rgtm':
if(!isOwner) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./base de funcionamento/TMGP.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Mas eu já registrei esse grupo ;-;") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(rgp))
reply("*Grupo registrado com sucesso meu mestre* 🙇🏻‍♂️")
break

case 'tirardatm':
case 'deltm':
if(!isOwner) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./base de funcionamento/TMGP.json"))
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
if(!JSON.stringify(rgp).includes(ustm)) return reply("Não tem como eu tirar da lista um grupo que não está na lista ;-;")
rgp.splice(ustm, 1)
fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(rgp))
reply("*Ok mestre... Este grupo não será mais notificado em transmissões futuras* 🫡")
break

case 'fazertm':
case 'tm':
if(!isOwner) return reply(enviar.msg.donosmt)
var rgp = JSON.parse(fs.readFileSync("./base de funcionamento/TMGP.json"))
if(rgp.length == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n"+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n"+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
/*var MRC_TD = groupMembers.map(i => i.id)*/
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n"+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n"+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n`)
/*black.mentions = MRC_TD*/
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n"+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
blackmd.sendMessage(rgp[i].id, DFC)}
reply(`*Mensagem enviada para todos os ${rgp.length} grupos presentes na lista* 🫡`)
break

case 'fechargp'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(funcgp).includes(from)) {
funcgp.push({id: from, tabela: []})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`*Digite a qualidade de tempo e o tipo de horário.*
s para segundos
m para minutos
h para horas

*Exemplo:* ${prefix+command} 2m _(o grupo será fechado em 2 minutos)`)
tmp = q.slice(q.length - 1, q.length)
nmr = Number(q.split(tmp)[0])
if(!nmr) return reply("Use o contador de forma correta...")
if(tmp.toLowerCase() != "s" && tmp.toLowerCase() != "m" && tmp.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
AB = funcgp.map(i => i.id).indexOf(from)
if(tmp.toLowerCase() == "s") {
reply(`*Chefia que manda... O grupo será fechado em ${q}* 🫡`)
await sleep(nmr*1000)
blackmd.groupSettingUpdate(from, 'announcement')
sendMess(from, `[ ❗ ] O grupo foi fechado após ${q} pelo ADM ${pushname} ❌`)
} else {
if(tmp.toLowerCase() == "m") fcgp = 2
if(tmp.toLowerCase() == "h") fcgp = 3
soma = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
multi2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
multi2 /= soma
jherffeson = Number(multi.length < 8 ? multi + "0".repeat(8 - multi.length) : multi).toFixed(0)
funcgp[AB].tabela.push({idfunc: jherffeson, poder: 1, tipo: fcgp, tempo: nmr+1, save: "00", ordem: q.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
reply(`*Chefia que manda... O grupo será fechado em ${q}* 🫡`)
}
break

case 'abrirgp'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(funcgp).includes(from)) {
funcgp.push({id: from, tabela: []})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q) return reply(`*Digite a qualidade de tempo e o tipo de horário.*
s para segundos
m para minutos
h para horas

*Exemplo:* ${prefix+command} 2m _(o grupo será aberto em 2 minutos)_`)
tmp = q.slice(q.length - 1, q.length)
nmr = Number(q.split(tmp)[0])
if(!nmr) return reply("Use o contador de forma correta...")
if(tmp.toLowerCase() != "s" && tmp.toLowerCase() != "m" && tmp.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
AB = funcgp.map(i => i.id).indexOf(from)
if(tmp.toLowerCase() == "s") {
reply(`*Chefia que manda... O grupo será aberto em ${q}* 🫡`)
await sleep(nmr*1000)
blackmd.groupSettingUpdate(from, 'not_announcement')
sendMess(from, `[ ❕ ] O grupo foi aberto após ${q} pelo ADM ${pushname} ✅`)
} else {
if(tmp.toLowerCase() == "m") abgp = 2
if(tmp.toLowerCase() == "h") abgp = 3
soma = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
multi2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
multi2 /= soma
jherffeson = Number(multi.length < 8 ? multi + "0".repeat(8 - multi.length) : multi).toFixed(0)
funcgp[AB].tabela.push({idfunc: jherffeson, poder: 2, tipo: abgp, tempo: nmr+1, save: "00", ordem: q.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
reply(`*Chefia que manda... O grupo será aberto em ${q}* 🫡`)
}
break

case 'ocgp': case 'openclosegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(funcgp).includes(from)) {
funcgp.push({id: from, tabela: []})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q.includes('/')) return reply(`Separe o tempo de abertura e fechamento com uma barra ( / ), ex:`)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [abrir, fechar] = barra.split('/')
abgpletra = abrir.slice(abrir.length - 1, abrir.length)
nmr1 = Number(abrir.split(abgpletra)[0])
if(abgpletra.toLowerCase() != "s" && abgpletra.toLowerCase() != "m" && abgpletra.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
fcgpletra = fechar.slice(fechar.length - 1, fechar.length)
nmr2 = Number(fechar.split(fcgpletra)[0])
if(fcgpletra.toLowerCase() != "s" && fcgpletra.toLowerCase() != "m" && fcgpletra.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
if(!nmr1 || !nmr2) return reply("Use o contador de forma correta...")
if(abgpletra.toLowerCase() == "m") { abgp = 2 } else if(abgpletra.toLowerCase() == "h") { abgp = 3 } else { abgp = 1 }
if(fcgpletra.toLowerCase() == "m") { fcgp = 2 } else if(fcgpletra.toLowerCase() == "h") { fcgp = 3 } else { fcgp = 1 }
if(fcgp < abgp) return reply("O tempo de fechamento precisa ser maior que o de abertura")
if(fcgp == abgp && nmr2 <= nm1) return reply("O tempo de fechamento precisa ser maior que o de abertura")
if(abgpletra.toLowerCase() == "s") {
  reply(`*Chefia que manda... O grupo será aberto em ${q}* 🫡`)
  await sleep(nmr1*1000)
  blackmd.groupSettingUpdate(from, 'not_announcement')
  sendMess(from, `[ ❕ ] O grupo foi aberto após ${abrir} pelo ADM ${pushname} ✅`)
  if(fcgpletra.toLowerCase() == "s" && Number(nmr2 - nmr1) > 0) {
    await sleep(Number(nmr2 - nmr1)*1000)
    blackmd.groupSettingUpdate(from, 'announcement')
    sendMess(from, `[ ❗ ] O grupo foi fechado após ${fechar} pelo ADM ${pushname} ❌`)
  }
}
AB = funcgp.map(i => i.id).indexOf(from)
a1 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
a2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
a2 /= a1
a3 = Number(a2.length < 8 ? a2 + "0".repeat(8 - a2.length) : a2).toFixed(0)
funcgp[AB].tabela.push({idfunc: a3, poder: 2, tipo: abgp, tempo: nmr1+1, save: "00", ordem: abrir.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
f1 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
f2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
f2 /= f1
f3 = Number(f2.length < 8 ? f2 + "0".repeat(8 - f2.length) : f2).toFixed(0) + 1
funcgp[AB].tabela.push({idfunc: f3, poder: 1, tipo: fcgp, tempo: nmr2+1, save: "00", ordem: fechar.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
reply(`*Chefia que manda... O grupo será aberto em ${abrir} e fechado em ${fechar}* 🫡`)
break

case 'cogp': case 'closeopengp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(funcgp).includes(from)) {
funcgp.push({id: from, tabela: []})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return (enviar.msg.Badmin)
if(!q.includes('/')) return reply(`Separe o tempo de fechamento e abertura com uma barra ( / ), ex:`)
barra = q.replace(' /', '/').replace('/ ', '/').replace(' / ', '/')
var [fechar, abrir] = barra.split('/')
fcgpletra = fechar.slice(fechar.length - 1, fechar.length)
nmr1 = Number(fechar.split(fcgpletra)[0])
if(fcgpletra.toLowerCase() != "s" && fcgpletra.toLowerCase() != "m" && fcgpletra.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
abgpletra = abrir.slice(abrir.length - 1, abrir.length)
nmr2 = Number(abrir.split(abgpletra)[0])
if(!nmr1 || !nmr2) return reply("Use o contador de forma correta...")
if(abgpletra.toLowerCase() != "s" && abgpletra.toLowerCase() != "m" && abgpletra.toLowerCase() != "h") return reply(`Identificadores de tempo:
s para segundos
m para minutos
h para horas`)
if(fcgpletra.toLowerCase() == "m") { fcgp = 2 } else if(fcgpletra.toLowerCase() == "h") { fcgp = 3 } else { fcgp = 1 }
if(abgpletra.toLowerCase() == "m") { abgp = 2 } else if(abgpletra.toLowerCase() == "h") { abgp = 3 } else { abgp = 1 }
if(abgp < fcgp) return reply("O tempo de fechamento precisa ser maior que o de abertura")
if(abgp == fcgp && nmr2 <= nm1) return reply("O tempo de fechamento precisa ser maior que o de abertura")
if(fcgpletra.toLowerCase() == "s") {
  reply(`*Chefia que manda... O grupo será aberto em ${q}* 🫡`)
  await sleep(nmr1*1000)
  blackmd.groupSettingUpdate(from, 'announcement')
  sendMess(from, `[ ❗ ] O grupo foi fechado após ${fechar} pelo ADM ${pushname} ❌`)
  if(abgpletra.toLowerCase() == "s" && Number(nmr2 - nmr1) > 0) {
    await sleep(Number(nmr2 - nmr1)*1000)
    blackmd.groupSettingUpdate(from, 'not_announcement')
    sendMess(from, `[ ❕ ] O grupo foi aberto após ${abrir} pelo ADM ${pushname} ✅`)
  }
}
AB = funcgp.map(i => i.id).indexOf(from)
f1 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
f2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
f2 /= f1
f3 = Number(f2.length < 8 ? f2 + "0".repeat(8 - f2.length) : f2).toFixed(0) + 1
funcgp[AB].tabela.push({idfunc: f3, poder: 1, tipo: fcgp, tempo: nmr2+1, save: "00", ordem: fechar.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
a1 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
a2 = Number(from.replace("-", "").slice(2, 12)) * Number(sender.slice(4, 10))
a2 /= a1
a3 = Number(a2.length < 8 ? a2 + "0".repeat(8 - a2.length) : a2).toFixed(0)
funcgp[AB].tabela.push({idfunc: a3, poder: 2, tipo: abgp, tempo: nmr1+1, save: "00", ordem: abrir.replace(" ", ""), nome: pushname})
fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
reply(`*Chefia que manda... O grupo será fechado em ${abrir} e aberto em ${fechar}* 🫡`)
break

case 'clima':
clime = [ "☁️", "⛅", "⛈️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️"]
setTimeout(() => {reagir(from, clime[Math.floor(Math.random() * clime.length)])}, 300)
if (!q) return reply(`Use ${prefix + command} cidade`)
reply(`Pesquisando clima de ${q} ${clime[Math.floor(Math.random() * clime.length)]}`)
qq = q.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${qq}&appid=1d0bdf08a222f8f2da252ef8921ff4ab&units=metric&lang=pt_br`)
if (clima.error) return reply(clima.error)
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm');
date10 = moment.tz('America/Sao_Paulo').format('DD/MM');
if(isGroup) {
climanmr = groupMembers.length * groupAdmins.length + somembros.length
} else {
climanmr = 0.4
}
jherffeson = `
🌪️ _CLIMA_ 🌪️
*▧⃯⃟📅⃤ Data:* ${date10}
*▧⃯⃟🌎⃤ Cidade:* ${clima.data.name}
*┌───────────────────┐*
*│▧⃯⃟🌡️⃤ Temperatura:* ${clima.data.main.temp.toFixed()}ºC
*│▧⃯⃟🔺⃤ Temp. Max:* ${clima.data.main.temp_max.toFixed()}ºC
*│▧⃯⃟🔻⃤ Temp. Min:* ${clima.data.main.temp_min.toFixed()}ºC
*│▧⃯⃟🌦️⃤ Clima:* ${clima.data.weather[0].description}
*│▧⃯⃟💧⃤ Umidade: ${clima.data.main.humidity}%*
*└───────────────────⃤*
ㅤㅤㅤㅤ〘 ${hora1}h 〙
`
await blackmd.sendMessage(from, {
   document: Buffer.from('oi curioso'),
   caption: jherffeson,
   mimetype: 'application/pdf', // Formato
   fileName: `PREV. DO TEMPO ${clime[Math.floor(Math.random() * clime.length)]}`,
   fileLength: 100000000 * climanmr, // Tamanho (250mb)
   contextInfo: {
    externalAdReply: {
      title: NomeDoBot,
      body: '',
      mediaType: 1,
      thumbnail: await getBuffer(logoslink.menu), // só pega imagens até 300x300 
      showAdAttribution: true, // Coloca true para enviada como anúncio 
      renderLargerThumbnail: true, // Deixa a imagem grande
      sourceUrl: '${barbasite}' // Link que aparece quando aperta
    }
  }
})
break

case 'grupo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(`${prefix+command} a | ${prefix+command} f`)
if(args[0] === 'a') {
if(groupMetadata.announce == false) return reply(`O grupo já está aberto...`)
setTimeout(() => {reagir(from, "✅")}, 300)
reply(`*GRUPO ABERTO COM SUCESSO* ✅`)
blackmd.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
if(groupMetadata.announce == true) return reply(`O grupo já está fechado...`)
setTimeout(() => {reagir(from, "❌")}, 300)
reply(`*GRUPO FECHADO COM SUCESSO* ❌`)
blackmd.groupSettingUpdate(from, 'announcement')
}
break

case 'revelafoto':
case 'rft':
setTimeout(() => {reagir(from, "🕵🏻‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
try {
var rft = await blackmd.profilePictureUrl(from, 'image')
} catch {
var rft = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
blackmd.sendMessage(from, {image: {url: rft}, caption: groupName, thumbnail: null}, {quoted: seloctt})
break

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':
setTimeout(() => {reagir(from, "💬")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
var ppUrl = await blackmd.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
grouplink = await blackmd.groupInviteCode(from)
infogptxt = `💬 *NOME ↴*
『 ${groupName} 』
🧸 *MEMBROS:* »${groupMembers.length}«
⚜️ *ADMs:* »${groupAdmins.length}«

✒️ *DESCRIÇÃO ↴*
${groupDesc} ${isGroupAdmins ? `\n\n🧷 *LINK:* https://chat.whatsapp.com/${grouplink}` : ``}`
reply(`Enviei as informações do grupo no seu PV`)
blackmd.sendMessage(sender, {image: {url: ppUrl}, caption: infogptxt}, {quoted: seloctt})
break

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!menc_prt && !q) return reply("Marque uma imagem, vídeo, áudio ou escreva algo para p bot retornar a mesma mensagem marcando todos os membros do grupo")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? q :pink.caption.replace(new RegExp(prefix+command, "gi"), ``)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), ``).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), ``).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
blackmd.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar': case 'marcar2': case 'marcarwa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
come = command == "marcarwa" ? "wa.me/" : "</> @"
if(somembros.length <= 0) return reply(`${tempo} ${pushname}

_Não foram encontrados membros no grupo_『 ${groupName} 』... _Apenas_ [ *ADMINISTRADORES* ]
_Caso queira marcar os adms, use_ ${prefix}adms`)
txt = q ? q+`\n\n` : ``
txt += somembros.map(i => come+i.split("@")[0]).join("\n")
if(command == "marcar2") sendAudio(from, `./database/audios/marcar/${alerandom(3)+1}.m4a`, `audio/mp4`, seloctt)
await sleep(700)
mention(txt)
break

case 'reviverqr':
if(!isOwner && !isnit) return 
exec("cd base de dados/BLACKMD-QR && rm -rf pre-key* sender* session*")
setTimeout(async () => {
reply("*PODE DEIXAR MESTRE*🎖️\n\n⇒ Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'reviver':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(`Tá afim de banir o número do bot é ?`)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await blackmd.groupParticipantsUpdate(from, [menc_prt], "add" )
reply(`Usuário revivido com sucesso... 😰`)
break

case 'add':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(`Tá afim de banir o número do bot é ?`)
if(!q) return reply("KD o número do indivíduo ?")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
usu = q + "@s.whatsapp.net"
blackmd.groupParticipantsUpdate(from, [usu], "add" )
reply("✅ Usuário adicionado ao grupo com sucesso...")
} catch {
reply("Erro 404")
}
break

case 'addgp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`Hmmm`)
if(!Number(q)) return reply("Apenas números")
reagir(from, "🙂")
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
blackmd.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "add" )
setTimeout(() => {
blackmd.groupParticipantsUpdate(ingfoo[q].id, [nmrdn], "promote")
blackmd.sendMessage(ingfoo[q].id, {text: "*Bem vindo meu senhor* 🙇🏻‍♂️"})
}, 5000)
} catch(erro) {
reply(String(erro))
}
break

case 'sairgp':
case 'sair':
if(isGroup && !isOwner && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
blackmd.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isOwner && !isnit) return reply(enviar.msg.donosmt)
mentions(`Ok meu senhor @${sender.split("@")[0]}, agora você é um ADM do grupo 🙇🏻‍♂️`, [sender], true)
blackmd.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
setTimeout(() => {reagir(from, "🥲")}, 300)
if(!isOwner && !isnit) return reply(enviar.msg.donosmt)
mentions(`Pronto mestre @${sender.split("@")[0]}, rebaixei o senhor para membro comum no grupo ${groupName} 🥹`, [sender], true)
blackmd.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
case 'adv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!menc_os2) return reply("Marque o alvo que você deseja advertir")
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot...");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot");
if(groupAdmins.includes(menc_os2)) return reply("Não pode advertir ADMS..");
AB = ADVT.map(i => i.id).indexOf(menc_os2)
if(AB >= 0) {
  if(ADVT[AB].adv < 2) {
    ADVT[AB].adv += 1
    setGp(dataGp)
    return mention(`[❗] Atenção @${menc_os2.split("@")[0]}, você já foi advertido ${ADVT[AB].adv} vezes... Na próxima é ban ❌`)
  } else {
    mention(`Este foi seu aviso final @${menc_os2.split(`@`)[0]}... Por não atentar as suas advertências, te darei um ban de presente 🥰`)
    ADVT.splice(AB, 1)
    setGp(dataGp)
    await sleep(3000)
    return remover(from, menc_os2)
  }
} else {
  ADVT.push({id: menc_os2, adv: 1})
  setGp(dataGp)
  return mention(`[❗] Atenção @${menc_os2.split("@")[0]}, você foi advertido... Tome cuidado, pois 3 adv resultarão em banimento ❌`)
}
break

case 'rmadv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!marc_tds) return reply("KD o alvo que você deseja retirar a advertência")
AB = ADVT.map(i => i.id).indexOf(marc_tds)
if(AB < 0) return reply("Não há advertências neste usuário")
ADVT.splice(AB, 1)
setGp(dataGp)
reply("Advertência retirada com sucesso...")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
blackmd.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
blackmd.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
if(!isGroupAdmins) return reply(enviar.msg.adm)
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
blackmd.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'wlcm':
if(!isGroupAdmins) return reply(enviar.msg.adm)
reply(`▁▂▃▄▅▆▇█ W̷E̷L̷C̷O̷M̷E̷ █▇▆▅▄▃▂▁
👻 ⏤͟͟͞͞ ꦿ𝙴𝚗𝚝𝚛𝚘𝚞 𝙹á 𝙲𝚑𝚎𝚐𝚊 𝚂𝚎 𝙰𝚙𝚛𝚎𝚜𝚎𝚗𝚝𝚊𝚗𝚍𝚘 𝙰í #numerodele#
📸⃤ 𝙁𝙊𝙏𝙊
✍🏼⃤ 𝙉𝙊𝙈𝙀
🧸⃤ 𝙄𝘿𝘼𝘿𝙀
🏘️⃤ 𝘾𝙄𝘿𝘼𝘿𝙀
💞⃤ 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝙈𝙀𝙉𝙏𝙊

▧⃯⃟⚠️ ݈݇─ 𝙰𝚝𝚎𝚗çã𝚘 𝙰𝚜 𝚁𝚎𝚐𝚛𝚊𝚜 𝙽𝚊 𝙱𝚒𝚘 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 𝙾𝚞 𝚅𝚊𝚒 𝙲𝚘𝚗𝚑𝚎𝚌𝚎𝚛 𝙾 𝙵𝚊𝚖𝚘𝚜𝚘 🤭`)
break

case 'sairdogp':
if(!isOwner)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
blackmd.sendMessage(ingfoo[q].id, {text: "Meu dono mandou eu meter o pé... Adios 🤧"}) 
setTimeout(() => {
blackmd.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply(`🙇🏻‍♂️ *Pronto meu dono, já saí do grupo que você mandou... Caso tenha algum erro, use o comando* ${prefix}listagp`)
break

case 'joingp'://by jherffeson
if(!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
if(!JSON.stringify(bcgp).includes("mensagem")) {
  bcgp.push({tipo: "mensagem", msg: []})
  fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
}
if(!JSON.stringify(bcgp).includes("grupos")) {
  bcgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
}
var [linkM4, msgM4] = q.split('|')
if(!linkM4) return reply('Insira um link de convite ao lado do comando.')
if(!msgM4) return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix+command} link do grupo/mensagem para enviar`)
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
if(!linkM4.includes('chat.whatsapp.com/')) return reply('Ops, verifique o link que você inseriu.')
link = linkM4.split('app.com/')[1]
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
AC = bcgp.map(i => i.tipo).indexOf("grupos")
try {
for(i = 0; i < ingfoo.length; i++) {
  bcgp[AC].gps.push({groupId: ingfoo[i].id})
  fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
}
bcgp[AB].msg.push({txt: msgM4, cobrado: false})
fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
blackmd.groupAcceptInvite(`${link}`)
return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber uma mensagem no PV de cada um dos seus membros`)
} catch(erro) {
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
break

case 'delgp'://by jherffeson
if(!isOwner) return reply("Só meu dono")
if(bcgp.length <= 0) return reply(`Não há mensagens salvas...`)
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
jherffeson = bcgp[AB].msg
if(jherffeson.length <= 0) return reply(`Não há mensagens salvas...`)
if(!Number(args[0]) || Number(args[0]) < 1 || Number(args[0]) > jherffeson.length) return reply("Olhe no comando "+prefix+"gplist e escolha o número correspondente a mensagem para deletar")
BC = Number(args[0]) - 1
jherffeson.splice(BC, 1)
fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
reply("Mensagem da lista deletada com sucesso ✅")
break

case 'gplist'://by jherffeson
if(!isOwner) return reply("Só meu dono")
if(bcgp.length <= 0) return reply(`Não há mensagens salvas...`)
AB = bcgp.map(i => i.tipo).indexOf("mensagem")
if(bcgp[AB].msg.length <= 0) return reply(`Não há mensagens salvas...`)
resp = `*Mensagens salvas para envio:*`
jherffeson = bcgp[AB].msg
for(i = 0; i < jherffeson.length; i++) {
  resp += `\n• ${i+1} -> ${jherffeson[i].txt}`
}
reply(resp)
break

case 'listagp':
setTimeout(() => {reagir(from, "🎲")}, 300)
if(!isOwner) return reply(enviar.msg.donosmt)
var allGroups = Object.entries((await blackmd.groupFetchAllParticipating())).slice(0).map(entry => entry[1]).map(v => v).sort((a, b) => (a[0] < b.length))
caixa = []
for(i of allGroups) {
  try {  getlink = `https://chat.whatsapp.com/${(await blackmd.groupInviteCode(i.id))}`
  } catch { getlink = `"link indisponível"` }
  nmr = 0
  for(p of i.participants) {
    if(p.admin != null) nmr += 1
  }
  gp = 
`»${allGroups.map(a => a.id).indexOf(i.id) + 1}«
♟ *Nome:* ${i.subject}
🎮 *Criador/a do grupo:* ${i?.subjectOwner || i?.owner ? getname(i?.owner || i?.subjectOwner).replace(`usuário`, `wa.me/${(i?.subjectOwner || i?.owner).split(`@`)[0]}`) : `"não listado"`}
🕹 *Total de admins:* ${nmr}
🎱 *Total de membros:* ${i.participants.length - nmr} ${isPrivateChat ? `
🕶 *ID do grupo:* ${i.id}
⚙ *Link do grupo:* ${getlink}` : ``}`
caixa.push(gp)
}
if(caixa.length < 0) return reply(`Não há grupos salvos...`)
reply(`🎭 *Exibindo ${caixa.length > 1 ? `todos os ${caixa.length} grupos` : `o único grupo`} da lista ↴*
${caixa.join(`\n\n`)}`)
break

case 'iddogp':
setTimeout(() => {reagir(from, "🧵")}, 300)
if(!isOwner)return reply(enviar.msg.donosmt)
var allGroups = Object.entries((await blackmd.groupFetchAllParticipating())).slice(0).map(entry => entry[1]).map(v => v).sort((a, b) => (a[0] < b.length))
if(Number(args[0]) <= 0 || Number(args[0]) > allGroups.length) return reply(`Olhe no comando ${prefix}listagp e escolha o número correspondente ao grupo em que você deseja puxar o id...
Ex: ${prefix+command} 2`)
grupo = allGroups[Number(args[0]) - 1]
reply(`_ID do grupo ${grupo.subject} ↴_`)
await sleep(700)
sendMess(from, grupo.id)
break

case 'linkdogp':
setTimeout(() => {reagir(from, "🧶")}, 300)
if(!isOwner)return reply(enviar.msg.donosmt)
var allGroups = Object.entries((await blackmd.groupFetchAllParticipating())).slice(0).map(entry => entry[1]).map(v => v).sort((a, b) => (a[0] < b.length))
if(Number(args[0]) <= 0 || Number(args[0]) > allGroups.length) return reply(`Olhe no comando ${prefix}listagp e escolha o número correspondente ao grupo em que você deseja puxar o link...
Ex: ${prefix+command} 2`)
grupo = allGroups[Number(args[0]) - 1]
try { getlink = `https://chat.whatsapp.com/${(await blackmd.groupInviteCode(grupo.id))}`
} catch { return reply(`Não foi possível puxar o link do grupo... É possível que o bot não seja adm neste grupo 😥`) }
reply(`_Buscando grupo_ 🔎`)
await sleep(700)
reply(`_Link do grupo ${grupo.subject} ↴_
https://chat.whatsapp.com/${getlink}`)
break

case 'limpardb':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = countMessage.map(i => i.groupId).indexOf(from)
total = countMessage[AB].participants.length
caixa = []
for(i = 0; i < countMessage[AB].participants.length; i++) {
  if(isJsonIncludes(groupMembers, countMessage[AB].participants[i].id)) {
    caixa.push(countMessage[AB].participants[i])
  }
}
pack = total - caixa.length
if(pack <= 0) return reply("*Todos os ghosts da data base já foram deletados...*")
countMessage[AB].participants = caixa
saveJSON(countMessage, "./base de dados/countmsg.json")
reply(`${pack} números foram deletados da pasta com sucesso ✅`)
break

case 'addglobalmessage': case 'addgbmsg':
if(!isOwner) return reply(enviar.msg.donosmt)
var [h, m1] = q.replace("/ ", "/").replace(" /", "/").replace(" / ", "/").split("/")
if(!h || !m1) return reply(`Retone após o comando o horário e a mensagem que você quer enviar quando o sistema estiver ativado, ex:
${prefix+command} 18:00/se a vida te der um limão, desconfie, pq nada é de graça`)
t = h.split(":")[0]
if(Number(t) < 0 || Number(t) > 24 || t.includes('.')) return reply("Formato de hora inválido... Só existem horas entre 00 e 24 🤡")
c = h.includes(":") ? `` : `:00`
p = h + c
x = p.split(":")[1]
if(Number(x) < 0 || Number(x) > 60 || x.includes('.')) return reply("Formato de hora inválido... Só minutos entre 00 e 60 🤡")
horacerta = `${Number(p.split(":")[0]) >= 10 ? Number(p.split(":")[0]) : `0${Number(p.split(":")[0])}`}:${Number(p.split(":")[1]) >= 10 ? Number(p.split(":")[1]) : `0${Number(p.split(":")[1])}`}`
if(isJsonIncludes(gbmsg[1].msg, horacerta)) {
AB = gbmsg[1].msg.map(i => i.time).indexOf(horacerta)
gbmsg[1].msg.splice(AB, 1)
saveJSON(gbmsg, "./base de dados/gbmsg.json")
}
faq = m1
gbmsg[1].msg.push({time: horacerta, frase: faq, save: "00"})
saveJSON(gbmsg, "./base de dados/gbmsg.json")
reply(`A mensagem "${faq}" foi definida com sucesso às ${horacerta}h... Para ativar no grupo, use ${prefix}gbmsg`)
break

case 'removeglobalmessage': case 'rmgbmsg':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`Para melhor precisão, retorne após o comando, o horário que você deseja deletar... Caso esteja em dúvida, olhe no comando ${prefix}lista-gbmsg todos os horários registrados.`)
t = q.split(":")[0]
if(Number(t) < 0 || Number(t) > 24 || t.includes('.')) return reply("Formato de hora inválido... Só existem horas entre 00 e 24 🤡")
c = q.includes(":") ? `` : `:00`
p = q + c
x = p.split(":")[1]
if(Number(x) < 0 || Number(x) > 60 || x.includes('.')) return reply("Formato de hora inválido... Só minutos entre 00 e 60 🤡")
horacerta = `${Number(p.split(":")[0]) >= 10 ? Number(p.split(":")[0]) : `0${Number(p.split(":")[0])}`}:${Number(p.split(":")[1]) >= 10 ? Number(p.split(":")[1]) : `0${Number(p.split(":")[1])}`}`
AB = gbmsg[1].msg.map(i => i.time).indexOf(horacerta)
if(AB < 0) return reply("Horário não registrado")
gbmsg[1].msg.splice(AB, 1)
saveJSON(gbmsg, "./base de dados/gbmsg.json")
reply("Horário deletado com sucesso ✅")
break

case 'lista-globalmessage': case 'lista-gbmsg':
if(!isOwner) return reply(enviar.msg.donosmt)
if(gbmsg[1].msg.length <= 0) return reply("Não há horários definidos...")
reply(`📨 *Lista de mensagens e horários..*
📖 *Total:* ${gbmsg[1].msg.length}

${gbmsg[1].msg.map(i => `• *Horário:* ${i.time}h
• *Mensagem:* ${i.frase}`).join("\n-\n")}`)
break

case 'globalmessage': case 'gbmsg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isJsonIncludes(gbmsg[0].gp, from)) {
  gbmsg[0].gp.push({id: from})
  saveJSON(gbmsg, "./base de dados/gbmsg.json")
  return reply(`*Ativada função de mensagens programadas neste grupo com sucesso* ✅`)
} else {
  AB = gbmsg[0].gp.map(i => i.id).indexOf(from)
  gbmsg[0].gp.splice(AB, 1)
  saveJSON(gbmsg, "./base de dados/gbmsg.json")
  return reply(`Sucesso, você desativou as mensagens programadas deste grupo...`)
}
break

case 'atividade':
case 'atividades':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage[AB].participants
if(grupo.length <= 0) return reply(`Não há membros suficientes no grupo...`)
txt = `🥏 *_Atividade dos membros deste grupo:_*
${grupo.map(g => `*Usuário:* @${g.id.split("@")[0]}
*Menssagens:* ${g.mensagens}
*Comandos:* ${g.comandos}`).join(`\n\n`)}`
mention(txt)
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(isNaN(q)) return reply(`Retorne após o comando a quantidade de mensagens que você quer puxar...`)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage[AB].participants
caixa = []
for(i of grupo) {
  if(i.mensagens <= Number(q)) caixa.push(i.id)
}
if(caixa.length == 0) return reply(`Não há pessoas com ${q} msg..`)
txt = `_Usuários com ${q.trim()} msg ou menos..._
╔══════════════════╣
${caixa.map(c => `╟ »${caixa.indexOf(c) + 1}« @${c.split("@")[0]}`).join(`
║
`)}
╚═════╣ ${NomeDoBot}`
mention(txt)
break

case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isOwner) return reply(enviar.msg.donosmt)
if(isNaN(q)) return reply(`Retorne após o comando a quantidade de mensagens que você quer puxar...`)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage[AB].participants
caixa = []
for(i of grupo) {
  if(i.mensagens <= Number(q)) caixa.push(i.id)
}
if(caixa.length == 0) return reply(`Não há pessoas com ${q} msg..`)
for(c of caixa) {
await sleep(1500)
if(!groupAdmins.includes(c)) {remover(from, i)
} else {blackmd.sendMessage(from, {text: `@${c.split("@")[0]} foi poupado do ban por ser admin...`, mentions: [c]})}
}
break

case 'verificarnmr':
if(!isOwner) return reply(enviar.msg.donosmt)
const [result] = await blackmd.onWhatsApp(q)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`-> ${sla} Número inserido é existente no WhatsApp.\n\ncom o id:`)
setTimeout(() => {
blackmd.sendMessage(from, {text: result.jid})
}, 1100)
}
break

case 'wame'://by jherffeson
barra = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [nmr, msg] = barra.split('|')
if(!nmr) return reply("KD o número de wpp?")
me = nmr.includes('@') ? nmr.split('@')[1] : nmr.toLowerCase() == "me" ? sender.split('@')[0] : nmr.toLowerCase() == "bot" ? botNumber.split('@')[0] : nmr.toLowerCase() == "dono" ? nmrdn.split('@')[0] : nmr
txt = `wa.me/`+me.replace(new RegExp("[()+-/ +/]", "gi"), "")
if(msg) txt += `?text=`+encodeURI(msg)
reply(txt)
break

case 'rastreamento': case 'rastrear':
if(!isGroup) return reply(enivar.msg.grupo)
if(!q) return reply(`Coloque após o comando o código de rastreamento dos correios, para o bot pesquisar e rastrear o seu produto encomendado`)
ABC = await fetchJson(`${barbasite}/api/rastreio?code=${q.toUpperCase()}&apikey=${API_KEY_BARBA}`)
if(ABC.resultado.pathObject.length <= 0) return reply(`Código não encontrado ou inexistente ❌`)
reply(ABC.resultado.pathObject)
break

case 'correio':
setTimeout(() => {reagir(from, "✉️")}, 300)
var [txt1, txt2] = q.split('/')
if(!txt1) return reply(`KD o número da pessoa ?`)
if(!txt2) return reply(`Separe o número da pessoa e a mensagem com uma /

Ex: ${sender.split('@')[0]}/oi vida`)
if(txt1.includes("@")) return reply(`Não inclua @ no número...`)
msg_ = `*Correio enviado...* ✉️

*Para mais dúvidas, digite:* ${prefix}infocorreio`
reply(msg_)
bla = 
`╔══════════════════╣
╟ 𝙲𝚘𝚛𝚛𝚎𝚒𝚘 𝙰𝚗ô𝚗𝚒𝚖𝚘 🤫
║
╩ㅤ⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚖: ${txt2}
________________________________________

${NomeDoBot} ✉️`
blackmd.sendMessage(txt1.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`, {text: bla})
break

case 'correio2':
setTimeout(() => {reagir(from, "✉️")}, 300)
var [txt1, txt2] = q.split('/')
if(!txt1) return reply(`KD o número da pessoa ?`)
if(!txt2) return reply(`Separe o número da pessoa e a mensagem com uma /

Ex: ${sender.split('@')[0]}/oi vida`)
if(!txt1.startsWith("55") && !txt1.startsWith("+55")) return reply(`Não se esqueça do 55 na frente`)
if(txt1.includes("@")) return reply(`Não inclua @ no número...`)
msg_ = `*Correio enviado...* ✉️

*Para mais dúvidas, digite:* ${prefix}infocorreio`
reply(msg_)
bla = 
`╔══════════════════╣
╟ ${pushname} Te Enviou Uma Msg
║
╩ㅤ⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚖: ${txt2}
________________________________________

ೈ፝͜͡✉️ wa.me/${sender.split('@')[0]}`
blackmd.sendMessage(txt1.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`, {text: bla})
break

case 'infocorreio':
setTimeout(() => {reagir(from, "📩")}, 300)
infocarta = `*${tempo} ${pushname}, há duas formas de correio:*

[ ${prefix}correio ]
A primeira forma de correio irá enviar uma mensagem para o remetente de forma totalmente anônima...

[ ${prefix}correio2 ]
Já a segunda forma de correio, irá pôr o seu número na carta... Isto é, caso você queira se identificar, ou mesmo, para o remetente entrar em contato com você.

-----------------------------------------------------------

*Em ambas as formas, é necessário pôr o número de forma correta, na seguinte ordem:*
-> Comando+55+DDD+número do indivíduo+/+sua mensagem para ele

_*Nota:* Não pode conter o 9 na frente do número_
❌ 9xxxx-xxxx
✅ xxxx-xxxx
_(Não é necessário pôr o "+", nem o "-")_

*Exemplo:*
-> ${prefix}correio 559181695945/oi gstz
-> ${prefix}correio2 559181695945/salve meu pit

*Bjs de luz, Estevão Ferreira* ✨`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/87aeadc7997d9eb91bfcb.jpg`}, caption: infocarta}, {quoted: seloctt})
break

case 'msgpv':
reagir(from, "✅")
if(!isOwner) return reply("A vontade de banir pessoas assim não é pouca... 😒")
if(!isMsgPV) {
obrigadoEXT.msgpv = true
setObg(obrigadoEXT)
reply(`✔️ A mensagem no PV foi ativada para todos os comandos que necessitem dela 〰️`)
} else {
obrigadoEXT.msgpv = false
setObg(obrigadoEXT)
reply(`✖️ A mensagem no PV foi desativada... Alguns comandos não enviarão avisos no PV, mas continuarão funcionando ➿`)
}
break

case 'nome-bot':
if(!isOwner  && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`Ok ${NickDono}, agora eu me chamo ${q}`)
break

case 'nick-dono':
if(!isOwner  && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`O Nick Do Dono foi alterado para:
> ${q}`)
break

case 'numero-dono':
if(!isOwner && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o número de WhatsApp")
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`Ok ${pushname}, transferência de dono feita para wa.me/${q} com sucesso...`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono[0] = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
break

case 'fotomenu':
case 'fundomenu':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, tem muitos comandos usando essa foto... Tô trocando aqui`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo = res
fs.writeFileSync('./base de dados/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu...`)
}
break

case 'logomenu':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, tem muitos comandos usando essa foto... Tô trocando aqui`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.menu = res
fs.writeFileSync('./base de dados/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu principal foi alterada com sucesso para: ${logoslink.menu}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto do menu principal...`)
}
break

case 'logoping': case 'fundoping':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`Calma ae, já tô trocando...`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.ping = res
fs.writeFileSync('./base de dados/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do ping foi alterada com sucesso para: ${logoslink.ping}`)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto do ping...`)
}
break

case 'prefixo-bot':
case 'setprefixs':
case 'setprefixo':
case 'setprefix':
case 'novoprefixo':
if(args.length < 1) return
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = args[0]
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, 2))
reply(`Novo prefixo definido ( ${args[0]} )`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blackmd.groupUpdateSubject(from, `${body.slice(9)}`)
blackmd.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: seloctt})
break

case 'fotobot':
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
blackmd.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if(!isOwner  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Marque o @ do usuário para roubar a foto do perfil dele, para a do bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await blackmd.profilePictureUrl(id)
buffer = await getBuffer(pp)
blackmd.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'envmsg':
if(!isOwner && !isnit) return
var [tx1, tx2] = q.split("/")
blackmd.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply('Cade o texto?')
for(i of groupMembers) {
await sleep(1000)
var txt = `*${tempo.toUpperCase()}* ${getname(i.id)}

-> ${q}`
sendMess(i.id, txt)
}
break

case 'setpgp': case 'setcofc':
if(!isOwner) return reply(enviar.msg.donosmt)
if(command == "setpgp") {
obrigadoEXT.idprivategp = from
setObg(obrigadoEXT)
reply("Grupo privado atualizado ✅")
} else {
obrigadoEXT.idchatofc = from
setObg(obrigadoEXT)
reply("Chat oficial atualizado ✅")
}
break

case 'attdate':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q || Number(q) < 1 || Number(q) > 7 || q.includes('.')) return reply(`O calendário está desatualizado? Rlx que é bem fácil de corrigir... Retorne após o comando um número de 1-7 referente ao dia da semana atual 😀
1 para domingo
2 para segunda-feira
3 para terça-feira
4 para quarta-feira
5 para quinta-feira
6 para sexta-feira
7 para sábado`)
obrigadoEXT.semana = Number(q)
setObg(obrigadoEXT)
reply(`O calendário semanal foi atualizado com sucesso às ${realtime()} ✅`)
break

case 'dono1':
case 'defcon5':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = "*『 DEFCON 5 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 1\n🤍 *Status de segurança:* ```Seguro```"
} else {
resp = "*『 DEFCON 5 DESATIVADO 』*"
}
obrigadoEXT.dono1 = q.trim()
dono1 = obrigadoEXT.dono1
setObg(obrigadoEXT)
reply(resp)
break

case 'dono2':
case 'defcon4':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = "*『 DEFCON 4 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 2\n💚 *Status de segurança:* ```Estável```"
} else {
resp = "*『 DEFCON 4 DESATIVADO 』*"
}
obrigadoEXT.dono2 = q.trim()
dono2 = obrigadoEXT.dono2
setObg(obrigadoEXT)
reply(resp)
break

case 'dono3':
case 'defcon3':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = "*『 DEFCON 3 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 3\n💛 *Status de segurança:* ```Alarmante```"
} else {
resp = "*『 DEFCON 3 DESATIVADO 』*"
}
obrigadoEXT.dono3 = q.trim()
dono3 = obrigadoEXT.dono3
setObg(obrigadoEXT)
reply(resp)
break

case 'dono4':
case 'defcon2':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = "*『 DEFCON 2 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 4\n❤️ *Status de segurança:* ```Um passo da guerra```"
} else {
resp = "*『 DEFCON 2 DESATIVADO 』*"
}
obrigadoEXT.dono4 = q.trim()
dono4 = obrigadoEXT.dono4
setObg(obrigadoEXT)
reply(resp)
break

case 'dono5':
case 'defcon1':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = "*『 DEFCON 1 ATIVADO 』* \n\n⚠️ *Nível de segurança:* 5\n🖤 *Status de segurança:* ```Guerra nuclear```"
} else {
resp = "*『 DEFCON 1 DESATIVADO 』*"
}
obrigadoEXT.dono5 = q.trim()
dono5 = obrigadoEXT.dono5
setObg(obrigadoEXT)
reply(resp)
break

case 'dono6':
case 'defcon':
if(args.length < 1) return
if(!sender.includes(nmrdn) && !sender.includes(botNumber) && !ischyt) return reply(enviar.msg.donosmt)
if(q.length > 8) {
resp = `⚠️ *Ativação de DEFCONs confirmada...*
🫡 *Bem vindo (a)* wa.me/${q}`
} else {
resp = `⚠️ *Desativação de DEFCONs confirmada...*`
}
obrigadoEXT.dono6 = q.trim()
dono6 = obrigadoEXT.dono6
setObg(obrigadoEXT)
reply(resp)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
setTimeout(() => {reagir(from, "✅")}, 300)
donos = `👑 𝙼𝙴𝚂𝚃𝚁𝙴 𝚂𝚄𝙿𝚁𝙴𝙼𝙾 ↴
wa.me/${numerodono_ofc}

× DΞFᏟϴΝ 5⇒ ${dono1}
× DΞFᏟϴΝ 4⇒ ${dono2}
× DΞFᏟϴΝ 3⇒ ${dono3}
× DΞFᏟϴΝ 2⇒ ${dono4}
× DΞFᏟϴΝ 1⇒ ${dono5}
× LÍDΞR SUPΞRIϴR ↴
wa.me/${dono6}`
ttgp = isGroup ? groupMembers.length * groupAdmins.length + somembros.length : 6
horar = moment.tz('America/Sao_Paulo').format('HH:mm');
datar = moment.tz('America/Sao_Paulo').format('DD/MM');
sendUrlDoc(from, donos, 'application/pdf', `${horar}H ┋ ${datar} 📆`, ttgp, NomeDoBot, '', 'https://telegra.ph/file/adad9b9a3606857e380be.jpg', `https://instagram.com/m4thxyz_`, seloctt)
break

case 'adms':
case 'admins':
case 'chamaradms':
setTimeout(() => {reagir(from, react2)}, 300)
blackmd.sendMessage(from, {text: `⚠️ *CHAMANDO TODOS OS ADMINS...*
${pushname} *solicita a vossa presença* 👀${q ? `\n\n*-> Recado:* _"${q}"_` : ``}`, mentions: groupAdmins}, {quoted: info})
break

case 'cases':
if(!isOwner) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if(caseNames) {
return caseNames.map((caseName, index) => `• ${index + 1} -> ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
blackmd.sendMessage(from, { text: listCases() }, { quoted: seloctt });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'totalcmd':
try {
tc = "./database/data/totalcmd.json"
totalcmd = JSON.parse(fs.readFileSync(tc))
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
cont = caseNames.length
totalcmd[0].totalcmd = cont
saveJSON(totalcmd, tc)
reply(`🎲 O bot possui atualmente ${cont} comandos ヅ`)
} catch { reply("[ ❗ ] Erro ao obter o total de comandos ❌") }
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !isOwner) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./base de funcionamento/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./base de funcionamento/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./base de funcionamento/tabela/tabela-${from}.json`)); 
blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
mention(blity)
break

case 'infovip':
reply(`Olá ${pushname}, ${tempo.toLowerCase()}... Já se perguntou como se tornar vip e ter acesso aí comandos do menu vip exclusivamente pra vc ??

Bom, para tal façanha, é necessário pagar um valor de R$ 6,00 que será referente a 30 dias de VIP. Você terá os seguintes direitos:
• uso dos comandos do ${prefix}menuvip
• uso do PV do bot quando o mesmo estiver bloqueado
• alguns poderes de ADM
• uso do gpt no PV
• ${prefix}docfake em qualquer canto
• fazer figurinha sem legenda
• uso do menu +18 e seus comandos no PV
• ganho de moedas no RPG

Caso se interessar, favor chamar meu dono no comando ${prefix}dono`)
break

case 'ausente': case 'afk':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOnlyVip(sender)) return reply(enviar.msg.vip)
if(!q) return reply("Digite após o comando o seu motivo de ausência")
if(JSON.stringify(ausentes).includes(sender)) {
AB = ausentes.map(i => i.id).indexOf(sender)
ausentes.splice(AB, 1)
fs.writeFileSync('./base de dados/ausentes.json', JSON.stringify(ausentes))
}
await sleep(500)
ausentes.push({
id: sender,
nome: pushname,
dono: isOwner ? true : false,
motivo: q,
data: moment.tz('America/Sao_Paulo').format('DD/MM'),
hora: moment.tz('America/Sao_Paulo').format('HH:mm')
})
fs.writeFileSync('./base de dados/ausentes.json', JSON.stringify(ausentes))
reply(`Ok ${isOwner ? 'mestre' : 'oh grande ser'}, a partir de agora ${isOwner ? 'o senhor' : 'você'} está "${q}" 🙇🏻‍♂️`)
break

case 'voltei': case 'on': case 'ativo': case 'acordei':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOnlyVip(sender)) return reply(enviar.msg.vip)
if(!JSON.stringify(ausentes).includes(sender)) return reply("Não há registros de ausência de sua parte")
AB = ausentes.map(i => i.id).indexOf(sender)
ausentes.splice(AB, 1)
fs.writeFileSync('./base de dados/ausentes.json', JSON.stringify(ausentes))
reply("Bem vindo de volta 🙇🏻‍♂️")
break

case 'servip':
if(!isOwner && !isSesc) return reply(enviar.msg.donosmt)
if(JSON.stringify(vip).includes(sender)) return reply(`Mas vc já é VIP meu mestre 🙇🏻‍♂️`)
vip.push({id: sender, dias: 0, save: 0, infinito: true})
fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip, null, 2))
mention(`*Prontinho @${sender.split('@')[0]}... Agora você se tornou [ VIP ] meu mestre* 😍`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = await blackmd.sendMessage(from, reactionMessage)
break

case 'addvip'://by jherffeson
reagir(from, "🤑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [nmr, tempo50] = barra.split('/')
if(!nmr || !tempo50) return reply(`Coloque o número do indivíduo e uma barra logo depois (/), após isso, coloque a quantidade de dias que este será VIP...
Ex: ${prefix+command} ${nmrdn.split('@')[0]}/30`)
jherffeson = identArroba(nmr)
mega = Number(tempo50) > 0 ? false : true
dvip = moment.tz('America/Sao_Paulo').format('DD')
bla = JSON.stringify(vip).includes(jherffeson)
if(bla) {
AB = vip.map(i => i.id).indexOf(jherffeson)
if(vip[AB].infinito == true) return reply(`Não será possível adicionar dias ao VIP deste usuário, pois o mesmo possui o _"INFINITY VIP"_`)
vip[AB].total = Number(vip[AB].dias) + Number(tempo50)
vip[AB].dias += Number(tempo50)
fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip))
blackmd.sendMessage(from, {text: `👑 ${tempo50} dia${Number(tempo50) > 1 ? `s` : ``} fo${Number(tempo50) > 1 ? `ram` : `i`} adicionado${Number(tempo50) > 1 ? `s` : ``} ao usuário @${jherffeson.split("@")[0]}`, mentions: [jherffeson]}, {quoted: seloctt})
} else {
vip.push({id: jherffeson, dias: Number(tempo50), total: Number(tempo50), save: Number(dvip), infinito: mega, puxadas: false})
fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip, null, 2))
blackmd.sendMessage(from, {text: `${Number(tempo50) > 0 ? `👑 @${jherffeson.split("@")[0]} foi adicionado à lista VIP com sucesso...` : `👑 @${jherffeson.split("@")[0]} foi agraciado com o benefício do VIP infinito...`}`, mentions: [jherffeson]}, {quoted: seloctt})
}
break

case 'delvip'://by jherffeson
reagir(from, "😑")
if(!isOwner) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário que deseja tirar da lista VIP 🤷🏻‍♂️`)
if(!JSON.stringify(vip).includes(marc_tds)) return reply("*Este número não está incluso na lista premium..*")
AB = vip.map(i => i.id).indexOf(marc_tds)
vip.splice(AB, 1)
fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip, null, 2))
await sleep(500)
mention(`@${marc_tds.split("@")[0]} foi retirado da lista VIP... 🥲`)
break

case 'addvipgp'://by jherffeson
reagir(from, "🤑")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`Coloque a quantidade de dias que será adicionado o VIP aos membros desse grupo
Ex: ${prefix+command} 30`)
dvip = moment.tz('America/Sao_Paulo').format('DD')
if(JSON.stringify(vipgp).includes(from)) {
AB = vipgp.map(i => i.id).indexOf(from)
if(vipgp[AB].infinito == true) return reply(`Não será possível adicionar dias ao VIP deste grupo, pois o mesmo possui o _"INFINITY VIP"_`)
i = Number(args[0])
if(!i) return reply(args[0]+" não é número...")
if(i <= 0) return reply("Retorne um número maior que zero...")
AB = vipgp.map(i => i.id).indexOf(from)
vipgp[AB].dias += i
fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp))
reply(`+${i} dia${i > 1 ? "s" : ""} adicionado${i > 1 ? "s" : ""} ao VIP deste grupo 👑`)
} else {
mega = Number(args[0]) > 0 ? false : true
vipgp.push({id: from, dias: Number(args[0]) > 0 ? Number(args[0]) : 0, save: Number(dvip), infinito: mega})
fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp, null, 2))
reply(`O grupo ${groupName} acaba de se tornar VIP ${Number(args[0]) > 0 ? ` por ${Number(args[0])} dia${Number(args[0]) > 1 ? "s" : ""}` : " infinitamente"} 👑`)
}
break

case 'delvipgp'://by jherffeson
reagir(from, "😑")
if(!isOwner) return reply(enviar.msg.donosmt)
matty = q.length > 5 ? q : from
if(!JSON.stringify(vipgp).includes(matty)) return reply("*Este grupo não está incluso na lista premium..*")
AB = vipgp.map(i => i.id).indexOf(matty)
vipgp.splice(AB, 1)
fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp, null, 2))
reply(`Coroa VIP retirada deste grupo 🥲`)
break

case 'limpar2':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clearcmd = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
blackmd.sendMessage(from, {text: clearcmd}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'limpar':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
️`
clear2 = `ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
reply(`*GRUPO FECHADO PARA LIMPEZA* 🗑️`)
blackmd.groupSettingUpdate(from, 'announcement')
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 1000)//msg 1
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 4000)//msg 2
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 7000)//msg 3
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 10000)// msg 4
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 13000)//msg 5
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 16000)//msg 6
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 19000)//msg 7
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 22000)//msg 8
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear})
}, 25000)//msg 9
setTimeout(async() => {
blackmd.sendMessage(from, {text: clear2})
}, 28000)//msg 10
setTimeout(async() => {
blackmd.sendMessage(from, {text: `*LIMPEZA CONCLUÍDA* ✅`})
blackmd.groupSettingUpdate(from, 'not_announcement')
}, 30000)
break

/*case 'd_':
if(!isVip) return reply("Apenas premium..")
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break*/

case 'deletar': case 'delete': case 'd':
setTimeout(() => {reagir(from, "🗑️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !isVip) return reply(`Mensagem apagada com sucesso... Somente você está vendo agora ${pushname} 😉`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'deletareu': case 'deleteandme': case 'dam':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !isVip) return reply("[ ❗ ] Só ADM ou VIP ❌")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
break

case 'fundobemvindo':
case 'fundobv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
dataGp[0].wellcome[0].fundobemvindo = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo do bemvindo foi alterado com sucesso para ↴*

${res}`
sendUrlText(from, txt, NomeDoBot, ``, res, res, seloctt)
} else reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
break

case 'fundosaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
dataGp[0].wellcome[0].fundosaiu = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo de saída foi alterado com sucesso para ↴*

${res}`
sendUrlText(from, txt, NomeDoBot, ``, res, res, seloctt)
} else reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
break

case 'fundobemvindo5':
case 'fundobv5':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
dataGp[0].wellcome[4].fundobemvindo = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo do bemvindo5 foi alterado com sucesso para:* ${res}`
} else reply('Você deve marcar um vídeo de até 30s com esse comando... Se não for de primeira, tente novamente, ok? ')
break

case 'fundosaiu5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
dataGp[0].wellcome[4].fundobemsaiu = res
setGp(dataGp)
txt = `🙇🏻‍♂️ *Chefia que manda... O fundo de saída5 foi alterado com sucesso para:* ${res}`
} else reply('Você deve marcar um vídeo de até 30s com esse comando... Se não for de primeira, tente novamente, ok? ')
break

case 'anticall':
case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isAnticall) {
obrigadoEXT.anticall = true
setObg(obrigadoEXT)
reply(`📞 *ANTI CALL* foi ativado... Qualquer usuário que ligar pro bot será bloqueado 📵`)
} else if(isAnticall) {
obrigadoEXT.anticall = false
setObg(obrigadoEXT)
reply(`📞 modo *ANTI CALL* desativado com sucesso 📵`)
}
break

case 'antipv':  
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
obrigadoEXT.antipv = true
setObg(obrigadoEXT)
reply(`♨️ Modo *ANTI PV BLOCK* ativado... Usuários serão bloqueados caso mandem mensagem no PV do bot 😈`)
} else if(isAntiPv) {
obrigadoEXT.antipv = false
setObg(obrigadoEXT)
reply(`🚿 Modo *ANTI PV BLOCK* desativado... Usuários já podem enviar mensagem no PV do bot normalmente 😇`)
}
break

case 'antipv2':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
obrigadoEXT.antipv2 = true
setObg(obrigadoEXT)
reply("✅ Modo anti PV ativado com sucesso... Quem tentar usar o PV receberá um aviso ⚠️")
} else if(isAntiPv2) {
obrigadoEXT.antipv2 = false
setObg(obrigadoEXT)
reply("🚫 Modo anti PV desativado... O PV está liberado ao uso de usuários comuns 😂")
}
break

case 'whatsblock':
if(!isOwner) return reply(enviar.msg.donosmt)
if(menc_os2.includes(sender)) return
blackmd.updateBlockStatus(menc_os2, 'block')
reply('Usuário bloqueado com sucesso!')
break

case 'whatsunblock':
if(!isOwner) return reply(enviar.msg.donosmt)
if(menc_os2.includes(sender)) return
blackmd.updateBlockStatus(menc_os2, 'unblock')
reply('Usuário desbloqueado com sucesso!')
break

case 'block':
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse Número ja esta incluso*')
ban.push(blcp)
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot🚫`
blackmd.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./database/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot❎`
blackmd.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA É A LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
blackmd.sendMessage(from, {text: jrc.trim(), mentions: ban})
break

case 'execut':
if(!isOwner  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
blackmd.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!isOwner  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'contar':
if(!q.includes("/")) return reply(`Ex: ${prefix+command} 01/01/2025`)
replicar = ``
for(i of q) {
  if(i != " ") replicar += i
}
if(!Number(contarDias(replicar))) return reply(contarDias(replicar))
day = contarDias(replicar) - contarDias(sendHours("DD/MM/YYYY"))
if(day == 0) return reply(`❌ _Erro, é necessário ao menos 1 dia de diferença..._`)
if(day < 0) {
nmr = day + ((0 - day) * 2)
reply(`✨ _A diferença de tempo entre ${replicar} e ${sendHours("DD/MM/YYYY")} é de ↴_
_⇒ ${nmr > 1 ? converterDias(nmr) : sendTimeDay(nmr)}_`)
} else reply(`✨ _A diferença de tempo entre ${sendHours("DD/MM/YYYY")} e ${replicar} é de ↴_
_⇒ ${day > 1 ? converterDias(day) : sendTimeDay(day)}_`)
break

case 'morse': case 'morsa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Digite uma frase para transformar em código morse`)
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..")
if(q.length > 40) return reply(`Texto grande demais`)
reply(`${morse(q)}`)
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'meunumero':
case 'meunmr':
setTimeout(() => {reagir(from, react2)}, 300)
reply(`${sender.split('@')[0]}`)
break

case 'meunmrwa':
setTimeout(() => {reagir(from, react2)}, 300)
reply(`wa.me/${sender.split('@')[0]}`)
break

case 'meunome':
setTimeout(() => {reagir(from, react2)}, 300)
reply(pushname)
break

case 'abc':
  blackmd.sendMessage(from, {image: {url: './base de dados/imagem/imgmenu.jpg'}, caption: 'caso queira uma descrição'}, {quoted: seloctt})
break

case 'figuteste':
blackmd.sendMessage(from, {sticker: {url: './database/logos/figu1.webp'}}, {quoted: seloctt})
break

case 'figuteste2':
enviarfigu(`./database/figu/teste.webp`)
break

case 'txt1':
reply(args[0])
break

case 'txt2':
reply(args[1])
break

case 'txt3':
reply(args[2])
break

case 'mark1':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!menc_os2) return reply(`Marque alguém`)
blackmd.sendMessage(from, {text: `${tempo} @${menc_os2.split('@')[0]}`, mentions: [menc_os2]})
break

case 'mark2':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!menc_prt) return reply(`Marque alguém`)
blackmd.sendMessage(from, {text: `${tempo} @${menc_prt.split('@')[0]}`, mentions: [menc_prt]})
break

case 'mark3':
if(!isOwner) return reply(enviar.msg.donosmt)
blackmd.sendMessage(from, {text: `${tempo} @${sender_ou_n.split('@')[0]}`, mentions: [sender_ou_n]})
break

case 'doc':
if(!isOwner) return reply(`Ainda não `)
blackmd.sendMessage(from, {
   document: Buffer.from('oi curioso'),
   caption: 'Coloca texto do menu aqui',
   mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', // Formato
   fileLength: 1000000 * 250, // Tamanho (250mb)
   jpegThumbnail: await getBuffer('https://paginalixo.com/wp-content/uploads/2021/08/hqdefault.jpg'), // Outra foto
   contextInfo: {
    externalAdReply: {
      title: 'Titulo',
      body: 'Nome em baixo',
      mediaType: 1,
      thumbnail: await getBuffer('https://paginalixo.com/wp-content/uploads/2021/08/hqdefault.jpg'), // só pega imagens até 300x300 
      showAdAttribution: false, // Coloca true para enviada como anúncio 
      renderLargerThumbnail: true, // Deixa a imagem grande
      sourceUrl: 'https://chat.whatsapp.com/HPnSch30OWiBCCLH4ysDvj' // Link que aparece quando aperta
    }
  }
}, {quoted:selo})
break

case 'testepv':
  blackmd.sendMessage(`${sender.split("@")[0]}@s.whatsapp.net`, {image: {url: './base de dados/imagem/imgmenu.jpg'}, caption: 'caso queira uma descrição'}, {quoted: seloctt})
break

case 'totext':// @VictorGabriel
if(!isQuotedAudio) return reply("Por favor, mencione um áudio para realizar a leitura do áudio.")
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply("Só realizo a transcrição de áudio de até 2MB, envie um arquivo menor.")
try {
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let { key } = await blackmd.sendMessage(from, {text: `Estou realizando a transcrição do áudio para texto, aguarde...`}, {quoted: info})
fs.writeFileSync(`./armor/assets/translate/totext-${sender}.mp3`, getBufferAudio)
client = new AssemblyAI({apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a"})
data = await client.transcripts.create({audio_url: `./armor/assets/translate/totext-${sender}.mp3`, language_code: "pt"})
if(data.words.length == 0) return reply("Nenhuma palavra encontrada")
await blackmd.sendMessage(from, {text: `*• Transcrição:*
${data.text}`, edit: key});
DLT_FL(`./armor/assets/translate/totext-${sender}.mp3`)
} catch(e) {
console.log(e)
reply("Erro")
}
break

/*case 'ping':
reagir(from, "⚡")
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
ping = r.toFixed(3)
if(ping < 0) stts = `lento`; if(ping >= 0) stts = `estável`; if(ping >= 1) stts = `bom`; if(ping >= 3) stts = `ruim`; if(ping >= 10) stts = `extremamente lento`
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
hex = `FF0000`
host = `VORTEXUS CLOUD`
img = blacksite
img += `/api/canvas/welcomify/welcome?`
img += `title=${encodeURI(`THE EVOLUTION`)}&`
img += `nome=${encodeURI(`» ${String(ping)} «`)}&hex=${hex}&`
img += `perfil=${ppimg}&`
img += `message=${encodeURI(`NEW BLACK V4 OFC UPDATE`)}&fundo=`+logoslink.ping
txt = `⚡ 𝚅𝚎𝚕𝚘𝚌𝚒𝚍𝚊𝚍𝚎〘 ${String(ping)} 〙
✍🏽 𝙿𝚒𝚗𝚐⇒ ${stts}
💻 𝚂𝚎𝚛𝚟𝚒𝚍𝚘𝚛⇒ ${host}
🗓️ 𝙳𝚊𝚝𝚊 & 𝙷𝚘𝚛𝚊
⇒${sendHours("DD/MM/YYYY")}ㅤ┋ㅤ${sendHours("HH:mm:ss")}
⌚ 𝚃𝚎𝚖𝚙𝚘 𝙰𝚝𝚒𝚟𝚘
⇒${kyun(uptime)}`
sendImage(from, img, txt, seloblk)
break*/

case 'gtts':
try {
if (args.length < 1) return blackmd.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: seloctt})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return blackmd.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: seloctt})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
blackmd.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("Erro..")
}
break

case 'tagme':
mention(`@${sender.split("@")[0]} ✨`)
break

case 'addstopcmd':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o comando que tu quer enviar pro block global?")
if(q.includes(prefix)) return reply(`Ex: ${prefix+command} menu`)
qp = rmLetras(q)
if(isBlockGlobalCmd(qp)) return reply(enviar.stopcmd.isblock)
addStopCmd(qp)
reply(`O comando『 ${prefix+qp} 』foi adicionado a lista com sucesso... Caso queira bloquear/desbloquear os comandos da lista, use ${prefix}stopcmd`)
break

case 'rmstopcmd':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o comando que tu quer remover do block global?")
qp = rmLetras(q)
if(!isBlockGlobalCmd(qp)) return reply(enviar.stopcmd.notblock)
rmStopCmd(qp)
reply(`O comando『 ${prefix+qp} 』foi removido da lista com sucesso... Caso queira bloquear/desbloquear os comandos da lista, use ${prefix}stopcmd`)
break

case 'stopcmd':
if(!isOwner) return reply(enviar.msg.donosmt)
if(isStopCmd) {
obrigadoEXT.stopcmdlist = true
setObg(obrigadoEXT)
reply(`♨️ Bloqueio de comandos ativado 😈`)
} else {
obrigadoEXT.stopcmdlist = false
setObg(obrigadoEXT)
reply(`♨️ Bloqueio de comandos desativado 😇`)
}
break

case 'stopcmdlist':
if(!isOwner) return reply(enviar.msg.donosmt)
txt = `🖐🏽😪 _Lista de comandos bloqueados globalmente:_`
for(i of stopcmd) {
txt += `\n${prefix+i}`
}
txt += `\n\n*Total:* ${stopcmd.length}`
reply(txt)
break

case 'addlimitcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(contar(q, `|`) != 1) return reply("KD o comando que tu quer enviar pro limite? Ex:\n"+prefix+command+" totag|10")
if(q.includes(prefix)) return reply(`Ex: ${prefix+command} sticker|20`)
var [a, b] = q.replace(`| `, `|`).replace(` |`, `|`).replace(` | `, `|`).split(`|`)
qp = rmLetras(a)
if(Number(b) <= 0) return reply(`A quantidade de uso do comando precisa ser maior que 0`)
txt = isLimitCmd(from, qp).boolean ? `+${b} de limite foi adc ao comando *${prefix+a}* com sucesso 🥰` : `O comando *${prefix+a}* foi adicionado a lista de limite com sucesso 🥰`
addLimitCmd(from, qp, b)
reply(txt)
break

case 'rmlimitcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply("KD o comando que tu quer enviar pro limite? Ex:\n"+prefix+command+" totag")
qp = rmLetras(q)
if(!isLimitCmd(from, qp).boolean) return reply(`Este comando não está na lista...`)
rmLimitCmd(from, qp);
reply(`Comando removido da lista com sucesso...`)
break

case 'addlimitallcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(Number(q) <= 0) return reply(`EX: ${prefix+command} 10`)
nmr = 0
for(i of allCases) {
  if(i.length < 20) addLimitCmd(from, i, q)
  nmr += 1
}
reply(`Todos os ${largeNumber(nmr)} comandos do bot foram adc a lista de limitcmd com um limite de um ${q} usos por dia...`)
break

case 'rmlimitallcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
rmLimitAllCmd(from)
reply(`A lista de comandos limitados deste grupo foi zerada com sucesso...`)
break

case 'limitcmdlist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
data = getLimitCmd(from)
if(data.length <= 0) return reply(`Não há comandos na lista...`)
txt = `🎲 *Total:* ${data.length}

🧮 *Lista:*
${data.map(i => `• *Comando:* ${prefix+i.nome}
• *Usado:* ${i.usado}/${i.max}`).join(`\n-\n`)}`
reply(txt)
break

case 'modoaluguel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isModRent) {
obrigadoEXT.modoaluguel = true
setObg(obrigadoEXT)
reply(`✔️ Modo aluguel ativado com sucesso... Sairei dos grupos que não estiverem salvos 〰️`)
} else {
obrigadoEXT.modoaluguel = false
setObg(obrigadoEXT)
reply(`✖️ Modo aluguel desativado com sucesso... Assino minha permanência nos grupos ➿`)
}
break

case 'blockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`*O comando『* ${args[0]} *』foi bloqueado com sucesso... Usuários estão proibidos de usar o mesmo* 🫡`)
break

case 'unblockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado')
deleteComandos(from, args[0])
reply(`*O comando『* ${args[0]} *』foi desbloqueado com sucesso... Agora todos os usuários poderão usar o mesmo* 😃`)
break

case 'listacomandos':
setTimeout(() => {reagir(from, "🚫")}, 300)
tkks = `🚫 *Comandos bloqueados no grupo ↴*
⇒ ${groupName}\n\n`
for (let V of getComandoBlock(from)) {
tkks += `× ${prefix+V}\n`
}
tkks += `\nㅤ _Total:_ ${getComandoBlock(from).length}\nㅤㅤ *By:* ${NomeDoBot}`
blackmd.sendMessage(from, {text: tkks.trim()}, {quoted: seloctt})
break

case 'globalblacklist':
setTimeout(() => {reagir(from, "🚫")}, 300)
gcmd = JSON.parse(fs.readFileSync("./dono/necessario.json"))
if(!gcmd.listanegraG) return reply(`Não há ninguém na lista...`)
tkks = `╔══════════════════╣\n╟ • _Usuários bloqueados globalmente_\n║\n`
for (let V of gcmd.listanegraG) {
tkks += `╟ ೈ፝͜͡🚫 ${V} \n║\n`
}
tkks += `╚══════╣ *_Total:_* ${gcmd.listanegraG.length} 😡`
blackmd.sendMessage(from, {text: tkks.trim()}, {quoted: seloctt})
break

case 'avalie': case 'avaliacao':
reagir(from, "✨")
if(!Number(args[0]) || Number(args[0]) < 1 || Number(args[0]) > 5) return reply("Avalie o bot de 1-5")
if(Number(args[0]) === 5) star = `✦✦✦✦✦`
if(Number(args[0]) === 1) star = `✦✦✦✦✧`
if(Number(args[0]) === 1) star = `✦✦✦✧✧`
if(Number(args[0]) === 1) star = `✦✦✧✧✧`
if(Number(args[0]) === 1) star = `✦✧✧✧✧`
tdptls = `[ Avaliação ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *avaliou seu bot ↴*
⇒ ${star}`
blackmd.sendMessage(nmrdn, {text: tdptls}, {quoted: seloctt})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia...")
break

case 'bug':
  setTimeout(() => {reagir(from, "💾")}, 300)
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return blackmd.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloctt})
var nomor = info.participant
teks1 = `[ Problema ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *no ${isGroup ? "grupo* "+groupName : "meu privado*"} *relatou ↴*
⇒ ${bug}`
blackmd.sendMessage(nmrdn, {text: teks1}, {quoted: seloctt})
reply("Seu bug foi relatado ao meu dono, em breve o mesmo deve ser resolvido")
break

case 'sugestão':
case 'sugestao':
  setTimeout(() => {reagir(from, "💡")}, 300)
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return blackmd.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: seloctt})
var nomor = info.participant
sug = `[ Sugestões ]
*De:* wa.me/${sender.split("@s.whatsapp.net")[0]}
${pushname} *no ${isGroup ? "grupo* "+groupName : "meu privado*"} *sugeriu ↴*
${sugestao}`
blackmd.sendMessage(nmrdn, {text: sug}, {quoted: seloctt})
reply("Sua sugestão foi enviada ao meu dono... Não necessariamente a mesma será implantada no bot, mas é possível que algo seja utilizado")
break

case 'help':
setTimeout(() => {reagir(from, "✅")}, 300)
reply(`*Aqui estão alguns dos comandos mais usados pelos usuários...*

> ${prefix}menu
_Este comando irá abrir a base de todos os comandos disponíveis no bot_

> ${prefix}s
_Este comando serve para fazer figurinhas... Basta você enviar uma imagem ou vídeo com este comando na legenda._

> ${prefix}f
_Este comando tbm faz figurinha, porém, com um formato diferente._

> ${prefix}roubar
_Este comando serve para você renomear figurinhas do jeito que quiser._

> ${prefix}fbarba
_Para usuários que tem dificuldade no comando acima, marque uma figurinha, e este irá adicionar o simples nome do bot na legenda... Você tbm pode alugar um comando de roubar figurinha com seu nome, se quiser *(${prefix}alugar).*_

> ${prefix}play
_Use este comando para pedir músicas... Exemplo: *${prefix}play wanna be yours*_

> ${prefix}calvo
_Este comando faz parte do *${prefix}menuzoeira,* onde neste menu, estão presente várias outras brincadeiras para serem utilizadas em grupos..._

> ${prefix}ping
_Este comando serve para puxar a velocidade do bot... Assim, você saberá quando ele estiver lento ou não._

> ${prefix}bug
_Este comando serve para você reportar qualquer tipo de bug no bot_

> ${prefix}sugestão
_O mesmo é para caso você tenha alguma sugestão para melhorar nosso serviço... Estamos sempre ouvindo a opinião do público._

> ${prefix}suporte
_Diferente dos dois comandos acima, neste você terá resposta em 100% das vezes... Use esse comando para reportar qualquer coisa, desde a dúvida mas besta até uma de suma importância._

> ${prefix}alugar
_Este comando irá mostrar todos os preços disponíveis de aluguéis para você... Caso se interesse em algum, use o comando *${prefix}dono,* e feche contrato com o nosso serviço._

🔥 ${NomeDoBot} 🔥`)
break

case 'suporte':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!q) return reply(`*Use o suporte para reportar qualquer tipo de dúvida sobre o bot... Ex:*

${prefix+command} seu nome/sua msg para o suporte`)
var [s1, s2] = q.split("/")
if(!s1) return reply(`Digite seu nome de usuário antes da barra (/)

${prefix+command} ${pushname+q}`)
if(!s2) return reply(`Ponha uma barra (/) após seu nome de usuário, e em seguida, escreva a mensagem à ser enviada para o suporte`)
if(Number(s1.length) > 12) return reply(`_"${s1}"_ é seu nome ? Use apenas o seu primeiro nome pfvr...`)
suportemsg = `『 ${s1} 』
*Usuário:* wa.me/${sender.split("@s.whatsapp.net")[0]}

> ${s2}`
blackmd.sendMessage(nmrdn, {text: suportemsg}, {quoted: info})
reply(`Sua mensagem foi enviada para o suporte com sucesso... Você deve receber resposta em até 24h. 🫡

Agrademos a sua paciência ${s1}`)
break

case 'rsuport':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isOwner) return reply(`;-;`)
if(!q) return reply(`*Ex:* ${prefix+command} número/msg que ele enviou/sua resposta`)
var [rs1, rs2, rs3] = q.split("/")
if(!rs1) return reply('Falta o número do indivíduo')
if(!rs2) return reply('Preciso da mensagem enviada para o suporte...')
if(!rs3) return reply(`${tempo} suporte... Digite sua resposta para eu enviar ao indivíduo`)
carta = `『 *SUPORTE RECEBIDO* 』

✉️⧽ ${rs2}
________________________________________

『 *RESPOSTA DO SUPORTE* 』

📩⧽ ${rs3}`
blackmd.sendMessage(`${rs1}@s.whatsapp.net`, {text: carta})
reply(`*Resposta enviada...* ✉️`)
break

case 'rs4321':
setTimeout(() => {reagir(from, "😃")}, 300)
reply(`*😃👍🏽*`)
blackmd.sendMessage(`120363128721181293@g.us`, {text: `${pushname} agradece`})
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'googlesearch': case 'pesquisa': case 'pesquisar':
if(!q) return reply("Pergunte algo e eu retornarei alguns resultados de pesquisas...")
try {
ABC = await fetchJson(`${barbasite}/api/googlesrc?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
rr = ABC.result.length
txt = `\`\`\`Fo${rr > 1 ? "ram" : "i"} encontrado${rr > 1 ? "s" : ""} ${rr} resultado${rr > 1 ? "s" : ""} para a sua pesquisa\`\`\` 🔎`
for(i of ABC.result) {
  txt += `\n• *Título:* ${i.title}\n• *Link:* ${i.originalUrl}\n`
}
reply(txt)
} catch {
reply("Erro ao obter detalhes da pesquisa")
}
break
case 'pinterest':
try {
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
reply(`▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─`)
blackmd.sendMessage(from, {image: {url: `${barbasite}/api/pinterest?text=${encodeURI(q)}&apikey=`+API_KEY_BARBA}}, {quoted: seloctt}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;
case 'imgsearch': case 'googleimg':
if(!q) return reply(`Exemplo: ${prefix+command} naruto`)
try {
ABC = await fetchJson(`${barbasite}/api/gimage?txt=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
jherffeson = ABC.result[Math.floor(Math.random() * ABC.result.length)]
blackmd.sendMessage(from, {image: {url: jherffeson.url}, caption: `『 ${jherffeson.title} 』`}, {quoted: seloctt}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break
case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
return sendUrlText(from, res, `Link da imagem gerado com sucesso ↴`, ``, res, res, seloctt)
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(`Gerando link do vídeo pra você...`)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
return sendUrlText(from, res, `Link do vídeo gerado com sucesso ↴`, ``, logoslink.menu, res, seloctt)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'gerarqr':
case 'lerqr':
if(!isVip) return reply(enviar.msg.vip)
try {
  if(command == "gerarqr") {
    if(!q) return reply(prefix+command+" seu texto aqui")
    sendImage(from, `${barbasite}/imagem/qrcode?texto=teste&apikey=`+API_KEY_BARBA, `📄 *QR-CODE  GERADO* 📄`)
  } else {
    if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
      boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
      owgi = await getFileBuffer(boij, 'image')
      link = await upload(owgi)
      ABC = await fetchJson(`${barbasite}/imagem/leitor-qrcode?qrcode=${link}&apikey=`+API_KEY_BARBA)
      reply(`📄 *QR traduzido:* `+ABC.resultado)
    } else return reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
  }
} catch {
  console.log(e)
  reply('Ocorreu algum Erro, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

case 'linkimg':
if(!q) return reply(`KD o link fi de quenga ?`)
try {
setTimeout(() => {reagir(from, "📷")}, 300)
blackmd.sendMessage(from, {image: {url: q}, caption: `@${sender.split('@')[0]} \`\`\`aqui está\`\`\` ✅`, mentions: [sender]})
} catch (e) {
reply(`Não consegui carregar o link...`) }
break

case 'linkmp4':
if(!q) return reply(`KD o link fi de quenga ?`)
try {
setTimeout(() => {reagir(from, "🎥")}, 300)
blackmd.sendMessage(from, {video: {url: q}, gifPlayback: false, caption: `@${sender.split('@')[0]} \`\`\`aqui está\`\`\` ✅`, mentions: [sender]})
} catch (e) {
reply(`Não consegui carregar o link...`) }
break

case 'playlist':
case 'playlista':
case 'ytsrc':
case 'ytsearch':
case 'yts':
reagir(from, react2)
try {
if(!q) return reply(`Digite o nome de algum vídeo ou música que deseja encontrar..`);
AB = await fetchJson(`${barbasite}/api/ytsrc?q=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
ABC = `${"-\t".repeat(13)}`
for( i of AB.resultado) {
ABC += `\n\n❪𝚃í𝚝𝚞𝚕𝚘ฺ࣭࣪͘ꕸ▸ ${i.title}
❪𝚄𝚛𝚕ฺ࣭࣪͘ꕸ▸ ${i.url}
❪𝚃𝚎𝚖𝚙𝚘ฺ࣭࣪͘ꕸ▸ ${i.timestamp}
❪𝙿𝚘𝚜𝚝𝚊𝚍𝚘ฺ࣭࣪͘ꕸ▸ ${i.ago}

⏤͟͟͞͞ ꦿ𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘৴▸ ${i.description}`
ABC += `\n\n${"-\t".repeat(13)}`
}
sendUrlText(from, ABC, `📼 YT SEARCH - `+AB.resultado[0].title, AB.resultado[0].description, AB.resultado[0].thumbnail, AB.resultado[0].url, seloctt)
} catch (e) {
return reply(`Erro 404`)
}
break

case 'igstalk': case 'instastalk':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`Digite o @ da pessoa que vc quer stalkear no insta após o comando, ex:
${prefix+command} @alok`)
try {
reply(enviar.msg.consulta)
ABC = await fetchJson(barbasite+`/api/igstalk?usuario=${q.replace("@", "")}&apikey=`+API_KEY_BARBA)
i = ABC.resultado
txt = `▧⃯⃟👤 ݈݇─ 𝙿𝚎𝚛𝚏𝚒𝚕: ${i.username}
❪✍🏼ฺ࣪ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.fullname}
🔐⃤ 𝙿𝚛𝚒𝚟𝚊𝚍𝚘『 ${i.is_private == true ? `✅` : `❌`} 』
❪🖼️ฺ࣪ꕸ▸ 𝙿𝚘𝚜𝚝𝚊𝚐𝚎𝚗𝚜: ${largeNumber(i.posts)}
❪🔜ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚍𝚘𝚛𝚎𝚜: ${largeNumber(i.followers)}
❪🔙ฺ࣪ꕸ▸ 𝚂𝚎𝚐𝚞𝚒𝚗𝚍𝚘: ${largeNumber(i.following)}
✔️⃤ 𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚍𝚘『 ${i.is_verified == true ? `✅` : `❌`} 』
⏤͟͟͞͞ ꦿ𝙱𝚒𝚘: ${i.biography}`
sendUrlText(from, txt, `🔎 𝑰𝑵𝑺𝑻𝑨 𝑺𝑻𝑨𝑳𝑲𝑬𝑹 🔍`, ``, i.profile_photo, `http://instagram.com/`+i.username.replace("@", ""), seloctt)
} catch(e) {
console.log(e)
return reply(`Não foi possível encontrar esse perfil no insta, ou pode ser que a api caiu...`)
}
break

case 'spotify':
if(!q) return reply(`Use: ${prefix+command} nome da música`)
try {
ABC = await fetchJson(`${barbasite}/api/spotifysearch?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
i = ABC.resultado.tracksArray[0]
link = await fetchJson(`${barbasite}/api/dl/spotify?url=${i.url}&apikey=`+API_KEY_BARBA)
txt = `ㅤㅤㅤㅤ🎧 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 🎧

❪🎵𝙼ú𝚜𝚒𝚌𝚊ฺ࣭࣪͘ꕸ▸ ${i.title}
❪⏱️𝙳𝚞𝚛𝚊çã𝚘ฺ࣭࣪͘ꕸ▸ ${link.resultado.duration}
❪👥𝙰𝚛𝚝𝚒𝚜𝚝𝚊(𝚜)ฺ࣭࣪͘ꕸ▸ ${i.artists.map(v => `${v.name}`).join(', ')}
⏤͟͟͞͞ ꦿ𝙻𝚒𝚗𝚔৴▸ ${i.url}
----------------------------------------------
𝙱𝚢 ${NomeDoBot}`
sendUrlText(from, txt, `Ouça agora ${i.title} em seu aplicativo Spotify 🔥`, `Music • Duração: ${link.resultado.duration}`, i.thumb, i.url, seloctt)
sendAudio(from, link.resultado.url, "audio/mpeg", seloctt)
} catch(e) {
return reply("Erro")
}
break

case 'play3': case 'p3':
/*if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)*/
reagir(from, "🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
try {
data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${q}&apikey=${API_KEY_ALEATORY}`)
bla = `
⟬ ⒷⒶⓇⒷⒶ  🅜ⓊⓈⒾⒸ  »Ⓥ①« ⟭

▧⃯⃟📝 𝙏𝙄́𝙏𝙐𝙇𝙊: ${data[0].titulo}
▧⃯⃟⏱️ 𝙏𝙀𝙈𝙋𝙊: ${data[0].tempo}
▧⃯⃟🎚️ 𝙋𝙊𝙎𝙏𝘼𝘿𝙊: ${data[0].postado}
▧⃯⃟🛠️ 𝘿𝙀𝙎𝘾𝙍𝙄𝘾̧𝘼̃𝙊: ${data[0].desc}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${data[0].url}&apikey=#API_KEY_ALEATORY#`, urlVideo: `https://api.bronxyshost.com.br/api-bronxys/play_video?nome_url=${data[0].url}&apikey=#API_KEY_ALEATORY#`, title: data[0].titulo})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
blackmd.sendMessage(from, {image: {url: data[0].thumb}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(`Sistema parece instável... Execute o ${prefix}p4`);
}
break

case 'play4': case 'p4':
/*if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)*/
reagir(from, "🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
try {
ABC = await fetchJson(`http://api-expr.sabapi.tech:6060/api/ytsrc?q=${q}&apikey=${API_KEY_SABRINA}`)
bla = `
⟬ ⒷⒶⓇⒷⒶ  🅜ⓊⓈⒾⒸ  »Ⓥ②« ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[0].title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${ABC.resultado[0].timestamp} com ${ABC.resultado[0].views} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${ABC.resultado[0].author.name}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[0].ago}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${ABC.resultado[0].description}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `http://sabapi.tech:8090/api/dl/ytaudio?url=${ABC.resultado[0].url}&apikey=#API_KEY_SABRINA#`, urlVideo: `http://sabapi.tech:8090/api/dl/ytvideo?url=${ABC.resultado[0].url}&apikey=#API_KEY_SABRINA#`, title: ABC.resultado[0].title})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
blackmd.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(`Sistema parece instável... Execute o ${prefix}p5`);
}
break

case 'play5': case 'p5':
/*if(!isGroup) return reply(`Este menu play está disponível apenas para uso em grupo...`)*/
reagir(from, "🔥")
if(!q) return reply(`Use: ${prefix+command} nome da música`)
if(!JSON.stringify(music).includes(from)) {
music.push({groupId: from, usus: []})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
AB = music.map(i => i.groupId).indexOf(from)
if(JSON.stringify(music[AB].usus).includes(sender)) {
AC = music[AB].usus.map(i => i.id).indexOf(sender)
music[AB].usus.splice(AC, 1)
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
}
try {
ABC = await fetchJson(`${barbasite}/api/ytsrc?q=${q}&apikey=${API_KEY_BARBA}`)
bla = `
⟬ ⒷⒶⓇⒷⒶ 🅜ⓊⓈⒾⒸ  »Ⓥ③« ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[0].title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${ABC.resultado[0].timestamp} com ${ABC.resultado[0].views} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${ABC.resultado[0].author.name}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[0].ago}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${ABC.resultado[0].description}

_${tempo} ${pushname}, digite *"áudio", "vídeo"* ou *"doc"* para escolher a forma de envio (sem as aspas)_
`
music[AB].usus.push({id: sender, urlAudio: `${barbasite}/api/dl/ytaudio?url=${ABC.resultado[0].url}&apikey=#API_KEY_BARBA#`, urlVideo: `${barbasite}/api/dl/ytvideo?url=${ABC.resultado[0].url}&apikey=#API_KEY_BARBA#`, title: ABC.resultado[0].title})
fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
blackmd.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla}, {quoted: seloctt})
} catch (e) {
return reply(downoff);
}
break

case 'playdoc': case 'pdoc':
if(!q) return reply("KD o nome da música?")
try {
ABC = await fetchJson(`${barbasite}/api/ytsrc?q=${q}&apikey=${API_KEY_BARBA}`)
data = ABC.resultado[0]
txt = `
⟬ 🄱🄰🅁🄱🄰 🄳🄾🄲 🄼🅄🅂🄸🄲 ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data.timestamp || "indefinido"} com ${!isNaN(largeNumber(data?.views)) ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data.description || "indefinida"}
`
reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`)
blackmd.sendMessage(from, {document: {url: `${barbasite}/api/dl/ytaudio?url=${data.url}&apikey=`+API_KEY_BARBA}, caption: txt, mimetype: 'audio/mp4', fileName: data.title+".m4a", fileLength: 1000000 * ((Number(data.timestamp.replace(":", "") || 420) / 100) * (alerandom(1) + 1)), contextInfo: {externalAdReply: {title: NomeDoBot, body: '', mediaType: 1, thumbnail: await getBuffer(`${data.thumbnail}`), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: data.url}}}, {quoted: seloctt})
} catch(e) {
console.log(e)
reply("Erro")
}
break

case 'playdoc2': case 'pdoc2':
if(!q) return reply("KD o nome da vídeo?")
try {
ABC = await fetchJson(`${barbasite}/api/ytsrc?q=${q}&apikey=${API_KEY_BARBA}`)
data = ABC.resultado[0]
txt = `
⟬ 🄱🄰🅁🄱🄰 🄳🄾🄲 🄼🄴🄳🄸🄰 ⟭

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data.timestamp || "indefinido"} com ${!isNaN(largeNumber(data?.views)) ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data.description || "indefinida"}
`
reply( `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`)
blackmd.sendMessage(from, {document: {url: `${barbasite}/api/dl/ytvideo?url=${data.url}&apikey=`+API_KEY_BARBA}, caption: txt, mimetype: 'video/mp4', fileName: data.title+".mp4", fileLength: 1000000 * ((Number(data.timestamp.replace(":", "") || 204) / 10) * (alerandom(2) + 1)), contextInfo: {externalAdReply: {title: NomeDoBot, body: '', mediaType: 1, thumbnail: await getBuffer(`${data.thumbnail}`), showAdAttribution: true, renderLargerThumbnail: true, sourceUrl: data.url}}}, {quoted: seloctt})
} catch(e) {
console.log(e)
reply("Erro")
}
break

// DOWNLOADS
case 'playvideo':
case 'ytmp4':
case 'play2':
case 'p2':
setTimeout(() => {reagir(from, "🎥")}, 300)
try {
if(!q) return reply(`${prefix+command} link ou nome`);
reply(`⇒𝙿𝚎𝚜𝚚𝚞𝚒𝚜𝚊: _"${q}"_`);
setTimeout(async() => {
blackmd.sendMessage(from, {text: `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`})
}, 1100)
if(!isUrl(q)) {
  ABC = await fetchJson(`${barbasite}/api/ytsrc?q=${q}&apikey=${API_KEY_BARBA}`)
  data = ABC.resultado[0]
  bla = `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ@${sender.split('@')[0]}      ♪  

🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data?.timestamp || "indefinido"} com ${!isNaN(largeNumber(data?.views)) ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data?.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data?.description || "indefinida"}

0:35 ━❍────────-${data.timestamp || "5:32"} ↻ ⊲ Ⅱ ⊳ ↺
VOLUME: ▁▂▃▄▅▆▇ 100%

${tempo}❣️
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı`
link = data.url
} else {link = q
bla = ``}
sendVideo(from, barbasite+`/api/dl/ytvideo?url=${link}&apikey=`+API_KEY_BARBA, bla, seloctt).catch(e => {
return reply(downon)
})
} catch (e) {
return reply(downoff);
}
break;
case 'playaudio':
case 'ytmp3':
case 'play':
case 'p': {
  try {
    reagir(from, "🎵")
    if(!q) return reply(`${prefix+command} link ou nome`)
    if(!isUrl(q)) {
      ABC = await fetchJson(barbasite+`/api/ytsrc?q=${q}&apikey=`+API_KEY_BARBA)
      data = ABC.resultado[0]
      con = converterMin(Number((contarMin(data.timestamp || "5:32") / 100) * 30).toFixed(0))
      ini = con.includes(`ser um`) ? `0:35` : con.slice(1, con.length)
      thumb = [`anime`, `classic`, `dynamic`, `space`, `space2`]
      img = blacksite+`/api/canvas/musicardbun/music?nome=${data.title || "indefinido"}&autor=${data?.author?.name || "indefinido"}&tipo=${thumb[alerandom(thumb.length)]}&opacity=75&thumb=${data.thumbnail || logoslink.logo}&progresso=30&start=${ini}&end=${data.timestamp || "5:32"}`
      if(isGroup && !botoes) carregamento(from, `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`, info)
      await sleep(3000)
      bla = `${!botoes ? `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ${pushname}      ♪  

` : ``}🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data?.timestamp || "indefinido"} com ${!isNaN(largeNumber(data?.views)) ? largeNumber(data?.views) : "indefinidas"} visualizações
🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${data?.author?.name || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data?.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data?.description || "indefinida"} ${!botoes ? `

${ini} ━❍────────-${data?.timestamp || "5:32"} ↻ ⊲ Ⅱ ⊳ ↺
*VOLUME:* ▁▂▃▄▅▆▇ 100%
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı
` : ``}`
      audio = data.url
      butao = [{type: `cmd`, text: `𝘼́𝙐𝘿𝙄𝙊 🎵`, command: `${prefix}jr2 ${audio}`}, {type: `cmd`, text: `𝙑𝙄́𝘿𝙀𝙊 🎥`, command: `${prefix}p2 ${audio}`}]
      sendButton(from, {image: {url: img}, caption: bla, footer: NomeDoBot}, blackmd, sender, butao, seloctt)
      if(botoes) return
    } else {
      carregamento(from, `▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`, info)
      await sleep(5000)
      audio = q
    }
    await sleep(1000);
    sendAudio(from, barbasite+`/api/dl/ytaudio?url=${audio}&apikey=`+API_KEY_BARBA, "audio/mpeg", seloctt).catch(e => {
      return reply(downon)
    })
  } catch (e) {
    console.log(e)
    return reply(downoff);
  }
}
break;
case 'playmix': case 'pm'://by jherffeson
/*if(!isGroup) return reply(enviar.msg.grupo)*/
reagir(from, "🎵")
try {
if(!q) return reply(`${prefix+command} link ou nome`)
ABC = await fetchJson(`${barbasite}/api/ytsrc?q=${q}&apikey=`+API_KEY_BARBA)
bla = `
༒W̷E̷L̷C̷O̷M̷E̷༒     ♬
⏤͟͟͞͞ ꦿ@${sender.split('@')[0]}      ♪  
`
for(i = 0; i < 5; i++) {
bla += `
🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${ABC.resultado[i].title || "indefindo"} ↻ ⊲ Ⅱ ⊳ ↺
0:35 ━❍────────-${ABC.resultado[i].timestamp || "5:32"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${ABC.resultado[i].ago || "indefinido"}
`
}
bla += `
${tempo}❣️
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı
`
blackmd.sendMessage(from, {image: {url: ABC.resultado[0].thumbnail}, caption: bla, mentions: [sender]})
await sleep(1000)
for(let m = 0; m < 5; m++) {
await sleep(2000)
blackmd.sendMessage(from, {audio: {url: `${barbasite}/api/dl/ytaudio?url=${ABC.resultado[m].url}&apikey=`+API_KEY_BARBA}, fileName: ABC.resultado[m].title+'.m4a', mimetype: "audio/mp4"}, {quoted: seloctt})
}
} catch (e) {
return reply(downoff);
}
break;
case 'tiktok': case 't': case 'ttk': case 'ttkmp4': case 'tiktokvideo':
reagir(from, "🎥")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(`${barbasite}/download/tiktok?url=${q}&apikey=`+API_KEY_BARBA)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`);
blackmd.sendMessage(from, {video: {url: ABC.resultado.video}, caption: `〘 @${ABC.resultado.username} 〙\n${ABC.resultado.description}`, mimetype: "video/mp4"}, {quoted: seloctt}).catch(e => {
return reply(downon)
})
} catch (e) {
return reply(downoff);
}
break;
case 'tiktokhd': case 'thd': case 'ttkhd':
reagir(from, "🎥")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(`${barbasite}/download/tiktok2?url=${q}&apikey=`+API_KEY_BARBA)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`);
blackmd.sendMessage(from, {video: {url: ABC.resultado.videoSemWt}, caption: `〘 ${ABC.resultado.author} 〙\n${ABC.resultado.legenda}`, mimetype: "video/mp4"}, {quoted: seloctt}).catch(e => {
return reply(downon)
})
} catch (e) {
return reply(downoff);
}
break;
case 'tiktok2': case 't2': case 'ttk2': case 'ttkmp3': case 'tiktokaudio':
reagir(from, "🎵")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(`${barbasite}/download/tiktok?url=${q}&apikey=`+API_KEY_BARBA)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 Á𝚞𝚍𝚒𝚘ฺ࣭࣪͘ꕸ▸`);
blackmd.sendMessage(from, {audio: {url: ABC.resultado.audio_Download}, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply(downon)
})
} catch (e) {
return reply(downoff);
}
break;
case 'tiktokimg': case 'ti': case 'tiktok3': case 't3': case 'ttkimg': case 'ttkimage': case 'ttkimagem': case 'tiktokimage': case 'tiktokimagem':
reagir(from, "📸")
try {
if(!q.includes("tiktok")) return reply(`${prefix+command} link do Tiktok`);
ABC = await fetchJson(`${barbasite}/download/tiktok?url=${q}&apikey=${API_KEY_BARBA}`)
reply(`▧⃯⃟𝙰𝚐𝚞𝚊𝚛𝚍𝚎, 𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝙸𝚖𝚊𝚐𝚎𝚖ฺ͘.•🛸 ݈݇─`);
jherffeson = ABC.resultado.photo
for(i = 0; i < jherffeson.length; i++) {
await sleep(1000)
blackmd.sendMessage(from, {image: {url: jherffeson[i].url}})
}
await sleep(2000)
blackmd.sendMessage(from, {audio: {url: ABC.resultado.audio}, mimetype: "audio/mp4"}, {quoted: seloctt})
} catch (e) {
console.log(e)
return reply(downoff);
}
break;
case 'facebook': case 'facevideo':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
ABC = await fetchJson(`${barbasite}/download/facebook2?url=${q}&apikey=`+API_KEY_BARBA)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`);
blackmd.sendMessage(from, {video: {url: ABC.resultado.media.url}, caption: ABC.resultado.description, mimetype: "video/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'facebook2': case 'faceaudio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
ABC = await fetchJson(`${barbasite}/download/facebook2?url=${q}&apikey=`+API_KEY_BARBA)
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 Á𝚞𝚍𝚒𝚘ฺ࣭࣪͘ꕸ▸`);
blackmd.sendMessage(from, {audio: {url: ABC.resultado.media.url}, mimetype: "audio/mp4"}).catch(e => {
return reply("Erro..")
})
} catch (e) {
return reply("Erro..")
}
break;
case 'twitter': case 'twtdl':
if(!q.includes("twitter.com")) return reply(`Faltando o link válido do twitter para download do video ou foto.`);
reagir(from, "😸");
try {
  reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘ฺ࣭࣪͘ꕸ▸`);
  ABC = await fetchJson(`${barbasite}/api/dl/twitter2?url=${q}&apikey=`+API_KEY_BARBA);
  for(let i = 0; i < ABC.resultado.media.length; i++) {
    await sleep(1000) // Pausa de 1 segundo(s).
    mytype = ABC.resultado.media[i]
    if(ABC.resultado.type == "video") {
      blackmd.sendMessage(from, {video: {url: mytype.url}}, {quoted: seloctt})
    } else {
      blackmd.sendMessage(from, {image: {url: mytype.url}}, {quoted: seloctt})
    }
  }
} catch (e) {
  console.log(e)
  reply(`Erro`);
}
break
case 'instagram': case 'insta': case 'instavideo': case 'instamp4':
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
reply(`❪𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚎𝚞 𝚅í𝚍𝚎𝚘ฺ࣭࣪͘ꕸ▸`)
instavd = await fetchJson(barbasite+`/api/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instavd.resultado.length > 0) return sendVideo(from, instavd.resultado[0], ``, seloblk)
instavd2 = await fetchJson(barbasite+`/api/v2/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instavd2.resultado.length > 0 && instavd2.resultado[0].type == `video`) return sendVideo(from, instavd2.resultado[0].url, ``, seloblk)
instavd3 = await fetchJson(barbasite+`/api/v3/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instavd3?.resultado?.link_dl) return sendVideo(from, instavd3.resultado.link_dl, ``, seloblk)
return reply(`[❗] nenhum dado retornado ❌`)
} catch (e) {
console.log(e)
return reply("Erro..")
}
break;
case 'instadw': case 'instaaudio': case 'instamp3':
try {
if(!q) return reply(`Exemplo: ${prefix+command} o link`);
instaad = await fetchJson(barbasite+`/api/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instaad.resultado.length > 0) return sendAudio(from, instaad.resultado[0], `audio/mpeg`, seloblk)
instaad2 = await fetchJson(barbasite+`/api/v2/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instaad2.resultado.length > 0) return sendAudio(from, instaad2.resultado[0].url, `audio/mpeg`, seloblk)
instaad3 = await fetchJson(barbasite+`/api/v3/instagram?url=${q}&apikey=`+API_KEY_BARBA)
if(instaad3?.resultado?.link_dl) return sendAudio(from, instaad3.resultado.link_dl, `audio/mpeg`, seloblk)
return reply(`[❗] nenhum dado retornado ❌`)
} catch (e) {
console.log(e)
return reply("Erro..")
}
break;
case 'mediafire':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${barbasite}/api/dl/mediafire?url=${q}&apikey=`+API_KEY_BARBA)
reply(`📂 *Nome:* ${ABC.resultado.filename}\n🧮 *Tamanho:* ${ABC.resultado.size}\n_Criado em ${ABC.resultado.uploadDate}_`)
blackmd.sendMessage(from, {document: {url: ABC.resultado.url}, mimetype: "application/"+ABC.resultado.filetype, fileName: ABC.resultado.filename}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break
case 'mediafire2':
if(!isVip) return reply(enviar.msg.vip)
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(`${barbasite}/api/dl/mediafire2?url=${q}&apikey=`+API_KEY_BARBA)
media = ABC.resultado[0]
reply(`\t\t\t\t\t🔥 *MEDIAFIRE* 🔥\n\n🧵 *Nome:* ${media.nama}\n🧶 *Tamanho:* ${media.size}`)
blackmd.sendMessage(from, {document: {url: media.link}, mimetype: "application/"+media.mime, fileName: media.nama}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..")
}
break

case 'gitclone':
if(!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
blackmd.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: info }).catch(e => {
return reply(`Erro`)
})
break

case 'docfake':
if(!isVip && !isChatOfc) return reply("[ ❗ ] o uso desde recurso fora do chat oficial está restrito apenas aos usuários VIP ❌")
setTimeout(() => {reagir(from, "📝")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
sp = `/`
docfake = [
  {formato: `pdf`, link: `application/pdf`},
  {formato: `xml`, link: `application/xml`},
  {formato: `zip`, link: `application/zip`},
  {formato: `js`, link: `application/javascript`},
  {formato: `json`, link: `application/json`},
  {formato: `jpg`, link: `image/jpeg`},
  {formato: `ppt`, link: `application/vnd.ms-powerpoint`},
  {formato: `pptx`, link: `application/vnd.openxmlformats-officedocument.presentationml.presentation`},
  {formato: `apk`, link: `application/vnd.android.package-archive`},
  {formato: `txt`, link: `text/plain`},
  {formato: `aac`, link: `audio/aac`},
  {formato: `m4a`, link: `audio/mp4`},
  {formato: `mp4`, link: `video/mp4`},
  {formato: `mp3`, link: `audio/mpeg`},
  {formato: `gif`, link: `image/gif`},
  {formato: `svg`, link: `image/svg+xml`},
  {formato: `png`, link: `image/png`}
]
if(contar(q, sp) != 2) return reply(`*Ops, vejo que você está usando o comando de forma errada... Você deve usar neste formato e exemplo ↴*
*Formato:* ${prefix+command} nome${sp}tamanho${sp}formato

*Exemplo:* ${prefix+command} pack do pé${sp}250${sp}zip

${`-`.repeat(40)}

${docfake.map(d => `• ${d.formato}`).join(`\n`)}`)
barra = q.replace(sp+` `, sp).replace(` `+sp, sp).replace(` ${sp} `, sp)
var [nome, tamanho, tipo] = barra.split(sp)
AB = docfake.map(i => i.formato).indexOf(tipo.toLowerCase())
if(AB < 0) return reply(`O formato "${tipo}" não existe no banco de dados...`)
if(Number(tamanho) < 0) return reply(`O tamanho precisa ser um número maior que zero..`)
//======================\\
blackmd.sendMessage(from, {document: fs.readFileSync('./database/docf.txt'), mimetype: docfake[AB].link, fileName: nome+`.`+docfake[AB].formato, fileLength: Number(tamanho) * 1000000, headerType: 4, contextInfo: {forwardingScore: 999, isForwarded:true}}, {quoted: seloblk})
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/horoscopo?signo=${q}&apikey=`+API_KEY_ALEATORY)
blackmd.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!isOwner && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await blackmd.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
blackmd.sendMessage(anu[i], {text: txt})
}
reply(`Enviando com sucesso `)
}
break

case 'celular':
try {
if(!q) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply("Realizando ação..");
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/info_celular?celular=${q}&apikey=`+API_KEY_ALEATORY);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply("Erro...");
}
break;

case 'join': case 'entrar':
if(!isOwner) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
blackmd.groupAcceptInvite(`${link}`)
return reply(`*Pode deixar meu senhor, tô entrando no grupo...* 🫡`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'request':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
not = `*Use o comando com as 3 escolhas possíveis abaixo:*
• ${prefix+command} -lista
• ${prefix+command} -aceitar
• ${prefix+command} -recusar`
if(!q) return reply(not)
req = await blackmd.groupRequestParticipantsList(from)
if(req.length <= 0) return reply(`[❗] não há solicitações no momento ❌`)
if(args[0].toLowerCase() === "-lista") {
  caixa = []
  for(r = 0; r < req.length; r++) {
    i = req[r]
    lista = `»${r + 1}«\n👤 *Participante:* @${i.jid.split("@")[0]}\n📼 *Número:* ${addNumberMais(i.jid)}\n🎲 *Método:* `
    if(i.request_method == "linked_group_join") {
      comunidade = await blackmd.groupMetadata(i.parent_group_jid)
      lista += `\"solicitação por comunidade\"\n🗂 *Comunidade:* ${comunidade.subject}`
    } else lista += `\"link de convite\"`
    caixa.push(lista)
  }
  return mention(`🧮 *Lista total ${req.length != 1 ? `dos ${req.length} participantes` : `do único participante`} na lista de espera deste grupo ↴*\n${caixa.map(c => c).join(`\n-\n`)}`)
} else if(args[0].toLowerCase() === "-aceitar") {
  if(!args[1]) return reply(`KD o número do usuário na lista? Ex:\n${prefix+command} -aceitar 1`)
  if(args[1].toLowerCase() === "all") {
    total = req.length
    nmr = 0
    for(a of req) {
      await sleep(700)
      aceitar(from, a.jid)
      nmr += 1
    }
    if(nmr >= total) {
      await sleep(500)
      return mention(`${nmr != 1 ? `Todos os ${nmr} participantes da lista foram aceitos` : `O único participante da lista foi aceito`} pelo admin @${sender.split("@")[0]} com sucesso ✅`)
    }
  } else {
    if(Number(args[1]) < 1 || Number(args[1]) > req.length) return reply(enviar.msg.notusu)
    usu = req[Number(args[1]) - 1].jid
    aceitar(from, usu)
    return mention(`O participante @${usu.split("@")[0]} foi aceito pelo admin @${sender.split("@")[0]} com sucesso ✅`)
  }
} else if(args[0].toLowerCase() === "-recusar") {
  if(!args[1]) return reply(`KD o número do usuário na lista? Ex:\n${prefix+command} -recusar 1`)
  if(args[1].toLowerCase() === "all") {
    total = req.length
    nmr = 0
    for(r of req) {
      await sleep(700)
      recusar(from, r.jid)
      nmr += 1
    }
    if(nmr >= total) {
      await sleep(500)
      return mention(`${nmr != 1 ? `Todos os ${nmr} participantes da lista foram recusados` : `O único participante da lista foi recusado`} com sucesso pelo admin @${sender.split("@")[0]} ♨`)
    }
  } else {
    if(Number(args[1]) < 1 || Number(args[1]) > req.length) return reply(enviar.msg.notusu)
    usu = req[Number(args[1]) - 1].jid
    recusar(from, usu)
    return mention(`O participante @${usu.split("@")[0]} foi recusado pelo admin @${sender.split("@")[0]} com sucesso ♨`)
  }
} else return reply(not)
break

case 'attacc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAcceptGroup) {
dataGp[0].acceptGroup.active = true
setGp(dataGp)
reply(`🌀 Ativou com sucesso o recurso de aceitar automaticamente o membro no grupo 📝`)
} else {
dataGp[0].acceptGroup.active = false
setGp(dataGp)
reply(`‼️ Desativou com sucesso o recurso de aceitar automaticamente o membro no grupo ✔️`)
}
break

case 'setattacc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAcceptGroup) return reply(`É necessário ativar o recurso de auto aceitação primeiro... Use ${prefix}attacc`)
nmr = Number(q.slice(0, q.length - 1))
letra = q.slice(q.length - 1, q.length).toLowerCase()
if(nmr <= 0) return reply(`O tempo precisa ser maior que 0... Ex: ${prefix+command} 10m`)
if(letra != "s" && letra != "m" && letra != "h") return reply(`Use apenas "s", "m" ou "h" para identificar o tempo, ex: ${prefix+command} 10m`)
if(letra == "s") multiplicador = 1
if(letra == "m") multiplicador = 60
if(letra == "h") multiplicador = 3600
nmr *= multiplicador
dataGp[0].acceptGroup.time = nmr
setGp(dataGp)
reply(`O cooldow de tempo para a aceitação automática no grupo ${groupName} foi atualizado para ${q} com sucesso ✅`)
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('Já Esta ativo')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('Ja esta Desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('Ja esta ativo')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('Ja esta Desativado')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('Ja esta ativo')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('Ja esta Desativado')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Já Esta ativo')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('Ja esta Desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('Ja esta ativo')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('Ja esta Desativado')
dataGp[0].antidoc = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('Ja esta ativo')
dataGp[0].antictt = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticontato neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('Ja esta Desativado')
dataGp[0].antictt = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {														 
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'addshieldgp'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(contar(q, '/') != 1) return reply(`> ${prefix+command} @pessoa/quantidade
_(essa "quantidade" remete a quantos links o usuário pode mandar antes de ser banido)_`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [marc, mxm] = barra.split('/')
usu = identArroba(marc)
if(isShieldGPuser(from, usu)) return reply(enviar.shield.gp.true)
addShieldGP(from, usu, mxm)
mention(`Usuário @${usu.split('@')[0]} está imune do ban ao enviar links de grupo...`)
break

case 'addshieldhard'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(contar(q, '/') != 1) return reply(`> ${prefix+command} @pessoa/quantidade
_(essa "quantidade" remete a quantos links o usuário pode mandar antes de ser banido)_`)
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [marc, mxm] = barra.split('/')
usu = identArroba(marc)
if(isShieldGPuser(from, usu)) return reply(enviar.shield.hard.true)
addShieldHARD(from, usu, mxm)
mention(`Usuário @${usu.split('@')[0]} está imune do ban ao enviar links em geral...`)
break

case 'rmshieldgp': case 'rmshieldhard'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!marc_tds) return reply(`Marque o usuário, a mensagem ou o @, de quem você quer retirar a proteção do anti link ${command == "rmshieldgp" ? `GP` : `HARD`}...`)
if(command == "rmshieldgp" && !isShieldGPuser(from, marc_tds)) return reply(enviar.shield.gp.false)
if(command == "rmshieldhard" && !isShieldHARDuser(from, marc_tds)) return reply(enviar.shield.hard.false)
rm = command == "rmshieldgp" ? rmShieldGP : rmShieldHARD
rm(from, marc_tds)
reply("Escudo do usuário removido com sucesso...")
break

case 'shieldgplist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!JSON.stringify(shieldantilinkgp).includes(from)) {
shieldantilinkgp.push({groupId: from, usus: []})
fs.writeFileSync("./base de dados/shieldantilinkgp.json", JSON.stringify(shieldantilinkgp))
}
AB = shieldantilinkgp.map(i => i.groupId).indexOf(from)
txt = `[ ❗ ] *Lista de usuários imunes ao ban por link de grupo:*\n`
for(i of shieldantilinkgp[AB].usus) {
  txt += `\n@${i.id.split('@')[0]}`
}
txt += `\n-> *Total:* ${shieldantilinkgp[AB].usus.length}`
mention(txt)
break

case 'shieldhardlist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!JSON.stringify(shieldantilinkhard).includes(from)) {
shieldantilinkhard.push({groupId: from, usus: []})
fs.writeFileSync("./base de dados/shieldantilinkhard.json", JSON.stringify(shieldantilinkhard))
}
AB = shieldantilinkhard.map(i => i.groupId).indexOf(from)
txt = `[ ❗ ] *lista de usuários imunes ao ban por link em geral:*\n`
for(i of shieldantilinkhard[AB].usus) {
  txt += `\n@${i.id.split('@')[0]}`
}
txt += `\n-> *Total:* ${shieldantilinkhard[AB].usus.length}`
mention(txt)
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('Ja esta ativo')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilinkgp 📝')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('Ja esta Desativado')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'banlinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBanlinkgp) return reply('Ja esta ativo')
dataGp[0].banlinkgp = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de banir & apagar os links de grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isBanlinkgp) return reply('Ja esta Desativado')
dataGp[0].banlinkgp = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de banir o usuário... Irei só apagar o link ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('Ja esta ativo')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antilink hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('Ja esta Desativado')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'banlinkhard':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isBanLinkHard) return reply('Ja esta ativo')
dataGp[0].banlinkhard = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de banir & apagar os links 📝')
} else if(Number(args[0]) === 0) {
if(!isBanLinkHard) return reply('Ja esta Desativado')
dataGp[0].banlinkhard = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de banir o usuário... Irei só apagar o link ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('Ja esta ativo')
dataGp[0].x9 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for Rebaixado ou promovido a adm 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('Ja esta Desativado')
dataGp[0].x9 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento..✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
obrigadoEXT.visualizarmsg = true
setObg(obrigadoEXT)
reply('🌀 Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado 📝')
} else if(isVisualizar) {
obrigadoEXT.visualizarmsg = false
setObg(obrigadoEXT)
reply('‼️ Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

/*case 'antispam':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiSpam) return reply('Ja esta ativo')
dataGp[0].antispam = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de ANTI SPAM neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiSpam) return reply('Ja esta Desativado')
dataGp[0].antispam = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de ANTI SPAM neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break*/

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('Ja esta ativo')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de revelar visu única neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('Ja esta Desativado')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de revelar visu única neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'admcmd':
case 'blockgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('✅ Ativou com sucesso o recurso de só adm utilizar comandos neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Desativou o recurso de Só ADM utilizar comandos neste grupo ✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('Ja esta ativo')
dataGp[0].antifake = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de antifake neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('Ja esta Desativado')
dataGp[0].antifake = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `💌 *Olá @${sender.split("@")[0]}, os prefixos disponíveis são:*${dataGp[0].prefixos.map(i => `『 ${i} 』`).join("<->")}`
mention(bla)
break

case 'addprefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(antiModLetra(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply("Não pode adc mais de um prefixo de uma só vez...")
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo [ ${q.trim()} ] adicionado com sucesso...`)
break

case 'tirarprefixo':
case 'delprefix':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(antiModLetra(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply("Não pode remover mais de um prefixo de uma só vez...")
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo [ ${q.trim()} ] removido com sucesso...`)
break

case 'infomultiprefixo': case 'infomultiprefix':
if(!isOwner) return reply(enviar.msg.donosmt)
mention(`${tempo} @${sender.split("@")[0]}, Irei informar como funciona a função de multiplos prefixo.

Essa função é por grupo, feito em um, não será feito em todos.

Primeiramente, ativar ele com 

${prefix}multiprefixo usando primeira vez ele ativa, depois ele desativa... E assim vai em diante..

Contém os seguintes comandos:

${prefix}addprefixo\n\n${prefix}tirarprefixo\n\n${prefix}prefixos

Exemplo do primeiro comando >

${prefix}addprefixo &

O & que usei como exemplo, vai passar a ser um prefixo oficial do grupo, então se usar ${prefix} ou & funcionará, pode adicionar quantos quiser.. 

E pra tirar vai fazer o seguinte\n${prefix}tirarprefixo &

E pra verificar os prefixos que foi adicionado 

${prefix}prefixos

É isso, boa sorte...`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de multi prefixos neste grupo 📝')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de multi prefixos neste grupo✔️')
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de anticatalogo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Ja esta Desativado')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de bem vindo neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':
case 'welcome2':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo3':
case 'welcome3':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom3) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[2].bemvindo3 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom3) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[2].bemvindo3 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo4':
case 'welcome4':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom4) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[3].bemvindo4 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom4) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[3].bemvindo4 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'bemvindo5':
case 'welcome5':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply(`${prefix+command} 1 | ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isWelkom5) return reply('✅ O recurso já está ativado no grupo ✅')
dataGp[0].wellcome[4].bemvindo5 = true
setGp(dataGp)
reply('✅O recurso foi ativado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom5) return reply('❌ O recurso não está ativado no grupo ❌')
dataGp[0].wellcome[4].bemvindo5 = false
setGp(dataGp)
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas2 ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída2 ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'stickerbv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom3) return reply(`Ative o ${prefix}bemvindo3 1`)
fig = `./base de dados/grupos/figurinhas/sticker-bv-${from}.webp`
if(Number(args[0]) === 0 && fs.existsSync(fig)) {DLT_FL(fig)
dataGp[0].wellcome[2].selobv = false
setGp(dataGp)
return reply(`A figurinha do bem vindo foi deletada com sucesso ✔`)}
if(!isQuotedSticker) return reply(`Marque uma figurinha...`)
sticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
media = await getFileBuffer(sticker, `sticker`)
fs.writeFileSync(fig, media)
if(q) {dataGp[0].wellcome[2].selobv = true
dataGp[0].wellcome[2].legendabv = q
setGp(dataGp)}
reply(`A figurinha do bem vindo foi definida com sucesso ✅`)
break

case 'stickersaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom3) return reply(`Ative o ${prefix}bemvindo3 1`)
fig = `./base de dados/grupos/figurinhas/sticker-saiu-${from}.webp`
if(Number(args[0]) === 0 && fs.existsSync(fig)) {DLT_FL(fig)
dataGp[0].wellcome[2].selosaiu = false
setGp(dataGp)
return reply(`A figurinha de saída foi deletada com sucesso ✔`)}
if(!isQuotedSticker) return reply(`Marque uma figurinha...`)
sticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
media = await getFileBuffer(sticker, `sticker`)
fs.writeFileSync(fig, media)
if(q) {dataGp[0].wellcome[2].selosaiu = true
dataGp[0].wellcome[2].legendasaiu = q
setGp(dataGp)}
reply(`A figurinha de saída foi definida com sucesso ✅`)
break

case 'audiobv':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom4) return reply(`Ative o ${prefix}bemvindo4 1`)
mp3 = `./base de dados/grupos/audios/audio-bv-${from}.mp3`
if(Number(args[0]) === 0 && fs.existsSync(mp3)) {DLT_FL(mp3)
dataGp[0].wellcome[3].selobv = false
setGp(dataGp)
return reply(`O áudio do bem vindo foi deletado com sucesso ✔`)}
if(!isQuotedAudio) return reply(`Marque um áudio...`)
audio = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
media = await getFileBuffer(audio, 'audio')
fs.writeFileSync(mp3, media)
if(q) {dataGp[0].wellcome[3].selobv = true
dataGp[0].wellcome[3].legendabv = q
setGp(dataGp)}
reply(`O áudio do bem vindo foi definido com sucesso ✅`)
break

case 'audiosaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isWelkom4) return reply(`Ative o ${prefix}bemvindo4 1`)
mp3 = `./base de dados/grupos/audios/audio-saiu-${from}.mp3`
if(Number(args[0]) === 0 && fs.existsSync(mp3)) {DLT_FL(mp3)
dataGp[0].wellcome[3].selosaiu = false
setGp(dataGp)
return reply(`O áudio de saída foi deletado com sucesso ✔`)}
if(!isQuotedAudio) return reply(`Marque um áudio...`)
audio = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
media = await getFileBuffer(audio, 'audio')
fs.writeFileSync(mp3, media)
if(q) {dataGp[0].wellcome[3].selosaiu = true
dataGp[0].wellcome[3].legendabv = q
setGp(dataGp)}
reply(`A figurinha de saída foi definida com sucesso ✅`)
break

case 'legendabv5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = q
if(isWelkom) {
dataGp[0].wellcome[4].legendabv = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de boas vindas ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo5 1`)
}
break

case 'legendasaiu5':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = q
if(isWelkom) {
dataGp[0].wellcome[4].legendasaiu = Number(teks) === 0 ? 0 : teks
setGp(dataGp)
reply(`*Mensagem de saída ${Number(teks) !== 0 ? `definida` : `desativada`} com sucesso!*`)
} else {
reply(`Ative o ${prefix}bemvindo5 1`)
}
break

case 'legenda-estrangeiro':
case 'legenda-estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda-video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda-imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda-documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de Documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban* 🙅🏻‍♂️`)
break

case 'autobang':
case 'listanegrag':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./dono/config-all.json', JSON.stringify(obrigadoEXT, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'delautobang':
case 'tirardalistag':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./dono/config-all.json', JSON.stringify(obrigadoEXT, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'admautoban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply('Precisa ser Dono')
if(!q.includes(`chat.whatsapp.com`)) return reply(`Insira o link do grupo...`)
var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
    var [_, code] = q.match(linkRegex) || []
    if (!code)return reply('Link Invalido')
    var res = await blackmd.groupAcceptInvite(code)
reply("espere um momento")
resp = await blackmd.groupMetadata(res)
ggg = resp.participants.filter((i) => i.admin)
nunber = ``
for(number of ggg){
await delay(1000)
dataGp[0].listanegra.push(number.id)
setGp(dataGp)
nunber += `# ${number.id.match(/([0-9A-Za-z]{10,14})/i)[0]}\n`
}
reply(`*Números Adicionados A Lista De Autoban*
*${ggg.length} Pessoas Adicionadas A Lista De Autoban*
${nunber}`)
await delay(1000)
blackmd.groupLeave(resp.id)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `⇒ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban 🥵*'
reply(teks)
break

case 'savemp3': case 'savem4a':
if(!isOwner) return reply(enviar.msg.donosmt)
var [tx, rct] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!tx) return reply("KD o título do áudio?")
if(antiModLetra(tx)) return reply("Não pode letras modificadas nem emoji..")
if(!isQuotedAudio) return reply("Marque um áudio por favor...")
mod = rmLetras(tx)
ini = mod.split(" ").join("_")
media = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
fim = media.mimetype.split("/")[1] == "mpeg" ? "mp3" : media.mimetype.split("/")[1] == "mp4" ? "m4a" : "ogg"
nome = ini+"."+fim
doc = await getFileBuffer(media, 'audio')
fs.writeFileSync(`./database/audios/save/${nome}`, doc)
AB = audios.map(i => i.rm).indexOf(nome)
if(AB >= 0) {
  audios.splice(AB, 1)
  saveJSON(audios, "./database/data/audios.json")
}
audios.push({txt: mod, rm: nome, emoji: rct || ""})
saveJSON(audios, "./database/data/audios.json")
reply(`*O áudio ${nome} foi salvo na pasta com sucesso...* ✅`)
break

case 'delmp3': case 'delm4a':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o título do áudio?")
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..")
mod = rmLetras(q)
ini = mod.split(" ").join("_")
exec(`ls ./database/audios/save`, (err, stdout) => {
  if(err) {
    console.log(err)
  }
  if(stdout) {
    nmr = -1
    caixa = []
    for(i of audios) {
      nmr += 1
      if(ini == i.rm.split(`.`)[0]) caixa.push(nmr)
    }
    if(caixa.length <= 0) return reply(`[❗] áudio não encontrado ou inexistente ❌`)
    AB = caixa[0]
    nome = audios[AB].rm
    DLT_FL(`./database/audios/save/${nome}`)
    audios.splice(AB, 1)
    saveJSON(audios, "./database/data/audios.json")
    reply(`*O áudio ${nome} foi deletado da pasta com sucesso...* ✅`)
  }
})
break

case 'listmp3': case 'listm4a':
if(!isOwner) return reply(enviar.msg.donosmt)
if(audios.length <= 0) return reply("Não há áudios salvos na pasta")
txt = `🎧 *Total:* ${audios.length}`
for(i = 0; i < audios.length; i++) {
txt += `\n${audios[i].emoji.length > 0 ? audios[i].emoji : react1[Math.floor(Math.random()*react1.length)]}⃤ »${i+1}« ${audios[i].rm}`
}
reply(txt)
break

case 'botversion':
botv = JSON.parse(fs.readFileSync(`./package.json`)).version
sendButton(from, {text: `🎲 Versão atual do bot - ${botv}`, footer: `New BARBA BRANCA Oficial Update`}, blackmd, sender, [{type: `copy_text`, text: NomeDoBot, url: barbasite}], seloctt)
break

case 'baileys':
blv = JSON.parse(fs.readFileSync(`./node_modules/@whiskeysockets/baileys/package.json`))
sendButton(from, {text: `${tempo_emoji} ${tempo} ${pushname}..`, footer: `Baileys Version - ${blv.version}`}, blackmd, sender, [{type: `copy_text`, text: blv.name, url: blv.homepage}], seloctt)
break

case 'ia': case 'ias':
setTimeout(() => {reagir(from, "🤖")}, 300)
reply(`IAs disponíveis no bot...
× ${prefix}Lucas (semelhante ao chatgpt V4)
× ${prefix}Matty (semelhante ao Bard)
× ${prefix}Jeff (vai responder em texto)
× ${prefix}Katy (vai responder em áudio)
`)
break

case 'movielist'://by jherffeson & gabs
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir(from, "🎬")
try {
ABC = await fetchJson(`${barbasite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
txt = `${`- `.repeat(20)}`
for(i of ABC.resultado) {
  txt += `\n*Nome:* ${i.title}\n*Link:* ${i.url}\n${`- `.repeat(20)}`
}
reply(txt)
} catch {
reply(`Erro`)
}
break

case 'movie'://by jherffeson & gabs
if(!q) return reply("Assim: "+prefix+command+" nome do filme")
reagir(from, "🎬")
if(!q.includes(`m.imdb.com`)) {
try {
jherffeson = await fetchJson(`${barbasite}/api/search/imdb?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
linkM4 = jherffeson.resultado[0].url
} catch {
return reply("Não foi possível encontrar o filme pedido")
}
} else {
linkM4 = q
}
try {
ABC = await fetchJson(`${barbasite}/api/search/imdb_info?url=${linkM4}&apikey=`+API_KEY_BARBA)
i = ABC.resultado
lançamento = i.dataLancamento
notas = i.nota
money = i.dinheiro.orcamento
escrito = `${money.valor}`
nmr = escrito.length
dindin = nmr > 9 ? escrito.slice(0, nmr-9)+"B" : nmr > 6 ? escrito.slice(0, nmr-6)+"M" : nmr > 3 ? escrito.slice(0, nmr-3)+"K" : escrito
txt = `❪🎬ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎: ${i.titulo}
❪🧾ฺ࣭࣪͘ꕸ▸ 𝙽𝚘𝚖𝚎 𝙾𝚏𝚒𝚌𝚒𝚊𝚕: ${i.tituloOriginal}
❪💢ฺ࣭࣪͘ꕸ▸ 𝚃𝚒𝚙𝚘: ${i.tipo}
❪🎥ฺ࣭࣪͘ꕸ▸ 𝙶ê𝚗𝚎𝚛𝚘: ${i.genero.map(g => g).join(', ')}
❪⏱️ฺ࣭࣪͘ꕸ▸ 𝙳𝚞𝚛𝚊çã𝚘: ${i.duracao}
❪📟ฺ࣭࣪͘ꕸ▸ 𝙻𝚊𝚗ç𝚊𝚖𝚎𝚗𝚝𝚘: ${Number(lançamento.dia) < 10 ? `0${lançamento.dia}` : lançamento.dia}/${Number(lançamento.mes) < 10 ? `0${lançamento.mes}` : lançamento.mes}/${lançamento.ano}
❪📊ฺ࣭࣪͘ꕸ▸ 𝙰𝚟𝚊𝚕𝚒𝚊çã𝚘: ${notas.ponto}/10 (${notas.total} votos)
❪💱ฺ࣭࣪͘ꕸ▸ 𝙾𝚛ç𝚊𝚖𝚎𝚗𝚝𝚘: ${money.moeda} ${dindin}
❪⚒️ฺ࣭࣪͘ꕸ▸ 𝙿𝚛𝚘𝚍𝚞çã𝚘: ${i.producao.map(p => p).join(', ')}
❪👤ฺ࣭࣪͘ꕸ▸ 𝙳𝚒𝚛𝚎çã𝚘: ${i.diretores[0].direcao.map(d => d).join(', ')}

〘 𝙀𝙇𝙀𝙉𝘾𝙊 〙`
for(e of i.elencoPrincipal) {
  txt += `\n⇒ *${e.nome}* (${e.categoria} - ${e.personagem.map(a => a).join(', ')})`
}
txt += `\n\n▧⃯⃟𝙎𝙄𝙉𝙊𝙋𝙎𝙀৴▸ ${i.trama}`
blackmd.sendMessage(from, {text: txt, contextInfo: {
  externalAdReply: {
    title: `𝙈𝙊𝙑𝙄𝙀 𝙄𝙉𝙁𝙊 𝘽𝙔 𝘽𝘼𝙍𝘽𝘼 𝙈𝘿`,
    body: ``,
    thumbnail: await getBuffer(i.capa),
    mediaType: 1,
    showAdAttribution: true,
    sourceUrl: linkM4
  }
}}, {quoted: info})
} catch(err) {
console.log(err)
reply("Não foi possível encontrar os dados desse filme, ou pode ser que a api de pesquisas caiu...")
}
break

case 'matty':
if(!q) return reply("Retorne após o comando o título de sua pesquisa")
try {
reply("*Aguarde enquanto eu pesquiso...* 🫡")
ABC = await fetchJson(`${barbasite}/api/ia/matty?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
if(ABC.imagem == true) return blackmd.sendMessage(from, {image: {url: ABC.thumbnail}, caption: ABC.resultado}, {quoted: seloctt})
reply(ABC.resultado)
} catch(e) {
console.log(e)
reply("Erro")
}
break;

case 'bardimg':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
ABC = await fetchJson(barbasite+`/api/ia/bardimg?q=${encodeURI(q)}&url=${link}&apikey=`+API_KEY_BARBA)
reply(ABC.resultado)
} else {
reply('Marque uma imagem para eu atribuir o efeito')
}
break

case 'samuel': case 'lucas': case 'chatgpt': case 'gpt':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
reagir(from, "🌐")
if(!q) return reply(`Pergunte algo, e o ${command} irá responder...`)
try {
reply("*Aguarde enquanto eu pesquiso...* 🫡");
ABC = await fetchJson(`https://blackmd.online/api/ia/gpt?query=`+encodeURI(q)+`&apikey=`+API_KEY_BARBA)
reply(ABC.resultado)
} catch (e) {
reply('Erro')
}
break

case 'crimg': case 'imagegpt': case 'midjourney': case 'mdj': case 'imageai':
setTimeout(() => {reagir(from, "🔰")}, 300)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(`KD o título da pesquisa?`)
try {
const imageBuffer = await superimg(q)
blackmd.sendMessage(from, {image: imageBuffer}, {quoted: info})
} catch(e) {
console.log(e)
reply(`Erro`)
}
break

case 'jeff': case 'simi':
setTimeout(() => {reagir(from, "🤓")}, 300)
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if(!q) return reply(`Pergunte algo junto ao comando...`)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'katy':
setTimeout(() => {reagir(from, "😍")}, 300)
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if(!q) return reply(`Pergunte algo junto ao comando...`)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
const gtts = require('./armor/funcoes/gtts')(`pt`)
dtt = datasimi.message
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
blackmd.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isOwner) return reply("Indisponível")
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo Simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2':
if(!isOwner) return reply("Indisponível")
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo 😗..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto figurinhas neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autoresposta':
setTimeout(() => {reagir(from, "🔊")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 / ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de auto resposta neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de auto resposta neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modozoeira':
case 'modozueira':
setTimeout(() => {reagir(from, "🤪")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins && !isOwner) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`${prefix+command} 1 / ${prefix+command} 0`)
if(Number(args[0]) === 1) {
if(isModobn) return reply('o modozoeira já está ativo')
dataGp[0].jogos = true
setGp(dataGp)
reply('🎯 Ativou com sucesso o recurso de Modo zoeira neste grupo 🪀')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('o modozoeira já está Desativado')
dataGp[0].jogos = false
setGp(dataGp)
reply('🎯 Desativou com sucesso o recurso de Modo zoeira neste grupo 🪀')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'rank':
case 'ranklevel':
case 'rankpatente':
if(!isGroup) return reply(enviar.msg.grupo)
setTimeout(() => {reagir(from, "👑")}, 300)
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
if(level.length > 4) {
jherffeson = level.map(i => i)
rank = jherffeson.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
if(level.length > 10) {
var totalR = 10
} else {
var totalR = level.length
}
txt = `▁▂▃▄▅▆▇█ 🔭 𝚁𝙰𝙽𝙺 𝙻𝙴𝚅𝙴𝙻 🔭 █▇▆▅▄▃▂▁`
for ( i = 0; i < totalR; i++) {
  if(i != null) {
    data = levelDBuser(rank[i].id)
txt += `

╓─━⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓⎔⎓━─┒
┢╕\t\t\t🎮 ${NomeDoBot} 🎮
╽╟ ~>『 »${i+1}« 』
╽╟ • ɴɪᴄᴋ: ${getname(data.id)}
╽╟ • ɪᴅ: wa.me/${data.id.split('@')[0]}
╽╟ • ʟᴇᴠᴇʟ: ${data.level}
╽╟ • ᴘᴀᴛᴇɴᴛᴇ: ${patente(data.contador)}
╽╟ • xᴘ: ${data.contador}
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`
}
}
caixa = []
for ( i = 0; i < level.length; i++) {
  caixa.push({id: rank[i].id})
}
AB = caixa.map(i => i.id).indexOf(sender)
txt += `\n\n${AB > 9 ? `• ꜱᴜᴀ ᴩᴏꜱɪçãᴏ ɴᴏ ʀᴀɴᴋ ~> ${AB + 1}\n` : ``}🄱🅈: ${NickDono}`
reply(txt)
} else { reply(`Sem dados 🤷🏻‍♂️`) }
break

case 'top10': case 'rank10':
mapa = level.map(i => i)
rank = mapa.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
img = barbasite+`/api/canvas/top?message=${encodeURI("XP:")}&fundo=https://telegra.ph/file/67d9c49eecc1cd1fcd637.jpg`
try { usu1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[0].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu1 = semfoto }
try { usu2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[1].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu2 = semfoto }
try { usu3 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[2].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu3 = semfoto }
try { usu4 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[3].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu4 = semfoto }
try { usu5 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[4].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu5 = semfoto }
try { usu6 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[5].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu6 = semfoto }
try { usu7 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[6].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu7 = semfoto }
try { usu8 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[7].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu8 = semfoto }
try { usu9 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[8].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu9 = semfoto }
try { usu10 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[9].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu10 = semfoto }
foto = [usu1, usu2, usu3, usu4, usu5, usu6, usu7, usu8, usu9, usu10]
for(i = 0; i < 10; i++) {
  if(i != null) {
    usu = rank[i]
    nmr = String(i + 1)
    img += `&foto${nmr}=${foto[i]}&nome${nmr}=${encodeURI(getname(usu.id))}&xp${nmr}=${usu.contador}`
  }
}
sendImage(from, img)
break

case 'top1': case 'rank1':
mapa = level.map(i => i)
rank = mapa.sort((a, b) => (a.contador < b.contador) ? 0 : -1)
img = barbasite+`/api/canvas/top?message=${encodeURI("XP:")}&fundo=https://telegra.ph/file/67d9c49eecc1cd1fcd637.jpg`
try { usu1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[0].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu1 = semfoto }
try { usu2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[1].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu2 = semfoto }
try { usu3 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[2].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu3 = semfoto }
try { usu4 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[3].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu4 = semfoto }
try { usu5 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[4].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu5 = semfoto }
try { usu6 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[5].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu6 = semfoto }
try { usu7 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[6].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu7 = semfoto }
try { usu8 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[7].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu8 = semfoto }
try { usu9 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[8].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu9 = semfoto }
try { usu10 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${rank[9].id.split('@')[0]}@c.us`, 'image'))}`)).data } catch { usu10 = semfoto }
foto = [usu1, usu2, usu3, usu4, usu5, usu6, usu7, usu8, usu9, usu10]
for(i = 0; i < 10; i++) {
  if(i != null) {
    usu = rank[i]
    nmr = String(i + 1)
    img += `&foto${nmr}=${foto[i]}&nome${nmr}=${encodeURI(getname(usu.id))}&xp${nmr}=${usu.contador}`
  }
}
sendStickerFromUrl(from, img)
break

case 'patente':
case 'level':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
if(isYouInLevel(sender)) {
levelstts = levelDBuser(sender)
myexp = levelstts.contador
newpatente = patente(myexp)

AB = dbpt.map(d => d.pat).indexOf(newpatente)
newtt = myexp < 10000000 ? myexp < 5000000 ? dbpt[AB].nmr : 5000000 : myexp
newcont = myexp < 10000000 ? myexp < 5000000 ? dbpt[AB + 1].nmr : 10000000 : myexp

jherffeson = level.map(i => i)
rank = jherffeson.sort((a, b) => (a.contador < b.contador) ? 0 : -1)

bar = myexp < 10000000 ? barrinha((myexp - newtt), (newcont - newtt)) : ""
sub = newcont - myexp
//==========reply===========\\
leveltxt = `┏──━━◤ 𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶 ◢━━──┓
╽
╟┓
║┢ 𝙽𝙸𝙲𝙺: ${pushname}
║╽
║┢ 𝙻𝙴𝚅𝙴𝙻: ${levelstts.level}
║╽
║┢ 𝙿𝙰𝚃𝙴𝙽𝚃𝙴: ${newpatente}
║╽
║┢ 𝚇𝙿: ${myexp} ${myexp < 10000000 ? `-> ${newcont}` : ``}
║╽${myexp < 10000000 ? `${bar}\n║╽` : ``}
╙┷━━━━━━━───━━━━━━━┛${myexp < 10000000 ? `\n_Falta${Number(sub) > 1 ? `m` : ``} ${sub} XP para upar o próximo level_` : `_Você alcançou a patente máxima_`}`
a1 = levelstts.level
a2 = (rank.map(i => i.id).indexOf(sender)) + 1
a3 = myexp
a4 = myexp < 10000000 ? newcont : myexp
a5 = Number(myexp < 10000000 ? (((myexp - newtt) / (newcont - newtt)) * 100) : 100).toFixed(0)
} else {
leveltxt = `┏──━━◤ 𝙻𝙴𝚅𝙴𝙻𝙸𝙽𝙶 ◢━━──┓
╽
╟┓
║┢ 𝙽𝙸𝙲𝙺: ${pushname}
║╽
║┢ 𝙻𝙴𝚅𝙴𝙻: 1
║╽
║┢ 𝙿𝙰𝚃𝙴𝙽𝚃𝙴: Bronze I 🥉
║╽
║┢ 𝚇𝙿: 0
║╽
╙┷━━━━━━━───━━━━━━━┛`
a1 = 0
a2 = level.length + 1
a3 = 0
a4 = 100
a5 = 0
}
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
img = barbasite+`/api/canvas/musicardbun/level?nome=${encodeURI(pushname)}&level=${a1}&brightness=100&perfil=${ppimg}&rank=${a2}&xpb=${a3}&xpa=${a4}&progresso=${a5}`
sendImage(from, img, leveltxt, seloctt)
break

case 'patentes':
if(!isLevelingOn) return reply(`*É necessário ativar o sistema de level primeiro* 🙆🏻‍♂️
*Use* ${prefix}leveling 1`)
setTimeout(() => {reagir(from, react2)}, 300)
reply(`╔═══════════━━──${dbpt.map(i => `
╟ • ${i.pat}
╚═╦─ • ${i.xp} XP ✨`).join(`
─━╩══════╗
╔════════╩══━━──`)}
─━╩═════════━━──`)
break

case 'addlevel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de level que deseja adicionar
Ex: ${prefix+command} 2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
addlevel(usu, b)
reply(`${b} leve${Number(b) > 1 ? `is` : `l`} adicionado${Number(b) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarlevel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de level que deseja remover
Ex: ${prefix+command} 2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
rmlevel(usu, b)
reply(`${b} leve${Number(b) > 1 ? `is` : `l`} retirado${Number(b) > 1 ? `s` : ``} deste usuário...`)
break

case 'addxp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de XP que deseja adicionar
Ex: ${prefix+command} 2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
addXP(usu, b)
reply(`${b} experiência${Number(b) > 1 ? `s` : ``} fo${Number(b) > 1 ? `ram` : `i`} adicionada${Number(b) > 1 ? `s` : ``} a este usuário...`)
break

case 'tirarxp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Digite o número do usuário e a quantidade de XP que deseja adicionar
Ex: ${prefix+command} 2`)
var [a, b] = q.split(`/`)
usu = rmLetras(a) === "me" ? sender : identArroba(a)
if(!isYouInLevel(usu)) return reply(enviar.msg.notusu)
if(Number(b) <= 0) return reply(`O número precisa ser maior que 0...`)
if(b.includes(".")) return reply("Não pode número decimal")
rmXP(usu, b)
reply(`${b} experiência${Number(b) > 1 ? `s` : ``} fo${Number(b) > 1 ? `ram` : `i`} retirada${Number(b) > 1 ? `s` : ``} deste usuário...`)
break

case 'blocklevel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque a pessoa que deseja bloquear do contador")
if(isBlockGetLevelUser(marc_tds)) return reply("Este usuário já está bloqueado...")
blockLevelUser(marc_tds);
reply("✅ Usuário bloqueado do contador com sucesso... As interações do mesmo não serão mais contabilizadas 🔰")
break

case 'unblocklevel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque a pessoa que deseja bloquear do contador")
if(!isBlockGetLevelUser(marc_tds)) return reply("Este usuário não está bloqueado...")
unBlockLevelUser(marc_tds);
reply("✅ Usuário desbloqueado do contador com sucesso... As interações do mesmo voltarão a serem contabilizadas 🔰")
break

case 'blocklevel-list': case 'blocklevellist':
if(!isOwner) return reply(enviar.msg.donosmt)
txt = `[ ❗ ]  *Lista de usuários bloqueados do contador de XP:*\n`
let blocklevellist = 0
for(i = 0; i < level.length; i++) {
  if(level[i].block == true) {
    txt += `⇒ @${level[i].id.split('@')[0]}\n`
    blocklevellist += 1
  }
}
txt += `\n♨️ Total: ${blocklevellist}`
if(blocklevellist > 0) return mention(txt)
reply("Não há usuários bloqueados")
break

case 'execdblevel':
if(!isOwner && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
caixa = []
ttl = 0
adc = 0
ingfoo.sort((a, b) => (a[0] < b.length))
for(i = 0; i < ingfoo.length; i++) {
  grupo = (await blackmd.groupMetadata(ingfoo[i].id)).participants
  for(g of grupo) {
    ttl += 1
    if(isYouInLevel(g.id)) {
      adc += 1
      caixa.push(levelDBuser(g.id))
    }
  }
}
sub = ttl - adc
if(sub <= 0) return reply(`Todos os users do level estão nos grupos com o bot...`)
saveLeVeLdb(caixa);
reply(sub > 1 ? `Foram encontrados/removidos do sistema de leveling ${sub} usuários que não estavam presentes em nenhum grupo com o bot...` : `1 único usu foi deletado... Nem sei quem era kkkk`)
break

case 'rmlevel':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque a pessoa que deseja apagar do contador")
if(!JSON.stringify(level).includes(marc_tds)) return reply("Este usuário não está no contador...")
AB = level.map(i => i.id).indexOf(marc_tds)
level.splice(AB, 1)
saveLeVeLdb(level);
reply("✅ Usuário apagado do contador com sucesso...")
break

case 'transferirlevel': case 'trfrlv':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Este comando é para transferir o level e XP do número antigo de um usuário para o seu novo número... Retorne após o comando o número antigo do usuário, e o seu novo número, separando ambos com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/${addNumberMais(randomUser)}`)
usu1 = identArroba(q.split(`/`)[0])
usu2 = identArroba(q.split(`/`)[1])
if(!isYouInLevel(usu1)) return mention(`O usuário @${usu1.split("@")[0]} não está na database do level...`)
if(!isYouInLevel(usu2)) return mention(`O usuário @${usu2.split("@")[0]} não está na database do level...`)
lv = levelDBuser(usu1).level
cntd = levelDBuser(usu1).contador
addlevel(usu2, lv)
addXP(usu2, cntd)
AB = level.map(i => i.id).indexOf(usu1)
level.splice(AB, 1)
saveLeVeLdb(level)
reply(`Todos os ${lv} leveis e ${cntd} XP foram transferidos para o usuário @${usu2.split("@")[0]} com sucesso ✔`)
break

case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('*[ Adicionar parâmetro 1 ou 0 ]*')
}
break

case 'gerarcard':
if(!isOwner) return reply(enviar.msg.donosmt)
var [i, v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
if(!i) return reply(`Marque com @ o usuário que vc quer adc o card`)
usu = i.toLowerCase() == "me" ? sender : identArroba(i)
if(!isJsonIncludes(cardxp, usu)) {
cardxp.push({id: usu, mapa: 0, active: false, save: "00", tempo: 0, cards: []})
saveJSON(cardxp, "./base de dados/cardxp.json")
}
velocidade = ["2x", "3x"]
quantidade = ["24h", "1d", "48h", "2d", "3d", "7d"]
if(!velocidade.includes(v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
• 2x
• 3x

Exemplo: ${prefix+command} @/2x`)
if(!quantidade.includes(d.toLowerCase())) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
• 24h
• 48h
• 3d
• 7d

Exemplo: ${prefix+command} @/2x/48h`)
if(v.toLowerCase() == "2x")  multiplicador = 2
if(v.toLowerCase() == "3x") multiplicador = 3
if(d.toLowerCase() == "24h" || d.toLowerCase() == "1d") quant = 24
if(d.toLowerCase() == "48h" || d.toLowerCase() == "2d") quant = 48
if(d.toLowerCase() == "3d") quant = 72
if(d.toLowerCase() == "7d") quant = 168
AB = cardxp.map(i => i.id).indexOf(usu)
saveJSON(moedas, "./base de dados/cardxp.json")
cardxp[AB].cards.push({multi: multiplicador, dias: quant})
mention(`🔖 *_Card XP ${multiplicador}x ativo por ${quant == 24 ? "24h" : (timeday / 24) +"d"} validado ao usuario @${usu.split("@")[0]} com sucesso... Use ${prefix}setcard para ativar 🪽_*`)
break

case 'gerarkeycard':
if(!isOwner) return reply(enviar.msg.donosmt)
var [v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
velocidade = ["2x", "3x"]
quantidade = ["24h", "1d", "48h", "2d", "3d", "7d"]
if(!velocidade.includes(v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
• 2x
• 3x

Exemplo: ${prefix+command} 2x`)
if(!quantidade.includes(d.toLowerCase())) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
• 24h
• 48h
• 3d
• 7d

Exemplo: ${prefix+command} 2x/48h`)
if(v.toLowerCase() == "2x")  multiplicador = 2
if(v.toLowerCase() == "3x") multiplicador = 3
if(d.toLowerCase() == "24h" || d.toLowerCase() == "1d") quant = 24
if(d.toLowerCase() == "48h" || d.toLowerCase() == "2d") quant = 48
if(d.toLowerCase() == "3d") quant = 72
if(d.toLowerCase() == "7d") quant = 168
BC = moedas.map(i => i.id).indexOf("jherffeson")
idks = gerarkey(multiplicador * quant)
moedas[BC].chaves.push({key: idks, tipo: 5, dias: quant, multi: multiplicador, cliente: sender, valor: 0})//tipo 5 = card XP
mention(`_Key gerada com sucesso_ ✅

-> ${idks} <-

*Descrição:*
• Multiplicador: ${multiplicador}x
• Quantidade: ${quant == 24 ? "24h" : (quant / 24) + "d"}`)
break

case 'buycard':
if(!isJsonIncludes(moedas, sender)) return reply("Seu saldo parece zerado... Use o comando "+prefix+"me para liberar acesso a tabela de valores e "+prefix+"recarga para adicionar o saldo a sua conta")
if(!isJsonIncludes(cardxp, sender)) {
cardxp.push({id: sender, mapa: 0, active: false, save: "00", tempo: 0, cards: []})
saveJSON(cardxp, "./base de dados/cardxp.json")
}
var [v, d] = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/").split("/")
velocidade = ["2x", "3x"]
quantidade = ["24h", "1d", "48h", "2d", "3d", "7d"]
if(!velocidade.includes(v.toLowerCase())) return reply(`Você deve retornar após o comando, o multiplicador de XP, entre os abaixo:
• 2x
• 3x

Exemplo: ${prefix+command} 2x`)
if(!quantidade.includes(d.toLowerCase())) return reply(`Você deve retornar após o multiplicador de XP, a quantidade de dias do card, entre os abaixo:
• 24h
• 48h
• 3d
• 7d

Exemplo: ${prefix+command} 2x/48h`)
if(v.toLowerCase() == "2x") { nmr = 2.5; multiplicador = 2 }
if(v.toLowerCase() == "3x") { nmr = 4.5; multiplicador = 3 }
if(d.toLowerCase() == "24h" || d.toLowerCase() == "1d") { nmr *= 2; quant = 24 }
if(d.toLowerCase() == "48h" || d.toLowerCase() == "2d") { nmr *= 3; quant = 48 }
if(d.toLowerCase() == "3d") { nmr *= 4; quant = 72 }
if(d.toLowerCase() == "7d") { nmr *= 8; quant = 168 }
AB = moedas.map(i => i.id).indexOf(sender)
if(moedas[AB].saldo < nmr) return reply(`[❗] Não foi possível completar a compra... O combo card XP ${v} válido por ${d} custa R$ ${Number(nmr).toFixed(2)} ❌`)
moedas[AB].saldo -= nmr
saveJSON(moedas, "./base de funcionamento/aluguel/moedas.json")
BC = moedas.map(i => i.id).indexOf("jherffeson")
idks = gerarkey(nmr)
moedas[BC].chaves.push({key: idks, tipo: 5, dias: quant, multi: multiplicador, cliente: sender, valor: nmr})//tipo 5 = card XP
if(isGroup) reply("Te enviei no PV ✋🏽😳🤚🏽")
await sleep(1000)
sendMess(sender, `🔑 Te enviarei abaixo a Key de acesso ao card XP... Copie e cole a mesma no grupo ou no PV para ativar seu card.\nLembrando que você pode doar para alguém ou guardar para usar no futuro... Caso queira se desfazer da mesma, use o comando ${prefix}reembolsar

_(caso a mesma não chegue, ela pode ser vista no comando ${prefix}mycard)_`)
await sleep(1000)
sendMess(sender, idks)
break

case 'mycard':
if(!isJsonIncludes(cardxp, sender)) {
cardxp.push({id: sender, mapa: 0, active: false, save: "00", tempo: 0, cards: []})
saveJSON(cardxp, "./base de dados/cardxp.json")
}
AB = cardxp.map(i => i.id).indexOf(sender)
card = cardxp[AB].cards
txt = `🔖 *Seus cartões disponíveis:*`
for(i = 0; i < card.length; i++) {
  txt += `\n\n»${i + 1}«
• *Multiplicador:* ${card[i].multi}x
• *Tempo:* ${card[i].horas == 24 ? "24h" : (card[i].horas / 24) + "d"}
• *Ativo『 ${i == cardxp[AB].mapa && cardxp[AB].active == true ? "✅" : "❌"} 』*`
}
txt += `\n\n*Total:* ${card.length > 0 ? card.length + `\n_(Use ${prefix}setcard para ativar seu cartão de XP)_` : card.length}`
reply(txt)
break

case 'setcard':
if(!isJsonIncludes(cardxp, sender)) {
cardxp.push({id: sender, mapa: 0, active: false, save: "00", tempo: 0, cards: []})
saveJSON(cardxp, "./base de dados/cardxp.json")
}
AB = cardxp.map(i => i.id).indexOf(sender)
card = cardxp[AB].cards
if(!Number(q) || Number(q) < 1 || Number(q) > card.length || q.includes(".")) return reply(`*Olhe no comando ${prefix}mycard o número referente ao card que vc quer ativar, ex:*
${prefix+command} 1

Saiba tbm que, depois de ativado o card, não há como ativar outro até que este acabe ⚠️`)
if(cardxp[AB].active == true) return reply("💌 *Há um card ativo no momento... Espere o mesmo acabar primeiro para ativar outro* 🔖")
i = Number(q) - 1
cardxp[AB].mapa = i
cardxp[AB].active = true
cardxp[AB].tempo = card[i].horas
saveJSON(cardxp, "./base de dados/cardxp.json")
reply(`🔖 *Seu Card ${card[i].multi}x válido por ${card[i].horas == 24 ? "24h" : (card[i].horas / 24) + "d"} foi ativado com sucesso* ✔️`)
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo ja está banido`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`🚫 *GRUPO BANIDO COM SUCESSO* 🚫`)
} else {
if(!isBanchat) return reply(`Este grupo não está banido`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`✅ *GRUPO DESBANIDO COM SUCESSO* ✅`)
}
break

case 'b':
case 'u':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isOwner) return reply(enviar.msg.donosmt)
if(command == 'b'){
if(isBanchat) return blackmd.sendMessage(sender, {text: `Este grupo ja está banido`}, {quoted: info})
dataGp[0].bangp = true
setGp(dataGp)
} else {
if(!isBanchat) return blackmd.sendMessage(sender, {text: `Este grupo não está mais banido`}, {quoted: info})
dataGp[0].bangp = false
setGp(dataGp)
}
break

case 'boton':
case 'botoff':
if(!isOwner) return reply(enviar.msg.donosmt)
if(command == `botoff`) {
if(isBotoff) return reply(`O bot já está desligado...`)
setTimeout(() => {reagir(from, "❌")}, 300)
obrigadoEXT.botoff = true
setObg(obrigadoEXT)
reply('❌ *Desligando todos as funções do BLACK*')
} else {
if(!isBotoff) return reply(`O bot já está ligado...`)
setTimeout(() => {reagir(from, "✅")}, 300)
obrigadoEXT.botoff = false
setObg(obrigadoEXT)
reply(`✅ *Religando todas as funções do BLACK*`)
}
break

case 'modo+18':
case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('🌀 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 📝')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('‼️ Desativou com sucesso o recurso de Anti Palavra harcore neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
/*if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)*/
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
/*if(!isOwner  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)*/
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal : ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 O recurso limite de caracteres já está ativo no grupo 🌀`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`✔️ O recurso limite de caracteres foi ativado nesse grupo📝`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitecglobal':
case 'limitec':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
if(!isOwner) return reply(enviar.msg.donosmt)
var data = { limitefl: q }
fs.writeFileSync('./database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status': case 'stts':
  setTimeout(() => {reagir(from, "❔")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
txt =
`ㅤㅤ〘 ＳＴＡＴＵＳ 〙
╭════════════════════╯
│
│⇒ Anti Imagem: ${isAntiImg ? '✅' : '❌'}
│⇒ Anti Vídeo: ${isAntiVid ? '✅' : '❌'}
│⇒ Anti Áudio: ${isAntiAudio? '✅' : '❌'}
│⇒ Anti Sticker: ${isAntiSticker ? '✅' : '❌'}
│⇒ Anti Documento: ${Antidoc ? '✅' : '❌'}
│⇒ Anti Contato ${isAntiCtt ? '✅' : '❌'}
│⇒ Anti Localização: ${Antiloc ? '✅' : '❌'}
│⇒ Anti Link Grupo: ${isAntilinkgp ? '✅' : '❌'}
│⇒ Anti BAN Link Grupo: ${!isBanlinkgp ? '✅' : '❌'}
│⇒ Anti Link Hard: ${isAntiLinkHard ? '✅' : '❌'}
│⇒ Anti BAN Link Hard: ${!isBanLinkHard ? '✅' : '❌'}
│⇒ Anti Fake: ${isAntifake ? '✅' : '❌'}
│⇒ Anti Notas: ${isAntiNotas ? '✅' : '❌'}
│⇒ Anti Catalogo: ${isAnticatalogo ? '✅' : '❌'}
│⇒ Anti Palavrão: ${isPalavrao ? '✅' : '❌'}
│⇒ Limite Caracteres: ${isAntiFlood ? '✅' : '❌'}
│⇒ Bem Vindo 1: ${isWelkom ? '✅' : '❌'}
│⇒ Bem Vindo 2: ${isWelkom2 ? '✅' : '❌'}
│⇒ Bem Vindo 3: ${isWelkom3 ? '✅' : '❌'}
│⇒ Bem Vindo 4: ${isWelkom4 ? '✅' : '❌'}
│⇒ Bem Vindo 5: ${isWelkom5 ? '✅' : '❌'}
│⇒ Auto Aceitação: ${isAcceptGroup ? '✅' : '❌'}
│⇒ Simi 1: ${isSimi ? '✅' : '❌'}
│⇒ Simi 2: ${isSimi2 ? '✅' : '❌'}
│⇒ Auto Sticker: ${isAutofigu ? '✅' : '❌'}
│⇒ Auto Resposta: ${isAutorepo ? '✅' : '❌'}
│⇒ Modo Zoeira: ${isModobn ? '✅' : '❌'}
│⇒ Modo RPG: ${isBlackCity ? '✅' : '❌'}
│⇒ Level: ${isLevelingOn ? '✅' : '❌'}
│⇒ Modo +18: ${isNsfw ? '✅' : '❌'}
│⇒ Anti Ligação: ${isAnticall ? '✅' : '❌'}
│⇒ Anti PV Block: ${isAntiPv ? '✅' : '❌'}
│
╰════════════════════╮`
blackmd.sendMessage(from, {image: {url: logoslink.logo}, caption: txt}, {quoted: seloctt})
break

case 'reiniciar': case 'rr': {//adapted by math
if(!isOwner) return
var carregar = [
`[ ❗ ] Reiniciando meus sistemas em 5️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 4️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 3️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 2️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 1️⃣`,
`[ ❗ ] Reiniciando meus sistemas em 0️⃣`,
`~_*© barba system*_~`
]
let { key } = await blackmd.sendMessage(from, {text: tempo+" "+pushname}, {quoted: info})//primeira mensagem
await sleep (1000)
for(let i = 0; i < carregar.length; i++) {
await sleep (1000)
await blackmd.sendMessage(from, {text: carregar[i], edit: key }, {quoted: info})
}
await sleep(1000)
process.exit()
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
reagir(from, react2)
try {
if(!q.trim()) return reply(`Exemplo: ${prefix}emoji 🤔/whatsapp`)
var [emoji, nm] = q.split("/")
if(nm) {
var txtemoji = nm
} else {
var txtemoji = `whatsapp`
}
ABC = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/emoji?q=${emoji}/${txtemoji.toLowerCase()}&apikey=`+API_KEY_ALEATORY)
sendStickerFromUrl(from, ABC.rst)
} catch {
return reply("Erro..")
}
break

case 'linktxt':
if(!q) return
reply(`${encodeURI(q)}`)
break

case 'emoji-mix':
case 'emojimix':
case 'emoji2':
var [emj1, emj2] = q.trim().split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 👿+😇`)
try {
reply(`❪∘̥⃟⸽⃟𝙼𝚒𝚜𝚝𝚞𝚛𝚊𝚗𝚍𝚘┋${emj1} e ${emj2}┋𝙴𝚖𝚘𝚓𝚒𝚜∘̥⃟৴▸`)
sendStickerFromUrl(from, `${barbasite}/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=`+API_KEY_BARBA)
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_BARBA)) {
return reply("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('*Não consegui combinar esses emojis* 🙇🏻‍♂️')
}
}
break

case 'amongsticker': case 'as':
if(!isVip && !isGroup) return reply(enviar.msg.vip)
if(!q) return reply(`Exemplo:\n\n${prefix + command} Seu Texto`)
if(q.length > 25) return reply("Texto muito grande")
try {
jherffeson = await getBuffer(`${barbasite}/api/amongus?texto=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
bass64 = `data:image/jpeg;base64,${jherffeson.toString('base64')}`
mantap = await convertSticker(bass64, permuteFigAuthorName(`${NomeDoBot} 📍`), permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`))
stickerM4 = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch {
reply("Erro")
}
break

case 'gtasticker': case 'gtast':
if(!isVip && !isGroup) return reply(enviar.msg.vip)
if(!q) return reply(`Exemplo:\n\n${prefix + command} Seu Texto`)
if(!q.includes("/")) return reply(`Ex: ${prefix+command} black/jherffeson`)
var [q1, q2] = q.split("/")
if(q1.length > 25 || q2.length > 25) return reply("Texto muito grande")
try {
jherffeson = await getBuffer(`${barbasite}/api/gtapassed?txt1=${encodeURI(q1)}&txt2=${encodeURI(q2)}&apikey=`+API_KEY_BARBA)
bass64 = `data:image/jpeg;base64,${jherffeson.toString('base64')}`
mantap = await convertSticker(bass64, permuteFigAuthorName(`${NomeDoBot} 📍`), permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`))
stickerM4 = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch {
reply("Erro")
}
break

case 'wf': case 'fw': case 'qc': case 'wpp'://by jherffeson
if(!q) return reply(`Oh, coloca um texto na frente do comando`)
setTimeout(() => {reagir(from, "✅")}, 300)
tttt = q.includes('/') ? q.split('/')[1] : q
if(tttt.length > 50) return reply("Texto muito grande")
const text = q.includes('/') ? q.split('/')[1] : `${q}`

const username = menc_prt ? getname(menc_prt) : q.includes('/') ? getname(identArroba(q.split('/')[0])).replace("usuário", q.split('/')[0]) : pushname

fotousu = menc_prt ? menc_prt : q.includes('/') ? Number(q.split('/')[0].replace("@", "").replace(new RegExp("[()+-/ +/]", "gi"), "")) ? q.split('/')[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : sender : sender

//IMAGEM DO PERFIL
try {
ppimg = await blackmd.profilePictureUrl(fotousu)
} catch {
ppimg = `https://telegra.ph/file/2a7516ef21d72cf8d9452.jpg`
}
//FIM IMAGEM DO PERFIL

//REQUIRES PRA FIGURINHA
const { writeExifImg } = require('./lib/exif')
//FIM DA REQUIERES

//DEFINIÇÃO FIGU
blackmd.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await blackmd.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
//FIM DEFINIÇÕES FIGU    
    
    
const avatar = `${ppimg}`

const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
        blackmd.sendImageAsSticker(from, buffer, info, { packname: permuteFigPackName(`↑ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘽𝙔`), author: permuteFigAuthorName(`${NomeDoBot} 📍`) })
});
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':
case 'sf':
setTimeout(() => {reagir(from, react2)}, 300)
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
aletxt = [`▧⃯⃟𝚁𝚎𝚖𝚘𝚟𝚎𝚗𝚍𝚘 𝙵𝚞𝚗𝚍𝚘ฺ͘.•🛸 ݈݇─`, `▧⃯⃟𝚁𝚎𝚝𝚒𝚛𝚊𝚗𝚍𝚘 𝙵𝚞𝚗𝚍𝚘ฺ͘.•🛸 ݈݇─`]
reply(aletxt[Math.floor(Math.random()*aletxt.length)])
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `📍Criado por↓`
sd = `${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: sti}, {quoted: seloctt})
} else {
return reply(`So imagem mn -_-`)
}
break

case 'title1':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isOwner) return reply(`;-;`)
if(!isQuotedSticker) return reply('title5 (opcional)')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('title6 (opcional)')
bas22 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas22, `title4`, `title3`)
var sti = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `title2`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'miih':
case 'mih':
case 'miihzinha':
if(!isOwner) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
reagir(from, "💜")
if(!isQuotedSticker) return reply(`Marque uma figurinha com o comando...

> ${prefix+command}`)
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(`_De miihzinha_
_Para miihzinha_
_Pela miihzinha_ 👑

*Gerando figu...* 💜`)
bas01 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas01, ` ຊ`, `ＭＩＩＨ `)
var sti = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `ოííհ sմթɾҽოαcվ 💜🧸`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'fbarba':
case 'sbarba':
case 'fb':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isQuotedSticker) return reply(`Marque uma figurinha com o comando...

> ${prefix+command}`)
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(`▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
bas01 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas01, permuteFigAuthorName(pushname), permuteFigPackName(NomeDoBot))
var sti = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: sti, contextInfo: {externalAdReply: {title: `ROUBADA COM SUCESSO 😎👍🏽`, body:"", previewType:"PHOTO", thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'rename':
case 'roubar':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*Falta um nome para renomear a figurinha... ;-;*')
if(!pack) return reply(`*Necessita de um nome antes da barra ( / ), ex:*
${prefix+command} ${pushname+q}`)
if(!author2) return reply(`*Falta um complemento, ex:*
${prefix+command} ${q}/complemento`)
reply(`𝙿𝚊𝚌𝚔 𝙽𝚊𝚖𝚎: _"${pack}"_
𝙰𝚞𝚝𝚑𝚘𝚛 𝙽𝚊𝚖𝚎: _"${author2}"_
-------------------------------------------------------------
▧⃯⃟𝚁𝚎𝚗𝚘𝚖𝚎𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊ฺ͘.•🛸 ݈݇─`)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: seloctt})
.catch((err) => {
reply(`❌ Erro, tenta mais tarde`); 
})
break

case 'ususticker': case 'us':
if(!isGroup) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!menc_os2) return reply(`Marque a pessoa de quem você quer transformar a foto de perfil em figurinha...`)
///////////PEGAR A FOTO DO USUÁRIO/////////////
try {
fotoDePerfilDoMath = await blackmd.profilePictureUrl(`${menc_os2.split('@')[0]}@c.us`, 'image')
} catch {
return reply("Usuário está sem foto de perfil ❌")
}
//////////////GERAR LINK DA FOTO////////////////
try {
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${fotoDePerfilDoMath}`);
jherffeson = shortpc.data
} catch {
return reply("Falha ao tentar converter ❌")
}
//////////////FAZER A FIGURINHA/////////////////
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
sendStickerFromUrl(from, jherffeson)
break

case 'fstiker':
case 'fsticker':
case 'f':
reagir(from, "✅")
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${barbasite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(blackmd, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${barbasite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(blackmd, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix+command}`)
}
break

case 'st':
case 'stk':
case 'sticker':
case 's':
setTimeout(() => {reagir(from, "✅")}, 300)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${barbasite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(blackmd, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = permuteFigPackName(`❪👤𝚄𝚜𝚞á𝚛𝚒𝚘 (𝚊)ฺ࣭࣪͘ꕸ▸
❪🤖𝙱𝚘𝚝ฺ࣭࣪͘ꕸ▸
❪👑𝙳𝚘𝚗𝚘ฺ࣭࣪͘ꕸ▸
❪🌐𝚂𝚒𝚝𝚎ฺ࣭࣪͘ꕸ▸`)
var author2 = permuteFigAuthorName(`${pushname}
${NomeDoBot}
${NickDono}
${barbasite}`)
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(blackmd, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem ou vídeo de até 10 segundos com o comando ${prefix+command}`)
}
break

case 'rgpackfig': case 'rgpf':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply("KD o MOD \"pack\" da figurinha?")
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(!isJsonIncludes(figname[AB].fig, "pack")) {
    figname[AB].fig.push({mod: "pack", pack: q})
    saveJSON(figname, "./base de dados/figname.json")
    return reply(`*MOD "pack" da figurinha adicionado com sucesso* ✔️`)
  } else {
    BC = figname[AB].fig.map(i => i.mod).indexOf("pack")
    figname[AB].fig[BC].pack = q
    saveJSON(figname, "./base de dados/figname.json")
    return reply(`*MOD "pack" da figurinha alterado com sucesso* ✔️`)
  }
} else {
  figname.push(
    {id: sender, fig: [
      {mod: "pack", pack: q}
      ]
    }  
  )
  saveJSON(figname, "./base de dados/figname.json")
  return reply(`*MOD "pack" da figurinha adicionado com sucesso* ✔️`)
}
break

case 'rgauthorfig': case 'rgaf':
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply("KD o MOD \"author\" da figurinha?")
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(!isJsonIncludes(figname[AB].fig, "author")) {
    figname[AB].fig.push({mod: "author", author: q})
    saveJSON(figname, "./base de dados/figname.json")
    return reply(`*MOD "author" da figurinha adicionado com sucesso* ✔️`)
  } else {
    BC = figname[AB].fig.map(i => i.mod).indexOf("author")
    figname[AB].fig[BC].author = q
    saveJSON(figname, "./base de dados/figname.json")
    return reply(`*MOD "author" da figurinha alterado com sucesso* ✔️`)
  }
} else {
  figname.push(
    {id: sender, fig: [
      {mod: "author", author: q}
      ]
    }  
  )
  saveJSON(figname, "./base de dados/figname.json")
  return reply(`*MOD "author" da figurinha adicionado com sucesso* ✔️`)
}
break

case 'rmpackfig': case 'rmpf':
case 'rmauthorfig': case 'rmaf':
case 'rmfigall': case 'rmfa':
if(!isVip) return reply(enviar.msg.vip)
if(isJsonIncludes(figname, sender)) {
  AB = figname.map(i => i.id).indexOf(sender)
  if(command == "rmfigall" || command == "rmfa") {
    figname.splice(AB, 1)
    saveJSON(figname, "./base de dados/figname.json")
    return reply(`*MOD's "pack" & "author" da figurinha deletados com sucesso* ✔️`)
  } else if(command == "rmpackfig" || command == "rmpf") {
    txt = "pack"
  } else {
    txt = "author"
  }
  BC = figname[AB].fig.map(i => i.mod).indexOf(txt)
  if(BC < 0) return reply(`🎲 *Você não registrou o MOD "${txt}" da figurinha para deletar o mesmo* 📛`)
  figname[AB].fig.splice(BC, 1)
  saveJSON(figname, "./base de dados/figname.json")
  return reply(`*MOD "${txt}" da figurinha deletado com sucesso* ✔️`)
} else reply("🎲 *impossível apagar um dado inexistente* 📛")
break

case 's2':
setTimeout(() => {reagir(from, react2)}, 300)
if(!isVip) { reply(enviar.msg.vip)
return blackmd.sendMessage(from, {audio: {url:'./database/audios/sovip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
sendStickerFromUrl(from, {url: res})
} else if((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && !q.length <= 1) { 
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙵𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊∘̥⃟৴▸`)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
sendStickerFromUrl(from, {url: res})
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 10 segundos..")
}
} catch {
reply(`Deu erro... Talvez o arquivo seja muito grande 😕`)
}
break

case 'name1':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isOwner) return reply(`;-;`)
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var n3 = `name3`
var n4 = `name4`
reply(`name2`)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(blackmd, from, owgi, info, { packname:n3, author:n4})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var n3 = `name3`
var n4 = `name4`
reply(`name2`)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(blackmd, from, owgi, info, { packname:n3, author:n4})
await DLT_FL(encmedia)
} else {
return reply(`name5 (opcional)`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply(`Marque uma figurinha, e eu vou transformar em imagem...\n\nSe for figurinha animada, use ${prefix}togif`)
try {
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 𝙸𝚖𝚊𝚐𝚎𝚖∘̥⃟৴▸`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
blackmd.sendMessage(from, {image: buff}, {quoted: seloctt}).catch(e => {
console.log(e);
reply('ERRO!!')
})
} catch {
reply("Erro..")
}
break

//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if(!q) return reply(enviar.wrongFormat)
reply('Aguarde..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
break

//=============(LOGOS)=============\\

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado.imageUrl)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'gameplay':
case 'ffbanner':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("KD o texto ?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado.imageUrl)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'cria': 
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'anime1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'ff1':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
blackmd.sendMessage(from, { image: venomk }, {quoted: seloctt })
break	

case 'game':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'ff2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'anime2':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'entardecer':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break

case 'indian':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break 

case 'ffrose':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'ffgren':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break		

case 'chufuyu':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'wolf':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'dragonred':
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
blackmd.sendMessage(from, { image: venomk }, { quoted: seloctt })
break	

case 'purple':              
if (args.length < 1) return reply("KD o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
blackmd.sendMessage(from, { image: venomk }, {quoted: seloctt, caption: `${teks}`})			     	
break

case 'avatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("KD o texto ?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/mascoteavatar?texto=${txt1}&texto2=${txt2}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado.imageUrl)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("KD o texto ?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado.imageUrl)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':
case 'thorstyle':  
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'videogame':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/video-game-classic?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'pubg':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'glitchtiktok':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/glitchtiktok?texto=${texto1}&texto2=${texto2}`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case '3ddragon':
case 'esmeralda':
case 'break':  
case 'hologram':  
case 'deepsea':
case 'narutologo2':
try {
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
texto = args.join(" ")
if(!texto) return reply("KD o texto ?")
bla = await fetchJson(`${barbasite}/api/${command}?texto=${texto}&apikey=`+API_KEY_BARBA)
blabla = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: blabla}, {quoted: seloctt})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case "watercolor":
case "1917":
case "multicolor":
case "generator":
case "naturalleaves":
case "candycane":
case "christmas":
case "merrychristmas":
case "3ddeep":
case "drug":
case "americanflag":
case "scifi":
case "wonderful":
case "holiday":
case "technology":
case "winter":
case "sandsummer":
case "sandwriting":
case "sandengraved":
case "summerysand":
case "glue":
case "dark":
case "galaxystyle":
case "minion":
case "horrorgift":
case "holographic":
case "deluxe":
case "glossyblue":
case "deluxegold":
case "glossycarbon":
case "fabric":
case "neontext":
case "halloweenfire":
case "metaldark":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "steeltext":
case "goldfoil":
case "ultragloss":
case "denimtext":
case "stargreen":
case "captain":
case "toxic":
case "ninjalogo":
case "rainbowequalizer":
case "peridot":
case "rock":
case "purpleshiny":
case "robotr2":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "logoneon":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/neon?texto=${textin}&apikey=`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "green-horror":
case "chocolate-cake":
case "3dboxtext":
case "strawberry":
case "sweet-candy":
case "flower-typography":
case "berry":
case "shadow-sky":
case "magma":
case "logobear":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/${command}?texto=${textin}`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "illuminated-metallic":
case "metallic":
case "harry-potter":
case "butterfly":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "carved-wood":
case "flaming":
case "night-sky":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/photooxy/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt}).catch(e => {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "orangejuice":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/3d-orange-juice?texto=${textin}&apikey=`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")   
})
break

case "neonlight":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await fetchJson(`${barbasite}/api/textpro/3d-neon-light?texto=${textin}&apikey=`+API_KEY_BARBA)
dllink = await getBuffer(bla.resultado)
blackmd.sendMessage(from, {image: dllink}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "brilhante":
case "vietnam":
case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "desfocado":
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/ephoto/blur?texto=${textin}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {image: bla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pubgv': case 'natalmsg': case 'anonovo': case 'trigrev':
textin = args.join(" ")
if(!textin) return reply("KD o texto ?")
reply(`▧⃯⃟𝙶𝚎𝚛𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙻𝚘𝚐𝚘ฺ͘.•🛸 ݈݇─`)
bla = await getBuffer(`${barbasite}/api/ephoto/${command}?texto=${textin}&apikey=`+API_KEY_BARBA)
blackmd.sendMessage(from, {video: bla}, {quoted: seloctt}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break

case 'metadinha':
reagir(from, "😍")
try {
ABC = await fetchJson(`${barbasite}/random/metadinha?apikey=`+API_KEY_BARBA);
blackmd.sendMessage(from, {image: {url: ABC.masculina}, caption: `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`})
blackmd.sendMessage(from, {image: {url: ABC.feminina}, caption: `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`})
} catch (e) {
return reply("Erro..")
}
break;

case 'metadinha2':
reagir(from, "😍")
try {
ABC = await fetchJson(apikeymeta);
jherffeson = ABC[Math.floor(Math.random()*ABC.length)]
blackmd.sendMessage(from, {image: {url: jherffeson.male}, caption: `🙇🏻‍♂️ *HOMEM* 🙅🏻‍♂️`})
blackmd.sendMessage(from, {image: {url: jherffeson.female}, caption: `🙆🏻‍♀️ *MULHER* 💁🏻‍♀️`})
} catch (e) {
return reply("Erro..")
}
break;

case 'printscreen': case 'printsite': case 'screenshot': case 'screenshots':
if(!q) return reply("Retorne após o comando o link do site que você deseja capturar")
try {
blackmd.sendMessage(from, {image: {url: `${barbasite}/api/ssweb?link=${q}&apikey=`+API_KEY_BARBA}}, {quoted: info})
} catch (e) {
return reply("Erro..")
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'infosorteio':
case 'helpsorteio':  
blackmd.sendMessage(from, {text: infosorteio(sender, prefix), mentions: [sender]}, {quoted: selo})
break

case 'substituir':
if(!isOwner && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
blackmd.sendMessage(from, {text:'Substituido com sucesso..'},{quoted: seloctt})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isOwner)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
blackmd.sendMessage(from, {text:'*Index atualizada* ✅'},{quoted: seloctt})
setTimeout(async () => {
blackmd.sendMessage(from, {text: "*Irei reiniciar o bot em 3... 2... 1...*"})
setTimeout(async () => {
process.exit()
}, 2200)
}, 2000)
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'banfake': case 'banfakes':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
caixa = []
for(i of somembros) {
  if(!numerodono.includes(i) && !botNumber.includes(i)) {
    if(Number(i.slice(0, 2)) !== 55) caixa.push(i)
  }
}
if(caixa.length > 0) {
  for(a = 0; a < caixa.length; a++) {
    await sleep(1000)
    remover(from, caixa[a])
  }
} else reply("Não há números fake presentes neste grupo...")
break

case 'fakeban':
case 'b4n':
case 'bam':
setTimeout(() => {reagir(from, "🫡")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
blackmd.sendMessage(from, {text: `*O alvo ↴*
@${menc_os2.split('@')[0]} *foi removido com sucesso...* 🫡`, mentions: [menc_os2]}, {quoted: seloctt})
setTimeout(() => {
blackmd.sendMessage(from, {text: `@${menc_os2.split('@')[0]} caiu na pegadinha do malandro 😂`, mentions: [menc_os2]})
}, 120000)
break

case 'suic': case 'suicui': case 'suicidiuio': case 'suicíuidio': case 'suicídio': case 'suicidio': case 'suicídio︎︎︎︎︎︎︎':
if(!isModobn) return reply(enviar.msg.modobz)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isGroup) return reply(enviar.msg.grupo)
if(isOwner || JSON.stringify(vip).includes(sender)) return reply("Você não tem permissão de se matar 😁")
reply(`Não ${pushname}, não se mate 😭💔`)
await sleep(3000)
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(1000)
reply(`Ah, menos um pá eu me preocupar 😪`)
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
reagir(from, "✅")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

//a pessoa não está no grupo
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Esse usuário não se encontra mais no grupo...")

//marcaram @ do bot
if(botNumber.includes(menc_os2)) {
if(!isOwner) {
reply("Aplicando punição pq tentaram me banir... Cê tem sorte de só perder o ADM")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
} else return reply("Qual foi patrão ?")
}

//marcaram @ do dono
if(isAllOwner(menc_os2)) {
if(!isOwner) {
reply("Tá achando que vai banir meu dono assim na minha frente ?? Sente o poder do ban então pra ver se é bom 😍")
await sleep(1000)
return blackmd.groupParticipantsUpdate(from, [sender], "remove")
} else return reply("Não vou te banir patrão ;-;")
}

//marcaram @ de um vip
if(JSON.stringify(vip).includes(menc_os2) && !isOwner) {
reply("O cara quer banir um ser superior kkkkk")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
}

//não é vip nem dono
blackmd.sendMessage(from, {audio: {url:'./database/audios/ban.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.groupParticipantsUpdate(from, [menc_os2], "remove")
return blackmd.sendMessage(from, {text: `*USUÁRIO* @${menc_os2.split("@")[0]} *FOI REMOVIDO COM SUCESSO* 😎👍🏽`, mentions: [menc_os2]})
break

case 'band':
reagir(from, "🗑️")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

//a pessoa não está no grupo
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Esse usuário não se encontra mais no grupo...")

//marcaram @ do bot
if(botNumber.includes(menc_os2)) {
if(!isOwner) {
reply("Aplicando punição pq tentaram me banir... Cê tem sorte de só perder o ADM")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
} else return reply("Qual foi patrão ?")
}

//marcaram @ do dono
if(numerodono.includes(menc_os2)) {
if(!isOwner) {
reply("Tá achando que vai banir meu dono assim na minha frente ?? Sente o poder do ban então pra ver se é bom 😍")
await sleep(1000)
return blackmd.groupParticipantsUpdate(from, [sender], "remove")
} else return reply("Não vou te banir patrão ;-;")
}

//marcaram @ de um vip
if(JSON.stringify(vip).includes(menc_os2) && !isOwner) {
reply("O cara quer banir um ser superior kkkkk")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
}

//não é vip nem dono
blackmd.sendMessage(from, {audio: {url:'./database/audios/ban.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.groupParticipantsUpdate(from, [menc_os2], "remove")
blackmd.sendMessage(from, {text: `*USUÁRIO* @${menc_os2.split("@")[0]} *FOI REMOVIDO COM SUCESSO* 😎👍🏽`, mentions: [menc_os2]})
await sleep(2000)
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_os2}})
break

case 'vasco':
reagir(from, "🏴‍☠️")
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)

//a pessoa não está no grupo
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Esse usuário não se encontra mais no grupo...")

//marcaram @ do bot
if(botNumber.includes(menc_os2)) {
if(!isOwner) {
reply("Que vasco o que menó ? Eu sou Palmeirense 💚")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
} else return reply("Qual foi patrão ?")
}

//marcaram @ do dono
if(numerodono.includes(menc_os2)) {
if(!isOwner) {
reply("No No No... Meu Dono é flamenguista 😍")
await sleep(1000)
return blackmd.groupParticipantsUpdate(from, [sender], "remove")
} else return reply("Não vou te banir patrão ;-;")
}

//marcaram @ de um vip
if(JSON.stringify(vip).includes(menc_os2) && !isOwner) {
reply("Esse aí não é vascaíno não kkkkk")
return blackmd.groupParticipantsUpdate(from, [sender], "demote")
}

//não é vip nem dono
vascoban = ["zagueiro", "atacante", "goleiro", "volante", "ponta esquerda", "ponta direita", "meio campo"]
blackmd.sendMessage(from, {text: `@${menc_os2.split("@")[0]} foi jogar no Vasco como ${vascoban[Math.floor(Math.random()*vascoban.length)]} ☠️`, mentions: [menc_os2]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/vasco.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
await sleep(2000)
blackmd.groupParticipantsUpdate(from, [menc_os2], "remove")
break

case 'setmsg'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
AB = avisos.map(i => i.groupId).indexOf(from)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(avisos[AB].module == true) {
  avisos[AB].module = false
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
  reply(`Sistema de horários programados desativado com sucesso neste grupo... Caso queira ligar, basta usar o comando novamente 😀`)
} else {
  avisos[AB].module = true
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
  reply(`Sistema de horários programados ativado com sucesso neste grupo... Caso queira desligar, basta usar o comando novamente 😀`)
}
break

case 'rankcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(rankcmd.length < 5) return reply("O bot ainda não possui comandos salvos o suficiente para calcular o ranking")
jherffeson = rankcmd.map(i => i)
rank = jherffeson.sort((a, b) => (a.usado < b.usado) ? 0 : -1)
txt = `❪💎ฺ࣭࣪͘ꕸ▸ ᴛᴏᴩ 5 ᴄᴏᴍᴀɴᴅᴏꜱ ᴍᴀɪꜱ ᴜꜱᴀᴅᴏꜱ ᴩᴏʀ ᴜꜱᴜáʀɪᴏꜱ ᴇᴍ ɢʀᴜᴩᴏ:`
for(i = 0; i < 5; i++) {
  quant = rank[i].usado
  txt += `\n»${i + 1}«
▧⃯⃟ᴄᴏᴍᴀɴᴅᴏ: ${prefix+rank[i].cmd}
ㅤㅤ▧⃯⃟ᴜꜱᴀᴅᴏ: ${quant} vez${Number(quant) > 1 ? `es` : ``}`
}
try {
  jherffeson = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
  shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${jherffeson}`);
  ppimg = shortpc.data
} catch(e) { ppimg = semfoto }
sendUrlText(from, txt, pushname, ``, ppimg, `https://wame/`+sender.split("@")[0], seloctt)
break

case 'checkcmd':
if(!q) return reply(`Informe o nome do comando que você quer puxar, ex:
${prefix+command} play`)
if(q.includes(prefix)) return reply(`Não inclua o prefixo na busca...`)
caixa = []
for(i of rankcmd) {
  if(rmLetras(q) == i.cmd) caixa.push(i)
}
if(caixa.length <= 0) return reply(`Não há registros de uso desde comando em minha database...`)
reply(`🎲 O Comando *${prefix+caixa[0].cmd}* foi usado ${caixa[0].usado} vez${Number(caixa[0].usado) !== 1 ? `es` : ``}, segundo o que consta em minha database...`)
break

case 'revealmsg'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
if(q.toLowerCase() == "grupo") {
if(!isGroup) return reply(enviar.msg.grupo)
idgp = from
nome = groupName
} else if(Number(args[0]) > 0 && Number(args[0]) <= ingfoo.length) {
idgp = ingfoo[Number(args[0])].id
nome = ingfoo[Number(args[0])].subject
} else {
return reply("Olhe no comando "+prefix+command+"listarevgp o número correspondente ao grupo que você quer ativar/desativar o repasse de mensagens... Ex: "+prefix+command+"2\n\nCaso vc opte por \""+prefix+command+" grupo\", ele irá ativar/desativar este grupo aqui...")
}
if(JSON.stringify(revealmsg).includes(idgp)) {
AB = revealmsg.map(i => i.groupId).indexOf(idgp)
revealmsg.splice(AB, 1)
fs.writeFileSync("./base de funcionamento/revealmsg.json", JSON.stringify(revealmsg, null, 2))
reply("Repasse de mensagens do grupo "+nome+" desativado com sucesso 💢")
} else {
revealmsg.push({groupId: idgp})
fs.writeFileSync("./base de funcionamento/revealmsg.json", JSON.stringify(revealmsg, null, 2))
reply("Repasse de mensagens do grupo "+nome+" ativado com sucesso ✅")
}
break

case 'listarevgp'://by jherffeson
setTimeout(() => {reagir(from, "✅")}, 300)
if(!isOwner) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await blackmd.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = "ᏞᏆՏͲᎪ ᎠᎬ ᏀᎡႮᏢϴՏ Ꭰϴ ᏴϴͲ\nͲϴͲᎪᏞ ( "+ingfoo.length+" )\n________________________________________"
for (let i = 0; i < ingfoo.length; i++){
jherffeson = JSON.stringify(revealmsg).includes(ingfoo[i].id) ? "✅" : "❌"
teks1 += "\n\n»"+i+"«\n⏤͟͟͞͞ ꦿ𝙽𝚘𝚖𝚎 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n〘 "+ingfoo[i].subject+" 〙\n⏤͟͟͞͞ ꦿ𝙸𝙳 𝙳𝚘 𝙶𝚛𝚞𝚙𝚘 ↴\n× "+ingfoo[i].id+"\n⸺͟͞ꪶ𝙰𝚝𝚒𝚟𝚊𝚍𝚘⇒『 "+jherffeson+" 』\n________________________________________"
}
reply(teks1)
break

case 'resetadsgp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!JSON.stringify(adsgp).includes("grupos")) {
  adsgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
  adsgp.push({tipo: "mensagens", msgs: []})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
adsgp[AB].gps = []
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
adsgp[AC].msgs = []
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
reply("Sistema resetado")
break

case 'setadsgp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(adsgp).includes("quantidade")) {
  adsgp.push({tipo: "quantidade", quant: 5})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("grupos")) {
  adsgp.push({tipo: "grupos", gps: []})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!JSON.stringify(adsgp).includes("mensagens")) {
  adsgp.push({tipo: "mensagens", msgs: []})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
var [linkM4, msgM4] = q.split('|')
AB = adsgp.map(i => i.tipo).indexOf("grupos")
AC = adsgp.map(i => i.tipo).indexOf("mensagens")
if(!linkM4) return reply('Insira um link de convite ao lado do comando.')
if(!msgM4) return reply(`Vejo que você não inseriu a mensagem que será enviada... Faça assim:\n${prefix+command} link do grupo|mensagem para enviar`)
if(linkM4.includes('chat.whatsapp.com/')) {
  link = linkM4.split('app.com/')[1]
  try {
    var getGroups = await blackmd.groupFetchAllParticipating()
    var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    var ingfoo = groups.map(v => v)
    ingfoo.sort((a, b) => (a[0] < b.length))
    grupos77 = []
    for(i = 0; i < ingfoo.length; i++) {
      grupos77.push({groupId: ingfoo[i].id})
    }
    adsgp[AB].gps = grupos77
    fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
    adsgp[AC].msgs.push({txt: msgM4, cobrado: false})
    fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
    blackmd.groupAcceptInvite(`${link}`)
    return reply(`Todos os grupos da lista foram salvos na pasta... Qualquer grupo que esteja fora da lista será tratado como indigno e réu de receber anúncios em seu chat`)
  } catch(erro) {
    if(String(erro).includes('resource-limit') ) {
      reply('O grupo já está com o alcance máximo de membros.')
    }
    if(String(erro).includes('not-authorized') ) {
      reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
    }
  }
} else return reply('Ops, verifique o link que você inseriu.')
break

case 'setadstime': case 'sat':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!JSON.stringify(adsgp).includes("quantidade")) {
  adsgp.push({tipo: "quantidade", quant: 5})
  fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
}
if(!Number(args[0]) || Number(args[0]) < 1) return reply(`Defina a quantidade de mensagens a serem enviadas no grupo ao usar o comando ${prefix}setadsgp

Ex: ${prefix+command} 5`)
if(q.includes(".")) return reply("Não pode números decimais")
AB = adsgp.map(i => i.tipo).indexOf("quantidade")
adsgp[AB].quant = Number(args[0])
fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
reply(`Quant. de mensagens definida com sucesso ✅`)
break

case 'setads': case 'fazer-ads'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
var [MSG, LINK, TEMPO] = q.split("|")
if(!MSG || !LINK || !TEMPO) return reply(`Coloque uma mensagem para ser enviada como anúncio, um link e o tempo de intervalo, separando-os com uma barra ( | )
Ex: ${prefix+command} Segue no insta|link do insta aqui|1h`)
if(!Number(TEMPO.slice(0, TEMPO.length - 1)) || Number(TEMPO.slice(0, TEMPO.length - 1)) <= 0) return reply(`Utilize apenas números antes e uma letra para identificar:
s = segundos
m = minutos
h = horas
d = dias

Ex: ${prefix+command} Segue no insta|link aqui|10m (anúncio de 10 em 10 minutos)`)
if(isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
mmmm = 0
} catch { return reply(`Não foi possível salvar a imagem... Favor, tentar novamente ❌`) }
} else {
res = logoslink.logo
mmmm = 1
}
max = TEMPO.slice(TEMPO.length - 1, TEMPO.length)
nmr = Number(TEMPO.slice(0, TEMPO.length - 1))
if(max.toLowerCase() != `s` && max.toLowerCase() != `m` && max.toLowerCase() != `h` && max.toLowerCase() != `d`) return reply(`Não foi possível identificar o tempo através da letra _"${max}"_
Utilize apenas S, M, H ou D`)
if(max.toLowerCase() == `s`) TIPO = 1
if(max.toLowerCase() == `m`) TIPO = 2
if(max.toLowerCase() == `h`) TIPO = 3
if(max.toLowerCase() == `d`) TIPO = 4
if(TIPO == 1) hora77 = `${nmr} segundo${nmr > 1 ? `s` : ``}`
if(TIPO == 2) hora77 = `${nmr} minuto${nmr > 1 ? `s` : ``}`
if(TIPO == 3) hora77 = `${nmr} hora${nmr > 1 ? `s` : ``}`
if(TIPO == 4) hora77 = `${nmr} dia${nmr > 1 ? `s` : ``}`
AB = ads.map(i => i.groupId).indexOf(from)
ads[AB].mensagens.push({msg: MSG, link: LINK, img: res, contador: 1, total: Number(TEMPO.slice(0, TEMPO.length - 1)), tipo: TIPO, save: "00", midi: mmmm})
fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
reply(`Anúncio setado de ${nmr} em ${hora77} neste grupo ✅`)
break

case 'setadsimg': case 'addadsimg'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
var [MSG, TEMPO] = q.split("|")
if(!MSG || !TEMPO) return reply(`Coloque uma mensagem para ser enviada como anúncio, um link e o tempo de intervalo, separando-os com uma barra ( | )
Ex: ${prefix+command} Segue no insta|1h`)
if(!Number(TEMPO.slice(0, TEMPO.length - 1)) || Number(TEMPO.slice(0, TEMPO.length - 1)) <= 0) return reply(`Utilize apenas números antes e uma letra para identificar:
s = segundos
m = minutos
h = horas
d = dias

Ex: ${prefix+command} Segue no insta|10m (anúncio de 10 em 10 minutos)`)
if(isMedia && !info.message.videoMessage || isQuotedImage) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
mmmm = 3
} catch { return reply(`Não foi possível salvar a imagem... Favor, tentar novamente ❌`) }
max = TEMPO.slice(TEMPO.length - 1, TEMPO.length)
nmr = Number(TEMPO.slice(0, TEMPO.length - 1))
if(max.toLowerCase() != `s` && max.toLowerCase() != `m` && max.toLowerCase() != `h` && max.toLowerCase() != `d`) return reply(`Não foi possível identificar o tempo através da letra _"${max}"_
Utilize apenas S, M, H ou D`)
if(max.toLowerCase() == `s`) TIPO = 1
if(max.toLowerCase() == `m`) TIPO = 2
if(max.toLowerCase() == `h`) TIPO = 3
if(max.toLowerCase() == `d`) TIPO = 4
if(TIPO == 1) hora77 = `${nmr} segundo${nmr > 1 ? `s` : ``}`
if(TIPO == 2) hora77 = `${nmr} minuto${nmr > 1 ? `s` : ``}`
if(TIPO == 3) hora77 = `${nmr} hora${nmr > 1 ? `s` : ``}`
if(TIPO == 4) hora77 = `${nmr} dia${nmr > 1 ? `s` : ``}`
AB = ads.map(i => i.groupId).indexOf(from)
ads[AB].mensagens.push({msg: MSG, link: ``, img: res, contador: 1, total: Number(TEMPO.slice(0, TEMPO.length - 1)), tipo: TIPO, save: "00", midi: mmmm})
fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
reply(`Anúncio setado de ${nmr} em ${hora77} neste grupo ✅`)
} else reply("Marque uma imagem pfvr")
break

case 'addads': case 'add-ads'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
var [MSG, TEMPO] = q.split("|")
if(!MSG || !TEMPO) return reply(`Coloque uma mensagem para ser enviada após o contador e o tempo de intervalo, separando-os com uma barra ( | )
Ex: ${prefix+command} Segue no insta|1h (será enviada tal mensagem de 1 em 1 hora)`)
if(!Number(TEMPO.slice(0, TEMPO.length - 1)) || Number(TEMPO.slice(0, TEMPO.length - 1)) <= 0) return reply(`Utilize apenas números antes e uma letra para identificar:
s = segundos
m = minutos
h = horas
d = dias

Ex: ${prefix+command} Segue no insta|10m (anúncio de 10 em 10 minutos)`)
max = TEMPO.slice(TEMPO.length - 1, TEMPO.length)
nmr = Number(TEMPO.slice(0, TEMPO.length - 1))
if(max.toLowerCase() != `s` && max.toLowerCase() != `m` && max.toLowerCase() != `h` && max.toLowerCase() != `d`) return reply(`Não foi possível identificar o tempo através da letra _"${max}"_
Utilize apenas S, M, H ou D`)
if(max.toLowerCase() == `s`) TIPO = 1
if(max.toLowerCase() == `m`) TIPO = 2
if(max.toLowerCase() == `h`) TIPO = 3
if(max.toLowerCase() == `d`) TIPO = 4
if(TIPO == 1) hora77 = `${nmr} segundo${nmr > 1 ? `s` : ``}`
if(TIPO == 2) hora77 = `${nmr} minuto${nmr > 1 ? `s` : ``}`
if(TIPO == 3) hora77 = `${nmr} hora${nmr > 1 ? `s` : ``}`
if(TIPO == 4) hora77 = `${nmr} dia${nmr > 1 ? `s` : ``}`
AB = ads.map(i => i.groupId).indexOf(from)
ads[AB].mensagens.push({msg: MSG, link: `https://wa.me/${nmrdn.split("@")[0]}`, img: `https://telegra.ph/file/8ea33258bde1e2e7ca680.jpg`, contador: 1, total: Number(TEMPO.slice(0, TEMPO.length - 1)), tipo: TIPO, save: "00", midi: 2})
fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
reply(`Anúncio setado de ${nmr} em ${hora77} neste grupo ✅`)
break

case 'rmads': case 'delads'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = ads.map(i => i.groupId).indexOf(from)
if(!Number(args[0]) || Number(args[0]) < 1 || Number(args[0]) > ads.length) return reply(`Olhe no comando ${prefix}listads o número correspontende ao anúncio que desejas deletar... Ex:
-> ${prefix+command} 2

Caso queira apenas desligar, use ${prefix}stopads`)
AC = Number(args[0]) - 1
ads[AB].mensagens.splice(AC, 1)
fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
reply(`Anúncio deletado 💢`)
break

case 'startads': case 'iniciaranuncio': case 'stopads': case 'pararanuncio'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = ads.map(i => i.groupId).indexOf(from)
if(ads[AB].module == true) {
  ads[AB].module = false
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
  reply(`💢 Anúncios desligados neste grupo com sucesso... Caso queira religar, use ${prefix}startads`)
} else {
  ads[AB].module = true
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
  reply(`✅ Anúncios religados com sucesso neste grupo... Caso queira desligar, use ${prefix}stopads`)
}
break

case 'listads':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(ads).includes(from)) {
  ads.push({groupId: from, mensagens: [], module: true})
  fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = ads.map(i => i.groupId).indexOf(from)
txt = `⚜ Anúncios Deste Grupo ⚜
💯 *TOTAL [ ${ads[AB].mensagens.length} ]*`
for(i = 0; i < ads[AB].mensagens.length; i++) {
  addss = ads[AB].mensagens[i].tipo
  if(addss == 1) adstime = `${ads[AB].mensagens[i].total}s`
  if(addss == 2) adstime = `${ads[AB].mensagens[i].total}m`
  if(addss == 3) adstime = `${ads[AB].mensagens[i].total}h`
  if(addss == 4) adstime = `${ads[AB].mensagens[i].total}d`
  txt += `\n\n${i + 1 }° -> Anúncio: _"${ads[AB].mensagens[i].msg}"_
  -> Tempo: ${adstime}
    -> Com foto ( ${ads[AB].mensagens[i].midi == 0 ? "✅" : "❌"} )`
}
txt += `\n{=>} LIGADO [ ${ads[AB].module == true ? `✅` : `❌`} ]`
reply(txt)
break

case 'addmsg'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
AB = avisos.map(i => i.groupId).indexOf(from)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var [write, timezin] = q.split("/")
if(!write) return reply(`KD a mensagem ? Ex:
-> ${prefix+command} Bom dia/06:00 (será enviada uma mensagem neste grupo todo dia às 6 da manhã)`)
if(!timezin) return reply(`KD o horário ? Ex:
-> ${prefix+command} Boa tarde/12:00 (será enviada uma mensagem neste grupo toda tarde ao meio dia)`)
if(!timezin.includes(":")) return reply(`Separe as horas e minutos com "dois pontos" ( : ), ex:
-> ${prefix+command} Boa tarde/15:30 (será enviada uma mensagem neste grupo toda tarde às 15 horas e 30 minutos)`)
if(!Number(timezin.replace(":", ""))) return reply(`Não inclua outro caractere no horário além dos "dois pontos" ( : ), ex:
-> ${prefix+command} Boa noite/18:02 (será enviada uma mensagem neste grupo toda noite às 18 horas e 2 minutos)`)
day = moment.tz('America/Sao_Paulo').format('DD')
avisos[AB].mensagens.push({msg: write, tempo: timezin, dia: "00"})
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Registro criado com sucesso... A mensagem "${write.slice(0, 50)+"..."}" será repassada neste grupo todo dia às ${timezin}

Caso queira apagar o registro, use ${prefix}rmmsg`)
break

case 'addrandom'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
AB = avisos.map(i => i.groupId).indexOf(from)
AC = avisos.map(i => i.groupId).indexOf("jherffeson")
if(!isGroupAdmins) return reply(enviar.msg.adm)
var [time, typeRandom] = q.split("/")
if(!time) return reply(`Coloque o horário em que as mensagens aleatórias da caixa serão enviadas neste grupo...`)
if(!time.includes(":")) return reply(`Separe as horas e minutos com "dois pontos" ( : ), ex:
-> ${prefix+command} 15:30/0`)
if(!Number(time.replace(":", ""))) return reply(`Não inclua outro caractere no horário além dos "dois pontos" ( : ), ex:
-> ${prefix+command} 18:02/0`)
if(Number(typeRandom) !== 1 && Number(typeRandom) !== 2) return reply(`Coloque uma barra ( / ) após o horário e defina com 1 se as mensagens forem puxadas da caixa do grupo e 2 se as mensagens forem puxadas da caixa global... Ex:
-> ${prefix+command} 14:00/1`)
if(Number(typeRandom) === 1 && avisos[AB].globalAleatory.length <= 1) return reply(`Não há mensagens suficientes na caixa do grupo para sortear aleatoriamente... Use o comando ${prefix}envrandom primeiro`)
if(Number(typeRandom) === 2 && avisos[AC].mensagens.length <= 1) return reply(`Não há mensagens suficientes na caixa global para sortear aleatoriamente... Use o comando ${prefix}envrandom primeiro`)
day = moment.tz('America/Sao_Paulo').format('DD')
avisos[AB].aleatory.push({tempo: time, dia: "00", ativation: Number(typeRandom) > 1 ? true : false})
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem aleatória da caixa definida todo dia neste grupo às ${time}... Caso queira deletar o horário, use ${prefix}delrandom`)
break

case 'envrandom'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
AB = avisos.map(i => i.groupId).indexOf(from)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply(`Coloque após o comando uma mensagem para ser enviada para a caixa do grupo... Ao usar o comando ${prefix}addrandom, o bot enviará aleatoriamente uma das mensagens dessa caixa no horário definido`)
avisos[AB].globalAleatory.push(q)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem deste grupo definida com sucesso... Caso queira enivar, use ${prefix}addrandom`)
break

case 'envglobal'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
AB = avisos.map(i => i.groupId).indexOf("jherffeson")
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`Coloque após o comando uma mensagem para ser enviada para a caixa do grupo... Ao usar o comando ${prefix}addrandom, o bot enviará aleatoriamente uma das mensagens dessa caixa no horário definido`)
avisos[AB].mensagens.push(q)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem globlal definida com sucesso... Caso queira enivar, use ${prefix}addrandom`)
break

case 'rmmsg'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = avisos.map(i => i.groupId).indexOf(from)
if(avisos[AB].mensagens.length <= 0) return reply(`Não há avisos neste grupo`)
if(!Number(args[0]) || Number(args[0]) < 1 || Number(args[0]) > avisos[AB].mensagens.length) return reply(`Olhe no comando ${prefix}listmsg o número correspondente a mensagem que você quer apagar... Ex:
-> ${prefix+command} 2`)
BC = Number(args[0]) - 1
avisos[AB].mensagens.splice(BC, 1)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem deletada com sucesso...`)
break

case 'delrandom'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = avisos.map(i => i.groupId).indexOf(from)
if(avisos[AB].aleatory.length <= 0) return reply(`Não há horário definidos neste grupo`)
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > avisos[AB].aleatory.length) return reply(`Olhe no comando ${prefix}listmsg o número correspondente ao horário que você quer apagar... Ex:
-> ${prefix+command} 2`)
BC = Number(args[0]) - 1
avisos[AB].mensagens.splice(BC, 1)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Horário deletado com sucesso...`)
break

case 'rmrandom'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = avisos.map(i => i.groupId).indexOf(from)
if(avisos[AB].globalAleatory.length <= 0) return reply(`Não há nenhuma mensagem na caixa deste grupo`)
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > avisos[AB].globalAleatory.length) return reply(`Olhe no comando ${prefix}listmsg o número correspondente a mensagem que você quer apagar... Ex:
-> ${prefix+command} 2`)
BC = Number(args[0]) - 1
avisos[AB].globalAleatory.splice(BC, 1)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem deletada com sucesso...`)
break

case 'rmglobal'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isOwner) return reply(enviar.msg.donosmt)
AB = avisos.map(i => i.groupId).indexOf("jherffeson")
if(avisos[AB].mensagens.length <= 0) return reply(`Não há nenhuma mensagem na caixa global`)
if(!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > avisos[AB].mensagens.length) return reply(`Olhe no comando ${prefix}listmsg o número correspondente a mensagem que você quer apagar... Ex:
-> ${prefix+command} 2`)
BC = Number(args[0]) - 1
avisos[AB].mensagens.splice(BC, 1)
fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
reply(`Mensagem deletada com sucesso...`)
break

case 'listmsg'://by jherffeson
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = avisos.map(i => i.groupId).indexOf(from)
if(avisos[AB].mensagens.length <= 0) return reply(`Não há avisos neste grupo`)
txt = `🎴 *Exbindo ${avisos[AB].mensagens.length > 1 ? `os ${avisos[AB].mensagens.length} avisos progamados neste grupo` : `o único aviso progamado deste grupo`} ↴*`
for(i = 0; i < avisos[AB].mensagens.length; i++) {
  txt += `\n\n»${i + 1}« *Mensagem:* ${avisos[AB].mensagens[i].msg}
*Horário:* ${avisos[AB].mensagens[i].tempo}`
}
txt += `\n\n_Caso queira apagar uma mensagem, use ${prefix}rmmsg e após o comando, o número correspondente... Ex: ${prefix}rmmsg 1_`
if(avisos[AB].aleatory.length > 0) {
  txt += `\n\n🔁 *Exibindo caixa de mensagens aleatórias porgramadas neste grupo ↴*`
  for(i = 0; i < avisos[AB].aleatory.length; i++) {
    txt += `\n»${i + 1}« -> ${avisos[AB].aleatory[i].tempo}`
  }
  txt += `\n\n_Caso queira apagar uma mensagem, use ${prefix}rmrandom e após o comando, o número correspondente... Ex: ${prefix}rmrandom 1_`
}
reply(txt)
break

case 'infomsg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(avisos).includes("jherffeson")) {
  avisos.push({groupId: "jherffeson", mensagens: []})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!JSON.stringify(avisos).includes(from)) {
  avisos.push({groupId: from, mensagens: [], globalAleatory: [], aleatory: [], module: true})
  fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
}
if(!isGroupAdmins) return reply(enviar.msg.adm)
reply(`*Comandos do sistema de mensagem programada:*
-> ${prefix}listmsg
_Lista todos os horários programados neste grupo_

-> ${prefix}addmsg
_Adiciona uma mensagem programada neste grupo_

-> ${prefix}rmmsg
_Deleta a mensagem programada selecionada deste grupo_

-> ${prefix}envrandom
_Cria uma caixa de mensagens dentro do grupo para usar o comando ${prefix}addrandom_

-> ${prefix}addrandom
_Ao definir um horário, será enviado uma mensagem aleatória de dentro da "caixa" do comando acima todo dia no horário definido_

-> ${prefix}delrandom
_Deleta a frase aleatória criada no comando acima_

-> ${prefix}envglobal
_Cria uma caixa global enviando a frase para lá. É útil para quando quiseres usar o comando acima de mensagens aleatórias em vários grupos e não quer fazer o mesmo processo em cada grupo... Basta usar esse comando e após ele o ${prefix}envrandom_

-> ${prefix}rmgloblal
_Deleta a mensagem da caixa global criada acima_`)
break

case 'rggp':
if(!isOwner) return reply(enviar.msg.donosmt)
if(JSON.stringify(globegroup).includes(from)) return reply(`Grupo já registrado...`)
try {
var fotogp = await blackmd.profilePictureUrl(from, 'image')
} catch {
var fotogp = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
linkgp = await blackmd.groupInviteCode(from)
globegroup.push({id: from, thumb: fotogp, nome: groupName, link: `https://chat.whatsapp.com/${linkgp}`})
fs.writeFileSync("./base de dados/globegroup.json", JSON.stringify(globegroup, null, 2))
reply(`Grupo adicionado ao comando global ${prefix}grupos`)
break

case 'rmgp':
if(!isOwner) return reply(enviar.msg.donosmt)
rmgp = q.length > 8 ? q : from
if(!JSON.stringify(globegroup).includes(rmgp)) return reply(`Grupo não registrado...`)
AB = globegroup.map(i => i.id).indexOf(rmgp)
globegroup.splice(AB, 1)
fs.writeFileSync("./base de dados/globegroup.json", JSON.stringify(globegroup, null, 2))
reply(`Grupo retirado do comando global ${prefix}grupos`)
break

case 'grupos':
if(isGroupAdmins || isVip) {
  if(globegroup.length > 0) {
    gpale = globegroup[Math.floor(Math.random()*globegroup.length)]
    blackmd.sendMessage(from, {image: {url: gpale.thumb}, caption: `_⏤͟͟͞͞ ꦿLink do grupo ↴_
⇒ ${gpale.nome}

${gpale.link}`}, {quoted: seloctt})
  } else {
    reply("Não há grupos registrados...")
  }
} else {
  reply("[ ❗ ] só ADM ou VIP ❌")
}
break

case 'gerargrupos'://By: Aqua Bot
case 'gerargrupo'://By: Aqua Bot
case 'gerargp'://By: Aqua Bot
if(!q) return reply("Ei, qual tipo de grupo?")
reply(`🔎 _procurando grupos_ 🔍`)
 if(!isVip) return reply(enviar.msg.vip)  
    swp = await fetchJson(`https://tohka.tech/api/pesquisa/gpwhatsapp?nome=${q}&apikey=Misaki`)
    teks = `═══════ ❯❯   *BLACK BOT - GRUPOS* ❮❮\n\n`;
    for(let i of swp) {
        teks += "▧⃯⃟NOME『" + i.nome + "』\n"
        teks += "▧⃯⃟DESCRIÇÃO→ " + i.descrição + "\n"
        teks += "▧⃯⃟LINK→ " + i.link + "\n\n"
    }
    teks += `☆ヅ━━━━━━━BLACK BOT━━━━━━━━ヅ☆`
  reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2) return reply(prefix + command + " @ da pessoa")
if(sender.includes(menc_os2)) return reply(`Não é possível mutar a si mesmo...`)
if(numerodono.includes(menc_os2)) return reply(`Não é possível mutar meu dono...`)
if(botNumber.includes(menc_os2)) return reply(`Não é possível mutar o bot...`)
if(groupAdmins.includes(menc_os2)) return reply(`Não é possível mutar um ADM...`)
if(JSON.stringify(vip).includes(menc_os2)) return reply(`Não é possível mutar um usuário VIP...`)
if(JSON.stringify(mute).includes(from)) {
AB = mute.map(i => i.gpid).indexOf(from)
if(JSON.stringify(mute[AB].mutados).includes(menc_os2)) return reply(`Este usuário já está mutado...`)
mute[AB].mutados.push({id: menc_os2, sn: false})
fs.writeFileSync("./base de dados/mute.json", JSON.stringify(mute, null, 2))
} else {
mute.push({gpid: from,
mutados: [{id: menc_os2, sn: false}]
})
fs.writeFileSync("./base de dados/mute.json", JSON.stringify(mute, null, 2))
}
reply(`Usuário mutado com sucesso... Caso ele fale algo, será banido.`)
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!JSON.stringify(mute).includes(from)) return reply(enviar.msg.notusu)
if(menc_os2) {
var qp = menc_os2
} else {
var qp = args[0] + `@s.whatsapp.net`
}
AB = mute.map(i => i.gpid).indexOf(from)
BC = mute[AB].mutados.map(a => a.id).indexOf(qp)
if(BC < 0) return reply(enviar.msg.notusu)
mute[AB].mutados.splice(BC, 1)
fs.writeFileSync("./base de dados/mute.json", JSON.stringify(mute, null, 2))
reply(`Usuário desmutado com sucesso...`)
break

case 'mutelist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!JSON.stringify(mute).includes(from)) return reply(`Não há usuários mutados neste grupo...`)
AB = mute.map(i => i.gpid).indexOf(from)
if(Number(mute[AB].mutados.length) > 0) {
txt = `🤫 *Usuários mutados do grupo ↴*
${groupName}
📟 *Total:* ${mute[AB].mutados.length}\n`
for(a = 0; a < mute[AB].mutados.length; a++) {
txt += `• @${mute[AB].mutados[a].id.split('@')[0]}\n`
}
mention(txt)
} else {
reply(`Não há usuários mutados neste grupo...`)
}
break

case 'infomute':
reply(`${tempo} ${pushname}, os comandos disponíveis são:
• ${prefix}mute
• ${prefix}desmute
• ${prefix}mutelist

-> ${prefix}mute
Marque o usuário com @ ou a mensagem dele, para mutar o mesmo...

-> ${prefix}desmute
Marque o usuário com @ ou a mensagem dele, para desmutar o mesmo... O ban não anula o mute.

-> ${prefix}mutelist
Irá mostrar a lista de todos os usuários mutados... Bem, se houver algum.`)
break

case 'inforoleta':
setTimeout(() => {reagir(from, "💀")}, 300)
reply(`Há duas roletas russas funcionando...

[ ${prefix}roleta ]
O bot irá escolher aleatoriamente uma pessoa do grupo, e banir imediatamente...

[ ${prefix}roleta2 ]
A roleta 2 irá fazer a mesma coisa que a de cima... Porém nesta, os ADMs estarão salvos do banimento.`)
break

case 'roleta':
reagir(from, "💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
membros = []
for(i = 0; i < groupMembers.length; i++) {
if(groupMembers[i].id != nmrdn && groupMembers[i].id != botNumber && groupMembers[i].id != groupMetadata.owner) membros.push({id: groupMembers[i].id})
}
if(membros.length > 0) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1000)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
blackmd.sendMessage(from, {text: `Suas últimas palavras...`})
blackmd.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há membros suficientes no grupo para efetuar a roleta russa...`)
}
break

case 'roleta2':
reagir(from, "💀")
if(!isModobn) return reply(enviar.msg.modobz)
if(!isGroupAdmins) return reply(`Você não tem essa permissão... 🖐🏽😔`)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(somembros.length <= 0) return reply(`Só foram encontrados admins no grupo ${groupName}`)
membros = []
for(i = 0; i < somembros.length; i++) {
if(!numerodono.includes(somembros[i]) && !botNumber.includes(somembros[i]) && !groupMetadata.owner.includes(somembros[i])) membros.push({id: somembros[i]})
}
if(membros.length > 1) {
alerl = membros[Math.floor(Math.random() * membros.length)].id
mention(`Entre os sorteados do grupo ${groupName}, @${alerl.split('@')[0]} hoje não é seu dia de sorte...`)
balas = ["vazio", "vazio", "vazio", "vazio", "vazio", "cheio", "cheio", "cheio"]
balinha = balas[alerandom(balas.length)]
await sleep(1000)
if(balinha == "vazio") return sendMess(from, "Hahaha, tô zoando... sorte sua que o cartucho tava vazio 🤡")
blackmd.sendMessage(from, {text: `Suas últimas palavras...`})
blackmd.groupParticipantsUpdate(from, [alerl], "remove")
} else {
reply(`Não há usuários suficientes para efetuar o sistema de roleta russa...`)
}
break

case 'promover': case 'promo':
setTimeout(() => {reagir(from, "👑")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
blackmd.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *ACABA DE RECEBER A COROA DE ADMINISTRADOR DO GRUPO... ESPERO QUE HONRE A SUA FUNÇÃO* 👑`, mentions: [menc_os2]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/promovido.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': case 'reb':
setTimeout(() => {reagir(from, "🥲")}, 300)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
blackmd.sendMessage(from, {text: `@${menc_os2.split("@")[0]} *ACABA DE PERDER A COROA DE ADM DO GRUPO...* 🥲`, mentions: [menc_os2]})
blackmd.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'alfabeto':
case 'a':
setTimeout(() => {reagir(from, react2)}, 300)
if(!q) return reply(`*Ex:* A letra que cair é a inicial da pessoa que vai te fazer feliz esse ano...`)
alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S","T","U","V","W","X","Y","Z"]
reply(`❤️‍🔥 Vamos sortear uma letra para a frase⟩
${q}`)
setTimeout(async() => {
blackmd.sendMessage(from, {text: `${alfa[Math.floor(Math.random()*alfa.length)]} ${react2}`})
}, 2000)
break

case 'sorteio2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix+command} de 100 R$`)
d = []
teks = `🎉Parabéns, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(isJsonIncludes(sorteio, from)) return reply(`Há um sorteio em andamento neste grupo...`)
if(!q) return reply(`Você precisa configurar o sorteio primeiro, definindo horário, participante e emoji... Se tiver mais dúvidas, olhe no ${prefix}infosorteio`)
cont = contar(q, " ")
if(cont != 2 && !isJsonIncludes(sorteio, from)) return reply(`Vejo que você está usando de forma errada... Precisa ser desse jeito:
${prefix+command} 12:45 1/all ❤`)
var [time, part, emj] = q.split(` `)
var [p_win, p_all] = part.split(`/`)
if(!Number(time.replace(":", ""))) return reply(`Pfvr ${pushname}, revise o horário que vc colocou...`)
horacerta = converterMin(contarMin(time))
total_p = p_all.toLowerCase() == "all" ? groupMembers.length - 1 : p_all
lm = converterMin((contarMin(horacerta) - 5) < 0 ? contarMin("24:00") + (contarMin(horacerta) - 5) : contarMin(horacerta) - 5)
if(Number(p_win) > Number(total_p)) return reply(`A quantidade de ganhadores não pode ser maior que a quantidade de participantes`)
if(!antiModLetra(emj)) return reply(`Você não indicou com emoji, a reação devida...`)
msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.extendedTextMessage?.text
if(!msg) return reply(`Vc não marcou a mensagem ksksks Marque uma mensagem, que no caso é o título do sorteio, e este texto será salvo no banco de dados do bot para ser sorteado no horário determinado 🥰`)
sorteio.push({groupId: from, texto: msg, data: horacerta, dia: sendHours("DD"), emoji: emj, limite: lm, ganhadores: Number(p_win), total: Number(total_p), start: false, participants: []})
saveJSON(sorteio, "./base de funcionamento/sorteio.json")
txt = `👤 *Admin:* @${sender.split("@")[0]}
⏳ *Horário:* ${horacerta}

\t\t\t⚠ *ATENÇÃO MEMBROS* ⚠

${msg}

_Se você tiver interesse em participar do sorteio acima, reaja esta mensagem com o emoji "${emj}"_
_Há ${total_p} vagas... Entrada será encerrada ${lm} (admins podem mudar esse limite no comando ${prefix}stms)_`
reagir(from, emj)
blackmd.sendMessage(from, {text: txt, mentions: groupMembers.map(i => i.id)}, {quoted: seloctt})
break

case 'sortelist':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
txt = `⏳ *Horário do sorteio:* ${sorteio[AB].data}
😎 *Entrada limite:* ${sorteio[AB].limite}
👻 *Total:* ${sorteio[AB].participants.length}/${sorteio[AB].total}
👤 *Participantes:*${sorteio[AB].participants.map(p => `\n• @${p.split("@")[0]}`).join(``)}

\t${sorteio[AB].texto}

_Se você tiver interesse em participar do sorteio acima, basta reagir esta mensagem com o emoji "${sorteio[AB].emoji}"_`
mention(txt)
break

case 'stms':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
if(!Number(args[0])) return reply(`Retorne após o comando quantos minutos antes do sorteio, os usuários poderão entrar..., Ex: ${prefix+command} 5`)
nmr = converterMin(contarMin(sorteio[AB].data) - Number(args[0]))
sorteio[AB].limite = nmr
saveJSON(sorteio, "./base de funcionamento/sorteio.json")
reply(`O horário limite para participar do sorteio neste grupo foi atualizado com sucesso para ${nmr} ✅`)
break

case 'stopsorte':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = sorteio.map(i => i.groupId).indexOf(from)
if(AB < 0) return reply(enviar.msg.notusu)
sorteio.splice(AB, 1)
saveJSON(sorteio, "./base de funcionamento/sorteio.json")
reply(`O sorteio deste grupo foi cancelado com sucesso...`)
break

case 'nuke': case 'arquivargp':
if(!ischyt) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
blackmd.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'sorteionumero':
case 'snmr':
setTimeout(() => {reagir(from, "✅")}, 300)
if(!q) return reply(`Escolha um número máximo...
Ex: ${prefix+command} 300`)
reply(`_Sorteando número aleatório entre 0-${q}_`)
setTimeout(async() => {
try {
blackmd.sendMessage(from, {text: `*Número sorteado ( ${Math.floor(Math.random()*q)} )*`})
} catch {
blackmd.sendMessage(from, {text: `${q} não é número... 😕`})
}
}, 1100)
break

//==========(TTPS/ATTP)============\\

case 'ttp':
try {
if(!q) return reply(`Exemplo: ${prefix+command} black bot`);
reply(`*Gerando figu com a frase* _"${q}"_`);
link = `${barbasite}/api/ttp?texto=${encodeURI(q)}&apikey=`+API_KEY_BARBA
jherffeson = await getBuffer(link)
bass64 = `data:image/jpeg;base64,${jherffeson.toString('base64')}`
mantap = await convertSticker(bass64, `𝐃𝐎𝐌𝐈𝐍𝐀💡`, `👑`)
stickerM4 = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch (e) {
return reply("Erro..");
}
break;

case 'attp':
case 'attp1':
case 'attp2':
case 'attp3':
case 'attp4':
case 'attp5':
case 'attp6':
if(!q) return reply("Ei, Cadê o Texto?")
try {
reply(`*Gerando figu com a frase* _"${q.split("\n").join("_\n_")}"_`);
link = `${barbasite}/makerfig/rgb?fig=${command}&texto=${encodeURI(q)}&apikey=`+API_KEY_BARBA
jherffeson = await getBuffer(link)
bass64 = `data:image/jpeg;base64,${jherffeson.toString('base64')}`
mantap = await convertSticker(bass64, `𝐃𝐎𝐌𝐈𝐍𝐀💡`, `👑`)
stickerM4 = new Buffer.from(mantap, 'base64');
blackmd.sendMessage(from, {sticker: stickerM4}, {quoted: info})
} catch {
reply("Erro")
}
break

//======================================\\

case 'cotacao': case 'moeda':
if(!isVip && !isChatOfc) return reply(enviar.msg.vip)
try {
  ABC = await fetchJson(barbasite+`/api/cotacao?moeda=${q ? q : "jherffeson"}&apikey=`+API_KEY_BARBA)
  if(ABC.erro) return reply(ABC.erro)
  i = ABC.resultado[0]
  moda = i.name.split("/")[0]
  mods = moda.split(" ")[0]
  txt = `🪙 *Moeda:* ${moda}
🎲 *Código:* ${i.code}
💰 *Valor atual:* R$ ${Number(i.bid).toFixed(2)} ( 1 ${moda} )
📊 *Variações:*
_• *Mínimo:* ${Number(i.high).toFixed(2)} ${mods+"s"}_
_• *Máximo:* ${Number(i.low).toFixed(2)} ${mods+"s"}_
_• *Percentual:* ${Number(i.pctChange).toFixed(2)}% ( ${i.varBid} )_

Atualizado às ${realtime()}`
reply(txt)
} catch(e) { console.log(e)
reply("Erro") }
break

//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./database/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Ativado com sucesso o modo nsfw +18 no grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está Desativado')  
nsfw.splice(from, 1)
fs.writeFileSync('./database/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break 

case 'gerarnick': case 'fazernick': case 'nick':
try {
if(antiModLetra(q)) return reply("Não pode letras modificadas nem emoji..");
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas, Exemplo: ${prefix+command} jherffeson`);
ABC = await fetchJson(`${barbasite}/api/fazernick?nome=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
AB = `🎗𝐍𝐈𝐂𝐊𝐒 𝐆𝐄𝐑𝐀𝐃𝐎𝐒 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎🎗\n\n`;
for ( i of ABC) {
AB += `⇒ ${i}\n\n`;
}
reply(AB);
} catch (e) {
return reply("Erro..");
}
break;

case 'sn':
  setTimeout(() => {reagir(from, "🤔")}, 300)
  if(!q) return reply(`*Faça uma pergunta para o bot responder com sim/não...*\n*Exemplo:* ${prefix+command} hj tem gol do Ribamar ?`)
  const sn = ['sim', 'não']
  const sn2 = ["creio que", "acredito que", "acho que", "receio que"]
const sn_ = sn[Math.floor(Math.random() * (sn.length))]
const sn2_ = sn2[Math.floor(Math.random() * (sn2.length))]
  sim_nao = `Pergunta⧽ ${q}\n\n*Pensando bem... ${sn2_} ${sn_}* 🤷🏻‍♂️`
reply(sim_nao)
break

case 'campominado': case 'campo-minado':
if(!isGroup) return reply(enviar.msg.grupo)
game = `./armor/jogo/mina-game/campo-minado-${from}.json`
if(!fs.existsSync(game)) {
barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [mark, difi] = barra.split("/")
if(!mark.includes("@")) return reply("Marque alguém do grupo para jogar com você, o @ ou a mensagem...")
usu = mark.split("@")[1] + "@s.whatsapp.net"
if(!isJsonIncludes(groupMembers, usu)) return reply("Usuário marcado não está mais entre nós...")
if(usu == botNumber) return reply("Eu sou o bot né meu prç, eu não jogo 🤦🏻‍♂️")
pc = prefix+command
if(q.includes("@") && !q.includes("/")) return mention(`💣 Vc deve escolher entre uma das três dificuldades:
🌟⃤ ${pc+" "+q}/easy
⚡⃤ ${pc+" "+q}/medium
💥⃤ ${pc+" "+q}/hard`)
qp = difi.toLowerCase()
if(qp != "easy" && qp != "medium" && qp != "hard") return mention(`Vc deve escolher entre uma das três dificuldades:
${pc+" "+q}/easy
${pc+" "+q}/medium
${pc+" "+q}/hard`)
if(qp == "easy") { mm = 7; mxm = 9 }
if(qp == "medium") { mm = 14; mxm = 7 }
if(qp == "hard") { mm = 21; mxm = 5 }
delt = []
for(a = 1; a < (mxm + 1); a++) {
  for(b = 1; b < (mxm + 1); b++) {
    if(b == 1) c = "a"
    if(b == 2) c = "b"
    if(b == 3) c = "c"
    if(b == 4) c = "d"
    if(b == 5) c = "e"
    if(b == 6) c = "f"
    if(b == 7) c = "g"
    if(b == 8) c = "h"
    if(b == 9) c = "i"
    delt.push(a+c)
  }
}
caixa = []
for(i = 0; i < mm; i++) {
  valor = alerandom(delt.length)
  caixa.push(delt[valor])
  delt.splice(valor, 1)
}
start = {
  ID: sendHours("DDMMYYYYHHmmss"),
  jogadores: [{id: sender, erros: 3}],
  criador: sender,
  chamado: usu,
  play: 0,
  começou: false,
  dificuldade: qp,
  totalminas: mm,
  totalquad: mxm,
  minas: caixa,
  plantado: []
}
fs.writeFileSync(game, JSON.stringify(start, null, 2))
mention(`⚡ ${tempo} @${usu.split('@')[0]},
@${sender.split('@')[0]} está te desafiando para jogar uma partida eletrizante nível ${qp} de "campo minado" 💣😜

Digite » S « para aceitar e » N « para recusar 🫵🏽😄`)
await sleep(900000)
finish = `./armor/jogo/mina-game/campo-minado-${from}.json`
if(fs.existsSync(finish) && JSON.parse(fs.readFileSync(finish)).ID == sendHours("DDMMYYYYHHmmss")) {
  fs.unlinkSync(finish)
  reply("Sessão expirada 💣")
}
} else {
  campominado = JSON.parse(fs.readFileSync(game))
  if(campominado.começou == true) {
    if(isJsonIncludes(campominado.jogadores, sender)) return reply("Você já está jogando "+pushname)
    return mention(`⚡ Os presentes membros ${campominado.jogadores.map(i => `@`+i.id.split("@")[0]).join(` e `)} estão jogando no momento... Pfvr, aguarde a partida terminar 💣`)
  } else {
    if(campominado.chamado == sender) return mention(`*⚡ Você foi convidado pelo @${campominado.criador.split("@")[0]} para jogar "campo minado" nível ${campominado.dificuldade}... Pfvr, digite sim/não 💣*`)
    if(campominado.criador == sender) return mention(`*😓 Tô aguardando confirmação do @${campominado.chamado.split("@")[0]}...* (Caso queira desistir, use ${prefix}resetmina)`)
    return reply("⚡ Há uma partida em andamento neste grupo 💣")
  }
}
break

case 'resetmina': case 'rmn':
if(!isGroup) return reply(enviar.msg.grupo)
game = `./armor/jogo/mina-game/campo-minado-${from}.json`
if(!fs.existsSync(game)) return reply("Nenhuma sessão em andamento neste grupo 💣😜")
campominado = JSON.parse(fs.readFileSync(game))
if(!isGroupAdmins && campominado.criador != sender) return reply("[ ❗ ] apenas admins do grupo ou quem começou o jogo podem cancelar a partida ❌")
fs.unlinkSync(game)
reply("Partida cancelada 💣😜")
break

case 'infominagame':
reply(`💣 O primeiro passo é chamar alguém pra jogar e escolher a dificuldade, que pode ser easy, medium ou hard... Use o comando ${prefix}campo-minado

😜 Após configurada a dificuldade e chamado o jogador, o mesmo terá que responder com sim/não para iniciar ou terminar o jogo.

🎮 Uma vez aceito, já em jogo, ambos os jogadores terão 3 chances de errar... Basta responder a coordenada como 2b ou 5a, sempre colocando a letra após o número.

🏆 Vence o jogador que mais sobreviver`)
break

case 'addforca':
if(!isOwner) return reply(enviar.msg.donosmt)
if(contar(q, `/`) != 2) return reply(`Retorne após o comando o tema, a palavra e a dica que você deseja adicionar...
Ex: veículo/carro/tem 4 rodas`)
var [tema, palavra, dica] = q.split(`/`)
rgWordForcaGame(tema, palavra, dica);
txt = `🎗 *_Forca registrada com sucesso_* 🎗
🎭 *Tema:* ${iniMai(tema)}
🎨 *Palavra:* ${iniMai(palavra)}
🧶 *Dica:* ${iniMai(dica)}`
reply(txt)
break

case 'rmforca':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`KD a palavra que você quer deletar?`)
rmWordForcaGame(reply, q);
break

case 'rmtema':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply(`KD o tema que você quer deletar?`)
rmThemeForcaGame(reply, q);
break

case 'listword': case 'listaforca':
if(!isOwner) return reply(enviar.msg.donosmt)
if(forcaWord.length <= 0) return reply(`[❗] não há palavras salvas ❌`)
txt = forcaWord.map(a => `🎈 _*Tema:* ${iniMai(a.title)}_
📚 _*Palavras ↴*_
${a.words.map(b => `\t🎲 *Nome:* ${iniMai(b.nome)}
\t🧸 *Dica:* ${iniMai(b.desc)}`).join(`\n\n`)}`).join(`\n\n-\n\n`)
reply(txt)
break

case 'forca': case 'startforca':
if(!isGroup) return reply(enviar.msg.grupo)
reagir(from, "🎗")
if(!existSomeWordForcaGame) return reply(`Não há palavras na database do bot para seres distribuidas... Chame o dono do bot para ele adicionar mais palavras 🥰`)
if(isForcaGame(from)) {
  reply(`🎗 Há uma sessão em andamento... Use ${prefix}fc para responder ou ${prefix}rrfc para reiniciar`)
  await sleep(5000)
  return sendTextForcaGame(reply, prefix, from)
}
startForcaGame(reply, prefix, from)
break

case 'myforca': case 'minhaforca': case 'myf':
addUsuarioForca(sender);
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
sendUrlText(from, getUsuDatabaseForca(sender, barrinha), pushname, ``, ppimg, `https://wa.me/`+sender.split("@")[0], seloblk)
break

case 'fc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(!q) return reply(`Retore após o comando a letra ou a palavra toda da forca, ex:
${prefix+command} ${randomLetra.toLowerCase()}`)
jogarLetraForcaGame(mention, from, sender, prefix, q);
break

case 'rfc': case 'rrfc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isForcaGame(from)) return reply(`Não há nenhum jogo em andamento... Para começar, use ${prefix}forca`)
if(command == "rrfc") return restartForcaGame(reply, prefix, from);
resetForcaGame(from);
reply(`🧸 Partida de forca encerrada com sucesso..`)
break

//=======================RPG=====================\\

case 'modorpg':
if(Number(args[0]) === 1) {
if(isBlackCity) return reply("O RPG já está ativado...")
dataGp[0].modorpg = true
setGp(dataGp)
return reply("RPG Barba City ativado com sucesso ✅")
} else if(Number(args[0]) === 0) {
if(!isBlackCity) return reply("O RPG não está ativado...")
dataGp[0].modorpg = false
setGp(dataGp)
return reply("RPG Barba City desativado com sucesso ♨️")
} else return reply(`Use ${prefix+command} 1/0`)
break

case 'criarcidade':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isOwner) return reply(enivar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Retorne após o comando o nome da cidade e o número do dono dela, ex:
${prefix+command} xarquelândia/${addNumberMais(randomUser)}`)
var [cdd_bc, dono_bc] = q.split(`/`)
usu = identArroba(dono_bc)
createCityBlackRPG(usu, cdd_bc);
mention(`Cidade criada no número de @${usu.split("@")[0]} com sucesso ✅`)
break

case 'cidadesrpg': case 'cidades':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(cidadesRPG.length <= 0) return reply(enviar.rpg.notcdd)
txt = `🏦 *Total:* ${cidadesRPG.length}`
for(i = 0; i < cidadesRPG.length; i++) {
  cdd = cidadesRPG[i]
  AB = cdd.moradores.map(c => c.id).indexOf(cdd.prefeito)
  txt += `\n\n🏘 *Nome:* ${iniMai(cdd.nome)}
🤵🏽 *Prefeito:* ${cdd.moradores[AB].nome}
👤 *Moradores:* ${cdd.moradores.length}/${cdd.level * 30}
📦 *Vagas:* ${!limitCity(cdd.nome) ? `✅` : `❌`}`
}
reply(txt)
break

case 'minhacidade': case 'mycity':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isYouInBlackCity(sender)) return reply(enviar.rpg.registrar)
AB = cidadesRPG.map(c => c.nome).indexOf(findCity(sender))
cdd = cidadesRPG[AB]
AC = cdd.moradores.map(m => m.id).indexOf(cdd.prefeito)
txt = `🏘 *Nome:* ${iniMai(cdd.nome)}
🤵🏽 *Prefeito:* ${cdd.moradores[AC].nome} ↴
🧮 *Total:* ${cdd.moradores.length}/${cdd.level * 30}
👤 *Moradores:*
${cdd.moradores.map(m => `• ${m.nome}`).join(`\n`)}`
thumb = `https://telegra.ph/file/3b3f6ced554bc4c73b40e.png`
sendUrlText(from, txt, `𝘽𝙀𝙈 𝙑𝙄𝙉𝘿𝙊 (𝘼) 🏙`, ``, thumb, thumb, seloctt)
break

case 'deletarcidade': case 'delcdd':
if(!isOwner) return reply(enivar.msg.donosmt)
if(!q) return reply(`Retorne após o comando, o nome da cidade que você deseja deletar... Se não souber, olhe no comando ${prefix}cidadesrpg as cidades existentes.`)
AB = cidadesRPG.map(i => i.nome).indexOf(q)
if(AB < 0) return reply(`[❗] Cidade não encontrada ou inexistente ❌`)
cidadesRPG.splice(AB, 1)
saveCityBlackRPG();
reply(`Cidade deletada com sucesso ✅`)
break

case 'rgbc': case 'rgbarbacity':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(isYouInBlackCity(sender)) return reply(enviar.rpg.existrg)
if(contar(q, `/`) != 1) return reply(`Retorne após o comando o nome e a cidade que você se registrar, ex:
${prefix+command} John/Rio dos ladrôes`)
var [a, b] = q.replace(`/ `, `/`).replace(` /`, `/`).replace(` / `, `/`).split(`/`)
if(!existCity(b)) return reply(enviar.rpg.notexistcity.replace(`#city#`, b))
if(limitCity(b)) return reply(enviar.rpg.citylimit)
registrarUsuInBlackCity(sender, a, b);
try { ppimg = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
} catch(e) { ppimg = semfoto }
img = barbasite+`/api/canvas/jxr/welcome?nome=${encodeURI(a)}&guilda=${encodeURI("BLACK CITY")}&perfil=https://telegra.ph/file/8599989096be411a4a72b.jpg&membro=${totalUserBlackCity.length}&avatar=${ppimg}&fundo=${Number(sendHours("HH")) >= 6 && Number(sendHours("HH")) < 18 ? `https://telegra.ph/file/82bdf76492757e8dac17a.jpg` : `https://telegra.ph/file/14397844299a8fa11d4a9.jpg`}`
txt = enviar.rpg.welcome.replace(`#usu#`, sender.split("@")[0])
mencionarIMG(txt, img, seloctt)
break

case 'saldo': case 'carteira': case 'banco': case 'meubc':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isYouInBlackCity(sender)) return reply(enviar.rpg.registrar)
data = filesDBuserBC(sender)
txt = `
\t\t\t🎲 *_GERAL_* 🎲
📖 *Nome:* ${data.nome}
💰 *Saldo:* R$ ${Number(data.saldo).toFixed(2)}
🏦 *Banco:* R$ ${data.banco}

\t\t\t📃 *_REGISTRO_* 📃
📆 *Data:* ${data.registro.data}
⌚ *Hora:* ${data.registro.hora}
${`- `.repeat(30)}
_Livro de registro, pág. ${(totalUserBlackCity.map(t => t.UID).indexOf(sender)) + 1}_`
sendImage(from, `https://telegra.ph/file/42e0da5bb3be21c6e0fdb.jpg`, txt, info)
break

case 'addpix':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isOwner) return reply(enivar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Separe o número do usuário e o valor com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/100`)
usu = identArroba(q.split(`/`)[0])
if(!isYouInBlackCity(usu)) return reply(enviar.msg.notusu)
filesDBuserBC(usu).saldo += Number(q.split(`/`)[1])
saveCityBlackRPG();
mention(`R$ ${Number(q.split(`/`)[1]).toFixed(2)} fo${Number(q.split(`/`)[1]) !== 1 ? `ram` : `i`} adc ao saldo do usuário @${usu.split(`@`)[0]} com sucesso ✅`)
break

case 'rmpix':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isOwner) return reply(enivar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Separe o número do usuário e o valor com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/100`)
usu = identArroba(q.split(`/`)[0])
if(!isYouInBlackCity(usu)) return reply(enviar.msg.notusu)
nmr = (filesDBuserBC(usu).saldo - Number(q.split(`/`)[1])) < 0 ? 0 : filesDBuserBC(usu).saldo - Number(q.split(`/`)[1])
filesDBuserBC(usu).saldo = nmr
saveCityBlackRPG();
mention(`R$ ${Number(q.split(`/`)[1]).toFixed(2)} fo${Number(q.split(`/`)[1]) !== 1 ? `ram` : `i`} rmvd do saldo do usuário @${usu.split(`@`)[0]} com sucesso ✅`)
break

case 'setpix':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isOwner) return reply(enivar.msg.donosmt)
if(contar(q, `/`) != 1) return reply(`Separe o número do usuário e o valor com uma barra ( / ), ex:
${prefix+command} ${addNumberMais(botNumber)}/100`)
usu = identArroba(q.split(`/`)[0])
if(!isYouInBlackCity(usu)) return reply(enviar.msg.notusu)
filesDBuserBC(usu).saldo = Number(q.split(`/`)[1])
saveCityBlackRPG();
mention(`O saldo do usuário @${usu.split(`@`)[0]} foi setado em R$ ${Number(q.split(`/`)[1]).toFixed(2)} com sucesso ✅`)
break

case 'rmusubc':
if(!isBlackCity) return reply(enviar.rpg.ativar)
if(!isOwner) return reply(enivar.msg.donosmt)
if(!marc_tds) return reply(`Marque o usuário, a mensagem ou o @, de quem você quer deletar da Black City...`)
if(!isYouInBlackCity(marc_tds)) return reply(enviar.msg.notusu)
rmUsuBlackCity(marc_tds);
reply(`Usuário deletado com sucesso... 😪`)
break

case 'getfile':
if(!isOwner) return mention(privateCmd(sender, prefix+command, `"não encontrado"`, 0))
if(!q && !q.startsWith(`./`)) return reply("Tá faltando o caminho até o arquivo... Ex: "+prefix+command+" ./index.js")
try {
nome = q.split(`/`)[contar(q, `/`)]
reply("*Enviando no nosso grupo privado o arquivo "+nome+"*")
await sleep(1000)
blackmd.sendMessage(obrigadoEXT.idprivategp, {document: {url: q}, fileName: nome, mimetype: `application/${nome.endsWith(`js`) ? `javascript` : `json`}`})
} catch(e) { console.log(e)
reply(`Erro`) }
break

case 'modulos': case 'modulo':

case 'criarjson'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o nome do json?")
qp = q.toLowerCase()
if(fs.existsSync(`./base de dados/${qp}.json`)) return reply("JSON já existente")
try {
fs.writeFileSync(`./base de dados/${qp}.json`, JSON.stringify([]))
reply("JSON criado com sucesso ✅")
} catch { reply("Erro") }
break

case 'rmjson'://by jherffeson
if(!isOwner) return reply(enviar.msg.donosmt)
if(!q) return reply("KD o nome do json?")
qp = q.toLowerCase()
if(!fs.existsSync(`./base de dados/${qp}.json`)) return reply("JSON não existente")
try {
fs.unlinkSync(`./base de dados/${qp}.json`)
reply("JSON deletado com sucesso ✔️")
} catch { reply("Erro") }
break

case 'anagrama'://by jherffeson & monarge
if(!isGroup) return reply('Comando apenas para grupos')
if(!isModobn) return reply(enviar.msg.modobz)
ana = alerandom(palavrasANA.length)
anagrama = `./armor/jogo/anagrama/anagrama-${from}.json`
if(!isGroupAdmins && !fs.existsSync(anagrama)) return reply("Somente admins podem iniciar o jogo do anagrama")
if(args.join(' ') === '1') {
if(fs.existsSync(anagrama)) {
dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
reply(`*O jogo já foi iniciado neste grupo:*
× *Palavra:* ${shuffle(dataAnagrama.embaralhada)}
× *Dica:* ${dataAnagrama.dica}
`)
} else {
saveJSON(palavrasANA[ana], anagrama)
blackmd.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────
`}, {quoted: info})
}
} else if(args.join(' ') ==='0') {
if(!fs.existsSync(anagrama)) return reply('Não tem como desativar o jogo do anagrama, pôs ele não foi ativado')
fs.unlinkSync(anagrama)
reply("Jogo anagrama desativado com sucesso neste grupo...")
} else return reply('Use 1 para ativar o jogo do anagrama\nPara desativar use anagrama 0')
break

case 'revelaranagrama': case 'ran': {//by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
ana = alerandom(palavrasANA.length)
anagrama = `./armor/jogo/anagrama/anagrama-${from}.json`
if(!fs.existsSync(anagrama)) return reply("Jogo anagrama não iniciado...")
dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
resp = dataAnagrama.original
fs.unlinkSync(anagrama)
var bglh = [
`[ ❗ ] Reiniciando o jogo em 5️⃣`,
`[ ❗ ] Reiniciando o jogo em 4️⃣`,
`[ ❗ ] Reiniciando o jogo em 3️⃣`,
`[ ❗ ] Reiniciando o jogo em 2️⃣`,
`[ ❗ ] Reiniciando o jogo em 1️⃣`,
`[ ❗ ] Reiniciando o jogo em 0️⃣`
]
let { key } = await blackmd.sendMessage(from, {text: `💢 FINALIZANDO GAME 💢`}, {quoted: info})//primeira mensagem
await sleep(1000)
await blackmd.sendMessage(from, {text: `*Fim de jogo, a palavra era ↴*
⇒ 
*Irei resetar o jogo* 😕`, edit: key }, {quoted: info})
await sleep(1000)
for(let b = 0; b < resp.length; b++) {
await blackmd.sendMessage(from, {text: `*Fim de jogo, a palavra era ↴*
⇒ ${resp.slice(0, b+1)}
*Irei resetar o jogo* 😕`, edit: key }, {quoted: info})
}
await sleep(1000)
for(let i = 0; i < bglh.length; i++) {
await sleep(1000)
await blackmd.sendMessage(from, {text: bglh[i], edit: key }, {quoted: info})
}
saveJSON(palavrasANA[ana], anagrama)
await blackmd.sendMessage(from, {text: `╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────`, edit: key }, {quoted: info})
}
break

case 'quizanimais'://by jherffeson
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Use ${prefix+command} 1/0 _(1 para começar o jogo, e 0 para desligar)_`)
if(Number(args[0]) === 1) {
if(!isGroupAdmins && !fs.existsSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)) return reply("Somente admins podem iniciar o jogo... Após iniciado, qualquer membro poderá usar 🐠")
if(fs.existsSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)) {
QuizbyMath = JSON.parse(fs.readFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`))
reply(`_O quiz animais já foi iniciado neste grupo... Tente acertar o animal na foto abaixo_ 🌚`)
setTimeout(() => {
blackmd.sendMessage(from, {image: {url: QuizbyMath.foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`})
}, 500)
} else {
jherffeson = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[jherffeson])}`)
blackmd.sendMessage(from, {image: {url: quizanimais[jherffeson].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`}, {quoted: seloctt})
}
} else if(Number(args[0]) === 0) {
if(!fs.existsSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)) return reply("Não tem como finalizar um jogo não iniciado...")
fs.unlinkSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)
reply("Quiz animais finalizado com sucesso ✅")
}
break

case 'revelarquiz': case 'rq':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!fs.existsSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)) return reply("Não tem como finalizar um jogo não iniciado...")
QuizbyMath = JSON.parse(fs.readFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`))
reply(`✅ *Jogo finalizado... O animal era:* ${QuizbyMath.original}

*Irei reiniciar o jogo...*`)
fs.unlinkSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)
setTimeout(() => {
jherffeson = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[jherffeson])}`)
blackmd.sendMessage(from, {image: {url: quizanimais[jherffeson].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`}, {quoted: seloctt})
}, 4000)
break

case 'barbainfo':
if(!isOwner) return
blackmd.relayMessage(
      from,
      {
        interactiveMessage: {
          headerType: `IMAGE`,
          body: {text: `Opa mn @${sender.split("@")[0]}`},
          footer: {text: "@Jherff_prohost"},
    contextInfo: {participant: sender, mentionedJid: [sender], quotedMessage: info.message},
          nativeFlowMessage: {
            buttons: [{
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Site BARBA BRANCA",
                url: "http://br1.bronxyshost.com:4262",
                merchant_url: "http://br1.bronxyshost.com:4262"
              }),
            },
            {
              name: "cta_copy",
              buttonParamsJson: JSON.stringify({
                display_text: "Grupo do Barba Branca",
                copy_code: "https://chat.whatsapp.com/I3ONX54nkeE1gtm2gTCZz8"
              }),
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "MENU",
                id: "!menu",
                disabled: false
              }),
            },
            {
              name: "quick_reply",
              buttonParamsJson: JSON.stringify({
                display_text: "PING",
                id: "!ping",
                disabled: false
              }),
            }],
            messageParamsJson: "",
          },
        },
      },
      {}
    )
break



//início do nsfw

case 'loli':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { loli } = require('./database/nsfw/animes.js')
var totalnsfw = loli[Math.floor(Math.random() * loli.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'trap':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { trap } = require('./database/nsfw/animes.js')
var totalnsfw = trap[Math.floor(Math.random() * trap.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ass':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ass } = require("./database/nsfw/nsfw.js")
var totalnsfw = ass[Math.floor(Math.random()*ass.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ahegao':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ahegao } = require("./database/nsfw/nsfw.js")
var totalnsfw = ahegao[Math.floor(Math.random()*ahegao.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'bdsm':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { bdsm } = require("./database/nsfw/nsfw.js")
var totalnsfw = bdsm[Math.floor(Math.random()*bdsm.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'blowjob':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { blowjob } = require("./database/nsfw/nsfw.js")
var totalnsfw = blowjob[Math.floor(Math.random()*blowjob.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'cuckold':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { cuckold } = require("./database/nsfw/nsfw.js")
var totalnsfw = cuckold[Math.floor(Math.random()*cuckold.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'cum':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { cum } = require("./database/nsfw/nsfw.js")
var totalnsfw = cum[Math.floor(Math.random()*cum.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ero':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ero } = require("./database/nsfw/nsfw.js")
var totalnsfw = ero[Math.floor(Math.random()*ero.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'femdom':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { femdom } = require("./database/nsfw/nsfw.js")
var totalnsfw = femdom[Math.floor(Math.random()*femdom.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'foot':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { foot } = require("./database/nsfw/nsfw.js")
var totalnsfw = foot[Math.floor(Math.random()*foot.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'gangbang':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { gangbang } = require("./database/nsfw/nsfw.js")
var totalnsfw = gangbang[Math.floor(Math.random()*gangbang.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'ganbganb':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { ganbganb } = require('./database/nsfw/animes.js')
var totalnsfw = ganbganb[Math.floor(Math.random() * ganbganb.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'glasses':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { glasses } = require("./database/nsfw/nsfw.js")
var totalnsfw = glasses[Math.floor(Math.random()*glasses.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'hentai':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { hentai } = require("./database/nsfw/nsfw.js")
var totalnsfw = hentai[Math.floor(Math.random()*hentai.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'hentai2':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { hentai2 } = require('./database/nsfw/animes.js')
var totalnsfw = hentai2[Math.floor(Math.random() * hentai2.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'nekos': {
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/nsfw/animes.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
}
break

case 'neko2': {
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { neko2 } = require('./database/nsfw/hentai.js')
var totalnsfw = neko2[Math.floor(Math.random() * neko2.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
}
break

case 'jahy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { jahy } = require("./database/nsfw/nsfw.js")
var totalnsfw = jahy[Math.floor(Math.random()*jahy.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'masturbation':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { masturbation } = require("./database/nsfw/nsfw.js")
var totalnsfw = masturbation[Math.floor(Math.random()*masturbation.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'orgy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { orgy } = require("./database/nsfw/nsfw.js")
var totalnsfw = orgy[Math.floor(Math.random()*orgy.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'panties':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { panties } = require("./database/nsfw/nsfw.js")
var totalnsfw = panties[Math.floor(Math.random()*panties.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'pussy':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { pussy } = require("./database/nsfw/nsfw.js")
var totalnsfw = pussy[Math.floor(Math.random()*pussy.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'boobs':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { boobs } = require("./database/nsfw/nsfw.js")
var totalnsfw = boobs[Math.floor(Math.random()*boobs.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'tentacles':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { tentacles } = require("./database/nsfw/nsfw.js")
var totalnsfw = tentacles[Math.floor(Math.random()*tentacles.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'thighs':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { thighs } = require("./database/nsfw/nsfw.js")
var totalnsfw = thighs[Math.floor(Math.random()*thighs.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'yuri':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { yuri } = require("./database/nsfw/nsfw.js")
var totalnsfw = yuri[Math.floor(Math.random()*yuri.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'zettai':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { zettai } = require("./database/nsfw/nsfw.js")
var totalnsfw = zettai[Math.floor(Math.random()*zettai.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'kasedaiki':
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isGroup && !isVip) { 
setTimeout(() => {reagir(from, "🚫")}, 300)
reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
return blackmd.sendMessage(from, {audio: {url:'./database/audios/vip.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info}) }
setTimeout(() => {reagir(from, "😈")}, 300)
reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
const { kasedaiki } = require("./database/nsfw/nsfw.js")
var totalnsfw = kasedaiki[Math.floor(Math.random()*kasedaiki.length)]
blackmd.sendMessage(sender, {image: {url: totalnsfw}, caption: `*Aqui está* ${pushname} 😳🔥`}, {quoted: info})
break

case 'amador':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 41) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/AmadorVideo/${numb}.mp4`}
   mag = '🔞AmadorVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break


case 'onlyfans':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 47) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/OnlyfansVideo/%20${numb}.mp4`}
   mag = '🔞OnlyfansVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'porno':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 15) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/PornoVideo/${numb}.mp4`}
   mag = '🔞PornoVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'egrilvideo':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")  
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 14) + 1
   wew = {url: `https://github.com/Herojoii/midiiporno/raw/main/packs/EgrilVideo/%20${numb}.mp4`}
   mag = '🔞EgrilVideo🔞'
let buttonMessage = {
video: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'aline':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 65) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFaria/%20${numb}.jpg`}
    mag = '🔞AlineFaria🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'alifox':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 59) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlineFox/%20${numb}.jpg`}
   mag = '🔞AlineFox🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'alycai':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AlyciaRibeiro/%20${numb}.jpg`}
   mag = '🔞AlyciaRibeiro🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'amichan':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Amiichan/%20${numb}.jpg`}
   mag = '🔞Amiichan🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'aninha':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/AninhaLopes/%20${numb}.jpg`}
   mag = '🔞AninhaLopes🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'baby':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BabyMatoso/%20${numb}.jpg`}
   mag = '🔞BabyMatoso🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'belle':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 31) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BelleDelphine/%20${numb}.jpg`}
   mag = '🔞BelleDelphine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'brenda':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/BrendaTrindade/%20${numb}.jpg`}
   mag = '🔞BrendaTrindade🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'cami':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/CamiBrito/%20${numb}.jpg`}
   mag = '🔞CamiBrito🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'clowniac':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Cclowniac/%20${numb}.jpg`}
   mag = '🔞Cclowniac🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'galvao':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/FehGalvao/%20${numb}.jpg`}
   mag = '🔞FehGalvao🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'giovanna':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 34) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/GiovannaCampomar/%20${numb}.jpg`}
   mag = '🔞GiovannaCampomar🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'isadora':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg`}
   mag = '🔞ISADORA MARTINEZ🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'isa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg`}
   mag = '🔞IsaWaifu🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'lay':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 25) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg`}
   mag = '🔞LayNuniz🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'leticia':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LeticiaShirayuki/%20${numb}.jpeg`}
   mag = '🔞LeticiaShirayuki🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'marina':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 27) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg`}
   mag = '🔞MarinaMui🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'maru':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 40) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg`}
   mag = '🔞MaruKarv🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'princesa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 32) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg`}
   mag = '🔞McPrincesa🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'meadinha':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 33) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/Me1adinha/%20${numb}.jpg`}
   mag = '🔞Me1adinha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'nath':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 23) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NathBister%C3%A7o/%20${numb}.jpg`}
   mag = '🔞NathBister🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'nega':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 21) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/NegaBarbie/%20${numb}.jpg`}
   mag = '🔞NegaBarbie🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'polonesa':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 28) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PolonesaDoHype/%20${numb}.jpg`}
   mag = '🔞PolonesaDoHype🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'pornofot':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 44) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/PornoFoto/%20${numb}.jpg`}
   mag = '🔞PornoFoto🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'rute':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/RuteRocha/%20${numb}.jpg`}
   mag = '🔞RuteRocha🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'vita':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`}
   mag = '🔞VitaCelestine🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'carnie':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 29) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`}
   mag = '🔞carniello🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'egril':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
   numb = Math.floor(Math.random() * 36) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/egril/%20${numb}.jpg`}
   mag = '🔞egril🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'neter':{
  if(!isNsfw && isGroup) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}modo+18`)
  if(!isChatOfc && !isVip) return reply("[ ❗ ] O uso desse recurso fora do Chat Ofc está restrito apenas a usuários VIP ❌")
  reagir(from, "😈")
  reply(`${isGroup ? "*Olha o PV amor...*" : "Enviando"} 😈`)
   numb = Math.floor(Math.random() * 30) + 1
   wew = {url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`}
   mag = '🔞netersg🔞'
let buttonMessage = {
image: wew,
caption: mag,
footer: `${NomeDoBot}`,
headerType: 4,
}
await blackmd.sendMessage(sender,buttonMessage,{quoted:seloctt})
}
break

case 'xvideos': case 'xv':
reagir(from, "😳")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(`${blacksite}/api/xvsearch?q=${encodeURI(q)}&apikey=`+API_KEY_BLACK)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(`${blacksite}/api/xvideos?url=${i.link}&apikey=`+API_KEY_BLACK)
txt = `📝 *TÍTULO:* ${i.titulo}
🤭 *DESCRIÇÃO:* ${media.resultado.desc}
⏳ *DURAÇÃO:* ${i.duracao}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `🔞 Search XV - `+i.titulo, media.resultado.desc, i.thumbnail, i.link, info)
await sleep(1000)
sendVideo(sender, media.resultado.download)
} else {
media = await fetchJson(`${blacksite}/api/xvideos?url=${q}&apikey=`+API_KEY_BLACK)
ABC = await fetchJson(`${blacksite}/api/info/translate?texto=${encodeURI(media.resultado.titulo)}&ling=pt&apikey=`+API_KEY_BLACK)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
sendVideo(sender, media.resultado.download, "🔞 XV - "+ABC.result, info)
}
} catch(e) { console.log(e)
reply("Erro") }
break

case 'xnxx':
reagir(from, "🔥")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(barbasite+`/api/xnxx?q=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(barbasite+`/api/xnxxdl?url=${i.link}&apikey=`+API_KEY_BARBA)
txt =
`📝 *TÍTULO:* ${i.title}
⏳ *DURAÇÃO:* ${i.duration}
🥏 *QUALIDADE:* ${i.quality}
📊 *VIEWS:* ${i.views}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `🧿 Search XNXX - `+i.title, media.resultado.keyword, i.thumb, i.link, info)
sendVideo(sender, media.resultado.url)
} else {
media = await fetchJson(barbasite+`/api/xnxxdl?url=${q}&apikey=`+API_KEY_BARBA)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
sendVideo(sender, media.resultado.url)
}
} catch(e) { console.log(e)
reply("Erro") }
break

case 'pornhubsearch': case 'phsch': case 'ph':
reagir(from, "🔥")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!isVip) return reply(enviar.msg.vip)
if(!q) return reply(prefix+command+" link ou nome")
try {
if(!isUrl(q)) {
ABC = await fetchJson(barbasite+`/api/phsearch?q=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
if(ABC.resultado.length <= 0) return reply(`Sem resultados disponíveis..`)
i = ABC.resultado[alerandom(ABC.resultado.length)]
media = await fetchJson(barbasite+`/api/pornhub?url=${i.link}&apikey=`+API_KEY_BARBA)
txt =
`📝 *TÍTULO:* ${i.title}
⏳ *DURAÇÃO:* ${i.duration}
📊 *VIEWS:* ${i.views}
💁🏼‍♀️ *ATRIZES:* ${media.result.pornstars.join(`, `)}
🔮 *CANAL:* ${media.result.provider.username}
🔗 *LINK:* ${i.link}`
sendUrlText(sender, txt, `☣ Search PORNHUB - `+i.title, media.result.tags.join(`, `), i.preview, i.link, info)
sendVideo(sender, media.result.mediaDefinitions[0].videoUrl)
} else {
media = await fetchJson(barbasite+`/api/pornhub?url=${q}&apikey=`+API_KEY_BARBA)
a = media.result
ABC = await fetchJson(barbasite+`/api/info/translate?texto=${encodeURI(a.title)}&ling=pt&apikey=`+API_KEY_BARBA)
if(isGroup) reply(`Chega PV lek 😈`)
await sleep(1000)
txt =
`📝 *TÍTULO:* ${a.title}
⏳ *DURAÇÃO:* ${a.durationFormatted}
🎲 *POSTADO:* ${a.uploadDate}
📊 *VIEWS:* ${largeNumber(a.views)}
✔ *LIKES:* ${a.vote.up}
✖ *DESLIKES:* ${a.vote.down}
📊 *CLASSIFICAÇÃO:* ${a.vote.rating}

💁🏼‍♀️ *ATRIZES:*
${a.pornstars.map(p => `• ${p}`).join(`\n`)}

🎭 *CATEGORIAS:*
${a.categories.map(c => `• ${c}`).join(`\n`)}

🔮 *CANAL:* ${a.provider.username}
🔗 *LINK:* https://pt.pornhub.com${a.provider.url}`
sendUrlText(sender, txt, a.title, a.tags.join(`, `), a.preview, a.url, info)
sendVideo(sender, a.mediaDefinitions[0].videoUrl, "🔞 PH - "+ABC.result, info)
}
} catch(e) { console.log(e)
reply(`Erro`) }
break

case 'plaq': case 'plaq1':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: {url: `https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${q}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`}, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq2':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: {url: `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`}, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq3':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq4':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq5':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

case 'plaq6':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup && !isVip) return reply("[ ❗ ] *Este recurso no PV só está liberado para os usuários VIP* ❌")
if(isGroup && !isNsfw) return reply(enviar.msg.modonsfw)
if(!q) return reply(`Escreva algo...`)
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
reply(`${isGroup ? "Chega PV lek" : "Enviando"} 😈`)
blackmd.sendMessage(sender, {image: buffer, caption: `*Plaquinha feita ✓*`, mentions: [sender]}, {quoted: info})
break

//fim do nsfw

case 'chance':
setTimeout(() => {reagir(from, "🤔")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
var avb = body.slice(7)
if(args.length < 1) return blackmd.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do M4 ganhar na loteria`}, {quoted: seloctt})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)}\n\né de... ${random}% 🤷🏻‍♂️`
mention(hasil)
break

case 'nazista':
  setTimeout(() => {reagir(from, "💂🏼‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {text: `*Salve Hitler* 💂🏼‍♂️

⇒ @${sender_ou_n.split("@")[0]}

*Sai dessa vida...*`, mentions: [sender_ou_n]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imgnazista}, caption: `*O QUANTO VOCÊ É NAZISTA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  NAZISTA 卐

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gay':
  setTimeout(() => {reagir(from, "🏳️‍🌈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {text: `*Mn... Tu é ?* 🫵🏽🤨🏳️‍🌈

⇒ @${sender_ou_n.split("@")[0]}

*Pesquisando...*`, mentions: [sender_ou_n]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 41 ) {var bo = 'você é né?😏'} else if(boiola == 42 ) {var bo = 'você é né?😏'} else if(boiola == 43 ) {var bo = 'você é né?😏'} else if(boiola == 44 ) {var bo = 'você é né?😏'} else if(boiola == 45 ) {var bo = 'você é né?😏'} else if(boiola == 46 ) {var bo = 'você é né?😏'} else if(boiola == 47 ) {var bo = 'você é né?😏'} else if(boiola == 4 ) {var bo = 'você é né?😏'} else if(boiola == 49 ) {var bo = 'você é né?😏'} else if(boiola == 50 ) {var bo = 'você é ou não?🧐'} else if(boiola > 51) {var bo = 'você é gay🙈'
}
blackmd.sendMessage(from, {image: {url: links.gay}, caption: `*O QUANTO VOCÊ É GAY ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GAY 🌈

${bo}

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: seloctt})
}, 7000)
break

case 'feio': case 'feia':
  setTimeout(() => {reagir(from, "🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {text: `*Kkk pesquisando sua ficha de feio (a)* 🤡

⇒ @${sender_ou_n.split("@")[0]}

*Um segundo...*`, mentions: [sender_ou_n]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'Ainda tá na média'} else if(feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'Feio e ainda não sabe se vestir, vixi'} else if(feio == 49 ) {var bo = 'Feiooo'} else if(feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if(feio > 51) {var bo = 'você é Feio demais 🙈'} 

blackmd.sendMessage(from, {image: {url: imgfeio}, caption: `*O QUANTO VOCÊ É FEIO (A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  FEIO (A) 🤡
 
 ${bo}

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: seloctt})
}, 7000)
break 

case 'corno': case 'corna':
  setTimeout(() => {reagir(from, "🤟🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Foi um chifre desse que a NASA usou pra fazer contato com os ETs* 🐂

⇒ @${sender_ou_n.split("@")[0]}

*Tamanho desse trem... kk*`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imgcorno}, caption: `*O QUANTO VOCÊ É CORNO (A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  CORNO 🤟🏽

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'hetero': case 'hétero':
  setTimeout(() => {reagir(from, "🏁")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Puxando sua ficha de hétero* 🏁

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: links.hetero}, caption: `*O QUANTO VOCÊ É HÉTERO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  HÉTERO 🏁

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'vesgo': case 'vesga':
  setTimeout(() => {reagir(from, "👀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
if(command == `vesgo`) {
var txt = `irmão`
} else {
var txt = `irmã`
}
blackmd.sendMessage(from, {text:`*Olha pra cá ${txt} kakakaka* 🙄

⇒ @${sender_ou_n.split("@")[0]}

*Um segundo...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imgvesgo}, caption: `*O QUANTO VOCÊ É VESGO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  VESGO 👁️👄👁️

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'bebado': case 'bêbada':
  setTimeout(() => {reagir(from, "🥴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Bebe não mn, isso faz mal...* 🥴

⇒ @${sender_ou_n.split("@")[0]}

*Salvo se for pra esquecer o/a ex...* 😭`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imgbebado}, caption:`*O QUANTO VOCÊ É BÊBADO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  BÊBADO 🥴

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gado': case 'gada':
  setTimeout(() => {reagir(from, "🐂")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Ui, ${command} d+* 🐂

⇒ @${sender_ou_n.split("@")[0]}

*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imggado}, caption: `*O QUANTO VOCÊ É GADO(A)?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GADO 👉🏽 🐂👈🏽

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gostoso':
  setTimeout(() => {reagir(from, "😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Vamos ver o quanto você é gostoso 😏

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imggostoso}, caption: `*O QUANTO VOCÊ É GOSTOSO ?*

⇒ @${sender_ou_n.split("@")[0]}

Você é ✮${random}✮ gostoso 😏

${NomeDoBot}🎖️`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break 

case 'gostosa':
  setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Pesquisando sua ficha de gostosa* 😳

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: imggostosa}, caption: `*O QUANTO VOCÊ É GOSTOSA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  GOSTOSA 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pau':
  setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Medindo o tamanho do seu pau* 😳\n\n⇒ @${sender_ou_n.split("@")[0]}\n\n*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 30)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/576808357af91ddbbdf05.jpg`}, caption: `*Oh mds*

⇒ @${sender_ou_n.split("@")[0]}

Seu pau mede ✮${random}cm✮ 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'bct':
case 'buceta':
case 'xrc':
case 'xereca':
  setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Medindo o tamanho da sua ${command}* 😳\n\n⇒ @${sender_ou_n.split("@")[0]}\n\n*Calma ae kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 20)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/6ad70de29f83d2e96c045.jpg`}, caption: `*Eita kkkk*

⇒ @${sender_ou_n.split("@")[0]}

Sua ${command} mede ✮${random}cm✮ 😳

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pocoto':
  setTimeout(() => {reagir(from, "🐴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/pocoto.mp3'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Cavalgando e pesquisando... O quanto você é pocoto* 🐴

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/b051856e95ee7d2db7997.jpg`}, caption: `*O QUANTO VOCÊ É POCOTO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  POCOTO 🐴

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'puta': case 'prostituta':
  setTimeout(() => {reagir(from, "😈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Pesquisando o quanto você é puta* 😈

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/0cbe2a38e0d84b226c98b.jpg`}, caption: `*O QUANTO VOCÊ É PUTA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  PUTA 😈

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'calvo': case 'calva':
  setTimeout(() => {reagir(from, "👨🏼‍🦲")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Vai comprar um produto aí, enquanto eu pesquiso o quanto você é ${command}* 👨🏼‍🦲

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/8969f19b86f6d09c0e5f7.jpg`}, caption: `*O QUANTO VOCÊ É CALVO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  ${command.toUpperCase()} 👨🏼‍🦲

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'rico': case 'rica':
  setTimeout(() => {reagir(from, "🤑")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Eitah kkk Já faz o pix enquanto eu puxo sua conta do banco* 🤑

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/b9873c2384d82ebcd4fcc.jpg`}, caption: `*O QUANTO VOCÊ É RICO (A) ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  RICO 🤑

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'pobre':
  setTimeout(() => {reagir(from, "🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Zero comentários... Kkkk vamos ver o quanto você é pobre* 🤣

⇒ @${sender_ou_n.split("@")[0]}

*Um momento...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/aebb4824e0931bc9c83ea.jpg`}, caption: `*O QUANTO VOCÊ É POBRE ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  POBRE 🤣

${NomeDoBot}🎖️`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'lindo': case 'bonito':
setTimeout(() => {reagir(from, "🤩")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Que que isso papai* 🤩

⇒ @${sender_ou_n.split("@")[0]}

*Olha essa lindeza...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/427a5e27101ac754f5d17.jpg`}, caption: `*O QUANTO VOCÊ É LINDO ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  LINDO 🤩

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'linda': case 'bonita':
  setTimeout(() => {reagir(from, "😍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Opaisso ADM... cê tá vendo isso ?* 😍

⇒ @${sender_ou_n.split("@")[0]}

*Xonei nela...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/427a5e27101ac754f5d17.jpg`}, caption: `*O QUANTO VOCÊ É LINDA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  LINDA 😍

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'noia':
  setTimeout(() => {reagir(from, "👽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*iqjakdksjgaijduaha eu sla* 👽

⇒ @${sender_ou_n.split("@")[0]}

*Calma ae, kkk...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/e61d24ca1d95aea750422.jpg`}, caption: `*O QUANTO VOCÊ É NOIA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  NOIA 👽

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'sigma':
  setTimeout(() => {reagir(from, "🍷")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Conversa de alto nível senhores* 🗿🍷

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/877e017c22dc7ab8b7c07.jpg`}, caption: `*O QUANTO VOCÊ É SIGMA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  SIGMA 🗿🍷

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'beta':
  setTimeout(() => {reagir(from, "🤓")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {text:`*Processando seu nível de beta* 🤓

⇒ @${sender_ou_n.split("@")[0]}

*Aguarde...*`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
blackmd.sendMessage(from, {image: {url: `https://telegra.ph/file/a84549824c451ee2abffc.jpg`}, caption: `*O QUANTO VOCÊ É BETA ?* 

⇒  @${sender_ou_n.split("@")[0]}

 VOCÊ É  ✮${random}%✮  BETA 🤓

⏤͟͟͞͞ ꦿ${NomeDoBot}`, mentions: [sender_ou_n]}, {quoted: seloctt})
}, 7000)
break

case 'amor':
case 'odio':
if(!isModobn) return reply(enviar.msg.modobz)
if(command == `amor`) {
if(!menc_os2) return reply(`Marque a pessoa para quem você quer dedicar o seu amor...`)
blackmd.sendMessage(from, {text: `Olá @${menc_os2.split('@')[0]}, ${tempo} ^^
@${sender.split('@')[0]} mandou dizer que te ama 🥺💖`, mentions: [menc_os2, sender]}, {quoted: seloctt})
enviarfigu(`./database/figu/loveyou.webp`)
} else {
if(!menc_os2) return reply(`Marque a pessoa para quem você quer dedicar o seu ódio...`)
blackmd.sendMessage(from, {text: `Olá @${menc_os2.split('@')[0]}, ${tempo} '-'
@${sender.split('@')[0]} mandou dizer que te odeia com todas as forças 🖕🏽😝`, mentions: [menc_os2, sender]}, {quoted: seloctt})
enviarfigu(`./database/figu/hateyou.webp`)
}
break

case 'matar':
case 'mata':
  setTimeout(() => {reagir(from, "💀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não irei matar o meu dono... Mas posso matar você 😈')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `*⚔️VOCÊ ACABA DE MATAR O (A)⚔️*

⇒ @${menc_os2.split('@')[0]} 🗡️👺

${NomeDoBot} ✨`, mentions: [menc_os2]})
break 


case 'beijo': case 'beijar':
  setTimeout(() => {reagir(from, "💋")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/123ac41eda1b7668378d1.mp4`}, gifPlayback: true, caption: `*VOCÊ DEU UM BEIJO TOTOSO NA (O)*

  ⇒  @${menc_os2.split('@')[0]} 👉🏽💞👈🏽🥺

 ✮${NomeDoBot}✮` , mentions: [menc_os2]})
break

case 'biografia':
case 'bio':
try {
status = (await blackmd.fetchStatus(sender_ou_n)).status
} catch {
status = "🔒 Privada 🔒"
}
reply(status)
break

case 'tapa':
  setTimeout(() => {reagir(from, "😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um tapa, a mensagem ou o @')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/154cf59fd8bdb90f7feef.mp4`}, gifPlayback: true, caption: `*VOCÊ DEU UM TAPA NA RABA DA*

 ⇒   @${menc_os2.split('@')[0]} 👉🏽👈🏽😏

✮${NomeDoBot}✮`, mentions: [menc_os2]})
break

case 'chute':
case 'chutar':
  setTimeout(() => {reagir(from, "🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Você não está autorizado a chutar meu dono... 😐')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `*VOCÊ DEU UMA BICUDA NO(A)*

 ⇒ @${menc_os2.split('@')[0]} 👉🏽👈🏽🤡

✮${NomeDoBot}✮`, mentions: [menc_os2]})
break 

case 'abraco':
case 'abraço':
case 'abraçar':
  setTimeout(() => {reagir(from, "🤗")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um abraço, a mensagem ou o @')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/a0904ffe89f81b989b4a8.mp4`}, gifPlayback: true, caption: `*VOCÊ DEU UM ABRAÇO APERTADO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🫂

${NomeDoBot} 🤗`, mentions: [menc_os2]})
break

case 'soco':
case 'socar':
  setTimeout(() => {reagir(from, "👊🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um soco, a mensagem ou o @')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Vou te descer na porrada irmão... Mexeu com meu dono; mexeu comigo 👊🏽')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/b211911eac30a4063fbba.mp4`}, gifPlayback: true, caption: `*VOCÊ DEU UM MURRO NA CARA DO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤡

${NomeDoBot} 👊🏽`, mentions: [menc_os2]})
break

case 'mano':
case 'bro':
case 'brother':
case 'toque':
case 'tocar':
setTimeout(() => {reagir(from, "🤝🏽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer dar um aperto de mão, a mensagem ou o @')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/5fc2a26fc3a9d449e9d5b.mp4`}, gifPlayback: true, caption: `*VOCÊ DEU UM APERTO DE MÃO NO (A)*

 ⇒ @${menc_os2.split('@')[0]} 🤜🏽🤛🏽

${NomeDoBot} 🤝🏽`, mentions: [menc_os2]})
break

case 'estuprar': case 'estupro':
setTimeout(() => {reagir(from, "🌚")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
if(!isNsfw) return reply(enviar.msg.modonsfw)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer estuprar, a mensagem ou o @')
blackmd.sendMessage(from, {audio: {url:'./database/audios/aguarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/408e758abae483822851e.mp4`}, gifPlayback: true, caption: `*VOCÊ ACABOU DE ESTUPRAR O (A)*

 ⇒ @${menc_os2.split('@')[0]} 🕳️🙈

${NomeDoBot} 🌚🍷`, mentions: [menc_os2]})
break

case 'namorar': case 'namoracomigo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
reagir(from, "❤")
if(!menc_os2) return reply(`Marque um usuário para pedir este em namoro, a mensagem ou o @`)
if(botNumber.includes(menc_os2)) return reply(`Não pode pedir o bot em namoro kkk 😂`)
if(sender.includes(menc_os2)) return reply(`Tu não pode pedir tu msm em namoro kkk 😂`)
if(userEstaNamorando(sender)) {
  mention(`💞 Você já está ${userEstaCasado(sender) ? "casado" : "em um relacionamento sério"} com o/a @${getDBFZuser(sender).usu2}.. 🥰`)
  await sleep(500)
  return blackmd.sendMessage(identArroba(getDBFZuser(sender).usu2), {text: `🐂 Aí ${getname(getDBFZuser(sender).usu2)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em namoro ali...`, mentions: [sender]}, {quoted: info})
}
if(userEstaNamorando(menc_os2)) {
  mention(`Cê para lek, O/a @${menc_os2.split("@")[0]} ${userEstaCasado(sender) ? "é casado/a" : "está namorando"} com o/a @${getDBFZuser(menc_os2).usu2}`)
  await sleep(500)
  return blackmd.sendMessage(identArroba(getDBFZuser(menc_os2).usu2), {text: `🐂 Aí ${getname(getDBFZuser(menc_os2).usu2)}, tão pedindo a tua dupla @${menc_os2.split("@")[0]} em namoro ali...`, mentions: [menc_os2]}, {quoted: info})
}
deletarAntigoPedidoDeNamoro(sender)
deletarAntigoPedidoDeNamoro(menc_os2)
gerarPedidoDeNamoro(sender, menc_os2, from)
txt = `${tempo_emoji} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}
  
_${pushname} está te pedindo em namoro... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🥰`
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/ebd792c1f49a37a9eece6.mp4`}, caption: txt, gifPlayback: true, mentions: [menc_os2]}, {quoted: seloctt})
break

case 'casar': case 'casacomigo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
reagir(from, "💍")
if(!menc_os2) return reply(`Marque um usuário para pedir este em casamento, a mensagem ou o @`)
if(botNumber.includes(menc_os2)) return reply(`Não pode pedir o bot em casamento kkk 😂`)
if(sender.includes(menc_os2)) return reply(`Tu não pode pedir tu msm em casamento kkk 😂`)
if(!userEstaNamorando(sender)) return reply(`Para pedir alguém em casamento, você precisa primeiro estar namorando essa pessoa...`)
if(userEstaCasado(sender)) {
  mention(`💞 Você já está casado/a com o/a @${getDBFZuser(sender).usu2}.. 🥰`)
  await sleep(500)
  return blackmd.sendMessage(identArroba(getDBFZuser(sender).usu2), {text: `🐂 Aí ${getname(getDBFZuser(sender).usu2)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em casamento ali...`, mentions: [sender]}, {quoted: info})
}
if(menc_os2 != identArroba(getDBFZuser(sender).usu2)) {
  mention(`Sua dupla é o/a @${getDBFZuser(sender).usu2}... Fica esperto em 🐂`)
  await sleep(500)
  return blackmd.sendMessage(identArroba(getDBFZuser(sender).usu2), {text: `🐂 Aí ${getname(getDBFZuser(sender).usu2)}, tua dupla @${sender.split("@")[0]} tá pedido outra pessoa em casamento ali...`, mentions: [sender]}, {quoted: info})
}
if(isWaitUsuFZ_casamento(sender)) return mention(`👻 Você já pediu sua dupla @${getDBFZuser(sender).usu2} em casamento... Aguarde resposta ou use ${prefix}cancelar`)
gerarPedidoDeCasamento(sender, from)
txt = `${tempo_emoji} *${tempo.toUpperCase()}*
⇒ @${menc_os2.split('@')[0]}
  
_${pushname} está te pedindo em casamento... Digite『 s 』caso queira aceitar, ou『 n 』caso queira recusar_ 🫴🏽💍`
blackmd.sendMessage(from, {video: {url: `https://telegra.ph/file/0895136acc33944568a84.mp4`}, caption: txt, gifPlayback: true, mentions: [menc_os2]}, {quoted: seloctt})
break

case 'terminar': case 'termino': case 'divorciar': case 'divorcio':
if(Number(args[0]) !== 1) return reply(`Tem crtz disso ${pushname} ? Se estiver mesmo disposto a ${command.startsWith("termi") ? "terminar" : "divorciar"} com sua dupla, use ${prefix+command} 1`)
if(!userEstaNamorando(sender)) return reply(`Você não está se relacionando com ninguém para terminar ou se divorciar...`)
terminarOuDivorciar(sender)
reply(`${command.startsWith("termi") ? "Término" : "Divórcio"} efetuado com sucesso 💔`)
break

case 'cancelar':
if(userPediuAlguemEmNamoro(sender)) {
cancelarPedidoDeNamoro(sender)
} else if(userPediuAlguemEmCasamento(sender)) {
cancelarPedidoDeCasamento(sender)
} else return reply(`Não há pedidos de namoro nem casamento...`)
reply(`👻 O pedido a sua dupla foi cancelado com sucesso...`)
break

case 'minhadupla': case 'dupla'://by jherffeson
reagir(from, "❤️‍🩹")
if(!userEstaNamorando(sender)) return reply(`Você não está casado (a) com ninguém... Sinto muito 😕`)
if(isWaitUsuFZ_namoro(sender)) return reply(`A pessoa quem você pediu em namoro não aceitou o pedido ainda... Portanto, não é possível consultar os dados da dupla 😶‍🌫️`)
i = getDBFZuser(sender)
n = i.namoro
c = i.casamento

//============contador de tempo================\\

data_pedido = `📆⃤ Namorando desde ${n.day}/${n.mm}/${n.year}`

if(!userEstaCasado(sender)) {
  tipo = "Namoro"
  tempo_total = "_Namorando a "
  sub = contarDias(sendHours("DD/MM/YYYY")) - contarDias(`${n.day}/${n.mm}/${n.year}`)
  horas = (sub * 24) + (Number(sendHours("HH")) - n.hora)
  if(horas <= 0) {
    sec = "aproximadamente "
    if((Number(sendHours("mm")) - n.minuto) <= 0) {
      sec += Number(sendHours("ss")) - n.segundo
      sec += ` segundo${(Number(sendHours("ss")) - n.segundo) != 1 ? "s" : ""}`
    } else {
      sec += Number(sendHours("mm")) - n.minuto
      sec += ` minuto${(Number(sendHours("mm")) - n.minuto) != 1 ? "s" : ""}`
    }
    tempo_total += sec
  } else if(horas > 0 && horas <= 24) {
    tempo_total += `aproximadamente ${horas} hora${horas != 1 ? "s" : ""}`
  } else tempo_total += converterDias(sub)
  tempo_total += "_\n"
  if(Number(sendHours("DD")) === n.day && horas > 24) {
    if(Number(sendHours("MM")) === n.mm && Number(sendHours("YYYY")) !== n.year) {
      ano = Number(sendHours("YYYY")) - n.year
      tempo_total = `_Namorando a exatamente ${ano} ano${ano != 1 ? "s" : ""}_`
      tempo_total += "\n"
      tempo_total += "*_Parabéns_* 💖✨"
    } else {
      mês = ((Number(sendHours("YYYY")) - n.year) * 12) + (Number(sendHours("MM")) - n.mm)
      tempo_total = `_Namorando a exatamente ${mês} m${mês != 1 ? "eses" : "ês"}_`
      tempo_total += "\n"
      tempo_total += "*_Parabéns_* 💗😍"
    }
  }
} else {
  tipo = "Casamento"
  tempo_total = "_Casados a "
  sub = contarDias(sendHours("DD/MM/YYYY")) - contarDias(`${c.day}/${c.mm}/${c.year}`)
  horas = (sub * 24) + (Number(sendHours("HH")) - c.hora)
  if(horas <= 0) {
    sec = "aproximadamente "
    if((Number(sendHours("mm")) - c.minuto) <= 0) {
      sec += Number(sendHours("ss")) - c.segundo
      sec += ` segundo${(Number(sendHours("ss")) - c.segundo) != 1 ? "s" : ""}`
    } else {
      sec += Number(sendHours("mm")) - c.minuto
      sec += ` minuto${(Number(sendHours("mm")) - c.minuto) != 1 ? "s" : ""}`
    }
    tempo_total += sec
  } else if(horas > 0 && horas <= 24) {
    tempo_total += `aproximadamente ${horas} hora${horas != 1 ? "s" : ""}`
  } else tempo_total += converterDias(sub)
  tempo_total += "_\n"
  data_pedido += `\n💍⃤ Casados desde ${c.day}/${c.mm}/${c.year}`
  if(Number(sendHours("DD")) === c.day && horas > 24) {
    if(Number(sendHours("MM")) === c.mm && Number(sendHours("YYYY")) !== c.year) {
      ano = Number(sendHours("YYYY")) - c.year
      tempo_total = `_Namorando a exatamente ${ano} ano${ano != 1 ? "s" : ""}_ 🎂`
      tempo_total += "\n"
      tempo_total += "*_Feliz aniversário_* 💖✨"
    } else {
      mês = ((Number(sendHours("YYYY")) - c.year) * 12) + (Number(sendHours("MM")) - c.mm)
      tempo_total = `_Namorando a exatamente ${mês} m${mês != 1 ? "eses" : "ês"}_ 🎂`
      tempo_total += "\n"
      tempo_total += "*_Feliz aniversário_* 💗😍"
    }
  }
}

//===================fotos=======================\\
db = getDBFZuser(sender)

try { foto1 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${db.usu1.split("@")[0]}@c.us`, 'image'))}`)).data
} catch(e) { foto1 = semfoto }

try { foto2 = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${db.usu2}@c.us`, 'image'))}`)).data
} catch(e) { foto2 = semfoto }

logocasal = barbasite+`/api/canvas/ship?foto1=${foto1}&foto2=${foto2}&mat=100&fundo=https://telegra.ph/file/070ced9a362da470ae3f9.jpg`

//=========distribuição de informações===========\\

txt = `
💕 ${tipo} entre ↴
『😍』@${db.usu1.split('@')[0]}
ㅤ &
〘❤️‍🩹〙@${db.usu2}
⇒ ${tempo_total}
---------------------------------------------------------
${data_pedido}`
mencionarIMG(txt, logocasal)
break

case 'dogolpe': case 'golpe': case 'golpista':
setTimeout(() => {reagir(from, "😳")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
if(!menc_os2 || menc_jid2[1]) return reply(`Marque a mensagem da pessoa ou use:\n${prefix+command} @alguém do grupo`)
random = `${Math.floor(Math.random() * 100)}`
golpenmr = random
if(golpenmr < 25){var golpetxt = `Não é golpe`}; if(golpenmr >= 25 && golpenmr < 50){var golpetxt = `Varia de pessoa pra pessoa`}; if(golpenmr >=50 && golpenmr < 75){var golpetxt = `Idiota gosta de ferir sentimentos`}; if(golpenmr > 75){var golpetxt = `Famoso destrói corações`}
blackmd.sendMessage(from, {text:`@${menc_os2.split("@")[0]} é golpe ? 🤔

*CALCULANDO GOLPE⟩* ✮${random}%✮

${golpetxt} 💔🤡`, mentions: [menc_os2]})
break

case 'shipo': case 'shippe': case 'shipe': case 'shipar':
setTimeout(() => {reagir(from, "😏")}, 300)
if(!menc_os2) return reply(`Marque a mensagem da pessoa ou use:\n${prefix+command} @alguém do grupo`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
mention(`*Hmm... Eu shipo o (a):*
 ⏤͟͟͞͞ ꦿ😍⧽ @${menc_os2.split("@")[0]}
*Com o (a):*
 ⏤͟͟͞͞ ꦿ😏⧽ @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}

 Com uma porcentagem de⧽ ✮${Math.floor(Math.random() * 100)+"%"}✮ ❤️`)
break

case 'casal':
setTimeout(() => {reagir(from, "😍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira`)
usu1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]
usu2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]
try {
get1 = await blackmd.profilePictureUrl(`${usu1}@c.us`, 'image');
link1 = await axios.get(`https://tinyurl.com/api-create.php?url=${get1}`);
foto1 = link1.data
} catch(e) {
foto1 = semfoto
}
try {
get2 = await blackmd.profilePictureUrl(`${usu2}@c.us`, 'image');
link2 = await axios.get(`https://tinyurl.com/api-create.php?url=${get2}`);
foto2 = link2.data
} catch(e) {
foto2 = semfoto
}
mat = Math.floor(Math.random() * 100)
txt = `*Hmmm.... Eu Shipo eles 2💘💘*
1= @${usu1}
e esse
2= @${usu2}
com uma porcentagem de: ${mat+"%"}`
mencionarIMG(txt, `${barbasite}/api/canvas/ship?foto1=${foto1}&foto2=${foto2}&mat=${mat}&fundo=https://telegra.ph/file/5074a25f281d46c10db04.jpg`)
break

case 'rankativos':
case 'rankativo':  
if(!isGroup) return reply(enviar.msg.grupo)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage[AB].participants.map(i => i)
rank = grupo.sort((a, b) => ((a.mensagens + a.comandos) < (b.mensagens + b.comandos)) ? 0 : -1)
caixa = []
for(i = 0; i < (countMessage[AB].participants.length < 5 ? countMessage[AB].participants.length : 5); i++) {
caixa.push({nmr: i+1, id: rank[i].id, mensagens: rank[i].mensagens, comandos: rank[i].comandos})

}
if(caixa.length <= 0) return reply(`Não há membros suficientes no grupo para efetuar o rank...`)
txt = `❤️‍🔥 *${countMessage[AB].participants.length < 5 ? countMessage[AB].participants.length : 5} mais ativos do grupo ↴*
⏤͟͟͞͞ ꦿ${groupName}

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
\t⇒𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜: ${largeNumber(c.mensagens)}
\t\t⇒𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜: ${largeNumber(c.comandos)}`).join(`\n\n`)}`
mention(txt)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
grupo = countMessage[AB].participants.map(i => i)
rank = grupo.sort((a, b) => ((a.mensagens + a.comandos) < (b.mensagens + b.comandos)) ? -1 : 0)
caixa = []
for(i = 0; i < (countMessage[AB].participants.length < 5 ? countMessage[AB].participants.length : 5); i++) {
caixa.push({nmr: i+1, id: rank[i].id, mensagens: rank[i].mensagens, comandos: rank[i].comandos})

}
if(caixa.length <= 0) return reply(`Não há ghosts neste grupo...`)
txt = `👻 *Top ${countMessage[AB].participants.length < 5 ? countMessage[AB].participants.length : 5} mais ghosts deste grupo ↴*

${caixa.map(c => `»${c.nmr}« @${c.id.split('@')[0]}
*Mensagens:* ${c.mensagens}
*Comandos:* ${c.comandos}`).join(`\n\n`)}`
mention(txt)
break

case 'check':
if(menc_os2) {
mark = menc_os2
} else {
mark = sender
}
wppuser(mark)
try {
checkimg = await blackmd.profilePictureUrl(`${mark.split('@')[0]}@c.us`, 'image')
} catch {
checkimg = "https://telegra.ph/file/5446d1f9da3df07e98699.jpg"
}
check = `
⏤͟͟͞͞ ░⃟⃛ ➮ @${mark.split('@')[0]}
╭═════════════════╮
╟ ▧⃯⃟🔱 *ADM『 ${groupAdmins.includes(mark) ? `✅` : `❌`} 』*
╟ ▧⃯⃟⚜️ *CRIADOR (A)『 ${groupMetadata.owner.includes(mark) ? `✅` : `❌`} 』*
╟ ▧⃯⃟💎 *VIP『 ${isJsonIncludes(vip, mark) ? `✅` : isJsonIncludes(vipgp, from) ? `✅` : `❌`} 』*
╟ ▧⃯⃟👑 *DONO『 ${numerodono.includes(mark) ? `✅` : `❌`} 』*
╰═════════════════╯`
blackmd.sendMessage(from, {image: {url: checkimg}, caption: check, mentions: [mark]})
break

case 'checkativo':
setTimeout(() => {reagir(from, "📖")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(menc_os2.includes(sender)) return reply(`Para puxar os próprios dados, use ${prefix}checkme`)
AC = countMessage[AB].participants.map(b => b.id).indexOf(menc_os2)
usu = AC >= 0 ? countMessage[AB].participants[AC] : {}
mention(`
▄︻̷̿┻̿═━一 🅲🅷🅴🅲🅺
⇒@${menc_os2.split('@')[0]}
________________________________________

⏤͟͟͞͞ ꦿ𝙼𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 *↴*
⇒( ${AC >= 0 ? usu.mensagens : 0} )

⏤͟͟͞͞ ꦿ𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜 *↴*
⇒( ${AC >= 0 ? usu.comandos : 0} )
________________________________________

ೈ፝͜͡📖 ${NomeDoBot}
`)
break

case 'checkme':
setTimeout(() => {reagir(from, "📖")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
AB = countMessage.map(a => a.groupId).indexOf(from)
if(AB < 0) return reply(`Não há dados de mensagens deste grupo salvos na database do bot...`)
AC = countMessage[AB].participants.map(b => b.id).indexOf(sender)
usu = AC >= 0 ? countMessage[AB].participants[AC] : {}
txt =
`
ㅤㅤ»⟩ S̷U̷A̷ A̷T̷I̷V̷I̷D̷A̷D̷E̷ ⟨«
╭════════════════╯
 | 🧾⃤ grupσ: ${groupName}
 | ✏️⃤ níck: ${pushname}
 | 📖⃤ mєnsαgєns: ${AC >= 0 ? usu.mensagens : 0}
 | 💻⃤ cσmαndσs: ${AC >= 0 ? usu.comandos : 0}
╰════════════════╮
`
try {img = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch { img = semfoto }
sendUrlText(from, txt, NomeDoBot, ``, img, `https://wa.me/`+sender.split("@")[0], seloctt)
break

case 'rankcorno':
if(!isGroup) return reply(`[❗] Este comando só pode ser usado em grupo...`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7%`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ABC = `
*Esses são os cornos do grupo* ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n✮${setting.NomeDoBot}✮`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ABC, membr, true)
break

case 'rankgostoso': case 'rankgostosos':
if(!isGroup) return reply(`[❗] Este comando só pode ser utilizado em grupo`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const ogstz1 = groupMembers
const ogstz2 = groupMembers
const ogstz3 = groupMembers
const ogstz4 = groupMembers
const ogstz5 = groupMembers
const ogstzs1 = ogstz1[Math.floor(Math.random() * ogstz1.length)]
const ogstzs2 = ogstz2[Math.floor(Math.random() * ogstz2.length)]
const ogstzs3 = ogstz3[Math.floor(Math.random() * ogstz3.length)]
const ogstzs4 = ogstz4[Math.floor(Math.random() * ogstz4.length)]
const ogstzs5 = ogstz5[Math.floor(Math.random() * ogstz5.length)]
const ogstzmsg = [`trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`, ` mandando nuds no pv do dono ☺️ by: ${NickDono}`]
const ogstzmsg_ = ogstzmsg[Math.floor(Math.random() * (ogstzmsg.length))]
ABC = `
Parados !✋🏽😶🤚🏽

1= ✋🏽😶@${ogstzs1.id.split('@')[0]}😶🤚🏽


2= ✋🏽😶@${ogstzs2.id.split('@')[0]}😶🤚🏽


3= ✋🏽😶@${ogstzs3.id.split('@')[0]}😶🤚🏽


4= ✋🏽😶@${ogstzs4.id.split('@')[0]}😶🤚🏽


5= ✋🏽😶@${ogstzs5.id.split('@')[0]}😶🤚🏽


Multa por serem gostosos dms 😳 pague pena ${ogstzmsg_}`
membr.push(ogstzs1.id)
membr.push(ogstzs2.id)
membr.push(ogstzs3.id)
membr.push(ogstzs4.id)
membr.push(ogstzs5.id)
mentions(ABC, membr, true)
break

case 'rankgostosa': case 'rankgostosas':
if(!isGroup) return reply(`[❗] Este comando só pode ser utilizado em grupo`)
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modozoeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modozoeira 1`)
membr = []
const agstz1 = groupMembers
const agstz2 = groupMembers
const agstz3 = groupMembers
const agstz4 = groupMembers
const agstz5 = groupMembers
const agstzs1 = agstz1[Math.floor(Math.random() * agstz1.length)]
const agstzs2 = agstz2[Math.floor(Math.random() * agstz2.length)]
const agstzs3 = agstz3[Math.floor(Math.random() * agstz3.length)]
const agstzs4 = agstz4[Math.floor(Math.random() * agstz4.length)]
const agstzs5 = agstz5[Math.floor(Math.random() * agstz5.length)]
const agstzmsg = [`trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`, ` mandando nuds no pv do dono ☺️ by: ${NickDono}`]
const agstzmsg_ = agstzmsg[Math.floor(Math.random() * (agstzmsg.length))]
ABC = `
Paradas !✋🏽😶🤚🏽

1= ✋🏽😶@${agstzs1.id.split('@')[0]}😶🤚🏽


2= ✋🏽😶@${agstzs2.id.split('@')[0]}😶🤚🏽


3= ✋🏽😶@${agstzs3.id.split('@')[0]}😶🤚🏽


4= ✋🏽😶@${agstzs4.id.split('@')[0]}😶🤚🏽


5= ✋🏽😶@${agstzs5.id.split('@')[0]}😶🤚🏽


Multa por serem gostosas dms 😳 pague pena ${agstzmsg_}`
membr.push(agstzs1.id)
membr.push(agstzs2.id)
membr.push(agstzs3.id)
membr.push(agstzs4.id)
membr.push(agstzs5.id)
mentions(ABC, membr, true)
break

case 'rankgay': case 'rankgays':
setTimeout(() => {reagir(from, "🌈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS GAYS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🌈⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankhetero':
  setTimeout(() => {reagir(from, "🏁")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS HÉTEROS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🏁⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankgado': case 'rankgados':
setTimeout(() => {reagir(from, "🐂")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS GADOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🐂⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'ranknazista': case 'ranknazistas':
  setTimeout(() => {reagir(from, "💂🏼‍♂️")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS NAZISTAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `💂🏼‍♂️⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankotaku': case 'rankotakus':
  setTimeout(() => {reagir(from, "🧽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS OTAKUS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🧽⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break;

case 'rankpau':
  setTimeout(() => {reagir(from, "🍆")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*Esses são os cara com maior e menor pau do grupo* ${groupName}\n\n`
TMPAU = ["Minúsculo", `Pequenininho chega ser até fofo 🥺`, `Pequeno`, `Mediano`, `Grandinho 🥵`, `Grande até`, `Gigantesco`, `Enorme`, `QUEIMADO !! Tão grande que bateu no sol e queimou`, `Ponte Rio Niterói`, "Nem existe"]
for (var i = 0; i < 5; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n${TMPAU[Math.floor(Math.random() * TMPAU.length)]}\n`
}
ABC += `\nBy 🔥 ${NomeDoBot} 🔥`
mention(ABC);
break;

case 'rankbct':
case 'rankbuceta':
case 'rankxrc':
case 'rankxereca':
setTimeout(() => {reagir(from, "😏")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSAS SÃO AS MAIS BUCETUDAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `😏⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpocoto':
setTimeout(() => {reagir(from, "🐴")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POCOTO DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🐴⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranklindo':
case 'ranklinda':
case 'rankbonito':
case 'rankbonita':
setTimeout(() => {reagir(from, react2)}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
lindo = ["Base da Virgínia", "Sem comentários...", "Feio que dá dó", "Feio mas engraçado", "Feio (a)", "Nada que uma maquiagem não resolva", "Na média", "Nem um, nem outro", "Bonito (a)", "Nada mal", "Lindo (a)", "Extremamente lindo (a)", "Perfeito (a)"]
ABC = `*GRAU DE LINDEZA DO GRUPO⟩*
⇒${groupName}\n`
for (var i = 0; i < 5; i++) {
ABC += `✮ @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split("@")[0]}\nㅤ⇒${lindo[Math.floor(Math.random()*lindo.length)]}\n\n`
}
mention(ABC);
break

case 'rankputa':
setTimeout(() => {reagir(from, "😈")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSAS SÃO AS MAIS PUTAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `😈⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankcalvo':
  setTimeout(() => {reagir(from, "👨🏼‍🦲")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS CALVOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👨🏼‍🦲⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankrico':
  setTimeout(() => {reagir(from, "🤑")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS RICOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤑⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpobre':
  setTimeout(() => {reagir(from, "🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POBRES DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤣⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankpobre':
  setTimeout(() => {reagir(from, "🤣")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS POBRES DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤣⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankfeio':
  setTimeout(() => {reagir(from, "🤡")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS FEIOS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤡⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break
case 'rankvesgo':
  setTimeout(() => {reagir(from, "👀")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS VESGO DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👀⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranknoia':
  setTimeout(() => {reagir(from, "👽")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS NOIA DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `👽⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'ranksigma':
  setTimeout(() => {reagir(from, "🗿")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS SIGMA DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🗿🍷⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'rankbeta':
  setTimeout(() => {reagir(from, "🤓")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobz)
ABC = `*ESSES SÃO OS MAIS BETAS DO GRUPO*\n`
for (var i = 0; i < 5; i++) {
ABC += `🤓⧽ @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mention(ABC);
break

case 'piadas': case 'piada':
setTimeout(() => {reagir(from, "😂")}, 300)
reply(`*_Sorteando_*

> ${pia[Math.floor(Math.random() * (pia.length))]}
________________________________________
*_By Black 2K24_*`)
break

case 'cantada':
case 'cantadas':
setTimeout(() => {reagir(from, "😏")}, 300)
const cantm1 = ['Você não é mexicana mas mexicomigo', 'Eu não sou gato, mas me miamarro em vc', 'Pra virar bombom, só falta a valsa... Pq vc já é um sonho', 'Eu não sou astronauta mas eu posso te fazer chegar aos céus', 'Se beleza fosse crime, vc seria inocente', 'Se beleza fosse merda, vc estaria toda cagada', 'Se o universo soubesse o quanto eu te amo... Ele teria vergonha de ser tão pequeno', 'A lua deve estar cansada de me ouvir falar de vc', 'Cansei de correr atrás de vc... Agora eu vou de moto', 'Me chame de thur, pq o Ar eu perdi quando te vi', 'Me passa seu insta aí... Minha mãe disse pra eu seguir meu sonho', 'Vc é um eixo terrestre ? Pq meu mundo gira em torno de vc', 'Tem algo de errado no meu celular... Não consigo encontrar seu número nele', 'Rosas são vermelhas, violetas são azuis... Eu não sei rimar, mas posso namorar com vc ?', 'Tá calor né ? Mas não é de hj que eu me derreto por vc...', 'Estou sentindo uma dor no peito... Espero que seja amor, porque se for infarto, eu nunca mais te verei', 'Se te amar um dia me matar, saiba que eu morri sorrindo', 'Eu tenho uma memória terrível... Felizmente, vc é inesquecível', 'Seu nome é Google ? Pq em vc, tem tudo o que eu preciso...']
const cantm2 = cantm1[Math.floor(Math.random() * (cantm1.length))]
cantmtxt = `*_Chega na mina e fala assim..._*

> _"${cantm2}"_ 😏
*_By_*`
blackmd.sendMessage(from, {text: cantmtxt, mentions: [menc_os2]})
blackmd.sendMessage(from, {audio: {url:'./database/audios/shipo.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'cantada+18':
case 'cantadas+18':
if(!isNsfw) return reply(`*Este comando só pode ser executado com o modo+18 ativo...*
*Para ativa-lo, digite* ${prefix}modo+18`)
setTimeout(() => {reagir(from, "🌚")}, 300)
const cantf1 = ['Não quero problema para cima de mim, só se o problema for você', 'Minha roupa ficaria linda jogada no chão do seu quarto', 'Me chama de videogame e me joga no sofá', 'Sabe que horas são? hora da gente se pegar', 'Eu não sei fazer seu mundo girar, mas sei fazer sua cama balançar', 'Estou pegando no sono, mas queria estar pegando você', 'Minha boca na sua, rola? Se quiser, a gente tira a vírgula...', 'Gosto de café assim como de sexo... Quente, forte e todos os dias', 'Oi, a minha cama mandou perguntar se você quer dormir aqui', 'Queria ser o seu sabonete, para deslizar no seu corpo', 'Vc é fazendeira ? Pq vc fez o meu pepino crescer...', 'Posso te chamar de picolé de uva ? Pra vc deixar minha boca roxa...', 'Me chama de Buzz Lightyear e deixa eu te mostrar o infinito e além...', 'Deixa eu te ensinar o que eu aprendi com Danone... Enquanto você me ensina o que aprendeu com pirulito']
const cantf2 = cantf1[Math.floor(Math.random() * (cantf1.length))]
cantftxt = `*Cantadas +18 pra vc...*

> _"${cantf2}"_ 🥵
*_By_* 🔥 ${NomeDoBot} 🔥`
reply(cantftxt)
break

case 'akinator'://by jherffeson & lótus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) === Number(moment.tz('America/Sao_Paulo').format('DD'))) return reply("Volte mais tarde...")
if(!JSON.stringify(akinator).includes(from) && akinator.length > 0 && Number(akinator[0].dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
jogo.now = true
akinator.splice(0, 1)
fs.writeFileSync("./armor/jogo/akinator.json", JSON.stringify(akinator, null, 2))
}
if(!JSON.stringify(akinator).includes(from)) {
reply(`Atenção ${pushname}, irei iniciar o jogo do akinator... Responda com "Sim", "Não", "Não sei", "Provavelmente Sim" ou "Provavelmente não" (sem as aspas)`)
dateAKI = moment.tz('America/Sao_Paulo').format('DD')
var region = 'pt'
var childMode = false;
var proxy = undefined;
let startAki = async () => {
global.aki = new Aki({ region, childMode, proxy });
await aki.start()
}
await startAki()
jogo.now = false
jogo.jogador = sender
akinator.push({id: from, jogador: sender, finish: 0, dia: dateAKI})
fs.writeFileSync("./armor/jogo/akinator.json", JSON.stringify(akinator, null, 2))
reply(`*⏤͟͟͞͞ ꦿAKINATOR* 🧙🏼‍♂️
🔮⃤ ${aki.question}`)
} else return mention(`@${akinator[akinator.map(i => i.id).indexOf(from)].jogador.split('@')[0]} já iniciou a partida, espere ele/a terminar...`)
break

case 'resetaki'://by jherffeson & lótus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(akinator).includes(from) && !isOwner) return reply("Nenhuma sessão em andamento... 🧙🏼‍♂️")
if(akinator.length <= 0) return reply("Nenhuma sessão em andamento... 🧙🏼‍♂️")
jherffeson = isOwner ? 0 : akinator.map(i => i.id).indexOf(from)
if(akinator[jherffeson].jogador == sender || isGroupAdmins || isOwner) {
jogo.now = true
akinator.splice(jherffeson, 1)
fs.writeFileSync("./armor/jogo/akinator.json", JSON.stringify(akinator, null, 2))
reply("🧙🏼‍♂️ Akinator resetado com sucesso ✨")
} else {
reply("[ ❗ ] Somente admins do grupo ou a pessoa que iniciou o jogo podem finalizar o akinator ❌")
}
break

case 'infowa':
datewa = sendHours('MM');
datetime = `${(Number(datewa) - 3) + 12}`
infowa2 = `${tempo} ${pushname} ${tempo_emoji}

Aproximadamente ${datetime} meses atrás, Mark Zuckerberg, dono do whatsapp, atualizou o mesmo, quebrando assim, a nossa conexão com a Baileys.

A Baileys é uma web criptopasta em que todos os bot de whatsapp puxam, de forma hiperbólica, inúmeras informações para seu funcionamento... Desde então, as listas e botões pararam de funcionar. Com um esforço incansável, nós, criadores e desenvolvedores, conseguimos uma baileys, em que os botões estavam funcionando perfeitamente em grupos, e as listas no privado. Bem, parece que até isso foi retirado de nós...

Novamente houve uma atualização na conexão do whatsapp, e dessa vez, o botões foram realmente de base...

O bot está funcionando em perfeito estado, em relação a outros comandos... Apenas os botões e listas foram desativados, devido não estarem funcionando.

Caso haja ainda algum bug que necessite de conserto, use o comando ${prefix}bug para reportar o mesmo... Se houver solução, irei imediatamente arrumar. Caso contrário, só podemos esperar que seja descoberto ou criada uma nova conexão para os bot, pq a Baileys, não funciona mais.

Conto com a sua compreensão ${pushname}... Repasse para a maioria de usuários de bot de whatsapp que conseguir, pois isso é um problema global. Não é problema no Black, nem no bot que você usa, nem na hospedagem... É problema no próprio whatsapp, e como todos os bot utilizam a mesma conexão *(por ser a única que existe)*, todos estão sofrendo com esse problema.

Nosso grupo tbm está disponível no comando ${prefix}blackgp. Lá, você tem um contato maior com vários usuários, obtendo maiores informações assim tbm.

✅ *Ass:* ${NickDono}
ㅤ✍🏽 *BY:* ${NomeDoBot}`
reply(infowa2)
break

case 'dado':
if(!isModobn) {
setTimeout(() => {reagir(from, "❌")}, 300)
return reply(enviar.msg.modobz)
} else {
setTimeout(() => {reagir(from, "🎲")}, 300)
reply(`▧⃯⃟𝚂𝚘𝚛𝚝𝚎𝚊𝚗𝚍𝚘 𝙳𝚊𝚍𝚘ฺ͘.•🛸 ݈݇─`)
dadoale = Math.floor(Math.random() * 5) + 1
enviarfigu(`./database/figu/${dadoale}.webp`)
}
break

case 'caraoucoroa':
setTimeout(() => {reagir(from, "🪙")}, 300)
if(!isModobn) {
setTimeout(() => {reagir(from, "❌")}, 300)
return reply(enviar.msg.modobz)
} else {
enviarfigu(`./database/figu/caraoucoroa.webp`)
setTimeout(async() => {
cr1 = [`cara 😎`, `coroa 👑`]
txtcr = `ೈ፝͜͡𝙈𝙊𝙀𝘿𝘼 𝙎𝙊𝙍𝙏𝙀𝘼𝘿𝘼:
> ${cr1[Math.floor(Math.random()*cr1.length)]}`
reply(txtcr)
}, 1000)
}
break

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
if(menc_os2.includes(botNumber)) return reply("Estou aqui para ser mediador e não jogador...")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
blackmd.sendMessage(from, {text: chatMove}, {quoted: seloctt,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'ppt':
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "*Vitória do jogador* 🙇🏻‍♂️"
}
if(vit == "derrota") {
var tes = "*A vitória é do BOT* 🤖"
}
if(vit == "empate") {
var tes = "*O jogo terminou em empate* 🤜🏽🤛🏽"
}
reply(`${NomeDoBot} *jogou:*
> ${pptb}

${pushname} *jogou:*
> ${args}`)
setTimeout(async() => {
reply(tes)
}, 2000)
break

case 'cassino':
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "VOCÊ GANHOU !!!"
} else {
var Vitória = "ㅤVocê perdeu..."
}

const cassino = `
ㅤㅤㅤ┏━━━━❪🎰❫━━━━
ㅤㅤㅤ┣► ${somtoy2}◄┛
ㅤㅤㅤ┗━━━━❪💰❫━━━━

ㅤㅤㅤ  *${Vitória}*`
  
reply(cassino)
break

case 'eununca':
reagir(from, "❤️‍🔥")
if(!isModobn) return reply(enviar.msg.modobz)
const euja1 = ['Eu nunk fiquei com dois/duas numa festa', 'Eu nunk meti chifre no namorado (a)', 'Eu nunk fui corno', 'Eu nunk roubei nada do supermercado', 'Eu nunk beijei alguém do mesmo sexo que eu', 'Eu nunk parei alguém na rua achando que era um conhecido', 'Eu nunk joguei fora a comida e fiz que comi', 'Eu nunk fuji de casa', 'Eu nunk fiz coisas +18 em casa', 'Eu nunk fumei ou usei drogas']
euja2 = euja1[Math.floor(Math.random() * (euja1.length))]
eununcatxt = `*_Sorteando..._*

> _"${euja2}"_`
sendAsPoll(from, eununcatxt, ["Eu já 🌚", "Eu nunca 🌝"])
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot': case 'boot': case 'barba':
setTimeout(() => {reagir(from, "😡")}, 300)
const soundft = fs.readFileSync('./database/audios/senhor.mp3')
blackmd.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobot':
setTimeout(() => {reagir(from, "👻")}, 300)
const cmdoo = fs.readFileSync('./database/audios/infobot.m4a')
blackmd.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversemp4':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
blackmd.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
blackmd.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
blackmd.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: seloctt })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
case 'viraraudio':
setTimeout(() => {reagir(from, "✅")}, 300)
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(`❪∘̥⃟⸽⃟𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚗𝚍𝚘 𝙴𝚖 Á𝚞𝚍𝚒𝚘∘̥⃟৴▸`)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: seloctt})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'shazam':{
if(!isVip) return reply(enviar.msg.vip)
if(!isQuotedAudio) return reply('⚠️ Envie o áudio para eu detectar o nome da música!')
let music = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let mime = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.mimetype
let m = mime.split('/')[1]
fs.writeFileSync('./armor/assets/' + sender + '.' + m, music)
let base64 = fs.readFileSync('./armor/assets/' + sender + '.' + m, { encoding: "base64" })
try {
let hasil = await arcloud(base64)
ABC = await fetchJson(barbasite+`/api/ytsrc?q=${hasil[0].titulo}&apikey=`+API_KEY_BARBA)
} catch (e) {
return reply('Desculpe, não consegui identificar a música. Por favor, tente novamente!️')
}
reagir(from, `⚡`)
data = ABC.resultado[0]
txt = `🎙️⃤ 𝚃í𝚝𝚞𝚕𝚘: ${data.title}
⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${data.timestamp || "indefinido"}
📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${data.ago || "indefinido"}
🗞️⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${data.description || "indefinida"}`
sendUrlText(from, txt, `⚡ SHAZAM - ${data.title}`, `${largeNumber(data.views) || "indefinidas"} visualizações`, data.thumbnail, data.url, seloblk)
sendAudio(from, barbasite+`/api/dl/ytaudio?url=${data.url}&apikey=`+API_KEY_BARBA, 'audio/mpeg')
DLT_FL('./armor/assets/' + sender + '.' + m)
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
blackmd.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('*[ ❗ ] Marque a figurinha animada!*')
if(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage && info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated) {
let media = await downloadAndSaveMediaMessage(info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
try {
reply('[❗] convertendo em gif, aguarde ♨')
a = await webp_mp4(media)
mp4 = await getBuffer(a.result)
blackmd.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
} catch(e) {
console.log(e)
reply('Erro ao converter para gif')
}
await fs.unlinkSync(media)
} else {
reply('*[ ❗ ] Marque a figurinha animada!*')
}
break

case 'cartonizar': case 'cartoon':
try { 
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
blackmd.sendMessage(from, {image: {url:`http://br3.bronxyshost.com.br:4017/imagem/cartoon?img=${link}&apitoken=Aqua`}}, {quoted: info}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem com rosto visível!') 
}
} catch (e) {
reply('ERROR!!')
}
break

case 'toanime': case 'tohd': case 'tozombie':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
ABC = await fetchJson(`${barbasite}/api/ia/${command}?link=${link}&apikey=`+API_KEY_BARBA)
sendImage(from, ABC.resultado.image_data).catch(e => {
return reply("Erro ao converter a imagem")
})
} else {
reply('Marque uma imagem para eu atribuir o efeito')
}
break

case 'affect': case 'comunismo': case 'mms': case 'bobross': case 'bolsonaro': case 'blur': case 'beautiful': case 'circle': case 'del': case 'invert': case 'facepalm': case 'rip': case 'wasted': case 'wanted': case 'trash': case 'sepia': case 'pixelate': case 'lgbt':
if(!isVip && !isGroup) return reply(enviar.msg.pvnotvip)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
try {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
link = await upload(owgi)
reply(`[❗] Desenhando pixel a pixel, isso pode demorar 💢`)
sendImage(from, `${barbasite}/api/canvas/${command}?link=${link}&apikey=`+API_KEY_BARBA)
} catch {
return reply("Erro ao converter a imagem")
}
} else {
reply('Marque uma imagem para eu atribuir o efeito')
}
break

case 'legenda':
try {
var [txt1, txt2] = q.split("/")
if(!q.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Black/Bot`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
blackmd.sendMessage(from, {image: {url: `${barbasite}/api/legenda?url=${res}&texto1=${txt1}&texto2=${txt2}&apikey=`+API_KEY_BARBA}}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
} else {
reply('Marque uma imagem...!')
}
} catch (e) {
return reply('ERROR!!')
}
break



case 'grauu': case 'm':
if(!JSON.stringify(pvlojinha).includes(sender)) {
  pvlojinha.push({id: sender})
  fs.writeFileSync("./teste.json", JSON.stringify(pvlojinha, null, 2))
}
setTimeout(() => {reagir(from, react2)}, 300)
botaoblk = {
  type: `list`,
  title: `〘  lojinha fo grau 〙`,
  rowId: [
    {
      title: "『 lista abaixo  』",
      options: [
        {title: "ver precos  👑", command: `${prefix}loja`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}
      ]
    }
    
  ]
}
txt = `aperta aqui embaixo 👇🏻`
sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot}, blackmd, sender, [botaoblk], info)
break

case 'lojinha':
if(!isOwner) return reply(enviar.msg.donosmt)
if(!isBylojinha) {
obrigadoEXT.bylojinha = true
setObg(obrigadoEXT)
reply("Lojinha *ON** ✅")
} else if(isBylojinha) {
obrigadoEXT.bylojinha = false
setObg(obrigadoEXT)
reply("Lojinha *OFF* 🚫 ")
}
break




case 'freegrupo':
reply(`Este comando lhe dará direito a 24h grátis em seu grupo... Basta colocar o link do grupo após o comando *${prefix}buycort*. Ex: "${prefix}buycort link" (lembrando que este comando é válido apenas 1 vez)`)
break

case 'entrarnogp':

reply(`Caso se veja interessado em alugar o bot para o seu grupo, use o comando *${prefix}buygp* com o link do grupo logo depois...Ex: "${prefix}buygp link" , O bot entrará no grupo logo em seguida.`)
break
case 'tranfgrupo':
reply(`Caso queira trocar de grupo basta da o comando *${prefix}transferirgp* com o link do grupo logo depois e na frente, nao se esqueca de colocar o barra *|* e na frente o numero do grupo caso tenha apenas 1 grupo; coloque 1 na frente EX ..Ex: *${prefix}transferirgp _link_|1*  `)
break

case 'reembolso':
reply(`Use esse comando para ressarcir o valor gasto na compra da Key... Ex: *${prefix}reembolsar _key_* (key comprada na loja)`)
break



case 'loja':
reagir(from, "🛍️")


if(!JSON.stringify(moedas).includes("jherffeson")) {
  moedas.push({id: "jherffeson", chaves: []})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}
if(!JSON.stringify(moedas).includes(sender)) {
  multi2 = Number(moment.tz('America/Sao_Paulo').format('HHmmss')) + Number(moment.tz('America/Sao_Paulo').format('DDMMYY'))
  multi2 *= Number(sender.slice(4, 10))
  moedas.push({id: sender, saldo: 0, UID: multi2, rg: sendHours('DD-MM-YYYY'), cortesia: 1, mm: sendHours('MM')})
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}


AB = moedas.map(i => i.id).indexOf(sender)
if(Number(moedas[AB].mm) !== Number(sendHours('MM'))) {
  moedas[AB].cortesia += 1
  moedas[AB].mm = sendHours('MM')
  fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
}



try {
jherffeson = await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image');
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${jherffeson}`);
ppimg = shortpc.data
} catch(e) {
ppimg = semfoto
}

botaoblk = {
  type: `list`,
  title: `〘 𝗥𝗘𝗖𝗔𝗥𝗥𝗘𝗚𝗔𝗥 〙`,
  rowId: [
    {
    title: "『 adicionar bot 』",
    options: [
      {title: "👥 Adicionar bot no Grupo ", command: `${prefix}entrarnogp`, body: `🚨 "${prefix}buygp link"  🚨 `}
    ]

    },
    {
      title: "『 🔑 ̶c̶o̶m̶p̶r̶a̶r̶ ̶a̶c̶e̶s̶s̶o̶』",
      options: [
        {title: "💸 R$5,00  + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 1`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$10,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 2`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$15,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 3`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}, 
        {title: "💸 R$20,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 4`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$25,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 5`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$30,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 6`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$35,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 7`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$40,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 8`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$45,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 9`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "💸 R$50,00 + 𝟏𝟎% 𝐁𝐎𝐍𝐔𝐒 🎁", command: `${prefix}recarregar 10`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`}
                                                                    
      ]
    }
    
  ]
}

botaobllk = {
  type: `list`,
  title: `〘 𝗔𝗟𝗨𝗚𝗔𝗥 〙`,
  rowId: [

    {
      title: "『 Planos 🎫  』",
      options: [
        {title: "🛎️ - Básico - R$ 5.00 (15 dias)", command: `${prefix}buykeygp 1`, body: `⚠️ E NESSESÀRIO QUE VOCÊ TENHA SALDO ⚠️`},
        {title: "🎟️ - Silver - R$ 10.00 (1 mês)", command: `${prefix}buykeygp 2`, body: `🚨 E NESSESÀRIO QUE VOCÊ TENHA SALDO  🚨 `}, 
        {title: "💎 - Gold - R$ 18.00 (2 meses)", command: `${prefix}buykeygp 3`, body: `⚠️ E NESSESÀRIO QUE VOCÊ TENHA SALDO ⚠️`},
        {title: "🏆 - Platinum - R$ 27.00 (3 meses)", command: `${prefix}buykeygp 4`, body: `📢 E NESSESÀRIO QUE VOCÊ TENHA SALDO 📢`},
        {title: "🚀 - Diamond - R$ 35.00 (4 meses)", command: `${prefix}buykeygp 5`, body: `🚨 E NESSESÀRIO QUE VOCÊ TENHA SALDO  🚨`},                                                             
      ]
    }
  ]
}

free24h = {
  type: `list`,
  title: `〘 𝗧𝗘𝗦𝗧𝗘 𝗙𝗥𝗘𝗘 〙`,
  rowId: [
    {
      title: "『 Grátis 』",
      options: [
        {title: "🆓 - Plano Free-24h 🆓", command: `${prefix}freegrupo`, body: `🚨 VALIDO SOMENTE 1 VEZ 🚨 `}
      ]
    }
    
  ]
}
fconfigg = {
  type: `list`,
  title: `〘 ⚙️𝗖𝗢𝗡𝗙𝗜𝗚⚙️ 〙`,
  rowId: [
    {
      title: "『  ̶t̶r̶a̶n̶s̶f̶e̶r̶e̶n̶c̶i̶a̶ ̶d̶e̶ ̶g̶p̶ 』",
      options: [
        {title: "↖️ Tranferir Grupo ↖️", command: `${prefix}tranfgrupo`, body: `🚨 !transferirgp link|1 🚨 `}
      ]
    },
    {
      title: "『  ̶r̶e̶e̶m̶b̶o̶l̶s̶o̶  』",
      options: [
        {title: "💱 Reembolso 💱", command: `${prefix}reembolso`, body: `📢 reebolso de key pra saldo 📢 `}
      ]
    },
    {
      title: "『 ̶d̶a̶d̶o̶s̶ 』",
      options: [
        {title: "🔑 Minhas key Comprada 🔑", command: `${prefix}minhaskey`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
        {title: "🗣️ Perfil na Loja 🗣️", command: `${prefix}me`, body: `⏤͟͟͞͞ ꦿ${NomeDoBot}`},
      ]
    }
    
  ]
}


i = moedas[AB]

txt = `  *🏪 LOJINHA 🏪*
*💸 SALDO〘R$${Number(i.saldo).toFixed(2)}〙*
💰 Sem moedas? Recarregue agora e ganhe *_10% de bônus_* em qualquer recarga! Aproveite! 🎉👇`
sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot}, blackmd, sender, [botaoblk, botaobllk, free24h, fconfigg], info)
break




//=======(FIM-EFEITOS-MARCAR)=========\\

default:

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return blackmd.sendMessage(from, {text: `Uma dessas opções estão ativada, mas por você ser ADM, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)`}, {quoted: seloctt})
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
blackmd.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
blackmd.sendMessage(from, {text: 'reporte aos adm o ocorrido ', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !isOwner && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply('Muitas Caracteres enviadas, isto é contra as normas do grupo, por precaução, eu irei remover.')
console.log(colors.red('Deram Spam de caracteres..'))
}, 100)
setTimeout(async () => {
setTimeout(() => {
blackmd.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1500)
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
blackmd.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
blackmd.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mp4", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
blackmd.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
blackmd.sendMessage(from, {audio: buffer, ptt:true}, {quoted: seloctt})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${realtime()}`, "que horas sao?")

/*EnvTXT_SMP(prefix, "prefixo")*/

if(budy2.includes("matheus") && !isOwner){
matheustxt = [`Tá falando do meu programador ? 🫵🏽🤨`, `O que você quer com meu dono ? 🔪`, `O que você quer com meu programador ? 😡`, `Vou falar pro meu dono que você anda falando dele por aí 😐👍🏽`]
sendButton(from, {text: matheustxt[Math.floor(Math.random()*matheustxt.length)], footer: NomeDoBot}, blackmd, sender, [{type: `cmd`, text: `👑 𝙈𝙀𝙐 𝘿𝙊𝙉𝙊 👑`, command: `${prefix}dono`}], seloctt)
await sleep(500)
blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `${pushname} tava falando de tu ${isGroup ? `no grupo ${groupName} 😐👍🏽` : `no meu PV...`}`}, {quoted: info})
}

if(budy2 === `abrir grupo` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == true) {
setTimeout(() => {reagir(from, "✅")}, 300)
blackmd.groupSettingUpdate(from, 'not_announcement')
reply(`✅ *${tempo} à todos... O grupo foi aberto novamente*`)
}

if(budy2 === `fechar grupo` && isGroup && isGroupAdmins && isBotGroupAdmins && groupMetadata.announce == false) {
setTimeout(() => {reagir(from, "🚫")}, 300)
blackmd.groupSettingUpdate(from, 'announcement')
reply(`🚫 *Grupo fechado... As suas ordens vossa senhoria*`)
}

if(budy2 === 'prefixo' && !isBanchat) {
reagir(from, "🥰")
reply(`*Prefixo de comandos usado〘 ${prefix} 〙 ❤️‍🔥*`)
}

//if(body != undefined && isPrivateChat && !sender.includes(`559191411276`)) replyJson(info)

//início das funções do namoro/casamento

if(isJsonIncludes(waitFriendZone, sender)) {
  mini = rmLetras(budy2)
  if(isGroup && isGroupOfPedidoFriendZone(sender, from)) {
    if(isWaitUsuFZ_namoro(sender)) {
      if(mini == "sim" || mini == "s") {
        aceitarPedidoDeNamoro(sender)
        return mention(`💞 Felicitações @${getDBFZuser(sender).usu2}, parece que o @${sender.split("@")[0]} aceitou seu pedido de namoro... Seus dados podem ser acessados no comando ${prefix}dupla 🥰`)
      }
      if(mini == "nao" || mini == "n") {
        A1 = waitFriendZone.map(i => i.id).indexOf(sender)
        mention(`😔 Sinto muito @${waitFriendZone[A1].pedido}, parece que o usu ${pushname} recusou seu pedido de namoro...`)
        return recusarPedidoDeNamoro(sender)
      }
    }
    if(isWaitUsuFZ_casamento(sender)) {
      if(mini == "sim" || mini == "s") {
        aceitarPedidoDeCasamento(sender)
        return mention(`💍 Felicitações @${getDBFZuser(sender).usu2}, parece que o @${sender.split("@")[0]} aceitou seu pedido de casamento... Seus dados foram atualizados no comando ${prefix}dupla 👻`)
      }
      if(mini == "nao" || mini == "n") {
        recusarPedidoDeCasamento(sender)
        mention(`😪 Sinto muito @${getDBFZuser(sender).usu2}, parece que o usu @${sender.split("@")[0]} recusou seu pedido de casamento... Felizmente, vocês ainda são um casal de namorados 🥰`)
      }
    }
  }
}

//fim das funções do namoro/casamento


if(budy2.toLowerCase().startsWith("jeff") && !isBanchat && !isBotoff) {
  if(args.length <= 0) return reply("Oi 👀")
  if(!isGroup && !isVip) return
  try {
    reagir(from, "🙇🏻‍♂️")
    ABC = await fetchJson(`${barbasite}/api/ia/matty?query=${encodeURI(q)}&apikey=`+API_KEY_BARBA)
    reply(ABC.resultado)
  } catch(e) {
    console.log(e)
    reply("Nsei")
  }
}


if(budy2 === "barba" && !isBanchat && !isBotoff) {
reagir(from, "👀")
sendButton(from, {text: "Fl ✋🏽😳🤚🏽", footer: `${tempo} ${pushname}`}, blackmd, sender, [{type: `cmd`, text: `𝙈𝙀𝙉𝙐 ✨`, command: prefix+`menu`}], seloctt)
}

if(isAutorepo) {

if(audios.length > 0 && isGroup) {
  for(i of audios) {
    caminho = `./database/audios/save/${i.rm}`
    if(rmLetras(budy2).includes(i.txt) && fs.existsSync(caminho)) {
      if(i.emoji.length > 0) reagir(from, i.emoji)
      blackmd.sendMessage(from, {audio: {url: caminho}, mimetype: `audio/mpeg`, ptt: true}, {quoted: seloctt})
    }
  }
}

if(budy2.toLowerCase() === "oi") {
resp = [`${tempo} ${pushname}, posso ajudar em algo?`, `${tempo} ${pushname}, como você está?`, `${tempo} ${pushname}, tudo bem por aqui?`]
reply(alerandom(resp.length))
}

/*if(budy2.includes("lucas") && !body.toLowerCase().startsWith('lucas') && isGroup) {
setTimeout(() => {reagir(from, "🤭")}, 300)
reply(`*Ah o Lucas, primo do meu dono... Eles são inseparáveis* 🥰
Você pode usar ele para pesquisar no gpt`)
setTimeout(async() => {
enviarfigu(`./database/figu/lucasfigu.webp`)
}, 500)
}*/

/*if(budy2.toLowerCase().startsWith('lucas') && args.length > 0) {
reagir(from, "🤩")
try {
ABC = await fetchJson(`https://blackmd.online/api/ia/gpt?query=`+encodeURI(q)+`&apikey=`+API_KEY_BARBA)
reply(ABC.resultado)
} catch (e) {
reply('Erro')
}
}*/

if(budy2.toLowerCase().startsWith('katy') && args.length > 0 && isGroup) {
setTimeout(() => {reagir(from, "😍")}, 300)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
const gtts = require('./armor/funcoes/gtts')(`pt`)
dtt = datasimi.message
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
blackmd.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mp4"}, {quoted: seloctt}).catch(e => {
return reply("Erro..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch (e){
return reply("Nsei")
}
}

if(budy2.toLowerCase().startsWith('jeff') && args.length > 0 && isGroup) {
setTimeout(() => {reagir(from, "🤓")}, 300)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Nsei")
}
}

if(budy2 === "bot") {
blars = ["Oi delícia", "Oi amor da minha vida", "Oi princesa do meu coração"] 
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)
}

if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
blackmd.sendMessage(from, {text: adivinha}, {quoted: seloctt})
}

if(budy2 === ":)") {
blackmd.sendMessage(from, {text: `hihi ^-^`})
}

if(budy2.toLowerCase() === "f") {
blackmd.sendMessage(from, {text: '```Press F no chat```'})
}

if(budy2.toLowerCase() === "kkkk") {
reagir(from, "😂")
}

if(budy2.toLowerCase() === "bot ruim") {
setTimeout(() => {reagir(from, "🤬")}, 300)
reply(`FILHO DA PUTA, VOU COMER SEU CU. ARROMBADO DO CARALHO, SUA MÃE ALUGA A BUCETA PRA COMPRAR FIXADOR DE DENTADURA PRO SEU PAI, AQUELE CORNO BROXA. CHIFRUDO, VOU ENFIAR MEU BRAÇO NO SEU ÂNUS E ARRANCAR SEU INTESTINO. LOGO DEPOIS VOU ENFORCAR SUA AVÓ COM ELE, AQUELA VELHA BISCATE QUE FAZ CROCHÊ PRA FORA EM TROCA DE PICA.\n\nSUAS TIAS TÊM PÊLO NO DENTE E SUA IRMÃ TEM POLENGUINHO NA VIRILHA, SEU GRANDE FILHO DA PRÊULA. SUA MÃE DAVA LEITE DA CABEÇA DO PAU DO SEU PAI PRA VOCÊ BEBER, FILHO DA PUTA. ISSO MESMO, VOCÊ TOMAVA MAMADEIRA DE PORRA DESDE CRIANÇA. POR ISSO É O RETARDADO MENTAL QUE É HOJE, SEU ZÉ BEBEDOR DE SUCO DE CARALHO.\n\nO PADRE TE BENZEU COM ÁGUA PARADA, HOJE VOCÊ SOFRE OS EFEITOS RETARDADOS DO AEDES AEGYPT QUE SE ALOJA DENTRO DO SEU OUVIDO, SEU MONTE DE ESTERCO. SEU AVÔ ARROMBADO USA FRALDA E TE OBRIGA A LIMPAR OS CAGÕES DELE COM UMA COLHER DE DANONINHO, SEU CAPACHO DO CARALHO.\n\nSUA MÃE TE FAZ DORMIR COM O REX, AQUELE CHIUAUA FILHO DA PUTA E CHEIO DE SARNA. E DURANTE A MADRUGADA O REX ABUSA SEXUALMENTE DE VOCÊ, ATÓLA A PATINHA DENTRO DESSE SEU CU PELÚDO, SEU FRACASSADO. LEMBRA DA JANDIRA, AQUELA SUA PRIMA MONOTETA ? POIS É, ENFIEI UM TACO DE BASEBALL NO CU DELA. A MÃE DELA DEU O FLAGRANTE NA GENTE E AO INVÉS DE FICAR BRAVA, PEDIU O TACO EMPRESTADO. VADIA DO CARALHO ESSA SUA TIA, SÓ PODE TER APRENDIDO COM SUA MÃE, AQUELA BISCATE.\n\nQUE ALIÁS, CONTINUA CHUPANDO O CARALHO DO ZÉ DO PACOTE, O TRAFICANTE QUE MORA AÍ DO LADO DA SUA CASA DE BARRO, SEU FILHO DUMA MACONHEIRA VAGABUNDA. O CABELO DA SUA MÃE É TÃO RUIM QUE ELA FAZ CHAPINHA NOS PÊLOS DO SOVACO E USA UM DESODORANTE COM CONDICIONADOR CAPILAR, AQUELA VELHA CARCOMIDA DESGRAÇADA.\n\nVOCÊ FOI ENCONTRADO NO LIXO, SEU MERDA. E ATÉ HOJE SUA MÃE PEDE DESCULPAS PRA DEUS PELO PEDAÇO DE MERDA QUE PARIU. ATÉ TE EMBALOU NUM SACO PRETO ANTES DE JOGAR NO LIXO, MAS VOCÊ É TÃO HORRÍVEL QUE UM MENDIGO TE ENCONTROU E QUASE TE COMEU ACHANDO QUE TU ERA UMA LAZANHA, SEU ESCROTO FILHO DA PUTA. SEU PAI VENDE CARTA DE MAGIC ROUBADA PRA JOGAR UMA HORA NA LAN HOUSE E ENTRAR EM SITE PORNÔ. DEPOIS ELE SE MASTURBA E GOZA DENTRO DO SEU TRAVESSEIRO. ISSO MESMO, AQUELA MANCHA BRANCA QUE INSISTE EM APARECER TODA VEZ QUE VOCÊ ACORDA NÃO É SUA SALíVA, SEU FILHO DA PUTA.\n\nVOCÊ SEMPRE FOI O MAIS ALOPRADO DA CLASSE. LEMBRA QUANDO ENFIARAM UM GIZ NO SEU CU ? VOCÊ FICOU UMA SEMANA CAGANDO BRANCO, PARECIA GESSO. E QUANDO VOCÊ IA RECLAMAR COM A PROFESSORA, ELA TE MANDAVA CALAR A BOCA. AQUELA VELHA SEMPRE SOUBE QUE VOCÊ TEM PROBLEMAS MENTAIS, SEU RETARDADO. AÍ VOCÊ TINHA QUE CALAR ESSA SUA BOCA ENQUANTO O GIZ DERRETIA DENTRO DO SEU INTESTINO, HAHA.\n\nFRACASSADO, VÊ SE PASSA UMA GILLETTE NESSE SEU BIGODINHO RIDÍCULO. TU PARECE O MANO BROWN, PORRA. E DÁ UM JEITO NESSAS SUAS TETINHAS DE BRIGADEIRO, ELAS ESTÃO COMEÇANDO A FEDER. TODA VEZ QUE EU PASSO DO SEU LADO, SINTO CHEIRO DE CACHORRO MORTO. QUE ALIÁS, SE ASSEMELHA AO CHEIRO DA XAVASCA DA SUA MÃE, AQUELA LEITOA MALDITA. DIZ PRA ELA CONGELAR O FEIJÃO QUE HOJE EU VOU CHEGAR TARDE, SEU PUTO. SEU FILHO DUMA PUTA DO CARALHO SE ENXERGA PORRA...\n\nVAI TOMAR NO MEIO DA ÍRIS DO OLHO DO TEU CÚ SEU FILHO DUMA VENDEDORA DE PIROCÓPTERO! SEU PAI VENDE BILHETE DE LOTERIA ESPORTIVA NA FRENTE DA SAPATARIA SEU FILHO DUMA PUTA DO CARALHO.! TOMARA Q SUA VÓ ESCORREGUE NO BOX ENQTO TIVER TOMANDO BANHO E CAIA DE TESTA NA SABONETEIRA SEU CORNO DO CARALHO.! QUERO MAIS EH QUE VC SE FODA JUNTO COM TODA A SUA FAMÍLIA AKELE BANDO DE CATADOR DE GARRAFA DO CENTRO COMUNITÁRIO.!\n\nSUA MÃE DA AULA DE MAMULENGO PROS PRESIDIÁRIOS DO CARANDIRÚ SEU FILHO DA PUTA.! SEU PAI ANDA PUXANDO UMA CARROÇA PELA CIDADE CATANDO PAPELÃO PRA DEPOIS FAZER UM PACOTÃO E VENDER TUDO POR 1 REAL! SUA MÃE ENCAPA SEUS LIVROS E CADERNOS COM SACO DE ARROZ TIO JOÃO SEU FILHO DUMA LAVADERA DO CARALHO.! SEU PAI VENDE REDE NO FAROL SEU FILHO DA PUTA.! SEU AVÔ CONSERTA PANELA DE PRESSÃO E AMOLA FACA DE PORTA EM PORTA SEU FILHU DUM PÉ DE AIPIM.! SEU PAI FAZ CARRETO DE KOMBI PORRA... CARALHO.! VAI TOMA NO CÚ SEU FILHO DA PUTA EH ESSA PORRA DESSE CARALHO ESPACIAL VUANU ATRÁS DE VOCÊ PORRA VAI TOMA NO CÚ CARALHO.!\n\nQUERO MAIS EH Q VC SE FODA E QUE A TOWNER Q SEU PAI USA PRA TRABALHAR (PERUEIRO FILHO DA PUTA) PEGUE FOGO COM VC, SUA MÃE, SUA IRMÃ, SUA VÓ E MAIS 3 CLIENTES... SEM CONTAR TBM Q QUERO Q TENHA INFILTRAÇÃO NO SEU BARRACO TODO.! QUERO Q SUA FAMÍLIA TODA SEJA VÍTIMA DUMA EPIDEMIA DE MALÁRIA E FEBRE AMARELA.! E DIGO MAIS! DESEJO QUE VOCÊ TENHA CANCER NO CÉREBRO E QUE SUA MÃE CAIA COM O CÚ NA QUINA DA MESA DA SALA.!\n\nSUA MÃE GUARDA PÉ DE MOLEQUE E SUSPIRO QUE ELA FAZ PRA VENDE EM PACOTE DE MANTEIGA CAMPESINA SEU FILHO DUMA BISCATE RAMPEIRA E SEM DONO DO CARALHO QUERO MAIS EH Q VC MORRA JUNTO COM TODA SUA FAMÍLIA PORRA CARALHO VAI TOMA NO CÚ MERDA VAI SE FUDER... FILHO DUM SACO DE ADUBO MANAH...! SEU PAI FAZ GLOBO DA MORTE DE BARRAFORTE COM SUA MÃE NA GARUPA FILHO DA PUTA.!\n\nSUA MÃE AGUENTA A TORCIDA TODA DO CORINTHIANS E DO FLAMENGO SOZINHA E AINDA PEDE BIS SEU CORNO DO CARALHO, FILHO DA PUTA! SEU PAI É FEIRANTE AQUELE CORNO VENDEDOR DE ALFACE! SUA MÃE PEDE ESMOLA JUNTO COM TEUS TIOS NA FAROL AQUELA MULAMBA DO CARALHO!...SEU MÃE VENDE AMENDOIM SEM CAMISA NO ESTADIO DE FUTEBOL SEU FILHO DUMA VAGABUNDA VADIA! SEU PAI É GAY IGUAL A VOCE SEU FILHO DUMA CADELA SARNENTA, PEGUEI ELE NA GRAVAÇÃO DO PROGRAMA DO LEÃO LOBO PARTICIPANDO DE UMA SURUBA JUNTO COM O CLODOVIL SUA BICHA ENRUSTIDA DO CARALHO!...\n\nSUA MÃE É UMA PISTOLEIRA, (E DAS BOAS) FEZ SERVIÇO COMPLETO PRA MIM E PRA MINHA GALERA, SEU FILHO DE UMA VERDADEIRA PUTA MALDITA!...SEU PAI AQUELE CORNO DO CACETE É GARI, E SUA MÃE É VARREDORA DE RUA SEU FILHO DO CAPETA!...\n\nESPERO QUE VOCE SE FODA, MAS QUE SE FODA MESMO, E QUE VOCE SEJA ATROPELADO POR UM TREM, E QUANDO SEUS PEDAÇOS CHEGAREM NO IML, O LEGISTA AINDA COMA SEU CU HAHAHAHA, ATÉ MORTO SE TA DANDO O RABO RAPAZ... SE FODE FILHO DE UMA RAPARIGA DO MATO...SUA MÃE DIRIGI CAMINHÃO COM AS TETAS DE FORA, AQUELA VACA GORDA FILHA DA PUTA! ...SEU PAI TEM CARTEIRINHA VIP NO GALA GAY AQUELE TRANSFORMISTA DO CARALHO...PORRA! VAI SE FUDE SEU NERD DO CARALHO!...VOCE NÃO NASCEU, VOCE FOI CAGADO SEU MONTE DE MERDA DE CAVALO!`)
}

if(budy2.includes("bom dia")) {
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir(from, "☀️")}, 300)
blackmd.sendMessage(from, {audio: {url:'./database/audios/bomdia.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}; if(hora5 >= 12 && hora5 <= 18){
setTimeout(() => {reagir(from, "🍃")}, 300)
reply(`Está de tarde... 🍃`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boatarde.m4a'}, mimetype: 'audio/mp4', ptt:true})
}; if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir(from, "🌙")}, 300)
reply(`Está de noite... 🌙`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true})
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir(from, "🌑")}, 300)
reply(`Está de madrugada... 🌑`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true})
}
}

if(budy2.includes("boa tarde")) {
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 12 && hora5 < 18){
setTimeout(() => {reagir(from, "🍃")}, 300)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boatarde.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}; if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir(from, "🌙")}, 300)
reply(`Está de noite... 🌙`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true})
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir(from, "🌑")}, 300)
reply(`Está de madrugada 🌑`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true})
}; if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir(from, "☀️")}, 300)
reply(`Está de dia ☀️`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/bomdia.m4a'}, mimetype: 'audio/mp4', ptt:true})
}
}

if(budy2.includes("boa noite")) {
hora5 = Number(moment.tz('America/Sao_Paulo').format('HH'))
if(hora5 >= 18 && hora5 <= 23){
setTimeout(() => {reagir(from, "🌙")}, 300)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}; if(hora5 >= 0 && hora5 < 6){
setTimeout(() => {reagir(from, "🌑")}, 300)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boanoite.m4a'}, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}; if(hora5 >= 6 && hora5 < 12){
setTimeout(() => {reagir(from, "☀️")}, 300)
reply(`Está de dia... ☀️`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/bomdia.m4a'}, mimetype: 'audio/mp4', ptt:true})
}; if(hora5 >= 12 && hora5 < 18){
setTimeout(() => {reagir(from, "🍃")}, 300)
reply(`Está de tarde... 🍃`)
blackmd.sendMessage(from, {audio: {url:'./database/audios/boatarde.m4a'}, mimetype: 'audio/mp4', ptt:true})
}
}

}

if(messagesC.includes('exec')) {
if(!isOwner && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
 if(dataGp[0].antipalavrao.palavras.indexOf(PR_String) >= 0) {
 if(!isGroupAdmins) {
 blackmd.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted: seloctt})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
blackmd.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
blackmd.sendMessage(from, {text: `⚠️ *APLICANDO PUNIÇÃO AO USUÁRIO POR CITAR UMA PALAVRA PROIBIDA NESTE GRUPO*`}).catch(e => {
blackmd.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir!!`}, {quoted: seloctt})
})       							
}, 200)
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
setTimeout(() => {reagir(from, "❌")}, 1000)
AB = similarityCmd(command)
notcmd = privateCmd(sender, prefix+command, AB[0].comando, AB[0].porcentagem)
mention(notcmd)
}

if(isGroup && budy2.includes('@') && ausentes.length > 0) {
  palavra = budy2 + ` `
  armax = 0
  for(x = 0; x < palavra.length; x++) {
    if(palavra.split(palavra.slice(x+1))[0].slice(x) == "@") {
    armax += 1
    }
  }
  jherffeson = []
  for(y = 0; y < armax; y++) {
    for(z = 0; z < ausentes.length; z++) {
      if(budy2.split('@')[y+1].startsWith(ausentes[z].id.split('@')[0]) && isOnlyVip(ausentes[z].id) && !JSON.stringify(jherffeson).includes(ausentes[z].id) && sender != ausentes[z].id) {
        tempoDeAusente = moment.tz('America/Sao_Paulo').format('DD/MM') == ausentes[z].data ? ausentes[z].hora : ausentes[z].data+` às `+ausentes[z].hora
        jherffeson.push({id: ausentes[z].id, nome: ausentes[z].nome, dono: ausentes[z].dono, motivo: ausentes[z].motivo, data: ausentes[z].data, hora: ausentes[z].hora, tempooff: tempoDeAusente})
      }
    }
  }
  nomes = jherffeson.length > 1 ? jherffeson.map(n => n.nome).join(', ') : jherffeson[0].nome
  cax = ["Já ", "Por outro lado, ", "Agora ", "Dessa vez "]
  ale = ["Aguarde um momento 😪", "Segura as pontas 😀", "Volte mais tarde ✋🏽", "Terás tuas dúvidas respondidas quando ele/a voltar 😶‍🌫️", "Quando ele/a voltar, irá responder todas as suas dúvidas 🫶🏽"]
  if(jherffeson[0].dono == true) {
    txt = `Olá ${pushname} ^-^

Infelizmente, o ${nomes} est${jherffeson.length > 1 ? 'ão' : 'á'} indisponíve${jherffeson.length > 1 ? 'is' : 'l'} no momento... 😔 ${jherffeson.map(m => `${jherffeson.length > 1 ? `o @${m.id.split('@')[0]}` : `Ele`} está 『 ${m.motivo} 』 desde ${m.tempooff}.`).join(` ${cax[Math.floor(Math.random()*cax.length)]}`)}${jherffeson.length > 1 ? '\n\nQuando eles voltarem, irão' : '.. Quando ele voltar, irá'} responder todas as suas dúvidas 🫶🏽

Tenha ${tempo_pro + " " + tempo.toLowerCase() + " " + tempo_emoji}`
  } else {
    txt = `${tempo} ${pushname} '-' ${jherffeson.map(g => `\nO/a @${g.id.split('@')[0]} está "${g.motivo}" deste ${g.tempooff}... ${ale[Math.floor(Math.random()*ale.length)]}`).join(``)}`
  }
  mention(txt)
}

if(isJsonIncludes(moedas, "jherffeson")) {
  BC = moedas.map(i => i.id).indexOf("jherffeson")
  if(moedas[BC].chaves.length > 0) {
    caixa = []
    nmr = -1
    for(k of moedas[BC].chaves) {
      nmr += 1
      if(budy2.toUpperCase() === k.key) {
        caixa.push({key: k.key, nmr: nmr})
      }
    }
    if(caixa.length > 0) {
      AD = caixa[0].nmr
      timeday = moedas[BC].chaves[AD].dias
      pessoa = moedas[BC].chaves[AD].cliente
      infinity = moedas[BC].chaves[AD].dias > 0 ? false : true
      if(!isJsonIncludes(grupos, "jherffeson")) {
        grupos.push({id: "jherffeson", gps: []})
        fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      }
      if(isGroup && !isJsonIncludes(grupos, from) && moedas[BC].chaves[AD].tipo != 3) {
        grupos.push({id: from, limite: 5, validado: true})
        fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      } else {
        GP = grupos.map(i => i.id).indexOf(from)
        grupos[GP].validado = true
        fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
      }
      if(infinity == false) {
        CD = grupos.map(i => i.id).indexOf("jherffeson")
        if(moedas[BC].chaves[AD].tipo == 1 && isGroup) {
          if(isJsonIncludes(grupos[CD].gps, from)) {
            DB = grupos[CD].gps.map(i => i.id).indexOf(from)
            grupos[CD].gps.splice(DB, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
          }
          if(!isJsonIncludes(aluguel, from)) {
            aluguel.push({id: from, nome: groupName, tempo: timeday, totalRent: timeday, cliente: pessoa, save: Number(moment.tz('America/Sao_Paulo').format('DD')), cortesia: false})
            fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
            moedas[BC].chaves.splice(AD, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
            reply(`*Grupo adicionado ao aluguel com sucesso* ✅`)
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código de aluguel validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa, nmrdn]})
          } else {
            AB = aluguel.map(i => i.id).indexOf(from)
            aluguel[AB].cortesia = false
            aluguel[AB].nome = groupName
            aluguel[AB].totalRent = aluguel[AB].tempo + timeday
            aluguel[AB].tempo += timeday
            fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
            moedas[BC].chaves.splice(AD, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
            reply((timeday <= 36 ? `+${timeday}h adicionada${timeday != 1 ? `s` : ``}` : `+${Number(timeday / 24).toFixed(0)} dias adicionados`) + ` ao aluguel feste grupo ♨`)
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código de aluguel validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa, nmrdn]})
          }
          return
        }
        if(moedas[BC].chaves[AD].tipo == 2 && isGroup) {
          if(!isJsonIncludes(grupos[CD].gps, from)) {
            if(!isJsonIncludes(aluguel, from)) {
              grupos[CD].gps.push({id: from})
              fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
              aluguel.push({id: from, nome: groupName, tempo: 24, totalRent: 24, cliente: sender, save: Number(sendHours('MM')), cortesia: true})
              fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
              reply(`💵 *CARD CORTESIA* validado ✅\n24h liberadas neste grupo contando a partir de agora ⏲️`)
              await sleep(2000)
              blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código *CARD CORTESIA* validado no grupo ${groupName} registrado no nome de @${pessoa.split('@')[0]} ✅`, mentions: [pessoa, nmrdn]})
            } else reply("Este grupo já está registrado")
          } else reply("Já foi validada neste mês uma cortesia neste grupo 🤨")
          return
        }
        if(moedas[BC].chaves[AD].tipo == 3) {
          if(!isJsonIncludes(vip, sender)) {
            vip.push({id: sender, dias: Number(timeday), total: Number(timeday), save: Number(moment.tz('America/Sao_Paulo').format('DD')), infinito: false})
            fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip, null, 2))
            moedas[BC].chaves.splice(AD, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
            blackmd.sendMessage(from, {text: `👑 @${sender.split("@")[0]} foi adicionado à lista VIP com sucesso...`, mentions: [sender]}, {quoted: seloctt})
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código VIP validado ${isGroup ? "no grupo "+groupName : "no privado"} registrado no nome de @${sender.split('@')[0]} ✅`, mentions: [sender, nmrdn]})
          } else {
            AB = vip.map(i => i.id).indexOf(sender)
            if(vip[AB].infinito == true) return reply(`Não será possível adicionar dias ao seu VIP, pois você possui o _"INFINITY VIP"_`)
            vip[AB].total = (vip[AB].dias + Number(timeday))
            vip[AB].dias += Number(timeday)
            fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip))
            moedas[BC].chaves.splice(AD, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
            blackmd.sendMessage(from, {text: `👑 ${timeday} dia${Number(timeday) > 1 ? `s` : ``} fo${Number(timeday) > 1 ? `ram` : `i`} adicionado${Number(timeday) > 1 ? `s` : ``} ao usuário @${sender.split("@")[0]}`, mentions: [sender]}, {quoted: seloctt})
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código VIP validado ${isGroup ? "no grupo "+groupName : "no privado"} registrado no nome de @${sender.split('@')[0]} ✅`, mentions: [sender, nmrdn]})
          }
          return
        }
        if(moedas[BC].chaves[AD].tipo == 4 && isGroup) {
          if(isJsonIncludes(vipgp, from)) {
            AB = vipgp.map(v => v.id).indexOf(from)
            if(vipgp[AB].infinito == true) return reply(`Não será possível adicionar dias ao VIP deste grupo, pois o mesmo possui o _"INFINITY VIP"_`)
            vipgp[AB].dias += 
            fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp))
            reply(`+${Number(timeday)} dia${Number(timeday) > 1 ? "s" : ""} adicionado${Number(timeday) > 1 ? "s" : ""} ao VIP deste grupo 👑`)
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código VIP GP validado no grupo ${groupName} registrado no nome de @${sender.split('@')[0]} ✅`, mentions: [sender, nmrdn]})
          } else {
            vipgp.push({id: from, dias: Number(timeday), save: Number(sendHours("DD")), infinito: false})
            fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp, null, 2))
            reply(`O grupo ${groupName} acaba de se tornar VIP por ${Number(timeday)} dia${Number(timeday) > 1 ? "s" : ""} 👑`)
            await sleep(2000)
            blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código VIP GP validado no grupo ${groupName} registrado no nome de @${sender.split('@')[0]} ✅`, mentions: [sender, nmrdn]})
          }
          return
        }
        if(moedas[BC].chaves[AD].tipo == 5) {
          if(!isJsonIncludes(cardxp, sender)) {
            cardxp.push({id: sender, mapa: 0, active: false, save: "00", tempo: 0, cards: []})
            saveJSON(cardxp, "./base de dados/cardxp.json")
          }
          XP = cardxp.map(i => i.id).indexOf(sender)
          hehe = moedas[BC].chaves[AD].multi
          cardxp[XP].cards.push({multi: hehe, horas: timeday})
          saveJSON(cardxp, "./base de dados/cardxp.json")
          moedas[BC].chaves.splice(AD, 1)
          saveJSON(moedas, "./base de funcionamento/aluguel/moedas.json")
          reply(`🔖 *_Card XP ${hehe}x ativo por ${timeday == 24 ? "24h" : (timeday / 24) +"d"} validado com sucesso... Use ${prefix}setcard para ativar ele_*`)
          await sleep(1000)
          blackmd.sendMessage(obrigadoEXT.idprivategp, {text: `[❕] código Card XP validado ${isGroup ? "no grupo "+groupName : "no privado"} registrado no nome de @${sender.split('@')[0]} ✅`, mentions: [sender, nmrdn]})
          return
        }
      } else {
        if(moedas[BC].chaves[AD].tipo == 1 && isGroup) {
          moedas[BC].chaves.splice(AD, 1)
          fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
          reply(`Grupo salvo na pasta 📁`)
          return
        }
        if(moedas[BC].chaves[AD].tipo == 3) {
          if(!isJsonIncludes(vip, sender)) {
            vip.push({id: sender, dias: 0, save: 0, infinito: true})
            fs.writeFileSync('./base de dados/vip.json', JSON.stringify(vip, null, 2))
            moedas[BC].chaves.splice(AD, 1)
            fs.writeFileSync("./base de funcionamento/aluguel/moedas.json", JSON.stringify(moedas, null, 2))
            blackmd.sendMessage(from, {text: `👑 @${sender.split("@")[0]} foi agraciado com o benefício do VIP infinito...`, mentions: [sender]}, {quoted: seloctt})
          } else reply(`✋🏽😳🤚🏽 Impossível atualizar seu VIP, você já possui o INFINITY ∞`)
          return
        }
        if(moedas[BC].chaves[AD].tipo == 4 && isGroup) {
          if(!isJsonIncludes(vipgp, from)) {
            vipgp.push({id: from, dias: 0, save: 0, infinito: true})
            fs.writeFileSync('./base de dados/vipgp.json', JSON.stringify(vipgp, null, 2))
            reply(`O grupo ${groupName} acaba de se tornar VIP infinitamente 👑`)
          } else reply(`✋🏽😳🤚🏽 Impossível atualizar seu VIP, você já possui o INFINITY ∞`)
          return
        }
      }
    }
  }
}

if(isGroup && JSON.stringify(revealmsg).includes(from)) {
  if(q != undefined) {
    sendMess(obrigadoEXT.idprivategp, "👥 *Grupo:* "+groupName+"\n👤 *Usuário:* "+pushname+"\n📱 *Número:* wa.me/"+sender.split("@")[0]+"\n🗣️ *Mensagem:* "+body)
  }
}

if(isGroup && isJsonIncludes(sorteio, from) && info.message?.reactionMessage) {
  rc = info.message.reactionMessage
  AB = sorteio.map(i => i.groupId).indexOf(from)
  min = (contarMin(sorteio[AB].data) + (contarMin(sorteio[AB].data) < contarMin(sendHours("HH:mm")) ? 1440 : 0) + (contarDias(sendHours("DD/MM/YYYY")) * 1440)) - ((contarDias(sendHours("DD/MM/YYYY")) * 1440) + contarMin(sendHours("HH:mm")))
  if(rc.key.participant == botNumber && rc.text == sorteio[AB].emoji && (contarMin(sendHours("HH:mm")) + (contarDias(sendHours("DD/MM/YYYY")) * 1440)) < (contarMin(sorteio[AB].data) + (contarDias(sendHours("DD/MM/YYYY")) * 1440) + (contarMin(sendHours("HH:mm")) > contarMin(sorteio[AB].data) ? 1440 : 0)) && !isJsonIncludes(sorteio[AB].participants, sender) && sorteio[AB].participants.length < sorteio[AB].total) {
    sorteio[AB].participants.push(sender)
    saveJSON(sorteio, "./base de funcionamento/sorteio.json")
    hehe = min > 60 ? `${(min - (min % 60)) / 60} hora${((min - (min % 60)) / 60) !== 1 ? "s" : ""} e ${min % 60} minuto${(min % 60) !== 1 ? "s" : ""}` : min > 5 ? `${min} minutos` : `alguns minutos`
    txt = `_Bem vindo (a) *@${sender.split("@")[0]}*, você é o/a usuário (a) ${sorteio[AB].participants.length}/${sorteio[AB].total}... Fique atento (a), o sorteio ocorrerá em ${hehe}_ 🥰`
    blackmd.sendMessage(from, {text: txt, mentions: [sender]})
    if(sorteio[AB].participants.length >= sorteio[AB].total) {
      await sleep(1000)
      blackmd.sendMessage(from, {text: `[❗] O último participante entrou... Vagas encerradas ❌`, mentions: groupMembers.map(i => i.id)})
    }
  }
}

if(body != undefined && !info.message?.reactionMessage?.text && !JSON.stringify(level).includes(sender) && isGroup) {
level.push({id: sender, level: 1, contador: 0, block: false})
saveLeVeLdb(level);
}

if(body != undefined && !info.message?.reactionMessage?.text && isJsonIncludes(level, sender) && isGroup && isLevelingOn) {
  AB = level.map(i => i.id).indexOf(sender)
  if(level[AB].block == false) {
    if(isImage || isAudio || isCmd) { quantxp = 2 } else if(isVideo || isSticker) { quantxp = 3 } else if(isContact) { quantxp = 4 } else if(isLocation) { quantxp = 5 } else { quantxp = 1 }
    if(isJsonIncludes(cardxp, sender)) {
      AC = cardxp.map(c => c.id).indexOf(sender)
      if(cardxp[AC].active == true) {
        card = quantxp * cardxp[AC].cards[cardxp[AC].mapa].multi
      } else { card = quantxp }
    } else { card = quantxp }
    butao = [{type: `cmd`, text: `𝙈𝙔 𝙇𝙀𝙑𝙀𝙇 ✨`, command: prefix+`level`}, {type: `cmd`, text: `𝙍𝘼𝙉𝙆 🏆`, command: prefix+`rank`}]
    try { shortpc = (await axios.get(`https://tinyurl.com/api-create.php?url=${(await blackmd.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image'))}`)).data
    } catch(e) { ppimg = semfoto }
    for(i = 0; i < card; i++) {
      level[AB].contador += 1
      saveLeVeLdb(level)
      switch(level[AB].contador) {
        case 100: case 200: case 300: case 400: case 500: case 600: case 700: case 800: case 900: case 1200: case 1500: case 1800: case 2100: case 2700: case 3300: case 3900: case 4500: case 5000: case 5500: case 6500: case 7500: case 9000: case 10500: case 12000: case 13500: case 15000: case 20000: case 25000: case 30000: case 35000: case 40000: case 50000: case 60000: case 70000: case 80000: case 90000: case 100000: case 150000: case 200000: case 300000: case 400000: case 500000: case 1000000: case 1500000: case 2000000: case 5000000:
          level[AB].level += 1
          saveLeVeLdb(level)
          txt = `
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
ㅤㅤㅤㅤ💎 𝗟𝗘𝗩𝗘𝗟 𝗨𝗣 💎

💠 𝗣𝗮𝗿𝗮𝗯é𝗻𝘀: @${sender.split("@")[0]}

𝗡𝗼𝘃𝗼 𝗹𝗲𝘃𝗲𝗹 𝗮𝗹𝗰𝗮𝗻ç𝗮𝗱𝗼 𝗽𝗼𝗿 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗮𝗿 ↴
ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ *『 ${level[AB].contador} XP 』*
✅⃤ 𝗣𝗔𝗧𝗘𝗡𝗧𝗘 𝗗𝗘𝗦𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗔 ↴
ㅤㅤㅤㅤㅤㅤㅤㅤㅤ〘 ${patente(level[AB].contador + 1)} 〙
📝⃤ 𝗟𝗘𝗩𝗘𝗟 𝗗𝗘𝗦𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢 ↴
ㅤㅤㅤㅤㅤㅤ ${level[AB].level-1} -> ${level[AB].level} 🎟️

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
`
        link = barbasite+`/api/canvas/levelup?foto=${ppimg}&nome=Level%20UP&lvb=${level[AB].level - 1}&lva=${level[AB].level}&fundo=https://telegra.ph/file/292078f11f317dd5c7054.jpg`
        sendButton(from, {image: {url: link}, caption: txt, footer: NomeDoBot, mentions: [sender]}, blackmd, sender, butao, seloctt)
      break
      case 10000000:
        level[AB].level += 1
        saveLeVeLdb(level)
        link = barbasite+`/api/canvas/levelup2?foto=${ppimg}&nome=Level%20Max&lvb=${level[AB].level - 1}&lva=${level[AB].level}&fundo=https://telegra.ph/file/167ef61ba865254d037f7.jpg`
        txt = `✨ Parabéns ${pushname}, você completou com sucesso 10M de XP, possuindo assim o título de *Veterano Do Barba System 🎩*

🔬 Todos os níveis daqui pra frente serão contados a cada 1M de XP... Nossa equipe se orgulha de coroar você, depois de tanto esforço e desempenho, após muito tempo de uso de nosso sistemas. ${tempo} ${tempo_emoji}`
      sendButton(from, {image: {url: link}, caption: txt, footer: NomeDoBot, mentions: [sender]}, blackmd, sender, butao, seloctt)
      break
      case 10000000: case 11000000: case 12000000: case 13000000: case 14000000: case 15000000: case 16000000: case 17000000: case 18000000: case 19000000: case 20000000: case 21000000: case 22000000: case 23000000: case 24000000: case 25000000: case 26000000: case 27000000: case 28000000: case 29000000: case 30000000:
        level[AB].level += 1
        saveLeVeLdb(level)
        txt = `
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
ㅤㅤㅤ🎇 𝗦𝗨𝗣𝗥𝗘𝗠𝗘 𝗟𝗘𝗩𝗘𝗟 𝗨𝗣 🎇

⏤͟͟͞͞ ꦿ𝗨𝘀𝘂𝗮́𝗿𝗶𝗼 ⇒ @${sender.split("@")[0]}

『 🎩 𝚅𝚎𝚝𝚎𝚛𝚊𝚗𝚘 𝙳𝚊 𝙱𝚕𝚊𝚌𝚔 𝚂𝚢𝚜𝚝𝚎𝚖 🎩 』

⏤͟͟͞͞ ꦿ𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 ⇒ *『 ${level[AB].contador} XP 』*
📝⃤ 𝗟𝗘𝗩𝗘𝗟 𝗗𝗘𝗦𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢 ↴
ㅤㅤㅤㅤㅤㅤ ${level[AB].level-1} -> ${level[AB].level} 🎟️

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
`
        link = barbasite+`/api/canvas/levelup2?foto=${ppimg}&nome=Supreme&lvb=${level[AB].level - 1}&lva=${level[AB].level}&fundo=https://telegra.ph/file/167ef61ba865254d037f7.jpg`
        sendButton(from, {image: {url: link}, caption: txt, footer: NomeDoBot, mentions: [sender]}, blackmd, sender, butao, seloctt)
        break
      }
    }
  }
}

if(isGroup && fs.existsSync(`./armor/jogo/mina-game/campo-minado-${from}.json`)) {
  game = `./armor/jogo/mina-game/campo-minado-${from}.json`
  campominado = JSON.parse(fs.readFileSync(game))
  if(campominado.começou == false) {
    mini = budy2.toLowerCase().replace("ã", "a")
    if(campominado.chamado == sender) {
      if(mini === "sim" || mini === "s") {
        campominado.começou = true
        campominado.jogadores.push({id: sender, erros: 3})
        saveJSON(campominado, game)
        txt = `⚠️ Atenção @${campominado.criador.split("@")[0]}, ${getname(sender)} aceitou seu desafio 💣😜\nEscreva a coordenada do campo para jogar e ${prefix}infominagame para obter mais informações\n\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}`
        for(i = 1; i < (campominado.totalquad + 1); i++) {
          txt += `\n`
          if(i == 1) txt += ` Ａ `
          if(i == 2) txt += ` Ｂ `
          if(i == 3) txt += ` Ｃ `
          if(i == 4) txt += ` Ｄ `
          if(i == 5) txt += ` Ｅ `
          if(i == 6) txt += ` Ｆ `
          if(i == 7) txt += ` Ｇ `
          if(i == 8) txt += ` Ｈ `
          if(i == 9) txt += ` Ｉ `
          txt += `🟫`.repeat(campominado.totalquad)
        }
        mention(txt)
      }
      if(mini === "nao" || mini === "n") {
        mention(`😓 Sinto muito @${campominado.criador.split("@")[0]}, ${getname(sender)} não aceitou seu desafio (mata ele ${getname(campominado.criador)} 😈) 💣`)
        fs.unlinkSync(game)
      }
    }
  } else {
    if(isJsonIncludes(campominado.jogadores, sender)) {
      hehe = campominado.play == 0 ? 1 : 0
      mxm = campominado.totalquad
      delt = []
      for(v = 1; v < (mxm + 1); v++) {
        for(r = 1; r < (mxm + 1); r++) {
          if(r == 1) w = "a"
          if(r == 2) w = "b"
          if(r == 3) w = "c"
          if(r == 4) w = "d"
          if(r == 5) w = "e"
          if(r == 6) w = "f"
          if(r == 7) w = "g"
          if(r == 8) w = "h"
          if(r == 9) w = "i"
          delt.push(v+w)
        }
      }
      caixa = []
      for(a = 1; a < (mxm + 1); a++) {
        if(a == 1) { c = ` Ａ `; c2 = "a" }
        if(a == 2) { c = ` Ｂ `; c2 = "b" }
        if(a == 3) { c = ` Ｃ `; c2 = "c" }
        if(a == 4) { c = ` Ｄ `; c2 = "d" }
        if(a == 5) { c = ` Ｅ `; c2 = "e" }
        if(a == 6) { c = ` Ｆ `; c2 = "f" }
        if(a == 7) { c = ` Ｇ `; c2 = "g" }
        if(a == 8) { c = ` Ｈ `; c2 = "h" }
        if(a == 9) { c = ` Ｉ `; c2 = "i" }
        caixa.push({letra: c, exp: []})
        for(b = 1; b < (mxm + 1); b++) {
          d = `${b + c2}`
          e = campominado.plantado.includes(d) ? campominado.minas.includes(d) ? `💣` : `🟩` : `🟫`
          caixa[a - 1].exp.push({nmr: d, esc: e})
        }
      }
      rev = budy2.toLowerCase()
      miniletra = Number(rev.slice(0, 1)) ? rev : reverse(rev)
      if(delt.includes(miniletra)) {
        if(campominado.jogadores[campominado.play].id == sender) {
          if(campominado.plantado.includes(miniletra)) return reply("Coordenada já escolhida 🤦🏻‍♂️")
          campominado.plantado.push(miniletra)
          campominado.play = hehe
          saveJSON(campominado, game)
          for(a1 = 0; a1 < caixa.length; a1++) {
            for(a2 = 0; a2 < caixa[a1].exp.length; a2++) {
              if(isJsonIncludes(campominado.plantado, miniletra) && miniletra == caixa[a1].exp[a2].nmr) {
                caixa[a1].exp[a2].esc = `🟩`
              }
            }
          }
          if(campominado.minas.includes(miniletra)) {
            AB = campominado.jogadores.map(t => t.id).indexOf(sender)
            if(campominado.jogadores[AB].erros > 1) {
              campominado.jogadores[AB].erros -= 1
              saveJSON(campominado, game)
              for(b1 = 0; b1 < caixa.length; b1++) {
                for(b2 = 0; b2 < caixa[b1].exp.length; b2++) {
                  if(isJsonIncludes(campominado.minas, miniletra) && miniletra == caixa[b1].exp[b2].nmr) {
                    caixa[b1].exp[b2].esc = `💣`
                  }
                }
              }
              reply(`BOOM!! 💣 cê explodiu meu prç 😂 felizmente cê ainda tem +${campominado.jogadores[AB].erros} chance${Number(campominado.jogadores[AB].erros) > 1 ? "s" : ""}`)
            } else {
              for(b1 = 0; b1 < caixa.length; b1++) {
                for(b2 = 0; b2 < caixa[b1].exp.length; b2++) {
                  if(isJsonIncludes(campominado.minas, miniletra) && miniletra == caixa[b1].exp[b2].nmr) {
                    caixa[b1].exp[b2].esc = `💣`
                  }
                }
              }
              mention(`ㅤㅤㅤㅤㅤㅤ🏆 *WIN!!!* 🏆\n\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}\n${caixa.map(x => x.letra+`${x.exp.map(y => y.esc).join("")}`).join(`\n`)}\n\n*@${sender.split("@")[0]} explodiu haha* 💣😜\n*Parabéns @${campominado.jogadores[hehe].id.split("@")[0]} por ter sobrevivido... Você ganhou* 🎉🥳`)
              return fs.unlinkSync(game)
            }
          }
          //reboot
          await sleep(500)
          mention(`*Sua vez @${campominado.jogadores[hehe].id.split("@")[0]} 😜*\n${`☸️1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣`.slice(0, Number(campominado.totalquad * 3) + 2)}\n${caixa.map(x => x.letra+`${x.exp.map(y => y.esc).join("")}`).join(`\n`)}`)
        } else return mention(`*Agora é vez do @${campominado.jogadores[campominado.play].id.split("@")[0]} jogar* 💣`)
      }
    }
  }
}

if(isGroup && isJsonIncludes(adivinharnmr, from)) {
  AB = adivinharnmr.map(i => i.groupId).indexOf(from)
  AC = adivinharnmr[AB].participants.map(i => i.id).indexOf(sender)
  if(AC >= 0) {
    advnrnmr = adivinharnmr[AB].participants[AC]
    mini = rmLetras(budy2)
    if(!advnrnmr.fim) {
      if(mini == "pronto") {
        if(advnrnmr.progresso != 5) {
          if(advnrnmr.progresso == 0) txt = `🧙🏽‍♂️ _*Passo nº1:* pense em um número aleatório entre 5-50_`
          if(advnrnmr.progresso == 1) txt = `🧙🏽‍♂️ _*Passo nº2:* multiplique esse número por 2_`
          if(advnrnmr.progresso == 2) {
            nmr = (alerandom(14) + 1) * 2
            advnrnmr.resultado = nmr / 2
            saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
            txt = `🧙🏽‍♂️ _*Passo nº3:* agora adicione +${nmr} a este resultado_`
          }
          if(advnrnmr.progresso == 3) txt = `🧙🏽‍♂️ _*Passo nº4:* feito isso, divida o resultado por 2_`
          if(advnrnmr.progresso == 4) txt = `🧙🏽‍♂️ _*Passo nº5:* agora subtraia este resultado pelo primeiro número que você pensou_`
          advnrnmr.progresso += 1
          saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
          return reply(txt)
        } else {
          advnrnmr.fim = true
          saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
          return reply(`🧙🏽‍♂️ _Pela minha extrema sabedoria, posso presumir que o resultado final seja igual a ↴_\n\t\t\t\t\t\t\t» ${advnrnmr.resultado} «\n\n_Se eu acertei, digite *"sim"...* Caso contrário, digite *"não"* (sem as aspas é claro)_`)
        }
      }
    } else {
      if(mini == "sim" || mini == "nao") {
        snrp = mini == "sim" ? "🧙🏽‍♂️ O grande sábio sempre tem todas as respostas ✨" : "🧙🏽‍♂️ Podes mentir o quanto quiser, mas nós dois sabemos a resposta..."
        adivinharnmr[AB].participants.splice(AC, 1)
        saveJSON(adivinharnmr, `./armor/jogo/adivinharnmr.json`)
        return reply(snrp)
      }
    }
  }
}

//início do anagrama
if(fs.existsSync(`./armor/jogo/anagrama/anagrama-${from}.json`) && isGroup && isModobn) {
  ana = alerandom(palavrasANA.length)
  anagrama = `./armor/jogo/anagrama/anagrama-${from}.json`
  dataAnagrama = JSON.parse(fs.readFileSync(anagrama))
  if(rmLetras(budy2.toLowerCase().slice(0, 4)) == rmLetras(dataAnagrama.original.toLowerCase().slice(0, 4)) && rmLetras(budy2.toLowerCase()) != rmLetras(dataAnagrama.original.toLowerCase())) return reply(`Quase lá ${pushname}`)
  if(rmLetras(budy2.toLowerCase()) == rmLetras(dataAnagrama.original.toLowerCase())) {
    var bglh = [
      `[ ❗ ] Irei reiniciar o jogo em 3️⃣`,
      `[ ❗ ] Irei reiniciar o jogo em 2️⃣`,
      `[ ❗ ] Irei reiniciar o jogo em 1️⃣`,
      `✅ START THE GAME ✅`
    ]
    let { key } = await blackmd.sendMessage(from, {text: `Parabéns ${pushname}, você acertou a palavra do anagrama... 🎉🥳`}, {quoted: info})//primeira mensagem
    await sleep(1000)
    for(let i = 0; i < bglh.length; i++) {
      await sleep(1000)
      await blackmd.sendMessage(from, {text: bglh[i], edit: key }, {quoted: info})
    }
    saveJSON(palavrasANA[ana], anagrama)
    blackmd.sendMessage(from, {text: `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ *DESCUBRA A PALAVRA*
│➽ *ANAGRAMA:* ${shuffle(palavrasANA[ana].embaralhada)}
│➽ *DICA:* ${palavrasANA[ana].dica}
╰────────────────────────
`}, {quoted: info})
  }
}
//fim do anagrama

if(fs.existsSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`) && budy2.includes(`${JSON.parse(fs.readFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)).original.toLowerCase().replace("ã", "a").replace("á", "a").replace("ê", "e").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ô", "o").replace("ú", "u")}`) && isGroup && args.length <= 2) {
fs.unlinkSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`)
var bglh = [
`[ ❗ ] Irei reiniciar o jogo em 3️⃣`,
`[ ❗ ] Irei reiniciar o jogo em 2️⃣`,
`[ ❗ ] Irei reiniciar o jogo em 1️⃣`,
`✅ START THE GAME ✅`
]
let { key } = await blackmd.sendMessage(from, {text: `Parabéns, você acertou o animal 🎉`}, {quoted: seloctt})//primeira mensagem
await sleep(1000)
for(let i = 0; i < bglh.length; i++) {
await sleep(1000)
await blackmd.sendMessage(from, {text: bglh[i], edit: key }, {quoted: seloctt})
}
jherffeson = Math.floor(Math.random() * quizanimais.length)
fs.writeFileSync(`./armor/jogo/quizanimais/quizanimais-${from}.json`, `${JSON.stringify(quizanimais[jherffeson])}`)
blackmd.sendMessage(from, {image: {url: quizanimais[jherffeson].foto}, caption: `\n✔️ 𝙌𝙐𝙄𝙕 𝘼𝙉𝙄𝙈𝘼𝙄𝙎 ✔️\n\n🌚⃤ 𝘿𝙚𝙨𝙘𝙪𝙗𝙧𝙖 𝙊 𝘼𝙣𝙞𝙢𝙖𝙡 ↑↑↑\n`})
}

//função do mute
if(body != undefined && !info.message?.reactionMessage?.text && isJsonIncludes(mute, from) && isBotGroupAdmins) {
  A1 = mute.map(i => i.gpid).indexOf(from)
  if(isJsonIncludes(mute[A1].mutados, sender)) {
    A2 = mute[A1].mutados.map(a => a.id).indexOf(sender)
    if(mute[A1].mutados[A2].sn == false) {
      mute[A1].mutados[A2].sn = true
      saveJSON(mute, "./base de dados/mute.json")
      reply(`Você foi avisado ${pushname}... Você tem 30 segundos para declarar suas últimas palavras 😥`)
      await sleep(30000)
      B1 = mute.map(i => i.gpid).indexOf(from)
      if(isJsonIncludes(mute[B1].mutados, sender)) {
        B2 = mute[B1].mutados.map(a => a.id).indexOf(sender)
        mute[B1].mutados.splice(B2, 1)
        saveJSON(mute, "./base de dados/mute.json")
        remover(from, sender)
        await sleep(2000)
        sendMess(from, `Falta de aviso não foi...`)
      }
    }
  }
}

if(JSON.stringify(music).includes(from) && isGroup) {
  AB = music.map(i => i.groupId).indexOf(from)
  if(JSON.stringify(music[AB].usus).includes(sender)) {
    BC = music[AB].usus.map(i => i.id).indexOf(sender)
    if(budy2.toLowerCase().replace("á", "a") === `audio` && isGroup) {
      link = music[AB].usus[BC].urlAudio.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_BARBA#`, API_KEY_BARBA)
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚂𝚞𝚊 𝙼ú𝚜𝚒𝚌𝚊ฺ͘.•🛸 ݈݇─`)
        blackmd.sendMessage(from, {audio: {url: link}, mimetype: "audio/mpeg"}, {quoted: seloctt}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
    if(budy2.toLowerCase().replace("í", "i") === `video` && isGroup) {
      link = music[AB].usus[BC].urlVideo.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_BARBA#`, API_KEY_BARBA)
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚅í𝚍𝚎𝚘ฺ͘.•🛸 ݈݇─`)
        blackmd.sendMessage(from, {video: {url: link}, mimetype: "video/mp4"}, {quoted: seloctt}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
    if(budy2.toLowerCase() === `doc` && isGroup) {
      link = music[AB].usus[BC].urlAudio.replace(`#API_KEY_ALEATORY#`, API_KEY_ALEATORY).replace(`#API_KEY_SABRINA#`, API_KEY_SABRINA).replace(`#API_KEY_BARBA#`, API_KEY_BARBA)
      nome = music[AB].usus[BC].title
      music[AB].usus.splice(BC, 1)
      fs.writeFileSync("./base de dados/music.json", JSON.stringify(music, null, 2))
      try {
        reply(`▧⃯⃟𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝙳𝚘𝚌𝚞𝚖𝚎𝚗𝚝𝚘ฺ͘.•🛸 ݈݇─`)
        blackmd.sendMessage(from, {document: {url: link}, fileName: nome+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
          return reply(downon)
        })
      } catch (e) {
        return reply(downoff)
      }
    }
  }
}

if(JSON.stringify(vdddsf).includes(from) && isGroup) {
  AB = vdddsf.map(b => b.idgp).indexOf(from)
  if(JSON.stringify(vdddsf[AB].jogadores).includes(sender)) {
    BC = vdddsf.map(a => a.idvd).indexOf("jherffeson")
    CD = vdddsf[AB].jogadores.map(i => i.id).indexOf(sender)
    if(budy2.toLowerCase() === "verdade") {
      if(vdddsf[AB].jogadores[CD].tipo == 1) {
        vdddsf[AB].jogadores.splice(CD, 1)
        fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
        sendStickerFromUrl(from, `https://telegra.ph/file/4b43ac115d66362540612.jpg`)
      } else if(vdddsf[AB].jogadores[CD].tipo <= 0) {
        alevdd = Math.floor(Math.random() * vdddsf[BC].verdades.length)
        vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].verdades[alevdd].vdd
        vdddsf[AB].jogadores[CD].tipo = 1
        fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
        reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 VERDADE 』
✓ -> ${vdddsf[BC].verdades[alevdd].vdd}

_(responda com verdade ou mentira)_`)
      }
    }
    if(budy2.toLowerCase() === "mentira") {
      vdddsf[AB].jogadores.splice(CD, 1)
      fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      sendStickerFromUrl(from, `https://telegra.ph/file/22e467ada05df439e3401.jpg`)
    }
    if(budy2.toLowerCase() === "desafio") {
      aledsf = Math.floor(Math.random() * vdddsf[BC].desafios.length)
      vdddsf[AB].jogadores[CD].vdouds = vdddsf[BC].desafios[aledsf].dsf
      vdddsf[AB].jogadores[CD].tipo = 2
      fs.writeFileSync("./armor/jogo/vdddsf.json", JSON.stringify(vdddsf, null, 2))
      reply(`\`\`\`😇 Verdade Ou Desafio 😈\`\`\`
『 DESAFIO 』
✓ -> ${vdddsf[BC].desafios[aledsf].dsf}

_(quando concluir o desafio, use ${prefix}pronto)_`)
    }
  }
}

if(body != undefined && isGroup && bcgp.length > 0) {
  AB = bcgp.map(i => i.tipo).indexOf("mensagem")
  AC = bcgp.map(i => i.tipo).indexOf("grupos")
  if(bcgp[AB].msg.length <= 0) return
  if(bcgp[AC].gps.length <= 0) return
  if(!JSON.stringify(bcgp[AC].gps).includes(from)) {
    grupo = from
    m = bcgp[AB].msg[0]
    if(m.cobrado == false) {
      msgEmMassa = m.txt
      m.cobrado = true
      fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
      for(i of somembros) {
        blackmd.sendMessage(i, {text: msgEmMassa})
      }
      await sleep(5000)
      blackmd.groupLeave(grupo)
      bcgp[AB].msg.splice(0, 1)
      fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
      if(bcgp[AB].msg.length > 0) {
        bcgp[AC].gps.push({groupId: grupo})
        fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
      } else {
        bcgp[AC].gps = []
        fs.writeFileSync("./base de funcionamento/bcgp.json", JSON.stringify(bcgp, null, 2))
      }
    }
  }
}

/*if(body != undefined && isGroup && adsgp.length > 0) {
  AA = adsgp.map(i => i.tipo).indexOf("quantidade")
  AB = adsgp.map(i => i.tipo).indexOf("grupos")
  AC = adsgp.map(i => i.tipo).indexOf("mensagens")
  if(adsgp[AB].gps.length > 0) {
    if(adsgp[AC].msgs.length > 0) {
      if(!JSON.stringify(adsgp[AB].gps).includes(from)) {
        grupo = from
        m = adsgp[AC].msgs[0]
        if(m.cobrado == false) {
          msgEmMassa = m.txt
          m.cobrado = true
          fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
          for(i = 0; i < adsgp[AA].quant; i++) {
            blackmd.sendMessage(grupo, {text: msgEmMassa})
          }
          await sleep(5000)
          blackmd.groupLeave(grupo)
          adsgp[AC].msgs.splice(0, 1)
          fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
          if(adsgp[AC].msgs.length > 0) {
            adsgp[AB].gps.push({groupId: grupo})
            fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
          } else {
            adsgp[AB].gps = []
            fs.writeFileSync("./base de funcionamento/adsgp.json", JSON.stringify(adsgp, null, 2))
          }
        }
      }
    }
  }
}*/

//início do akinator

if(isGroup && isJsonIncludes(akinator, from)) {
  AB = akinator.map(i => i.id).indexOf(from)
  if(akinator[AB].jogador == sender && Number(akinator[AB].dia) === Number(sendHours("DD"))) {
    mini = budy2.toLowerCase().replace("ã", "a")
    if(mini == "sim" || mini == "s" || mini == "nao" || mini == "n" || mini == "nao sei" || mini == "nsei" || mini == "provavelmente sim" || mini == "tlvz sim" || mini == "talvez sim" || mini == "provavelmente nao" || mini == "tlvz nao" || mini == "talvez nao") {
      if(akinator[AB].finish > 0) {
        if(mini == "sim" || mini == "s") {
          akinator.splice(AB, 1)
          saveJSON(akinator, "./armor/jogo/akinator.json")
          reply(`Sabia mlk, eu sou demais 🥳`)
        } else if(mini == "nao" || mini == "n") {
          akinator.splice(AB, 1)
          saveJSON(akinator, "./armor/jogo/akinator.json")
          reply(`Hmm não foi dessa vez... Quem sabe na próxima 🧙🏼‍♂️`)
        }
      } else {
        if(aki.progress >= 90 || aki.currentStep >= 90) {
          await aki.win()
          jogo.now = true
          akinator[AB].finish += 1
          saveJSON(akinator, "./armor/jogo/akinator.json")
          i = aki.answers[0]
          txt = `『 ${i.name}: ${i.description} 』\n🧙🏼‍♂️ Hmm, acho que o seu personagem é esse aqui... Acertei ? _(responda com "sim" ou "não", sem as aspas)_`
          sendImage(from, i.absolute_picture_path, txt, seloctt)
        } else {
          if(mini == "sim" || mini == "s") nmr = "0"
          if(mini == "nao" || mini == "n") nmr = "1"
          if(mini == "nao sei" || mini == "nsei") nmr = "2"
          if(mini == "provavelmente sim" || mini == "tlvz sim" || mini == "talvez sim") nmr = "3"
          if(mini == "provavelmente nao" || mini == "tlvz nao" || mini == "talvez nao") nmr = "4"
          per = progresso(aki.progress, 100)
          await aki.step(nmr)
          reply(`*⏤͟͟͞͞ ꦿAKINATOR* 🧙🏼‍♂️\n🔮⃤ ${aki.question}\n\n${per}`)
        }
      }
    }
  }
}

//fim do akinator

async function msgGlobal() {
  if(gbmsg[1].msg.length > 0) {
    if(gbmsg[0].gp.length > 0) {
      horacerta = moment.tz('America/Sao_Paulo').format('HH:mm')
      day = moment.tz('America/Sao_Paulo').format('DD')
      for(a of gbmsg[1].msg) {
        if(Number(a.time.replace(":", "")) === Number(horacerta.replace(":", ""))) {
          if(Number(a.save) !== Number(day)) {
            a.save = day
            fs.writeFileSync("./base de dados/gbmsg.json", JSON.stringify(gbmsg, null, 2))
            for(b of gbmsg[0].gp) {
              setTimeout(() => {
                blackmd.sendMessage(b.id, {text: a.frase})
              }, 1000)//1 segundo
            }
          }
        }
      }
    }
  }
}

msgGlobal();

async function sortTime() {
  if(sorteio.length > 0) {
    for(a of sorteio) {
      grupo = (await blackmd.groupMetadata(a.groupId)).participants
      menc = []
      if((((contarDias(sendHours(`DD/MM/YYYY`)) * 1440) + contarMin(sendHours(`HH:mm`))) >= ((contarDias(sendHours(`DD/MM/YYYY`)) * 1440) + ((Number(a.dia) !== Number(sendHours(`DD`))) ? 1440 : 0) + contarMin(a.data))) && a.start == false) {
        a.start = true
        saveJSON(sorteio, "./base de funcionamento/sorteio.json")
        if(a.participants.length > a.ganhadores) {
          txt = `\t\t\t\t\t⚠ *ATENÇÃO* ⚠\n_Iremos dar início ao sorteio de ↴_\n⇒ ${a.texto}\n_Com direito a ${a.ganhadores} ganhador${a.ganhadores != 1 ? "es" : ""}_\n\n`
          if(a.ganhadores > 1) {
            txt += `🎉🥳 _Nossos ganhadores ${tempo == "Bom dia" ? "deste dia" : tempo == "Boa tarde" ? "desta tarde" : "desta noite"} são:_`
            caixa = a.participants
            for(b = 0; b < a.ganhadores; b++) {
              pp = alerandom(caixa.length)
              txt += `\n • @${caixa[pp].split("@")[0]}`
              menc.push(caixa[pp])
              caixa.splice(pp, 1)
            }
          } else {
            usu = a.participants[alerandom(a.participants.length)]
            menc.push(usu)
            txt += `🎉🥳 _Nosso único e maior sortudo/a de hoje é:\t\t\n\t\t\t» @${usu.split("@")[0]} «`
          }
          txt += `\n\n🥰 *_PARABÉNS_*`
        } else {
          for(c of grupo) {
            if(c.admin == "admin") menc.push(c.id)
          }
        txt = `😕 Visto que dado o horário do sorteio, haviam apenas ${a.participants.length}/${a.ganhadores} participantes, não foi possível realizar o mesmo...`
        }
        blackmd.sendMessage(a.groupId, {text: txt, mentions: menc})
        AB = sorteio.map(s => s.groupId).indexOf(a.groupId)
        sorteio.splice(AB, 1)
        saveJSON(sorteio, "./base de funcionamento/sorteio.json")
      }
    }
  }
}

sortTime();

async function rentSystem() {
  if(aluguel.length > 0) {
    for( x of aluguel ) {
      if(x.save != Number(sendHours("HH"))) {
        if(x.tempo > 1) {
          x.save = Number(sendHours("HH"))
          x.tempo -= 1
          fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
          if(Number(x.tempo) === (24 * 7) || Number(x.tempo) === (24 * 3) || Number(x.tempo) === (24 * 2) || Number(x.tempo) === 24) {
            if(x.cortesia == false) sendMess(x.cliente, `Olá 👋🏽😃\nAcabo de verificar que nosso contrato no grupo ${x.nome} termina em ${Number(x.tempo) === (24 * 7) ? `1 semana (7 dias)` : Number(x.tempo) !== 24 ? `${x.tempo / 24} dias` : `24 horas (amanhã)`}... Não deixe de fechar contrato novamente com nossa equipe 📍\n_(OBS: Qualquer dúvida, contacte meu dono)_`)
          }
        } else {
          if(x.cortesia == false) {
            sendMess(x.id, `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n\`\`\`O tempo limite deste grupo acabou. Para renovação de contrato, entre em contato com meu dono:\`\`\`\nwa.me/${nmrdn.split('@')[0]}`)
            await sleep(1000)
            blackmd.sendMessage(nmrdn, {text: `Só passando pra avisar que o tempo limite do grupo ${x.nome} expirou agora... Visto que o/a @${x.cliente.split('@')[0]} não renovou o contrato, eu saí do grupo dele/a e apaguei os registros 🗑️`, mentions: [x.cliente]})
          } else {
            blackmd.sendMessage(x.id, {text: `⚠️ *TRANSMISSÃO DO BARBA* ⚠️\n\n\`\`\`O cartão cortesia 24H deste grupo expirou... Caso se veja interessado em nossos serviços, favor entrar em contato com meu dono:\`\`\`\nwa.me/${nmrdn.split('@')[0]}`})
            await sleep(1000)
            blackmd.sendMessage(nmrdn, {text: `Só passando pra avisar que o cartão cortesia do grupo ${x.nome} expirou agora... Visto que não houve alteração em meus registros, eu saí do grupo e apaguei os dados 🗑️`})
          }
          if(JSON.stringify(TMGP).includes(x.id)) {
            TG = TMGP.map(i => i.id).indexOf(x.id)
            TMGP.splice(TG, 1)
            fs.writeFileSync("./base de funcionamento/TMGP.json", JSON.stringify(TMGP))
          }
          GP = grupos.map(i => i.id).indexOf(x.id)
          grupos.splice(GP, 1)
          fs.writeFileSync("./base de funcionamento/aluguel/grupos.json", JSON.stringify(grupos, null, 2))
          RT = aluguel.map(i => i.id).indexOf(x.id)
          grupo = x.id
          aluguel.splice(RT, 1)
          fs.writeFileSync("./base de funcionamento/aluguel/aluguel.json", JSON.stringify(aluguel, null, 2))
          await sleep(4000)
          blackmd.groupLeave(grupo)
        }
      }
    }
  }
}

rentSystem();

async function cardTime() {
  for( x of cardxp ) {
    if(x.active == true) {
      if(Number(x.save) !== Number(moment.tz('America/Sao_Paulo').format("HH"))) {
        if(x.tempo > 1) {
          x.tempo -= 1
          x.save = moment.tz('America/Sao_Paulo').format("HH")
          saveJSON(cardxp, "./base de dados/cardxp.json")
        } else {
          x.cards.splice(x.mapa, 1)
          saveJSON(cardxp, "./base de dados/cardxp.json")
          x.active = false
          saveJSON(cardxp, "./base de dados/cardxp.json")
        }
      }
    }
  }
}

cardTime();

async function funcgpByM4() {
  if(funcgp.length > 0) {
    for(a of funcgp) {
      config = funcgp.map(i => i.id).indexOf(a.id)
      if(a.tabela.length > 0) {
        for(b of a.tabela) {
          if(b.tipo == 1) tgp = "ss"
          if(b.tipo == 2) tgp = "mm"
          if(b.tipo == 3) tgp = "HH"
          if(Number(b.save) !== Number(moment.tz('America/Sao_Paulo').format(tgp))) {
            b.save = Number(moment.tz('America/Sao_Paulo').format(tgp))
            fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
            if(b.tempo > 1) {
              b.tempo -= 1
              fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
            } else {
              if(b.poder == 1) {
                blackmd.groupSettingUpdate(a.id, 'announcement')
                sendMess(a.id, `[ ❗ ] O grupo foi fechado após ${b.ordem} pelo ADM ${b.nome} ❌`)
                closegp = funcgp[config].tabela.map(i => i.idfunc).indexOf(b.idfunc)
                funcgp[config].tabela.splice(closegp, 1)
                fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
              } else {
                blackmd.groupSettingUpdate(a.id, 'not_announcement')
                sendMess(a.id, `[ ❕ ] O grupo foi aberto após ${b.ordem} pelo ADM ${b.nome} ✅`)
                opengp = funcgp[config].tabela.map(i => i.idfunc).indexOf(b.idfunc)
                funcgp[config].tabela.splice(opengp, 1)
                fs.writeFileSync("./base de funcionamento/funcgp.json", JSON.stringify(funcgp, null, 2))
              }
            }
          }
        }
      }
    }
  }
}

funcgpByM4();

async function adsByMath() {
  if(ads.length != 0) {
    for(a of ads) {
      if(a.module == true) {
        for(b of a.mensagens) {
          if(b.tipo == 1) tempoAds = "ss"
          if(b.tipo == 2) tempoAds = "mm"
          if(b.tipo == 3) tempoAds = "HH"
          if(b.tipo == 4) tempoAds = "DD"
          if(Number(b.save) !== Number(moment.tz('America/Sao_Paulo').format(tempoAds))) {
            if(b.contador > 1) {
              b.save = moment.tz('America/Sao_Paulo').format(tempoAds)
              b.contador -= 1
              fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
            } else {
              b.save = moment.tz('America/Sao_Paulo').format(tempoAds)
              b.contador = b.total
              fs.writeFileSync("./base de dados/ads.json", JSON.stringify(ads, null, 2))
              if(b.midi == 0) {
                blackmd.sendMessage(a.groupId, {image: {url: b.img}, caption: b.msg, contextInfo: {
                  externalAdReply: {
                    title: NomeDoBot,
                    body: "",
                    mediaType: 1,
                    reviewType: "PHOTO",
                    thumbnailUrl: b.img,//logo do selo
                    showAdAttribution: true,//coloque false para tirar o "enviado via anúncio"
                    renderLargerThumbnail: false,//põe true caso queira o selo grande
                    sourceUrl: b.link//link do selo
                  }
                }})
              }
              if(b.midi == 1) {
                blackmd.sendMessage(a.groupId, {text: b.msg, contextInfo: {
                  externalAdReply: {
                    title: `🔎 ${NomeDoBot} 🔍`,
                    body: ``,
                    thumbnail: await getBuffer(logoslink.logo),
                    mediaType: 1,
                    reviewType: "PHOTO",
                    thumbnailUrl: b.img,//logo do selo
                    showAdAttribution: true,//coloque false para tirar o "enviado via anúncio"
                    renderLargerThumbnail: false,//põe true caso queira o selo grande
                    sourceUrl: b.link//link do selo
                  }
                }})
              }
              if(b.midi == 2) {
                blackmd.sendMessage(a.groupId, {text: b.msg})
              }
              if(b.midi == 3) {
                blackmd.sendMessage(a.groupId, {image: {url: b.img}, caption: b.msg})
              }
            }
          }
        }
      }
    }
  }
}

adsByMath();

async function avisosByMath() {
  if(avisos.length != 0) {
    for( i of avisos ) {
      if(i.groupId != "jherffeson") {
        if(i.module == true) {
          if(i.mensagens.length != 0) {
            for( w of i.mensagens ) {
              if(Number(w.tempo.replace(":", "")) === Number(moment.tz('America/Sao_Paulo').format('HHmm')) && Number(w.dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
                blackmd.sendMessage(i.groupId, {text: w.msg})
                w.dia = moment.tz('America/Sao_Paulo').format('DD')
                fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
              }
            }
          }
          BH = avisos.map(n => n.groupId).indexOf("jherffeson")
          if(i.aleatory.length != 0) {
            for( a of i.aleatory ) {
              if(Number(a.tempo.replace(":", "")) === Number(moment.tz('America/Sao_Paulo').format('HHmm')) && Number(a.dia) !== Number(moment.tz('America/Sao_Paulo').format('DD'))) {
                if(a.ativation == 1 && i.globalAleatory.length <= 1) return
                if(a.ativation == 2 && avisos[BH].mensagens.length <= 1) return
                if(Number(a.ativation) <= 1) {
                  testMsg1 = i.globalAleatory
                  testMsg2 = testMsg1[Math.floor(Math.random()*testMsg1.length)]
                } else {
                  testMsg1 = avisos[BH].mensagens
                  testMsg2 = testMsg1[Math.floor(Math.random()*testMsg1.length)]
                }
                blackmd.sendMessage(i.groupId, {text: testMsg2})
                a.dia = moment.tz('America/Sao_Paulo').format('DD')
                fs.writeFileSync("./base de dados/avisos.json", JSON.stringify(avisos, null, 2))
              }
            }
          }
        }
      }
    }
  }
}

avisosByMath();

if(body != undefined) {//by jherffeson
if(!JSON.stringify(pushnames).includes(botNumber)) {
    pushnames.push({id: botNumber, nick: NomeDoBot})
    saveJSON(pushnames, "./base de dados/pushnames.json")
  } else {
    AC = pushnames.map(i => i.id).indexOf(botNumber)
    pushnames[AC].nick = NomeDoBot
    saveJSON(pushnames, "./base de dados/pushnames.json")
  }
  if(!JSON.stringify(pushnames).includes(sender)) {
    pushnames.push({id: sender, nick: pushname})
    saveJSON(pushnames, "./base de dados/pushnames.json")
  } else {
    AB = pushnames.map(i => i.id).indexOf(sender)
    pushnames[AB].nick = pushTestName
    saveJSON(pushnames, "./base de dados/pushnames.json")
  }
}

if(budy2 === `${Number(body.split('!')[0])}!` && Number(body.split('!')[0]) > 2 && isGroup) {
  nmrX = Number(body.split('!')[0])
  nmrY = nmrX - 1
  for(i = nmrY; i > 0; i--) {
    nmrX *= i
  }
  reply(`${nmrX}`)
}

//========================================\\
}
}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_BARBA)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./start.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}
startBlack().catch(e => {
return console.log(e+" -INDEX..ERROS")
})
