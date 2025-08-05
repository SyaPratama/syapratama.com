import Faq from "@/components/index/Faq";
import { faqData } from "@/data/dummy/faq";

function FaQ() {
  return (
    <section className="w-full background-grid pt-40 pb-36">
      <div className="content-wrapper">
        <div className="relative z-40">
          <h2 className="text-2xl md:text-4xl font-bold">Question with nobody asked</h2>
          <div className="w-full flex gap-12 flex-col py-12">
            {faqData.map((item, index) => (
              <Faq key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaQ;
