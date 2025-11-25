gameSpace = document.querySelector(".game-space");
startButton = document.querySelector(".start-button");

function showResult(result) {
    gameSpace.innerHTML = "";
    resultHeading = document.createElement("h1");
    resultHeading.className = "selector-result";
    resultHeading.textContent = "Your suggested license is " + result;
    gameSpace.appendChild(resultHeading);
    
    startButton = document.createElement("button");
    startButton.className = "selector-button";
    startButton.textContent = "Use the License Selector Again";
    startButton.addEventListener('click', function() {
        startSelector();
    });
    gameSpace.appendChild(startButton);
}

function gameState6() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Yes";
    button2.textContent = "No";
    
    button1.addEventListener('click', function() {
        showResult("CC-BY-NC");
    });
    
    button2.addEventListener('click', function() {
        showResult("CC-BY-NC-ND");
    });
    
    questionHeading.textContent = "Do you want people to change your work?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function gameState5() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Yes";
    button2.textContent = "No";
    
    button1.addEventListener('click', function() {
        showResult("CC-BY-SA");
    });
    
    button2.addEventListener('click', function() {
        gameState6("CC-BY-ND");
    });
    
    questionHeading.textContent = "Do you want people to change your work?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function gameState4() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Yes";
    button2.textContent = "No";
    
    button1.addEventListener('click', function() {
        gameState5();
    });
    
    button2.addEventListener('click', function() {
        gameState6();
    });
    
    questionHeading.textContent = "Do you want people to make money off of your work?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function gameState3() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Yes";
    button2.textContent = "No";
    
    button1.addEventListener('click', function() {
        showResult("CC-BY-SA");
    });
    
    button2.addEventListener('click', function() {
        showResult("CC-BY");
    });
    
    questionHeading.textContent = "Should others have to distribute your work under the same license?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function gameState2() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Yes";
    button2.textContent = "No";
    
    button1.addEventListener('click', function() {
        gameState3();
    });
    
    button2.addEventListener('click', function() {
        showResult("CC0");
    });
    
    questionHeading.textContent = "Should others have to give attribution?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function gameState1() {
    gameSpace.innerHTML = "";
    questionHeading = document.createElement("h1");
    buttonContainer = document.createElement("div");
    button1 = document.createElement("button");
    button2 = document.createElement("button");
    
    buttonContainer.className = "selector-container";
    
    button1.className = "selector-button";
    button2.className = "selector-button";
    
    button1.textContent = "Permissive";
    button2.textContent = "Strict";
    
    button1.addEventListener('click', function() {
        gameState2()
    });
    
    button2.addEventListener('click', function() {
        gameState4()
    });
    
    questionHeading.textContent = "Do you want your license to be strict or permissive?";
    gameSpace.appendChild(questionHeading);
    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    gameSpace.appendChild(buttonContainer);
}

function startSelector() {
    gameSpace.removeChild(startButton);
    gameState1();
}
