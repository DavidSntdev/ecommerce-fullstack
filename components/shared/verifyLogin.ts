export const verifyLogin = async (
  password: string,
  setError: (value: string) => void,
  setLogado: (value: boolean) => void
) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setLogado(true);
      setError("");
    } else {
      setError(data.message || "Senha errada");
    }
  } catch (err) {
    setError("Erro ao tentar fazer login");
  }
};
