let load=addEventListener('load',()=>{
    var screenWidth = screen.width;
    header= document.querySelector('header')
    footer=document.querySelector('footer')

    if(screenWidth <= 781){
        let info=document.querySelector('.info')
        let aviso=document.querySelector('.aviso')
        info.remove();
        aviso.remove();

        //creamos en js
        let inf=document.createElement('div')
        let usuario=document.createElement('p')
        let contNivel=document.createElement('div')
            let nivelP=document.createElement('p')
        let mision=document.createElement('div')
        let span=document.createElement('span')
        let footerTel=document.createElement('footerTel')
        let conTextoTel=document.createElement('div')
        let imgConTextoTel=document.createElement('div')
        let titConTextoTel=document.createElement('p')
        let texConTextoTel=document.createElement('p')
        titConTextoTel.textContent='Descubre...'
        texConTextoTel.textContent='vinculoaarticulo de descubrimiento...'
        //añadimos clases
        inf.classList.add('inf')

        usuario.textContent='correo@correo';
        usuario.classList.add('usuario')
        
        contNivel.classList.add('nivelTel')
            nivelP.textContent='Nv1';
            mision.classList.add('progressBartel')

        footerTel.classList.add('footerTel')
            conTextoTel.classList.add('conTextoTel')
            imgConTextoTel.classList.add('imgConTextoTel')
            texConTextoTel.classList.add('texConTextoTel')
            titConTextoTel.classList.add('titConTextoTel')
        //añadimos a html
        header.appendChild(inf)

        footer.appendChild(footerTel)
        footer.appendChild(conTextoTel)
        
        conTextoTel.appendChild(imgConTextoTel)
        conTextoTel.appendChild(titConTextoTel)
        conTextoTel.appendChild(texConTextoTel)
        inf.appendChild(usuario)

        inf.appendChild(contNivel)
            contNivel.appendChild(nivelP)

        
        mision.appendChild(span)
        
        inf.appendChild(mision)
        
    }
} )

const Tenere =document.querySelector('.btnP1')
Tenere.addEventListener('click',function(){

//creo overlay
const overlay=document.createElement('div');
overlay.classList.add('overlay')

//creo contennedor imagen
const conImg=document.createElement('div')
conImg.classList.add('conImg')

//creo imagen
const img=document.createElement('img');
img.src='/src/img/conteMensaje.png';
img.classList.add('img')

//creo botoncerrar
const btnCerrar=document.createElement('img');
btnCerrar.classList.add('btnCerrar')
btnCerrar.src='/src/img/btnClose.png';

//creo contTexto y texto
const conTexto=document.createElement('div')
conTexto.classList.add('conTexto')
const tittexto=document.createElement('h2')
const texto=document.createElement('p')

tittexto.textContent=('Tenere')
texto.textContent=('aprende a ser un mejor abedul compartiendo conocimiento con la comunidad')



//difumino la parte de atras del overlay
const header=document.querySelector('header');
const main=document.querySelector('main');
header.classList.add('difuminado')
main.classList.add('difuminado')


//añado a html
const body=document.querySelector('body')

body.appendChild(overlay)

overlay.appendChild(conImg)
conImg.appendChild(img)
conImg.appendChild(btnCerrar)
conImg.append(conTexto)
overlay.appendChild(conTexto)
conTexto.appendChild(tittexto)
conTexto.appendChild(texto);


//funcion btn cerrar
btnCerrar.onclick=function () {
    overlay.remove();
    header.classList.remove('difuminado')
    main.classList.remove('difuminado')
}
});



document.addEventListener('click',(e) => {
    
    if(e.target.classList.contains('btnMute')){
        
        let btnMute=document.querySelector('.btnMute')
        btnMute.classList.remove('btnMute')
        btnMute.classList.add('background') 


    }else if(e.target.classList.contains('background')){

        let background=document.querySelector('.background')
        background.classList.remove('background')
        background.classList.add('btnMute') 
    }


})


