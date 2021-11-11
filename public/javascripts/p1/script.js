const brain = require("brain.js")

network = new brain.NeuralNetwork()

network.train([
    {input: {Accuracy: 50}, output: {bad: 1}},
    {input: {Accuracy: 13}, output: {good: 1}},
    {input: {Accuracy: 19}, output: {good: 1}},
    {input: {Accuracy: 35}, output: {bad: 1}},
    {input: {Accuracy: 25}, output: {bad: 1}},
    {input: {Accuracy: 7}, output: {good: 1}},
    {input: {Accuracy: 40}, output: {bad: 1}},
    {input: {Accuracy: 23}, output: {good: 1}},
    {input: {Accuracy: 0}, output: {good: 1}},
])
//neat

//const result = brain.likely({Accuracy: 39}, network)
const result = network.run({ Accuracy: 50 })
console.log(result, network.weights)

const max = 2,
      min = -2

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
    console.log(THISnetwork.weights)
}