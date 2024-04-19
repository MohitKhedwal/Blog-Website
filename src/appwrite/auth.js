import { GiAccordion } from "react-icons/gi";
import config from "../config/configuration";
import {Client,Account,ID} from "appwrite"

export class Authservice{
    client=new Client()
    account;
    constructor(){
        this.client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId)
        this.account=new Account(this.client)
    }

    async createAccount({name,password,email}){
      try {
        const newuser =await this.account.create(ID.unique(),email,password,name)
        if(newuser){
          return this.login({email,password})
        }else{
            return newuser
        }
        
      } catch (error) {
        throw error
        
      }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async currentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null 
    }
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);   
        }
    }

    async nameUpdate(name){
        try {
            return await this.account.updateName(name)
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
  async passwordUpdate(newpassword,oldpassword){
    try {
         const changedpass= await this.account.updatePassword(newpassword,oldpassword)
           if(changedpass) return true
        } catch (error) {
        console.log("Appwrite service :: updatePassword :: error", error);
        return false
    }
  }

}

const authService=new Authservice()

export default authService
