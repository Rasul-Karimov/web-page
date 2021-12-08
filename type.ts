interface Hello {
    name: string
    age?: number
    sayHello?(): void
}


let hello: Hello = {
    name: 'rasul',
    sayHello() {
        console.log(`Привет, ${this.name}`)
    }
}