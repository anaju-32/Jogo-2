'use strict';

const firstDecision = {
  kicker: 'Prólogo — A escolha que muda tudo',
  title: 'Dois convites. Dois caminhos.',
  text: 'A cidade abriu duas frentes de trabalho e você recebeu convites para participar das duas. No Terminal Central, uma equipe quer transformar a mobilidade do bairro. No Centro Cultural Estação, um grupo de jovens está preparando uma apresentação teatral. Os projetos acontecem ao mesmo tempo: você precisa escolher onde sua ajuda fará parte da mudança. Essa decisão define toda a sua jornada.',
  choices: [
    {
      label: 'Entrar na equipe que vai tornar o Terminal Central acessível.',
      route: 'cidade',
      result: 'Você aceita o desafio urbano. Sua jornada será acompanhar moradores, mapear barreiras nas ruas e repensar o transporte público. A partir de agora, a história seguirá o projeto Cidade para Todos.',
      points: { access: 2, participation: 1, autonomy: 1 }
    },
    {
      label: 'Trabalhar com os jovens artistas na criação de um espetáculo acessível.',
      route: 'cultura',
      result: 'Você escolhe o caminho da arte. Sua jornada será construir, junto aos artistas, uma apresentação em que pessoas diferentes possam criar, atuar e acompanhar o espetáculo. A partir de agora, a história seguirá o projeto Cultura para Todos.',
      points: { access: 1, participation: 2, autonomy: 1 }
    },
    {
      label: 'Entrar na equipe de acolhimento e comunicação do Centro Cultural Estação.',
      route: 'cultura',
      result: 'Você aceita começar pelos bastidores da cultura. Sua equipe cuidará da comunicação, da recepção e da experiência do público, trabalhando em parceria com os jovens artistas. A partir de agora, a história seguirá o projeto Cultura para Todos.',
      points: { access: 1, participation: 1, autonomy: 2 }
    }
  ]
};

