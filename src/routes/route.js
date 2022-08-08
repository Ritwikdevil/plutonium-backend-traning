const express = require('express');

const router = express.Router();
const lodash = require('lodash')

router.get('/myapi', function (req, res) {
    // Problem a)
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let subArrays = lodash.chunk(months, 3)
    console.log('The result after splitting the months array is ', subArrays)
    
    // Problem b)
    
    let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))
    
    // Problem c)
    let a = [1 , 2, 8, 5,3]
    let b = [2, 3, 4,5,4,5,6,4,3]
    let c = [6, 1, 5, 12,48,6,34]
    let d = [1, 1, 34,34,48,642,42]
    let e = [1, 12, 3,5,235,32,78,9,78]
    
    console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))
    
    // Problem d)
    let arrayOfKeyValuePairs = [["action","PUSHPA"],["drama","major"],["fullaction","K G F2"],["comedy","Dhamaal"],["historical","Samrat Prithviraj"]]
    console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
        res.send('my new api')
    });


module.exports = router;
// adding this comment for no reason