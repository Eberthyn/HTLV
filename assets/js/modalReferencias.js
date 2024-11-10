class ModalReferencais extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style type="text/css">
        a {
            word-wrap: break-word;
        }
        </style>
        
        <p>AMERICAN VETERINARY MEDICAL ASSOCIATION.<i><b> One Health:</b> a new professional imperative. One Health Initiative Task Force : Final Report.</i> 2008. Disponível em:<a href="https://www.avma.org/sites/default/files/resources/onehealth_final.pdf" target="_blank" rel="noopener noreferrer">https://www.avma.org/sites/default/files/resources/onehealth_final.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>ANDRADE JÚNIOR, Hermes. Entrelaçando as Ciências: a transdisciplinarização do Antropoceno.<b> Educação & Realidade</b>, Porto Alegre, v. 48, 2023. Disponível em: <a href="https://www.scielo.br/j/edreal/a/9Qfgn6XdL8k6zFqhhXmWk6N/?format=pdf&lang=pt" target="_blank" rel="noopener noreferrer">https://www.scielo.br/j/edreal/a/9Qfgn6XdL8k6zFqhhXmWk6N/?format=pdf&lang=pt</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Casa Civil. Lei n° 8.080, que dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes e dá outras providências, de 19 de setembro de 1990.<b> Diário Oficial da União</b>, 20 set. 1990. Disponível em: <a href="https://www.planalto.gov.br/ccivil_03/leis/l8080.htm" target="_blank" rel="noopener noreferrer">https://www.planalto.gov.br/ccivil_03/leis/l8080.htm</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Ministério da Agricultura, Pecuária e Abastecimento. Secretaria de Defesa Agropecuária. Secretaria de Mobilidade Social, do Produtor Rural e do Cooperativismo.<b> Plano de Ação Nacional de Prevenção e Controle da AMR no âmbito da Agropecuária.</b>PAN-BR AGRO 2018 2022. versão 1.0. Brasília: MAPA, 2018. Disponível em: <a href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/pan-br-agro/PANBRAGROv.1.0maio2018.pdf" target="_blank" rel="noopener noreferrer">https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/pan-br-agro/PANBRAGROv.1.0maio2018.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Ministério da Agricultura, Pecuária e Abastecimento. Secretaria de Defesa Agropecuária. Guia de Uso Racional de Antimicrobianos para Cães e Gatos. Brasília: MAPA, 2022. Disponível em: <a href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/publicacoes/livroantimicrobianosv22.pdf" target="_blank" rel="noopener noreferrer">https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/publicacoes/livroantimicrobianosv22.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Ministério da Agricultura, Pecuária e Abastecimento. Secretaria de Defesa Agropecuária.<b> Plano de Ação Nacional de Prevenção e Controle da AMR no âmbito da Agropecuária - 2ª Etapa</b>. Brasília: MAPA, 2023. Disponível em: <a href="https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/pan-br-agro/PlanodeAoda2EtapadoPANBRAGROjun.23.pdf" target="_blank" rel="noopener noreferrer">https://www.gov.br/agricultura/pt-br/assuntos/insumos-agropecuarios/insumos-pecuarios/resistencia-aos-antimicrobianos/pan-br-agro/PlanodeAoda2EtapadoPANBRAGROjun.23.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde.<b> Diretrizes do NASF - Núcleo de Apoio à Saúde da Família</b>. Brasília: Ministério da Saúde, 2010. Cadernos de Atenção Básica, n. 27. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_do_nasf_nucleo.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_do_nasf_nucleo.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde.<b> Diretrizes Nacionais da Vigilância em Saúde</b>. Brasília: Ministério da Saúde, 2010. Série Pactos pela Saúde 2006, v. 13. Disponível em: <a href="https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_vigilancia_saude.pdf" target="_blank" rel="noopener noreferrer">https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes_nacionais_vigilancia_saude.pdf</a>. Acesso em: 02 out. 2024</p>

        <p>BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde.<b> Plano de Ação Nacional de Prevenção e Controle da Resistência aos Antimicrobianos no Âmbito da Saúde Única 2018-2022 (PAN-BR)</b> Brasília: Ministério da Saúde, 2019. Disponível em: <a href="https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/antimicrobianos/plano-nacional-antimicrobianos-pan-br-14fev19-isbn.pdf/view" target="_blank" rel="noopener noreferrer">https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/antimicrobianos/plano-nacional-antimicrobianos-pan-br-14fev19-isbn.pdf/view</a>. Acesso em: 02 out. 2024.</p>

        <p>CENTERS FOR DISEASE CONTROL AND PREVENTION.<b> Influenza (Flu)</b>. Disponível em: <a href="https://www.cdc.gov/flu/other/index.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/flu/other/index.html</a>. Acesso em 04 ago. 2020.</p>

        <p>EUROPEAN UNION. <i><b>A European One Health Plan Against Antimicrobial Resistence</b></i>. Luxemburgo: EU, 2022. Disponível em: <a href="https://www.eumonitor.eu/9353000/1/j9vvik7m1c3gyxp/vkfhga3ctfzr" target="_blank" rel="noopener noreferrer">https://www.eumonitor.eu/9353000/1/j9vvik7m1c3gyxp/vkfhga3ctfzr</a>. Acesso em: 02 out. 2024.</p>

        <p>FAN, Victoria; SMITHAM, Eleni; REGAN, Lydia.<i><b> How the Pandemic Fund can strategically invest in pandemic preparedness</b> Center for Global Development - CGD BRIEF, 2023</i>. Disponível em: <a href="https://www.cgdev.org/sites/default/files/How-the-Pandemic-Fund-Can-Strategically-Invest-in-Pandemic-Preparedness-Brief.pdf" target="_blank" rel="noopener noreferrer">https://www.cgdev.org/sites/default/files/How-the-Pandemic-Fund-Can-Strategically-Invest-in-Pandemic-Preparedness-Brief.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>FAO, UNEP, WHO, WOAH.<i><b>Global Plan of Action on One Health</b>. Towards a more comprehensive One Health, approach to global health threats at the human-animal-environment interface.</i> Roma, 2023. Disponível em: <a href="https://www.learningfornature.org/ru/fao-unep-who-and-woah-2022-global-plan-of-action-on-one-health-towards-a-more-comprehensive-one-health-approach-to-global-health-threats-at-the-human-animal-environment-interface/" target="_blank" rel="noopener noreferrer">https://www.learningfornature.org/ru/fao-unep-who-and-woah-2022-global-plan-of-action-on-one-health-towards-a-more-comprehensive-one-health-approach-to-global-health-threats-at-the-human-animal-environment-interface/</a>. Acesso em: 02 out. 2024.</p>

        <p>FOOD AND AGRICULTURE ORGANIZATION OF THE UNITED NATIONS.<b><i>  One Health Joint Plan of Action</i>, 2022–2026</b><i>Working together for the health of humans, animals, plants and the environment. Rome: </i>UNEP; WHO; WOAH, 2022. Disponível em: <a href="https://www.fao.org/documents/card/en/c/cc2289en" target="_blank" rel="noopener noreferrer">https://www.fao.org/documents/card/en/c/cc2289en</a>. Acesso em: 02 out. 2024.</p>

        <p>G20 HEALTH MINISTERS.<i><b> The Lombok G20 One Health Policy Brief - Chair’s Summary:</b> Health Ministers’ Meeting of the G20 2022</i>. Indonésia, 2022. Disponível em: <a href="https://g7g20-documents.org/fileadmin/G7G20_documents/2022/G20/Indonesia/Sherpa-Track/Health%20Ministers/2%20Ministers%27%20Annex/The%20Lombok%20G20%20One%20Health%20Policy%20Brief_28102022.pdf" target="_blank" rel="noopener noreferrer">https://g7g20-documents.org/fileadmin/G7G20_documents/2022/G20/Indonesia/Sherpa-Track/Health%20Ministers/2%20Ministers%27%20Annex/The%20Lombok%20G20%20One%20Health%20Policy%20Brief_28102022.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>GALAN, <i>Deise I. et al. Epidemiology of human leptospirosis in urban area rural areas of Brazil, 2000-2015.<b> PLoS One</b>, v. 16, 2021</i> Disponível em: <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247763" target="_blank" rel="noopener noreferrer">https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247763</a>. Acesso em: 02 out. 2024.</p>

        <p>HAMRICK, P. N.<i> Geographic Patterns and Environmental Factors Associated with Human Yellow Fever Presence in the Americas. <b>Plos Negl Trop Dis</b>., v. 11, n. 9, 2017.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5607216/#:~:text=Yellow%20fever%20presence%20was%20associated,along%20the%20Andes%20eastern%20foothills" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC5607216/#:~:text=Yellow%20fever%20presence%20was%20associated,along%20the%20Andes%20eastern%20foothills</a>. Acesso em: 02 out. 2024.</p>

        <p>JANK, Marcos Sawaya.<b> Impacto da COVID-19 no agronegócio do Brasil</b>. Parte 2: Saúde Única, Zoonoses e segurança do alimento. INSPER- Centro de Agronegócio Global. Junho 2020. <a href="https://www.insper.edu.br/wp-content/uploads/2020/06/impactos-da-covid-19-nos-sistemas-agroalimentares-parte2.pdf" target="_blank" rel="noopener noreferrer">https://www.insper.edu.br/wp-content/uploads/2020/06/impactos-da-covid-19-nos-sistemas-agroalimentares-parte2.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>JOHNS HOPKINS BLOOMBERG SCHOOL OF PUBLIC HEALTH. <i>Center for Health Security.<b> The Characteristics of Pandemic Pathogens</b> Johns Hopkins University, 2018.</i> Disponível em: <a href="https://centerforhealthsecurity.org/sites/default/files/2022-12/180510-pandemic-pathogens-report.pdf" target="_blank" rel="noopener noreferrer">https://centerforhealthsecurity.org/sites/default/files/2022-12/180510-pandemic-pathogens-report.pdf</a> Acesso em: 02 out. 2024.</p>

        <p>KAHN LH. <i>Confronting zoonoses, linking human and veterinary medicine. <b>Emerging Infectious Diseases</b>, v. 12, n. 4, p. 556-61, 2006.</i> Disponível em: <a href="https://pubmed.ncbi.nlm.nih.gov/16704801/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/16704801/</a> Acesso em: 02 out. 2024.</p>

        <p>KAKA WERE JECUPE. <b>A Terra dos Mil Povos</b>: a história indígena do Brasil contada por um índio. 2. ed. São Paulo: Peirópolis, 2020<a href="" target="_blank" rel="noopener noreferrer"></a>. Acesso em: 02 out. 2024.</p>

        <p>LEAL, L. O. P.<b> A História da Medicina Veterinária</b>. ABMV, 2009. 163 p.<a href="" target="_blank" rel="noopener noreferrer"></a></p>

        <p>LEE, K, BRUMME, Z. L. <i>Operationalizing the One Health approach: the global governance challenges.<b> Health Policy and Planning</b>, v. 28, n. 7, p. 778-85, 2013.</i> Disponível em: <a href="https://pubmed.ncbi.nlm.nih.gov/23221123/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/23221123/</a>. Acesso em: 02 out. 2024.</p>

        <p>MARTINI, M.; BRAGAZZI, N. L.; BARBERIS, I.<i> The Spanish Influenza Pandemic: a lesson from history 100 years after 1918. <b>J Prev Med Hyg</b>. v. 60, n. 1, p. E64-E67, 2019.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6477554/" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC6477554/</a>. Acesso em: 02 out. 2024.</p>

        <p>MORAES, N. B. <i>et al.</i> A Evolução da Saúde Pública Veterinária no Brasil: Do Controle da Raiva á Saúde Única. <b>Revista do Conselho Federal de Medicina Veterinária</b>, v. 26, n. 85, p. 28-34, 2020. Disponível em: <a href="https://www.cfmv.gov.br/revista-cfmv-edicao-85-2020/comunicacao/revista-cfmv/2020/10/29/#28" target="_blank" rel="noopener noreferrer">https://www.cfmv.gov.br/revista-cfmv-edicao-85-2020/comunicacao/revista-cfmv/2020/10/29/#28</a>. Acesso em: 02 out. 2024.</p>

        <p>MUNOZ-ZANZI, Claudia <i>et al. A systematic literature review of leptospirosis outbreaks worldwide, 1970-2012.<b> Revista Panamericana de Salud Publica-Pan American Journal of Public Health</b>, v. 44, p. 1, 2020.</i> Disponível em: <a href="https://iris.paho.org/handle/10665.2/34548" target="_blank" rel="noopener noreferrer">https://iris.paho.org/handle/10665.2/34548</a>. Acesso em: 02 out. 2024.</p>

        <p>NATURE 4 HEALTH. <i><b>Nature for Health</b>: Preventing pandemics together. 2023.</i> Disponível em: <a href="https://rr-asia.woah.org/app/uploads/2024/01/1-n4h_overview-1.pdf" target="_blank" rel="noopener noreferrer">https://rr-asia.woah.org/app/uploads/2024/01/1-n4h_overview-1.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>ONE HEALTH HIGH-LEVEL EXPERT PANEL.<i><b> One Health Theory of Change</b></i>. OHHLEP<i> whitepaper/Opinion piece, 2022b.</i> Disponível em: <a href="https://cdn.who.int/media/docs/default-source/one-health/ohhlep/ohhlep--one-health-theory-of-chance.pdf" target="_blank" rel="noopener noreferrer">https://cdn.who.int/media/docs/default-source/one-health/ohhlep/ohhlep--one-health-theory-of-chance.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>ORGANIZAÇÃO PAN-AMERICANA DE SAÚDE. <b>Panaftosa</b>: compromisso com a erradicação da febre aftosa nas Américas desde 1951. Rio de Janeiro: OPAS, 2018.<a href="" target="_blank" rel="noopener noreferrer"></a></p>

        <p>PEREIRA, M. M. <i>et al. A Roadmap for Leptospirosis Research and Health Policies based on Country Needs.<b> Revista Panamericana de Salud Pública</b>, v. 41, 2017.</i> Disponível em: <a href="https://iris.paho.org/bitstream/handle/10665.2/34352/v41e1312017.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://iris.paho.org/bitstream/handle/10665.2/34352/v41e1312017.pdf?sequence=1&isAllowed=y</a>. Acesso em: 02 out. 2024.</p>

        <p>PLOWRIGHT, R. <i>et al. Pathways to zoonotic spillover. <b>Nature Rewiews Microbiology</b>, v. 15, p. 502-510, 2027.</i> Disponível em: <a href="https://www.nature.com/articles/nrmicro.2017.45" target="_blank" rel="noopener noreferrer">https://www.nature.com/articles/nrmicro.2017.45</a>. Acesso em: 02 out. 2024.</p>

        <p>POLAND, G. <i>Another coronavirus, another epidemic, another warning. <b>Vaccine</b>, v.  38, February 2020.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7131387/pdf/main.pdf" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC7131387/pdf/main.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>POLO N. <i>et al. A One Health Approach to Investigating Leptospira Serogroups and Their Spatial Distributions among Humans and Animals in Rio Grande do Sul, Brazil, 2013–2015. <b>Trop. Med. Infect. Dis.</b> v. 4, n. 1, 2019.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6473481/pdf/tropicalmed-04-00042.pdf" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC6473481/pdf/tropicalmed-04-00042.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>PORTA, M. <i><b>A Dictionary of Epidemiology</b>. Fifth Edition. New York: Oxford University Press, 2008.</i> Disponível em: <a href="https://academic.oup.com/aje/article-abstract/170/11/1449/116394" target="_blank" rel="noopener noreferrer">https://academic.oup.com/aje/article-abstract/170/11/1449/116394</a>. Acesso em: 02 out. 2024.</p>

        <p>RIBEIRO, C. S.; BURGWALB, L. H. M. V.; REGEER, B. J.<i> Overcoming challenges for designing and implementing the <b>One Health</b> approach: A systematic review of the literature. One Health, v. 7, 2019.</i> Disponível em: <a href="https://www.sciencedirect.com/science/article/pii/S2352771418300223?via%3Dihub" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S2352771418300223?via%3Dihub</a>. Acesso em: 02 out. 2024.</p>

        <p>RICHARD, M.; FOUCHIER, R. A.M. <i>Influenza A virus transmission via respiratory aerosols or droplets as it relates to pandemic potential. <b>FEMS Microbiology Reviews</b>, v. 40, n. 1, p. 68-85, 2016.</i> Disponível em: <a href="https://pubmed.ncbi.nlm.nih.gov/26385895/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/26385895/</a>. Acesso em: 02 out. 2024.</p>

        <p>ROSEN, G. <i><b>A history of public health</b>. Revised extended edition. Johns Hopkins University Press, 1993. 370 p.</i><a href="" target="_blank" rel="noopener noreferrer"></a></p>

        <p>SCHNEIDER, M. C. <i>et al. “One health” from concept to application in the global world. In: <b>Oxford Research Encyclopedia of Global Public Health</b>. Oxford University Press, 26 Apr. 2019. 54 p.</i> doi: <a href="http://dx.doi.org/10.1093/acrefore/9780190632366.013.29" target="_blank" rel="noopener noreferrer">http://dx.doi.org/10.1093/acrefore/9780190632366.013.29</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C. <i>et al. Importance of the animal/human interface in potential public health emergencies of international concern in the Americas. <b>Pan American Journal of Public Health</b>, v. 29, n. 3, 2011.</i> Disponível em: <a href="https://iris.paho.org/bitstream/handle/10665.2/9526/a11v29n5.pdf" target="_blank" rel="noopener noreferrer">https://iris.paho.org/bitstream/handle/10665.2/9526/a11v29n5.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C. <i>et al. Leptospirosis in</i> Rio Grande do Sul<i>, Brazil: an ecosystem approach in the animal-human interface. <b>PLoS Negl Trop Dis</b>., n. 9, v. 11, 2015.</i> Disponível em: <a href="https://lume.ufrgs.br/bitstream/handle/10183/239052/000981544.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://lume.ufrgs.br/bitstream/handle/10183/239052/000981544.pdf?sequence=1&isAllowed=y</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C. <i> et al. Overview of snakebite in Brazil: Possible drivers and a tool for risk mapping. <b>PLoS Neglected Tropical Diseases</b>, v. 15, n. 1, 2021.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7875335/pdf/pntd.0009044.pdf" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC7875335/pdf/pntd.0009044.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C. <i>et al. Rabies transmitted by vampire bats to humans: an emerging zoonotic disease in Latin America? <b>Rev Panam Salud Pública</b>, v. 25, n. 3, p. 2008.</i> Disponível em: <a href="https://pubmed.ncbi.nlm.nih.gov/19454154/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/19454154/</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C. <i>et al. Where does human plague still persist in Latin America? <b>PLoS Neglected Disease</b>, v. 8, n. 2, 2014.</i> Disponível em: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3916238/#:~:text=Plague%20is%20a%20disease%20of,Brazil%2C%20Ecuador%2C%20and%20Peru" target="_blank" rel="noopener noreferrer">https://pmc.ncbi.nlm.nih.gov/articles/PMC3916238/#:~:text=Plague%20is%20a%20disease%20of,Brazil%2C%20Ecuador%2C%20and%20Peru</a>. Acesso em: 02 out. 2024.</p>

        <p>SCHNEIDER, M. C.; OLIVEIRA, M. S. Saúde Única e a pandemia de Covid-19. In: BUSS, P. M.; FONSECA, L. E. <b>Diplomacia da Saúde e Covid-19</b>: reflexões a meio caminho. Rio de Janeiro: Observatório Covid 19 Fiocruz; Editora FIOCRUZ, 2020. p. 83-96. 360 p. Informação para ação na Covid-19 series. ISBN: 978-65-5708-029-0. Disponível em: <a href="https://books.scielo.org/id/hdyfg/pdf/buss-9786557080290-08.pdf" target="_blank" rel="noopener noreferrer">https://books.scielo.org/id/hdyfg/pdf/buss-9786557080290-08.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>SOUZA, Paulo César A. <i>et al. A Concrete Example of the One Health Approach in the Brazilian Unified Health System. <b>Frontiers in Public Health</b>, v. 9, 2021. </i>Disponível em: <a href="https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2021.618234/full" target="_blank" rel="noopener noreferrer">https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2021.618234/full</a>. Acesso em: 02 out. 2024.</p>

        <p>TAUBENBERGER, J. K.; MORENS, D. M. 1918 <i>Influenza: the mother of all pandemics. <b>Emerg Infect Dis</b>., v. 12, n. 1, p. 15-22.</i> Disponível em: <a href="https://pubmed.ncbi.nlm.nih.gov/16494711/" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/16494711/</a>. Acesso em: 02 out. 2024.</p>

        <p>U.S. CENTERS FOR DISEASE CONTROL AND PREVENTION. <i><b>One Health</b>. About one health. </i>Disponível em: <a href="https://www.cdc.gov/one-health/about/?CDC_AAref_Val=https://www.cdc.gov/onehealth/basics/index.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/one-health/about/?CDC_AAref_Val=https://www.cdc.gov/onehealth/basics/index.html</a>. Acesso em: 20 mar. 2023.</p>

        <p>UNITED NATIONS ENVIRONMENT PROGRAMME. <i><b>Global Environment Monitoring System & World Water Quality Alliance</b>: Freshwater, Air and Ocean. Genebra: UN, 2022.</i> Disponível em: <a href="https://www.unep.org/explore-topics/water/monitoring-water-quality" target="_blank" rel="noopener noreferrer">https://www.unep.org/explore-topics/water/monitoring-water-quality</a>. Acesso em: 02 out. 2024.</p>

        <p>UNITED NATIONS ENVIRONMENT PROGRAMME. <i>International Livestock Research Institute. <b>Preventing the next pandemic</b>: Zoonotic diseases and how to break the chain of transmission.</i> Nairóbi, Quênia: UNEP, 2020. Disponível em: <a href="https://www.ilri.org/preventing-next-pandemic" target="_blank" rel="noopener noreferrer">https://www.ilri.org/preventing-next-pandemic</a>. Acesso em: 02 out. 2024.</p>

        <p>WORLD HEALTH ORGANIZATION. <i><b>International Health Regulations</b></i> 3ª ed. Geneva: WHO, 2005. Disponível em: <a href="https://iris.who.int/bitstream/handle/10665/246107/9789241580496-eng.pdf" target="_blank" rel="noopener noreferrer">https://iris.who.int/bitstream/handle/10665/246107/9789241580496-eng.pdf</a>. Acesso em: 02 out. 2024.</p>

        <p>WORLD HEALTH ORGANIZATION. <i><b>One health high-level expert panel</b>. Annual Report 2021.</i> Geneva: WHO, 2022. Disponível em: <a href="https://cdn.who.int/media/docs/default-source/one-health/ohhlep/ohhlep-annual-report-2021.pdf?sfvrsn=f2d61e40_10&download=true" target="_blank" rel="noopener noreferrer">https://cdn.who.int/media/docs/default-source/one-health/ohhlep/ohhlep-annual-report-2021.pdf?sfvrsn=f2d61e40_10&download=true</a>. Acesso em: 02 out. 2024.</p>

        <p>WORLD HEALTH ORGANIZATION. <i><b>Taking a multisectoral, one health approach</b>: a Tripartite Guide to Addressing Zoonotic Diseases in Countries.</i> Genebra: WHO; FAO; OIE, 2019. Disponível em: <a href="https://iris.who.int/bitstream/handle/10665/325620/9789241514934-eng.pdf?sequence=1&isAllowed=y" target="_blank" rel="noopener noreferrer">https://iris.who.int/bitstream/handle/10665/325620/9789241514934-eng.pdf?sequence=1&isAllowed=y</a>. Acesso em: 02 out. 2024.</p>

        <p>WORLD ORGANISATION FOR ANIMAL HEALTH. <i><b>One Health</b></i>. Disponível em: <a href="https://www.woah.org/app/uploads/2024/04/en-one-health-policy-brief-.pdf" target="_blank" rel="noopener noreferrer">https://www.woah.org/app/uploads/2024/04/en-one-health-policy-brief-.pdf</a>. Acesso em: 02 out. 2024.</p>

`

    }
}

customElements.define('modal-referencias', ModalReferencais);