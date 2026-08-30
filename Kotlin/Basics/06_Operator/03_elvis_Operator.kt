fun main(){
    var name: String? = "youvraj_raj_dhurasni";
    var username = name?: "guest" // if null -> guest

    print(username)
}