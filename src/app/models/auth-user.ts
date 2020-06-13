import { SocialUser } from "angularx-social-login";

export class AuthorizedUser {
    authToken: string;
    idToken:string;
    email: string;
    idpUserId: string;
    name:string;
    firstName: string;
    lastName: string;
    provider: string;
    isLoggedIn: boolean;
    authorizationCode:string;

    
    constructor(userInfo:SocialUser) {
        this.provider=userInfo.provider;
        this.idpUserId=userInfo.id;
        this.email=userInfo.email;
        this.name=userInfo.name;
        //this.photoUrl=userInfo.photoUrl;
        this.firstName=userInfo.firstName;
        this.lastName=userInfo.lastName;
        this.authToken=userInfo.authToken;
        this.idToken=userInfo.idToken;
        this.authorizationCode=userInfo.authorizationCode;
        this.isLoggedIn = true;
    }
}