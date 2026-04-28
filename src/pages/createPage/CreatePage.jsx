import Navbar from '../../components/Navbar/Navbar.jsx';
import FloatingToolbar from '../../components/Toolbar/FloatingToolbar.jsx';
import EventEditor from './EventEditor.jsx';

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="pt-24 px-10">
        <EventEditor />
      </div>

      {/* FLOATING TOOLBAR */}
      <FloatingToolbar />
    </div>
  );
}
