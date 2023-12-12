import axios from "axios";

type RegisterRequestBody = {
    username: string;
    email: string;
    password: string;
};

type LoginRequestBody = {
    email: string;
    password: string;
};

type VerifyRequestBody = {
    code: string;
};

export default class Server {
    static async register(body: RegisterRequestBody) {
        return await axios.post("http://localhost:8080/auth/register", body);
    }

    static async login(body: LoginRequestBody) {
        return await axios.post("http://localhost:8080/auth/login", body);
    }

    static async verify(body: VerifyRequestBody) {
        const url = new URL("http://localhost:8080/");
        url.pathname = "/auth/login/verify/otp";
        url.searchParams.append("code", body.code);
        return await axios.get(url.toString());
    }
}
