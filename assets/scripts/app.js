const defaultResult = 0;
let currentResult = defaultResult;

function InputUser() {
    return parseInt(userInput.value);
}

function Output(hasilLama,Operator,inputNUmber) {
    const calculationDesc = `${hasilLama} ${Operator} ${inputNUmber}`;
    outputResult(currentResult, calculationDesc);
}

function Add() {
    const enteredNumber = InputUser();
    const nilaiAwal = currentResult;
    currentResult += enteredNumber;
    Output(nilaiAwal,'+',enteredNumber);
}
function Substract() {
    const enteredNumber = InputUser();
    const nilaiAwal = currentResult;
    currentResult -= enteredNumber;
    Output(nilaiAwal,'-',enteredNumber);
}
function Multiple() {
    const enteredNumber = InputUser();
    const nilaiAwal = currentResult;
    currentResult *= enteredNumber;
    Output(nilaiAwal,'x',enteredNumber);
}
function Divide() {
    const enteredNumber = InputUser();
    const nilaiAwal = currentResult;
    currentResult /= currentResult / enteredNumber;
    Output(nilaiAwal,'/',enteredNumber);
}
function Reset() {
    currentResult = 0;
    outputResult(0,0,0);
}



addBtn.addEventListener('click',Add)
subtractBtn.addEventListener('click',Substract)
multiplyBtn.addEventListener('click',Multiple)
divideBtn.addEventListener('click',Divide)
resetBtn.addEventListener('click',Reset)

 