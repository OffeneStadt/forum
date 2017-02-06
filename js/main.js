document.addEventListener("DOMContentLoaded", function(event) { 
    var apps = document.getElementsByClassName('app');

    for(var i=0; i< apps.length;i++){
        apps[i].addEventListener('click', function(){
            window.open(this.getAttribute('data-href'), '_blank');

        })
    }
});
