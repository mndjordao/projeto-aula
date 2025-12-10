⏰ Relógio (Claro/Escuro)

Este projeto simples foi desenvolvido como parte da Unidade 1 da disciplina de **Modern Web**. Ele demonstra a integração fundamental entre HTML, CSS e JavaScript para criar uma aplicação web dinâmica e interativa.

🚀 Funcionalidades Principais

* **Relógio em Tempo Real:** Exibe a hora atual (HH:MM:SS) e a data completa, atualizando a cada segundo.
* **Alternância de Tema:** Permite ao usuário trocar entre o modo **Claro (Light Mode)** e o modo **Escuro (Dark Mode)** com um clique.
* **Transição Suave:** Utiliza a propriedade `transition` do CSS para garantir uma animação elegante na mudança de tema.
* **Favicon Personalizado:** Adicionado ícone na aba do navegador para melhor identificação.

🛠️ Tecnologias Utilizadas

| Tecnologia | Função no Projeto |

| **HTML5** | Estrutura semântica da página (`<div>`, `<button>`, `<head>`, etc.). |
| **CSS3** | Estilização, `Box Model`, layout centralizado e classes de tema (`.light-mode` e `.dark-mode`). |
| **JavaScript (ES6+)**| Lógica de comportamento, uso de `setInterval`, `addEventListener` e manipulação do DOM (`textContent` e `classList`). |

⚙️ Como a Interatividade Funciona

1.  **Relógio (`script.js`):**
    * A função `atualizarRelogio()` é chamada a cada **1000 milissegundos** utilizando `setInterval()`.
    * Ela cria um novo objeto `Date()`, formata a hora e a data, e injeta o resultado nos elementos `$<\#relogio>$` e `$<\#data>$` através de `textContent` (Manipulação do DOM).

2.  **Troca de Tema (`script.js` e `style.css`):**
    * O JavaScript usa `addEventListener('click', ...)` no botão de alternância.
    * Quando clicado, ele verifica a classe atual do `$<body>$`.
    * Utiliza `$classList.remove()$` e `$classList.add()$` para alternar entre as classes `light-mode` e `dark-mode` no elemento `$<body>$`.
    * O **CSS** com a propriedade `transition` no `$<body>$` detecta essa mudança de classe e aplica o efeito suave de cores.


🔮 Próximos Passos

* **Integração de Clima:** Finalizar a integração com a API OpenWeatherMap para exibir a temperatura e condições reais.
* **Local Storage:** Salvar a preferência de tema do usuário (claro/escuro) no `localStorage` para que ela persista após o recarregamento da página.
