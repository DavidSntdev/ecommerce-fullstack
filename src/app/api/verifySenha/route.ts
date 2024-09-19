import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { tentativa } = await req.json();

  const senhaCorreta = process.env.SENHA;

  if (!senhaCorreta) {
    return NextResponse.json(
      { erro: "Senha não definida no ambiente" },
      { status: 500 }
    );
  }

  if (tentativa === senhaCorreta) {
    return NextResponse.json({ sucesso: true }, { status: 200 });
  } else {
    return NextResponse.json(
      { erro: "Senha incorreta, tente novamente" },
      { status: 401 }
    );
  }
}
