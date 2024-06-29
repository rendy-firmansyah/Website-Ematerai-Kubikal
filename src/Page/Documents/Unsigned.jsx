import { useState, useMemo } from "react";
import DataTable from "../../component/Dashboard/DataTable";
import Modal from "../../component/Dashboard/Modal";
import EditDocumentForm from "../../component/Dashboard/EditDocumentForm";

export default function Unsigned() {
  const initialData = useMemo(
    () => [
      {
        id: 1,
        title: "Project Alpha Proposal",
        owner: "Dr. Emily Carter",
        date: "12/2/2023",
      },
      {
        id: 2,
        title: "Budget Analysis Report",
        owner: "Mr. John Smith",
        date: "5/3/2022",
      },
      {
        id: 3,
        title: "Employee Handbook",
        owner: "HR Department",
        date: "18/4/2021",
      },
      {
        id: 4,
        title: "Annual Sales Review",
        owner: "Ms. Lisa Johnson",
        date: "10/5/2022",
      },
      {
        id: 5,
        title: "Marketing Strategy 2024",
        owner: "Marketing Team",
        date: "7/6/2023",
      },
      {
        id: 6,
        title: "Technical Specification Document",
        owner: "Engineering Dept",
        date: "25/7/2021",
      },
      {
        id: 7,
        title: "Legal Compliance Report",
        owner: "Legal Team",
        date: "30/8/2022",
      },
      {
        id: 8,
        title: "Customer Feedback Summary",
        owner: "Support Team",
        date: "14/9/2021",
      },
      {
        id: 9,
        title: "Product Launch Plan",
        owner: "Product Management",
        date: "3/10/2023",
      },
      {
        id: 10,
        title: "Quarterly Financial Statements",
        owner: "Finance Department",
        date: "20/11/2022",
      },
      {
        id: 11,
        title: "Dokumen Negara",
        owner: "Soekarno",
        date: "20/1/2021",
      },
      {
        id: 12,
        title: "Surat Keputusan",
        owner: "Soeharto",
        date: "15/2/2021",
      },
      {
        id: 13,
        title: "Rencana Pembangunan",
        owner: "Habibie",
        date: "10/3/2021",
      },
      {
        id: 14,
        title: "Peraturan Pemerintah",
        owner: "Megawati",
        date: "5/4/2021",
      },
      {
        id: 15,
        title: "Laporan Tahunan",
        owner: "Gus Dur",
        date: "25/5/2021",
      },
      {
        id: 16,
        title: "Dokumen Kerjasama",
        owner: "SBY",
        date: "30/6/2021",
      },
      {
        id: 17,
        title: "Laporan Keuangan",
        owner: "Jokowi",
        date: "15/7/2021",
      },
      {
        id: 18,
        title: "Rencana Anggaran",
        owner: "Jokowi",
        date: "1/8/2021",
      },
      {
        id: 19,
        title: "Nota Kesepahaman",
        owner: "SBY",
        date: "10/9/2021",
      },
      {
        id: 20,
        title: "Strategi Nasional",
        owner: "Habibie",
        date: "20/10/2021",
      },
    ],
    []
  );

  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const openModal = (row) => {
    setEditingRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRow(null);
  };

  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");

    const dayFormatted = parseInt(day, 10);
    const monthFormatted = parseInt(month, 10);
    return `${dayFormatted}/${monthFormatted}/${year}`;
  };

  const handleSave = (editedData) => {
    editedData.date = formatDate(editedData.date);

    setData((prev) =>
      prev.map((item) =>
        item.id === editedData.id ? { ...item, ...editedData } : item
      )
    );

    closeModal();
  };

  const columns = useMemo(
    () => [
      {
        header: "#",
        accessorKey: "id",
        enableColumnFilter: false,
      },
      {
        header: "Title",
        accessorKey: "title",
      },
      {
        header: "Owner",
        accessorKey: "owner",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Actions",
        enableColumnFilter: false,
        cell: ({ row }) => (
          <div className="flex items-center space-x-3.5 justify-center">
            <button
              className="hover:text-orange-500"
              onClick={() => openModal(row.original)}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
              </svg>
            </button>
            <button className="hover:text-blue-500">
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                  fill=""
                />
                <path
                  d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                  fill=""
                />
              </svg>
            </button>
            <button className="hover:text-red-600">
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                  fill=""
                />
                <path
                  d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                  fill=""
                />
                <path
                  d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                  fill=""
                />
                <path
                  d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="rounded-xl bg-white overflow-hidden shadow-md">
      <div className="p-4 bg-gradient-to-tr from-[#004DA3] to-[#1CC8EE] text-white font-bold text-xl lg:text-2xl">
        Unsigned Documents
      </div>
      <DataTable data={data} columns={columns} />
      <Modal isOpen={isModalOpen} onClose={closeModal} title={"Edit Document"}>
        <EditDocumentForm
          rowData={editingRow}
          onSave={handleSave}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}
