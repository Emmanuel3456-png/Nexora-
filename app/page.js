import fs from 'fs';
import path from 'path';

export default function Page() {
  const htmlPath = path.join(process.cwd(), 'public', 'index.html');
  let html = '';
  try {
    html = fs.readFileSync(htmlPath, 'utf8');
  } catch {
    html = '<h1>NEXORA - Built by Emmanuel Abraham & Njoku</h1><p>Loading...</p>';
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
