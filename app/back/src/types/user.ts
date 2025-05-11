export type RegisterRequest = {
    user_name: string;
    email : string;
    password : string;
    address: string;
    phone_number : string;
}

export type LoginRequest =  {
    email : string;
    password : string;
}