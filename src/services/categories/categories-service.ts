export type CredentialsProps = {
    email:string
    jwt:string
}


export const Product = {

    getAll: async() => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/categories`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  }
    
}