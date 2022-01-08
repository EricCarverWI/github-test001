// ERIC CARVER 

function main (arr){

    let furnitureBought = [];
    let totalBill = 0;

    let pattern = />>(?<product>[A-z]+)<<(?<price>\d+(\.\d{2})?)!(?<quantity>\d+)/m;

    arr.forEach(element => {

        if (pattern.test(element)){
            let match = pattern.exec(element);
            furnitureBought.push(match.groups.product);
            totalBill += (Number(match.groups.price) * Number(match.groups.quantity));
        }
    });

    if (furnitureBought.length){
        console.log ('Bought furniture:');
        furnitureBought.forEach(element => {
            console.log (element);
        });
        console.log (`Total money spend: ${totalBill.toFixed(2)}`);
    }
}
main (['>>Mouse.<1!1','>>Sofa<<350!2','>>Bookshelf<<125!1']);
// main (['>>Sofa<<312.23!3','>>TV<<300!5','>Invalid<<!5','Purchase']);