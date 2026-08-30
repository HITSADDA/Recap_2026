// If is an Expression in Kotlin
// If returns some value


fun main(){

    // One --->
    val age = 14;
    var group: String;
    group = if(age >= 18){
        println("One")
        "Adult" // return value
    }else{
        println("Two")
        "Minor" // return value
    }
    print(group)

    // Two ---> Inline Conditions
    val age = 14;
    var group: String;
    group = if(age >= 18) "Adult" else "Minor"
    print(group)
}