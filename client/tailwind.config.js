module.exports = {
    content: ['./src/**/*.{html,js,ts}',
    './components/navbar/*.{html,js}'],
    // content:['./component/*.{html,js}'],
    plugins: [require('daisyui')],
    darkMode: true,
    daisyui:{
        themes:["light", "dark","cupcake","garden","winter","lemonade", "night"],
        darkTheme: "dark",
    },
};
