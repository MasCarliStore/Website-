const BASE_URL = "https://mascarli-official.biz.id";
function toggleMenu(){
 document.getElementById('nav').classList.toggle('show');
}

function rupiah(n){
 return new Intl.NumberFormat('id-ID').format(n);
}
