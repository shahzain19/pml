import './style.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/jetbrains-mono/400.css';

document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Page Transition ---
    document.body.classList.add('loaded'); // Fade in on load

    // Intercept links
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.href;

                // Don't transition if just hash change on same page
                if (link.pathname === window.location.pathname && link.hash) {
                    document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' });
                    return;
                }

                document.body.classList.remove('loaded'); // Fade out
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Match CSS transition time
            });
        }
    });


    // --- Spotlight Effect ---
    const cards = document.querySelectorAll('.spotlight-card');
    document.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- Terminal Animation ---
    const terminalContent = document.getElementById('terminal-content');
    const terminalCursor = document.querySelector('.terminal-cursor');

    // Only run if elements exist
    if (terminalContent) {
        const lines = [
            { text: '● MODIFY src/auth/session.ts', color: 'text-yellow-400' },
            { text: '✓ Project structure synced', color: 'text-pml-accent' },
            { text: '✓ Cursor rules updated', color: 'text-pml-accent' },
            { text: '✓ Copilot instructions updated', color: 'text-pml-accent' },
            { text: 'Waiting for changes...', color: 'text-pml-muted' }
        ];

        let lineIndex = 0;

        async function typeLine(lineData) {
            const p = document.createElement('div');
            p.className = `font-mono ${lineData.color} transition-all duration-300`;
            terminalContent.appendChild(p);

            if (lineIndex === 0) {
                const chars = lineData.text.split('');
                for (let char of chars) {
                    p.textContent += char;
                    await new Promise(r => setTimeout(r, 40));
                }
            } else {
                p.textContent = lineData.text;
                // Add a subtle slide-in for "output" lines
                p.style.opacity = '0';
                p.style.transform = 'translateX(-10px)';
                requestAnimationFrame(() => {
                    p.style.opacity = '1';
                    p.style.transform = 'translateX(0)';
                });
                await new Promise(r => setTimeout(r, 150));
            }

            lineIndex++;
            if (lineIndex < lines.length) {
                setTimeout(() => typeLine(lines[lineIndex]), 400);
            } else {
                if (terminalCursor) terminalCursor.classList.remove('hidden');
            }
        }

        // Start animation when terminal is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (lineIndex === 0) typeLine(lines[0]);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const terminalSection = document.querySelector('#terminal-card') || document.querySelector('#terminal-content');
        if (terminalSection) observer.observe(terminalSection);
    }
});
