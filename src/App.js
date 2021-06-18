function App() {
  return (
    <>
      <section className="palabras">
        <ul className="lista-palabras">
          <li>me</li>
          <li data-lenguaje="si">JavaScript</li>
          <li>el</li>
          <li>la</li>
          <li>gusta</li>
          <li>odio</li>
          <li>no</li>
          <li>muy</li>
          <li>y</li>
          <li data-lenguaje="si">Java</li>
          <li>mucho</li>
          <li>de</li>
          <li>poco</li>
          <li>programador</li>
          <li>amigo</li>
          <li>programadora</li>
          <li>amiga</li>
          <li>soy</li>
          <li>también</li>
          <li>pero</li>
          <li>gustan</li>
          <li>gatos</li>
          <li>los</li>
          <li>perros</li>
        </ul>
        <ul className="resultado"></ul>
      </section>
      <section className="crear-palabras">
        <form className="form-palabras">
          <div className="form-grupo">
            <input type="text" placeholder="Nueva palabra" required />
          </div>
          <div className="form-grupo">
            <select required>
              <option value="">Máximo de veces</option>
              <option value="0">Sin límite</option>
              <option value="1">1 vez</option>
              <option value="2">2 veces</option>
              <option value="3">3 veces</option>
            </select>
          </div>
          <div className="form-grupo">
            <label>
              <input type="checkbox" /> Es un lenguaje de programación
            </label>
          </div>
          <div className="form-grupo">
            <button type="submit" disabled>
              Crear
            </button>
          </div>
        </form>
      </section>
      <section className="info">
        <ul>
          <li>
            Nº de palabras <span>15</span>
          </li>
          <li>
            Nº de caracteres <span>74</span>
          </li>
          <li>
            Longitud media <span>5.32</span>
          </li>
          <li>
            Contiene 2 lenguaje/s de programación
            <ul>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
