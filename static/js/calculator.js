// Update total watts when quantity changes
function updateTotalWatts() {
    let total = 0;
    const inputs = document.querySelectorAll('.qty.text');
    inputs.forEach(input => {
        const quantity = parseInt(input.value);
        const watt = parseInt(input.getAttribute('data-watt'));
        total += quantity * watt;
    });
    document.getElementById('totalWatts').value = `Total Watts: ${total}`;
}

// Increase and decrease button functionality
document.querySelectorAll('.plus').forEach(plusBtn => {
    plusBtn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let value = parseInt(input.value);
        input.value = value + 1;
        updateTotalWatts();
    });
});

document.querySelectorAll('.minus').forEach(minusBtn => {
    minusBtn.addEventListener('click', function() {
        const input = this.nextElementSibling;
        let value = parseInt(input.value);
        if (value > 0) {
            input.value = value - 1;
            updateTotalWatts();
        }
    });
});

// Update watts when manually typing in quantity input
document.querySelectorAll('.qty.text').forEach(input => {
    input.addEventListener('change', updateTotalWatts);
});