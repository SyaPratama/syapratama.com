import { FaRProject } from "react-icons/fa6";

function ServiceCard({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center justify-center h-70 rounded-2xl py-6 bg-slate-900 border border-slate-400/20">
      <FaRProject className="text-6xl mb-3"/>
      <div className="p-2 text-center">
        <h3 className="text-xl font-semibold mb-2">Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits.</p>
      </div>
    </div>
  );
}

export default ServiceCard;
