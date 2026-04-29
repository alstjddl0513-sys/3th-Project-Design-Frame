import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from './pages/createPage/CreatePage';
import ExplorePage from './pages/explorePage/ExplorePage';
import NavigatePage from './pages/navigatePage/NavigatePage';
import DraftPage from './pages/draftPage/DraftPage';
import HomePage from './pages/homePage/HomePage';
import InvitePage from './pages/invitePage/InvitePage';
import SendEditPage from './pages/send/SendPage';
import SharePage from './pages/share/SharePage';
import LandingPage from './pages/landingPage/LandingPage';
import LandingPage2 from './pages/landingPage2/LandingPage2';
import LoginPage from './pages/loginPage/LoginPage';
import LandingPage3 from './pages/landingPage3/LandingPage3';

function App() {
  return (
    <Router>
      <Routes>
        {/* 기본 경로일 때 이벤트 생성 페이지를 보여줌 */}
        <Route path="/" element={<NavigatePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/draft" element={<DraftPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/send" element={<SendEditPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing2" element={<LandingPage2 />} />
        <Route path="/landing3" element={<LandingPage3 />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/list" element={<EventList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
