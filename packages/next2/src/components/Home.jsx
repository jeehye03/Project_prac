import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataAtom } from "./atoms";

const Home = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useAtom(dataAtom);

  const fetchData = async () => {
    const res = await fetch(URL);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      {data.map((x) => (
       
          <li>{x.name}</li>
        
      ))}
     
    </>
  );
};

export default Home;
