import "../styles/CorrectionNote.css";
const CorrectionNote = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="correction-note__container">
        <img src="src/assets/speckable.png" alt="speckable" />
      <h1 className="correction-note__title">Nota korygująca</h1>
      <form className="correction-note__form">
        <div className="correction-note__row">
          <div className="correction-note__field">
            <label className="correction-note__label">
              Numer noty korygującej
            </label>
            <input type="number" />
          </div>
          <div className="correction-note__field">
            <label className="correction-note__label">Data wystawienia</label>
            <input type="date" />
          </div>
        </div>
        <div className="correction-note__row">
          <div className="correction-note__field">
            <label className="correction-note__label">Wystawca</label>
            <input type="text" placeholder="Nazwa firmy" />
            <input type="text" placeholder="Adres" />
            <input type="text" placeholder="NIP" />
          </div>
          <div className="correction-note__field">
            <label className="correction-note__label">Adresat</label>
            <input type="text" value="SPECKABLE sp.z.o." disabled />
            <input
              type="text"
              value="ul. Macieja Palacza 113a, 60-273 Poznań"
              placeholder="Adres"
              disabled
            />
            <input type="text" value="7792537830" placeholder="NIP" disabled />
          </div>
        </div>
        <div className="correction-note__row"></div>
        <div className="correction-note__row">
          <div className="correction-note__field">
            <div className="correction-note__field">
              <label className="correction-note__label">
                DANE ZAWARTE W FAKTURZE KTÓREJ DOTYCZY NOTA KORYGUJĄCA
              </label>
              <input
                type="text"
                placeholder="Numer faktury / faktury korygującej"
              />
              <input type="date" placeholder="Data wystawienia faktury" />
              <input
                type="text"
                placeholder="Data dokonania lub zakończenia dostawy towarów lub wykonania usługi (zaliczki)*)"
              />
            </div>
            <label className="correction-note__label">Sprzedawca</label>
            <input type="text" value="SPECKABLE sp.z.o." disabled />
            <input
              type="text"
              value="ul. Macieja Palacza 113a, 60-273 Poznań"
              placeholder="Adres"
              disabled
            />
            <input type="text" value="7792537830" placeholder="NIP" disabled />
          </div>
          <div className="correction-note__field">
            <label className="correction-note__label">Treść Korygowana</label>
            <input/>
          </div>
        </div>
        <div className="correction-note__row">
          <div className="correction-note__field">
            <label className="correction-note__label">Nabywca</label>
            <input type="text" placeholder="Nazwa firmy" />
            <input type="text" placeholder="Adres" />
            <input type="text" placeholder="NIP" />
          </div>
          <div className="correction-note__field">
            <label className="correction-note__label">Treść Prawidłowa</label>
            <input/>
          </div>
        </div>
        <div className="correction-note__row">
          <div className="correction-note__field">
            <label className="correction-note__label">
              Akceptuje treści zawarte w nocie korygującej
            </label>
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="text" placeholder="Podpis:" />
          </div>
          <div className="correction-note__field">
            <label className="correction-note__label">
              Osoba uprawniona do wystawienia noty korygującej
            </label>
            <input type="text" placeholder="Imię i nazwisko" />
            <input type="text" placeholder="Podpis:" />
          </div>
        </div>
        <button onClick={handlePrint}>Drukuj</button>

      </form>
    </div>
  );
};

export default CorrectionNote;
