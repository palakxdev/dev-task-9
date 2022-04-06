import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-3xl text-center m-4 text-orange-500">
                This is our blog.
            </h2>

            <div className="container mx-auto">
                <h2 className='text-2xl text-orange-500'>What is context API?</h2> <br />
                <p>In react app component we can sent data one component to another component by prop drilling method. But sometimes we have some secured data that's we don't want to share with the other component. We have a solution for this problem. In react version 16.3 we got a great opportunity to share states across all the react app. That is CONTEXT API.</p>

                <h2 className='text-2xl text-orange-500 mt-4'>What is semantic tag?</h2> <br />
                <p>In HTML-5 we got some semantic tag. That's are very important for search engine bot and crawler. The search engine bot can understand the value of the content by reading this semantic tag. It's helps us to rank and index our website content on different search engine. abbr Abbreviation tag is a semantic tag. We can write the abbreviation type text into the p paragraph tag. But it's not good practice. If we write abbreviation type text into the abbr tag then our content will get the most priority instead of other website content.</p>
                <br />
                <p>em = Emphasis. strong = Strong emphasis. h1 = First-level headline. h2 = Second-level headline. hr = Thematic break they all are semantic tag.</p>
            </div>

        </div>
    );
};

export default Blog;