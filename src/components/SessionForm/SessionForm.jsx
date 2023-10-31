export default function SessionForm() {
  return (
    <>
    <h1>Session Form Here</h1>
      <div>
        <form autoComplete="off">
          <label htmlFor="">Class Type</label>
          <input type="text" />
          <label htmlFor="">Date</label>
          <input type="date" />
          <label htmlFor="">Technique(s)</label>
          <input type="text" />
          <label htmlFor="">Notes</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
