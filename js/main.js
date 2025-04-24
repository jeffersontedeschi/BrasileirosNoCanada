// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        });
    });

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animação dos cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }

    // Ajustar padding do body para compensar a navbar fixa
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    }

    // Mapa Interativo do Canadá
    const canadaMap = document.getElementById('canada-map-container');
    const provinceNameDisplay = document.getElementById('province-name-display');
    
    if (canadaMap) {
        // Função para mostrar o nome da província
        const showProvinceName = (event, province) => {
            const name = province.getAttribute('data-name');
            provinceNameDisplay.textContent = name;
            provinceNameDisplay.style.left = `${event.pageX + 10}px`;
            provinceNameDisplay.style.top = `${event.pageY + 10}px`;
            provinceNameDisplay.style.opacity = '1';
        };

        // Função para esconder o nome da província
        const hideProvinceName = () => {
            provinceNameDisplay.style.opacity = '0';
        };

        // Função para redirecionar para a página da província
        const redirectToProvince = (provinceId) => {
            window.location.href = `moradia-${provinceId.toLowerCase()}.html`;
        };

        // Adiciona eventos para cada província
        const provinces = canadaMap.querySelectorAll('svg path');
        provinces.forEach(province => {
            // Hover events
            province.addEventListener('mouseover', (e) => showProvinceName(e, province));
            province.addEventListener('mouseout', hideProvinceName);
            province.addEventListener('mousemove', (e) => {
                provinceNameDisplay.style.left = `${e.pageX + 10}px`;
                provinceNameDisplay.style.top = `${e.pageY + 10}px`;
            });

            // Click event
            province.addEventListener('click', () => {
                const provinceId = province.getAttribute('id');
                redirectToProvince(provinceId);
            });
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
} 