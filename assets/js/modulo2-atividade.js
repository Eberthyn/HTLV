// MÓDULO 2 QUESTÃO 1
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
            $("#feedback1").addClass("resposta-incorreta");
            $("#feedback1").removeClass("resposta-correta");
            $("input[name=questao1]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback1").removeClass("resposta-incorreta");
            $("#feedback1").addClass("resposta-correta");
            $("input[name=questao1]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "B1") {
            $("#B1").addClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
        } else if (value === "A1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").addClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
        } else if (value === "C1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").addClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
        } else if (value === "D1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta == value ? mensagem = "Parabéns! A resposta correta é a letra <b>B</b>! Você demonstrou um bom entendimento sobre o impacto da ocupação humana e suas interações com agentes infecciosos, especialmente em relação à dinâmica das pandemias. Compreender como a aglomeração e a mobilidade populacional contribuem para a disseminação de doenças é essencial para o desenvolvimento de estratégias eficazes de saúde pública."
            : mensagem = "Neste caso a resposta correta é a letra <b>B</b>, a questão abordava a relação entre a ocupação do ambiente por humanos e sua implicação na propagação de pandemias. Lembre-se de que fatores como aglomerações e a mobilidade da população são cruciais para entender a dinâmica dos surtos. As demais opções, na verdade, criam obstáculos para a disseminação das pandemias.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 2 QUESTÃO 2
var resposta2 = "C2"; // Resposta correta
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
        if (value !== "C2") {
            $("#feedback2").addClass("resposta-incorreta");
            $("#feedback2").removeClass("resposta-correta");
            $("input[name=questao2]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback2").removeClass("resposta-incorreta");
            $("#feedback2").addClass("resposta-correta");
            $("input[name=questao2]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "C2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").addClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").addClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
        } else if (value === "D2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "Excelente! Você acertou a resposta, letra <b>C</b>! Você compreendeu corretamente o conceito de transbordamento zoonótico e sua relevância para a saúde pública. Essa compreensão é vital, especialmente na abordagem de HTLV onde as interações entre humanos e animais podem trazer riscos de doenças novas e emergentes." :
            mensagem = "A resposta correta é a letra <b>C</b>, pois demonstra no conceito de transbordamento zoonótico, envolve a transmissão de patógenos de animais vertebrados para seres humanos. Esta relação entre animais, ambiente e humanos é fundamental para a construção da abordagem HTLV.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 2 QUESTÃO 3
var resposta3 = "C3"; // Resposta correta
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

        if (value !== "C3") {
            $("#feedback3").addClass("resposta-incorreta");
            $("#feedback3").removeClass("resposta-correta");
            $("input[name=questao3]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback3").removeClass("resposta-incorreta");
            $("#feedback3").addClass("resposta-correta");
            $("input[name=questao3]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "C3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").addClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").addClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
        } else if (value === "D3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Parabéns! A opção <b>C</b> realmente reflete o principal foco dos estudos transdisciplinares na gestão dos acidentes ofídicos, que buscam entender a situação epidemiológica, além dos fatores socioeconômicos e ambientais que influenciam o risco desses acidentes. Essa abordagem integrada permite a elaboração de estratégias mais eficazes de prevenção e tratamento, beneficiando a saúde da população."
            : mensagem = "Sua resposta não está correta. A alternativa <b>C</b> é a mais adequada, pois aborda diretamente o objetivo dos estudos transdisciplinares sobre acidentes ofídicos, que visa analisar a situação epidemiológica e os fatores de risco associados. As outras opções não abordam o foco do estudo, como desenvolver vacinas ou analisar comportamentos que não são centrais para o problema discutido. Sugiro rever o texto, especialmente onde tratamos da transdisciplinaridade e o conceito de HTLV, para uma melhor compreensão desse tema.";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// MÓDULO 2 QUESTÃO 4
var resposta4 = "A4"; // Resposta correta
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

        if (value !== "A4") {
            $("#feedback4").addClass("resposta-incorreta");
            $("#feedback4").removeClass("resposta-correta");
            $("input[name=questao4]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });

        } else {
            $("#feedback4").removeClass("resposta-incorreta");
            $("#feedback4").addClass("resposta-correta");
            $("input[name=questao4]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "A4") {
            $("#A4").addClass("resposta-correta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
        } else if (value === "B4") {
            $("#A4").removeClass("resposta-correta");
            $("#B4").addClass("resposta-incorreta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
        } else if (value === "C4") {
            $("#A4").removeClass("resposta-correta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").addClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
        } else if (value === "D4") {
            $("#A4").removeClass("resposta-correta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta4 == value ? mensagem = "Você acertou a resposta correta, que é a letra <b>A</b>! Você demonstrou uma excelente compreensão do problema da resistência antimicrobiana e suas causas. Reconhecer como o uso excessivo de medicamentos antimicrobianos impacta a saúde pública é fundamental para desenvolver estratégias eficazes de prevenção e controle."
            : mensagem = "A resposta correta é a letra <b>A</b>, que nos leva a compreender que a resistência antimicrobiana e como o uso indiscriminado de medicamentos é um dos principais fatores que contribuem para a seleção de micróbios resistentes, gerando efeitos negativos na saúde pública e no meio ambiente.";
        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }

});

// MÓDULO 2 QUESTÃO 5
var resposta5 = "D5"; // Resposta correta
$("input[name=questao5]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps5 = $("input[name=questao5]:checked");
    if (resps5.length) {
        $("#feedback5 ").removeClass("escondeFeedback")
        resps5.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "D5") {
            $("#feedback5").addClass("resposta-incorreta");
            $("#feedback5").removeClass("resposta-correta");
            $("input[name=questao5]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback5").removeClass("resposta-incorreta");
            $("#feedback5").addClass("resposta-correta");
            $("input[name=questao5]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "D5") {
            $("#A5").removeClass("resposta-incorreta");
            $("#B5").removeClass("resposta-incorreta");
            $("#C5").removeClass("resposta-incorreta");
            $("#D5").addClass("resposta-correta");
        } else if (value === "A5") {
            $("#A5").addClass("resposta-incorreta");
            $("#B5").removeClass("resposta-incorreta");
            $("#C5").removeClass("resposta-incorreta");
            $("#D5").removeClass("resposta-correta");
        } else if (value === "B5") {
            $("#A5").removeClass("resposta-incorreta");
            $("#B5").addClass("resposta-incorreta");
            $("#C5").removeClass("resposta-incorreta");
            $("#D5").removeClass("resposta-correta");
        } else if (value === "C5") {
            $("#A5").removeClass("resposta-incorreta");
            $("#B5").removeClass("resposta-incorreta");
            $("#C5").addClass("resposta-incorreta");
            $("#D5").removeClass("resposta-correta");
        }

        var mensagem = "";
        resposta5 == value ? mensagem = "Parabéns! A resposta correta é a letra <b>D</b>. Estabelecer equipes transdisciplinares é uma estratégia essencial, pois permite uma compreensão mais profunda dos fatores que afetam a saúde em diferentes contextos."
            : mensagem = "A resposta adequada para essa questão é a letra <b>D</b> Ignorar a comunicação de riscos e focar apenas no tratamento de doenças, planejar ações isoladas e reduzir a produção de evidências científicas não contribui para o propósito de HTLV, que requer colaboração e troca de informações.";
        $("#mensagem5").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem5").empty();
    }
});

