import {useState, useEffect} from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  // DOM'a mount edilme anını yakalar.
  useEffect(() => {
    console.log("Component mount edildi!");

    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    // DOM'dan kaldırılma anı, yani unmount edilme anı.
    return () => {
      console.log("Unmount edildi!");
      clearInterval(interval);
    }
  }, []);

  // Sadece number state'ini takip eden useEffect hook'u
  useEffect(() => {
    console.log("number güncellendi");
  }, [number]);
  
  return (
    <>
      <h1>Başlık</h1>
      <h2>{number}</h2>
    </>
  );
}

export default Counter;