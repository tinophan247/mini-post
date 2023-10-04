import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name : 'post',
    initialState : {
        postList : [
            {
                "avatar": "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/350253193_640042791314518_4514004573895829249_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=fe8171&_nc_ohc=M9IVvG0T6SQAX-OjRza&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=q&oh=00_AfDkdst5wkSkz68w__pxdGSLqwxdlSGbEVy3PstPQcQyaQ&oe=65230E0C",
                "name": "Hiep Dinh",
                "dateTime": "22 August",
                "text": "Màu lá mạ và màu cỏ úa tôi gọi là chú./nRiêng màu vàng tôi gọi là chó",
                "like": 27,
                "comment": 14
            }
        ]
    },
    reducers :{
        postStatus : (state, action) => {
            state.postList = [...state.postList,action.payload]
        }
    }
})

export const {postStatus} = postSlice.actions;
export default postSlice.reducer;