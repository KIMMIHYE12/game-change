import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => {
    if (state.count >= 100) {
      return (state.count = 100);
    } else if (state.count <= 0) {
      return (state.count = 0);
    } else {
      return state.count;
    }
  });
  const dispatch = useDispatch();

  const increase20 = () => {
    dispatch({ type: "INCREMENT", payload: { num: 20 } });
  };
  const increase10 = () => {
    dispatch({ type: "INCREMENT", payload: { num: 10 } });
  };
  const increase5 = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const y = count * 3;
  const styles = {
    transform: `translateY(${-y}px)`,
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1>
          자존감 충전소 <span className='strong'>뿜뿜</span>
          <img width={28} src='/images/heart.png' alt='하트' />
        </h1>
        <section className='battery_wrap'>
          <div className='battery'>
            <div className='energy' style={styles}></div>
          </div>
        </section>
        <h1>{count}%</h1>
        <div className='buttons positiv'>
          <button onClick={increase20}>
            난 널 믿어
            <img src='/images/wink.png' alt='윙크' />
          </button>
          <button onClick={increase20}>
            네가 최고
            <img src='/images/thumbs_up.png' alt='엄지 척' />
          </button>
          <button onClick={increase10}>
            오늘도 멋져
            <img src='/images/cool.png' alt='썬그라스 멋짐 폭팔' />​
          </button>
          <button onClick={increase10}>
            지금도 잘하고 있어
            <img src='/images/happy.png' alt='웃는 얼굴' />
          </button>
          <button onClick={increase5}>
            넌 할 수 있어 <img src='/images/cheerup.png' alt='파이팅' />
          </button>
          <button onClick={increase5}>
            사랑해 <img src='/images/love.png' alt='하트 뿅뿅' />
          </button>
        </div>
        <div className='buttons negativ'>
          <button onClick={decrement}>
            왜 이 모양이냐 <img src='/images/angry.png' alt='화남' />
          </button>
          <button onClick={decrement}>
            난 뭘 해도 안돼 <img src='/images/crying.png' alt='눈물' />
          </button>
          <button onClick={decrement}>
            내 주제에 무슨 <img src='/images/doubt.png' alt='한심한' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
