const HeaderFixed = () => {
    return ( 
        window.onscroll = function showHeader(){
            let header = document.querySelector('.header-block');
        
            if(window.pageYOffset > 650){
                header.classList.add('header-fixed');
            } else{
                header.classList.remove('header-fixed');
        
            }
        }
     );
}
 
export default HeaderFixed;