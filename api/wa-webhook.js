// WhatsApp Cloud API webhook (Hancı Global).
// Phase 1 (diagnostic): only logs incoming messages and delivery statuses to Vercel logs.
// No automatic replies are sent from here yet.

const VERIFY_TOKEN = process.env.WA_VERIFY_TOKEN || 'hanci-05d759e61ca367fd260c3761';

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const q = req.query || {};
    if (q['hub.mode'] === 'subscribe' && q['hub.verify_token'] === VERIFY_TOKEN) {
      res.status(200).send(q['hub.challenge']);
    } else {
      res.status(403).send('forbidden');
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
      for (const entry of body.entry || []) {
        for (const change of entry.changes || []) {
          const v = change.value || {};
          for (const s of v.statuses || []) {
            console.log('[WA_STATUS]', JSON.stringify({
              id: s.id, status: s.status, to: s.recipient_id, ts: s.timestamp,
              errors: s.errors, pricing: s.pricing
            }));
          }
          for (const m of v.messages || []) {
            console.log('[WA_MSG]', JSON.stringify({ from: m.from, type: m.type, ts: m.timestamp }));
          }
          if (change.field && change.field !== 'messages') {
            console.log('[WA_EVENT]', change.field, JSON.stringify(v).slice(0, 2000));
          }
          // Coexistence: messages sent from the phone app arrive as smb_message_echoes
        }
      }
    } catch (e) {
      console.log('[WA_ERR]', e.message);
    }
    res.status(200).send('ok');
    return;
  }

  res.status(405).send('method not allowed');
};
