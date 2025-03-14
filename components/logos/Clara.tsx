import CLetter from "./CLetter";

function App() {
  return (
    <div className="flex items-center gap-2 p-4">
      {/* Versión básica */}
      <CLetter className="text-blue-500 w-8 h-8" />
      
      {/* Versión animada */}
      <CLetter 
        style={{ color: '#ff6b6b' }}
        width={48}
        height={48}
        className="transition-transform hover:scale-110"
      />
    </div>
  );
}
