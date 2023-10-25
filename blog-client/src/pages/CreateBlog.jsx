import { useState } from "react";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && tagInput.trim() !== "") {
      e.preventDefault();
      const tag = tagInput.trim();
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

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
                Tags
              </label>
              <input
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleKeyDown}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Tags for your blog"
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
              onClick={()=>{
              console.log("next")
              }}
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

{/* <div className="mb-4">
              {tags.length == 0 ? (
                <></>
              ) : (
                tags.map((e, index) => {
                  <Chip tag={e} key={index} />;
                })
              )}
            </div>
function Chip(props) {
  return (
    <>
      <div
        data-te-chip-init
        data-te-ripple-init
        className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
        data-te-close="true"
      >
        {props.tag}
      </div>
    </>
  );
} */}

