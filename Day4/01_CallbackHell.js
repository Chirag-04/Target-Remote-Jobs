// let say we have to desing an ecommerce cart
// after creatingorder --> proceed to payment --> showOrderSummary --> Update Wallet

// after creating we want to call proceed to payment api back

const cart = ["shoes" , "pants"  , "kurtas"];


api.createOrder(cart , function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        })
    })
}); 
// This is callback hell or pyramid of doom


// Main problem is inversion of control 
// we are relying on createOrder api to call proceedToPaymeny api when it is done creating an order
// isnt it risky  ? We are trusting some other api to call our callback correctly


// Problems with this code:

// 1. Poor Readability: The nested structure makes code hard to read and maintain
// 2.Error Handling: Difficult to implement proper error handling for each callback
// 3. Inversion of Control: You're trusting the APIs to call your callbacks correctly
// 4. Debugging: Hard to debug due to multiple nested levels



// Better way to write the same code 
// using promises
api.createOrder(cart)
.then(()=> api.proceedToPayment())
.then(()=> api.showOrderSummary())
.then(()=> api.updateWallet())
.catch((error)=>console.log(err));


// using async await (Best way)

async function orderProcess() {
    try {
        const p1 = await createOrder(cart);
        const p2 = await proceedToPayment();
        const p3 = await showOrderSummary();
        const p4 = await updateWallet();
    } catch(error) {
        console.log(error);
    }
}