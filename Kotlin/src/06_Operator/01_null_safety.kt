fun main(){
    // Null Safety is used to tell the value can be null

    // var x1: String = null // Not Allowed
    var x2: String? = null
    
    x2 = "Vishal Singh"
    if(x2 != null){
        print(x2)
    }
}