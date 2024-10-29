// MÓDULO 1 QUESTÃO 1
var resposta = "B1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps = $("input[name=questao1]:checked");
    if (resps.length) {
        $("#feedback1").removeClass("escondeFeedback")
        resps.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "B1") {
            $("#feedback1").addClass("resposta-incorreta")
            $("#feedback1").removeClass("resposta-correta")
        } else {
            $("#feedback1").removeClass("resposta-incorreta")
            $("#feedback1").addClass("resposta-correta")
        }

        if (value === "B1") {
            $("#B1").addClass("resposta-correta")
            $("#A1").removeClass("resposta-incorreta")
            $("#C1").removeClass("resposta-incorreta")
            $("#D1").removeClass("resposta-incorreta")
        } else if (value === "A1") {
            $("#B1").removeClass("resposta-correta")
            $("#A1").addClass("resposta-incorreta")
            $("#C1").removeClass("resposta-incorreta")
            $("#D1").removeClass("resposta-incorreta")
        } else if (value === "C1") {
            $("#B1").removeClass("resposta-correta")
            $("#A1").removeClass("resposta-incorreta")
            $("#C1").addClass("resposta-incorreta")
            $("#D1").removeClass("resposta-incorreta")
        } else if (value === "D1") {
            $("#B1").removeClass("resposta-correta")
            $("#A1").removeClass("resposta-incorreta")
            $("#C1").removeClass("resposta-incorreta")
            $("#D1").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta == value ? mensagem = "Isso mesmo! A resposta correta é a letra <b>B</b>! Ela demonstra uma visão abrangente do conceito de &quot;Uma Só Saúde&quot;, ao envolver o trabalho em diferentes níveis (local, nacional e global) para alcançar a saúde ideal para o ambiente, os animais e as pessoas. Essa abordagem multidimensional é essencial para lidar com as complexas interações entre a saúde humana, animal e ambiental."
            : mensagem = "Neste caso a resposta correta é a letra <b>B</b>, pois embora os aspectos citados em sua resposta sejam importantes na consolidação da definição de Uma Só Saúde, a articulação de trabalho em diferentes níveis (local, nacional e global) tem por objetivo alcançar a saúde ideal para a tríade ambiente, animais e pessoas.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 1 QUESTÃO 2
var resposta2 = "A2"; // Resposta correta
$("input[name=questao2]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps2 = $("input[name=questao2]:checked");
    if (resps2.length) {
        $("#feedback2").removeClass("escondeFeedback")
        resps2.each(function () {
            // concatena os values
            value += $(this).val();
        });
        // Altera cor mensagem da resposta
        if (value !== "A2") {
            $("#feedback2").addClass("resposta-incorreta")
            $("#feedback2").removeClass("resposta-correta")
        } else {
            $("#feedback2").removeClass("resposta-incorreta")
            $("#feedback2").addClass("resposta-correta")
        }

        if (value === "A2") {
            $("#A2").addClass("resposta-correta")
            $("#B2").removeClass("resposta-incorreta")
            $("#C2").removeClass("resposta-incorreta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-correta")
            $("#B2").addClass("resposta-incorreta")
            $("#C2").removeClass("resposta-incorreta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "C2") {
            $("#A2").removeClass("resposta-correta")
            $("#B2").removeClass("resposta-incorreta")
            $("#C2").addClass("resposta-incorreta")
            $("#D2").removeClass("resposta-incorreta")
        } else if (value === "D2") {
            $("#A2").removeClass("resposta-correta")
            $("#B2").removeClass("resposta-incorreta")
            $("#C2").removeClass("resposta-incorreta")
            $("#D2").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "Parabéns! Você acertou a resposta, letra <b>A</b>! A gravidade do impacto do evento na saúde pública é um critério essencial na avaliação de emergências de saúde pública de importância internacional. Sua compreensão desse conceito é fundamental. Continue assim, sua atenção aos detalhes e conhecimento está realmente se destacando!" :
            mensagem = "A resposta correta é a letra <b>A</b>, que se refere à gravidade do impacto do evento na saúde pública. Esse critério é crucial para identificar situações que podem representar um risco maior para outros países. Tome isso como uma oportunidade para revisar os critérios envolvidos nas emergências de saúde pública.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 1 QUESTÃO 3
var resposta3 = "D3"; // Resposta correta
$("input[name=questao3]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps3 = $("input[name=questao3]:checked");
    if (resps3.length) {
        $("#feedback3").removeClass("escondeFeedback")
        resps3.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "D3") {
            $("#feedback3").addClass("resposta-incorreta")
            $("#feedback3").removeClass("resposta-correta")
        } else {
            $("#feedback3").removeClass("resposta-incorreta")
            $("#feedback3").addClass("resposta-correta")
        }

        if (value === "D3") {
            $("#A3").removeClass("resposta-incorreta")
            $("#B3").removeClass("resposta-incorreta")
            $("#C3").removeClass("resposta-incorreta")
            $("#D3").addClass("resposta-correta")
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta")
            $("#B3").removeClass("resposta-incorreta")
            $("#C3").removeClass("resposta-incorreta")
            $("#D3").removeClass("resposta-correta")
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta")
            $("#B3").addClass("resposta-incorreta")
            $("#C3").removeClass("resposta-incorreta")
            $("#D3").removeClass("resposta-correta")
        } else if (value === "C3") {
            $("#A3").removeClass("resposta-incorreta")
            $("#B3").removeClass("resposta-incorreta")
            $("#C3").addClass("resposta-incorreta")
            $("#D3").removeClass("resposta-correta")
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Ótimo trabalho! Você acertou a resposta! A letra <b>D</b>, 'Alimentação equilibrada com uso racional dos recursos naturais', realmente não está relacionada ao surgimento de zoonoses pandêmicas. Muito ao contrário, um dos desafios que a abordagem Uma Só Saúde enfrenta é gerar condições para que a alimentação dos humanos seja sustentável, evitando assim o desequilíbrio entre ambiente, animais e pessoas."
            : mensagem = "A resposta correta é a letra <b>D</b>, que de fato não se relaciona com o surgimento de zoonoses pandêmicas. Em vez disso, mudanças climáticas e a crescente demanda por proteína animal são fatores que contribuem mais significativamente para esse fenômeno. Use isso como uma oportunidade de aprendizado para revisar os principais fatores discutidos na abordagem Uma Só Saúde.";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// MÓDULO 1 QUESTÃO 4
var resposta4 = "C4"; // Resposta correta
$("input[name=questao4]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps4 = $("input[name=questao4]:checked");
    if (resps4.length) {
        $("#feedback4 ").removeClass("escondeFeedback")
        resps4.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "C4") {
            $("#feedback4").addClass("resposta-incorreta")
            $("#feedback4").removeClass("resposta-correta")
        } else {
            $("#feedback4").removeClass("resposta-incorreta")
            $("#feedback4").addClass("resposta-correta")
        }

        if (value === "C4") {
            $("#A4").removeClass("resposta-incorreta")
            $("#B4").removeClass("resposta-incorreta")
            $("#C4").addClass("resposta-correta")
            $("#D4").removeClass("resposta-incorreta")
        } else if (value === "A4") {
            $("#A4").addClass("resposta-incorreta")
            $("#B4").removeClass("resposta-incorreta")
            $("#C4").removeClass("resposta-correta")
            $("#D4").removeClass("resposta-incorreta")
        } else if (value === "B4") {
            $("#A4").removeClass("resposta-incorreta")
            $("#B4").addClass("resposta-incorreta")
            $("#C4").removeClass("resposta-correta")
            $("#D4").removeClass("resposta-incorreta")
        } else if (value === "D4") {
            $("#A4").removeClass("resposta-incorreta")
            $("#B4").removeClass("resposta-incorreta")
            $("#C4").removeClass("resposta-correta")
            $("#D4").addClass("resposta-incorreta")
        }

        var mensagem = "";
        resposta4 == value ? mensagem = "Você acertou a resposta correta, que é a letra <b>C</b>! O Comitê Técnico Interinstitucional de Uma Só Saúde visa traçar diretrizes para a prevenção e controle de ameaças à saúde de forma integrada, reconhecendo a conexão entre saúde humana, animal, vegetal e ambiental. Sua compreensão sobre a importância dessa abordagem integral é fundamental para o contexto de saúde pública."
            : mensagem = "A resposta correta é a letra <b>C</b>, que enfatiza a abordagem integrada para enfrentar as ameaças à saúde. Compreender esses objetivos é vital para a implementação eficaz do Plano de Ação Nacional de Uma Só Saúde. As demais opções integram os cinco objetivos estratégicos do Plano de Ação Global sobre Resistência Antimicrobiana que norteiam as ações nacionais, em última instância, porém não representam o objetivo principal do comitê.";
        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }
});