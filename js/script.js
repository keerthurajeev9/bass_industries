
const navbar = document.getElementById('navbar');
let scroll =false;
window.onscroll = function(){
    if(window.pageYOffset>100){
        navbar.classList.remove('top');
        if(!scroll){
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(() => {
            navbar.style.transform = 'translateY(0px)';
            scroll=false
            
        }, 250);
    }
    else{
        navbar.classList.add('top');
    }

}
//Scrolling
$('#navbar a,button').on('click',function(e){
    if(this.hash!==''){
        e.preventDefault();
        const hash=this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top -100,
        },
        800
        );
    }
});
