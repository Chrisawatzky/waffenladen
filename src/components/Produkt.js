function Produkt({ Name, Preis, imageURL, Anzahl }) {
    return (
      <div>
        
        <h2>Name: {Name}</h2>
        <h2>Preis: {Preis} Unionskronen</h2>
        <img
          src={imageURL}
          alt="alternativtext"
          style={{ width: "300px", height: "auto" }}
        />
        <h2>Noch verfügbar: {Anzahl}</h2>
        <div style={{ border: "10px red" }} />
        <div style={{ border: "10px gold" }} />
      </div>
    );
  }

export default Produkt