const orderForm = document.getElementById("orderForm")

const submitForm = (e) => {
    e.preventDefault();
    alert("Order Submitted Successfully");
}

orderForm.addEventListener('submit', (e) => {
    submitForm(e);
})