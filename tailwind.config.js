module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily:{
        "jamjuree" : ["Bai Jamjuree", "sans"]
      },

      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },

        spin: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
        },
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateX(-2px)' },
          '40%, 80%': { transform: 'translateX(2px)' },
        },
        wow: {
          '0%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.1) rotate(5deg)' },
          '40%': { transform: 'scale(0.9) rotate(-5deg)' },
          '60%': { transform: 'scale(1.05) rotate(5deg)' },
          '80%': { transform: 'scale(0.95) rotate(-5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        colorShift: {
          '0%, 100%': { backgroundColor: '#6B7280' }, // gray-500
          '25%': { backgroundColor: '#10B981' }, // green-500
          '50%': { backgroundColor: '#22c55e' }, // blue-500
          '75%': { backgroundColor: '#8abf9e' }, // red-500
        },
        flip: {
          '0%, 100%': { transform: 'rotateX(0)' },
          '50%': { transform: 'rotateX(180deg)' },
        },

      },
      animation: {
        scaleUpDown: 'scaleUpDown 2s infinite',
        spinUp: 'spin 10s infinite ease-in-out',
        Vibration: 'vibrate 0.3s infinite linear',
        Amazed: 'wow 2s infinite ease-in-out',
        Pulsed: 'pulse 2s infinite ease-in-out',
        Coloured: 'colorShift 4s infinite linear',
        Flipped: 'flip 2s infinite ease-in-out',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          xs: "425px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },



      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      transformOrigin: {
        'center': 'center',
      },

      colors: {
        'custom-green': 'rgb(24, 180, 24)',
      },

    },


  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },

      });
    },

  ],
};
