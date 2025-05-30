import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useInput from "../hooks/useInput";

export default function Diary() {
    const [diaries, setDiaries] = useLocalStorage("diaries", []);
    const inputTitle = useInput("");
    const inputContent = useInput("");
    const navigate = useNavigate();

    const handleAdd = () => {
        if (inputTitle.value.trim() === "" || inputContent.value.trim() === "") return;
        
        const newDiary = {
            id: Date.now(),
            title: inputTitle.value,
            content: inputContent.value,
        };
        setDiaries([...diaries, newDiary]);
        // 제출 후 input, textarea 비우기
        inputTitle.reset();
        inputContent.reset();
        alert("오늘도 일기를 적은 나, 대단해~")
    };

    return (
        <div>
            <h1>Diary</h1>
            <input 
                type="text"
                placeholder="제목을 입력하세요."
                autoFocus
                {...inputTitle} // value, onChange 한 번에 전달
            />

            <textarea
                placeholder="일기를 작성하세요."
                cols="30"
                rows="5"
                {...inputContent} // value, onChange 한 번에 전달
            >
            </textarea>

            <button type="submit" onClick={handleAdd}>제출</button>
            <button onClick={() => navigate(-1)}>TodoList로 돌아가기</button> 

            <ul>
                {diaries.map((diary) => (
                    <li key={diary.id}>
                        <Link to={`/diary/${diary.id}`}>{diary.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}