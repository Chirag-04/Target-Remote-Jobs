// more cleaner way of writing async code 

// lets handle the ChiragSetTimeout using async await

function ChiragSetTimeOut(duration){
    const p = new Promise( function(resolve){
        setTimeout(function(){
            resolve("done");
        } , duration);
    });
    return p;
}

async function main(){
    const value = await ChiragSetTimeOut(2000);
    console.log(value);
}

main();
