/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./style.css",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pml: {
                    bg: '#0B0E14',   // near-black, blue-tinted
                    panel: '#121826', // secondary panels
                    text: '#E6EAF2', // primary text
                    muted: '#8B93A7', // muted text
                    accent: '#3AFF8F', // Authority green
                    cyan: '#4FD1FF', // Secondary accent
                    error: '#FF3A3A', // implied dark red
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            backgroundImage: {
                'glow-gradient': 'radial-gradient(circle at center, rgba(58, 255, 143, 0.15) 0%, transparent 70%)',
                'subtle-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                'aurora': 'linear-gradient(135deg, #0B0E14 0%, #0B0E14 40%, rgba(58, 255, 143, 0.03) 50%, #0B0E14 60%, #0B0E14 100%)',
            },
            boxShadow: {
                'glow': '0 0 40px -10px rgba(58, 255, 143, 0.3)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'glass-hover': '0 20px 40px 0 rgba(0, 0, 0, 0.4)',
            },
            animation: {
                'cursor-blink': 'blink 1s step-end infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'aurora-move': 'auroraMove 10s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                auroraMove: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        },
    },
    plugins: [],
}
