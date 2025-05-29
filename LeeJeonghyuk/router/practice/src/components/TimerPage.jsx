import useTimer from "../hooks/useTimer";

export default function TimerPage() {
    const { timer, startTimer, stopTimer, isActive } = useTimer(1000);

    return (
        <div style={{ padding : "1rem" }}>
            <h2>⏰ Timer Page</h2>
            <p>타이머: {timer}초</p>
            <button onClick={startTimer} disabled={isActive}>
                시작
            </button>
            <button onClick={stopTimer} disabled={!isActive}>
                정지
            </button>
        </div>
    );
}