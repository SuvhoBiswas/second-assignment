let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;

function deposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    totalDeposit += amount;
    totalBalance += amount;
    updateUI();
}

function withdraw() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }
    if (amount > totalBalance) {
        alert("Insufficient Balance");
        return;
    }
    totalWithdraw += amount;
    totalBalance -= amount;
    updateUI();
}

function updateUI() {
    document.getElementById("total-deposit").innerText = totalDeposit;
    document.getElementById("total-withdraw").innerText = totalWithdraw;
    document.getElementById("total-balance").innerText = totalBalance;
    document.getElementById("amount").value = "";
}