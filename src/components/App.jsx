import Header from "./Header.jsx";
import MainComponent from "./MainComponent.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import FinishedScreen from "./FinishedScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";
import { useQuiz } from "../context/QuizContext.jsx";

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </MainComponent>
    </div>
  );
}

export default App;
