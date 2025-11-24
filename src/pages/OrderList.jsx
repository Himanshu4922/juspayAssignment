import { useEffect, useRef, useState } from "react";
import {
  Plus,
  ListFilter,
  ArrowUpDown,
  Calendar,
  ChevronRight,
  ChevronLeft,
  ClipboardList,
} from "lucide-react";
import IconButton from "../components/IconButton";
import SearchBar from "../components/Searchbar";
import CustomCheckbox from "../components/CustomCheckbox";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [sortAsc, setSortAsc] = useState(true);
  const [statusFilter, setStatusFilter] = useState("All");

  const [tableHeadItems] = useState([
    "Order ID",
    "User",
    "Project",
    "Address",
    "Date",
    "Status",
  ]);

  const orderListInputRef = useRef(null);

  useEffect(() => {
    async function fetchTotalOrders() {
      try {
        const resp = await fetch("/ordersData.json");
        const data = await resp.json();

        setOrders(data.ordersData);
        setFilteredOrders(data.ordersData);
      } catch (error) {
        console.error("Error fetching total orders data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTotalOrders();
  }, []);

  // Handle search + filter
  useEffect(() => {
    const result = orders.filter((order) => {
      const matchesSearch =
        order.user.name.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    setFilteredOrders(result);
    setCurrentPage(1);
  }, [search, statusFilter, orders]);

  // Sorting by user name
  const handleSort = () => {
    const sorted = [...filteredOrders].sort((a, b) => {
      return sortAsc
        ? a.user.name.localeCompare(b.user.name)
        : b.user.name.localeCompare(a.user.name);
    });

    setFilteredOrders(sorted);
    setSortAsc(!sortAsc);
  };

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const paginatedOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const paginatedOrderIds = paginatedOrders.map((o) => o.id);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // Selection handlers
  const isAllSelected =
    paginatedOrderIds.length > 0 &&
    paginatedOrderIds.every((id) => selectedOrderIds.includes(id));

  function handleSelectOrder(id) {
    setSelectedOrderIds((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id]
    );
  }

  function handleSelectAll() {
    if (isAllSelected) {
      // Deselect all on current page
      setSelectedOrderIds((prev) =>
        prev.filter((id) => !paginatedOrderIds.includes(id))
      );
    } else {
      // Select all on current page (add only those not already selected)
      const newSelections = paginatedOrderIds.filter(
        (id) => !selectedOrderIds.includes(id)
      );
      setSelectedOrderIds((prev) => [...prev, ...newSelections]);
    }
  }

  // const statusColors = {
  //   "In Progress": {
  //     statusCircleColor: "#95A4FC",
  //     statusTextColor: "#8A8CD9",
  //   },
  //   Complete: {
  //     statusCircleColor: "#A1E3CB",
  //     statusTextColor: "#4AA785",
  //   },
  //   Pending: {
  //     statusCircleColor: "#B1E3FF",
  //     statusTextColor: "#59A8D4",
  //   },
  //   Approved: {
  //     statusCircleColor: "#FFE999",
  //     statusTextColor: "#FFC555",
  //   },
  //   Rejected: {
  //     statusCircleColor: "#1C1C1C66",
  //     statusTextColor: "#1C1C1C66",
  //   },
  // };
  const statusClasses = {
    "In Progress": {
      circle: "bg-[#95A4FC]",
      text: "text-[#8A8CD9]",
    },
    Complete: {
      circle: "bg-[#A1E3CB]",
      text: "text-[#4AA785]",
    },
    Pending: {
      circle: "bg-[#B1E3FF]",
      text: "text-[#59A8D4]",
    },
    Approved: {
      circle: "bg-[#FFE999]",
      text: "text-[#FFC555]",
    },
    Rejected: {
      circle: "bg-[#1C1C1C66] dark:bg-white/40",
      text: "text-[#1C1C1C66] dark:text-white/40",
    },
  };

  return (
    <main className="h-full bg-white p-4 md:p-7 w-full dark:bg-woodsmoke-950 min-h-screen">
      <h1 className="px-2 py-1 text-sm text-woodsmoke-950 font-semibold dark:text-white">
        Order List
      </h1>

      <div className="flex justify-between items-center sm:mt-4 mt-2 p-2 rounded-lg bg-card-light dark:bg-white/5">
        <div className="flex items-center gap-2">
          <IconButton label="Add order" disabled={true}>
            <Plus className={`text-woodsmoke-950 size-5 dark:text-white`} />
          </IconButton>

          <IconButton
            onClick={() =>
              setStatusFilter((prev) => (prev === "All" ? "Pending" : "All"))
            }
            label="Filter pending"
            disabled={false}
          >
            <ListFilter
              className={`text-woodsmoke-950 size-5 dark:text-white`}
            />
          </IconButton>

          <IconButton onClick={handleSort} label="Sort" disabled={false}>
            <ArrowUpDown
              className={`text-woodsmoke-950 size-5 dark:text-white`}
            />
          </IconButton>
        </div>
        {/* search container */}
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search"
          maxWidth="max-w-40"
          ref={orderListInputRef}
          bgColor={"bg-white"}
          border={"border border-woodsmoke-950/10"}
        />
      </div>

      <div className="w-full overflow-x-auto mt-3 table-scrollbar">
        <table className="w-full min-w-[820px] ">
          <thead className="border-b text-woodsmoke-950/40 text-xs font-normal border-woodsmoke-950/20 dark:text-white/40 dark:border-white/20">
            <tr>
              <th className="px-1 py-2 text-left inline-flex">
                <CustomCheckbox
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  disabled={paginatedOrders.length === 0}
                />
              </th>
              {tableHeadItems.map((tableHeadItem, i) => (
                <th key={i} className="text-left py-2 px-3 font-normal">
                  {tableHeadItem}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedOrders.map((order, index) => {
              const isSelected = selectedOrderIds.includes(order.id);

              return (
                <tr
                  key={order.id}
                  className="border-b last:border-none hover:bg-card-light group border-woodsmoke-950/5 dark:border-white/10 dark:text-white bg-white dark:bg-woodsmoke-950"
                >
                  <td className="w-6 whitespace-nowrap relative bg-white dark:bg-woodsmoke-950 ">
                    <div
                      className={`absolute top-1/2 left-1 -translate-y-1/2 transition-opacity ${
                        isSelected
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      } `}
                    >
                      <CustomCheckbox
                        checked={isSelected}
                        onChange={() => handleSelectOrder(order.id)}
                      />
                    </div>
                  </td>
                  <td className="py-2 px-3 text-xs bg-white dark:bg-woodsmoke-950 ">
                    #{order.id}
                  </td>

                  <td className="py-2 px-3 bg-white dark:bg-woodsmoke-950">
                    <div className="flex items-center gap-2 bg-white dark:bg-woodsmoke-950">
                      <img
                        src={order.user.avatarUrl}
                        alt={order.user.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-xs">{order.user.name}</span>
                    </div>
                  </td>

                  <td className="py-2 px-3 text-xs bg-white dark:bg-woodsmoke-950">
                    {order.project}
                  </td>
                  <td className="py-2 px-3 text-xs bg-white dark:bg-woodsmoke-950">
                    <p className="relative inline-flex">
                      {order.address}
                      <span
                        className={`absolute top-1/2 -right-5 -translate-y-1/2 transition-opacity text-woodsmoke-950 ${"opacity-0 group-hover:opacity-100"}`}
                      >
                        <ClipboardList
                          className={`w-4 h-4 text-woodsmoke-950 dark:text-white`}
                        />
                      </span>
                    </p>
                  </td>
                  <td className="text-xs bg-white dark:bg-woodsmoke-950">
                    <div className="flex py-2 px-3 items-center">
                      <Calendar
                        className={`w-4 h-4 text-woodsmoke-950 dark:text-white`}
                      />
                      <p className="ml-1">{order.date}</p>
                    </div>
                  </td>

                  {/* <td
                    className="py-2 px-3 text-xs "
                    style={{
                      color: statusClasses[order.status]?.text,
                    }}
                  >
                    <span
                      style={{
                        color: statusClasses[order.status]?.circle,
                      }}
                    >
                      ●
                    </span>{" "}
                    {order.status}
                  </td> */}
                  <td
                    className={`py-2 px-3 text-xs bg-white dark:bg-woodsmoke-950 ${
                      statusClasses[order.status]?.text
                    }`}
                  >
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full mr-1 align-middle ${
                        statusClasses[order.status]?.circle
                      }`}
                    ></span>
                    {order.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-3 text-sm">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-2 py-1 disabled:opacity-40"
        >
          <ChevronLeft
            className={`text-woodsmoke-950 w-5 h-5 dark:text-white`}
          />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-2 py-1 rounded-md text-woodsmoke-950 dark:text-white ${
              currentPage === i + 1 ? "bg-woodsmoke-950/5 dark:bg-white/10" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-2 py-1 disabled:opacity-40"
        >
          <ChevronRight
            className={`text-woodsmoke-950 w-5 h-5 dark:text-white`}
          />
        </button>
      </div>
    </main>
  );
}
