let stopjadibot = async (m, { conn, isOwner }) => {
  if (global.conn.user.jid == conn.user.jid || !isOwner) throw 'nothing to do here.'
  else {
    await conn.reply(m.chat, 'successfully disconnected', m)
    conn.close()
  }
}
stopjadibot.help = ['stop']
stopjadibot.tags = ['jadibot']
stopjadibot.command = /^(stop)$/i
