function exibe(){
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("pass").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;

    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
    modal.style.zIndex = "9999"; 
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";

   
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "5px";
    modalContent.style.width = "80%";
    modalContent.style.maxWidth = "500px";
    modalContent.innerHTML = 
    
        `<h3>Informações fornecidas:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sobrenome:</strong> ${sobrenome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <button id="fecharModal" style="margin-top: 20px; padding: 10px 15px; background-color: #007BFF; color: white; border: none; cursor: pointer;">Fechar</button>`;

    
    modal.appendChild(modalContent);

   
    document.body.appendChild(modal);

    
    document.getElementById("fecharModal").addEventListener("click", function() {
        document.body.removeChild(modal); 
    });

modal.addEventListener("click", function(event) {
    
    if (event.target === modal){

            document.body.removeChild(modal);}});}


document.getElementById("mudar_titulo").addEventListener("click", function(){

            document.querySelector(".titulo_video").style.backgroundColor = "#4324d5";});

document.getElementById("mudar_video").addEventListener("click", function(){
         
            document.querySelector(".video iframe").src = "https://www.youtube.com/embed/qwclAyGykec?si=PJ96628G352n4diI";});