export interface IUser{
    userId:string,
    userEmail:string
}
export interface UserState{
    login:IUser | null;
}