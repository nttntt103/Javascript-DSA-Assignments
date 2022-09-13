//------------------------1------------------------------

class Queue {
    constructor(delay = 1000) {
        this.delay = delay;
        this.callbackQueue = [];
    }

    add(callback) {
        if (arguments.length == 1) {
            if (this.callbackQueue.length == 0) {
                this.callbackQueue.push(callback);
                callback();
            } else {
                this.callbackQueue.push(callback);
                setTimeout(callback, this.delay);
            }
        }
        else if (arguments.length > 1) {
            for (argument of arguments) {
                this.callbackQueue.push(argument);
                setTimeout(argument, this.delay * this.callbackQueue.indexOf(argument));
            }
        }
    }
}

const myQueue = new Queue;
const callback1 = () => {
    console.log('This is callback number 1')
};
const callback2 = () => {
    console.log('This is callback number 2')
};
const callback3 = () => {
    console.log('This is callback number 3')
};

myQueue.add(callback1);
myQueue.add(callback2);
myQueue.add(callback3);
myQueue.add(callback1, callback2, callback3);





//-------------------------2-----------------------------

const keywordsArr = ['swift', 'rust', 'javascript', 'react', 'rx', 'ruby', 'rails', 'php', 'objective-c', 'html', 'css', 'pug']
const promisesArr = keywordsArr.map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
console.log(promisesArr)

Promise.any(promisesArr)
    .then(() => {})
    .catch((err) => {
        console.log(err)
    })


