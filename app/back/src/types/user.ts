export type RegisterRequest = {
    user_name: String;
    email : String;
    password : String;
    address: String;
    phone_number : String;
}

export type LoginRequest =  {
    email : String;
    password : String;
}