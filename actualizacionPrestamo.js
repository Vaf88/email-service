(function() {
    emailjs.init("yYRo28PW7E_EwpUei");
})();

document.getElementById("loanUpdateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_hcc8gik", "template_ACTUALIZA_AQUI_ID", {
        student_full_name: document.getElementById("student_name").value,
        student_document: document.getElementById("student_document").value,
        items_list: document.getElementById("items").value,
        items_codes: document.getElementById("items_codes").value,
        loan_start_date: document.getElementById("loan_start").value,
        previous_due_date: document.getElementById("previous_due").value,
        new_due_date: document.getElementById("new_due").value,
        extension_reason: document.getElementById("reason").value,
        staff_full_name: document.getElementById("staff_name").value,
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