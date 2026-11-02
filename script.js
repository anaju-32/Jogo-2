// Cada objeto abaixo representa uma das 10 bifurcações do jogo.
    // Toda bifurcação possui exatamente três escolhas.
    const scenes = [
      {
        kicker: "Capítulo 1 — Planejamento",
        title: "Antes de desenhar, é preciso ouvir",
        text: "A equipe se reúne para planejar o festival. Ravi, que usa cadeira de rodas, aponta que a praça tem desníveis. Bia, uma fotógrafa surda, pergunta como acompanhará os anúncios do palco. Tomás, que tem baixa visão, comenta que costuma ter dificuldade para localizar espaços em eventos. O orçamento é limitado. Qual será o primeiro passo?",
        choices: [
          {
            label: "Convidar pessoas com deficiência para decidir junto com a equipe.",
            result: "Ravi, Bia e Tomás participam da organização desde o início. Eles identificam prioridades que a equipe não havia percebido e ajudam a avaliar as soluções.",
            points: { access: 1, participation: 2, autonomy: 0 }
          },
          {
            label: "Enviar uma consulta acessível e organizar uma reunião aberta.",
            result: "A consulta permite que mais pessoas contribuam no próprio ritmo. A reunião transforma as respostas em prioridades, embora parte das necessidades ainda precise ser investigada durante a preparação.",
            points: { access: 1, participation: 1, autonomy: 1 }
          },
          {
            label: "Deixar o planejamento apenas com a equipe e apresentar tudo pronto depois.",
            result: "A equipe ganha tempo, mas toma decisões sem ouvir quem enfrentará as barreiras. Algumas soluções parecem boas no papel e podem não funcionar na prática.",
            points: { access: 0, participation: -1, autonomy: 0 }
          }
        ]
      },
      {
        kicker: "Capítulo 2 — A chegada",
        title: "O caminho até a praça",
        text: "Na visita técnica, vocês encontram uma calçada irregular, um degrau na entrada principal e pouco espaço para circulação. Ravi explica que uma entrada alternativa não deve obrigar pessoas com mobilidade reduzida a fazer um percurso maior ou entrar pelos fundos.",
        choices: [
          {
            label: "Mapear a rota com usuários e contratar uma avaliação técnica.",
            result: "A equipe identifica os desníveis, a largura necessária para circulação e os pontos de descanso. A rota acessível passa a ser parte do caminho principal, e não uma entrada separada.",
            points: { access: 2, participation: 0, autonomy: 1 }
          },
          {
            label: "Instalar uma rampa modular e testar inclinação, largura e segurança.",
            result: "A solução temporária resolve parte do problema, desde que seja estável, tenha inclinação adequada e não bloqueie a passagem. A equipe agenda um teste antes do festival.",
            points: { access: 2, participation: 0, autonomy: 0 }
          },
          {
            label: "Usar a entrada de serviço e pedir que voluntários ajudem quem precisar.",
            result: "A ajuda pode ser bem-intencionada, mas não substitui uma rota acessível. A entrada separada reduz a autonomia e transmite a ideia de que algumas pessoas são visitantes de segunda categoria.",
            points: { access: -1, participation: -1, autonomy: -1 }
          }
        ]
      },
      {
        kicker: "Capítulo 3 — Comunicação",
        title: "O palco também precisa conversar",
        text: "Bia será responsável por uma exposição de fotografias. Ela percebe que a programação prevê apresentações com falas, avisos de última hora e debates. A equipe precisa garantir que as informações não dependam apenas da audição.",
        choices: [
          {
            label: "Garantir intérprete de Libras e legendas nas atividades do palco.",
            result: "Bia e outras pessoas surdas conseguem acompanhar as apresentações. A equipe também combina boa iluminação para o intérprete e orienta os apresentadores a usar o microfone.",
            points: { access: 1, participation: 2, autonomy: 0 }
          },
          {
            label: "Projetar os avisos e disponibilizar resumos escritos das atividades.",
            result: "Os avisos importantes ficam visíveis e podem ser consultados. É um avanço, mas a equipe reconhece que textos não substituem a interpretação em Libras para quem a utiliza.",
            points: { access: 0, participation: 2, autonomy: 0 }
          },
          {
            label: "Usar apenas caixas de som e pedir que alguém repita os avisos depois.",
            result: "As informações continuam inacessíveis no momento em que acontecem. Bia perde oportunidades de participar das conversas e de acompanhar mudanças na programação.",
            points: { access: -1, participation: -1, autonomy: 0 }
          }
        ]
      },
      {
        kicker: "Capítulo 4 — Orientação",
        title: "Como encontrar cada espaço?",
        text: "A praça terá palco, banheiros, alimentação, oficinas e área de descanso. Tomás explica que placas pequenas, com pouco contraste, dificultam sua orientação. Outras pessoas também podem ter dificuldade para compreender mapas confusos ou encontrar informações.",
        choices: [
          {
            label: "Criar placas grandes, contrastantes, táteis e um mapa digital acessível.",
            result: "A sinalização combina mais de um recurso. Pessoas com baixa visão podem identificar melhor os espaços, enquanto o mapa digital amplia as possibilidades de consulta.",
            points: { access: 2, participation: 0, autonomy: 1 }
          },
          {
            label: "Instalar mapas simples nas entradas e oferecer orientação sob demanda.",
            result: "Os mapas ajudam na localização, e voluntários treinados podem orientar quem solicitar ajuda sem tocar ou conduzir ninguém sem consentimento.",
            points: { access: 1, participation: 0, autonomy: 1 }
          },
          {
            label: "Espalhar cartazes pequenos usando cores diferentes para cada área.",
            result: "As cores ajudam algumas pessoas, mas não resolvem o problema para quem tem baixa visão ou daltonismo. Informações importantes continuam difíceis de encontrar.",
            points: { access: -1, participation: 0, autonomy: 0 }
          }
        ]
      },
      {
        kicker: "Capítulo 5 — Inscrição",
        title: "A inscrição não pode ser uma barreira",
        text: "As oficinas terão vagas limitadas. A inscrição será divulgada pela internet, mas nem todos usam os mesmos dispositivos ou tecnologias. Um formulário mal construído pode impedir o acesso antes mesmo de a pessoa chegar ao evento.",
        choices: [
          {
            label: "Criar um formulário testado com teclado e leitor de tela.",
            result: "A equipe testa a navegação, os rótulos dos campos e as mensagens de erro. O formulário usa linguagem simples e não exige que ninguém informe um diagnóstico para se inscrever.",
            points: { access: 2, participation: 0, autonomy: 1 }
          },
          {
            label: "Oferecer inscrição presencial e por telefone, além da opção online.",
            result: "Quem não consegue ou não deseja usar o formulário digital ainda pode garantir uma vaga. A equipe organiza os canais para que todos recebam as mesmas informações.",
            points: { access: 0, participation: 0, autonomy: 2 }
          },
          {
            label: "Divulgar somente um formulário genérico nas redes sociais.",
            result: "A equipe economiza tempo, mas o formulário pode não funcionar com tecnologias assistivas e exclui quem não consegue utilizá-lo.",
            points: { access: -1, participation: -1, autonomy: 0 }
          }
        ]
      },
      {
        kicker: "Capítulo 6 — Experiência sensorial",
        title: "Nem todo mundo vive o som do mesmo jeito",
        text: "O festival terá música, luzes e bastante circulação. Algumas pessoas podem sentir desconforto com ruídos intensos, iluminação forte ou aglomeração. A equipe discute como oferecer opções sem impedir que ninguém participe.",
        choices: [
          {
            label: "Criar uma área tranquila e informar previamente os estímulos de cada atividade.",
            result: "A área de descanso oferece uma alternativa para quem precisar de uma pausa. A programação informa horários de maior ruído e permite que cada pessoa escolha como participar.",
            points: { access: 0, participation: 1, autonomy: 2 }
          },
          {
            label: "Organizar horários com menos estímulos e sinalizar locais de pausa.",
            result: "O público consegue planejar a visita com mais previsibilidade. A equipe também combina com os artistas avisos antes de efeitos sonoros ou luminosos intensos.",
            points: { access: 0, participation: 0, autonomy: 2 }
          },
          {
            label: "Manter a programação sem mudanças e deixar que cada pessoa se adapte.",
            result: "A decisão ignora que o ambiente pode criar uma barreira real. Dizer que alguém deve simplesmente se adaptar transfere toda a responsabilidade para o visitante.",
            points: { access: 0, participation: -1, autonomy: -1 }
          }
        ]
      },
      {
        kicker: "Capítulo 7 — Atividades",
        title: "Participar não é fazer tudo do mesmo jeito",
        text: "Uma oficina de arte propõe que cada participante pinte um mural coletivo. A organização percebe que uma única forma de realizar a atividade pode excluir pessoas com diferentes habilidades motoras, sensoriais ou formas de comunicação.",
        choices: [
          {
            label: "Oferecer formas variadas de criar: pintar, escrever, apontar ou escolher imagens.",
            result: "Cada pessoa pode contribuir de um jeito. Os materiais ficam ao alcance dos participantes, e as adaptações são apresentadas como opções, não como obrigações.",
            points: { access: 0, participation: 2, autonomy: 1 }
          },
          {
            label: "Disponibilizar apoio individual quando a pessoa solicitar.",
            result: "O apoio é oferecido com consentimento, sem presumir incapacidade. A equipe também mantém alternativas para que a pessoa continue fazendo suas próprias escolhas.",
            points: { access: 0, participation: 2, autonomy: 0 }
          },
          {
            label: "Manter uma única instrução e tratar todos exatamente da mesma forma.",
            result: "Tratar todos de maneira idêntica parece justo, mas ignora barreiras diferentes. Igualdade de direitos exige condições para que todos possam participar.",
            points: { access: 0, participation: -1, autonomy: -1 }
          }
        ]
      },
      {
        kicker: "Capítulo 8 — Informação",
        title: "A programação precisa chegar a todos",
        text: "Faltam poucos dias para o festival. A equipe está preparando o guia com horários, localização das atividades e orientações. O material precisa ser útil tanto no celular quanto no espaço do evento.",
        choices: [
          {
            label: "Publicar um guia digital compatível com leitor de tela e linguagem simples.",
            result: "O guia pode ser ampliado, lido por tecnologias assistivas e consultado antes da visita. A equipe inclui títulos claros, descrição de imagens relevantes e informações objetivas.",
            points: { access: 1, participation: 2, autonomy: 0 }
          },
          {
            label: "Produzir versões impressas em letras grandes e uma versão em áudio.",
            result: "As versões ampliam o acesso para públicos diferentes. A equipe mantém também uma versão digital acessível para que as informações possam ser atualizadas.",
            points: { access: 2, participation: 0, autonomy: 1 }
          },
          {
            label: "Distribuir apenas panfletos coloridos com letras pequenas.",
            result: "O material chama atenção, mas não é legível para parte do público e não oferece alternativa de consulta. A informação existe, porém não chega a todos.",
            points: { access: -1, participation: 0, autonomy: 0 }
          }
        ]
      },
      {
        kicker: "Capítulo 9 — Segurança",
        title: "A saída também precisa ser acessível",
        text: "Durante um teste, a equipe percebe que as orientações de emergência seriam dadas apenas por alto-falantes. Além disso, alguns caminhos ficam bloqueados por mesas e equipamentos. Um evento acessível precisa prever situações de risco.",
        choices: [
          {
            label: "Testar rotas com os participantes e combinar alertas visuais e sonoros.",
            result: "A equipe desobstrui as rotas, treina voluntários e testa os alertas. O plano considera diferentes formas de perceber avisos e de deixar o local com segurança.",
            points: { access: 1, participation: 0, autonomy: 2 }
          },
          {
            label: "Treinar a equipe e divulgar um procedimento de evacuação claro.",
            result: "Os voluntários sabem como agir e como oferecer ajuda sem agarrar ou mover alguém sem consentimento, sempre respeitando o plano de emergência.",
            points: { access: 0, participation: 0, autonomy: 2 }
          },
          {
            label: "Usar apenas as instruções gerais transmitidas pelos alto-falantes.",
            result: "Pessoas que não escutam os avisos podem não perceber o perigo. O plano também deixa de considerar rotas e obstáculos que afetam a circulação.",
            points: { access: -1, participation: 0, autonomy: -2 }
          }
        ]
      },
      {
        kicker: "Capítulo 10 — Legado",
        title: "O festival termina. O compromisso não.",
        text: "O evento está pronto para acontecer. A equipe precisa decidir o que fará depois: a acessibilidade será mantida como parte da política cultural do bairro ou ficará restrita a este festival? O orçamento do próximo ano será discutido em breve.",
        choices: [
          {
            label: "Criar um grupo de acompanhamento com pessoas com deficiência e verba permanente.",
            result: "A participação continua depois do evento. O grupo poderá avaliar as melhorias, cobrar manutenção e ajudar a planejar as próximas atividades culturais.",
            points: { access: 1, participation: 2, autonomy: 0 }
          },
          {
            label: "Corrigir as falhas urgentes e publicar um plano com prazos e responsáveis.",
            result: "A equipe assume compromissos verificáveis. A publicação dos prazos permite que o bairro acompanhe o que foi resolvido e o que ainda precisa mudar.",
            points: { access: 2, participation: 1, autonomy: 0 }
          },
          {
            label: "Priorizar a decoração e recolher reclamações somente depois do evento.",
            result: "O festival pode parecer bem organizado, mas problemas previsíveis permanecem. Esperar que as pessoas enfrentem as barreiras para só então agir não é planejamento inclusivo.",
            points: { access: -1, participation: -1, autonomy: 0 }
          }
        ]
      }
    ];

    const score = { access: 0, participation: 0, autonomy: 0 };
    let currentScene = 0;
    let answered = false;

    const intro = document.getElementById("intro");
    const game = document.getElementById("game");
    const ending = document.getElementById("ending");
    const choicesElement = document.getElementById("choices");

    function updateScore() {
      document.getElementById("score-access").textContent = score.access;
      document.getElementById("score-participation").textContent = score.participation;
      document.getElementById("score-autonomy").textContent = score.autonomy;
    }

    function formatImpact(points) {
      const names = {
        access: "acessibilidade",
        participation: "participação",
        autonomy: "autonomia"
      };
      return Object.entries(points)
        .filter(([, value]) => value !== 0)
        .map(([key, value]) => `${value > 0 ? "+" : ""}${value} ${names[key]}`)
        .join("  •  ") || "Sem alteração nos indicadores";
    }

    function showScene() {
      answered = false;
      const scene = scenes[currentScene];
      const number = currentScene + 1;
      document.getElementById("chapter-label").textContent = `Decisão ${number} de ${scenes.length}`;
      document.getElementById("progress-percent").textContent = `${Math.round((currentScene / scenes.length) * 100)}%`;
      document.getElementById("progress").value = currentScene;
      document.getElementById("scene-kicker").textContent = scene.kicker;
      document.getElementById("scene-title").textContent = scene.title;
      document.getElementById("scene-text").textContent = scene.text;
      document.getElementById("choice-heading").textContent = "O que você decide fazer?";
      document.getElementById("feedback").hidden = true;
      choicesElement.replaceChildren();

      scene.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-button";
        button.innerHTML = `<span class="choice-number">${index + 1}.</span>`;
        const label = document.createElement("span");
        label.textContent = choice.label;
        button.appendChild(label);
        button.addEventListener("click", () => selectChoice(index));
        choicesElement.appendChild(button);
      });

      updateScore();
      document.getElementById("scene-title").focus();
    }

    function selectChoice(choiceIndex) {
      if (answered) return;
      answered = true;
      const choice = scenes[currentScene].choices[choiceIndex];
      Object.keys(score).forEach(key => { score[key] += choice.points[key] || 0; });
      updateScore();
      [...choicesElement.querySelectorAll("button")].forEach(button => { button.disabled = true; });
      document.getElementById("feedback-text").textContent = choice.result;
      document.getElementById("feedback-impact").textContent = `Indicadores: ${formatImpact(choice.points)}`;
      document.getElementById("feedback").hidden = false;
      const nextButton = document.getElementById("next-button");
      nextButton.textContent = currentScene === scenes.length - 1 ? "Ver meu final" : "Próxima decisão";
      nextButton.focus();
    }

    function showEnding() {
      game.hidden = true;
      ending.hidden = false;
      const total = score.access + score.participation + score.autonomy;
      let title, text, lesson;

      if (total >= 22 && score.access >= 6 && score.participation >= 6 && score.autonomy >= 5) {
        title = "A praça é de todos!";
        text = "O festival acontece com rotas acessíveis, comunicação em diferentes formatos, atividades flexíveis e uma equipe preparada. Ravi circula com autonomia, Bia acompanha as apresentações e Tomás encontra os espaços com segurança. O mais importante: as pessoas com deficiência participaram das decisões e continuarão acompanhando as próximas edições.";
        lesson = "FINAL 1 — INCLUSÃO COMO COMPROMISSO. Suas escolhas combinaram acessibilidade, participação e autonomia. O resultado não dependeu de uma única adaptação, mas de um planejamento que considerou diferentes barreiras desde o início.";
      } else if (total >= 15) {
        title = "Um festival em transformação";
        text = "O festival recebe muitas pessoas e várias barreiras foram removidas. Ainda há pontos que precisam melhorar, mas a equipe reconhece as falhas, registra as demandas e estabelece novas metas com o bairro. A acessibilidade deixa de ser tratada como um favor e passa a fazer parte do planejamento.";
        lesson = "FINAL 2 — AVANÇOS COM PENDÊNCIAS. Houve progresso, mas inclusão exige continuidade. Uma boa próxima etapa é identificar qual indicador ficou mais baixo e elaborar ações concretas para fortalecê-lo.";
      } else if (total >= 7) {
        title = "A festa aconteceu, mas nem todos participaram";
        text = "O festival foi realizado, porém algumas pessoas encontraram obstáculos para chegar, receber informações ou participar das atividades. Depois do evento, a equipe percebe que soluções improvisadas não substituem planejamento, consulta e manutenção.";
        lesson = "FINAL 3 — ACESSIBILIDADE INSUFICIENTE. A intenção de incluir não basta. É necessário identificar barreiras físicas, comunicacionais, digitais e atitudinais antes que elas impeçam a participação.";
      } else {
        title = "Uma praça com portas ainda fechadas";
        text = "O evento terminou, mas muitas barreiras permaneceram. A equipe entende que tratar todas as pessoas exatamente da mesma maneira não garante igualdade de participação. O bairro cobra mudanças e a organização precisa recomeçar o planejamento ouvindo quem foi deixado de fora.";
        lesson = "FINAL 4 — HORA DE REPLANEJAR. A história mostra o efeito acumulado de decisões que ignoram necessidades diferentes. Acessibilidade deve estar presente desde o projeto, e não ser improvisada depois das reclamações.";
      }

      document.getElementById("ending-title").textContent = title;
      document.getElementById("ending-text").textContent = text;
      document.getElementById("lesson-text").textContent = lesson;
      const scoreElement = document.getElementById("ending-score");
      scoreElement.replaceChildren();
      [
        ["Acessibilidade", score.access],
        ["Participação", score.participation],
        ["Autonomia", score.autonomy],
        ["Total", total]
      ].forEach(([name, value]) => {
        const item = document.createElement("span");
        const strong = document.createElement("strong");
        strong.textContent = value;
        item.append(`${name}: `, strong);
        scoreElement.appendChild(item);
      });
      document.getElementById("ending-title").focus();
    }

    document.getElementById("start-button").addEventListener("click", () => {
      intro.hidden = true;
      game.hidden = false;
      currentScene = 0;
      showScene();
    });

    document.getElementById("next-button").addEventListener("click", () => {
      currentScene += 1;
      if (currentScene < scenes.length) showScene();
      else showEnding();
    });

    document.getElementById("restart-button").addEventListener("click", () => {
      score.access = 0;
      score.participation = 0;
      score.autonomy = 0;
      currentScene = 0;
      ending.hidden = true;
      intro.hidden = false;
      updateScore();
      document.getElementById("start-button").focus();
    });
