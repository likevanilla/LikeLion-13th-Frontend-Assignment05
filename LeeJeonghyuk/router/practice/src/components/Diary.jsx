import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Diary() {
    const [diaries, setDiaries] = useLocalStorage("diaries", []);
    const [inputTitles, setInputTitle] = useState("");
    const [inputContents, setInputContents] = useState("");

    const handleAdd = () => {
        if (inputTitles.trim() === "" || inputContents.trim() === "") return;
        const newDiary = {
            title: inputTitles,
            content: inputContents,
        };
        setDiaries([...diaries, newDiary]);
        setInputTitle("");
        setInputContents("");
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="제목을 입력하세요."
                value={inputTitles}
                onChange={(e) => setInputTitle(e.target.value)}
            />

            <textarea
                placeholder="일기를 작성하세요."
                value={inputContents}
                cols="30"
                rows="5"
                onChange={(e) => setInputContents(e.target.value)}
            >
            </textarea>

            <button type="submit" onClick={handleAdd}>제출</button>

            <ul>
                {diaries.map((diary) => (
                    <li key={diary.title}>
                        <Link to={`/diary/${diary.title}`}>{diary.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}