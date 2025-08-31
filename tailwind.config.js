/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ff6b35",
        accent: "#f7931e",
        neon: "#00ff88",
        purple: "#8b5cf6",
        pink: "#ec4899",
        cyan: "#06b6d4",
        textPrimary: "#ffffff",
        textSecondary: "#a0a0a0",
        textLight: "#cccccc",
        background: "#000000",
        surface: "#0a0a0a",
        border: "#333333",
        borderDark: "#222222",
        success: "#00ff88",
        warning: "#ffaa00",
        error: "#ff4444",
        darkGray: "#1a1a1a",
        lightGray: "#2a2a2a",
        gradient1: "#ff6b35",
        gradient2: "#f7931e",
        gradient3: "#8b5cf6",
        gradient4: "#ec4899"
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Poppins', 'system-ui', 'sans-serif'],
        'tech': ['Orbitron', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'heading': ['Rajdhani', 'Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'body': ['Poppins', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-neon': 'pulseNeon 1.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 10s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }
        },
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 136, 0.8)' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 10px 20px -2px rgba(0, 0, 0, 0.2)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 2px 10px -2px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'glow-strong': '0 0 30px rgba(255, 107, 53, 0.5)',
        'neon': '0 0 20px rgba(0, 255, 136, 0.5)',
        'neon-strong': '0 0 40px rgba(0, 255, 136, 0.8)',
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'pink-glow': '0 0 20px rgba(236, 72, 153, 0.5)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.5)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cool': 'linear-gradient(45deg, #ff6b35, #f7931e, #8b5cf6, #ec4899)',
        'gradient-fire': 'linear-gradient(45deg, #ff6b35, #f7931e)',
        'gradient-ocean': 'linear-gradient(45deg, #06b6d4, #8b5cf6)',
        'gradient-sunset': 'linear-gradient(45deg, #f7931e, #ec4899)',
      }
    },
  },
  plugins: [],
}
