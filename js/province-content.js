// Province-specific content
const provinceContent = {
    'ontario': {
        provinceName: 'Ontario',
        introText: 'Descubra as cidades mais acessíveis para aluguel em Ontario. A província oferece uma excelente relação custo-benefício, com Toronto como principal centro urbano e várias outras cidades proporcionando qualidade de vida e custos de moradia mais acessíveis que a média nacional. Ontario é conhecida por sua diversidade cultural e oportunidades econômicas.',
        tenantRightsText: 'Ontario possui uma legislação robusta de proteção ao inquilino. O <a href="https://www.ontario.ca/laws/statute/06r17" target="_blank" rel="noopener noreferrer">Residential Tenancies Act (RTA)</a> regula as relações entre proprietários e inquilinos, garantindo direitos como limite de aumentos de aluguel, proteção contra despejos injustos e manutenção adequada do imóvel.',
        propertyTypesText: 'Em Ontario, você encontrará uma variedade de opções de moradia, incluindo apartamentos em condomínios, casas geminadas, casas unifamiliares e unidades em co-living. Toronto e Ottawa oferecem mais opções de apartamentos, enquanto as cidades menores têm mais casas disponíveis.',
        searchTipsText: 'Alguns dos principais sites para busca de imóveis em Ontario incluem Realtor.ca, Kijiji, Zumper e PadMapper. Também é comum encontrar imóveis através de grupos no Facebook específicos para brasileiros em Ontario ou por indicação de conhecidos.',
        provinceTipsText: 'Considere a proximidade com o transporte público ao escolher um imóvel, especialmente em Toronto e Ottawa. Verifique se o imóvel inclui aquecimento no aluguel, já que os invernos são rigorosos. Em algumas áreas, pode ser necessário pagar por estacionamento adicional. Sempre peça para ver o imóvel pessoalmente antes de assinar qualquer contrato.'
    },
    'northwest-territories': {
        provinceName: 'Northwest Territories',
        introText: 'Descubra as cidades mais acessíveis para aluguel em Northwest Territories. O território oferece uma excelente relação custo-benefício, com Yellowknife como principal centro urbano proporcionando qualidade de vida e custos de moradia mais acessíveis que a média nacional. Northwest Territories é conhecido por sua beleza natural e comunidades acolhedoras.',
        tenantRightsText: 'Northwest Territories possui uma legislação robusta de proteção ao inquilino. O <a href="https://www.justice.gov.nt.ca/en/residential-tenancies/" target="_blank" rel="noopener noreferrer">Residential Tenancies Act (RTA)</a> regula as relações entre proprietários e inquilinos, garantindo direitos como limite de aumentos de aluguel, proteção contra despejos injustos e manutenção adequada do imóvel.',
        propertyTypesText: 'Em Northwest Territories, você encontrará uma variedade de opções de moradia, incluindo apartamentos em condomínios, casas geminadas, casas unifamiliares e unidades em co-living. Yellowknife oferece mais opções de apartamentos, enquanto as cidades menores têm mais casas disponíveis.',
        searchTipsText: 'Alguns dos principais sites para busca de imóveis em Northwest Territories incluem Realtor.ca, Kijiji, Zumper e PadMapper. Também é comum encontrar imóveis através de grupos no Facebook específicos para brasileiros em Northwest Territories ou por indicação de conhecidos.',
        provinceTipsText: 'Considere a proximidade com o transporte público ao escolher um imóvel, especialmente em Yellowknife. Verifique se o imóvel inclui aquecimento no aluguel, já que os invernos são rigorosos. Em algumas áreas, pode ser necessário pagar por estacionamento adicional. Sempre peça para ver o imóvel pessoalmente antes de assinar qualquer contrato.'
    }
    // Add other provinces here
};

// Function to replace template variables with actual content
function replaceTemplateVariables(template, content) {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => content[key] || match);
}

// Function to load and render the template
async function loadTemplate() {
    try {
        // Get the current province from the URL
        const currentPage = window.location.pathname.split('/').pop().replace('aluguel-', '').replace('.html', '');
        const content = provinceContent[currentPage];
        
        if (!content) {
            console.error('No content found for province:', currentPage);
            return;
        }

        // Create a temporary container
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Aluguel em ${content.provinceName} | Seu Guia Brasileiro</title>
                <link rel="stylesheet" href="../css/styles.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
            </head>
            <body>
                <nav class="navbar">
                    <div class="logo"><a href="../index.html">Brasileiros no Canadá</a></div>
                    <ul class="nav-links">
                        <li><a href="imigracao.html">Imigração</a></li>
                        <li><a href="moradia.html">Moradia</a></li>
                        <li><a href="trabalho.html">Trabalho</a></li>
                        <li><a href="educacao.html">Educação</a></li>
                    </ul>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                <main class="province-details">
                    <h1 class="main-title">Aluguel em ${content.provinceName}</h1>
                    
                    <p id="last-updated" class="last-updated">Última atualização: Março 2024</p>
                    
                    <section class="intro">
                        <p>${content.introText}</p>
                    </section>

                    <section class="rental-costs">
                        <!-- Table will be dynamically generated here -->
                    </section>

                    <section class="tenant-rights">
                        <h2>Direitos e Deveres do Inquilino em ${content.provinceName}</h2>
                        <p>${content.tenantRightsText}</p>
                    </section>

                    <section class="property-types">
                        <h2>Tipos de Imóveis para Alugar</h2>
                        <p>${content.propertyTypesText}</p>
                    </section>

                    <section class="search-tips">
                        <h2>Onde Procurar Imóveis</h2>
                        <p>${content.searchTipsText}</p>
                    </section>

                    <section class="province-tips">
                        <h2>Dicas Específicas para ${content.provinceName}</h2>
                        <p>${content.provinceTipsText}</p>
                    </section>

                    <div class="back-link">
                        <a href="aluguel.html">← Voltar para o Guia de Aluguel no Canadá</a>
                    </div>
                </main>

                <footer>
                    <div class="footer-content">
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                        </div>
                        
                        <div class="language-switcher">
                            <span>Idioma:</span>
                            <a href="?lang=pt" class="active">Português</a>
                            <a href="?lang=en">English</a>
                            <a href="?lang=es">Español</a>
                        </div>

                        <p>© 2024 Brasileiros no Canadá. Todos os direitos reservados.</p>
                    </div>
                </footer>

                <script src="../js/main.js"></script>
                <script src="../js/rental-data.js"></script>
            </body>
            </html>
        `;

        // Replace the current document with the new content
        document.documentElement.innerHTML = tempContainer.innerHTML;

        // Initialize the rental data table
        if (typeof generateRentalTable === 'function') {
            const tableContainer = document.querySelector('.rental-costs');
            if (tableContainer) {
                const tableHTML = generateRentalTable(currentPage);
                tableContainer.innerHTML = `
                    <h2>Top 10 Cidades Mais Acessíveis em ${content.provinceName}</h2>
                    ${tableHTML}
                `;
            }
        }

    } catch (error) {
        console.error('Error loading template:', error);
        document.body.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <h1>Erro ao carregar a página</h1>
                <p>Desculpe, ocorreu um erro ao carregar o conteúdo. Por favor, tente novamente mais tarde.</p>
                <a href="aluguel.html">← Voltar para o Guia de Aluguel no Canadá</a>
            </div>
        `;
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', loadTemplate); 