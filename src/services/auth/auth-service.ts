import api from '../../api/'

export type CredentialsProps = {
    email:string
    password:string
}

export const Auth = {

    sideIn: async(data:CredentialsProps) => {
        try {
          const res = await api.post('auth/login', data, {headers:{'Content-Type': 'application/json'}})
          return {data:res.data?.access_token, status:200}
        } catch (error) {
            throw {data:"Unauthorized", status:401}
        }
      },
    
}