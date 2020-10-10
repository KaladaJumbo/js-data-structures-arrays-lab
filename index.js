// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    
    drivers.push(name);
    return drivers

}

function destructivelyPrependDriver(name) {
    
    drivers.unshift(name);
    return drivers

}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers
}

function destructivelyRemoveFirstDriver(params) {

    drivers.shift();
    return drivers
    
}

function appendDriver(name) {
    
    let new_array = [...drivers]
    new_array.push(name)
    return new_array

}

function prependDriver(name) {

    let new_array = [...drivers]
    new_array.unshift(name)
    return new_array
    
}

function removeLastDriver() {

    let new_array = [...drivers]
    new_array.pop()
    return new_array
    
}

function removeFirstDriver() {

    let new_array = [...drivers]
    new_array.shift()
    return new_array
    
    
}