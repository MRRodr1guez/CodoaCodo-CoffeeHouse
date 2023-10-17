const formulario = document.querySelector(".contact")

formulario.addEventListener("submit", handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
        "Accept": "application/json"
        } 
    })

    if (response.ok){
        this.reset()
        alert("Gracias por contactarnos, pronto nos pondremos en contacto")
    }
}

window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("scrollToTopButton").style.display = "block";
    }else{
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

document.getElementById("scrollToTopButton").addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
})



