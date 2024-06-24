export type CredentialsProps = {
    email:string
    jwt:string
}


export const Product = {

    getAll: async(data:CredentialsProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/products`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  },

    getActives: async(data:CredentialsProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/products`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  },
    getRecommended: async(data:CredentialsProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/products`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  }
    
}