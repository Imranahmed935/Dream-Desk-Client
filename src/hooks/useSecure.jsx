import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://dream-desk-server.vercel.app",
  withCredentials: true,
});

const useSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
    // axiosInstance.interceptors.response.use(response=>{
    //   return response;
    // },(error)=>{
    //   console.log('ops thief caught', error)
    //   if(error.status === 401 || error.status === 403){
    //     console.log('need to arrest')
    //     signOutUser()
    //     .then(()=>{
    //       console.log('thief signout successfully')
    //       navigate('/login')

    //     })
    //     .catch(error=>{
    //       console.log('oops', error)
    //     })
    //   }
    //   return Promise.reject(error);
    // })
  }, []);
  return axiosInstance;
};

export default useSecure;
