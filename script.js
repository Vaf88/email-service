(function () {
  emailjs.init("yYRo28PW7E_EwpUei");
})();

document.getElementById("loanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Calcular automáticamente los días de préstamo
  const startDate = new Date(document.getElementById("loan_start").value);
  const dueDate = new Date(document.getElementById("loan_due").value);
  const diffTime = dueDate - startDate;
  const loanDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const templateParams = {
    student_full_name: document.getElementById("student_name").value,
    student_document: document.getElementById("student_document").value,
    student_email: document.getElementById("student_email").value,
    student_phone: document.getElementById("student_phone").value,

    loan_start_date: document.getElementById("loan_start").value,
    loan_due_date: document.getElementById("loan_due").value,
    loan_days: loanDays,

    items_list: document.getElementById("items").value,
    items_codes: document.getElementById("items_codes").value,
    items_location: document.getElementById("items_location").value,

    staff_full_name: document.getElementById("staff_name").value,
    evidence_reference: document.getElementById("evidence_reference").value,

    to_email: document.getElementById("student_email").value
  };

  emailjs
    .send("service_hcc8gik", "template_zxujejs", templateParams)
    .then(function (response) {
      alert("Correo enviado correctamente ✅");
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("loanForm").reset();
    })
    .catch(function (error) {
      alert("Error al enviar ❌");
      console.log("FAILED...", error);
    });
});
