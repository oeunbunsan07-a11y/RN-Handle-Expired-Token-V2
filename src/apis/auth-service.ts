import { tokenStorage } from "@/storages";
import { apiInstance } from "../apis/core";

class AuthService {
    private apiInstance: any;
    constructor(apiInstance: any) {
        this.apiInstance = apiInstance;
    };

    async register(payload: any) {
        const res = await this.apiInstance.post("/auth/register", payload);
        return res.data;
    };

    async login(payload: any) {
        const res = await this.apiInstance.post("/auth/login", payload);
        const { access_token, refresh_token } = res.data;

        // Save Both token to the storage.
        tokenStorage.setToken(access_token);
        tokenStorage.setRefreshToken(refresh_token);
        
        return res.data;
    }
};

export const authService = new AuthService(apiInstance);