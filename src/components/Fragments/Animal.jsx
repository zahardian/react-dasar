const Animal = ({ animals, onHapus }) => {
  return (
    <div>
      {animals.map((animal) => {
        <div key={animal.no}>
          <p>{animal.hewan}</p>
          <p>{animal.suara}</p>
          <button onClick={() => onHapus(animal.no)}>Hapus</button>
        </div>;
      })}
    </div>
  );
};

export default Animal;
