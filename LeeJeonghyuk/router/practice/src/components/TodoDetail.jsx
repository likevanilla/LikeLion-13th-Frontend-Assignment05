import { useParams, useNavigate } from "react-router-dom";

export default function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Todo 상세 페이지</h2>
            <p>
                Todo ID: <strong>{id}</strong>
            </p>
            <button onClick={() => navigate(-1)}>목록으로 돌아가기</button> 
        </div>
    );
}