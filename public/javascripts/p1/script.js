//const brain = require("brain.js")

network = new brain.NeuralNetwork({ hiddenlayers: [1] })

network.train([
    {input: {Accuracy: 50}, output: {good: 0}},
    {input: {Accuracy: 13}, output: {good: 0.8}},
    {input: {Accuracy: 19}, output: {good: 0.7}},
    {input: {Accuracy: 35}, output: {good: 0.2}},
    {input: {Accuracy: 25}, output: {good: 0.44}},
    {input: {Accuracy: 7}, output: {good: 0.9}},
    {input: {Accuracy: 40}, output: {good: 0.1}},
    {input: {Accuracy: 23}, output: {good: 0.55}},
    {input: {Accuracy: 0}, output: {good: 1}},
])
//neat

//const result = brain.likely({Accuracy: 39}, network)
const result = network.run({ Accuracy: 14 })
console.log(result, think({ Accuracy: 42 }, network.weights))

var NeuralNetworkArray = []

//class NeuralNetwork {
    //NO constructor

    function think(inputs, weights) {
        network.weights = weights
        var output = network.run(inputs)
        if (output.good > 0.5) {
            console.log('good')
        } else {
            console.log('bad')
        }
    }

    function mutate(THISnetwork) {
        var index1,
            index2,
            index3,
            randomNumber
        
        THISnetwork.weights.forEach(weight => {
            index1 = THISnetwork.weights.indexOf(weight)
            weight.forEach(FloatArray => {
                index2 = THISnetwork.weights[index1].indexOf(FloatArray)
                FloatArray.forEach(number => {
                    randomNumber = Math.random() * (max - min) + min
                    index3 = THISnetwork.weights[index1][index2].indexOf(number)
                    THISnetwork.weights[index1][index2][index3]*=randomNumber
                });
            });
        });
    }

    function copy(THISnetwork) {
        NEWnetwork = new brain.NeuralNetwork({ hiddenlayers: [1] })
        console.log(NEWnetwork)
        NEWnetwork.weights = THISnetwork.weights
        NeuralNetworkArray.push({ weights: THISnetwork.weights })
    }
//}

// function copy(THISnetwork) {
//     NEWnetwork = new brain.NeuralNetwork({ hiddenlayers: [1] })
//     console.log(NEWnetwork)
//     NEWnetwork.weights = THISnetwork.weights
//     console.log('fdfdfd0', THISnetwork.weights, NEWnetwork.weights, NEWnetwork)
//}
// copy(network)

// const max = 2,
//       min = -2

// function mutate(THISnetwork) {
//     var index1,
//         index2,
//         index3,
//         randomNumber

//     THISnetwork.weights.forEach(weight => {
//         index1 = THISnetwork.weights.indexOf(weight)
//         weight.forEach(FloatArray => {
//             index2 = THISnetwork.weights[index1].indexOf(FloatArray)
//             FloatArray.forEach(number => {
//                 randomNumber = Math.random() * (max - min) + min
//                 index3 = THISnetwork.weights[index1][index2].indexOf(number)
//                 THISnetwork.weights[index1][index2][index3]*=randomNumber
//             });
//         });
//     });
//     console.log(THISnetwork.weights)
// }