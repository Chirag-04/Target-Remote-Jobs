function someSyncTask1() {
    console.log("task 1"); //3
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
    someSyncTask1();    // 2       
    const userData = await fetchUserData();  // 4 wait for promise 
    someSyncTask2();      // 6 after promise resolved 
}

main();    // 1
someSyncTask3(); // 5

// ouptut task1 task 2 task 3