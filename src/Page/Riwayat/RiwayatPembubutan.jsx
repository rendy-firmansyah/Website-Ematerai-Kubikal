import Confused from "./Confused.png";

export default function RiwayatPembubutan() {
  return (
    <div className="card">
      <div className="card-body flex flex-col items-center justify-center text-center">
        <div className="card-img flex flex-col items-center justify-center">
          <img
            className="object-center h-52 w-52"
            src={Confused}
            alt="Confused"
          />
          <h5 className="mt-4 text-xl font-semibold text-gray-800">
            Belum ada riwayat pembubuhan
          </h5>
        </div>
      </div>
    </div>
  );
}
