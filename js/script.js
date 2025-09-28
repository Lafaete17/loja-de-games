//efeito do botão voltar ao Topo

// efeito do botão voltar ao topo
function topo() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

// Validação de Login
function login() {
  let logado = 0;
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  if (usuario === "teste123" && senha === "12345") {
    logado = 1;
    mostrarAlerta("✅ Login realizado com sucesso!", "success");
    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  }

  if (logado === 0) {
    mostrarAlerta(" Acesso negado. Dados incorretos!", "danger");
  }
}

// Ativar alert no botão cadastrar
function cadastro() {
  mostrarAlerta(" Cadastrado com sucesso!", "success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}


function mostrarAlerta(mensagem, tipo = "success") {
  const alertContainer = document.getElementById("alert-container");

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show mt-2" role="alert">
      ${mensagem}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fechar"></button>
    </div>
  `;

  alertContainer.append(wrapper);

  // some sozinho após 4s
  setTimeout(() => {
    wrapper.remove();
  }, 4000);
}
