const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar páginas web",
        "Um estilo de programação em Python",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de valor, sem verificar o tipo de dados",
        "Concatenação de strings",
        "Verificação de igualdade, considerando o tipo de dados",
      ],
      correta: 2
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 'Hello';",
        "var myVar = true;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Um modelo de dados para armazenar informações em um banco de dados",
        "Um conjunto de regras de estilo para páginas web",
        "Uma representação estruturada de um documento HTML que pode ser manipulada por JavaScript",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar um novo elemento ao DOM",
        "Registrar um ouvinte de eventos para responder a ações do usuário",
        "Remover um evento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar um elemento HTML para a parte superior da página",
        "Elevar a declaração de uma variável ou função para o topo do seu contexto de execução",
        "Deslocar um elemento para a esquerda na tela",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let', 'const' e 'var' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos em JavaScript",
        "let e const são formas antigas de declarar variáveis, var é mais moderno",
        "let permite reatribuição, const é para valores constantes e var é obsoleto",
      ],
      correta: 2
    },
    {
      pergunta: "Como verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "Utilizando o método 'getTypeOf'",
        "Através do operador 'type'",
        "Com o operador 'typeof'",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que chama outra função",
        "Uma função que é passada como argumento para outra função e é executada posteriormente",
        "Uma função que retorna um valor de retorno específico",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'map' em JavaScript?",
      respostas: [
        "Navegar pelo DOM",
        "Transformar cada elemento de um array e retornar um novo array",
        "Adicionar um elemento ao final de um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector ("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute("name", "pergunta- " + perguntas.indexOf(item))
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
      dt.querySelector("input").onchange = (event) => {
        const estaCorreta = event.target.value == item.correta // true or false
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
  
  
      quizItem.querySelector("dl").appendChild(dt)
    }
  
  // dentro de dl tem o dt
    quizItem.querySelector("dl dt").remove()
  
  
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)  
  }