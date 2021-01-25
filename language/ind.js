exports.noregis = () => {
        return `*「 AINDA NÃO REGISTRADO 」*\n\n*como se registrar ${prefix}register nome|idade* \n*Exemplo: ${prefix}register SETH|999*`
}

exports.rediregis = () => {
        return `*「 JÁ REGISTRADO 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto/texto em branco*`
}

exports.clears = () => {
        return`*limpado tudo com sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você não entendeu a mensagem.  significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DADOS 」*\n\nvocê se registrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Hora do Reistro : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTA : \nNÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpa ${pushname} você não é o dono*`
}

exports.limitend = (pushname) => {
        return`*Desculpa ${pushname} seu limite de hoje expirou*\n*O limite é zerado a cada 24H*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 SEU LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA : limite serve para você conseguir usar os comandos :v`
}

exports.satukos = () => {
        return`*Adicionar 1/ativar ou 0/desativar parâmetros*`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
