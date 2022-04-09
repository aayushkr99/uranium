const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function (req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

// router.get('/movies', function (req, res) {
//     const arr = ['Orange', 'You Lie in April', 'Attack on Titan', 'Prison School', 'Akame', 'Wethering with you', 'Parasyte', 'Monster']
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(arr[i])
//     }
//     res.send(arr1)
// });

// router.get('/movies/:indexNumber', function (req, res) {
//     const arr =['Orange','You Lie in April','Attack on Titan','Prison School','Akame','Wethering with you','Parasyte','Monster']
//     let arr1;
//     let n = req.params.indexNumber
//     for(let i=0; i< arr.length;i++){
//         if (i==n){
//             arr1 = arr[i];
//         }
//     }
//      res.send(arr1)
//     });

// router.get('/movies/:indexNumber', function (req, res) {
//     const arr =['Orange','You Lie in April','Attack on Titan','Prison School','Akame','Wethering with you','Parasyte','Monster']
//     let arr1;
//     let n = req.params.indexNumber
//     for(let i=0; i< arr.length;i++){
//         if (i<n){
//             arr1 = 'Invalid Entry, input range is between 0 to 7'
//         }
//         if (i==n){
//             arr1 = arr[i]
//         }
//     }
//      res.send(arr1) //problem 3
//     });

    router.get('/films', function(req, res) {
        const fNames = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
            let abc = []
            for(let i=0;i<=fNames.length; i++)
            abc.push(fNames[i])
    
        res.send(abc) //problem 4
    });

    router.get('/films/:filmId', function(req, res) {
        const fNames = [ {
            "id": 1,
            "name": "The Shining"
           }, {
            "id": 2,
            "name": "Incendies"
           }, {
            "id": 3,
            "name": "Rang de Basanti"
           }, {
            "id": 4,
            "name": "Finding Nemo"
           }]
            let abc;
            let n = req.params.filmId
            for(let i=0;i<fNames.length; i++){
                 if(n > fNames.id){
                     abc = "Invalid Entry , no such films "
                 }
                 if(n== fNames[i].id){
                     abc =fNames[i]
                 }
            }
            
    
        res.send(abc) //problem 4
    });
    





module.exports = router;
// adding this comment for no reason