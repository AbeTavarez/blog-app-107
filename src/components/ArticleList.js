import Article from "./Article";

function ArticleList() {
    // state = Array[Articles]
    return (
        <section>
            {/* // props Article Object  */}
            <Article /> 
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </section>
    )
}

export default ArticleList;