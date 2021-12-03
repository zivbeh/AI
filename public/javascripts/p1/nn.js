class NeuralNetwork {
    constructor (layers, connection) {
        this.layers = layers
        if (connection) {
            this.connection = connection
            mutate()
        } else {
            this.connection = {}
            this.neurons = {}
            let i = 0
            layers.forEach(layer => {
                for (let l = 0; l < layer; l++) {
                    this.neurons[`${i}${l}`] = Math.random()
                }
                i++
            });
            for (let index = 1; index < layers.length; index++) {
                const layer = layers[index];
                for (let l = 0; l < layer; l++) {
                    this.connection[`${index}${l}`] = {}
                    for (let i = 0; i < layers[index-1]; i++) {
                        let weight = Math.random()
                        this.connection[`${index}${l}`][`${index-1}${i}`] = weight; 
                    }
                }
            }
        }
    }

    print () {
        console.log(this)
    }

    mutate () {
        for (const connection in this.connection) { // number between -0.2 to 0.2
            for (const weight in this.connection) {
                let number =  Math.random() * (0.4) -0.2
                this.connection[connection][weight] += number
            }
        }
    }

    calculate() {
        for (let i = 1; i < this.layers.length; i++) {
            for (let l = 0; l < this.layers[i]; l++) {
                let conObj = this.connection[`${i}${l}`]
                let num = 0
                for (const connection in conObj) {
                    console.log(connection)
                    num += (conObj[connection]*this.neurons[connection])
                }  
                    this.neurons[`${i}${l}`] = num // sigmoid of num
            }

        }
    }

}
var network = new NeuralNetwork([2,2,2])
network.print()