import axios from "axios";
import { useState } from "react";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");



  // TODO: publish blog with current user details and date of publishing
  // TODO: use state to check if user is authenticated or not
  
  function publishBlog(){
    // const response = axios.post()
  }
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 mx-auto">
        <div className="max-w-md mx-auto">
          <div className="bg-white shadow-lg  py-5 sm:rounded-lg sm:p-6 px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Blog Title
              </label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter the title of your blog"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Topic
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Topic of your blog"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Blog Content
              </label>
              <textarea
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content"
                placeholder="Write your blog content here"
              ></textarea>
            </div>
            <div className="mb-6 text-center">
              <button
              onClick={publishBlog}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create Blog
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};






// TODO: tags feature

