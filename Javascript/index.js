

const sr = ScrollReveal()

sr.reveal(".img-app,.img-mobility,.img-consulting",{

    duration: 1500,
    origin: 'bottom',
    distance: '200px',
    reset: true,
    delay: 0,

})
sr.reveal('.mobility h3,.app h3,.consulting h3, .bloc, .triangle1',{

    duration: 1500,
    origin: 'bottom',
    distance: '200px',
    reset: true
})
sr.reveal('.mobility p,.app p,.consulting p, .sec7-cont',{

    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    reset: true,
})
sr.reveal('.mobility .more,.app .more,.consulting .more',{

    duration: 1500,
    origin: 'top',
    distance: '100px',
    reset: true,
    rotate:{
        x: 0,
        y: 0,
        z: 200,
        
    },
    delay: 250,
})
sr.reveal('.titre3',{

    origin:'top',
    distance: '200px',
    duration: 1500,
    reset:true
})

sr.reveal('.cone',{

    origin:'right',
    distance:'250px',
    duration:1500,
    reset: true,
    delay:250,
})

sr.reveal('.p3',{
    duration: 2500,
    reset:true
})
sr.reveal('.cercle-couleur, .cercle-couleur1, .vague',{

    origin:'left',
    distance:'200px',
    duration:2000,
    reset:true,
})
sr.reveal('.sec6 .croissant',{

    origin:'left',
    distance:'400px',
    duration:2000,
    reset:true,
})

sr.reveal('.sec6 .circle',{

    origin:'right',
    distance:'200px',
    duration:2000,
    reset:true,

})

sr.reveal('.sec7 .rond',{

    origin:'right',
    distance:'200px',
    scale:2,
    duration:2000,
    reset:true  
})

sr.reveal('.carre',{

    origin: 'right',
    distance: '50px',
    duration: 2500,
    scale: 1.5,
    rotate: {
        y: 80,
        z: 80,
        x: 200,
    },
    reset:true
})

sr.reveal('.sec7-bloc1 p, .sec7-bloc2 p, .sec7-bloc3 p, .sec7-bloc1 h3, .sec7-bloc2 h3, .sec7-bloc3 h3',{
    origin:'right',
    distance:'200px',
    duration:2500,
    delay: 150,
    reset:true
})

const formButton = document.querySelector('.form-button');

formButton.addEventListener('click', (e) => {

    e.preventDefault();
    alert(`C\'est juste un modèle.`)
})