import { usePosts } from "@/contexts/PostContext";

export const Footer = () => {
    const postCtx = usePosts();

    return (
        <footer>
            Total posts: {postCtx?.posts.length}
        </footer>
    );
}