import ServiceCard from "@/components/index/ServiceCard";

function Services() {
  return (
    <section className="w-full background-grid pb-36">
      <div className="content-wrapper">
        <div className="relative z-40">
          <h2 className="text-4xl font-bold">Services</h2>
          <div className="w-full py-12 inline-grid grid-cols-4 gap-8">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
