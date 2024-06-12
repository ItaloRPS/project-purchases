import api from '../../api/'

export type CredentialsProps = {
    email:string
    jwt:string
}


export const User = {

    FindOne: async(data:CredentialsProps) => {
        try {
          api.defaults.headers.common = {'Authorization':`Bearer ${data.jwt}`}
          const res = await api.get(`user/byEmail?email=${encodeURI(data.email)}`)
          return {data:res.data, status:200}
        } catch (error) {
            throw {data:"Unauthorized", status:401}
        }
      },
    
}