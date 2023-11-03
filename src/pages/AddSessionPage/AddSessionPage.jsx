import SessionForm from "../../components/SessionForm/SessionForm";
export default function AddSessionPage() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-4xl font-semibold tracking-tight ">
          Add New Session
        </h1>
        <SessionForm />
      </div>
    </>
  );
}
