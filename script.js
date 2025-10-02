document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');

    // Função para aplicar uma pequena animação (pulse) ao botão CTA no header
    function animateCtaButton() {
        ctaButton.classList.add('pulse');
        setTimeout(() => {
            ctaButton.classList.remove('pulse');
        }, 600); // Duração da animação
    }

    // Chama a animação no carregamento da página
    animateCtaButton();

    // Repete a animação a cada 5 segundos para manter a atenção
    setInterval(animateCtaButton, 5000); 

    // Rolagem suave para todos os links de âncora (menu, CTAs da hero section)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) { // Garante que não é apenas '#'
                e.preventDefault();
                const targetId = href.substring(1); 
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});