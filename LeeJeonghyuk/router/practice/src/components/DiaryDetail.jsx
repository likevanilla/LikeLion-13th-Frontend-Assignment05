import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function DiaryDetail() {
    const { title } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1> {title} </h1>
            
            <button onClick={() => navigate(-1)}>목록으로 돌아가기</button> 
        </div>
    );
}