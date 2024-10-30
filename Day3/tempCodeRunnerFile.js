

function someSyncTask1() {
    console.log("task 1");
}

function someSyncTask2() {
    console.log("task 2");
}

function someSyncTask3() {
    console.log("task 3");
}


function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Chirag", age: 21 });
        }, 2000); 
    });
}

async function main() {  
    someSyncTask1();          
    const userData = await fetchUserData(); 
    someSyncTask2();           
}

main();    // `
someSyncTask3();
