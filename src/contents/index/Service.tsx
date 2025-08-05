import Card from "./layout/Card";

function Service() {
  return (
    <section className="w-full background-grid pb-36">
      <div className="content-wrapper">
        <div className="relative z-40 px-4">
          <h2 className="text-2xl md:text-4xl font-bold">Services</h2>
          <Card/>
        </div>
      </div>
    </section>
  );
}

export default Service;
