import { useState } from "react";
import Post from "./Post";
import PostArea from "./PostArea";
import { useSelector } from "react-redux";

function Dashboard() {
  const [open, setOpen] = useState(false);
    const {postList} = useSelector(state => state.post)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  console.log(postList)

  return (
    <>
      <div className="p-8  w-screen min-h-screen">
        <div className="p-8 flex items-center justify-center w-screen ">
          <div className="flex mb-4 gap-2">
            <img
              className="w-12 h-12 rounded-full"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/350253193_640042791314518_4514004573895829249_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=fe8171&_nc_ohc=M9IVvG0T6SQAX-OjRza&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=q&oh=00_AfDkdst5wkSkz68w__pxdGSLqwxdlSGbEVy3PstPQcQyaQ&oe=65230E0C"
            />
            <p
              onClick={handleOpen}
              className="bg-[#f0f2f5] hover:bg-[#e4e6e9] rounded-full  xl:w-[600px] h-10 px-5 py-2 cursor-pointer"
            >
              Hiep ơi, bạn đang nghĩ gì thế?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <div>
            {postList.length > 0 && postList.map((item,index) => (
                <Post item={item} key={index} />
            ))}
            </div>
        </div>
      </div>
      {open && <PostArea isOpen={open} handleClose={handleClose} />}
    </>
  );
}

export default Dashboard;
