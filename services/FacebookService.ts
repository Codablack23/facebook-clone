interface  DefaultResponse{
    status: string
    error_code:string,
    error_message:string,
    data?:{
        [key:string]:any
    },
    message?:string,
    id?:string
}
interface Data{
    [key:string]:any
}
interface LoginData extends Data{
    email:string,
    password:string
}

class FacebookService{
    async login(data:LoginData){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }  
    async getPosts(){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }  
    async getPost(id:string){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }  
    async getFriends(){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }   
     async addFriend(id:string){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }  
     async deleteFriend(id:string){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }  
    async updatePost(id:string,data:Data){
        const response:DefaultResponse = {
            status:"failed",
            error_code:"Server could not be reached",
            error_message:"Sorry could not reach servers at the moment please try again"
        }
        return response
    }
}

export default new FacebookService as FacebookService