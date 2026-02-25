(function () {
  emailjs.init("TU_PUBLIC_KEY");
})();

document.getElementById("overdueForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const dueDate = new Date(document.getElementById("due_date").value);
  const today = new Date();

  const diffTime = today - dueDate;
  const daysOverdue = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const templateParams = {
    student_full_name: document.getElementById("student_name").value,
    student_document: document.getElementById("student_document").value,
    items_list: document.getElementById("items").value,
    items_codes: document.getElementById("items_codes").value,
    due_date: document.getElementById("due_date").value,
    days_overdue: daysOverdue > 0 ? daysOverdue : 0,
    lis_contact: "(604) 2195532 - lis@udea.edu.co",
    to_email: document.getElementById("student_email").value
  };

  emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
    .then(function () {
      alert("Aviso de préstamo vencido enviado ✅");
      document.getElementById("overdueForm").reset();
    })
    .catch(function (error) {
      console.log(error);
      alert("Error al enviar ❌");
    });
});