import { blogs } from "@/components/global/constants";
import Loader from "@/components/global/loader";
import BlogTemplate from "@/components/templates/blog/blogTemplate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Blog = ({ params }) => {

    const router = useRouter();
    const [activeBlog, setActiveBlog] = useState(null);

    useEffect(() => {
        const blogId = router.query.id;

        // Only proceed if blogId exists
        if (blogId && !activeBlog) {
            const blog = blogs.find((blog) => blog.route === blogId);
            if (blog) {
                setActiveBlog(blog); // Fix: Use 'blog' instead of undefined 'b'
            }
        }
    }, [router.query.id, activeBlog]);


    return (<div>
        {activeBlog && activeBlog.route ?
            <BlogTemplate activeBlog={activeBlog} />
            :
            <div className="w-full h-[100vh] flex justify-center items-center">
                <Loader color="blue" size="18px" />
                <div />
            </div>}
    </div>)

}

export default Blog