import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()
return (
    <>
    <div className="text-center w-1/2 h-auto flex flex-col items-center gap-5 p-4 text-3xl bg-slate-800 text-white mx-auto">
    <h1>Github followers : {data.followers}</h1>
    <img className="w-[300px]" src={data.avatar_url} alt="profile-picture" />
    </div>
    </>
)
}

export async function githubLoader(){
    const data = await fetch("https://api.github.com/users/hiteshchoudhary")
     .then((res)=>res.json())
     console.log(data);
     return data
 }
export default Github;