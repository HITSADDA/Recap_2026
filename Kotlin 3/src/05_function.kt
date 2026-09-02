fun main(){
    // print(multi(12, 14))
    
    // Using Default Argument
    createUser(
        name="Vishal Singh"
    )
    // Using Named Parameters
    createUser(
        name="Vishal Singh",
        age=45
    )
    // Normal
    createUser(
        "Vishal Singh",
        21
    )
}

fun add(a: Int, b: Int): Int {
    return a + b
}

fun multi(a: Int, b: Int): Int = a * b;


fun createUser(
    name: String,
    age: Int = 18
) {
    println("$name is $age years old")
}