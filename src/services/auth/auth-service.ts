
export type CredentialsProps = {
    email:string
    password:string
}

export const Auth = {

    sideIn: async(data:CredentialsProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Unauthorized');
        }
        const result = await response.json();
        return { data: result.access_token, status: 200 };
    } catch (error) {
        throw { data: "Unauthorized", status: 401 };
    }
      },
    
}