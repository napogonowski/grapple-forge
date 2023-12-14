import SessionForm from "../../components/SessionForm/SessionForm";
export default function AddSessionPage() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-8">
          Add New Session
        </h1>
        <SessionForm />
      </div>
    </>
  );
}
