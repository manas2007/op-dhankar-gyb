import { blogs } from "@/components/global/constants";
import Loader from "@/components/global/loader";
import BlogTemplate from "@/components/templates/blog/blogTemplate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Blog = ({ params }) => {

    const router = useRouter();
    const [activeBlog, setActiveBlog] = useState(null);

    // Log outside useEffect for debugging
    console.log("BlogId 2::", router.query.id);
    console.log("Blogs :: ", blogs);

    useEffect(() => {
        const blogId = router.query.id;
        console.log("BlogId::", blogId);

        // Only proceed if blogId exists
        if (blogId && !activeBlog) {
            const blog = blogs.find((blog) => blog.route === blogId);
            console.log("Found Blog :: ", blog);
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