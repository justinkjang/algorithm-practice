//Amazon OA-1 get discounted prices

product inputs = [[10, 'sale', 'jan-sale'], [200, 'sale', 'EMPTY']]
discount inputs = [['sale', 0, 10], ['jan-sale', 1, 10]]
['price', 'discount tags' ...]
['discount tag name', 'type', 'amount']
discount type 0 = fixed sale price
type 1 = %sale
type 2 = current price - sale price

input answer = 19

function findLowestPrice(products, discounts) {
    for (let i = 0; i < products.length; i++){
        console.log(products[i])
        
        
        for (let k = 1; k <= products.length; k++){
            
            let discountPrice = 0;
            
            for (let j = 0; j < discounts.length; j++){
                console.log(discounts[j])
                
                if (products[i][k] === discounts[j][0]) {
                    console.log(products[i][k])
                    
                    if (discounts[j][1] === 0) {
                        discountPrice = discounts[j][2]
                        
                    }
                }
            }       
            
            console.log(discountPrice)
        }             
    }
    
    
    // let discPrice = 0
    

    //         if (discounts[j][1] == 1) {
    //             discPrice = Math.floor(products[i][0] * ((100 - discounts[j][2]) / 100))
    //         }
    //         if (discounts[j][1] == 2) {
    //             discPrice = products[i][0] - discounts[j][2]
    //         }
             
    // console.log(discPrice)
    // 1. discount types
    // 2. for each product, find matching discount tags
    // 3. have discount price applied
    // 4. extract Math.min 
    // 5. add all.
}