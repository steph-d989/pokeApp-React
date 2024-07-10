import React from "react";

const Search = () => {
  return (
    <section className="search-pokemon">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="pokemon">Título</label>
          <input type="text" name="pokemon" onChange={handleChange} />
        </div>
        {
          values.title ?
            <button type="submit">Buscar Pokemon</button> :
            <i>Por favor, ingresa un pokemon</i>
        }

      </form>
      <section>
        {renderItems()}
      </section>
    </section>
  );
};

export default Search;
