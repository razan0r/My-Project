const loading = document.querySelector('.loading');




    window.addEventListener("load", function(){
        setTimeout(function() {
         loading.classList.add('opacity-0', 'invisible')
         document.body.style.overflow= 'auto'
        }, 2000)
        })