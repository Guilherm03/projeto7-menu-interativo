let userInput;

do {
    console.log("Selecione uma das opções:");
    console.log("1- Opção 1");
    console.log("2- Opção 2");
    console.log("3- Opção 3");
    console.log("4- Opção 4");
    console.log("5- Encerrar");

    userInput = prompt("Digite o número da opção desejada:");

    if (userInput === "1") {
        console.log("Você escolheu a opção 1");
    } else if (userInput === "2") {
        console.log("Você escolheu a opção 2");
    } else if (userInput === "3") {
        console.log("Você escolheu a opção 3");
    } else if (userInput === "4") {
        console.log("Você escolheu a opção 4");
    } else if (userInput === "5") {
        console.log("O sistema está sendo encerrado...");
    } else {
        console.log("Opção inválida. Tente novamente!");
    }
} while (userInput !== "5");