import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { DetailAction } from "../../store/actions/detailAction"
import { useRouter } from "next/router" 
// Components
import Layout from "../../components/layout"
import PostId from "../../components/main/section/post"

const Posts = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(DetailAction(false))
    } , [])

    return (
        <Layout>
                {/* <h1>This Post {router.query.id}</h1> */}
                <PostId />
        </Layout>
        
    )
}

export default Posts;