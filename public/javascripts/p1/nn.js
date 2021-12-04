class NeuralNetwork {
    constructor (layers, connection, neurons, bias) {
        this.layers = layers
        if (connection) {
            this.connection = connection
            this.neurons = neurons
            this.bias = bias
            this.mutate()
        } else {
            this.connection = {}
            this.neurons = {}
            this.bias = {}
            let i = 0
            layers.forEach(layer => {
                for (let l = 0; l < layer; l++) {
                    this.neurons[`${i}${l}`] = 0
                }
                i++
            });
            for (let index = 1; index < layers.length; index++) {
                const layer = layers[index];
                for (let l = 0; l < layer; l++) {
                    this.connection[`${index}${l}`] = {}
                    this.bias[`${index}${l}`] = {}
                    for (let i = 0; i < layers[index-1]; i++) {
                        let weight = Math.random()
                        let bias = (Math.random() * 2) - 1
                        this.connection[`${index}${l}`][`${index-1}${i}`] = weight; 
                        this.bias[`${index}${l}`][`${index-1}${i}`] = bias; 
                    }
                }
            }
        }
    }

    print () {
        console.log(this)
    }

    mutate () {
        console.log(this.connection)
        for (let i = 1; i < this.layers.length; i++) { // number between -0.2 to 0.2
            for (let l = 0; l < this.layers[i]; l++) {
                let conObj = this.connection[`${i}${l}`]
                for (const connection in conObj) {
                    let number =  (Math.random() * 0.4) - 0.2
                    let number2 = (Math.random() * 0.4) - 0.2
                    this.connection[`${i}${l}`][connection] += number
                    this.bias[`${i}${l}`][connection] += number2
                }
            }
        }
    }

    calculate(inputs) { // give inputs in percentage so it will work
        for (let index = 0; index < this.layers[0]; index++) {
            this.neurons[`${0}${index}`] = inputs[index]            
        }
        let lastrow = []
        for (let i = 1; i < this.layers.length; i++) {
            for (let l = 0; l < this.layers[i]; l++) {
                let conObj = this.connection[`${i}${l}`]
                let num = 0
                for (const connection in conObj) {
                    num += (conObj[connection]*this.neurons[connection]+this.bias[`${i}${l}`][connection])
                }  
                let sig = 1 / ( 1 + ( Math.pow( Math.E, -num) ) )
                this.neurons[`${i}${l}`] = sig // sigmoid of num || sig = 1/1+e^-x
                if (this.layers.length-1 == i) { // create array of last
                    let obj = {}
                    obj[`${i}${l}`] = sig
                    lastrow.push(obj)
                }
            }
        }
        console.log(lastrow, 'ddd')
        //return lastrow
    }

}
var network = new NeuralNetwork([5,8,1])
network.calculate([0.7, 0.3, 0.4, 0.4, 0.1])
//network.print()