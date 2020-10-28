import React, {useContext, useEffect} from "react";
import {FaClock} from "react-icons/fa";
import PostReact from "../../PostReact";
import PostTag from "../../PostTag";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Spinner from "react-bootstrap/Spinner";
import Context from "../../Context";
import {Link} from "react-router-dom";
import {getPostsFromAGroup} from "../../../reducers/community/PostReducer";
import {useDispatch, useSelector} from "react-redux";
import PostDeleteModal from "../modals/PostDeleteModal";
import PostEditModal from "../modals/PostEditModal";

const GroupPost = (props) => {

    const groupPosts = useSelector(state => state.posts)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getPostsFromAGroup(props.groupId))
    },[])

    return (
        <>
        </>
    )
}

export default GroupPost