import path from 'path';
import  {promises as fs}  from 'fs';

export default async function handler(req, res) {
  if(req.method === 'POST') {
    const jsonDirectory = path.join(process.cwd(), 'dataJson');
  const fileContents = await JSON.parse(fs.readFile(jsonDirectory + '/data.json', 'utf8'))

    res.send('ini post')
  }
  else{
  const jsonDirectory = path.join(process.cwd(), 'dataJson');
  
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  const get = JSON.parse(fileContents)
  
  res.status(200).json(get.aturan);
}
}