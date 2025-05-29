import Floatingshape from "./components/Floatingshape";
import { Toaster } from "react-hot-toast";

function App() {
  return (
	<div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-800 to-emerald-900 justify-center flex items-center relative overflow-hidden">
    <Floatingshape color="bg-green-500" size="w-64 h-64" top="-5%" left="10%" delay={0} />
    <Floatingshape color="bg-red-500" size="w-48 h-48" top="-70%" left="50%" delay={5} />
    <Floatingshape color="bg-blue-500" size="w-32 h-32" top="20%" left="-40%" delay={2} />
    <Toaster />
  </div>
  );
}

export default App;