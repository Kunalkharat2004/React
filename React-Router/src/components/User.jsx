import { useParams } from "react-router-dom";

function User() {
   const {id} = useParams()
    return (
        <>
        <div className="text-center w-1/2 p-4 text-3xl bg-slate-800 text-white mx-auto">User : {id}</div>
        </>
    )
}



export default User;