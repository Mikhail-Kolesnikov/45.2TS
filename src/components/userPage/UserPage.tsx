import { useEffect, useState } from "react"
import style from './userPage.module.css'

interface User {
    id:number,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:string,
        lastname:string
    },
    address:Address,
    phone:string
}

interface  Address{
    city: string,
    street: string,
    number: number,
    zipcode: string,
    geolocation:{
        lat:string,
        long:string
    }
}
export default function UserPage():JSX.Element{
    const[users,setUsers]= useState<User[]>([]);
    useEffect(()=>{
    async function loaders() {
        const res = await fetch ('https://fakestoreapi.com/users')
        const data = await res.json();
        setUsers(data);
    

}


    loaders();
},[]);
return(
    <div>
        <ul>{users.map((user)=>(

            <li className={style.li_item} key={user.id}>
                <div>
                    nick:{user.username}
                    name:{user.name.firstname}{user.name.lastname}
                    phone:{user.phone}
                    E-mail.{user.email}
                    Zip-code:{user.address.zipcode}

                </div>




            </li>
        ))}
           
        </ul>
    </div>
)


}