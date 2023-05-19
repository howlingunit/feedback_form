import * as sql from './sql.js'

export async function send(req, res){
  const feedback = req.body;

  
  await sql.insertFeedback(feedback)

  res.json({
    ok: 'OK',
    ...req.body
  });
}

export async function getAll(req, res) {
  const data = await sql.getAll();

  res.json(data)
}