/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postStatus } from "../redux/slices/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function PostArea({ isOpen, handleClose }) {
  const [text, setText] = useState("");
  const dispatch =useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handlePost = () => {
        const newText = text.replace(/(?:\r\n|\r|\n)/g, '<br>');

        const newData = {
            avatar : 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/350253193_640042791314518_4514004573895829249_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=fe8171&_nc_ohc=M9IVvG0T6SQAX-OjRza&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=q&oh=00_AfDkdst5wkSkz68w__pxdGSLqwxdlSGbEVy3PstPQcQyaQ&oe=65230E0C',
            name : 'Hiep Dinh',
            dateTime : '4 Oct',
            text: newText,
            like : 0,
            comment : 0,
        }
        dispatch(postStatus(newData))
        handleClose();
  }

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <div />
            <p className="text-center font-bold text-2xl">Tạo mới bài viết</p>
            <button
              onClick={handleClose}
              className="text-red-700 font-bold text-2xl "
            >
              X
            </button>
          </div>
          <Divider sx={{ m: 3 }} />
          <TextField
            fullWidth
            multiline
            placeholder="Hiep ơi, bạn đang nghĩ gì thế?"
            InputProps={{
              rows: 10,
            }}
            value={text}
            onChange={handleChange}
          />
          <button onClick={handlePost} className="w-full h-10 text-white bg-blue-600 mt-2 rounded-lg">Đăng</button>
        </Box>
      </Modal>
    </div>
  );
}
