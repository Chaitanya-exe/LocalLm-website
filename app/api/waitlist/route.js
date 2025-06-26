import { writeFile, readFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  try {
    const { email } = await req.json();
    const filePath = path.join(process.cwd(), 'waitlist.json');

    let waitlist = [];
    try {
      const fileData = await readFile(filePath, 'utf-8');
      waitlist = JSON.parse(fileData);
    } catch {
      waitlist = [];
    }

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
    }

    if (!waitlist.includes(email)) {
      waitlist.push(email);
      await writeFile(filePath, JSON.stringify(waitlist, null, 2));
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export async function GET(req){
    try {
        const filePath = path.join(process.cwd(), 'waitlist.json');
        const fileData = await readFile(filePath, "utf8");
        const data = JSON.parse(fileData)

        return new Response(JSON.stringify({data}), {status:200});
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
    }
}
