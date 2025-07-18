function CardImage() {
  return (
    <div className="card-wrapper hidden lg:block absolute top-40 right-26">
      <div className="card-path"></div>
      <div className="flex flex-col gap-2 card-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default CardImage;
