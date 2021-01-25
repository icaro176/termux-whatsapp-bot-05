const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
「 *${botName}* 」

◪ *USUÁRIO INFO*
  ❏ Nome: ${pushname}
  ❏ XP: ${reqXp}
  ❏ Dinheiro: ${uangku}
  ❏ Registrado: ✔️
◪ *BOT INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Criador: ${ownerName}
  ❏ Versão: 0.0.4
◪ *SOBRE*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
NOTA: *NEM TODOS OS COMANDOS ESTÃO FUNCIONANDO, MESMO MANDANDO AGUARDAR TALVEZ NÃO FUNCIONE*
◪ *MENU*
  │
  ├─ ❏ ${prefix}logomakermenu
  ├─ ❏ ${prefix}imagemakermenu
  ├─ ❏ ${prefix}stickermakermenu
  ├─ ❏ ${prefix}searchmenu
  ├─ ❏ ${prefix}educationmenu
  ├─ ❏ ${prefix}kerangmenu
  ├─ ❏ ${prefix}downloadermenu
  ├─ ❏ ${prefix}mememenu
  ├─ ❏ ${prefix}groupmenu
  ├─ ❏ ${prefix}soundmenu
  ├─ ❏ ${prefix}musicmenu
  ├─ ❏ ${prefix}islammenu
  ├─ ❏ ${prefix}stalkmenu
  ├─ ❏ ${prefix}wibumenu
  ├─ ❏ ${prefix}18+menu
  ├─ ❏ ${prefix}funmenu
  ├─ ❏ ${prefix}todmenu
  ├─ ❏ ${prefix}informationmenu
  ├─ ❏ ${prefix}stayonscreenmenu
  ├─ ❏ ${prefix}xpmenu
  ├─ ❏ ${prefix}limitmenu
  ├─ ❏ ${prefix}ownermenu
  └─ ❏ ${prefix}othermenu`
}
exports.help = help
