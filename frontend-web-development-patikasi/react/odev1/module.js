import axios from "axios";

async function getData(user_id = 1) {
  const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
  const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

  let newObj = {...user, posts: posts};

  return newObj;
}

export default getData;
