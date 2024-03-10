function Question4({imageLink,caption}) {
  return (
        <figure>
        <img className="w-48" src={imageLink} alt=""/>
        <figcaption>{caption}</figcaption>
        </figure>
  );
}

export default Question4;
