fun main(){
    var day_count: Int = 3;

    when(day_count){
        1 -> print("Monday")
        2 -> print("Tuesday")
        3 -> print("Thirsday")
    }

    var day: String;
    day = when(day_count){
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Thirsday"
        else -> "More"
    }

    print(day)
}