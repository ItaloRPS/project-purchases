'use client'
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";

type PaginationProps = {
  length:number,
}


export const PaginationControlled = ({length}:PaginationProps) => {
  const router = useRouter();
  const handleClick = (event: React.ChangeEvent<unknown>, value:number) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('pg', value.toString());
    router.replace(`${window.location.pathname}?${queryParams.toString().toString()}`);
  };

    return (
      <Pagination count={length} sx={{color:'red'}} variant="outlined" shape="rounded"  onChange={handleClick}/>
    );
  }