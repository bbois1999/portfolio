import { useEffect, useState } from "react";

/*export const UserLogged = async () =>{
  const response = await axios.get('http://localhost:8080/jsonapi/user/user?filter%5Bname%5D%5Bvalue%5D=bbois1999', withCredentials: true)
    console.log(response)
}
UserLogged()*/

const Usertest = () => {
  const [user, setUser] = useState(false);

console.log(user)
  useEffect(() => {
    const test = () => {
      try {
        const data = JSON.parse(
          localStorage.getItem("user") || "no user in local storage"
        );
        //console.log(data.current_user.uid)

        //console.log(data.current_user.uid === "1");
        if (data.current_user.uid === "1") {
          setUser(true);
        }
      } catch (error) {
        console.log(user, "no user log in");
      }
    };
    test();
    //console.log(user);
  }, []);
};

export default Usertest;
