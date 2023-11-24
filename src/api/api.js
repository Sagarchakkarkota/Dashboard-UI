import axios from "axios";

export const getUsers = async () => {

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getMember= async ()=>{
  try{
    const response=await fetch("https://gorest.co.in/public/v2/users",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
      },
    
    })
    const res=await response.json()
return res
  }
  catch (error) {
    throw new Error("Failed to fetch users");
  }
}
export const getSingleMember= async (id)=>{
  try{
    const response=await fetch(`https://gorest.co.in/public/v2/users/${id}`,{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
      },
    
    })
    const res=await response.json()
return res
  }
  catch (error) {
    throw new Error("Failed to fetch users");
  }
}


export const addNewMember= async ({id,name,email,gender,status})=>{
    
  const response=await fetch("https://gorest.co.in/public/v2/users",{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
    },
    body:JSON.stringify( {id,name,email,gender,status})
  
  })
return response.json

}
export const editMember= async ({id,name,email,gender,status})=>{
    
  const response=await fetch(`https://gorest.co.in/public/v2/users/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
    },
    body:JSON.stringify( {id,name,email,gender,status})
  
  })
return response.json

}
export const deleteMember= async (id)=>{
  console.log(id)
    
  const response=await fetch(`https://gorest.co.in/public/v2/users/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
    },
  
  })
return response.json

}
// export const addMember= async ({id,name,email,gender,status})=>{
    
//   const response=await fetch("https://gorest.co.in/public/v2/users",{
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json",
//       "Authorization": "Bearer 8075f13f69c97ba4dca75abd53f47dd490a5f98706c0cb5b6798b66ae0b420f6"
//     },
//     body:JSON.stringify( {id,name,email,gender,status})
  
//   })
//   const res=await response.json()
// return res 


// }