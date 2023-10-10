import React, { useEffect, useState } from "react";
import "./comment.css"
import springApi from "../../api/springApi";
import axios from "axios";
//import icon delete
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Comment = (props) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChage = (e) => {
        setComment(e.target.value);
    }
    function currentDate() {
        var date = new Date()
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', { month: '2-digit' });
        const day = date.toLocaleString('default', { day: '2-digit' });

        return [year, month, day].join('-');
    }
    const handeSubmitComment = (e) => {
        e.preventDefault();
        console.log(localStorage.getItem("token"));
        var account = JSON.parse(localStorage.getItem("token"));
        const data = {
            title: comment,
            time: currentDate(),
            id_account: account.id,
            id_movie: props.id
        }
        // console.log(data);
        axios.post("https://movie-group8.up.railway.app/api/comment/add", data).then((res) => {
            // console.log(res);
            var resData = res.data;
            console.log(resData);
            setComment("");
            setComments([[resData.id, resData.title, resData.time, account.email], ...comments]);
            // setComments([comment, ...comments]);
            // console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    const onDeleteComment = (id) => {
        return () => {
            setComments(comments.filter((comment) => comment[0] !== id));
            axios.delete("https://movie-group8.up.railway.app/api/comment/delete/" + id).then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
            console.log("Click delete")
        }
        // console.log(id);
    }

    useEffect(() => {
        const getComments = async () => {
            const response = await springApi.getCommentsByMovie(props.id);
            response.then((res) => {
                setComments(res);
            });
        }
        getComments();
    }, [props.id]);
    return (
        <>
            <section className="content-item" id="comments">
                <div className="container">
                    <div className="">
                        <div className="col-sm-8">
                            <form id="form-comment" onSubmit={handeSubmitComment}>
                                <h3 className="pull-left">New Comment</h3>

                                <fieldset>
                                    <div className="row-comment">
                                        <div className="fl-3 col-lg-2 hidden-xs">
                                            <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" alt="" />
                                        </div>
                                        <div className="fl-7">
                                            <textarea value={comment} className="text-area" id="message" placeholder="Your comment" required="PLease Input" onChange={handleCommentChage}></textarea>
                                            <div style={{ textAlign: "center" }}>
                                                <button type="submit" className="btn">Submit</button>

                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                            <h3>{comments.length} Comments</h3>

                            {comments.map((comment, index) => {
                                return (
                                    <div className="media">
                                        <a className="pull-left" href="#"><img className="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" alt="" /></a>
                                        <div className="media-body">
                                            <div style={{ display: "flex", }}>
                                                <h4 className="media-heading">{comment[3]}</h4>
                                                {
                                                    JSON.parse(localStorage.getItem("token")).email === comment[3]
                                                    &&
                                                    <div>
                                                        <FontAwesomeIcon icon={faTrash} className="icon_delete" style={{ marginLeft: "30px", cursor: "pointer", fontSize: "20px" }}
                                                            onClick={onDeleteComment(comment[0])}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                            <p>{comment[1]}</p>
                                            <p>{comment[2]}</p>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Comment;