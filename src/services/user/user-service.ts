export type CredentialsProps = {
    email:string
    jwt:string
}


export const User = {

    FindOne: async(data:CredentialsProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/user/byEmail?email=${encodeURI(data.email)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${data.jwt}`
            }
        });
        if (!response.ok) {
            throw new Error('Unauthorized');
        }
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: "Unauthorized", status: 401 };
    }
  }
    
}