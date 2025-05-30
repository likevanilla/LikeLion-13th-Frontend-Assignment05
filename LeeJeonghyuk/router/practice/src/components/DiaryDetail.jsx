import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function DiaryDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [diaries] = useLocalStorage("diaries", []);
    const [diary, setDiary] = useState(null);

    useEffect(() => {
        const diaryId = Number(id);
        const found = diaries.find((d) => d.id === diaryId);
        setDiary(found);
    }, [id, diaries]); 

    if (!diary) return <div>일기를 가져오는 중입니다!</div>;

    return (
        <div>
            <h1> {diary.title} </h1>
            <p>{diary.content}</p>
            <button onClick={() => navigate(-1)}>목록으로 돌아가기</button> 
        </div>
    );
}