// ROTA 1: CIDADE PARA TODOS — mobilidade, espaço público e transporte.
const cityScenes = [
  {
    kicker: 'Cidade para Todos • Capítulo 1',
    title: 'O mapa não mostra tudo',
    text: 'A equipe se encontra no Terminal Central. No mapa oficial, todas as ruas parecem conectadas, mas a caminhada revela calçadas estreitas, postes no meio do caminho e trechos sem piso regular. Dona Lúcia, moradora do bairro, diz que muitas vezes precisa mudar todo o trajeto para conseguir chegar ao ponto de ônibus. Como começar o diagnóstico?',
    choices: [
      {
        label: 'Percorrer o trajeto com moradores com diferentes necessidades de mobilidade.',
        result: 'O grupo encontra barreiras que não apareciam no mapa. Os moradores ajudam a definir quais problemas impedem a circulação e quais mudanças devem ser prioritárias.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Solicitar uma vistoria técnica e comparar os dados com relatos da comunidade.',
        result: 'A vistoria identifica problemas estruturais e os relatos revelam como eles afetam a vida cotidiana. A combinação das duas fontes torna o diagnóstico mais completo.',
        points: { access: 2, participation: 1, autonomy: 1 }
      },
      {
        label: 'Usar apenas o mapa da prefeitura para escolher os pontos de reforma.',
        result: 'O mapa facilita o planejamento inicial, mas não registra todas as barreiras vividas na rua. A equipe corre o risco de reformar locais que não resolvem os principais problemas.',
        points: { access: 0, participation: -1, autonomy: 0 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 2',
    title: 'Uma calçada é parte do caminho',
    text: 'A equipe encontra uma calçada interrompida por degraus e rampas de garagem muito inclinadas. Para chegar ao ponto de ônibus, algumas pessoas precisam circular pela rua. O orçamento permite reformar apenas alguns trechos nesta etapa.',
    choices: [
      {
        label: 'Criar uma rota contínua, com faixa livre, piso regular e rebaixamentos adequados.',
        result: 'O projeto prioriza continuidade e segurança. A calçada deixa de ser uma sequência de obstáculos e passa a conectar os principais destinos do bairro.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Corrigir primeiro os trechos próximos ao terminal e aos serviços essenciais.',
        result: 'A equipe define prioridades úteis para quem depende do transporte público e dos serviços locais. O restante da rota entra em um cronograma público de obras.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Construir rampas somente nas esquinas principais.',
        result: 'As esquinas melhoram, mas os trechos interrompidos continuam impedindo o deslocamento. Uma rota acessível precisa funcionar de ponta a ponta.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 3',
    title: 'A travessia precisa ser compreendida',
    text: 'Na avenida ao lado do terminal, o sinal de pedestres é rápido e não possui aviso sonoro. Pessoas com deficiência visual relatam dificuldade para saber quando atravessar; pessoas com mobilidade reduzida precisam de mais tempo para completar a travessia.',
    choices: [
      {
        label: 'Instalar sinais sonoros, visuais e tempo de travessia adequado.',
        result: 'A travessia passa a transmitir informações por mais de um meio e considera diferentes velocidades de deslocamento. O grupo também testa os equipamentos com usuários.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Aumentar o tempo do sinal e melhorar a visibilidade das indicações.',
        result: 'A mudança atende parte das necessidades e melhora a segurança geral. Ainda será necessário avaliar recursos sonoros para orientação de pessoas cegas.',
        points: { access: 1, participation: 0, autonomy: 1 }
      },
      {
        label: 'Manter o sinal atual e colocar um agente para ajudar nos horários de pico.',
        result: 'A presença de um agente pode ajudar em alguns momentos, mas não garante autonomia durante todo o dia. A solução também depende de disponibilidade permanente de funcionários.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 4',
    title: 'O embarque começa antes do ônibus',
    text: 'No terminal, a plataforma é baixa em relação a alguns veículos e a área de embarque costuma ficar lotada. Caio, que usa cadeira de rodas, conta que nem sempre consegue embarcar no primeiro ônibus porque o equipamento de acesso está quebrado ou o espaço está bloqueado.',
    choices: [
      {
        label: 'Garantir plataformas compatíveis, equipamentos em manutenção e área livre de embarque.',
        result: 'A equipe cria uma rotina de inspeção dos equipamentos e organiza o espaço para que o embarque possa acontecer com segurança e sem depender de improvisos.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Treinar motoristas e fiscais para usar corretamente os recursos de acessibilidade.',
        result: 'O treinamento reduz falhas de atendimento e melhora a orientação aos passageiros. A equipe registra que a capacitação precisa acompanhar as melhorias físicas.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Orientar passageiros a pedir ajuda quando o embarque for difícil.',
        result: 'Pedir ajuda pode ser uma escolha legítima, mas não deve ser a única forma de embarcar. A barreira estrutural continua transferindo o esforço para o passageiro.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 5',
    title: 'Informação também é transporte',
    text: 'Os painéis do terminal exibem horários em letras pequenas e os avisos de mudança de plataforma são feitos apenas por alto-falantes. Passageiros surdos, pessoas com baixa visão e visitantes que não conhecem o local perdem informações importantes.',
    choices: [
      {
        label: 'Combinar painéis legíveis, avisos sonoros e informações digitais acessíveis.',
        result: 'Os avisos passam a chegar por canais diferentes. A equipe testa contraste, tamanho das letras, compatibilidade com leitores de tela e clareza das mensagens.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Aumentar as letras dos painéis e repetir os avisos de voz.',
        result: 'A legibilidade melhora para parte do público, mas a informação ainda depende da audição. A equipe registra a necessidade de acrescentar avisos visuais simultâneos.',
        points: { access: 1, participation: 1, autonomy: 0 }
      },
      {
        label: 'Manter os painéis atuais e pedir aos funcionários que expliquem os avisos.',
        result: 'O atendimento pessoal ajuda em situações pontuais, mas não substitui informação acessível e disponível para todos ao mesmo tempo.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 6',
    title: 'Encontrar o caminho sem depender de alguém',
    text: 'O terminal tem várias plataformas, banheiros, bilheterias e saídas. As placas usam símbolos pouco claros e não há piso tátil de orientação. Visitantes acabam precisando perguntar onde tudo fica.',
    choices: [
      {
        label: 'Criar sinalização com alto contraste, símbolos compreensíveis, braille e piso tátil planejado.',
        result: 'A orientação passa a usar diferentes recursos. A equipe consulta especialistas e usuários para evitar placas confusas ou piso tátil instalado de maneira incorreta.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Instalar mapas simples nos acessos e treinar funcionários para orientar sem impor ajuda.',
        result: 'Os mapas facilitam a localização e os funcionários aprendem a perguntar antes de ajudar. A solução amplia a autonomia, embora ainda possa avançar na orientação tátil.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Colocar mais placas coloridas, sem alterar os recursos existentes.',
        result: 'A quantidade de placas aumenta, mas excesso de informação e baixo contraste podem tornar a orientação ainda mais difícil.',
        points: { access: 0, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 7',
    title: 'Serviços públicos para diferentes corpos',
    text: 'Durante a vistoria, a equipe percebe que o banheiro acessível está trancado e é usado como depósito. Há poucas áreas para sentar e não existe espaço adequado para quem precisa de mais tempo ou assistência em cuidados pessoais.',
    choices: [
      {
        label: 'Manter o banheiro acessível disponível, sinalizado e em boas condições.',
        result: 'O espaço é desocupado, recebe manutenção e passa a fazer parte de uma rotina de inspeção. A equipe também avalia os demais serviços com usuários.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Reorganizar o banheiro e instalar assentos de descanso próximos às plataformas.',
        result: 'As melhorias tornam a permanência no terminal menos cansativa. A equipe registra outras adaptações para a próxima etapa do projeto.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Deixar o banheiro trancado e entregar a chave quando alguém pedir.',
        result: 'A solução cria dependência e constrangimento. Um recurso de acessibilidade deve estar disponível, sinalizado e em condições de uso.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 8',
    title: 'Segurança em qualquer situação',
    text: 'Em um simulado, a equipe percebe que a evacuação seria comunicada apenas por alto-falantes e que algumas rotas têm obstáculos. Uma emergência exige que todos recebam a informação e consigam sair com segurança.',
    choices: [
      {
        label: 'Planejar alertas sonoros e visuais, rotas desobstruídas e treinamento inclusivo.',
        result: 'O simulado é repetido com diferentes participantes. A equipe melhora as rotas, combina procedimentos e treina os funcionários para oferecer ajuda respeitando a vontade da pessoa.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Treinar a equipe e publicar instruções claras em diferentes formatos.',
        result: 'As orientações ficam mais fáceis de consultar e os funcionários conhecem suas responsabilidades. A equipe programa um teste prático das rotas.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Manter o procedimento padrão e confiar que os funcionários ajudarão quando necessário.',
        result: 'A boa vontade não substitui um plano. Sem alertas e rotas pensados para diferentes necessidades, algumas pessoas podem ficar sem informação ou sem saída segura.',
        points: { access: -1, participation: 0, autonomy: -2 }
      }
    ]
  },
  {
    kicker: 'Cidade para Todos • Capítulo 9',
    title: 'Uma cidade acessível precisa de continuidade',
    text: 'As obras da primeira etapa estão quase concluídas. Na reunião final, a prefeitura sugere encerrar o projeto e usar o orçamento em outra área. Os moradores lembram que rampas, elevadores e sinalização precisam de manutenção, e que novas barreiras podem surgir.',
    choices: [
      {
        label: 'Criar um conselho de acompanhamento com moradores e orçamento de manutenção.',
        result: 'O projeto ganha continuidade e fiscalização social. Os moradores participam da definição das próximas prioridades e podem informar problemas ao longo do tempo.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Publicar metas, responsáveis e calendário de revisões periódicas.',
        result: 'As melhorias passam a ser acompanhadas por indicadores e prazos públicos. A transparência facilita cobrar manutenção e corrigir falhas.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Encerrar o projeto após a inauguração das obras.',
        result: 'A inauguração marca uma conquista, mas sem manutenção e avaliação as melhorias podem deixar de funcionar. A acessibilidade não é uma entrega que termina em um único dia.',
        points: { access: -1, participation: -1, autonomy: 0 }
      }
    ]
  }
];

// ROTA 2: CULTURA PARA TODOS — teatro, criação artística e acesso à cultura.
const cultureScenes = [
  {
    kicker: 'Cultura para Todos • Capítulo 1',
    title: 'O espetáculo começa ouvindo',
    text: 'No Centro Cultural Estação, um grupo de jovens prepara uma peça sobre convivência. A diretora quer definir o roteiro rapidamente, mas os participantes têm ideias diferentes sobre comunicação, personagens e formas de participar. Você propõe uma reunião aberta antes de fechar o projeto.',
    choices: [
      {
        label: 'Ouvir artistas com e sem deficiência e construir as decisões em conjunto.',
        result: 'O grupo identifica barreiras ainda na criação. Artistas com deficiência deixam de ser tratados apenas como tema da peça e passam a participar das decisões e da autoria.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Fazer uma consulta anônima e testar as ideias com parte do elenco.',
        result: 'A consulta amplia as contribuições e o teste ajuda a perceber problemas práticos. A equipe combina novas conversas para que ninguém fique fora das decisões.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Deixar a direção decidir e adaptar a peça depois, se houver reclamações.',
        result: 'O roteiro avança rapidamente, mas as necessidades do elenco e do público são consideradas tarde demais. Algumas barreiras já estarão incorporadas ao projeto.',
        points: { access: -1, participation: -1, autonomy: 0 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 2',
    title: 'Quem pode contar essa história?',
    text: 'A peça terá personagens com diferentes formas de se comunicar e se movimentar. Um estudante sugere que atores sem deficiência interpretem todos os papéis, enquanto outros defendem ampliar a participação no elenco e nas funções de bastidor.',
    choices: [
      {
        label: 'Abrir audições acessíveis e permitir diferentes formas de expressão artística.',
        result: 'O processo de seleção considera recursos de comunicação e adaptações razoáveis. O talento não fica limitado a um único modo de falar, ouvir ou se movimentar.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Convidar grupos locais e adaptar as funções conforme o interesse de cada pessoa.',
        result: 'A parceria amplia a diversidade do elenco e da produção. Cada participante pode escolher como contribuir, sem ser reduzido à sua deficiência.',
        points: { access: 1, participation: 2, autonomy: 1 }
      },
      {
        label: 'Manter o elenco original e representar a deficiência apenas com figurinos.',
        result: 'A deficiência vira um recurso visual e estereotipado, sem participação real das pessoas envolvidas. A equipe perde a oportunidade de criar uma obra mais plural.',
        points: { access: -1, participation: -2, autonomy: 0 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 3',
    title: 'O ensaio também precisa ser acessível',
    text: 'Os ensaios começam em uma sala no segundo andar, acessível apenas por escadas. Parte do elenco não consegue chegar ao espaço, e a sala tem cadeiras fixas que dificultam reorganizar o ambiente.',
    choices: [
      {
        label: 'Transferir os ensaios para uma sala acessível e reorganizável.',
        result: 'Todo o elenco consegue chegar e escolher como organizar o espaço. A produção verifica circulação, banheiro, iluminação e acesso aos bastidores.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Alternar os ensaios entre sala acessível e ensaios transmitidos online.',
        result: 'A transmissão pode ajudar em algumas atividades, mas não substitui a presença quando ela é necessária. A equipe define quais momentos exigem participação presencial e garante acesso a eles.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Manter a sala e pedir que os participantes aguardem ajuda para subir.',
        result: 'A dependência de ajuda e a escada continuam impedindo o acesso autônomo. O local precisa ser adaptado, não o participante obrigado a superar a barreira.',
        points: { access: -2, participation: -1, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 4',
    title: 'Um palco sem barreiras',
    text: 'O teatro tem um palco alto, camarins estreitos e assentos reservados apenas no fundo da plateia. Uma atriz que usa cadeira de rodas quer participar de uma cena no palco, e parte do público deseja escolher onde sentar.',
    choices: [
      {
        label: 'Criar acesso seguro ao palco, camarins utilizáveis e espaços integrados na plateia.',
        result: 'A produção adapta o palco e os bastidores e distribui espaços acessíveis em diferentes setores, sem separar o público. A atriz participa da cena conforme sua escolha.',
        points: { access: 2, participation: 2, autonomy: 2 }
      },
      {
        label: 'Montar uma plataforma modular e reservar lugares próximos às saídas.',
        result: 'A plataforma melhora o acesso à apresentação e os lugares próximos às saídas oferecem uma opção adicional. A equipe ainda avalia a circulação nos bastidores.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Adaptar a cena para que a atriz não precise subir ao palco.',
        result: 'A intenção pode parecer prática, mas retira da atriz a oportunidade de participar da cena original. A solução deve remover a barreira, não limitar o papel da artista.',
        points: { access: -1, participation: -1, autonomy: -2 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 5',
    title: 'A história precisa chegar por diferentes caminhos',
    text: 'O espetáculo terá diálogos, música e momentos importantes sem fala. O grupo percebe que parte do público pode não acompanhar tudo se a experiência depender apenas de ouvir ou enxergar a encenação.',
    choices: [
      {
        label: 'Oferecer Libras, legendas e audiodescrição, integradas à apresentação.',
        result: 'A produção planeja recursos de comunicação com profissionais e testa sua integração aos ensaios. Diferentes pessoas conseguem acompanhar informações essenciais da peça.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Disponibilizar roteiro antecipado e recursos de comunicação em sessões específicas.',
        result: 'O roteiro ajuda a preparar a experiência e sessões com recursos ampliam o acesso. A equipe planeja informar claramente os horários e as condições de cada sessão.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Deixar a compreensão da peça por conta de acompanhantes e familiares.',
        result: 'A alternativa transfere a responsabilidade ao acompanhante e impede que o público tenha acesso direto à obra. Recursos de acessibilidade devem fazer parte da produção.',
        points: { access: -1, participation: -1, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 6',
    title: 'A experiência não termina na visão e na audição',
    text: 'A peça inclui luzes intermitentes, música alta e uma cena com efeitos sonoros repentinos. Alguns espectadores podem sentir desconforto com esses estímulos. A equipe quer preservar a proposta artística sem esconder informações do público.',
    choices: [
      {
        label: 'Avisar sobre os estímulos e oferecer uma sessão com ambiente sensorial mais tranquilo.',
        result: 'O público consegue escolher a sessão mais adequada. A versão com menos estímulos mantém a narrativa e oferece opções para quem precisa de um ambiente diferente.',
        points: { access: 1, participation: 2, autonomy: 2 }
      },
      {
        label: 'Publicar avisos detalhados e criar uma área de pausa fora da sala.',
        result: 'A informação antecipada ajuda cada pessoa a decidir como participar. A área de pausa permite sair e retornar sem constrangimento.',
        points: { access: 1, participation: 1, autonomy: 2 }
      },
      {
        label: 'Manter todos os efeitos e não divulgar os estímulos para não revelar a surpresa.',
        result: 'A surpresa artística acaba impedindo que parte do público se prepare para a experiência. Avisar sobre estímulos não precisa revelar a história da peça.',
        points: { access: -1, participation: -1, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 7',
    title: 'Comprar um ingresso não pode ser uma prova',
    text: 'A divulgação das apresentações será feita nas redes sociais. O formulário de ingresso tem imagens sem descrição, campos sem identificação e exige informações pessoais que não são necessárias para a reserva.',
    choices: [
      {
        label: 'Criar uma página acessível, com formulário simples e diferentes formas de reserva.',
        result: 'O formulário passa por testes com teclado e leitor de tela. O público pode reservar sem fornecer dados excessivos e encontra informações sobre os recursos disponíveis.',
        points: { access: 2, participation: 1, autonomy: 2 }
      },
      {
        label: 'Oferecer reserva por telefone e presencialmente, além do canal digital.',
        result: 'Os canais alternativos ajudam quem não consegue usar o formulário. A equipe organiza as mesmas informações para todos os meios de atendimento.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Manter o formulário atual e pedir para alguém preencher por quem tiver dificuldade.',
        result: 'A ajuda pode ser útil quando solicitada, mas não corrige um sistema inacessível nem protege a autonomia e a privacidade de quem quer reservar sozinho.',
        points: { access: -1, participation: 0, autonomy: -1 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 8',
    title: 'A noite de estreia',
    text: 'A estreia está lotada. Na entrada, algumas pessoas não sabem onde retirar os ingressos, outras não encontram os lugares reservados e os voluntários não sabem como orientar o público sem invadir seu espaço.',
    choices: [
      {
        label: 'Treinar a equipe de recepção e sinalizar os serviços em diferentes formatos.',
        result: 'A equipe aprende a perguntar antes de oferecer ajuda, respeitar escolhas e conhecer os recursos do local. A sinalização reduz a necessidade de depender de um funcionário.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Organizar um balcão de acolhimento com informações e apoio sob solicitação.',
        result: 'O balcão facilita a chegada e oferece um ponto de referência. A equipe deixa claro que ninguém precisa justificar uma deficiência para pedir informação.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Pedir aos voluntários que conduzam todos os visitantes até seus lugares.',
        result: 'A iniciativa pode causar constrangimento e retirar a liberdade de escolha. A orientação deve estar disponível, mas cada pessoa decide se deseja recebê-la.',
        points: { access: 0, participation: -1, autonomy: -2 }
      }
    ]
  },
  {
    kicker: 'Cultura para Todos • Capítulo 9',
    title: 'A cultura continua depois dos aplausos',
    text: 'A temporada termina com boa avaliação. O Centro Cultural Estação precisa decidir se manterá as adaptações, os recursos de comunicação e a participação dos artistas com deficiência nas próximas produções. A direção considera que o projeto foi apenas uma experiência pontual.',
    choices: [
      {
        label: 'Criar uma política permanente de acessibilidade com artistas e público na decisão.',
        result: 'O centro cultural assume a acessibilidade como parte de sua programação. Os artistas e espectadores participam da avaliação e ajudam a definir melhorias para os próximos eventos.',
        points: { access: 2, participation: 2, autonomy: 1 }
      },
      {
        label: 'Registrar as adaptações e planejar recursos acessíveis para a próxima temporada.',
        result: 'A equipe transforma o aprendizado em um plano com responsáveis e prazos. A experiência deixa de depender apenas da memória de quem trabalhou no espetáculo.',
        points: { access: 1, participation: 1, autonomy: 1 }
      },
      {
        label: 'Guardar os equipamentos e repetir o formato original nas próximas peças.',
        result: 'O aprendizado não se transforma em mudança. As barreiras podem reaparecer na próxima produção, e a participação conquistada fica restrita a uma única temporada.',
        points: { access: -1, participation: -1, autonomy: 0 }
      }
    ]
  }
];

const routeEndings = {
  cidade: {
    excellent: {
      title: 'A cidade se move com todo mundo!',
      text: 'O Terminal Central se transforma em um espaço mais conectado, seguro e compreensível. As calçadas formam rotas contínuas, as travessias oferecem sinais variados e as informações chegam por diferentes canais. Moradores participam das decisões e acompanham a manutenção. Você percebe que mobilidade acessível não beneficia apenas uma pessoa: melhora o espaço público para toda a comunidade.',
      lesson: 'FINAL — CIDADE INCLUSIVA. Suas escolhas combinaram infraestrutura, informação, segurança e participação. Uma cidade acessível é aquela em que as pessoas conseguem se deslocar com dignidade e autonomia.'
    },
    developing: {
      title: 'O terminal está mudando',
      text: 'Parte das melhorias foi implementada, e o terminal se tornou mais fácil de usar. Ainda existem pontos que precisam de manutenção e avaliação. Os moradores conseguiram abrir um canal de diálogo com a prefeitura e pretendem acompanhar as próximas etapas.',
      lesson: 'FINAL — TRANSFORMAÇÃO EM ANDAMENTO. O projeto avançou, mas precisa de continuidade. Identificar as barreiras restantes e definir responsáveis é essencial para que as melhorias não parem na inauguração.'
    },
    insufficient: {
      title: 'A cidade ainda tem caminhos bloqueados',
      text: 'Algumas mudanças foram feitas, mas o percurso continua difícil para muitos moradores. A equipe entende que soluções isoladas não criam acessibilidade: ruas, travessias, informações e transporte precisam funcionar como um sistema conectado.',
      lesson: 'FINAL — REPLANEJAMENTO NECESSÁRIO. A intenção de melhorar a mobilidade não basta. É preciso avaliar o caminho completo com as pessoas que o utilizam e transformar as necessidades em ações concretas.'
    }
  },
  cultura: {
    excellent: {
      title: 'O palco é de todos!',
      text: 'A apresentação acontece com artistas diversos e recursos de acessibilidade integrados à criação. O público encontra informações claras, pode escolher como acompanhar o espetáculo e participa sem ser separado ou tratado como exceção. O Centro Cultural Estação decide manter o compromisso nas próximas temporadas.',
      lesson: 'FINAL — CULTURA INCLUSIVA. Suas escolhas mostraram que acessibilidade deve fazer parte da criação artística, dos espaços, da comunicação e da experiência do público — não ser uma adaptação improvisada no último minuto.'
    },
    developing: {
      title: 'As cortinas continuam abertas',
      text: 'O espetáculo ampliou a participação e deixou aprendizados importantes. Algumas adaptações ainda precisam ser aprimoradas, mas o Centro Cultural decidiu registrar as demandas e planejar melhorias para as próximas apresentações.',
      lesson: 'FINAL — CULTURA EM TRANSFORMAÇÃO. Houve avanços, mas a inclusão precisa ser contínua. A avaliação de artistas e espectadores ajuda a transformar uma experiência pontual em uma política cultural.'
    },
    insufficient: {
      title: 'Nem todos conseguiram assistir',
      text: 'A peça foi apresentada, mas parte do elenco e do público encontrou barreiras para participar. A equipe percebe que boa intenção não substitui acessibilidade planejada e decide rever o processo antes de produzir um novo espetáculo.',
      lesson: 'FINAL — NOVA PRODUÇÃO, NOVAS ESCUTAS. A arte só é realmente acessível quando as pessoas podem participar da criação, chegar ao espaço, compreender a obra e escolher como vivenciar a apresentação.'
    }
  }
};

const score = { access: 0, participation: 0, autonomy: 0 };
let playerName = '';
let currentDecision = 0; // 0 = primeira decisão; 1 a 9 = cenas exclusivas da rota.
let activeRoute = null;
let answered = false;

const nicknameScreen = document.getElementById('nickname-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const endgameScreen = document.getElementById('endgame-screen');
const choicesElement = document.getElementById('choices');

function showOnly(screenToShow) {
  [nicknameScreen, welcomeScreen, gameScreen, endgameScreen].forEach(screen => {
    screen.hidden = screen !== screenToShow;
  });
}

function resetScore() {
  score.access = 0;
  score.participation = 0;
  score.autonomy = 0;
  updateScore();
}

function updateScore() {
  document.getElementById('score-access').textContent = score.access;
  document.getElementById('score-participation').textContent = score.participation;
  document.getElementById('score-autonomy').textContent = score.autonomy;
}

function getCurrentScene() {
  if (currentDecision === 0) return firstDecision;
  const selectedRoute = activeRoute === 'cidade' ? cityScenes : cultureScenes;
  return selectedRoute[currentDecision - 1];
}

function formatImpact(points) {
  const names = {
    access: 'acessibilidade',
    participation: 'participação',
    autonomy: 'autonomia'
  };

  return Object.entries(points)
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${value > 0 ? '+' : ''}${value} ${names[key]}`)
    .join(' • ') || 'Sem alteração nos indicadores';
}

function updateProgress() {
  const completed = currentDecision;
  const percent = Math.round((completed / 10) * 100);
  document.getElementById('chapter-label').textContent = `Decisão ${currentDecision + 1} de 10`;
  document.getElementById('progress-percent').textContent = `${percent}%`;
  document.getElementById('progress').value = completed;
}

function showScene() {
  answered = false;
  const scene = getCurrentScene();

  updateProgress();
  document.getElementById('player-tag').textContent = `Jogador: ${playerName}`;
  document.getElementById('route-tag').textContent = activeRoute === 'cidade'
    ? 'Rota: Cidade para Todos'
    : activeRoute === 'cultura'
      ? 'Rota: Cultura para Todos'
      : 'Escolha sua história';

  document.getElementById('scene-kicker').textContent = scene.kicker;
  document.getElementById('scene-title').textContent = scene.title;
  document.getElementById('scene-text').textContent = scene.text;
  document.getElementById('choice-heading').textContent = 'O que você decide fazer?';
  document.getElementById('feedback').hidden = true;
  choicesElement.replaceChildren();

  scene.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';

    const number = document.createElement('span');
    number.className = 'choice-number';
    number.textContent = `${index + 1}.`;

    const label = document.createElement('span');
    label.textContent = choice.label;

    button.append(number, label);
    button.addEventListener('click', () => selectChoice(index));
    choicesElement.appendChild(button);
  });

  updateScore();
  document.getElementById('scene-title').focus();
}

function selectChoice(choiceIndex) {
  if (answered) return;
  answered = true;

  const scene = getCurrentScene();
  const choice = scene.choices[choiceIndex];

  // A primeira resposta determina qual história será carregada.
  if (currentDecision === 0) {
    activeRoute = choice.route;
  }

  Object.keys(score).forEach(key => {
    score[key] += choice.points[key] || 0;
  });

  updateScore();

  [...choicesElement.querySelectorAll('button')].forEach(button => {
    button.disabled = true;
  });

  document.getElementById('feedback-text').textContent = choice.result;
  document.getElementById('feedback-impact').textContent = `Indicadores: ${formatImpact(choice.points)}`;
  document.getElementById('feedback').hidden = false;

  const nextButton = document.getElementById('next-button');
  nextButton.textContent = currentDecision === 9 ? 'Ver End Game' : 'Próxima decisão';
  nextButton.focus();
}

function chooseEnding() {
  const total = score.access + score.participation + score.autonomy;
  const endings = routeEndings[activeRoute];

  if (total >= 23 && score.access >= 7 && score.participation >= 6 && score.autonomy >= 5) {
    return endings.excellent;
  }
  if (total >= 9) return endings.developing;
  return endings.insufficient;
}

function showEnding() {
  const ending = chooseEnding();
  const total = score.access + score.participation + score.autonomy;

  showOnly(endgameScreen);
  document.getElementById('ending-title').textContent = ending.title;
  document.getElementById('ending-player').textContent = `Parabéns, ${playerName}! Você concluiu a rota ${activeRoute === 'cidade' ? 'Cidade para Todos' : 'Cultura para Todos'}.`;
  document.getElementById('ending-text').textContent = ending.text;
  document.getElementById('lesson-text').textContent = ending.lesson;

  const scoreElement = document.getElementById('ending-score');
  scoreElement.replaceChildren();

  [
    ['Acessibilidade', score.access],
    ['Participação', score.participation],
    ['Autonomia', score.autonomy],
    ['Total', total]
  ].forEach(([name, value]) => {
    const item = document.createElement('span');
    const strong = document.createElement('strong');
    strong.textContent = value;
    item.append(`${name}: `, strong);
    scoreElement.appendChild(item);
  });

  document.getElementById('ending-title').focus();
}

// Cadastro do nickname e transição para a cena de boas-vindas.
document.getElementById('nickname-form').addEventListener('submit', event => {
  event.preventDefault();
  const nicknameInput = document.getElementById('nickname');
  const cleanName = nicknameInput.value.trim();

  if (cleanName.length < 2) {
    nicknameInput.setCustomValidity('Digite um nickname com pelo menos 2 caracteres.');
    nicknameInput.reportValidity();
    return;
  }

  nicknameInput.setCustomValidity('');
  playerName = cleanName;
  document.getElementById('welcome-player').textContent = `Boas-vindas, ${playerName}!`;
  showOnly(welcomeScreen);
  document.getElementById('welcome-title').focus();
});

document.getElementById('nickname').addEventListener('input', event => {
  event.currentTarget.setCustomValidity('');
});

// Início da aventura.
document.getElementById('start-button').addEventListener('click', () => {
  resetScore();
  currentDecision = 0;
  activeRoute = null;
  showOnly(gameScreen);
  showScene();
});

// Avanço entre as cenas e finalização após a décima decisão.
document.getElementById('next-button').addEventListener('click', () => {
  if (currentDecision === 9) {
    document.getElementById('progress').value = 10;
    document.getElementById('progress-percent').textContent = '100%';
    showEnding();
    return;
  }

  currentDecision += 1;
  showScene();
});

// Recomeça a jornada com o mesmo nickname e permite escolher outra rota.
document.getElementById('restart-button').addEventListener('click', () => {
  resetScore();
  currentDecision = 0;
  activeRoute = null;
  showOnly(gameScreen);
  showScene();
});

// Permite cadastrar outro jogador.
document.getElementById('new-player-button').addEventListener('click', () => {
  resetScore();
  currentDecision = 0;
  activeRoute = null;
  playerName = '';
  document.getElementById('nickname').value = '';
  showOnly(nicknameScreen);
  document.getElementById('nickname').focus();
});
