(function() {
    emailjs.init("yYRo28PW7E_EwpUei"); // Tu Public Key
})();

document.getElementById("loanReturnForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_hcc8gik", "TEMPLATE_ID_AQUI", {
        student_full_name: document.getElementById("student_name").value,
        student_document: document.getElementById("student_document").value,
        items_list: document.getElementById("items").value,
        items_codes: document.getElementById("items_codes").value,
        return_date: document.getElementById("return_date").value,
        staff_full_name: document.getElementById("staff_name").value,
        return_notes: document.getElementById("notes").value,
        to_email: document.getElementById("student_email").value
    })
    .then(function(response) {
        alert("Correo enviado correctamente ✅");
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        alert("Error al enviar ❌");
        console.log("FAILED...", error);
    });
});