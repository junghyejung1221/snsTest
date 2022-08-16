import axios from "axios";

const url = "https://localhost:5000/api/posts/";

class PostService{
  //Get Posts
  static getPosts(){
    return new Promise( (resolve,reject) => {
      try{
        const res = axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createAt: new data(post.createAt)
          }))
        );
      }catch(err){
        reject(err);
      }
    }
  )}

  //Create Posts
static insertPost(text){
  return axios.post(url, {
    text
  })
}
  //Delete Posts
  static deletePost(id){
    return axios.delete(`${url}${id}`);
  }

}

export default PostService;