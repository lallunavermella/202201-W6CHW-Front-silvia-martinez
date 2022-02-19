const Robot = ({ nombre, imagen, velocidad, resistencia, creacion }) => {
  return (
    <>
      <h2>{nombre}</h2>
      <img src={imagen} alt="imagen robot" />
      <p>Velocidad:{velocidad}</p>
      <p>Resistencia:{resistencia}</p>
      <p>Fecha de creacion:{creacion}</p>
    </>
  );
};

export default Robot;
