export type ActivesProps = {
    skip?:number
    limit?:number
    categoryId?:number
}


export const Product = {

    getActives: async(data:ActivesProps) => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/products/actives`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  },
    getRecommended: async() => {
      try {
        const response = await fetch(`${process.env.APP_BASE_URL}/products/recommended`, {method: 'GET',});
        const result = await response.json();
        return { data: result, status: 200 };
    } catch (error) {
        throw { data: [], status: 401 };
    }
  }
    
}