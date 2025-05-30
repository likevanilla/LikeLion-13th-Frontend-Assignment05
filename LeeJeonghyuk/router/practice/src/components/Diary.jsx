import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import useInput from "../hooks/useInput";
import * as S from "./Style";

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
        <S.Box>
            <S.Title>Diary</S.Title>
            <S.Input
                type="text"
                placeholder="제목을 입력하세요."
                autoFocus
                {...inputTitle} // value, onChange 한 번에 전달
            />

            <S.TextArea
                placeholder="일기를 작성하세요."
                cols="30"
                rows="5"
                {...inputContent} // value, onChange 한 번에 전달
            >
            </S.TextArea>

            <S.Button type="submit" onClick={handleAdd}>제출</S.Button>
            <S.Button onClick={() => navigate(-1)}>TodoList로 돌아가기</S.Button> 

            <S.Ol>
                {diaries.map((diary) => (
                    <li key={diary.id}>
                        <Link to={`/diary/${diary.id}`}>{diary.title}</Link>
                    </li>
                ))}
            </S.Ol>
        </S.Box>
    );
}