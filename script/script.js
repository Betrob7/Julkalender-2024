const snowContainer = document.querySelector('.snowflakes');
const snowflakeSymbols = [ '❅', '❆']; // Olika snöflingeformer

function createSnowflake() {
    const snowflake = document.createElement('span');
    snowflake.classList.add('snowflake');
    snowflake.innerText = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
    
    // Slumpmässig storlek och position för varje snöflinga
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Fallhastighet
    
    // Lägg till snöflingan och ta bort den när animationen är klar
    snowContainer.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, (parseFloat(snowflake.style.animationDuration) * 1000)); // Ta bort efter animationstid
}

// Skapar nya snöflingor var 100ms
setInterval(createSnowflake, 100);
