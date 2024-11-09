class ModalCreditos extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style type="text/css">
            p {
                margin-bottom: 0px !important;
                margin-top: 30px !important;
            }

            h2 {
                font-size: 15px !important;
                margin-top: 30px !important;
                text-transform: uppercase;
            }
        </style>

        <h2>Ministério da Saúde</h2>

        <p>Nísia Trindade Lima</p>
        <i>Ministra</i>

        <h2>Fundação Oswaldo Cruz – Fiocruz</h2>

        <p>Mario Moreira</p>
        <i>Presidente</i>

        <p>Cristiani Vieira Machado</p>
        <i>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</i>

        <h2>Campus Virtual Fiocruz</h2>

        <p>Ana Cristina da Matta Furniel</p>
        <i>Coordenadora Geral</i>

        <p>Rosane Mendes</p>
        <i>Coordenadora Adjunta, Coordenadora da Plataforma Educare</i>

        <p>Renata Bernardes David</p>
        <i>Coordenadora de Produção</i>

        <p>Juliana Dutra</p>
        <i>Revisora Técnica de Conteúdo</i>

        <p>Isabela Schincariol</p>
        <i>Assessora de Comunicação</i>

        <p>Roberta Saboya</p>
        <i>Designer Educacional</i>

        <p>Daniela Botelho</p>
        <i>Designer UX/UI</i>

        <p>Eberthyn Marques</p>
        <i>Desenvolvedor WEB</i>

        <p><b>Recursos Audiovisuais</b></p>

        <p>Cláudia Reis</p>
        <i>Locução e produção de podcast</i>

        <p>Teo Venerando</p>
        <i>Producão  e edição de vídeo</i>

        <p>Bruno Athaydes</p>
        <i>Edição Audiovisual</i>

        <p><b>Recursos Educacionais</b></p>

        <p>Carmélia Brito</p>
        <i>Bibliotecária</i>

        <p>Natália Rasina</p>
        <i>Audiodescrição</i>

        <p>Flávia Botelho</p>
        <i>Revisão de Português</i>

        <p><b>Suporte Técnico de Tecnologia da Informação</b></p>

        <p>Bruno Alexandre de Oliveira</p>
        <i>Desenvolvedor</i>

        <p>Eduardo Xavier da Silva</p>
        <i>Desenvolvedor</i>

        <p>Adriano Lourenço</p>
        <i>Analista de Suporte</i>

        <p>Orlando Terra</p>
        <i>Analista de Suporte</i>

        <h2>Coordenação Acadêmica</h2>

        <p>Marilia Santini de Oliveira</p>
        <i>Coordenadora-Geral de Laboratórios de Saúde Pública - Ministério da Saúde</i>

        <p>Maria Cristina Schneider</p>
        <i>Departamento de Saúde Global  da Universidade de Georgetown em Washington, DC, Estados Unidos e colaboradora do Programa de Pós-graduação em Saúde Coletiva do Instituto de Estudos em Saúde Coletiva da Universidade Federal do Rio de Janeiro (IESC/UFRJ)</i>

        <h2>Coordenação Técnica</h2>

        <p>Tatianna Meireles Dantas de Alencar</p>
        <i>Analista Técnica de Políticas Sociais - Departamento de HIV/AIDS, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis - DATHI do Ministério da Saúde</i>

        <h2>Coordenação Pedagógica</h2>

        <p>Ana Luisa Nepomuceno Silva</p>
        <i>Consultora técnica - Departamento de HIV/AIDS, Tuberculose, Hepatites Virais e Infecções Sexualmente Transmissíveis - DATHI do Ministério da Saúde</i>

        <h2>Conteudistas</h2>

        <p>Marilia Santini de Oliveira</p>
        <i>Coordenadora-Geral de Laboratórios de Saúde Pública - Ministério da Saúde</i>

        <p>Maria Cristina Schneider</p>
        <i>Departamento de Saúde Global  da Universidade de Georgetown em Washington, DC, Estados Unidos e colaboradora do Programa de Pós-graduação em Saúde Coletiva do Instituto de Estudos em Saúde Coletiva da Universidade Federal do Rio de Janeiro (IESC/UFRJ)</i>
        
        <p>Ricardo Moratelli Mendonça da Rocha</p>
        <i>Fiocruz Mata Atlântica</i>

        <p>Ricardo Pereira Igreja</p>
        <i>Departamento de Doenças Infecciosas e Parasitárias - Faculdade de Medicina - Universidade Federal do Rio de Janeiro</i>

        <p>Marcia Chame</p>
        <i>Coordenadora do Centro de Informação em Saúde Silvestre e da Plataforma Institucional Biodiversidade e Saúde Silvestre - Pibss/Fiocruz</i>

        <p>Mayumi Duarte Wakimoto</p>
        <i>Instituto Nacional de Infectologia Evandro Chagas - Fiocruz</i>

        <p>Carla de Freitas Campos</p>
        <i>Instituto de Ciência e Tecnologia em Biomodelos - Fiocruz</i>

`
    }
}

customElements.define('modal-creditos', ModalCreditos);