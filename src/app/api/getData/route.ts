import { NextResponse } from 'next/server';
import fs from "fs/promises";
import path from 'path';

export async function GET() {
  const caminho = path.join(process.cwd(), "src", 'data');
  
  try{
    const arquivo = await fs.readFile(path.join(caminho, "database.json") , "utf-8");

    const arquivoJson = JSON.parse(arquivo);
    
    return NextResponse.json(arquivoJson);

  } catch (error) {
    return NextResponse.json({mensage: "arquivo não encontrado" , error} , {status : 500})
  }
}

