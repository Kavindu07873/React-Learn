import axios from "../../axio";
class PostService {
// WHEN THERE WE USE  POST SERVICE TO SEND DATA TO Back end
    createPost = async (data) => {
        console.log("form data: " + data)
        const promise = new Promise((resolve, reject) => {
            axios.post('posts', data
            //apita methanata ona nm headers parameters dennath puluwan
            )
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    fetchPosts = async ()=>{
        const promise = new Promise((resolve , reject)=>{
            axios.get('posts')
            .then((res)=>{
                return resolve(res)
            })
            .catch((er)=>{
                return resolve(er)
            })
        })
        return await promise
    }
}
export default new PostService();