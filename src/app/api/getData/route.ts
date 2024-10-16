import { NextResponse } from 'next/server';
import fs from "fs/promises";
import path from 'path';

export async function GET() {
  const caminho = path.join(process.cwd(), "src", 'data');

  try {
    const arquivo = await fs.readFile(path.join(caminho, "database.json"), "utf-8");
    const arquivoJson = JSON.parse(arquivo);

    const response = NextResponse.json(arquivoJson);

    response.headers.set('Access-Control-Allow-Origin', 'https://portifolio-alpha-green.vercel.app');
    response.headers.set('Access-Control-Allow-Methods', 'GET');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;

  } catch (error) {

    const response = NextResponse.json({ message: "Arquivo não encontrado", error }, { status: 500 });

    response.headers.set('Access-Control-Allow-Origin', 'https://portifolio-alpha-green.vercel.app');
    response.headers.set('Access-Control-Allow-Methods', 'GET');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return response;
  }
}

