import bodyParser from 'body-parser'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request here
    const { jam,menit,detik,jamS,menitS,detikS } = req.body
    console.log(`jam: ${jam}`)
    res.status(200).json({ message: 'Success' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
