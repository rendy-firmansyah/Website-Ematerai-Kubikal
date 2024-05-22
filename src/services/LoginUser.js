import { useMutation } from "@tanstack/react-query"
import http from "../utils/http"


const LoginUser = async (input) => {
    try {
      const response = await http.post("/api/users/login", input);
      return response.data; // Assuming response.data contains login data
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed"); // Handle specific API error message or generic message
    }
  };
const useLoginUser = () => {
    return useMutation({
        mutationFn :  LoginUser
    })
}

export {LoginUser, useLoginUser}